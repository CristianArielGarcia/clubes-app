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
import { TipoComprobanteService } from './tipo_comprobante.service';
import { TipoComprobanteDto } from './tipo_comprobante.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('tipo-comprobantes')
@ApiTags('TipoComprobante')
export class TipoComprobanteController {
  constructor(
    private readonly tipoComprobanteService: TipoComprobanteService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  findAll() {
    return this.tipoComprobanteService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  findOne(@Param('id') id: number) {
    return this.tipoComprobanteService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  create(@Body() tipoComprobanteDto: TipoComprobanteDto) {
    return this.tipoComprobanteService.create(tipoComprobanteDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  update(
    @Param('id') id: number,
    @Body() tipoComprobanteDto: TipoComprobanteDto,
  ) {
    return this.tipoComprobanteService.update(id, tipoComprobanteDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  remove(@Param('id') id: number) {
    return this.tipoComprobanteService.remove(id);
  }
}
