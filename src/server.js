const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Inicialização do banco de dados
const db = new sqlite3.Database('database.db');
/*db.serialize(() => {
  
  // Criação das tabelas
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT,
      password TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      genre TEXT NOT NULL,
      release_year TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS series (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      genre TEXT NOT NULL,
      release_year TEXT NOT NULL
    )
  `);

  db.run(
    `CREATE TABLE IF NOT EXISTS favorites_movies (
      user_id INTEGER,
      movie_id INTEGER,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(movie_id) REFERENCES movies(id)
    )
  `);

  db.run(
    `CREATE TABLE IF NOT EXISTS favorites_series (
      user_id INTEGER,
      series_id INTEGER,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(series_id) REFERENCES series(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS watchlist (
      user_id INTEGER,
      movie_id INTEGER,
      series_id INTEGER,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(movie_id) REFERENCES movies(id),
      FOREIGN KEY(series_id) REFERENCES series(id)
    )
  `);

  // Dados iniciais (apenas para exemplo)
  db.run(`
    INSERT INTO users (username, password)
    VALUES ('user1', 'pass1')
  `);
  
  // Insertando dados na tabela filmes
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('Matrix', 'Action','1999')
  `);

  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('American pie', 'Comedy','1999')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('O poderoso Chefão', 'Drama','1972')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('O poderoso Chefão parte II', 'Drama','1974')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('O poderoso Chefão parte III', 'Drama','1990')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('Velozes e furiosos', 'Action','2001')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('O auto da compadecida', 'Comedy','2000')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('As Branquelas', 'Comedy','2004')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('Rambo', 'Action','1982')
  `);
  db.run(`
    INSERT INTO movies (title, genre,release_year)
    VALUES ('Pânico', 'Horror','1996')
  `);

  // Insertando dados na tabela filmes
  db.run(`
    INSERT INTO series (title, genre,release_year)
    VALUES ('The Office', 'Comedy', '2005')
  `);
  db.run(`
    INSERT INTO series (title, genre,release_year)
    VALUES ('Friends', 'Comedy','1994')
  `);
  db.run(`
    INSERT INTO series (title, genre,release_year)
    VALUES ('Breaking Bad', 'Action','2008')
  `);
  db.run(`
    INSERT INTO series (title, genre,release_year)
    VALUES ('Lost', 'Action','2004')
  `);
  db.run(`
    INSERT INTO series (title, genre,release_year)
    VALUES ('This is Us', 'Drama','2016')
  `);
});*/

const app = express();
app.use(express.json());

// Endpoints da API

// Novo usuario
app.post('/users', (req, res) => {
  const { username, email,password} = req.body;

  // Insere o usuário no banco de dados
  db.run('INSERT INTO users (username, email,password) VALUES (?,?,?)', [username, email,password], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso.', userId: this.lastID });
  });
});

// atualizando usuario
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;

  // Atualiza o usuário no banco de dados
  db.run('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, password, userId], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json({ message: 'Usuário atualizado com sucesso.' });
  });
});
//DEletar Usuario
app.delete('/users/delete',(req,res)=>{
  const { username, email,password} = req.body;
  db.run('DELETE FROM users WHERE username = ? and email = ? and password = ? ' , [username,email,password], function(err){
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao deletar usuário.' });
    }

    return res.status(201).json({ message: 'Usuário deletado com sucesso.', userId: this.lastID });
  })
  
});

// Autenticação de usuário
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get(
    'SELECT id FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, row) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else if (row) {
        res.json({ success: true, userId: row.id });
      } else {
        res.json({ success: false });
      }
    }
  );
});

