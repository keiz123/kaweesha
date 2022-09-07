import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
//import { Project } from 'src/project/entity/project.entity';
import { NotificationCreateDTO } from './dto/create-notifications.input';
import { NotificationService } from './notifications.service';
import { Notification } from './entity/notifications.entity';
import { Any, QueryBuilder } from 'typeorm';
// import { Pagination } from 'nestjs-typeorm-paginate';
import { query } from 'express';
import { Get, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private notificationService: NotificationService) {}

  //getallnotification.
  @Query(() => [Notification], { name: 'getAllNotifications' })
  async findAll(
    @Args('page', { type: () => Int }) page: number,
    @Args('size', { type: () => Int }) size: number,
  ) {
    return await this.notificationService.findAll(page, size);
  }

  @Mutation(() => Notification, { name: 'createNotification' })
  create(@Args('notificationInput') notification: NotificationCreateDTO) {
    return this.notificationService.create(notification);
  }
}
