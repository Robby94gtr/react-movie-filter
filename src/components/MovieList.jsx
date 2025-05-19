import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <div className="row my-3">
            <div className="col">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {movies.map((movie, index) => (
                            <li className="list-group-item" key={`movie-${index}`}>
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.genre}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieList