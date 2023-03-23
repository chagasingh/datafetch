
import React from 'react';

import Movie from './Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          avatar={movie.avatar}
          email={movie.email}
          first_name={movie.first_name}
          last_name={movie.last_name}
        />
      ))}
    </ul>
  );
};

export default MovieList;