import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TipoItemService } from './tipo_item.service';
import { CreateTipoItemDto, UpdateTipoItemDto } from './tipo_item.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('tipo-items')
@ApiTags('TipoItem')
export class TipoItemController {
  constructor(private readonly tipoItemService: TipoItemService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todos los tipos de items' })
  findAll() {
    return this.tipoItemService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener un tipo de item por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de item a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.tipoItemService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear un nuevo tipo de item' })
  @ApiBody({
    description: 'Datos para crear un nuevo tipo de item',
    type: CreateTipoItemDto,
    examples: {
      'Ejemplo de TipoItem': {
        value: {
          descripcion: 'Item tipo A',
          comprobante_item_id: 1,
        },
      },
    },
  })
  create(@Body() createTipoItemDto: CreateTipoItemDto) {
    return this.tipoItemService.create(createTipoItemDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar un tipo de item existente' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de item a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar un tipo de item',
    examples: {
      'Ejemplo de TipoItem Actualizado': {
        value: {
          descripcion: 'Item tipo B',
          comprobante_item_id: 2,
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateTipoItemDto: UpdateTipoItemDto,
  ) {
    return this.tipoItemService.update(id, updateTipoItemDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar un tipo de item por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de item a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.tipoItemService.remove(id);
  }
}
