DROP KEYSPACE IF EXISTs nocap;

CREATE KEYSPACE nocap
  WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor': 1};

USE nocap;

CREATE TABLE reviewsByRestaurant (
  reviewId INT,
  date DATE,
  businessName TEXT,
  rating INT,
  comment TEXT,
  username TEXT,
  useful BOOLEAN,
  funny BOOLEAN,
  cool BOOLEAN,
  firstName TEXT,
  lastName TEXT,
  cityState TEXT,
  avatar TEXT,
  friends INT,
  photos INT,
  PRIMARY KEY (businessName, date, reviewId)
);

CREATE TABLE reviewsByUser (
  reviewId INT,
  date DATE,
  businessName TEXT,
  rating INT,
  comment TEXT,
  username TEXT,
  useful BOOLEAN,
  funny BOOLEAN,
  cool BOOLEAN,
  firstName TEXT,
  lastName TEXT,
  cityState TEXT,
  avatar TEXT,
  friends INT,
  photos INT,
  PRIMARY KEY (username, date, reviewId)
);