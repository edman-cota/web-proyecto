import pool from './db.js';

export const getPosts = (request, response) => {
  /**
   * @openapi
   * paths:
   *  /posts:
   *    get:
   *      summary: Restus a list of posts
   *      description: Endpoint to get all posts
   *      responses:
   *        '200':
   *          description: A JSON array of users
   *
   */

  pool.query('SELECT * FROM blogs ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).json({ error: 'Error interno del servidor' });
    }

    response.status(200).json(results.rows);
  });
};

/**
 * @openapi
 * paths:
 *  /posts/:id:
 *    get:
 *      summary: Returns a specific post
 *      description: Endpoint to get a specific post
 *      responses:
 *        '200':
 *          description: A JSON object
 *
 */
export const getPost = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM blogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json({ error: 'Error interno del servidor' });
    }
    response.status(200).json(results.rows[0]);
  });
};

/**
 * @openapi
 * paths:
 *  /posts:
 *    post:
 *      summary: Creates a post
 *      description: Endpoint to create a new post
 *      responses:
 *        '200':
 *          description: The id of the new post created
 *
 */
export const createPost = (request, response) => {
  const { title, content, author, tags } = request.body;

  pool.query(
    'INSERT INTO blogs (title, content, author, tags) VALUES ($1, $2, $3, $4)',
    [title, content, author, tags],
    (error, results) => {
      if (error) {
        response.status(500).json({ error: 'Error interno del servidor' });
      }
      response.status(201).send(`Post added with ID: ${results}`);
    }
  );
};

/**
 * @openapi
 * paths:
 *  /posts/:id:
 *    put:
 *      summary: Update a post
 *      description: Endpoint to update a post
 *      responses:
 *        '200':
 *          description: The id of the new post created
 *
 */
export const updatePost = (request, response) => {
  const id = parseInt(request.params.id);
  const { title, content } = request.body;

  pool.query(
    'UPDATE blogs SET title = $1, content = $2 WHERE id = $3',
    [title, content, id],
    (error, results) => {
      if (error) {
        response.status(500).json({ error: 'Error interno del servidor' });
      }
      response.status(200).send(`Post modified with ID: ${id}`);
    }
  );
};

/**
 * @openapi
 * paths:
 *  /posts/:id:
 *    delete:
 *      summary: Delete a post
 *      description: Endpoint to delete a post
 *      responses:
 *        '200':
 *          description: The id of the post deleted
 *
 */
export const deletePost = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM blogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Post deleted with ID: ${id}`);
  });
};
