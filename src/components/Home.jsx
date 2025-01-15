import SearchBar from "./SearchBar";
import WordDefinition from "./WordDefinition";

const Home = ({onSearch, data, loading, setError, error}) => {
  
  return (
    <>
    <div className='px-4 bg-blue-50 py-4 sm:min-h-screen'>
    <SearchBar onSearch={onSearch} setError={setError}/>
    {
    loading ? <p>Loading...</p> : (error.trim() ? <p>Word not found!</p> : <WordDefinition data={data}/>)
    }
    </div>
    </>
    )
}


export default Home;