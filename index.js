var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')
var cors = require('cors')

const { User, Credential, Card, Item } = require('./models/index')

var schema = buildSchema(`
  type Query {
    Users: [User],
    Credentials: [Credential],
    Cards: [Card],
    Items: [Item]
  }
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential
    createCard(data: inputCard): Card,
    createItem(data: inputItem): Item
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
    credentials: [Credential],
    cards: [Card]
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
  input inputCard {
    user_id: Int,
    number: Int,
    expiration: String,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Card {
    id: Int,
    user_id: Int,
    number: Int,
    expiration: String,
    timestamp_modified: String,
    timestamp_created: String,
    user: User
  }
  input inputItem {
    user_id: Int,
    brand: String,
    model: String,
    description: String,
    price: Float,
    image: String
  }
  type Item {
    id: Int,
    user_id: Int,
    brand: String,
    model: String,
    description: String,
    price: Float,
    image: String,
    user: User
  }
`)

var root = {
  Users: () =>
    new Promise((resolve, reject) =>
      User.findAll({ include: [Credential, Card] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Credentials: () =>
    new Promise((resolve, reject) =>
      Credential.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Cards: () =>
    new Promise((resolve, reject) =>
      Card.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Items: () =>
    new Promise((resolve, reject) =>
      Item.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createUser: (input) =>
    new Promise((resolve, reject) =>
      User.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createCredential: (input) =>
    new Promise((resolve, reject) =>
      Credential.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createCard: (input) =>
    new Promise((resolve, reject) =>
      Card.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createItem: (input) =>
    new Promise((resolve, reject) =>
      Item.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    )
}

var app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
