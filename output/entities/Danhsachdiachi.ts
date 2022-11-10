import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Khachhang } from "./Khachhang";

// @Index("PK__DANHSACH__EB61213E3DEA53AF", ["maDiaChi"], { unique: true })
@Entity("DANHSACHDIACHI", { schema: "dbo" })
export class Danhsachdiachi {
  @Column("nvarchar", { primary: true, name: "MaDiaChi", length: 10 })
  maDiaChi: string;

  @Column("nvarchar", { name: "DiaChi", length: 50 })
  diaChi: string;

  @Column("nvarchar", { name: "TenDiaChi", length: 50 })
  tenDiaChi: string;

  @OneToMany(() => Chitietdonhang, (chitietdonhang) => chitietdonhang.maDiaChi)
  chitietdonhangs: Chitietdonhang[];

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.danhsachdiachis)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;
}
