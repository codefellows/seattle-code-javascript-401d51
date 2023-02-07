CREATE TABLE Orders (
  id            INT PRIMARY KEY,
  name          VARCHAR(255),
  customerId    INT REFERENCES Customers(id),
);
