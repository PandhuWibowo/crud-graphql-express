import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Outlets } from "./outlets";

@Entity()
export class Brands extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  brand_id!: string

  @Column()
  name!: string

  @Column("text")
  logo!: string

  @Column("text")
  banner!: string
}