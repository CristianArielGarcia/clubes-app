import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Comprobante } from '../comprobante/comprobante.entity';

@Entity('comprobante_item')
export class ComprobanteItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Comprobante)
  @JoinColumn({ name: 'comprobante_id' })
  comprobante: Comprobante;

  @Column({ length: 255 })
  descripcion: string;

  @Column('decimal')
  total: number;

  @Column('int')
  cantidad: number;

  @Column({ default: true })
  activo: boolean;
}
