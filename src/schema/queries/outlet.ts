import { GraphQLList } from 'graphql'
import { OutletType } from '../type-defs/outlet'
import { Outlets } from '../../entities/outlets'

export const getOutlets = {
  type: new GraphQLList(OutletType),
  resolve() {
    return Outlets.find()
  }
}