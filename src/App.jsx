import React,{useState,useEffect} from 'react';
import Movie from './components/Movie'


const API_KEY = 'd42455879ac7f781d5f06f27adabb0f0';
const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const featured_api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d42455879ac7f781d5f06f27adabb0f0&page=1'


function App() {

  const [movies,setMovies] = useState([])
  const [searchTerm,setsearchTerm] = useState('')

  useEffect(() => {
    fetchMovies()
  },[])


  const fetchMovies = async () => {
    const response = await fetch(featured_api)
    const {results} = await response.json()
    
    setMovies(results)


  }
  
  const getMovies = async () => {
    const response = await fetch(search_api + searchTerm)
    const {results} = await response.json()
    setMovies(results)
    setsearchTerm('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(searchTerm) {
    e.preventDefault();
getMovies()
    }
  }
  const handleChange = (e) => {
    setsearchTerm(e.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <header>
      <h3 className='text'>Movie Web Application</h3>
    <input type="text" placeholder='Search For A Movie' className='input' value={searchTerm} onChange={handleChange}/>
  </header>
  </form>
    <div className="movie-container">
     
      {movies.map(movie => (
        movie.poster_path &&
        <Movie {...movie} key={movie.id} />
        
      ))}
        
    </div>
    </>
  );
}

export default App;
