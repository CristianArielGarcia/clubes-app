import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoComprobante } from './tipo_comprobante.entity';
import { TipoComprobanteDto } from './tipo_comprobante.dto';

@Injectable()
export class TipoComprobanteService {
  constructor(
    @InjectRepository(TipoComprobante)
    private tipoComprobanteRepository: Repository<TipoComprobante>,
  ) {}

  async findAll(): Promise<TipoComprobante[]> {
    return this.tipoComprobanteRepository.find();
  }

  async findOne(id: number): Promise<TipoComprobante> {
    return this.tipoComprobanteRepository.findOne({ where: { id } });
  }

  async create(
    tipoComprobanteDto: TipoComprobanteDto,
  ): Promise<TipoComprobante> {
    const tipoComprobante =
      this.tipoComprobanteRepository.create(tipoComprobanteDto);
    return this.tipoComprobanteRepository.save(tipoComprobante);
  }

  async update(
    id: number,
    tipoComprobanteDto: TipoComprobanteDto,
  ): Promise<TipoComprobante> {
    await this.tipoComprobanteRepository.update(id, tipoComprobanteDto);
    return this.tipoComprobanteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tipoComprobanteRepository.delete(id);
  }
}
