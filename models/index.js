const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')
const CardModel = require('./cardModel')
const ImageModel = require('./imageModel')
const ItemModel = require('./itemModel')
const LpnModel = require('./lpnModel')
const OfferModel = require('./offerModel')
const OrderModel = require('./orderModel')
const StatusOrderModel = require('./statusOrderModel')
const TransactionModel = require('./transactionModel')
const DetailOrderModel = require('./detailOrderModel')
const InstanceItemModel = require('./instanceItemModel')
const StoreModel = require('./storeModel')

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)
const Image = ImageModel(sequelize, Sequelize)
const Item = ItemModel(sequelize, Sequelize)
const Lpn = LpnModel(sequelize, Sequelize)
const Offer = OfferModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const StatusOrder = StatusOrderModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const DetailOrder = DetailOrderModel(sequelize, Sequelize)
const InstanceItem = InstanceItemModel(sequelize, Sequelize)
const Store = StoreModel(sequelize, Sequelize)

User.associate({
  Credential: Credential,
  Card: Card,
  Item: Item,
  Store: Store,
  Order: Order,
  Transaction: Transaction
})
Credential.associate({ User: User })
Card.associate({ User: User })
Store.associate({ User: User })
Order.associate({
  User: User,
  StatusOrder: StatusOrder,
  Transaction: Transaction,
  DetailOrder: DetailOrder
})
Transaction.associate({
  Order: Order,
  User: User
})
Item.associate({
  User: User,
  InstanceItem: InstanceItem,
  Offer: Offer
})
Offer.associate({ Item: Item })
InstanceItem.associate({
  Item: Item,
  Image: Image,
  Lpn: Lpn
})
Image.associate({ InstanceItem: InstanceItem })
Lpn.associate({
  InstanceItem: InstanceItem,
  DetailOrder: DetailOrder
})
DetailOrder.associate({
  Lpn: Lpn,
  Order: Order
})
StatusOrder.associate({ Order: Order })

module.exports = {
  User,
  Credential,
  Card,
  Image,
  Item,
  Lpn,
  Offer,
  Order,
  StatusOrder,
  Transaction,
  DetailOrder,
  InstanceItem,
  Store
}
