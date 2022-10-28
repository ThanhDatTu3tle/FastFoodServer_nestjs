import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Chitiethoadon } from "./Chitiethoadon";
import { Danhmuc } from "./Danhmuc";
import { Monanyeuthich } from "./Monanyeuthich";

// @Index("PK__MONAN__B11716254149C21A", ["maMonAn"], { unique: true })
@Entity("MONAN", { schema: "dbo" })
export class Monan {
  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { name: "TenMonAn", length: 50 })
  tenMonAn: string;

  @Column("nvarchar", { name: "HinhAnhMonAn", length: 250 })
  hinhAnhMonAn: string;

  @Column("nvarchar", { name: "MoTaChiTiet", length: 250 })
  moTaChiTiet: string;

  @Column("float", { name: "GiaTien", precision: 53 })
  giaTien: number;

  @Column("bit", { name: "YeuThich" })
  yeuThich: boolean;

  @OneToOne(() => Chitiethoadon, (chitiethoadon) => chitiethoadon.maMonAn2)
  chitiethoadon: Chitiethoadon;

  @ManyToOne(() => Danhmuc, (danhmuc) => danhmuc.monans)
  @JoinColumn([{ name: "MaDanhMuc", referencedColumnName: "maDanhMuc" }])
  maDanhMuc: Danhmuc;

  @OneToMany(() => Monanyeuthich, (monanyeuthich) => monanyeuthich.maMonAn)
  monanyeuthiches: Monanyeuthich[];
}
