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
import { SocioService } from './socio.service';
import { CreateSocioDto, UpdateSocioDto } from './socio.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('socios')
export class SocioController {
  constructor(private readonly socioService: SocioService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('supabase-auth'))
  findAll() {
    return this.socioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.socioService.findOne(id);
  }

  @Post()
  create(@Body() createSocioDto: CreateSocioDto) {
    return this.socioService.create(createSocioDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSocioDto: UpdateSocioDto) {
    return this.socioService.update(id, updateSocioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.socioService.remove(id);
  }
}
