import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeporteSocio } from './deporte_socio.entity';
import {
  CreateDeporteSocioDto,
  UpdateDeporteSocioDto,
} from './deporte_socio.dto';

@Injectable()
export class DeporteSocioService {
  constructor(
    @InjectRepository(DeporteSocio)
    private readonly deporteSocioRepository: Repository<DeporteSocio>,
  ) {}

  async findAll(): Promise<DeporteSocio[]> {
    return this.deporteSocioRepository.find({
      relations: ['socio', 'categoriaDeporte'],
    });
  }

  async findOne(id: number): Promise<DeporteSocio> {
    return this.deporteSocioRepository.findOne({
      where: { id },
      relations: ['socio', 'categoriaDeporte'],
    });
  }

  async create(
    createDeporteSocioDto: CreateDeporteSocioDto,
  ): Promise<DeporteSocio> {
    const deporteSocio = this.deporteSocioRepository.create(
      createDeporteSocioDto,
    );
    return this.deporteSocioRepository.save(deporteSocio);
  }

  async update(
    id: number,
    updateDeporteSocioDto: UpdateDeporteSocioDto,
  ): Promise<DeporteSocio> {
    await this.deporteSocioRepository.update(id, updateDeporteSocioDto);
    return this.deporteSocioRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.deporteSocioRepository.delete(id);
  }
}
