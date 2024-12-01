import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Deporte } from '../deporte/deporte.entity';
import { Categoria } from '../categoria/categoria.entity';

@Entity('categoria_deporte')
export class CategoriaDeporte {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Deporte, { eager: true })
  @JoinColumn({ name: 'deporte_id' })
  deporte: Deporte;

  @ManyToOne(() => Categoria, { eager: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @Column({ type: 'boolean', default: true })
  activo: boolean;
}
