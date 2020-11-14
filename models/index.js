const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')
const CardModel = require('./cardModel')
const DetailOrderModel = require('./detailOrderModel')
const InstanceItemModel = require('./instanceItemModel')
const ItemModel = require('./itemModel')
const LpnModel = require('./lpnModel')
const OfferModel = require('./offerModel')
const OrderModel = require('./ordermodel')
const StatusOrderModel = require('./statusOrderModel')
const StoreModel = require('./storeModel')
const TransactionModel = require('./transactionModel')
const ImageModel = require('./imageModel')

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)
const DetailOrder = DetailOrderModel(sequelize, Sequelize)
const InstanceItem = InstanceItemModel(sequelize, Sequelize)
const Item = ItemModel(sequelize, Sequelize)
const Lpn = LpnModel(sequelize, Sequelize)
const Offer = OfferModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const StatusOrder = StatusOrderModel(sequelize, Sequelize)
const Store = StoreModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const Image = ImageModel(sequelize, Sequelize)

User.associate({
  Credential: Credential,
  Card: Card,
  Item: Item,
  Store: Store,
  Order: Order,
  Transaction: Transaction
})
Order.associate({
  User: User,
  StatusOrder: StatusOrder,
  Transaction: Transaction,
  DetailOrder: DetailOrder
})
Item.associate({
  User: User,
  InstanceItem: InstanceItem,
  Offer: Offer
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
Credential.associate({ User: User })
Card.associate({ User: User })
Store.associate({ User: User })
Transaction.associate({
  Order: Order,
  User: User
})
Offer.associate({ Item: Item })
InstanceItem.associate({
  Item: Item,
  Image: Image,
  Lpn: Lpn
})
StatusOrder.associate({ Order: Order })

module.exports = {
  User,
  Credential,
  Card,
  DetailOrder,
  Image,
  InstanceItem,
  Item,
  Lpn,
  Offer,
  Order,
  StatusOrder,
  Store,
  Transaction
}
