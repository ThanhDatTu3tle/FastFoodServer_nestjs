import { ApiProperty } from '@nestjs/swagger';

export class Feedback {
  @ApiProperty()
  maYKien: string;
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  noiDung: string;
  @ApiProperty()
  danhGia: number;
}
