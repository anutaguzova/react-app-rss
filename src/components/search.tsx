export function Search() {
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search for..." />
      <button type="submit" className="searchButton">
        Search
      </button>
    </div>
  );
}
