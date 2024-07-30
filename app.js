import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productsRouter from './routers/productsRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api/products', productsRouter);
app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running. Use our API on port: ${port}`);
});

// import { program } from 'commander';
// import { getMovies } from './lesson-2/commander-example/movies/index.js';

// const invokeAction = async ({ action, id, ...data }) => {
//   switch (action) {
//     case 'getAll':
//       const movies = await getMovies();
//       return console.log(movies);
//     case 'getById':
//       const oneMovie = await getMovieById(id);
//       return console.log(oneMovie);
//     case 'add':
//       const newMovie = await addMovie(data);
//       return console.log(newMovie);
//     case 'updateById':
//       const updateMovie = await updateById(id, data);
//       return console.log(updateMovie);
//     case 'deleteById':
//       const deleteMovie = await deleteById(id);
//       return console.log(deleteMovie);
//     default:
//       console.log('unknown action');
//   }
// };

// program
//   .option('-a, --action <type>')
//   .option('-i, --id <type>')
//   .option('-t, --title <type>')
//   .option('-d, --director <type>');

// program.parse();

// const options = program.opts();

// invokeAction(options);
