const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Op = require('sequelize').Op
const cors = require('cors')

const { User, Credential, Card, DetailOrder, Image, InstanceItem, Item, Lpn, Offer, Order, StatusOrder, Store, Transaction } = require('./models/index')

const schema = buildSchema(`
type Query {
  hello: String,
  Users(data: inputUser): [User],
  Credentials: [Credential],
  Cards: [Card],
  Stores: [Store],
  Orders: [Order],
  Status_orders: [StatusOrder],
  Transactions: [Transaction],
  Items(brand: String): [Item],
  Offers: [Offer],
  Instance_items: [InstanceItem],
  Images: [Image],
  Lpns: [Lpn],
  Detail_orders: [DetailOrder]
}
  type Mutation{
    createUser(data: inputUser): User,
    createCredential(data: inputCredential): Credential,
    createCard(data: inputCard): Card,  
    createDetailOrder(data: inputDetailOrder): DetailOrder,
    createImage(data: inputImage): Image,
    createInstanceItem(data: inputInstanceItem): InstanceItem,
    createItem(data: inputItem): Item,
    createLpn(data: inputLpn): Lpn,
    createOffer(data: inputOffer): Offer,
    createOrder(data: inputOrder): Order,
    createStatusOrder(data: inputStatusOrder): StatusOrder,
    createStore(data: inputStore): Store,
    createTransaction(data: inputTransaction): Transaction
  }
  input inputUser {
    id: Int,
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
    credentials: [Credential],
    cards: [Card],
    stores: [Store],
    orders: [Order],
    transaction: [Transaction],
    item: [Item]
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
  input inputDetailOrder {
    order_id: Int
    lpn_id: Int,
    items: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type DetailOrder {
    id: Int,
    order_id: Int,
    lpn_id: Int,
    items: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  input inputInstanceItem {
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    precio: String,
    image: String,
    description: String
  }
  type InstanceItem {
    id: Int,
    item_id: Int,
    talla: String,
    volumen: String,
    color: String,
    precio: String,
    image: String,
    description: String
    images: [Image]
    lpns: [Lpn]
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
  input inputItem {
    user_id: Int,
    brand: String,
    model: String,
    description: String,
    price: Float,
    original_price: Float,
    image: String
  }
  type Item {
    id: Int,
    user_id: Int,
    brand: String,
    model: String,
    description: String,
    price: Float,
    original_price: Float,
    image: String,
    offers: [Offer]
    instance_items: [InstanceItem]
    user: User
  }
  input inputLpn {
    instance_item_id: Int,
    lpn: Int
  }
  type Lpn{
    id: Int,
    instance_item_id: Int,
    lpn: Int
    detail_orders: [DetailOrder]
  }
  input inputOffer {
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
    transactions: [Transaction]
    status_orders: [StatusOrder]
    detail_orders: [DetailOrder]
  }
  input inputStatusOrder {
    order_id: Int,
    description: Int,
    status: Int,
    timestamp_modified: String,
    timestamp_created: String
  }
  type StatusOrder {
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
    latituded: String,
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
    latituded: String
    longitude: String,
    reference: String,
    document: String
  }
  input inputTransaction {
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    Type: String,
    timestamp_modified: String,
    timestamp_created: String
  }
  type Transaction {
    id: Int,
    user_id: Int,
    order_id: Int,
    description: String,
    value: Int,
    Type: String,
    timestamp_modified: String,
    timestamp_created: String
  }
`)

const root = {
  hello: () => 'Hello world', /* user-start */
  Users: (obj, args, context, info) =>
    new Promise((resolve, reject) =>
      User.findAll({
        include: [Credential, Card, Store, Order, Transaction, Item],
        where: {
          email: {
            [Op.eq]: obj.data.email
          }
        }
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Credentials: () =>
    new Promise((resolve, reject) =>
      Credential.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Orders: () =>
    new Promise((resolve, reject) =>
      Order.findAll({ include: [Transaction, DetailOrder, StatusOrder] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Items: (obj, args, context, info) =>
    new Promise((resolve, reject) =>
      Item.findAll({
        include: [Offer, InstanceItem, User],
        where: {
          brand: {
            [Op.like]: `%${obj.brand}%`
          }
        }
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Instance_items: () =>
    new Promise((resolve, reject) =>
      InstanceItem.findAll({ include: [Image, Lpn, Item] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Lpns: () =>
    new Promise((resolve, reject) =>
      Lpn.findAll({ include: [DetailOrder, InstanceItem] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Cards: () =>
    new Promise((resolve, reject) =>
      Card.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Detail_orders: () =>
    new Promise((resolve, reject) =>
      DetailOrder.findAll({ include: [Lpn, Order] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Images: () =>
    new Promise((resolve, reject) =>
      Image.findAll({ include: [InstanceItem] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Offers: () =>
    new Promise((resolve, reject) =>
      Card.findAll({ include: [Item] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Status_orders: () =>
    new Promise((resolve, reject) =>
      StatusOrder.findAll({ include: [Order] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Stores: () =>
    new Promise((resolve, reject) =>
      Store.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  Transactions: () =>
    new Promise((resolve, reject) =>
      Transaction.findAll({ include: [User] })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  /* ------lpn-end------ */
  /* ------lpn-end------ */
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
  createDetailOrder: (input) =>
    new Promise((resolve, reject) =>
      DetailOrder.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createImage: (input) =>
    new Promise((resolve, reject) =>
      Image.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createItem: (input) =>
    new Promise((resolve, reject) =>
      Item.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createInstanceItem: (input) =>
    new Promise((resolve, reject) =>
      InstanceItem.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createCard: (input) =>
    new Promise((resolve, reject) =>
      Card.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createOffer: (input) =>
    new Promise((resolve, reject) =>
      Offer.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createLpn: (input) =>
    new Promise((resolve, reject) =>
      Lpn.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createOrder: (input) =>
    new Promise((resolve, reject) =>
      Order.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createStatusOrder: (input) =>
    new Promise((resolve, reject) =>
      StatusOrder.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createStore: (input) =>
    new Promise((resolve, reject) =>
      Store.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    ),
  createTransaction: (input) =>
    new Promise((resolve, reject) =>
      Transaction.create(JSON.parse(JSON.stringify(input.data)))
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    )
}
const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
