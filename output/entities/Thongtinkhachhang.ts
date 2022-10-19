import { Column, Entity, Index, OneToMany } from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Danhmucyeuthich } from "./Danhmucyeuthich";
import { Danhsachdiachigiaohang } from "./Danhsachdiachigiaohang";
import { Ykienkhachhang } from "./Ykienkhachhang";

// @Index("PK__THONGTIN__88D2F0E59C3A0863", ["maKhachHang"], { unique: true })
@Entity("THONGTINKHACHHANG", { schema: "dbo" })
export class Thongtinkhachhang {
  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @Column("nvarchar", { name: "HoTen", nullable: true, length: 50 })
  hoTen: string | null;

  @Column("datetime", { name: "NgaySinh", nullable: true })
  ngaySinh: Date | null;

  @Column("nvarchar", { name: "SoDienThoai", nullable: true, length: 10 })
  soDienThoai: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 50 })
  email: string | null;

  @Column("nvarchar", { name: "MatKhau", nullable: true, length: 50 })
  matKhau: string | null;

  @OneToMany(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.maKhachHang2
  )
  chitietdonhangs: Chitietdonhang[];

  @OneToMany(
    () => Danhmucyeuthich,
    (danhmucyeuthich) => danhmucyeuthich.maKhachHang2
  )
  danhmucyeuthiches: Danhmucyeuthich[];

  @OneToMany(
    () => Danhsachdiachigiaohang,
    (danhsachdiachigiaohang) => danhsachdiachigiaohang.maKhachHang2
  )
  danhsachdiachigiaohangs: Danhsachdiachigiaohang[];

  @OneToMany(
    () => Ykienkhachhang,
    (ykienkhachhang) => ykienkhachhang.maKhachHang2
  )
  ykienkhachhangs: Ykienkhachhang[];
}
