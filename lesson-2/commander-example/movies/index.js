import fs from 'node:fs/promises';
import path from 'node:path';

const moviesPath = path.resolve('movies', 'movies.json');
const updateMovies = (movies) =>
  fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const getMovies = async () => {
  const data = await fs.readFile(moviesPath, 'utf-8');
  return JSON.parse(data);
};
