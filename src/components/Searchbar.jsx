import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col w-full justify-end">
      <input
        type="text"
        className="block w-full focus:outline-none border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

Searchbar.defaultProps = {
  search: '',
  setSearch: () => {},
};

export default Searchbar;
