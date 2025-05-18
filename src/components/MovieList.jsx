import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map((movie, index) => (
                <li className="list-group-item" key={index}>
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.genre}</p>
                </li>
            ))}
        </>
    )
}

export default MovieList