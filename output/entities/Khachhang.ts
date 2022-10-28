import { Column, Entity, Index, OneToMany } from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Danhsachdiachi } from "./Danhsachdiachi";
import { Monanyeuthich } from "./Monanyeuthich";
import { Ykienkhachhang } from "./Ykienkhachhang";

// @Index("PK__KHACHHAN__88D2F0E57063EB71", ["maKhachHang"], { unique: true })
@Entity("KHACHHANG", { schema: "dbo" })
export class Khachhang {
  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @Column("nvarchar", { name: "HoTen", length: 50 })
  hoTen: string;

  @Column("smalldatetime", { name: "NgaySinh" })
  ngaySinh: Date;

  @Column("nvarchar", { name: "SoDienThoai", length: 10 })
  soDienThoai: string;

  @Column("nvarchar", { name: "Email", length: 50 })
  email: string;

  @Column("nvarchar", { name: "MatKhau", length: 50 })
  matKhau: string;

  @Column("nvarchar", { name: "HinhAnh", length: 250 })
  hinhAnh: string;

  @OneToMany(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.maKhachHang
  )
  chitietdonhangs: Chitietdonhang[];

  @OneToMany(
    () => Danhsachdiachi,
    (danhsachdiachi) => danhsachdiachi.maKhachHang
  )
  danhsachdiachis: Danhsachdiachi[];

  @OneToMany(() => Monanyeuthich, (monanyeuthich) => monanyeuthich.maKhachHang)
  monanyeuthiches: Monanyeuthich[];

  @OneToMany(
    () => Ykienkhachhang,
    (ykienkhachhang) => ykienkhachhang.maKhachHang
  )
  ykienkhachhangs: Ykienkhachhang[];
}
