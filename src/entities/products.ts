import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Brands } from "./brands";

@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  product_id!: string

  @Column()
  name!: string

  @Column()
  picture!: string

  @Column({ type: "float", precision: 10, scale: 2 })
  price!: number

  @ManyToOne(() => Brands, (brand: Brands) => brand.brand_id)
  @JoinColumn({ name: 'brand_id' })
  public brand_id!: Brands;
}