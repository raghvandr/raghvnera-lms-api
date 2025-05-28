const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql"
});

// Initialize db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load all models
db.User = require("./user.model")(sequelize, DataTypes);
db.Book = require("./book.model")(sequelize, DataTypes);
db.BorrowedBook = require("./borrowedBook.model")(sequelize, DataTypes);
db.Category = require("./category.model")(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.BorrowedBook, { foreignKey: "userId" });
db.BorrowedBook.belongsTo(db.User, { foreignKey: "userId" });

db.Book.hasMany(db.BorrowedBook, { foreignKey: "bookId" });
db.BorrowedBook.belongsTo(db.Book, { foreignKey: "bookId" });

// Export db
module.exports = db;
