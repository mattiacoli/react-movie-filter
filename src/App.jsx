import { useState, useEffect } from 'react';
import movies from "./data/movies"

function App() {

  const [selectGenre, setSelectGenre] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [searchQuery, setSearchQuery] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [newImage, setNewImage] = useState('')
  let newMovie;




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

  useEffect(() => {

    newMovie = {
      title: newTitle,
      genre: newGenre,
      img: newImage
    }



  }, [movies, newTitle, newGenre, newImage])

  function handleSubmit(e) {
    e.preventDefault()

    setFilteredMovies([newMovie, ...movies])

    console.log(newMovie, movies);

    setNewTitle('')
    setNewGenre('')
    setNewImage('')

  }



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
            className="form-select w-50"
            name="genreSelection"
            id="genreSelection"
            onChange={handleSelection}>

            <option selected disabled>Filter by genre</option>
            <option value=''>All</option>
            <option value="Azione">Azione</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        <div className="container my-4">

          <h4 className='text-light'>Add new movie</h4>


          <form
            action=""
            className='my-4 d-flex gap-1'
            onSubmit={handleSubmit}>

            <input className='form-control' type="text" placeholder='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input className='form-control' type="text" placeholder='genre' value={newGenre} onChange={(e) => setNewGenre(e.target.value)} />
            <input className='form-control' type="text" placeholder='img url' value={newImage} onChange={(e) => setNewImage(e.target.value)} />
            <button type="submit" className="btn btn-primary">Add</button>

          </form>
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

        {/* add movie */}

      </div>
    </>
  )
}

export default App
