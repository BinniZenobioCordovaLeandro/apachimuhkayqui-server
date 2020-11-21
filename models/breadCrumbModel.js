'use strict'

function breadCrumbModel (sequalize, DataTypes) {
  const breadCrumbModel = sequalize.define(
    'breadCrumb',
    {
      breadcrumb_id: DataTypes.INTEGER,
      breadcrumb: DataTypes.STRING,
      description: DataTypes.STRING,
      path: DataTypes.BLOB

    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return breadCrumbModel
}
module.exports = breadCrumbModel