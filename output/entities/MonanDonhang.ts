import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Monan } from "./Monan";
import { Chitietdonhang } from "./Chitietdonhang";

// @Index("PK__MONAN_DO__75A7A278FA3954AC", ["maMonAn", "maChiTietDonHang"], {
//   unique: true,
// })
@Entity("MONAN_DONHANG", { schema: "dbo" })
export class MonanDonhang {
  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
  maChiTietDonHang: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @Column("float", { name: "ThanhTien", precision: 53 })
  thanhTien: number;

  @ManyToOne(() => Monan, (monan) => monan.monanDonhangs)
  @JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
  maMonAn2: Monan;

  @ManyToOne(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.monanDonhangs
  )
  @JoinColumn([
    { name: "MaChiTietDonHang", referencedColumnName: "maChiTietDonHang" },
  ])
  maChiTietDonHang2: Chitietdonhang;
}
