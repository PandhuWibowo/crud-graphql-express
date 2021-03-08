import { GraphQLFloat, GraphQLID, GraphQLString } from "graphql";
import { MessageType } from '../type-defs/message'
import {Brands} from '../../entities/brands'
import { Outlets } from "../../entities/outlets";
import { Products } from "../../entities/products";

// Create new product
export const createProduct = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    price: { type: GraphQLFloat },
    brand_id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { name, picture, price, brand_id } = args
    try {
      const brand = await Brands.findOne(brand_id)
      if (brand === undefined || !brand) throw new Error("Brand name should exists")

      const outlet = await Products.findOne({name})
      if (outlet !== undefined) throw new Error('Product name has been exists')
      await Products.insert({
        name, picture, price, brand_id
      })
      return { response: 'OK', message: `Product of ${name} successfully created` }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Update product
export const updateProduct = {
  type: MessageType,
  args: {
    product_id: { type: GraphQLID },
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    price: { type: GraphQLFloat },
    brand_id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const { product_id, name, picture, price, brand_id } = args
    try {
      const brand = await Brands.findOne(brand_id)
      if (brand === undefined || !brand) throw new Error("Brand name should exists")
      const product = await Products.findOne(product_id)
      if (product === undefined || !product) throw new Error("Product name not found")
      else {
        await Products.update({product_id}, {
          name,
          picture,
          price,
          brand_id
        })

        return { response: 'OK', message: `Product of ${name} successfully updated`}
      }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Delete product
export const deleteProduct = {
  type: MessageType,
  args: {
    product_id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const { product_id } = args
    try {
      await Products.delete(product_id)

      return { response: 'OK', message: `Product id ${product_id} successfully deleted`}
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}