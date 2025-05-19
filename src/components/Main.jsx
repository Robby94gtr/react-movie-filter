import React, { use } from 'react'
import initialMovies from '../assets/movies.js'
import MovieList from './MovieList.jsx'
import SelectForm from './SelectForm.jsx'
import InputForm from './InputForm.jsx'
import AddNewItemForm from './AddNewItemForm.jsx'
import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState(initialMovies)

    const [filteredMovies, setFilteredMovies] = useState(movies)

    const [selectedGenre, setSelectedGenre] = useState('');

    const [search, setSearch] = useState('');

    const [newTitle, setNewTitle] = useState('');
    const [newGenre, setNewGenre] = useState('');

    const handleSelect = (event) => {
        setSelectedGenre(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault();
        if (newTitle && newGenre) {
            const newMovie = {
                title: newTitle.trim(),
                genre: newGenre.trim()
            };
            setMovies([...movies, newMovie]);
            setNewTitle('');
            setNewGenre('');
        }
    }

    useEffect(() => {
        setFilteredMovies(movies)
    }, [movies])

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
            return movie.title.toLowerCase().includes(search.trim().toLowerCase());
        });
        setFilteredMovies(filteredArray);
    }, [search])


    return (
        <main className="py-3">
            <div className="container">
                <AddNewItemForm
                    newTitle={newTitle}
                    setNewTitle={(e) => setNewTitle(e.target.value)}
                    newGenre={newGenre}
                    setNewGenre={(e) => setNewGenre(e.target.value)}
                    addItem={addItem}
                />
                <InputForm
                    setSearch={(e) => setSearch(e.target.value)}
                    search={search}
                />
                <MovieList
                    movies={filteredMovies}
                />
                <SelectForm
                    movies={filteredMovies}
                    handleSelect={(e) => handleSelect(e)}
                    selectedGenre={selectedGenre}
                />
            </div>
        </main>
    )
}

export default Main