import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Monan } from "./Monan";

// @Index("PK__CHITIETH__B11716252E6349BC", ["maMonAn"], { unique: true })
@Entity("CHITIETHOADON", { schema: "dbo" })
export class Chitiethoadon {
  @Column("nvarchar", { name: "MaChiTietHoaDon", length: 10 })
  maChiTietHoaDon: string;

  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("int", { name: "SoLuongMonAn" })
  soLuongMonAn: number;

  @ManyToOne(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.chitiethoadons
  )
  @JoinColumn([
    { name: "MaChiTietDonHang", referencedColumnName: "maChiTietDonHang" },
  ])
  maChiTietDonHang: Chitietdonhang;

  @OneToOne(() => Monan, (monan) => monan.chitiethoadon)
  @JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
  maMonAn2: Monan;
}
