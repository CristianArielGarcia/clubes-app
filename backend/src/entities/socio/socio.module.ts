import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socio } from './socio.entity';
import { SocioService } from './socio.service';
import { SocioController } from './socio.controller';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Module({
  imports: [TypeOrmModule.forFeature([Socio])],
  controllers: [SocioController],
  providers: [SocioService, SupabaseAuthGuard],
  exports: [SocioService],
})
export class SocioModule {}
