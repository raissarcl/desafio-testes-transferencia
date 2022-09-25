import { StringifyOptions } from 'querystring';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '../../users/entities/User';

@Entity('statements')
export class Statement {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User, user => user.statement)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('uuid')
  sender_id?: string;

  @ManyToOne(() => User, user => user.statement)
  @JoinColumn({ name: 'sender_id' })
  sender?: User;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  amount: number;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
