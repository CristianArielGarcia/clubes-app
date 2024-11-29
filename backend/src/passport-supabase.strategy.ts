import { Request } from 'express';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-strategy';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_AUTH } from './constants';
import { SupabaseAuthStrategyOptions } from './interface/options.interface';
import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException } from '@nestjs/common';

export class SupabaseAuthStrategy extends PassportStrategy(
  Strategy,
  'supabase-auth',
) {
  readonly name = SUPABASE_AUTH;
  private supabase: SupabaseClient;
  success: (user: any, info: any) => void;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fail: Strategy['fail'];

  constructor(options: SupabaseAuthStrategyOptions) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: options.supabaseKey,
    });
    this.supabase = createClient(
      options.supabaseUrl,
      options.supabaseKey,
      (options.supabaseOptions = {}),
    );
  }

  // Explicitly override the authenticate method
  authenticate(req: Request): void {
    // Extract the JWT token from the request
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token) {
      return this.fail(new UnauthorizedException(), 401); // Fail if the token is not found
    }

    // Use the Supabase client to verify the user
    this.supabase.auth
      .getUser(token)
      .then(({ data: { user } }) => {
        if (user) {
          return this.success(user, {}); // If the user is valid, authenticate them
        }
        return this.fail(new UnauthorizedException(), 401); // Fail if user is not found
      })
      .catch((err) => {
        return this.fail(new UnauthorizedException(err.message), 401); // Fail if any error occurs during user verification
      });
  }
}
