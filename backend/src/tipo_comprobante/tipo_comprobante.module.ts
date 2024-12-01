import { Module } from '@nestjs/common';
import { TipoComprobanteService } from './tipo_comprobante.service';
import { TipoComprobanteController } from './tipo_comprobante.controller';
import { TipoComprobante } from './tipo_comprobante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [TypeOrmModule.forFeature([TipoComprobante]), SupabaseAuthGuard],
  controllers: [TipoComprobanteController],
  providers: [TipoComprobanteService],
  exports: [TipoComprobanteService],
})
export class TipoComprobanteModule {}
