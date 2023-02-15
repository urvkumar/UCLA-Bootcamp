-- Add your code below and execute file in MySQL Shell --
SELECT favorite_books.book_name, favorite_books.in_stock, book_prices.price AS book_price FROM favorite_books JOIN book_prices ON favorite_books.book_price = book_prices.id;
