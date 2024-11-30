import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Socio } from '../socio/socio.entity';
import { CategoriaDeporte } from '../categoria_deporte/categoria_deporte.entity';

@Entity('deporte_socio')
export class DeporteSocio {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Socio, (socio) => socio.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'socio_id' })
  socio: Socio;

  @ManyToOne(
    () => CategoriaDeporte,
    (categoriaDeporte) => categoriaDeporte.id,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'categoria_deporte_id' })
  categoriaDeporte: CategoriaDeporte;

  @Column({ default: true })
  activo: boolean;
}
