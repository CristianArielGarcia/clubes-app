import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaDeporteService } from './categoria_deporte.service';
import { CategoriaDeporteController } from './categoria_deporte.controller';
import { CategoriaDeporte } from './categoria_deporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaDeporte])],
  controllers: [CategoriaDeporteController],
  providers: [CategoriaDeporteService],
})
export class CategoriaDeporteModule {}
