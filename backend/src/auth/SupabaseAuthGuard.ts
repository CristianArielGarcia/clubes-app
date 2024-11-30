import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createClient } from '@supabase/supabase-js';


export class SupabaseAuthGuard implements CanActivate {
  private supabase = createClient(
    process.env.SUPABASE_URL_PUBLIC,
    process.env.SUPABASE_ANON_KEY,
  );

  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    }

    console.log(process.env.SUPABASE_JWT_SECRET);
    const token = authHeader.split(' ')[1]; 

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.SUPABASE_JWT_SECRET,
        algorithms: ['HS256'],
      });
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async login(email: string, password: string): Promise<string> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error('Authentication failed: ' + error.message);
    }

    return data?.session?.access_token;
  }
}
