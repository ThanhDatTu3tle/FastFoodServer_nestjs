import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Danhmucyeuthich } from "./Danhmucyeuthich";
import { Donghoadon } from "./Donghoadon";
// import { Danhmuc } from "./Danhmuc";

// @Index("PK__MONAN__DA2046AD92DB159C", ["maMonAn", "maDanhMuc"], {
//   unique: true,
// })
@Entity("MONAN", { schema: "dbo" })
export class Monan {
  @Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
  maMonAn: string;

  @Column("nvarchar", { name: "TenMonAn", nullable: true, length: 50 })
  tenMonAn: string | null;

  @Column("nvarchar", { name: "ChiTiet", nullable: true, length: 100 })
  chiTiet: string | null;

  @Column("nvarchar", { name: "HinhAnhMonAn", nullable: true, length: 250 })
  hinhAnhMonAn: string | null;

  @Column("decimal", {
    name: "SoLuong",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  soLuong: number | null;

  @Column("nvarchar", { name: "MonAnKem", nullable: true, length: 50 })
  monAnKem: string | null;

  @Column("decimal", {
    name: "GiaTien",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  giaTien: number | null;

  @Column("decimal", {
    name: "GiaGoc",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  giaGoc: number | null;

  @Column("decimal", {
    name: "GiamGia",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  giamGia: number | null;

  @Column("bit", { name: "YeuThich", nullable: true })
  yeuThich: boolean | null;

  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 50 })
  maDanhMuc: string;

  @OneToMany(() => Danhmucyeuthich, (danhmucyeuthich) => danhmucyeuthich.monan)
  danhmucyeuthiches: Danhmucyeuthich[];

  @OneToMany(() => Donghoadon, (donghoadon) => donghoadon.monan)
  donghoadons: Donghoadon[];

  // @ManyToOne(() => Danhmuc, (danhmuc) => danhmuc.monans)
  // @JoinColumn([{ name: "MaDanhMuc", referencedColumnName: "maDanhMuc" }])
  // maDanhMuc2: Danhmuc;
}
