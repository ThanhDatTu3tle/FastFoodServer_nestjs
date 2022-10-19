import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Thongtinkhachhang } from "./Thongtinkhachhang";

@Index("PK__DANHSACH__A3EC0E309FF01DA4", ["maDiaChi", "maKhachHang"], {
  unique: true,
})
@Entity("DANHSACHDIACHIGIAOHANG", { schema: "dbo" })
export class Danhsachdiachigiaohang {
  @Column("nvarchar", { primary: true, name: "MaDiaChi", length: 10 })
  maDiaChi: string;

  @Column("nvarchar", { name: "DiaChi", nullable: true, length: 50 })
  diaChi: string | null;

  @Column("nvarchar", { name: "TenDiaChi", nullable: true, length: 50 })
  tenDiaChi: string | null;

  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @ManyToOne(
    () => Thongtinkhachhang,
    (thongtinkhachhang) => thongtinkhachhang.danhsachdiachigiaohangs
  )
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang2: Thongtinkhachhang;
}
