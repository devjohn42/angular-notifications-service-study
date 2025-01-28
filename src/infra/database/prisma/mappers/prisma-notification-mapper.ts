import { Content } from '@app/entities/content'
import { Notification } from '@app/entities/notification'
import { Notification as RawNotification } from '@prisma/client'

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    }
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        recipientId: raw.recipientId,
        category: raw.category,
        content: new Content(raw.content),
        createdAt: raw.createdAt,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    )
  }
}
