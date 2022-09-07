import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Result } from 'apollo-server-express';
// import {
//   IPaginationOptions,
//   Pagination,
//   paginate,
// } from 'nestjs-typeorm-paginate';
import { type } from 'os';
import { take, skip, Observable } from 'rxjs';
//import { Observable, map, skip, take } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { count } from 'rxjs/internal/operators/count';
//import { Project } from 'src/project/entity/project.entity';
//import { ProjectModule } from 'src/project/project.module';
//import { ProjectService } from 'src/project/project.service';
import { Like, Repository } from 'typeorm';
import { NotificationCreateDTO } from './dto/create-notifications.input';
import { Notification } from './entity/notifications.entity';
//newlib

@Injectable()
export class NotificationService {
  repository: Repository<Notification>;
  constructor(
    @InjectRepository(Notification)
    private notificationsRepository: Repository<Notification>,
  ) {
    //private projectService: ProjectService) {
  }

  async findAll(page, size): Promise<Notification[]> {
    //console.log(page);
    return this.notificationsRepository.find({
      order: {
        created_at: 'DESC',
      },

      take: size,
      skip: (page - 1) * size,

      // take: size,
      // skip: (page-1)* 3,
    });
  }

  async create(message: NotificationCreateDTO): Promise<Notification> {
    const msg = this.notificationsRepository.create(message);
    return this.notificationsRepository.save(msg);
  }
}
