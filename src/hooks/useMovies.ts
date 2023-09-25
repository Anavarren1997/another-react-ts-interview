import { useState, useCallback, useRef } from 'react';
import { OurMovie } from '../types';
import { searchMovies } from '../services/movies';

interface useMoviesProps {
  search: string;
}

function useMovies({ search }: useMoviesProps) {
  const [movies, setMovies] = useState<OurMovie[] | null>([]);
  const [loading, setLoading] = useState(false);
  // el error no se usa pero puedes implementarlo
  // si quieres:
  const [, setError] = useState<string | null>(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }: { search: string }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      if (e instanceof Error) {
        // Verificar que e sea una instancia de Error
        setError(e.message);
      }
    } finally {
      // tanto en el try como en el catch
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading };
}

export default useMovies;
