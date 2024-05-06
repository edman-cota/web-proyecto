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
    console.log('Delete: ', id);
    await fetch(`${links.delete_post}/${id}`, {
      methods: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
      });
  } catch (error) {
    console.error('error: ', error);
  }
};
