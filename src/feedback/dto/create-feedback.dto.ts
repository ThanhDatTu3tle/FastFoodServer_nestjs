import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty()
  maYKien: string;
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  noiDung: string;
  @ApiProperty()
  danhGia: number;
}
