import React, { use } from 'react'
import initialMovies from '../assets/movies.js'
import MovieList from './MovieList.jsx'
import SelectForm from './SelectForm.jsx'
import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState(initialMovies)

    const [filteredMovies, setFilteredMovies] = useState(initialMovies)

    const [selectedGenre, setSelectedGenre] = useState('');
    console.log(selectedGenre)

    const handleSelect = (event) => {
        setSelectedGenre(event.target.value);
    };
    useEffect(() => {
        const filteredArray = movies.filter((movie) => {
            if (selectedGenre === '') {
                return true
            } else {
                return movie.genre === selectedGenre
            }
        })
        setFilteredMovies(filteredArray)
    }, [selectedGenre])

    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <MovieList movies={filteredMovies} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SelectForm
                            movies={initialMovies}
                            handleSelect={(e) => handleSelect(e)}
                            selectedGenre={selectedGenre}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main