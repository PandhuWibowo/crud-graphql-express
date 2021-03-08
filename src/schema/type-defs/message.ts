import { GraphQLObjectType, GraphQLString } from 'graphql'

export const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    response: { type: GraphQLString },
    message: { type: GraphQLString }
  })
})