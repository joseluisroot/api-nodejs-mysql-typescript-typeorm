import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersSkills } from './UsersSkills';

@Entity('users', { schema: 'dbcv' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', nullable: true, length: 45 })
  email: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 45 })
  password: string | null;

  @Column('varchar', { name: 'full_name', nullable: true, length: 45 })
  fullName: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 45 })
  country: string | null;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @OneToMany(() => UsersSkills, (usersSkills) => usersSkills.users)
  usersSkills: UsersSkills[];
}
