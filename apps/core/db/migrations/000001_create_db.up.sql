BEGIN;

-- Create the users table
CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    handle   VARCHAR(255) NOT NULL
);

-- Create the spaces table
CREATE TABLE spaces
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the rooms table
CREATE TABLE rooms
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the rooms_users table (many-to-many relationship between rooms and users)
CREATE TABLE rooms_users
(
    room_id INTEGER REFERENCES rooms (id),
    user_id INTEGER REFERENCES users (id),
    PRIMARY KEY (room_id, user_id)
);

-- Create the spaces_rooms table (many-to-many relationship between spaces and rooms)
CREATE TABLE spaces_rooms
(
    space_id INTEGER REFERENCES spaces (id),
    room_id  INTEGER REFERENCES rooms (id),
    PRIMARY KEY (space_id, room_id)
);

-- Create the spaces_users table (many-to-many relationship between spaces and users)
CREATE TABLE spaces_users
(
    space_id INTEGER REFERENCES spaces (id),
    user_id  INTEGER REFERENCES users (id),
    PRIMARY KEY (space_id, user_id)
);

COMMIT;
