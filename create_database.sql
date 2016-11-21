-- Database name
CREATE TABLE treats(
  id SERIAL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  description VARCHAR(3000) NOT NULL,
  pic VARCHAR(3000) NOT NULL
);


INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');


-- Document your create tables SQL here
