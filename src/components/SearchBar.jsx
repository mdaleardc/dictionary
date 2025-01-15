import {useState} from "react";
import {Link} from "react-router";
const SearchBar = ({onSearch, setError}) => {
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
    <form onSubmit={handleSubmit} className='mx-auto text-center flex flex-row gap-4 justify-between items-center'>
    <Link to='/about' className='font-bold'>About</Link>
    <input type='text' name='word' placeholder="Search word" value={searchInput} className='outline-none border-[2px] focus:ring-[1px] px-2 h-[2.2rem] ring-green-500 rounded-md' onChange={(e)=>{setSearchInput(e.target.value); setError("")}} required/>
    <input type='submit' value="Search" className='px-2 text-white h-[2rem] flex flex-row justify-center items-center rounded-lg bg-blue-500 font-bold'/>
    </form>
    </>
    )
}


export default SearchBar;