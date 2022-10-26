import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThoiKhoaBieuController } from './thoi-khoa-bieu/thoi-khoa-bieu.controller';

@Module({
  imports: [],
  controllers: [AppController, ThoiKhoaBieuController],
  providers: [AppService],
})
export class AppModule {}
