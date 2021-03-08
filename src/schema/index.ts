import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getBrands } from './queries/brand'
import { getOutlets } from './queries/outlet'
import { createBrand, deleteBrand, updateBrand } from './mutations/brand'
import { createOutlet, updateOutlet, deleteOutlet } from './mutations/outlet'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBrands,
    getOutlets
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBrand,
    deleteBrand,
    updateBrand,
    createOutlet,
    updateOutlet,
    deleteOutlet
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})