import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Skills } from './Skills';
import { Users } from './Users';

@Index('fk_users_skills_users_idx', ['usersId'], {})
@Index('fk_users_skills_skills1_idx', ['skillsId'], {})
@Entity('users_skills', { schema: 'dbcv' })
export class UsersSkills {
  @Column('int', { name: 'users_id' })
  usersId: number;

  @Column('int', { name: 'skills_id' })
  skillsId: number;

  @ManyToOne(() => Skills, (skills) => skills.usersSkills, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'skills_id', referencedColumnName: 'id' }])
  skills: Skills;

  @ManyToOne(() => Users, (users) => users.usersSkills, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'users_id', referencedColumnName: 'id' }])
  users: Users;
}
