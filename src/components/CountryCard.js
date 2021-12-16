import { Link } from 'react-router-dom';
import "./CountryCard.css";

export default function CountryCard({ countries }) {

    // Sort Countries list alphabetically
    // countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    return (
        <div className="countriesCard-container container">
            {countries.map((country) => (
                <div className="country-card" key={country.alpha3Code}>
                    <Link to={`/countryInfo/${country.alpha3Code}`}>
                        <div className="flag">
                            <img src={country.flag} alt="" />
                        </div>
                        <div className="country-card--info">
                            <h2>{country.name}</h2>
                            <p><span>Population:</span> {country.population.toLocaleString('en-US')}</p>
                            <p><span>Region:</span> {country.region}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
