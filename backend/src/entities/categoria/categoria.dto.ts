import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

export class UpdateCategoriaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
