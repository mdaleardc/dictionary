import SearchBar from "./SearchBar";
import WordDefinition from "./WordDefinition";

const Home = ({onSearch, data, loading}) => {
  
  return (
    <>
    <div>
    <SearchBar onSearch={onSearch}/>
    {
    loading ? <p>Loading...</p> : <WordDefinition data={data}/>
    }
    </div>
    </>
    )
}


export default Home;