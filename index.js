var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const { User, Credential, Card, Order, Lpn, DetailOrders } = require('./models/index')

var schema = buildSchema(`
  type Query {
    hello: String,
    Users: [User],
    Credentials: Credential
  }
  type Mutation{
    createUser(data: inputUser): User
    createCredential(data: inputCredential): Credential
    createCard(data: inputCard): Card
    createOrder(data: inputOrder): Order
    createLpn(data: inputLpn): Lpn
    createDetailOrders(data: inputDetailOrders): DetailOrders
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
    document: Int
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
    timestamp_created: String
  }
  input inputOrder {
    user_id: Int,
    description: Int,
    items: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Order {
  id: Int,
  user_id: Int,
  description: Int,
  items: Int,
  timestamp_modified: String,
  timestamp_created: String
  }
  input inputLpn {
    instance_item_id: Int,
    lpn: Int
  }
  type Lpn {
    id: Int,
    instance_item_id: Int,
    lpn: Int
    }
    input inputDetailOrders {
      order_id: Int,
      lpn_id: Int,
      timestamp_modified: String,
      timestamp_created: String
    }
    type DetailOrders {
      id: Int,
      order_id: Int,
      lpn_id: Int,
      timestamp_modified: String,
      timestamp_created: String
      }
  
`)

var root = {
  hello: () => 'Hello world!',
  Users: () => {
    return new Promise((resolve, reject) => {
      User.findAll({ include: Credential })
        .then((result) => {
          console.log(result)
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
  },
  createCard: (input) => {
    return new Promise((resolve, reject) => {
      Card.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createOrder: (input) => {
    return new Promise((resolve, reject) => {
      Order.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createLpn: (input) => {
    return new Promise((resolve, reject) => {
      Lpn.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createDetailOrders: (input) => {
    return new Promise((resolve, reject) => {
      DetailOrders.create(JSON.parse(JSON.stringify(input.data)))
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
