import { Module } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { NotificationResolver } from './notifications.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entity/notifications.entity';
//import { ProjectModule } from 'src/project/project.module';

@Module({
  // imports: [TypeOrmModule.forFeature([Notification]), ProjectModule],
  imports: [TypeOrmModule.forFeature([Notification]), ],
  providers: [NotificationService, NotificationResolver]
})
export class NotificationModule {

}
