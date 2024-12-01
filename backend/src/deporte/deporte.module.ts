import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeporteService } from './deporte.service';
import { DeporteController } from './deporte.controller';
import { Deporte } from './deporte.entity';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [TypeOrmModule.forFeature([Deporte]), SupabaseAuthGuard],
  controllers: [DeporteController],
  providers: [DeporteService],
})
export class DeporteModule {}
