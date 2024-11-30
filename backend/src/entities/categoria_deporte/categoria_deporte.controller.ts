import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoriaDeporteService } from './categoria_deporte.service';
import {
  CreateCategoriaDeporteDto,
  UpdateCategoriaDeporteDto,
} from './categoria_deporte.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('categoria_deporte')
@ApiTags('CategoriaDeporte')
export class CategoriaDeporteController {
  constructor(
    private readonly categoriaDeporteService: CategoriaDeporteService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  findAll() {
    return this.categoriaDeporteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: number) {
    return this.categoriaDeporteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  create(@Body() createCategoriaDeporteDto: CreateCategoriaDeporteDto) {
    return this.categoriaDeporteService.create(createCategoriaDeporteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  update(
    @Param('id') id: number,
    @Body() updateCategoriaDeporteDto: UpdateCategoriaDeporteDto,
  ) {
    return this.categoriaDeporteService.update(id, updateCategoriaDeporteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: number) {
    return this.categoriaDeporteService.remove(id);
  }
}
