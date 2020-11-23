import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { SkillsController } from './skills/skills.controller';
import { SkillsService } from './skills/skills.service';
import { SkillsModule } from './skills/skills.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // UsersModule,
    // SkillsModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'dbCV',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController, UsersController, SkillsController],
  providers: [AppService, UsersService, SkillsService],
})
export class AppModule {}
