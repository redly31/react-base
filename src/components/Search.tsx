import { memo } from "react";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: SearchProps) {
  
  return (
    <section className="">
      <h2>Search</h2>
      <input
        className="search__input"
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}

export default memo(Search)