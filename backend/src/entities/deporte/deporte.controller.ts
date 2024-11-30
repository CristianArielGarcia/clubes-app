import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DeporteService } from './deporte.service';
import { CreateDeporteDto, UpdateDeporteDto } from './deporte.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('deporte')
@ApiTags('Deporte')
export class DeporteController {
  constructor(private readonly deporteService: DeporteService) {}

  @Get()
  @ApiBearerAuth('access-token')
  findAll() {
    return this.deporteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: number) {
    return this.deporteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  create(@Body() createDeporteDto: CreateDeporteDto) {
    return this.deporteService.create(createDeporteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  update(@Param('id') id: number, @Body() updateDeporteDto: UpdateDeporteDto) {
    return this.deporteService.update(id, updateDeporteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: number) {
    return this.deporteService.remove(id);
  }
}
