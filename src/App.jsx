import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'

function App() {
  const [movies , setMovie] = useState([])
  const [searchTerm , setSearchTeam] = useState('');

  const API_URL = "http://www.omdbapi.com?apikey=734873e9" ; 

  const searchMovies =async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`) ; 
    const data = await response.json() ; 

    setMovie(data.Search) ; 
  }

  const movie1 = {
    "Title": "Undefined: A Muslim-American Musical",
    "Year": "2017",
    "imdbID": "tt7178924",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_SX300.jpg"
}
 useEffect(()=>{
   searchMovies('Spiderman');
 },[])

  return (
  
    <div className='app'>
      <h1>MovieLand</h1>

    <div className='search'>
      <input 
      placeholder='search for movies'
      value={searchTerm}
      onChange={(e)=>setSearchTeam(e.target.value)}
      />
      <img
       src={SearchIcon}
       alt="search"
       onClick={()=>searchMovies(searchTerm)}
        />
    </div>

    {
      movies?.length > 0 ?
      (

        <div className='container'>
              {
                movies.map((movie)=>(
                  <MovieCard movie={movie}/>
                ))
              }
        </div>
        
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }
      </div>

  )
}

export default App
