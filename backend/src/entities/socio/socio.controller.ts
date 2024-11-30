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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('socios')
@ApiTags('Socio')
export class SocioController {
  constructor(private readonly socioService: SocioService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
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
