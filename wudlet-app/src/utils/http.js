import links from './links';

export const getPosts = async () => {
  try {
    const results = await fetch(links.get_posts);
    const posts = await results.json();
    return posts;
  } catch (error) {
    console.error('error: ', error);
    return [];
  }
};

export const getPost = async (id) => {
  try {
    const results = await fetch(`${links.get_post}/${id}`);
    const post = await results.json();
    return post;
  } catch (error) {
    console.error('error: ', error);
    return [];
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${links.delete_post}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.status;
  } catch (error) {
    console.error('error: ', error);
  }
};

export const createPost = async (title, content) => {
  let data = {
    title: title,
    content: content,
    author: 'cota',
    tags: ['javascript'],
  };

  try {
    const response = await fetch(`${links.create_post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.status;
  } catch (error) {
    console.error('error: ', error);
  }
};

export const editPost = async (id, title, content) => {
  let data = {
    title: title,
    content: content,
  };

  try {
    const response = await fetch(`${links.delete_post}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.status;
  } catch (error) {
    console.error('error: ', error);
  }
};
