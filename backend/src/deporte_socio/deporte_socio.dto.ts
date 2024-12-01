import { IsBoolean, IsInt } from 'class-validator';

export class CreateDeporteSocioDto {
  @IsInt()
  socio_id: number;

  @IsInt()
  categoria_deporte_id: number;

  @IsBoolean()
  activo?: boolean;
}

export class UpdateDeporteSocioDto {
  @IsInt()
  socio_id?: number;

  @IsInt()
  categoria_deporte_id?: number;

  @IsBoolean()
  activo?: boolean;
}
