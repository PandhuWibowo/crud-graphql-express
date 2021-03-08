import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const BrandType = new GraphQLObjectType({
  name: 'Brand',
  fields: () => ({
    brand_id: { type: GraphQLID },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    banner: { type: GraphQLString },
  })
})