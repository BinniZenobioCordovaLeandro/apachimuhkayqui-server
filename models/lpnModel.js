'use strict'

function lpnModel (sequalize, DataTypes) {
  const lpnModel = sequalize.define(
    'lpn',
    {
      instance_item_id: DataTypes.INTEGER,
      lpn: DataTypes.INTEGER
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  lpnModel.associate=(models)=>{
    lpnModel.belongsTo(models.InstanceItem, {
      foreignKey: 'instance_item_id'
    })
    lpnModel.hasMany(models.Detail_Order, {
      foreignKey: 'lpn_id'
    })
  }
  return lpnModel
}
module.exports = lpnModel
