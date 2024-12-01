import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwtService from 'jsonwebtoken';
import { createClient  } from '@supabase/supabase-js';

export class SupabaseAuthGuard implements CanActivate {
  private supabase = createClient(
    process.env.SUPABASE_URL_PUBLIC,
    process.env.SUPABASE_ANON_KEY,
  );

  constructor() {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = jwtService.verify(token, process.env.SUPABASE_JWT_SECRET);
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException(`Invalid token -  ${error}`);
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
