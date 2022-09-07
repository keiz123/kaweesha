import { Field, ObjectType } from '@nestjs/graphql';
//import { Project } from "src/project/entity/project.entity"
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Notification {
  password: any;
  static find(arg0: {
    where: { type: () => string; id: any };
    order: { type: string; id: string };
  }) {
    throw new Error('Method not implemented.');
  }

  @Field()
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;
  @Field()
  @Column()
  type: string;
  @Field()
  @Column()
  user_id: string;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  body: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  created_at: Date;
  @Field({ nullable: true })
  @Column({ nullable: true })
  created_by: string;
}

function nullable(nullable: any, arg1: boolean) {
  throw new Error('Function not implemented.');
}
