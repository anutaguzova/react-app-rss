export function Search() {
  return (
    <div className="search">
      <input type="text" className="search-term" placeholder="Search for..." />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>
  );
}
