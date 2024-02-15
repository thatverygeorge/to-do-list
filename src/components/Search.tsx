import { ChangeEvent } from "react";
import { setSearchFilter } from "../stores/searchFilter";

interface ISearchProps {
  modifier: string;
}

function Search(props: ISearchProps) {
  const { modifier } = props;

  function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
    setSearchFilter(evt.target.value);
  }

  return (
    <section className={`search ${modifier}__search`}>
      <input
        className="input input-search search__input"
        type="search"
        placeholder="search"
        onInput={handleSearch}
      />
    </section>
  );
}

export default Search;

