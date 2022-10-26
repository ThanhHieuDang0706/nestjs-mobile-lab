export interface monHoc {
  id: number;
  ten_mon_hoc: string;
  thoi_gian: string;
  phong_hoc: string;
  tiet_hoc: string;
}

export interface thoiKhoaBieu {
  id: number;
  id_sinh_vien: number;
  hoc_ky: number;
  nam_hoc: number;
  mon_hoc: monHoc[];
}
