import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInt } from 'graphql'

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    product_id: { type: GraphQLID },
    brand_id: { type: GraphQLID },
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    price: { type: GraphQLFloat }
  })
})

export const TotalProductType = new GraphQLObjectType({
  name: 'TotalProduct',
  fields: () => ({
    total: { type: GraphQLInt }
  })
})

