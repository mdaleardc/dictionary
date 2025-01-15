import {useState} from "react";

const SearchBar = ({onSearch}) => {
  const [searchInput, setSearchInput] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput("");
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit} className='mx-auto text-center flex flex-row gap-4 justify-center'>
    <input type='text' name='word' placeholder="Search word" value={searchInput} className='outline-none border-[2px] focus:ring-[1px] ring-green-500 rounded-md' onChange={(e)=>setSearchInput(e.target.value)}/>
    <input type='submit' value="Search" />
    </form>
    </>
    )
}


export default SearchBar;