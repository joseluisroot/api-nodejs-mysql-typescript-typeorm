import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { Users } from '../model/entities/Users';
import { Skills } from '../model/entities/Skills';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Skills])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
