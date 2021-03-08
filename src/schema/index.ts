import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getBrands } from './queries/brand'
import { getOutlets } from './queries/outlet'
import { createBrand, deleteBrand, updateBrand } from './mutations/brand'
import { createOutlet, updateOutlet, deleteOutlet } from './mutations/outlet'
import { createProduct, updateProduct, deleteProduct } from './mutations/product'
import { getProducts, getTotalProducts } from './queries/product'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getBrands,
    getOutlets,
    getProducts,
    getTotalProducts
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
    deleteOutlet,
    createProduct,
    updateProduct,
    deleteProduct
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})