import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateComprobanteDto {
  @IsOptional()
  @IsString()
  observacion?: string;

  @IsInt()
  nro_comprobante: number;

  @IsDate()
  fecha_emision: Date;

  @IsNumber()
  total: number;

  @IsInt()
  tipo_comprobante_id: number;

  @IsInt()
  socio_id: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  created_by?: string;
}

export class UpdateComprobanteDto {
  @IsOptional()
  @IsString()
  observacion?: string;

  @IsOptional()
  @IsInt()
  nro_comprobante?: number;

  @IsOptional()
  @IsDate()
  fecha_emision?: Date;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsInt()
  tipo_comprobante_id?: number;

  @IsOptional()
  @IsInt()
  socio_id?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  updated_by?: string;
}
