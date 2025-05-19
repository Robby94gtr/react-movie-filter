const SelectForm = ({ movies, handleSelect, selectedGenre }) => {
  
    return (
        <div className="row">
            <div className="col">
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
            </div>
        </div>
    );
};

export default SelectForm;