var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const { User, Credential,Card,Detail_order,Image,InstanceItem,Item,Lpn,Offer,Order,Status_order,Store,Transaction } = require('./models/index')
const userModel = require('./models/userModel')
var schema = buildSchema(`
type Query {
  hello: String,
  Users: [User],
  Credentials: [Credential],
  Cards: [Card],
  Items: [Item],
  Stores: [Store],
  Orders: [Order],
  InstanceItems: [InstanceItem],
  Detail_orders:[Deatil_order],
  Images:[Image],
  Lpns:[lpn],
  Offers:[offer],
  Status_orders:[Status_orders],
  Transactions:[Transaction]

}
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential,
    createCard(data: inputCard): Card,  
    createDetail_order(data: inputDetail_order): Detail_order,
    createImage(data: inputImage): Image,
    createInstanceItem(data: inputInstanceItem): InstanceItem,
    createItem(data: inputItem): Item,
    createLpn(data: inputLpn): Lpn,
    createOffer(data: inputOffer): Offer,
    createOrder(data: inputOrder): Order,
    createStatus_order(data: inputStatus_order): Status_order,
    createStore(data: inputStore): Store,
    createTransaction(data: inputTransaction): Transaction
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
    cards: [Card],
    items: [Item],
    stores: [Store],
    orders: [Order]
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
  input inputDetail_order {
    order_id: Int
    lpn_id: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Detail_order {
    id: Int,
    order_id: Int
    lpn_id: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  input inputImage {
    instance_item_id: Int
    url: String
  }
  type Image {
    id: Int,
    instance_item_id: Int 
    url: String
  }
  input inputInstanceItem {
    item_id: Int,
    talla: Int,
    volumen: Int,
    color: String,
    precio: String,
    image: String,
    description: String
  }
  type InstanceItem {
    id: Int,
    item_id: Int,
    talla: Int,
    volumen: Int,
    color: String,
    precio: String,
    image: String,
    description: String
  }
  input inputItem {
    user_id: Int,
    description: String
  }
  type Item {
    id: Int,
    user_id: Int,
    description: String,
    instanceItems: [InstanceItem]
  }
  input inputLpn {
    instance_item_id: Int,
    lpn: Int
  }
  type Lpn{
    id: Int,
    instance_item_id: Int,
    lpn: Int
  }
  input inputOffer {
    item_id: Int,
    timestamp_since: String,
    timestamp_until: String,
    porcentaje: Int
  }
  type Offer {
    id: Int,
    item_id: Int,
    timestamp_since: String,
    timestamp_until: String,
    porcentaje: Int
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
  input inputStatus_order {
    order_id: Int,
    description: Int,
    status: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Status_order {
    id: Int,
    order_id: Int,
    description: Int,
    status: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  input inputStore {
    user_id: Int,
    name: String,
    address: String,
    location: String,
    latitude: String,
    longitude: String,
    reference: String,
    document: String
  }
  type Store {
    id: Int,
    user_id: Int,
    name: String,
    address: String,
    location: String,
    latitude: String
    longitude: String,
    reference: String,
    document: String
  }
  input inputTransaction {
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    type: String,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Transaction {
    id: Int,
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    type: String,
    timestamp_modified: String,
    timestamp_created: String
  }
`)

var root = {
  hello: () => 'Hello world!',
  Users: () => {
    return new Promise((resolve,reject) => {
      User.findAll({include: Credential})
      .then((result) => {
        console. log(result)
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
  createDetail_order: (input) => {
    return new Promise((resolve, reject) => {
      Detail_order.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createImage: (input) => {
    return new Promise((resolve, reject) => {
      Image.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  CreateInstanceItem: (input) => {
    return new Promise((resolve, reject) => {
      InstanceItem.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createItem: (input) => {
    return new Promise((resolve, reject) => {
      Item.create(JSON.parse(JSON.stringify(input.data)))
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
    createStatus_order: (input) => {
      return new Promise((resolve, reject) => {
        Status_order.create(JSON.parse(JSON.stringify(input.data)))
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    createStore: (input) => {
      return new Promise((resolve, reject) => {
        Store.create(JSON.parse(JSON.stringify(input.data)))
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    createTransaction: (input) => {
      return new Promise((resolve, reject) => {
        Transaction.create(JSON.parse(JSON.stringify(input.data)))
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