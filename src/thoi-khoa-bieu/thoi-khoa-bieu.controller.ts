import { Controller, Get, Param } from '@nestjs/common';
import { thoiKhoaBieu } from './thoi-khoa-bieu.interface';
import * as thoiKhoaBieuData from './thoiKhoaBieu.json';

@Controller('thoi-khoa-bieu')
export class ThoiKhoaBieuController {
  @Get()
  findAll(): thoiKhoaBieu[] {
    return thoiKhoaBieuData.thoiKhoaBieu;
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
