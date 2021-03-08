import { GraphQLList } from 'graphql'
import { BrandType } from '../type-defs/brand'
import {Brands} from '../../entities/brands'

export const getBrands = {
  type: new GraphQLList(BrandType),
  resolve() {
    return Brands.find()
  }
}