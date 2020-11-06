var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const { User, Credential, Card, Detail_order, Image, Instanceitem, Item,
 Lpn, Offer, Order, StatusOrder, Store, Transaction } = require('./models/index')

var schema = buildSchema(`
  type Query {
    hello: String
    Users: [User],
    Credentials: Credential,
    Cards: [Card],
    Stores: [Store],
    Items: [Item],
    Transactions: [Transaction],
    Orders: [Order]

  }
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential,
    createCard(data: inputCard): Card,
    createDetail_order(data: inputDetail_order): Detail_order,
    createImage(data: inputImage): Image,
    createInstanceitem(data: inputInstanceitem): Instanceitem,
    createItem(data: inputItem): Item,
    createLpn(data: inputLpn): Lpn,
    createOffer(data: inputOffer): Offer,
    createOrder(data: inputOrder): Order,
    createStatusOrder(data: inputStatusOrder): StatusOrder,
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
    Stores:[Store],
    Items:[Item],
    Transactions: [Transaction],
    Orders: [Order]
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
    timestamp_created: String
  }
   input inputImage {
    instance_item_id: Int,
    url: String
    }
    type Image {
      id: Int,
      instance_item_id: Int,
      url: String
    }
  input inputInstanceitem {
    item_id: Int,
    talla: Int,
    volumen: Int,
    color: String,
    precio: Int,
    image: String,
    description: String
  }
  type Instanceitem {
    id: Int,
    item_id: Int,
    talla: Int,
    volumen: Int,
    color: String,
    precio: Int,
    image: String,
    description: String
  }
  input inputItem {
    user_id: Int,
    description: String,
  }
  type Item {
    id: Int,
    user_id: Int,
    description: String
  }
  input inputLpn{
    instance_item_id: Int, 
    lpn: Int
  }
  type Lpn {
    id: Int,
    instance_item_id: Int, 
    lpn: Int
  }
  input inputOffer{
    item_id: Int, 
    timestamp_since: String,
    timestamp_until: String,
    percentage: Int
  }
  type Offer {
    id: Int,
    item_id: Int, 
    timestamp_since: String,
    timestamp_until: String,
    percentage: Int
  }
  input inputOrder{
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
  input inputStatusOrder{
    order_id: Int,
    description: String,
    status: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type StatusOrder {
    id: Int,
    order_id: Int,
    description: String,
    status: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  input inputStore {
    user_id: Int, 
    name: String,
    address: Int,
    location: Int,
    latitude: Int,
    longitude: Int,
    reference: Int,
    document: String
  }
  type Store {
    id: Int,
    user_id: Int, 
    name: String,
    address: Int,
    location: Int,
    latitude: Int,
    longitude: Int,
    reference: Int,
    document: String
  }
  input inputTransaction {
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    type: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Transaction {
    id: Int,
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    type: Int,
    timestamp_modified: String,
    timestamp_created: String
  }

`)

var root = {
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Credential})
      .then((result) => {
        console.log(result)
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Card})
      .then((result) => {
        console.log(result)
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Store})
      .then((result) => {
        console.log(result)
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Item})
      .then((result) => {
        console.log(result)
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Transaction})
      .then((result) => {
        console.log(result)
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  hello: () => 'Hello world!',
  Users: ()=>{
    return new Promise((resolve, reject)=>{
      User.findAll({include: Order})
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
  createInstanceitem: (input) => {
    return new Promise((resolve, reject) => {
      Instanceitem.create(JSON.parse(JSON.stringify(input.data)))
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
  createOffer: (input) => {
    return new Promise((resolve, reject) => {
      Offer.create(JSON.parse(JSON.stringify(input.data)))
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
  createStatusOrder: (input) => {
    return new Promise((resolve, reject) => {
      StatusOrder.create(JSON.parse(JSON.stringify(input.data)))
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
