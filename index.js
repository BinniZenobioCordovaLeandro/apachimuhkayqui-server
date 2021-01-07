const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Op = require('sequelize').Op
const cors=require('cors')

const {
  User, Credential, Card, Detail_Order, Image, InstanceItem, Item,
  Lpn, Offer, Order, StatusOrder, Store, Transaction, BreadCrumb, Item_BreadCrumb
} = require('./models/index')

const schema = buildSchema(`
  type Query {
    hello: String
    Users: [User],
    Credentials: Credential,
    Cards: [Card],
    Stores: [Store],
    Items(brand: String): [Item],
    Transactions: [Transaction],
    Orders: [Order],
    InstanceItems: [InstanceItem],
    Images: [Image],
    Lpns: [Lpn],
    Detail_Orders: [Detail_Order]

  }
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential,
    createCard(data: inputCard): Card,
    createDetail_Order(data: inputDetail_Order): Detail_Order,
    createImage(data: inputImage): Image,
    createInstanceItem(data: inputInstanceItem): InstanceItem,
    createItem(data: inputItem): Item,
    createLpn(data: inputLpn): Lpn,
    createOffer(data: inputOffer): Offer,
    createOrder(data: inputOrder): Order,
    createStatusOrder(data: inputStatusOrder): StatusOrder,
    createStore(data: inputStore): Store,
    createTransaction(data: inputTransaction): Transaction,
    createBreadCrumb(data: inputBreadCrumb): BreadCrumb,
    createItem_BreadCrumb(data: inputItem_BreadCrumb): Item_BreadCrumb

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
    stores:[Store],
    items:[Item],
    transactions: [Transaction],
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
  input inputDetail_Order {
  order_id: Int,
  lpn_id: Int,
  timestamp_modified: String,
  timestamp_created: String
  }
  type Detail_Order {
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
  input inputInstanceItem {
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    price: Float,
    image: String,
    description: String
  }
  type InstanceItem {
    id: Int,
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    price: Float,
    image: String,
    description: String,
    images : [Image],
    lpns: [Lpn]
  }
  input inputItem {
    user_id: Int,
    brand: String,
    model: String,
    description: String,
    price: Float
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
    offers: [Offer],
    instanceItems: [InstanceItem],
    user: User
  }
  input inputLpn{
    instance_item_id: Int, 
    lpn: Int
  }
  type Lpn {
    id: Int,
    instance_item_id: Int, 
    lpn: Int,
    detail_Orders:[Detail_Order]
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
    timestamp_created: String,
    detail_Orders: [Detail_Order]
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
    latitude: String,
    longitude: String,
    reference: String,
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
  input inputBreadCrumb {
    breadcrumb_id: Int,
    breadcrumb: String,
    description: String,
    path: String
  }
  type BreadCrumb {
    id: Int,
    breadcrumb_id: Int,
    breadcrumb: String,
    description: String,
    path: String
  }
  input inputItem_BreadCrumb {
    item_id: Int,
    breadcrumb_id: Int
  }
  type Item_BreadCrumb {
    id: Int,
    item_id: Int,
    breadcrumb_id: Int,
  }

`)
//son consolas..........................
var root = {
  Users: (obj, args, context, info) =>
    new Promise((resolve, reject) =>
      User.findAll({
        include: [Credential, Card, Store, Item, Transaction, Order ],
        where: {
          email: {
            [Op.eq]: obj.data.email
          },
          password: {
            [Op.eq]: obj.data.password
          }
        }
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Items: (obj, args,context,info) =>
  new Promise((resolve, reject) => {
      Item.findAll({ include: [Offer, User, InstanceItem],
      where:{
        brand:{
          [Op.like]: `%${obj.brand}%`
        }
      } 
      })
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    }),
  instanceItems: () => {
    return new Promise((resolve, reject) => {
      InstanceItem.findAll({ include: [Image, Lpn] })
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  lpns: () => {
    return new Promise((resolve, reject) => {
      Lpn.findAll({ include: [Detail_Order] })
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  orders: () => {
    return new Promise((resolve, reject) => {
      Order.findAll({ include: [Detail_Order] })
        .then((result) => {
          console.log(result)
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  //....estos son resolveres................
  //.....................................
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
  createDetail_Order: (input) => {
    return new Promise((resolve, reject) => {
      Detail_Order.create(JSON.parse(JSON.stringify(input.data)))
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
  createInstanceItem: (input) => {
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
  },
  createBreadCrumb: (input) => {
    return new Promise((resolve, reject) => {
      BreadCrumb.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  createItem_BreadCrumb: (input) => {
    return new Promise((resolve, reject) => {
      Item_BreadCrumb.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
