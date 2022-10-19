import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Thongtinkhachhang } from "./Thongtinkhachhang";

@Index("PK__YKIENKHA__E0C144F3332CF27D", ["maYKien", "maKhachHang"], {
  unique: true,
})
@Entity("YKIENKHACHHANG", { schema: "dbo" })
export class Ykienkhachhang {
  @Column("nvarchar", { primary: true, name: "MaYKien", length: 10 })
  maYKien: string;

  @Column("nvarchar", { primary: true, name: "MaKhachHang", length: 10 })
  maKhachHang: string;

  @Column("nvarchar", { name: "NoiDung", nullable: true, length: 500 })
  noiDung: string | null;

  @ManyToOne(
    () => Thongtinkhachhang,
    (thongtinkhachhang) => thongtinkhachhang.ykienkhachhangs
  )
  @JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
  maKhachHang2: Thongtinkhachhang;
}
