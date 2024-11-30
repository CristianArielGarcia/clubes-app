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
import { ComprobanteItemService } from './comprobante_item.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';
import {
  CreateComprobanteItemDto,
  UpdateComprobanteItemDto,
} from './comprobante_item_dto';

@Controller('comprobante-items')
@ApiTags('Comprobante Item')
@UseGuards(SupabaseAuthGuard)
export class ComprobanteItemController {
  constructor(
    private readonly comprobanteItemService: ComprobanteItemService,
  ) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  findAll() {
    return this.comprobanteItemService.findAll();
  }

  @Get(':id')
  @UseGuards(SupabaseAuthGuard)
  findOne(@Param('id') id: number) {
    return this.comprobanteItemService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  create(@Body() createComprobanteItemDto: CreateComprobanteItemDto) {
    return this.comprobanteItemService.create(createComprobanteItemDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  update(
    @Param('id') id: number,
    @Body() updateComprobanteItemDto: UpdateComprobanteItemDto,
  ) {
    return this.comprobanteItemService.update(id, updateComprobanteItemDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  remove(@Param('id') id: number) {
    return this.comprobanteItemService.remove(id);
  }
}
