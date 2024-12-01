import {
  IsString,
  IsBoolean,
  IsOptional,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  apellido?: string;

  @IsString()
  documento: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsDateString()
  @IsOptional()
  fecha_nacimiento?: string;

  @IsBoolean()
  @IsOptional()
  admin?: boolean;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;
}

export class UsuarioDto {
  id: number;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  apellido?: string;

  @IsString()
  documento: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsDateString()
  @IsOptional()
  fecha_nacimiento?: string;

  @IsBoolean()
  admin: boolean;

  @IsBoolean()
  activo: boolean;
}

export class UpdateUsuarioDto extends CreateUsuarioDto {}
