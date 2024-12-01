import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoItemService } from './tipo_item.service';
import { TipoItemController } from './tipo_item.controller';
import { TipoItem } from './tipo_item.entity';
import { SupabaseAuthGuard } from '../auth/SupabaseAuthGuard';

@Module({
  imports: [TypeOrmModule.forFeature([TipoItem])],
  controllers: [TipoItemController],
  providers: [TipoItemService, SupabaseAuthGuard],
})
export class TipoItemModule {}
