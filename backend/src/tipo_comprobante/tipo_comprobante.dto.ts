import { IsString, MaxLength, IsOptional } from 'class-validator';

export class TipoComprobanteDto {
  @IsString()
  @MaxLength(100)
  descripcion: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  newDescripcion?: string; // Si es para un update, se podría pasar un campo opcional
}
