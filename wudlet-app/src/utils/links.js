const protocol = 'http://';
const host = 'localhost';
const port = ':19830';

const domain = protocol + host + port;

const links = {
  get_posts: `${domain}/posts`,
  get_post: `${domain}/posts`,
  delete_post: `${domain}/posts`,
  create_post: `${domain}/posts`,
};

export default links;
