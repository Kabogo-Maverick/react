import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

 useEffect(()=>{
  const loadPopularMovies = async () =>{
    try{
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    }
    catch(err){
      console.log(err)
      setError("failed to load....")
    }
      finally{
        setLoading(false)
      }
    }
    
    loadPopularMovies()
  
 })

  
  const handlesearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  }

  return (
    <div className="home">
      <form onSubmit={handlesearch} className="search-form">
       <input type="text" 
       className="search-input" 
       value={searchQuery}
       onChange={(e) => setsearchQuery(e.target.value)}
       placeholder="Search for movies..." />
       <button  type="submit" className="search-button">search</button> 
      </form>

      <div className="movies-grid">
          {movies
           .filter((movie) =>
           movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
           )
           .map((movie) => (
           <MovieCard key={movie.id} movie={movie} />
          ))}
</div>

    </div>
  );
}

export default Home;