var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const { User, Credential } = require('./models/index')

var schema = buildSchema(`
  type Query {
    hello: String,
    Users: [User],
    Credentials: Credential
  }
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential
  }
  input inputUser {
    fullname: String,
    alias: String,
    email: String,
    phone: Int,
    document: Int
  }
  type User {
    id: Int,
    fullname: String,
    alias: String,
    email: String,
    phone: Int,
    document: Int,
    credentials: [Credential]
  }
  input inputCredential {
    user_id: Int,
    password: String,
    timestamp_created: String
  }
  type Credential {
    id: Int,
    user_id: Int,
    password: String,
    timestamp_created: String
  }
`)

var root = {
  hello: () => 'Hello world!',
  Users: () => {
    return new Promise((resolve, reject) => {
      User.findAll({ include: Credential })
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createUser: (input) => {
    return new Promise((resolve, reject) => {
      User.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createCredential: (input) => {
    return new Promise((resolve, reject) => {
      Credential.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
