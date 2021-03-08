import { GraphQLID, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";
import { BrandType } from "../type-defs/brand";
import { MessageType } from '../type-defs/message'
import {Brands} from '../../entities/brands'

// Create new brand
export const createBrand = {
  type: new GraphQLObjectType({
    name: 'MessageCreateBrand',
    fields: () => ({
      response: { type: GraphQLString },
      message: { type: GraphQLString },
      name: { type: GraphQLString }
    })
  }),
  args: {
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    banner: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, logo, banner } = args
    try {
      const brand = await Brands.findOne({
        name
      })
      if (brand !== undefined) throw new Error("Brand name is exist")
      await Brands.insert({
        name, logo, banner
      })
      return { response: 'OK', message: `Brand of ${name} successfully created`, name: name}
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Update brand
export const updateBrand = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    banner: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, logo, banner } = args
    try {
      const brand = await Brands.findOne({
        name
      })

      if (brand === undefined || !brand) throw new Error("Brand name not found")
      else {
        await Brands.update({name}, {
          logo,
          banner
        })

        return { response: 'OK', message: `Brand of ${name} successfully updated`}
      }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Delete brand
export const deleteBrand = {
  type: MessageType,
  args: {
    brand_id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const { brand_id } = args
    try {
      await Brands.delete(brand_id)

      return { response: 'OK', message: `Brand id ${brand_id} successfully deleted`}
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}