'user strict'

function lpnModel (sequelize, Datatypes) {
  const lpnModel = sequelize.define(
    'lpn', {
      instance_item_id: Datatypes.INTEGER,
      lpn: Datatypes.INTEGER
    }, {
      timestamps: false,
      freezeTableName: false
    }
  )
  lpnModel.associate = (models) => {
    lpnModel.belongsTo(models.InstanceItem, {
      foreignKey: 'instance_item_id'
    })
    lpnModel.hasMany(models.DetailOrder, {
      foreignKey: 'order_id'
    })
  }
  return lpnModel
}

module.exports = lpnModel
