import css from "./SearchBar.module.css";

export default function SearchBar({ handleSearchSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        const searchQuery = e.target.weatherSearch.value.trim();
        if (searchQuery) {
            handleSearchSubmit(searchQuery);
        }
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <input
                type="text"
                name="weatherSearch"
                placeholder="Search weather..."
                className={css.input}
            />
            <button type="submit" className={css.button}>Search</button>
        </form>
    );
}
