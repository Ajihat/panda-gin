import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiProperty,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

class UserDTO {
  @ApiProperty({ type: String, description: 'firstname' })
  firstname: string;
  @ApiProperty({ type: String, description: 'lastname' })
  lastname: string;
  @ApiProperty({ type: String, description: 'username' })
  username: string;
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}

class UserLoginDTO {
  @ApiProperty({ type: String, description: 'username' })
  username: string;
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  @ApiCreatedResponse({ description: 'User registration' })
  @ApiBody({ type: UserDTO })
  async register(@Request() req) {
    return this.authService.register(req.body)
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiBody({ type: UserLoginDTO })
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @ApiBearerAuth()
  @ApiParam({
    name: 'Authorization',
    required: false,
    description: '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
