CREATE TABLE random_stuff (
  stuff_id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  color VARCHAR(250),
  size INTEGER
);

INSERT INTO random_stuff (name, color, size)
VALUES ('thing a', 'red', 25),
  ('thing b', 'orange', 12),
  ('thing c', 'yellow', 115);