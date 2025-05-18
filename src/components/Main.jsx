import React from 'react'
import movies from '../assets/movies.js'
import MovieList from './MovieList.jsx'

const Main = () => {
    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <MovieList movies={movies} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main