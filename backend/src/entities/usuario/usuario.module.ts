import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { SupabaseAuthGuard } from 'src/auth/SupabaseAuthGuard';
import { SocioModule } from '../socio/socio.module'; // Solo importa SocioModule

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), SocioModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, SupabaseAuthGuard],
  exports: [UsuarioService],
})
export class UsuarioModule {}
