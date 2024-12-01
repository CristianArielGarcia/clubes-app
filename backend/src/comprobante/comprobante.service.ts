import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprobante } from './comprobante.entity';
import { CreateComprobanteDto, UpdateComprobanteDto } from './comprobante.dto';

@Injectable()
export class ComprobanteService {
  constructor(
    @InjectRepository(Comprobante)
    private readonly comprobanteRepository: Repository<Comprobante>,
  ) {}

  async findAll(): Promise<Comprobante[]> {
    return this.comprobanteRepository.find();
  }

  async findOne(id: number): Promise<Comprobante> {
    const comprobante = await this.comprobanteRepository.findOne({ where: { id } });
    if (!comprobante) {
      throw new NotFoundException(`Comprobante with ID ${id} not found`);
    }
    return this.comprobanteRepository.findOne({ where: { id } });
  }

  async create(
    createComprobanteDto: CreateComprobanteDto,
  ): Promise<Comprobante> {
    const comprobante = this.comprobanteRepository.create(createComprobanteDto);
    return this.comprobanteRepository.save(comprobante);
  }

  async update(
    id: number,
    updateComprobanteDto: UpdateComprobanteDto,
  ): Promise<Comprobante> {
    await this.comprobanteRepository.update(id, updateComprobanteDto);
    return this.comprobanteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.comprobanteRepository.delete(id);
  }
}
