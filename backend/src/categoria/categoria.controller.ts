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
import { CategoriaService } from './categoria.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';
import { CreateCategoriaDto, UpdateCategoriaDto } from './categoria.dto';

@Controller('categorias')
@ApiTags('Categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Obtener una categoría por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría a buscar',
    type: 'integer',
  })
  findOne(@Param('id') id: number) {
    return this.categoriaService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiBody({
    description: 'Datos para crear una nueva categoría',
    type: CreateCategoriaDto,
    examples: {
      'Ejemplo de Categoria': {
        value: {
          descripcion: 'Sub 17',
          activo: true,
        },
      },
    },
  })
  create(@Body() categoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(categoriaDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Actualizar una categoría existente' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría a actualizar',
    type: 'integer',
  })
  @ApiBody({
    description: 'Datos para actualizar una categoría',
    examples: {
      ejemplo: {
        value: {
          descripcion: 'Primera División',
          activo: false,
        },
      },
    },
  })
  update(@Param('id') id: number, @Body() categoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(id, categoriaDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  @ApiOperation({ summary: 'Eliminar una categoría por su ID' })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría a eliminar',
    type: 'integer',
  })
  remove(@Param('id') id: number) {
    return this.categoriaService.remove(id);
  }
}
