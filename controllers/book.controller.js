const { Book, Category } = require("../models");

exports.createBook = async (req, res) => {
  try {
    const { title, author, isbn, categoryIds } = req.body;
    const book = await Book.create({ title, author, isbn });
    if (categoryIds && categoryIds.length > 0) {
      await book.setCategories(categoryIds);
    }
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const { categoryId } = req.query;
    let books;
    if (categoryId) {
      books = await Book.findAll({
        include: [{
          model: Category,
          where: { id: categoryId }
        }]
      });
    } else {
      books = await Book.findAll({ include: Category });
    }
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
