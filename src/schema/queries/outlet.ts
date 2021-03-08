import { GraphQLList } from 'graphql'
import { OutletType } from '../type-defs/outlet'
import { Outlets } from '../../entities/outlets'
import { calcCrow } from '../../utils/helper'

export const getOutlets = {
  type: new GraphQLList(OutletType),
  async resolve() {
    const outlets: any = await Outlets.find()
    /**
     * Source Google Maps
     * https://www.google.co.id/maps/place/Monumen+Nasional/@-6.1753871,106.8249641,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528
     */
    const monasLat: number = -6.1753871
    const monasLong: number = 106.8249641
    const outletsLongLat: any[] = []
    for (const outlet of outlets) {
      outlet.distance = calcCrow(monasLat, monasLong, outlet.latitude, outlet.longitude)
    }
    outlets.sort((a: any, b: any) => a.distance - b.distance)
    return outlets
  }
}