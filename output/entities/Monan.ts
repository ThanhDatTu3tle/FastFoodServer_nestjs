import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Danhmuc } from "./Danhmuc";
import { MonanDonhang } from "./MonanDonhang";
import { MonanNguyenlieu } from "./MonanNguyenlieu";
import { Monanyeuthich } from "./Monanyeuthich";

// @Index("PK__MONAN__B1171625C1226914", ["maMonAn"], { unique: true })
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

  @ManyToOne(() => Danhmuc, (danhmuc) => danhmuc.monans)
  @JoinColumn([{ name: "MaDanhMuc", referencedColumnName: "maDanhMuc" }])
  maDanhMuc: Danhmuc;

  @OneToMany(() => MonanDonhang, (monanDonhang) => monanDonhang.maMonAn2)
  monanDonhangs: MonanDonhang[];

  @OneToMany(
    () => MonanNguyenlieu,
    (monanNguyenlieu) => monanNguyenlieu.maMonAn2
  )
  monanNguyenlieus: MonanNguyenlieu[];

  @OneToMany(() => Monanyeuthich, (monanyeuthich) => monanyeuthich.maMonAn)
  monanyeuthiches: Monanyeuthich[];
}
