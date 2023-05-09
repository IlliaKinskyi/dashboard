import React from 'react';

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <form>
      <img src="./img/search.svg" alt="search" width="24px" height="24px" />
      <input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
};

export default GlobalFilter;
