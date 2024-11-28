import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SupabaseAuthStrategy } from 'src/passport-supabase.strategy';

@Module({
  // imports: [PassportModule.register({ defaultStrategy: 'supabase-auth' }), ConfigModule],
  imports: [ConfigModule],
  providers: [
    {
      provide: SupabaseAuthStrategy,
      useFactory: (configService: ConfigService) => {
        return new SupabaseAuthStrategy({
          supabaseUrl: configService.get<string>('SUPABASE_URL'),
          supabaseKey: configService.get<string>('SUPABASE_KEY'),
          extractor: (req) => req.headers.authorization?.split(' ')[1],
          supabaseOptions: {},
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [],
})
export class AuthModule {}
