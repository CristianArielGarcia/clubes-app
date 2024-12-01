import {
  IsInt,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateComprobanteItemDto {
  @IsInt()
  comprobante_id: number;

  @IsString()
  descripcion: string;

  @IsNumber()
  total: number;

  @IsInt()
  cantidad: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

export class UpdateComprobanteItemDto {
  @IsOptional()
  @IsInt()
  comprobante_id?: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsInt()
  cantidad?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
