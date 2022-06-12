import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MessagesModule, UsersModule],
})
export class AppModuleModule {}
