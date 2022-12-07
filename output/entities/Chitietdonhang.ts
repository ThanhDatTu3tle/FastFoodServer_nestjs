import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Khachhang } from "./Khachhang";
import { Danhsachdiachi } from "./Danhsachdiachi";
import { MonanDonhang } from "./MonanDonhang";

// @Index("PK__CHITIETD__4B0B45DD0DD6F11D", ["maChiTietDonHang"], { unique: true })
@Entity("CHITIETDONHANG", { schema: "dbo" })
export class Chitietdonhang {
  @Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
  maChiTietDonHang: string;

  @Column("nvarchar", { name: "GioDat", length: 8 })
  gioDat: string;

  @Column("nvarchar", { name: "NgayDat", length: 10 })
  ngayDat: string;

  @Column("float", { name: "ThanhTien", precision: 53 })
  thanhTien: number;

  @Column("nvarchar", { name: "MaGiamGia", length: 10 })
  maGiamGia: string;

  @Column("nvarchar", { name: "TrangThai", length: 50 })
  trangThai: string;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.chitietdonhangs)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;

  @ManyToOne(
    () => Danhsachdiachi,
    (danhsachdiachi) => danhsachdiachi.chitietdonhangs
  )
  @JoinColumn([{ name: "MaDiaChi", referencedColumnName: "maDiaChi" }])
  maDiaChi: Danhsachdiachi;

  @OneToMany(
    () => MonanDonhang,
    (monanDonhang) => monanDonhang.maChiTietDonHang2
  )
  monanDonhangs: MonanDonhang[];
}
