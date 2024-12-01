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
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';

@Controller('usuarios')
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(SupabaseAuthGuard)
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }
}
