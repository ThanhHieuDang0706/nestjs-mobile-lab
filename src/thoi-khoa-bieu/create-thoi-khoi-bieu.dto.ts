import { ApiProperty } from '@nestjs/swagger';
import { monHoc } from './thoi-khoa-bieu.interface';
export class CreateScheduleDTO {
  @ApiProperty({
    required: true,
  })
  hoc_ky: number;

  @ApiProperty({
    required: true,
  })
  nam_hoc: number;

  @ApiProperty({
    required: true,
  })
  ten_mon_hoc: string;

  @ApiProperty({
    required: true,
  })
  thoi_gian: string;

  @ApiProperty({
    required: true,
  })
  phong_hoc: string;

  @ApiProperty({
    required: true,
  })
  tiet_hoc: string;
}

export class ScheduleDataDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 34 })
  id_sinh_vien: number;

  @ApiProperty({ example: 201 })
  hoc_ky: number;

  @ApiProperty({ example: 2022 })
  nam_hoc: number;

  @ApiProperty({
    example: [
      {
        id: 1,
        ten_mon_hoc: 'Mô hình hoá toán học',
        thoi_gian: 'Thứ 2, 3, 4, 5, 6',
        phong_hoc: 'A1',
        tiet_hoc: '1, 2, 3, 4, 5',
      },
    ],
  })
  mon_hoc: monHoc[];
}

export class StudentIdParamDTO {
  @ApiProperty({
    required: true
  })
  id: number
}