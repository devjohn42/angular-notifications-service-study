import { Module } from '@nestjs/common'

import { SendNotification } from '@app/useCases/send-notification'
import { DatabaseModule } from '../database/databse.module'
import { NotificationsController } from './controllers/notifications.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
