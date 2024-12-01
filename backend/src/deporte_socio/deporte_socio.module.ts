import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeporteSocioService } from './deporte_socio.service';
import { DeporteSocioController } from './deporte_socio.controller';
import { DeporteSocio } from './deporte_socio.entity';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [TypeOrmModule.forFeature([DeporteSocio]), SupabaseAuthGuard],
  controllers: [DeporteSocioController],
  providers: [DeporteSocioService],
})
export class DeporteSocioModule {}
