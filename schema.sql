DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
    
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shoes', 'Footwear', '100', '25');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coat', 'Apparrel', '150', '10');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shirt', 'Apparrel', '15', '100');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Computer', 'Technology', '1000', '3');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Television', 'Technology', '400', '18');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Book', 'Educatkion', '25', '300');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pots', 'Kitchen', '200', '32');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Candy', 'Food', '3', '200');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Desk', 'Furniture', '250', '25');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Couch', 'Furniture', '350', '9');

SELECT * FROM products