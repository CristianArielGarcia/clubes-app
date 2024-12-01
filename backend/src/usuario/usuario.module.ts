import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';
import { SocioModule } from '../socio/socio.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    SocioModule,
    SupabaseAuthGuard,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
