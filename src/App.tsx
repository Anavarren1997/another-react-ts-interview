import { useCallback, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';
import debounce from 'just-debounce-it';

function App() {
  const [search, setSearch] = useState('');
  const { movies, getMovies } = useMovies({ search });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      console.log('search', search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (newSearch: string) => {
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <>
      <h1>Prueba junior React + TS</h1>
      {/** Formulario */}
      <form className="filmForm" onSubmit={handleSubmit}>
        <input
          name="filmSearch"
          type="text"
          placeholder="avengers, matrix, etc."
          onChange={(e) => handleChange(e.target.value)}
        />
        <button>Buscar</button>
      </form>
      {/** Lista de películas */}
      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
