import { IsString, IsOptional, IsEmail, IsBoolean, IsDate, IsNotEmpty, Length } from 'class-validator';

export class CreateSocioDto {
  @IsOptional()
  @IsString()
  foto?: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @Length(1, 20)
  documento: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDate()
  fecha_nacimiento?: Date;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  updated_by?: string;
}

export class UpdateSocioDto extends CreateSocioDto {}
