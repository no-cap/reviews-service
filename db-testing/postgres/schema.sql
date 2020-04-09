CREATE TABLE restaurants (
  business_id INT NOT NULL AUTO_INCREMENT,
  business_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (business_id)
);

CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  comment VARCHAR(2000) NOT NULL,
  business_id INT NOT NULL,
  username VARCHAR (12) NOT NULL,
  useful BOOLEAN DEFAULT 'FALSE',
  funny BOOLEAN DEFAULT 'FALSE',
  cool BOOLEAN DEFAULT 'FALSE',
  PRIMARY KEY (review_id),
  FOREIGN KEY (business_id) REFERENCES restaurants(business_id),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE users (
  user_id INT NOT NULL,
  username VARCHAR(12) NOT NULL,
  first_name VARCHAR (15) NOT NULL,
  last_name VARCHAR (15) NOT NULL,
  city_state VARCHAR (30) NOT NULL,
  avatar VARCHAR (24) NOT NULL,
  friends INT NOT NULL,
  photos INT NOT NULL,
  PRIMARY KEY (username)
)