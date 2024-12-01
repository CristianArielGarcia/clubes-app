import { IsBoolean, IsInt } from 'class-validator';

export class CreateCategoriaDeporteDto {
  @IsInt()
  deporte_id: number;

  @IsInt()
  categoria_id: number;

  @IsBoolean()
  activo?: boolean;
}

export class UpdateCategoriaDeporteDto {
  @IsInt()
  deporte_id?: number;

  @IsInt()
  categoria_id?: number;

  @IsBoolean()
  activo?: boolean;
}
