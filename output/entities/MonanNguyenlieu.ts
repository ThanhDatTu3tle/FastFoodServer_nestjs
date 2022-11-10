import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Nguyenlieu } from "./Nguyenlieu";
import { Monan } from "./Monan";

// @Index("PK__MONAN_NG__FD620F109AC1E0C6", ["maMonAn", "maNguyenLieu"], {
//   unique: true,
// })
@Entity("MONAN_NGUYENLIEU", { schema: "dbo" })
export class MonanNguyenlieu {
  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
  maNguyenLieu: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @ManyToOne(() => Nguyenlieu, (nguyenlieu) => nguyenlieu.monanNguyenlieus)
  @JoinColumn([{ name: "MaNguyenLieu", referencedColumnName: "maNguyenLieu" }])
  maNguyenLieu2: Nguyenlieu;

  @ManyToOne(() => Monan, (monan) => monan.monanNguyenlieus)
  @JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
  maMonAn2: Monan;
}
