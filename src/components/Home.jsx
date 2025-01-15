import SearchBar from "./SearchBar";
import WordDefinition from "./WordDefinition";

const Home = ({onSearch, data, loading, setError, error}) => {
  
  return (
    <>
    <div className='px-4 bg-blue-50 py-4 sm:min-h-screen'>
    <div className='fixed top-0 left-[50%] translate-x-[-50%] bg-zinc-700 w-full max-w-[600px] px-4 sm:px-20'>
    <SearchBar onSearch={onSearch} setError={setError}/>
    </div>
    <div className='pt-[2rem]'>
    {
    loading ? <p>Loading...</p> : (error.trim() ? <p>Word not found!</p> : <WordDefinition data={data}/>)
    }
    </div>
    </div>
    </>
    )
}


export default Home;