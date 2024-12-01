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
import { ComprobanteService } from './comprobante.service';
import { CreateComprobanteDto, UpdateComprobanteDto } from './comprobante.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Controller('comprobantes')
@ApiTags('Comprobante')
export class ComprobanteController {
  constructor(private readonly comprobanteService: ComprobanteService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todos los comprobantes' })
  findAll() {
    return this.comprobanteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener un comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del comprobante a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.comprobanteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear un nuevo comprobante' })
  @ApiBody({
    description: 'Datos para crear un nuevo comprobante',
    type: CreateComprobanteDto,
    examples: {
      'Ejemplo de Comprobante': {
        value: {
          observacion: 'Factura del mes',
          nro_comprobante: 123456,
          fecha_emision: '2024-11-30T12:00:00',
          total: 200.5,
          tipo_comprobante_id: 1,
          socio_id: 1,
        },
      },
    },
  })
  create(@Body() createComprobanteDto: CreateComprobanteDto) {
    return this.comprobanteService.create(createComprobanteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar un comprobante existente' })
  @ApiParam({
    name: 'id',
    description: 'ID del comprobante a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar un comprobante',
    examples: {
      'Ejemplo de Comprobante Actualizado': {
        value: {
          observacion: 'Factura actualizada',
          nro_comprobante: 123457,
          fecha_emision: '2024-11-30T12:00:00',
          total: 250.75,
          tipo_comprobante_id: 1,
          socio_id: 2,
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateComprobanteDto: UpdateComprobanteDto,
  ) {
    return this.comprobanteService.update(id, updateComprobanteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar un comprobante por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del comprobante a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.comprobanteService.remove(id);
  }
}
