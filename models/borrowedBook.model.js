module.exports = (sequelize, DataTypes) => {
  const BorrowedBook = sequelize.define("BorrowedBook", {
    borrowedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    returned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return BorrowedBook;
};
