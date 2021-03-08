import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Outlets extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  outlet_id!: string

  @Column()
  name!: string

  @Column()
  picture!: string

  @Column()
  address!: string

  @Column("decimal")
  longitude!: number

  @Column("decimal")
  latitude!: number
}