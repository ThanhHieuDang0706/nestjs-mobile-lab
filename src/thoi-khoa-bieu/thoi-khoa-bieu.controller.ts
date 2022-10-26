import { Controller, Get } from '@nestjs/common';
import { thoiKhoaBieu } from './thoi-khoa-bieu.interface';
import * as thoiKhoaBieuData from './thoiKhoaBieu.json';

@Controller('thoi-khoa-bieu')
export class ThoiKhoaBieuController {
  @Get()
  findAll(): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu;
  }
}
