import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ComprobanteItem } from '../comprobante_item/comprobante_item.entity';

@Entity('tipo_item')
export class TipoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @ManyToOne(() => ComprobanteItem, { eager: true })
  @JoinColumn({ name: 'comprobante_item_id' })
  comprobante_item: ComprobanteItem;
}
