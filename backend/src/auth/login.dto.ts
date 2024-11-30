import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'cagarcia.ush@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'supabase1234!',
  })
  @IsNotEmpty()
  password: string;
}
