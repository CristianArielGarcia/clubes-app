import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_comprobante')
export class TipoComprobante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  descripcion: string;
}
