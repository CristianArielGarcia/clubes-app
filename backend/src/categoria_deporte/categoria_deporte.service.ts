import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaDeporte } from './categoria_deporte.entity';
import {
  CreateCategoriaDeporteDto,
  UpdateCategoriaDeporteDto,
} from './categoria_deporte.dto';

@Injectable()
export class CategoriaDeporteService {
  constructor(
    @InjectRepository(CategoriaDeporte)
    private readonly categoriaDeporteRepository: Repository<CategoriaDeporte>,
  ) {}

  async findAll(): Promise<CategoriaDeporte[]> {
    return this.categoriaDeporteRepository.find();
  }

  async findOne(id: number): Promise<CategoriaDeporte> {
    return this.categoriaDeporteRepository.findOne({ where: { id } });
  }

  async create(
    createCategoriaDeporteDto: CreateCategoriaDeporteDto,
  ): Promise<CategoriaDeporte> {
    const categoriaDeporte = this.categoriaDeporteRepository.create(
      createCategoriaDeporteDto,
    );
    return this.categoriaDeporteRepository.save(categoriaDeporte);
  }

  async update(
    id: number,
    updateCategoriaDeporteDto: UpdateCategoriaDeporteDto,
  ): Promise<CategoriaDeporte> {
    await this.categoriaDeporteRepository.update(id, updateCategoriaDeporteDto);
    return this.categoriaDeporteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.categoriaDeporteRepository.delete(id);
  }
}
