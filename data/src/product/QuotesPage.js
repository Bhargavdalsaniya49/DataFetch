// import React, { useEffect, useState } from 'react';

// const QuotesPage = () => {
//   const [quotes, setQuotes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch quotes data
//     fetch('https://dummyjson.com/quotes')
//       .then((response) => response.json())
//       .then((data) => {
//         setQuotes(data.quotes);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading data...</p>;
//   }

//   return (
//     <div>
//       <h2>Quotes Data</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Quote</th>
//             <th>Author</th>
//           </tr>
//         </thead>
//         <tbody>
//           {quotes.map((quote) => (
//             <tr key={quote.id}>
//               <td>{quote.id}</td>
//               <td>{quote.quote}</td>
//               <td>{quote.author}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default QuotesPage;
import React, { useState, useEffect } from 'react';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    // Fetch quotes data
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
        setFilteredQuotes(data.quotes); // Initially display all quotes
      })
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  const handleSearch = () => {
    if (searchId) {
      const filtered = quotes.filter((quote) => quote.id.toString() === searchId);
      setFilteredQuotes(filtered);
    } else {
      setFilteredQuotes(quotes); // Reset to all quotes if search is empty
    }
  };

  return (
    <div>
      <h2>Quotes</h2>
      {/* <div>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.quote}</td>
              <td>{quote.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesPage;
