import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Khachhang } from "./Khachhang";
import { Monan } from "./Monan";

// @Index("PK__MONANYEU__DDD505B9671F6DF5", ["maMonAnYeuThich"], { unique: true })
@Entity("MONANYEUTHICH", { schema: "dbo" })
export class Monanyeuthich {
  @Column("nvarchar", { primary: true, name: "MaMonAnYeuThich", length: 10 })
  maMonAnYeuThich: string;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.monanyeuthiches)
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang: Khachhang;

  @ManyToOne(() => Monan, (monan) => monan.monanyeuthiches)
  @JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
  maMonAn: Monan;
}
