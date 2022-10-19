import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Monan } from "./Monan";
import { Thongtinkhachhang } from "./Thongtinkhachhang";

@Index(
  "PK__DANHMUCY__4570F48FFD42EF56",
  ["maKhachHang", "maMonAn", "maDanhMuc"],
  { unique: true }
)
@Entity("DANHMUCYEUTHICH", { schema: "dbo" })
export class Danhmucyeuthich {
  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 50 })
  maDanhMuc: string;

  @ManyToOne(() => Monan, (monan) => monan.danhmucyeuthiches)
  @JoinColumn([
    { name: "MaMonAn", referencedColumnName: "maMonAn" },
    { name: "MaDanhMuc", referencedColumnName: "maDanhMuc" },
  ])
  monan: Monan;

  @ManyToOne(
    () => Thongtinkhachhang,
    (thongtinkhachhang) => thongtinkhachhang.danhmucyeuthiches
  )
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang2: Thongtinkhachhang;
}
