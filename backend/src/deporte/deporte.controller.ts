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
import { DeporteService } from './deporte.service';
import { CreateDeporteDto, UpdateDeporteDto } from './deporte.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('deportes')
@ApiTags('Deporte')
export class DeporteController {
  constructor(private readonly deporteService: DeporteService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todos los deportes' })
  findAll() {
    return this.deporteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener un deporte por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del deporte a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.deporteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear un nuevo deporte' })
  @ApiBody({
    description: 'Datos para crear un nuevo deporte',
    type: CreateDeporteDto,
    examples: {
      'Ejemplo de Deporte': {
        value: {
          nombre: 'Fútbol',
          activo: true,
        },
      },
    },
  })
  create(@Body() createDeporteDto: CreateDeporteDto) {
    return this.deporteService.create(createDeporteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar un deporte existente' })
  @ApiParam({
    name: 'id',
    description: 'ID del deporte a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar un deporte',
    examples: {
      'Ejemplo de Deporte Actualizado': {
        value: {
          nombre: 'Fútbol Sala',
          activo: true,
        },
      },
    },
  })
  update(@Param('id') id: number, @Body() updateDeporteDto: UpdateDeporteDto) {
    return this.deporteService.update(id, updateDeporteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar un deporte por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID del deporte a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.deporteService.remove(id);
  }
}
