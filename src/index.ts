const express = require('express')
const {graphqlHTTP} = require('express-graphql')
import {schema} from './schema'
import cors from 'cors'
import { createConnection } from 'typeorm'
const connection = require('./config/connection')

const main = async () => {
  await createConnection(connection.database)
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


