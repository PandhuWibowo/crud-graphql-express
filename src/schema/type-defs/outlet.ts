import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from 'graphql'

export const OutletType = new GraphQLObjectType({
  name: 'Outlet',
  fields: () => ({
    outlet_id: { type: GraphQLID },
    brand_id: { type: GraphQLID },
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    address: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat }
  })
})