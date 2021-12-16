import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Country from './Country';
import "./CountryInfo.css";

export default function CountryInfo() {
    const { data: countries, isPending, error } = useFetch('https://restcountries.com/v2/all');
    const { alpha3Code } = useParams();

    return (
        <div className="container">
            <Link to="/" className="back-btn">
                <ion-icon name="return-down-back-outline"></ion-icon>
                <span>Back</span>
            </Link>
            {error && <div className="error-msg">{error}</div>}
            {isPending && <div className="loading-msg">Loading...</div>}
            {countries && <Country country={countries.filter((country) => country.alpha3Code === alpha3Code)} />}
        </div>
    );
}
