

import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import UsersPage from '../src/product/UserTable';
import QuotesPage from '../src/product/QuotesPage';
import CartPage from '../src/product/CartTable';
import PostPage from '../src/product/PostsTable';
import './App.css';

const App = () => {
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchId.trim()) {
      alert('Please enter an ID to search');
      return;
    }
    console.log(`Searching for ID: ${searchId}`);
  };

  return (
    <div>
       {/* Back Button */}
       <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Data Fetch Application</h1>
      <nav>
        <div>
          <button>
            <Link to="/users"> Users</Link>
          </button>
          <button>
            <Link to="/quotes"> Quotes</Link>
          </button>
          <button>
            <Link to="/carts"> Carts</Link>
          </button>
          <button>
            <Link to="/posts"> Posts</Link>
          </button>
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/carts" element={<CartPage />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
