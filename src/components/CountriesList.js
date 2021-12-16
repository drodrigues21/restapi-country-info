import { useState } from 'react';
import SearchFilterForm from './SearchFilterForm';
import CountryCard from "./CountryCard";
import useFetch from './useFetch';
import "./CountriesList.css";

export default function CountriesList() {

    const { data: countries, isPending, error } = useFetch('https://restcountries.com/v2/all');

    const [searchInput, setSearchInput] = useState('');
    const [filteredRegion, setFilteredRegion] = useState('');
    const [filtered, setFiltered] = useState('');

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput && countries) {
            const filteredCountries = countries.filter((country) => {
                // console.log(country.name);
                return country.name.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFiltered(filteredCountries);
        } else {
            setFiltered(countries);
        }

    }

    const filterByRegion = (selectInput) => {
        setFilteredRegion(selectInput);

        if (selectInput !== '') {
            const currentRegion = countries.filter((country) => {
                if (country.region === selectInput) {
                    return country
                } else {
                    return '';
                }
            })
            setFiltered(currentRegion);
        } else {
            setFiltered(countries);
        }
    }

    return (
        <div className="countriesList-container">
            <SearchFilterForm
                searchCountries={searchCountries}
                searchInput={searchInput}
                filterByRegion={filterByRegion}
                filteredRegion={filteredRegion}
            />
            {error && <div className="error-msg">{error}</div>}
            {isPending && <div className="loading-msg">Loading...</div>}
            {countries && <CountryCard countries={searchInput.length || filteredRegion.length > 0 ? filtered : countries} />}
        </div>
    );
}
