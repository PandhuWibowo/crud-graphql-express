const express = require('express')
const {graphqlHTTP} = require('express-graphql')
import {schema} from './schema'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { Brands } from './entities/brands'
import { Outlets } from './entities/outlets'

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: 'db_crud_graphql',
    username: 'root',
    password: '',
    logging: true,
    synchronize: true,
    entities: [Brands, Outlets]
  })
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }))

  const PORT = 5000

  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
  })
}

main().catch((err) => {
  console.log(err)
})


