import { Column, Entity, Index, OneToMany } from "typeorm";
import { Monan } from "./Monan";

// @Index("PK__DANHMUC__B37508877D270568", ["maDanhMuc"], { unique: true })
@Entity("DANHMUC", { schema: "dbo" })
export class Danhmuc {
  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 5 })
  maDanhMuc: string;

  @Column("nvarchar", { name: "TenDanhMuc", length: 50 })
  tenDanhMuc: string;

  @Column("nvarchar", { name: "HinhAnh", length: 250 })
  hinhAnh: string;

  @OneToMany(() => Monan, (monan) => monan.maDanhMuc)
  monans: Monan[];
}
