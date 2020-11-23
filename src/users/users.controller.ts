import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  //HttpStatus,
  //Req,
  //Res,
} from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
//import { Request, Response } from 'express';

//interfaces
import { User } from './interfaces/user';

//importando los servicios
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  //Return segun curso
  getUsers(): User[] {
    //return { users: 'x' };
    return this.userService.getUsers();
  }

  @Get(':taskId')
  getUser(@Param('taskId') taskId: string) {
    return this.userService.getUser(parseInt(taskId));
  }

  // getUsers(@Req() req, @Res() res) {
  //   return res.send('hello word');
  // }

  @Post()
  postUser(@Body() user: CreateUserDto): string {
    console.log(user);
    return 'post users';
  }

  @Delete(':id')
  deleteUser(@Param('id') id): string {
    console.log(id);
    return `delete users id: ${id}`;
  }

  @Put(':id')
  putUser(@Body() user: CreateUserDto, @Param('id') id): string {
    console.log(user);
    console.log(id);
    return `put users ${id}`;
  }
}
