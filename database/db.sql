-- CREATE DATABASE redesocial;

-- \l

-- \c redsocial;

DROP TABLE IF EXISTS users;

--crea tabla de usuarios 
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    alias TEXT NOT NULL,
    fechaNacimiento DATE NOT NULL,
    usuario TEXT NOT NULL,
    clave TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO Users (nombre , apellido ,   alias,   fechaNacimiento,   usuario ,  clave)
    VALUES ('Juan', 'Pérez', 'jperez','1990-05-01','juan', '1234'),
    ('Ana',  'Gómez','anita', '1995-07-10', 'ana', '1234');

select * from Users;

DROP TABLE IF EXISTS Post;

--tabla de publicaciones
CREATE TABLE Post (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  mensaje TEXT,
  fecha_publicacion TIMESTAMP DEFAULT NOW()
);

INSERT INTO Post (userId, mensaje)
    VALUES (1, 'pubicacion 1 '),
    (1, 'dia de las madres'),
    (2, 'dia del padre');

DROP TABLE IF EXISTS Likes;

--tabla de likes 
CREATE TABLE IF NOT EXISTS Likes (
  id SERIAL PRIMARY KEY,  
  userId INTEGER REFERENCES Users(id),
  postId INTEGER REFERENCES Post(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(postId, userId)
);


INSERT INTO likes (user_id, post_id)
    VALUES (1, 1),
    (1, 2),
    (2, 3);