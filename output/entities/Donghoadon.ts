import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Monan } from "./Monan";
import { Chitietdonhang } from "./Chitietdonhang";

@Index(
  "PK__DONGHOAD__787A5E06EB8445A4",
  ["maMonAn", "maDanhMuc", "maDonHang", "maKhachHang"],
  { unique: true }
)
@Entity("DONGHOADON", { schema: "dbo" })
export class Donghoadon {
  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 50 })
  maDanhMuc: string;

  @Column("nvarchar", { primary: true, name: "MaDonHang", length: 10 })
  maDonHang: string;

  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @Column("decimal", {
    name: "SoLuong",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  soLuong: number | null;

  @Column("decimal", {
    name: "GiaTien",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  giaTien: number | null;

  @ManyToOne(() => Monan, (monan) => monan.donghoadons)
  @JoinColumn([
    { name: "MaMonAn", referencedColumnName: "maMonAn" },
    { name: "MaDanhMuc", referencedColumnName: "maDanhMuc" },
  ])
  monan: Monan;

  @ManyToOne(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.donghoadons
  )
  @JoinColumn([
    { name: "MaDonHang", referencedColumnName: "maDonHang" },
    { name: "MaKhachHang", referencedColumnName: "maKhachHang" },
  ])
  chitietdonhang: Chitietdonhang;
}
