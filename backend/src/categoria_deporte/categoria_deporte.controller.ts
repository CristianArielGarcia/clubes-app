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
import { CategoriaDeporteService } from './categoria_deporte.service';
import {
  CreateCategoriaDeporteDto,
  UpdateCategoriaDeporteDto,
} from './categoria_deporte.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('categoria-deportes')
@ApiTags('CategoriaDeporte')
export class CategoriaDeporteController {
  constructor(
    private readonly categoriaDeporteService: CategoriaDeporteService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todas las categorías de deporte' })
  findAll() {
    return this.categoriaDeporteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener una categoría de deporte por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría de deporte a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.categoriaDeporteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear una nueva categoría de deporte' })
  @ApiBody({
    description: 'Datos para crear una nueva categoría de deporte',
    type: CreateCategoriaDeporteDto,
    examples: {
      'Ejemplo de CategoriaDeporte': {
        value: {
          deporte_id: 1,
          categoria_id: 2,
          activo: true,
        },
      },
    },
  })
  create(@Body() createCategoriaDeporteDto: CreateCategoriaDeporteDto) {
    return this.categoriaDeporteService.create(createCategoriaDeporteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar una categoría de deporte existente' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría de deporte a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar una categoría de deporte',
    examples: {
      'Ejemplo de CategoriaDeporte Actualizado': {
        value: {
          deporte_id: 1,
          categoria_id: 3,
          activo: true,
        },
      },
    },
  })
  update(
    @Param('id') id: number,
    @Body() updateCategoriaDeporteDto: UpdateCategoriaDeporteDto,
  ) {
    return this.categoriaDeporteService.update(id, updateCategoriaDeporteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar una categoría de deporte por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría de deporte a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.categoriaDeporteService.remove(id);
  }
}
