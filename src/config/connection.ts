require('dotenv').config()
import { Brands } from '../entities/brands'
import { Outlets } from '../entities/outlets'
import { Products } from '../entities/products'

const database = {
  type: process.env.DATABASE_TYPE,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD || '',
  logging: false,
  synchronize: true,
  entities: [Brands, Outlets, Products]
}

export {
  database
}