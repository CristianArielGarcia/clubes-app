import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SupabaseAuthGuard } from './SupabaseAuthGuard';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SUPABASE_JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [SupabaseAuthGuard],
  exports: [SupabaseAuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
