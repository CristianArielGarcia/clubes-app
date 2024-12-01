import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deporte } from './deporte.entity';
import { CreateDeporteDto, UpdateDeporteDto } from './deporte.dto';

@Injectable()
export class DeporteService {
  constructor(
    @InjectRepository(Deporte)
    private readonly deporteRepository: Repository<Deporte>,
  ) {}

  async findAll(): Promise<Deporte[]> {
    return this.deporteRepository.find();
  }

  async findOne(id: number): Promise<Deporte> {
    return this.deporteRepository.findOne({ where: { id } });
  }

  async create(createDeporteDto: CreateDeporteDto): Promise<Deporte> {
    const deporte = this.deporteRepository.create(createDeporteDto);
    return this.deporteRepository.save(deporte);
  }

  async update(
    id: number,
    updateDeporteDto: UpdateDeporteDto,
  ): Promise<Deporte> {
    await this.deporteRepository.update(id, updateDeporteDto);
    return this.deporteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.deporteRepository.delete(id);
  }
}
