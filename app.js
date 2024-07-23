import { program } from 'commander';
import { getMovies } from './lesson-2/commander-example/movies/index.js';

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case 'getAll':
      const movies = await getMovies();
      return console.log(movies);
    default:
      console.log('unknown action');
  }
};

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-t, --title <type>')
  .option('-d, --director <type>');

program.parse();

const options = program.opts();

invokeAction(options);
