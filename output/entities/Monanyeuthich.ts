import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Monan } from "./Monan";
import { Khachhang } from "./Khachhang";

// @Index("PK__MONANYEU__DDD505B9EE73AACC", ["maMonAnYeuThich"], { unique: true })
@Entity("MONANYEUTHICH", { schema: "dbo" })
export class Monanyeuthich {
  @Column("nvarchar", { primary: true, name: "MaMonAnYeuThich", length: 10 })
  maMonAnYeuThich: string;

  @ManyToOne(() => Monan, (monan) => monan.monanyeuthiches)
  @JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
  maMonAn: Monan;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.monanyeuthiches)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;
}
