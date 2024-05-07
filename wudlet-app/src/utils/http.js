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
    const response = await fetch(`${links.get_post}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Delete: ', id);
    console.log('response: ', response);
    return response.status;
  } catch (error) {
    console.error('error: ', error);
  }
};
