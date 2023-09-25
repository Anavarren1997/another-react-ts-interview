import { APIError, APIResponse, OurMovie } from '../types';

interface searchMoviesProps {
  search: string;
}

export const searchMovies = async ({ search }: searchMoviesProps) => {
  if (!search) return null;

  const response = await fetch(
    `https://www.omdbapi.com/?s=${search}&apikey=b18dc440`
  );
  const jsonResponse: APIResponse | APIError = await response.json();

  // si la API da error devolvemos null
  if (isAPIError(jsonResponse)) return null;
  const mappedMovies: OurMovie[] = jsonResponse.Search.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    };
  });

  return mappedMovies;
};

function isAPIError(data: APIResponse | APIError): data is APIError {
  return (data as APIError).Error !== undefined;
}
