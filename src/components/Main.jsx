import React, { use } from 'react'
import initialMovies from '../assets/movies.js'
import MovieList from './MovieList.jsx'
import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState(initialMovies)
    // const [filter, setFilter] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)
    useEffect(() => {
        console.log(`ciao`)
    }), [movies]

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
            </div>
        </main>
    )
}

export default Main