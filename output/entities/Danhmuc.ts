import { Column, Entity, Index, OneToMany } from "typeorm";
import { Monan } from "./Monan";

@Index("PK__DANHMUC__B37508876435050E", ["maDanhMuc"], { unique: true })
@Entity("DANHMUC", { schema: "dbo" })
export class Danhmuc {
  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 50 })
  maDanhMuc: string;

  @Column("nvarchar", { name: "TenDanhMuc", nullable: true, length: 50 })
  tenDanhMuc: string | null;

  @Column("image", { name: "HinhAnh", nullable: true })
  hinhAnh: Buffer | null;

  @OneToMany(() => Monan, (monan) => monan.maDanhMuc2)
  monans: Monan[];
}
