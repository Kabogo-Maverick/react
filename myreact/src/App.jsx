import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const mynumber = 1;

  return (
    <>
    {mynumber === 1 ? (
      <MovieCard movie={{ title: "Kay film", release_date: "2026",  }} />
    ) : (
      <MovieCard movie={{ title: "Mkay film", release_date: "2025", }} />
    )}
    </>
  );
}

export default App;
