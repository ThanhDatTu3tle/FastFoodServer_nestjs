import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Thongtinkhachhang } from "./Thongtinkhachhang";
import { Donghoadon } from "./Donghoadon";

// @Index("PK__CHITIETD__5A18ABA34028E88A", ["maDonHang", "maKhachHang"], {
//   unique: true,
// })
@Entity("CHITIETDONHANG", { schema: "dbo" })
export class Chitietdonhang {
  @Column("nvarchar", { primary: true, name: "MaDonHang", length: 10 })
  maDonHang: string;

  @Column("nvarchar", { name: "DiaChi", nullable: true, length: 50 })
  diaChi: string | null;

  @Column("datetime", { name: "ThoiGianDatHang", nullable: true })
  thoiGianDatHang: Date | null;

  @Column("image", { name: "HinhAnhMonAn", nullable: true })
  hinhAnhMonAn: Buffer | null;

  @Column("nvarchar", { name: "TenMonAn", nullable: true, length: 50 })
  tenMonAn: string | null;

  @Column("nvarchar", { name: "ThanhTien", nullable: true, length: 10 })
  thanhTien: string | null;

  @Column("nvarchar", { name: "TrangThai", nullable: true, length: 20 })
  trangThai: string | null;

  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @ManyToOne(
    () => Thongtinkhachhang,
    (thongtinkhachhang) => thongtinkhachhang.chitietdonhangs
  )
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang2: Thongtinkhachhang;

  @OneToMany(() => Donghoadon, (donghoadon) => donghoadon.chitietdonhang)
  donghoadons: Donghoadon[];
}
