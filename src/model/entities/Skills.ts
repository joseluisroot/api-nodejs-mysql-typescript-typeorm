import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersSkills } from './UsersSkills';

@Entity('skills', { schema: 'dbcv' })
export class Skills {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 45 })
  name: string | null;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @OneToMany(() => UsersSkills, (usersSkills) => usersSkills.skills)
  usersSkills: UsersSkills[];
}
