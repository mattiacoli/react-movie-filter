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

  }, [searchQuery])

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center text-danger">Movies List</h1>

        <div className="form-group my-4 d-flex gap-3">
          {/* search Bar */}
          <input
            type="text"
            placeholder='search...'
            className='form-control w-100'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)} />


          {/* Genre Selector */}
          <select
            className="form-select"
            name="genreSelection"
            id="genreSelection"
            onChange={handleSelection}>

            <option>Filter by genre</option>
            <option value=''>All</option>
            <option value="Azione">Azione</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>


        {/* Movie Card */}
        <div className="container">
          <div className="row">
            {filteredMovies.map((movie, index) => (
              <div key={index} className="col-3 gy-3">
                <div className="card d-flex align-items-stretch h-100">
                  <img src={movie.img} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h4 className="card-title">{movie.title}</h4>
                    <p className="card-text">{movie.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
