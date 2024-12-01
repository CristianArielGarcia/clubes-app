import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('deporte')
export class Deporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  nombre: string;

  @Column({ type: 'boolean', default: true })
  activo: boolean;
}
