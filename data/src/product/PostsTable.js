
import React, { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetching data for posts
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts); // Initially, display all posts
      });
  }, []);

  const handleSearch = () => {
    if (searchId.trim()) {
      const post = posts.filter((post) => post.id === parseInt(searchId));
      setFilteredPosts(post); // Filter posts based on ID
    } else {
      setFilteredPosts(posts); // Show all posts if no ID is provided
    }
  };

  return (
    <div>
      <h2>Posts Details</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by Post ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results in a table */}
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
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                {searchId ? `No post found with ID ${searchId}` : "No posts available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostsPage;
