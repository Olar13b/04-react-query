import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.th/emoviedb.org/3/search/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = (query: string): Promise<FetchMoviesResponse> => {
  const config = {
    params: {
      query,
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return axios
    .get<FetchMoviesResponse>(API_URL, config)
    .then((res) => res.data);
};