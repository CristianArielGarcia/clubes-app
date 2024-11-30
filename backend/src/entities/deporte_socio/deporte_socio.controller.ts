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
import { DeporteSocioService } from './deporte_socio.service';
import {
  CreateDeporteSocioDto,
  UpdateDeporteSocioDto,
} from './deporte_socio.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('deporte-socios')
@ApiTags('DeporteSocio')
export class DeporteSocioController {
  constructor(private readonly deporteSocioService: DeporteSocioService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todas las relaciones de deporte-socio' })
  findAll() {
    return this.deporteSocioService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener una relación de deporte-socio por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la relación de deporte-socio a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.deporteSocioService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear una nueva relación de deporte-socio' })
  @ApiBody({
    description: 'Datos para crear una nueva relación de deporte-socio',
    type: CreateDeporteSocioDto,
    examples: {
      'Ejemplo de DeporteSocio': {
        value: {
          socio_id: 1,
          categoria_deporte_id: 2,
          activo: true,
        },
      },
    },
  })
  create(@Body() createDeporteSocioDto: CreateDeporteSocioDto) {
    return this.deporteSocioService.create(createDeporteSocioDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({
    summary: 'Actualizar una relación de deporte-socio existente',
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la relación de deporte-socio a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar una relación de deporte-socio',
    examples: {
      'Ejemplo de DeporteSocio Actualizado': {
        value: {
          socio_id: 1,
          categoria_deporte_id: 3,
          activo: true,
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateDeporteSocioDto: UpdateDeporteSocioDto,
  ) {
    return this.deporteSocioService.update(id, updateDeporteSocioDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar una relación de deporte-socio por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la relación de deporte-socio a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.deporteSocioService.remove(id);
  }
}
