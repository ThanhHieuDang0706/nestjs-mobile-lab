import { Injectable } from '@nestjs/common';
import { ScheduleData, thoiKhoaBieu } from './thoi-khoa-bieu.interface';
import * as thoiKhoaBieuData from './thoiKhoaBieu.json';
@Injectable()
export class ScheduleService {
  addSchedule(
    newSchedule: ScheduleData,
    id_sinh_vien: number,
  ): thoiKhoaBieu | any {
    const schedule = thoiKhoaBieuData.thoiKhoaBieu.find(
      (item) => item.id_sinh_vien === id_sinh_vien,
    );
    if (schedule) {
      const newMonHoc = [...schedule.mon_hoc];
      newMonHoc.push({
        id: Math.random() * Math.random() * 100,
        ten_mon_hoc: newSchedule.ten_mon_hoc,
        thoi_gian: newSchedule.thoi_gian,
        phong_hoc: newSchedule.phong_hoc,
        tiet_hoc: newSchedule.tiet_hoc,
      });
      return {
        ...schedule,
        mon_hoc: newMonHoc,
      };
    }
    return {
      statusCode: 404,
      message: 'This studentId is not existed',
    };
  }
  findAllSchedule(): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu;
  }
}
