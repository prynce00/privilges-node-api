const { MONGO_URI, PORT } = process.env
import { ApolloServer } from 'apollo-server-express'
import parser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { connect } from 'mongoose'

import auth from './auth'
import { mutations, queries } from './resolvers'
import routes from './routes'
import typeDefs from './schema'

const app = express()

connect(MONGO_URI as string, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const schema = applyMiddleware(
  makeExecutableSchema({
    resolvers: {
      Mutation: mutations,
      Query: queries
    },
    typeDefs
  }),
  auth
)

const server = new ApolloServer({
  async context({
    req
  }): Promise<{
    // user: UserDocument | null
    result: boolean
  }> {
    // const user = await getUser(req)

    // return {
    //   user
    // }

    const result = true
    return {
      result
    }
  },
  schema
})

app.use(cors())

app.use(parser.urlencoded({ extended: false }))

app.use(parser.json())

app.use(routes)

server.applyMiddleware({ app, path: '/' })

app.listen({
  port: Number(PORT)
})

console.log(`Listening to: ${PORT}`)
