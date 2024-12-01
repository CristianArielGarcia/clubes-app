import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socio } from './socio.entity';
import { CreateSocioDto, UpdateSocioDto } from './socio.dto';

@Injectable()
export class SocioService {
  constructor(
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
  ) {}

  async findAll(): Promise<Socio[]> {
    return this.socioRepository.find();
  }

  async findOne(id: number): Promise<Socio> {
    const socio = await this.socioRepository.findOne({ where: { id } });
    if (!socio) {
      throw new NotFoundException(`Socio with ID ${id} not found`);
    }
    return socio;
  }

  async create(createSocioDto: CreateSocioDto): Promise<Socio> {
    const socio = this.socioRepository.create(createSocioDto);
    return this.socioRepository.save(socio);
  }

  async update(id: number, updateSocioDto: UpdateSocioDto): Promise<Socio> {
    const socio = await this.findOne(id);
    Object.assign(socio, updateSocioDto);
    return this.socioRepository.save(socio);
  }

  async remove(id: number): Promise<void> {
    const socio = await this.findOne(id);
    await this.socioRepository.remove(socio);
  }
}
