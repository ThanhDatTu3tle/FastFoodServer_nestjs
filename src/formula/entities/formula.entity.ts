import { ApiProperty } from '@nestjs/swagger';

export class Formula {
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  donVi: string;
}
