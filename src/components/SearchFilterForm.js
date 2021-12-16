import "./SearchFilterForm.css";

export default function SearchFilterForm({ searchCountries, searchInput, filterByRegion, filteredRegion }) {
    return (
        <div className="searchFilter-container">
            <form className="search-form container">
                <div className="input-container">
                    <ion-icon name="search-sharp"></ion-icon>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for a country..."
                        value={searchInput}
                        onChange={(e) => searchCountries(e.target.value)}
                    />
                </div>
                <div className="filter-container">
                    <select
                        name="regions"
                        id="regions"
                        value={filteredRegion}
                        onChange={(e) => filterByRegion(e.target.value)}
                    >
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </form >
        </div >
    );
}
