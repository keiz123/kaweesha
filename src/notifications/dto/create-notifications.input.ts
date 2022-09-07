import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { PrimaryColumn, Generated, CreateDateColumn } from 'typeorm';
//import { Max, Min } from 'class-validator'
@InputType()
export class NotificationCreateDTO {
  // @Field()
  // @PrimaryColumn({type:"uuid"})
  // @Generated("uuid")
  id: string;
  @Field()
  type: string;
  @Field()
  user_id: string;
  @Field()
  title: string;
  @Field()
  body: string;
  @Field({ nullable: true })
  @CreateDateColumn()
  created_at: Date;
  @Field({ nullable: true })
  created_by: string;
  skip: number;
  take: number;
}

