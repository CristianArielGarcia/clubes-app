import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprobanteService } from './comprobante.service';
import { ComprobanteController } from './comprobante.controller';
import { Comprobante } from './comprobante.entity';
import { TipoComprobante } from '../tipo_comprobante/tipo_comprobante.entity';
import { Socio } from '../socio/socio.entity';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comprobante, TipoComprobante, Socio]),
    SupabaseAuthGuard,
  ],
  controllers: [ComprobanteController],
  providers: [ComprobanteService],
  exports: [ComprobanteService],
})
export class ComprobanteModule {}
