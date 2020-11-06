var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const { User, Credential, Card, Detail_order,Image, Instance_item, Item, Lpn, Offer, Order, Status_order, Store, Transaction } = require('./models/index')
const orderModel = require('./models/orderModel')

var schema = buildSchema(`
  type Query {
    hello: String,
    Users: [User],
    Credentials: [Credential],
    Cards: [Card],
    Detail_orders: [Detail_order],
    Images: [Image],
    Instance_items: [Instance_item],
    Items: [Item],
    Lpns: [Lpn],
    Offers: [Offer],
    Orders: [Order],
    Status_orders: [Status_order],
    Stores: [Store],
    Transactions: [Transaction]
  }
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential,
    createCard(data: inputCard): Card,
    createDetail_order(data: inputDetail_order): Detail_order,
    createImage(data: inputImage): Image,
    createInstance_item(data: inputInstance_item): Instance_item,
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
    credentials:[Credential],
    cards:[Card],
    items:[Item],
    orders:[Order],
    stores:[Store],
    transactions:[Transaction]

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
    timestamp_created: String,
    users:[User]
  }
  input inputCard {
    user_id: Int,
    number: Int,
    expiration: String,
    timestamp_modified: String,
    timestamp_created: String 
  }
  type Card{
    id: Int,
    user_id: Int,
    number: Int,
    expiration: String,
    timestamp_modified: String,
    timestamp_created: String, 
  }
  input inputDetail_order {
    order_id: Int,
    lpn_id: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Detail_order {
    id: Int,
    order_id: Int,
    lpn_id: Int,
    timestamp_modified: String,
    timestamp_created: String,
    orders:[Order],
    lpns:[Lpn]
  }
  input inputImage {
    instance_item_id: Int,
    url: String
  }
  type Image {
    id: Int,
    instance_item_id: Int,
    url: String,
    instance_items:[Instance_item]
  }
  input inputInstance_item {
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    precio: String,
    image: String,
    description: String
  }
  type Instance_item {
    id: Int,
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    precio: String,
    image: String,
    description: String,
    items:[Item]
  }
  input inputItem {
    user_id: Int,
    description: String
  }
  type Item {
    id:Int,
    user_id: Int,
    description: String,
    users:[User]
  }
  input inputLpn {
    instance_item_id: Int,
    lpn: Int
  }
  type Lpn {
    id: Int,
    instance_item_id: Int,
    lpn: Int,
    instance_items:[Instance_item]
  }
  input inputOffer {
    item_id: Int,
    timestamp_until: String,
    timestamp_since: String,
    porcentage: Int
  }
  type Offer {
    id: Int,
    item_id: Int,
    timestamp_until: String,
    timestamp_since: String,
    porcentage: Int,
    items:[Item]
  }
  input inputOrder {
    user_id: Int,
    description: Int,
    items: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Order {
    id: Int
    user_id: Int,
    description: Int,
    items: Int,
    timestamp_modified: String,
    timestamp_created: String,
    users:[User]
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
    timestamp_created: String,
    orders:[Order]
  }
  input inputStore {
    user_id: Int,
    name: String,
    adress: String,
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
    adress: String,
    location: String,
    latitude: String,
    longitude: String,
    reference: String,
    document: String,
    users:[User]
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
    id: Int
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    type: String,
    timestamp_modified: String,
    timestamp_created: String,
    users:[User],
    orders:[Order]
  }
`)

var root = {
  hello: () => 'Hello world!',
  Users: () => {
    return new Promise((resolve, reject) => {
      User.findAll({ include: Credential,})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Credentials: () => {
    return new Promise((resolve, reject) => {
      Credential.findAll({ include: User})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Cards: () => {
    return new Promise((resolve, reject) => {
      Card.findAll({ include: User})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Detail_orders: () => {
    return new Promise((resolve, reject) => {
      Detail_order.findAll({ include: Order, Lpn})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Images: () => {
    return new Promise((resolve, reject) => {
      Image.findAll({ include: Instance_item})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Instance_items: () => {
    return new Promise((resolve, reject) => {
      Instance_item.findAll({ include: Item})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Items: () => {
    return new Promise((resolve, reject) => {
      Item.findAll({ include: User})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Lpns: () => {
    return new Promise((resolve, reject) => {
      Lpn.findAll({ include: Instance_item})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Offers: () => {
    return new Promise((resolve, reject) => {
      Offer.findAll({ include: Item})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Orders: () => {
    return new Promise((resolve, reject) => {
      Order.findAll({ include: User})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Status_orders: () => {
    return new Promise((resolve, reject) => {
      Status_order.findAll({ include: Order})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Stores: () => {
    return new Promise((resolve, reject) => {
      Store.findAll({ include: User})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
  Transactions: () => {
    return new Promise((resolve, reject) => {
      Transaction.findAll({ include: User, Order})  
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {                   
          reject(err)
        })
    })
  },
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
