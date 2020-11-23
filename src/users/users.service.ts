import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';

//esta es la interfaz segun el cursi=o
import { User } from '../interfaces/user';

//import { Users } from '../model/entities/Users';

@Injectable()
export class UsersService {
  // esquema segun curso online
  users: User[] = [
    {
      id: 1,
      title: 'Testing',
      description: 'Testing description',
      done: true,
    },
    {
      id: 2,
      title: 'Testing 2',
      description: 'Testing description 2',
      done: true,
    },
  ];

  // constructor(
  //   @InjectRepository(Users)
  //   private usersRepository: Repository<Users>,
  // ) {}

  getUsers() {
    //Return segun curso
    return this.users;
    //return this.usersRepository.find();
  }

  getUser(id: number) {
    //Return segun curso
    return this.users.find((User) => User.id === id);
    //return this.usersRepository.findOne({ id });
  }
}
