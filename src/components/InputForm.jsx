import React from 'react'

const InputForm = ({ setSearch, search, handleSearch }) => {
    return (
        <form
            className="row my-3"
            onSubmit={handleSearch}
        >
            <div className="col-11">
                <input className="form-control"
                    type="text"
                    placeholder="Cerca per titolo"
                    aria-label="Cerca per titolo"
                    onChange={setSearch}
                    value={search}
                />
            </div>
            <div className="col-1 text-center">
                <button className="btn btn-primary" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Cerca
                </button>
            </div>
        </form>
    )
}

export default InputForm