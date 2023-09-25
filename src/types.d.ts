// To parse this data:
//
//   import { Convert, APIResponse } from "./file";
//
//   const aPIResponse = Convert.toAPIResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface APIResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface APIError {
  Response: string;
  Error: string;
}

export interface OurMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
