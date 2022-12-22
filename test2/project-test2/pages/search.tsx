import { useState } from 'react';

function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event) => {
    // prevent form from submitting and refreshing the page
    event.preventDefault();

    // send search query to server using fetch API
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    // do something with the response data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter search query"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
