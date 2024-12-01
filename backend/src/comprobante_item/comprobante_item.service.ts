import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComprobanteItem } from './comprobante_item.entity';
import {
  CreateComprobanteItemDto,
  UpdateComprobanteItemDto,
} from './comprobante_item_dto';

@Injectable()
export class ComprobanteItemService {
  constructor(
    @InjectRepository(ComprobanteItem)
    private readonly comprobanteItemRepository: Repository<ComprobanteItem>,
  ) {}

  async findAll(): Promise<ComprobanteItem[]> {
    return this.comprobanteItemRepository.find();
  }

  async findOne(id: number): Promise<ComprobanteItem> {
    return this.comprobanteItemRepository.findOne({ where: { id } });
  }

  async create(
    createComprobanteItemDto: CreateComprobanteItemDto,
  ): Promise<ComprobanteItem> {
    const comprobanteItem = this.comprobanteItemRepository.create(
      createComprobanteItemDto,
    );
    return this.comprobanteItemRepository.save(comprobanteItem);
  }

  async update(
    id: number,
    updateComprobanteItemDto: UpdateComprobanteItemDto,
  ): Promise<ComprobanteItem> {
    await this.comprobanteItemRepository.update(id, updateComprobanteItemDto);
    return this.comprobanteItemRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.comprobanteItemRepository.delete(id);
  }
}
