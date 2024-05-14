function SearchAndSort({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />
      <div className="mt-2">
        <button
          onClick={() => setSortOrder('asc')}
          className={`p-2 mr-2 ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort Ascending
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`p-2 ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort Descending
        </button>
      </div>
    </div>
  );
}

export default SearchAndSort;