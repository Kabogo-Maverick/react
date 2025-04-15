import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Shadow Circuit", release_date: "2022" },
    { id: 2, title: "Crimson Tide", release_date: "2020" },
    { id: 3, title: "Neon Mirage", release_date: "2023" },
    { id: 4, title: "Echo Runner", release_date: "2021" },
    { id: 5, title: "Silent Pulse", release_date: "2024" },
    { id: 6, title: "Iron Veil", release_date: "2023" }
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
