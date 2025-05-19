const SelectForm = ({ movies, handleSelect, selectedGenre }) => {
  
    return (
        <select
            className="form-select my-3"
            aria-label="Default select example"
            value={selectedGenre}
            onChange={handleSelect}
        >
            <option value="">Filtra per genere</option>
            {movies.map((movie, index) => (
                <option key={`option-${index}`} value={movie.genre}>
                    {movie.genre}
                </option>
            ))}
        </select>
    );
};

export default SelectForm;