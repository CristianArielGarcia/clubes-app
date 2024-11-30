import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoItem } from './tipo_item.entity';
import { CreateTipoItemDto, UpdateTipoItemDto } from './tipo_item.dto';

@Injectable()
export class TipoItemService {
  constructor(
    @InjectRepository(TipoItem)
    private readonly tipoItemRepository: Repository<TipoItem>,
  ) {}

  async findAll(): Promise<TipoItem[]> {
    return this.tipoItemRepository.find();
  }

  async findOne(id: number): Promise<TipoItem> {
    return this.tipoItemRepository.findOne({ where: { id } });
  }

  async create(createTipoItemDto: CreateTipoItemDto): Promise<TipoItem> {
    const tipoItem = this.tipoItemRepository.create(createTipoItemDto);
    return this.tipoItemRepository.save(tipoItem);
  }

  async update(
    id: number,
    updateTipoItemDto: UpdateTipoItemDto,
  ): Promise<TipoItem> {
    await this.tipoItemRepository.update(id, updateTipoItemDto);
    return this.tipoItemRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tipoItemRepository.delete(id);
  }
}
