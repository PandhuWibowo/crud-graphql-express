import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getBrands } from './queries/brand'
import { createBrand, deleteBrand, updateBrand } from './mutations/brand'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBrands
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBrand,
    deleteBrand,
    updateBrand
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})