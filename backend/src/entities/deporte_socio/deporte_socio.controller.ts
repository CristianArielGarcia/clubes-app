import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DeporteSocioService } from './deporte_socio.service';
import {
  CreateDeporteSocioDto,
  UpdateDeporteSocioDto,
} from './deporte_socio.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('deporte_socio')
@ApiTags('DeporteSocio')
export class DeporteSocioController {
  constructor(private readonly deporteSocioService: DeporteSocioService) {}

  @Get()
  @ApiBearerAuth('access-token')
  findAll() {
    return this.deporteSocioService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: number) {
    return this.deporteSocioService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  create(@Body() createDeporteSocioDto: CreateDeporteSocioDto) {
    return this.deporteSocioService.create(createDeporteSocioDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  update(
    @Param('id') id: number,
    @Body() updateDeporteSocioDto: UpdateDeporteSocioDto,
  ) {
    return this.deporteSocioService.update(id, updateDeporteSocioDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: number) {
    return this.deporteSocioService.remove(id);
  }
}
