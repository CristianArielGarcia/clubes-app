import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTipoItemDto {
  @IsString()
  descripcion: string;

  @IsInt()
  comprobante_item_id: number;
}

export class UpdateTipoItemDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsInt()
  comprobante_item_id?: number;
}
