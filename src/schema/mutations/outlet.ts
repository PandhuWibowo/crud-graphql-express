import { GraphQLFloat, GraphQLID, GraphQLString } from "graphql";
import { MessageType } from '../type-defs/message'
import {Brands} from '../../entities/brands'
import { OutletType } from "../type-defs/outlet";
import { Outlets } from "../../entities/outlets";

// Create new outlet
export const createOutlet = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    address: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat },
    brand_id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { name, picture, address, longitude, latitude, brand_id } = args
    try {
      const brand = await Brands.findOne(brand_id)
      if (brand === undefined || !brand) throw new Error("Brand name should exists")

      const outlet = await Outlets.findOne({name})
      if (outlet !== undefined) throw new Error('Outlet name has been exists')
      await Outlets.insert({
        name, picture, address, longitude, brand_id, latitude
      })
      return { response: 'OK', message: `Outlet of ${name} successfully created` }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Update outlet
export const updateOutlet = {
  type: MessageType,
  args: {
    outlet_id: { type: GraphQLID },
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    address: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat },
    brand_id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const { outlet_id, name, picture, address, longitude, latitude, brand_id } = args
    try {
      const brand = await Brands.findOne(brand_id)
      if (brand === undefined || !brand) throw new Error("Brand name should exists")
      const outlet = await Outlets.findOne(outlet_id)
      if (outlet === undefined || !outlet) throw new Error("Outlet name not found")
      else {
        await Outlets.update({outlet_id}, {
          name,
          picture,
          address,
          longitude,
          latitude,
          brand_id
        })

        return { response: 'OK', message: `Outlet of ${name} successfully updated`}
      }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

// Delete brand
export const deleteOutlet = {
  type: MessageType,
  args: {
    outlet_id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const { outlet_id } = args
    try {
      await Outlets.delete(outlet_id)

      return { response: 'OK', message: `Outlet id ${outlet_id} successfully deleted`}
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}