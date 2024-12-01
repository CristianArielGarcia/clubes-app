import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('usuario')
@Unique(['documento', 'email']) // Ensures 'documento' and 'email' are unique
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  apellido: string;

  @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
  documento: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'boolean', default: true })
  activo: boolean;
}
