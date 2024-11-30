import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoItemService } from './tipo_item.service';
import { CreateTipoItemDto, UpdateTipoItemDto } from './tipo_item.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('tipo_item')
@ApiTags('TipoItem')
export class TipoItemController {
  constructor(private readonly tipoItemService: TipoItemService) {}

  @Get()
  @ApiBearerAuth('access-token')
  findAll() {
    return this.tipoItemService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: number) {
    return this.tipoItemService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  create(@Body() createTipoItemDto: CreateTipoItemDto) {
    return this.tipoItemService.create(createTipoItemDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  update(
    @Param('id') id: number,
    @Body() updateTipoItemDto: UpdateTipoItemDto,
  ) {
    return this.tipoItemService.update(id, updateTipoItemDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: number) {
    return this.tipoItemService.remove(id);
  }
}
