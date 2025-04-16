import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");


  const movies = [
    { id: 1, title: "Shadow Circuit", release_date: "2022" },
    { id: 2, title: "Crimson Tide", release_date: "2020" },
    { id: 3, title: "Neon Mirage", release_date: "2023" },
    { id: 4, title: "Echo Runner", release_date: "2021" },
    { id: 5, title: "Silent Pulse", release_date: "2024" },
    { id: 6, title: "Iron Veil", release_date: "2023" }
  ];

  const handlesearch = () => {
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