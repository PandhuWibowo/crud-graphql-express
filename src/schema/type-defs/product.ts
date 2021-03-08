import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from 'graphql'

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