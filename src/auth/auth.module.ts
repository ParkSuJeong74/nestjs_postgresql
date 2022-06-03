import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../repository/user.repository';

@Module({
  controllers: [AuthController],
  providers: [...UserRepository, AuthService],
})
export class AuthModule {}
