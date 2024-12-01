import { Module } from '@nestjs/common';
import { SupabaseAuthGuard } from './SupabaseAuthGuard';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  providers: [SupabaseAuthGuard],
  exports: [SupabaseAuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
