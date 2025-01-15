import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
    <div className='w-full max-w-[600px] mx-auto px-4 bg-zinc-200'>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home onSearch={onSearch} data={data} loading={loading}/>} />
    </Routes>
    {error.trim() && <p>Word not found!</p>}
    <Footer />
    </BrowserRouter>
    </div>
    )
}

export default App;