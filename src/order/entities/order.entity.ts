import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty()
  maChiTietDonHang: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  maDiaChi: string;
  @ApiProperty()
  gioDat: string;
  @ApiProperty()
  ngayDat: string;
  @ApiProperty()
  thanhTien: number;
  @ApiProperty()
  maGiamGia: string;
  @ApiProperty()
  trangThai: string;
}
