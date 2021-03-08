import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Brands } from "./brands";

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

  @Column({ type: "float", precision: 10, scale: 6 })
  longitude!: number

  @Column({ type: "float", precision: 10, scale: 6 })
  latitude!: number

  @ManyToOne(() => Brands, (brand: Brands) => brand.brand_id)
  @JoinColumn({ name: 'brand_id' })
  public brand_id!: Brands;
}