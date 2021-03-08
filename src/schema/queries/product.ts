import { GraphQLList } from 'graphql'
import { ProductType, TotalProductType } from '../type-defs/product'
import { Products } from '../../entities/products'

export const getTotalProducts = {
  type: TotalProductType,
  async resolve() {
    const products = await Products.find()
    return { total: products.length }
  }
}

export const getProducts = {
  type: new GraphQLList(ProductType),
  async resolve() {
    return Products.find()
  }
}