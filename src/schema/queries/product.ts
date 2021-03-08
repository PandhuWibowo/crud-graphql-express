import { GraphQLList } from 'graphql'
import { ProductType } from '../type-defs/product'
import { Products } from '../../entities/products'

export const getProducts = {
  type: new GraphQLList(ProductType),
  resolve() {
    return Products.find()
  }
}