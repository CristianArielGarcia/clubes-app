import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseAuthStrategy } from 'src/passport-supabase.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'supabase-auth' }),
    ConfigModule,
  ],
  //imports: [ConfigModule],
  providers: [
    {
      provide: SupabaseAuthStrategy,
      useFactory: (configService: ConfigService) => {
        return new SupabaseAuthStrategy({
          supabaseUrl: configService.get<string>('SUPABASE_URL'),
          supabaseKey: configService.get<string>('SUPABASE_KEY'),
          supabaseOptions: {},
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [],
})
export class AuthModule {}
