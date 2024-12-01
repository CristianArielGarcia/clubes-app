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
import { ComprobanteItemService } from './comprobante_item.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';
import {
  CreateComprobanteItemDto,
  UpdateComprobanteItemDto,
} from './comprobante_item_dto';

@Controller('comprobante-items')
@ApiTags('ComprobanteItem')
export class ComprobanteItemController {
  constructor(
    private readonly comprobanteItemService: ComprobanteItemService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todos los items de los comprobantes' })
  findAll() {
    return this.comprobanteItemService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener un item de comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del item de comprobante a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.comprobanteItemService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear un nuevo item de comprobante' })
  @ApiBody({
    description: 'Datos para crear un nuevo item de comprobante',
    type: CreateComprobanteItemDto,
    examples: {
      'Ejemplo de ComprobanteItem': {
        value: {
          comprobante_id: 1,
          descripcion: 'Item A',
          total: 100.0,
          cantidad: 1,
          activo: true,
        },
      },
    },
  })
  create(@Body() createComprobanteItemDto: CreateComprobanteItemDto) {
    return this.comprobanteItemService.create(createComprobanteItemDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar un item de comprobante existente' })
  @ApiParam({
    name: 'id',
    description: 'ID del item de comprobante a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar un item de comprobante',
    examples: {
      'Ejemplo de ComprobanteItem Actualizado': {
        value: {
          comprobante_id: 1,
          descripcion: 'Item B',
          total: 150.0,
          cantidad: 2,
          activo: true,
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateComprobanteItemDto: UpdateComprobanteItemDto,
  ) {
    return this.comprobanteItemService.update(id, updateComprobanteItemDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar un item de comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del item de comprobante a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.comprobanteItemService.remove(id);
  }
}
