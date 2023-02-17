import { MdSearch } from "react-icons/md";

export const SearchBar = ({ setSearch, myNotes, setFiltered }) => {
  //HandleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value) {
      setFiltered(
        myNotes.filter((note) =>
          note.content.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFiltered(myNotes);
    }
  };
  return (
    <div className=" mt-3 flex justify-center mb-3 ">
      <MdSearch className="relative left-6 top-2" />
      <input
        className="px-8 py-1 leading-tight focus:outline-none  "
        onChange={handleSearch}
        type="search"
        placeholder="Search for notes ..."
      />
    </div>
  );
};
