import { Column, Entity, Index, OneToMany } from "typeorm";
import { MonanNguyenlieu } from "./MonanNguyenlieu";

// @Index("PK__NGUYENLI__C75193551D9692B8", ["maNguyenLieu"], { unique: true })
@Entity("NGUYENLIEU", { schema: "dbo" })
export class Nguyenlieu {
  @Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
  maNguyenLieu: string;

  @Column("nvarchar", { name: "TenNguyenLieu", length: 50 })
  tenNguyenLieu: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @Column("nvarchar", { name: "donVi", length: 50 })
  donVi: string;

  @OneToMany(
    () => MonanNguyenlieu,
    (monanNguyenlieu) => monanNguyenlieu.maNguyenLieu2
  )
  monanNguyenlieus: MonanNguyenlieu[];
}
