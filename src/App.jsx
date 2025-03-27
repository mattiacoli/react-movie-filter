import { useState, useEffect } from 'react';
import movies from "./data/movies"

function App() {

  const [selectGenre, setSelectGenre] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [searchQuery, setSearchQuery] = useState('')

  function handleSelection(e) {

    setSelectGenre(e.target.value)

  }

  useEffect(() => {

    console.log(selectGenre);

    setFilteredMovies(movies.filter(element => selectGenre === '' || element.genre === selectGenre))

  }, [selectGenre])


  useEffect(() => {

    setFilteredMovies(movies.filter(element => element.title.toLowerCase().includes(searchQuery.toLowerCase())))

  }, [movies, searchQuery])

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Movies List</h1>


        <div className="form-group my-4 d-flex gap-2">
          <input
            type="text"
            placeholder='search...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)} />

          <label htmlFor="">Filter Genre</label>

          <select className="custom-select"
            name="genreSelection"
            id="genreSelection"
            onChange={handleSelection}>

            <option value=''>All</option>
            <option value="Azione">Azione</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        <div className="col my-3">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="card my-2">
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-text">Genere : {movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
