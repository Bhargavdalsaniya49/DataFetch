import React, { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredPost, setFilteredPost] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const handleSearch = () => {
    const post = posts.find((post) => post.id === parseInt(searchId));
    setFilteredPost(post || null);
  };

  return (
    <div>
      <h2>Posts Details</h2>
      {/* <input
        type="text"
        placeholder="Search by Post ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button> */}

      {filteredPost ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Post Details</h3>
          <p><strong>Title:</strong> {filteredPost.title}</p>
          <p><strong>Body:</strong> {filteredPost.body}</p>
          <p><strong>Tags:</strong> {filteredPost.tags.join(", ")}</p>
          <p><strong>Reactions:</strong> Likes - {filteredPost.reactions.likes}, Dislikes - {filteredPost.reactions.dislikes}</p>
          <p><strong>Views:</strong> {filteredPost.views}</p>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {searchId && <p>No post found with ID {searchId}.</p>}
        </div>
      )}

      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Tags</th>
            <th>Reactions</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.tags.join(", ")}</td>
              <td>
                Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes}
              </td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsPage;
