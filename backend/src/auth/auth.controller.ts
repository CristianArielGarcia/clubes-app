import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SupabaseAuthGuard } from './SupabaseAuthGuard';
import { LoginDto } from './login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly supabaseService: SupabaseAuthGuard) {}

  @Post('login')
  @ApiOperation({ summary: 'Login to get a JWT token' })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: {
      example: {
        access_token: 'jwt_token_here',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })

  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    const token = await this.supabaseService.login(email, password);
    return { access_token: token };
  }
}