// Listar todos os filmes
app.get('/movies', (req, res) => {
  db.all('SELECT * FROM movies', (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

// Listar todas as séries
app.get('/series', (req, res) => {
  db.all('SELECT * FROM series', (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

// Pesquisar filme/série pelo nome
app.get('/search', (req, res) => {
  const { query } = req.query;

  db.all(
    `SELECT * FROM movies WHERE title LIKE '%${query}%'
    UNION
    SELECT * FROM series WHERE title LIKE '%${query}%'`,
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});

// Listar filmes/séries pelo gênero
app.get('/genre/:genre', (req, res) => {
  const { genre } = req.params;

  db.all(
    `SELECT * FROM movies WHERE genre = ?
    UNION
    SELECT * FROM series WHERE genre = ?`,
    [genre, genre],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});
//Adicionar aos Favoritos filmes
app.post('/movies/favorites/:userId/:movieId',(req,res) =>{
  const {userId,movieId} = req.params;
  db.run(
    `INSERT INTO favorites_movies ( user_id, movie_id) VALUES(?,?)`,[userId,movieId],function(err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Erro ao adicionar o Filme.' });
      }
      return res.status(201).json({ message: 'Filme adicionado com sucesso.', movieId: this.lastID });
    }
  )
});
//Adicionar aos Favoritos séries
app.post('/series/favorites/:userId/:movieId',(req,res) =>{
  const {userId,serieId} = req.params;
  db.run(
    `INSERT INTO favorites_series ( user_id, serie_id) VALUES(?,?)`,[userId,serieId],function(err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Erro ao adicionar o série.' });
      }
      return res.status(201).json({ message: 'Série adicionado com sucesso.', movieId: this.lastID });
    }
  )
});
//listando séries favoritas
app.get('/series/favorites/:userId', (req, res) => {
  const { userId } = req.params;
  db.all(
    `SELECT series.title AS movie_title
    FROM favorites_series
    LEFT JOIN series ON series.id = favorites_series.series_id
    WHERE favorites_series.user_id = ?`,
    [userId],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});

//listando filmes favoritos
app.get('/movies/favorites/:userId', (req, res) => {
  const { userId } = req.params;

  db.all(
    `SELECT movies.title AS movie_title
    FROM favorites_movies
    LEFT JOIN movies ON movies.id = favorites_movies.movie_id
    WHERE favorites_movies.user_id = ?`,
    [userId],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});
//Deletar favorito filmes
app.delete('/movies/favorites/delete/:movieId/:userId',(req,res)=>{
  const {movieId,userId} = req.params.movieId;
  db.run('DELETE FROM favorites_movies WHERE movie_id = ? AND user_id = ? ' , [movieId,userId], function(err){
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao deletar filme.' });
    }

    return res.status(201).json({ message: 'Filme deletado com sucesso.', movieId: this.lastID });
  })
  
});
//Deletar favorito series
app.delete('/series/favorites/delete/:serieId/:userId',(req,res)=>{
  const {serieId,userId} = req.params.serieId;
  db.run('DELETE FROM favorites_series WHERE series_id = ? AND user_id = ? ' , [serieId,userId], function(err){
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao deletar série.' });
    }

    return res.status(201).json({ message: 'Série deletado com sucesso.', serieId: this.lastID });
  })
  
});


// Listar favoritos de um usuário
/*app.get('/favorites/:userId', (req, res) => {
  const { userId } = req.params;

  db.all(
    `SELECT movies.title AS movie_title, series.title AS series_title
    FROM favorites
    LEFT JOIN movies ON movies.id = favorites.movie_id
    LEFT JOIN series ON series.id = favorites.series_id
    WHERE favorites.user_id = ?`,
    [userId],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});*/
app.post('/watchlist/:userId', (req, res) => {
  const { userId } = req.params;
  const { movieId, seriesId } = req.body;

  const query = `
    INSERT INTO watchlist (user_id, movie_id, series_id)
    VALUES (?, ?, ?)
  `;

  db.run(query, [userId, movieId, seriesId], function(err) {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json({ success: true, watchlistId: this.lastID });
    }
  });
});
// Listar lista de "desejo assistir" de um usuário
app.get('/watchlist/:userId', (req, res) => {
  const { userId } = req.params;

  db.all(
    `SELECT movies.title AS movie_title, series.title AS series_title
    FROM watchlist
    LEFT JOIN movies ON movies.id = watchlist.movie_id
    LEFT JOIN series ON series.id = watchlist.series_id
    WHERE watchlist.user_id = ?`,
    [userId],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});
app.delete('/watchlist/:userId/:itemId', (req, res) => {
  const { userId, itemId } = req.params;

  const query = `
    DELETE FROM watchlist
    WHERE user_id = ? AND (movie_id = ? OR series_id = ?)
  `;

  db.run(query, [userId, itemId, itemId], function(err) {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (this.changes > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Item not found in watchlist' });
      }
    }
  });
});




app.listen(3001, () => {
  console.log('API rodando na porta 3001');
});