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
import { TipoComprobanteService } from './tipo_comprobante.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';
import { TipoComprobanteDto } from './tipo_comprobante.dto';

@Controller('tipo-comprobantes')
@ApiTags('TipoComprobante')
export class TipoComprobanteController {
  constructor(
    private readonly tipoComprobanteService: TipoComprobanteService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todos los tipos de comprobantes' })
  findAll() {
    return this.tipoComprobanteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener un tipo de comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de comprobante a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.tipoComprobanteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear un nuevo tipo de comprobante' })
  @ApiBody({
    description: 'Datos para crear un nuevo tipo de comprobante',
    type: TipoComprobanteDto,
    examples: {
      'Ejemplo de TipoComprobante': {
        value: {
          descripcion: 'Factura A',
        },
      },
    },
  })
  create(@Body() createTipoComprobanteDto: TipoComprobanteDto) {
    return this.tipoComprobanteService.create(createTipoComprobanteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar un tipo de comprobante existente' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de comprobante a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar un tipo de comprobante',
    examples: {
      'Ejemplo de TipoComprobante Actualizado': {
        value: {
          descripcion: 'Factura B',
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateTipoComprobanteDto: TipoComprobanteDto,
  ) {
    return this.tipoComprobanteService.update(id, updateTipoComprobanteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar un tipo de comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del tipo de comprobante a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.tipoComprobanteService.remove(id);
  }
}
