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
import { CreateScheduleDTO, ScheduleDataDTO, StudentIdParamDTO } from './create-thoi-khoi-bieu.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { identity } from 'rxjs';
@Controller('thoi-khoa-bieu')
export class ThoiKhoaBieuController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get()
  @ApiOkResponse({
    type: [ScheduleDataDTO]
  })
  findAll(): thoiKhoaBieu[] {
    return this.scheduleService.findAllSchedule();
  }

  @Post('/:studentId/add')
  @ApiParam({
    name: 'studentId',
    type: Number,
    required: true
  })
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
  @ApiParam({
    name: 'id',
    type: Number,
    required: true
  })
  @ApiOkResponse({
    type: ScheduleDataDTO
  })
  findOne(@Param() params): thoiKhoaBieu {
    return thoiKhoaBieuData.thoiKhoaBieu.find(
      (tkb) => tkb.id === Number(params.id),
    );
  }

  @Get('sinh-vien/:id')
  @ApiParam({
    name: 'id',
    type: Number,
    required: true
  })
  @ApiOkResponse({
    type: ScheduleDataDTO
  })
  findTKBBySinhVien(@Param() params): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu.filter(
      (tkb) => tkb.id_sinh_vien === Number(params.id),
    );
  }
}
