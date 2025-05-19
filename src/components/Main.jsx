import React, { use } from 'react'
import initialMovies from '../assets/movies.js'
import MovieList from './MovieList.jsx'
import SelectForm from './SelectForm.jsx'
import InputForm from './InputForm.jsx'
import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState(initialMovies)

    const [filteredMovies, setFilteredMovies] = useState(initialMovies)

    const [selectedGenre, setSelectedGenre] = useState('');

    const [search, setSearch] = useState('');

    const handleSelect = (event) => {
        setSelectedGenre(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value.toLowerCase();
        const filteredArray = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchValue);
        });
        setFilteredMovies(filteredArray);
    }

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

    useEffect(() => {
        const filteredArray = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredMovies(filteredArray);
    }, [search])


    return (
        <main className="py-3">
            <div className="container">
                <InputForm
                    setSearch={(e) => setSearch(e.target.value)}
                    search={search}
                    handleSearch={(e) => handleSearch(e.target.value)}
                />
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