const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookReader extends Model {}

BookReader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'book',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
