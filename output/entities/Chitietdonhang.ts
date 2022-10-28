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
import { Chitiethoadon } from "./Chitiethoadon";
// @Index("PK__CHITIETD__4B0B45DDA713F5FF", ["maChiTietDonHang"], { unique: true })
@Entity("CHITIETDONHANG", { schema: "dbo" })
export class Chitietdonhang {
  @Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
  maChiTietDonHang: string;

  @Column("time", { name: "GioDat" })
  gioDat: Date;

  @Column("smalldatetime", { name: "NgayDat" })
  ngayDat: Date;

  @Column("float", { name: "ThanhTien", precision: 53 })
  thanhTien: number;

  @Column("nvarchar", { name: "MaGiamGia", length: 10 })
  maGiamGia: string;

  @Column("nvarchar", { name: "TrangThai", length: 50 })
  trangThai: string;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.chitietdonhangs)
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang: Khachhang;

  @ManyToOne(
    () => Danhsachdiachi,
    (danhsachdiachi) => danhsachdiachi.chitietdonhangs
  )
  @JoinColumn([{ name: "MaDiaChi", referencedColumnName: "maDiaChi" }])
  maDiaChi: Danhsachdiachi;

  @OneToMany(
    () => Chitiethoadon,
    (chitiethoadon) => chitiethoadon.maChiTietDonHang
  )
  chitiethoadons: Chitiethoadon[];
}
