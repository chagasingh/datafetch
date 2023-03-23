import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie} id={props.id}>
      <h2>{<img src={props.avatar} alt='images'/>}</h2>
      <h3>{props.email}</h3>
      <p>{props.first_name}</p>
      <p>{props.last_name}</p>
    </li>
  );
};

export default Movie;
