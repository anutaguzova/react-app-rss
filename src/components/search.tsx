export function Search() {
  // const [filter, setFilter] = useState('');

  // const searchText = (event) => {
  //     setFilter(event.target.value)
  // }
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search for..." />
      <button type="submit" className="searchButton"></button>
    </div>
  );
}
