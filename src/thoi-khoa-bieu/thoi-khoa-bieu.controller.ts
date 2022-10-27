import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Param,
  Body,
} from '@nestjs/common';

import { thoiKhoaBieu } from './thoi-khoa-bieu.interface';
import * as thoiKhoaBieuData from './thoiKhoaBieu.json';
import { ScheduleService } from './thoi-khoa-bieu.service';
import { CreateScheduleDTO, ScheduleDataDTO } from './create-thoi-khoi-bieu.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
@Controller('thoi-khoa-bieu')
export class ThoiKhoaBieuController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get()
  findAll(): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu;
  }

  @Post('/:studentId/add')
  @ApiCreatedResponse({
    description: 'New schedule created successfully',
    type: ScheduleDataDTO
  })
  addNewSchedule(@Body() addNewScheduleDto: CreateScheduleDTO, @Param() params): thoiKhoaBieu | any {
    const { studentId } = params;
    const result = this.scheduleService.addSchedule(
      addNewScheduleDto,
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
