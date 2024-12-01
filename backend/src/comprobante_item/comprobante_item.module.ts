import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprobanteItemService } from './comprobante_item.service';
import { ComprobanteItemController } from './comprobante_item.controller';
import { ComprobanteItem } from './comprobante_item.entity';
import { Comprobante } from '../comprobante/comprobante.entity';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComprobanteItem, Comprobante]),
    SupabaseAuthGuard,
  ],
  controllers: [ComprobanteItemController],
  providers: [ComprobanteItemService],
})
export class ComprobanteItemModule {}
