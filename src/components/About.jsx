import {Link} from "react-router";
import Footer from "./Footer";

const About = () => {
  
  return (
    <>
    <div className='px-4 py-6 bg-blue-50 flex flex-col gap-2'>
    <Link to='/' className='font-bold'>Home</Link>
    <h1 className='text-3xl font-bold text-center text-red-600'>About the App</h1>
<p className='text-justify tracking-wide'>Welcome to our Dictionary App, your go-to tool for quick and reliable word definitions! Whether you're expanding your vocabulary, clarifying meanings, or exploring synonyms and antonyms, this app provides clear and concise information for every word you search.</p>

<ul className='flex flex-col gap-1'>
<h4 className='text-xl font-semibold text-zinc-700'>Key Features:</h4>
<li><span className='font-semibold'>Accurate Definitions</span>: Get precise meanings with real-world examples.</li>

<li><span className='font-semibold'>Phonetics & Pronunciation</span>: Learn correct pronunciation with phonetic transcriptions.</li>

<li><span className='font-semibold'>Synonyms & Antonyms</span>: Broaden your vocabulary with related words.</li>

<li><span className='font-semibold'>User-Friendly Interface</span>: Clean and simple design for quick access to information.</li>
</ul>

<p>Our goal is to make learning new words easy and engaging for everyone. Start exploring words today!
</p>
    </div>
    <Footer />
    </>
    )
}


export default About;