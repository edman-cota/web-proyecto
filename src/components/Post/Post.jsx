import React from 'react';

const Post = ({ post }) => {
  return (
    <div
      style={{
        display: 'flex',
        borderRadius: 4,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 300,
        minWidth: 300,
        height: 350,
        padding: 10,
        flexWrap: 'wrap',
      }}
    >
      <h2>{post.title}</h2>
      <p style={{ marginBottom: 4, color: 'gray' }}>{post.created_at}</p>

      <img
        width={300}
        style={{ borderRadius: 6 }}
        src='https://lh3.googleusercontent.com/SMZasrMvgS8LMGCxsSnZqBPZD9KmPIcSXjYU85T-Dd0DQCFo6IWCGckK0rhO6K2J-KD1bMZw2XaiNz1JkgdDUaPs1g=s1280-w1280-h800'
      />
    </div>
  );
};

export default Post;
