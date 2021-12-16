import { Link } from "react-router-dom";

export default function Country({ country }) {
    const info = country[0];

    // Country flag
    const flag = info.flags.png;

    // Country Name
    const name = info.name;

    // Country Native name
    const nativeName = info.nativeName;

    // Country Population
    const population = info.population;

    // Country Region
    const region = info.region;

    // Country Sub Region
    const subregion = info.subregion;

    // Country Capital
    let capital;

    if (info.capital) {
        capital = info.capital;
    } else {
        capital = '';
    }

    // Country Top Level Domain
    const tld = info.topLevelDomain[0];

    // Country Currencies
    let currenciesObj = info.currencies;
    let currencies;

    if (currenciesObj) {
        currenciesObj = Object.entries(info.currencies)
        currenciesObj.map((currency) => {
            return currencies = currency[1].name;
        })
    } else {
        currencies = '';
    }

    // Country Languages
    let languages = info.languages;
    let langArray = [];

    if (languages) {
        for (let value of languages) {
            langArray.push(value.name);
        }
    } else {
        languages = 'None'
    }

    // Country Borders
    const countryBorders = info.borders;

    let hasBorders;
    if (countryBorders) {
        hasBorders = countryBorders;
    } else {
        hasBorders = [];
    }

    return (
        <div className="country-info-container">
            <div className="country-info--flag">
                <img src={flag} alt="" />
            </div>
            <div className="country-info">
                <div className="country-info--name">
                    <h2>{name}</h2>
                </div>
                <div className="country-stats-container">
                    <div className="country-stats stats-top">
                        <p><span>Native Name: </span> {nativeName}</p>
                        <p><span>Population: </span> {population.toLocaleString('en-US')}</p>
                        <p><span>Sub Region: </span> {subregion}</p>
                        <p><span>Region: </span> {region}</p>
                        <p><span>Capital: </span> {capital}</p>
                    </div>
                    <div className="country-stats stats-bottom">
                        <p><span>Top Level Domain: </span> {tld}</p>
                        <p><span>Currencies: </span> {currencies}</p>
                        <p><span>Langagues: </span> {langArray.join(', ')}</p>
                    </div>
                </div>
                <div className="country-borders-container">
                    <h3>Border Countries:</h3>
                    <div className="country-borders">
                        {hasBorders.map((border, index) => (


                            <Link key={index} to={`/countryInfo/${border}`}>{border}</Link>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
