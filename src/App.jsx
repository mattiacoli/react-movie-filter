import { useState, useEffect } from 'react';
import movies from "./data/movies"


function App() {


  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Movies List</h1>

        {movies.map(movie => (
          <div className="col my-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-text">Genere : {movie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>





    </>
  )
}

export default App
