import React, { useState, useCallback } from 'react';

import MoviesList from './components/MovieList';
import './App.css';
import Navigation from './components/navbar/navbar';


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [empty,setEmpty]=useState(true)
  const [error,setError] = useState(null)

  const fetchMoviesHandler=useCallback(async()=> {
    setEmpty(false)
    setIsLoading(true)
    setError(null)
    try{
      const response =await fetch('https://reqres.in/api/users?page=1')
      if(!response.ok){
        throw new Error('something went wrong...Retring')
      }
      
      const datas=await response.json();
      console.log(datas)
      const LoadedMovies=[];
      for(const key in datas.data){
        LoadedMovies.push({
          id:datas.data[key].id,
          email:datas.data[key].email,
          avatar:datas.data[key].avatar,
          first_name:datas.data[key].first_name,
          last_name:datas.data[key].last_name,
        });
      }
      console.log(LoadedMovies)
        setMovies(LoadedMovies);
        
    } catch(error){
        setError(error.message);
    }
    setIsLoading(false)

  },[]);

  return (
    <React.Fragment>
      <Navigation onClick={fetchMoviesHandler}/>
      {!empty && <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <h3>{error}</h3>}
        {isLoading && <h1>Loading...</h1>}
      </section>}
      {empty && <section>
        <h1>List is Empty Fetch Data</h1>
        </section>}
    </React.Fragment>
  );
}

export default App;
