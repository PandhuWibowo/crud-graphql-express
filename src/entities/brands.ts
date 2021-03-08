import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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