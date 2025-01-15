import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./components/Home";
import About from "./components/About"
import {useEffect, useState} from "react";
import axios from "axios";


const App = () => {
  
  const api_url = import.meta.env.VITE_APP_API_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
    const onSearch = async (word) => {
      setLoading(true);
      try {
        const response = await axios(`${api_url}/${word}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        setData("")
      } finally {
        setLoading(false);
      }
    }
    
    
  return (
    <div className='w-full max-w-[600px] mx-auto bg-zinc-200'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home onSearch={onSearch} data={data} loading={loading} setError={setError} error={error}/>} />
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;