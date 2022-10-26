import {
  HttpException,
  HttpStatus,
  Post,
  Req,
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { thoiKhoaBieu } from './thoi-khoa-bieu.interface';
import * as thoiKhoaBieuData from './thoiKhoaBieu.json';
import { Request } from 'express';
import { ScheduleService } from './thoi-khoa-bieu.service';

@Controller('thoi-khoa-bieu')
export class ThoiKhoaBieuController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get()
  findAll(): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu;
  }

  @Post('/:studentId/add')
  addNewSchedule(@Req() request: Request): thoiKhoaBieu | any {
    const { studentId } = request.params;
    const result = this.scheduleService.addSchedule(
      request.body,
      parseInt(studentId),
    );
    if (result && result.statusCode) {
      throw new HttpException(result.message, HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @Get(':id')
  findOne(@Param() params): thoiKhoaBieu {
    return thoiKhoaBieuData.thoiKhoaBieu.find(
      (tkb) => tkb.id === Number(params.id),
    );
  }

  @Get('sinh-vien/:id')
  findTKBBySinhVien(@Param() params): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu.filter(
      (tkb) => tkb.id_sinh_vien === Number(params.id),
    );
  }
}
