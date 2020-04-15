DROP KEYSPACE IF EXISTS nocap;

CREATE KEYSPACE nocap
  WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor': 1};

USE nocap;

CREATE TABLE reviewsByBusiness (
  reviewId INT,
  date DATE,
  businessId INT,
  businessName TEXT,
  rating INT,
  comment TEXT,
  userId INT,
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
  PRIMARY KEY (businessId, date, reviewId)
);

CREATE TABLE reviewsByUser (
  reviewId INT,
  date DATE,
  businessId INT,
  businessName TEXT,
  rating INT,
  comment TEXT,
  userId INT,
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
  PRIMARY KEY (userId, date, reviewId)
);