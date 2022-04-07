import { useState, useEffect } from "react"
import "./CountrySelector.css"

const CountrySelector = () => {

    const [countries, setCountries] = useState(["loading..."])

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(json => Object.entries(json).map(
                ([_key, value]) => value.name.common))
            .then(countryNames => setCountries(countryNames));
    }

    useEffect(fetchCountries, [])

    return (
        <div className="country-picker">
            <label className="country-picker-label">Pick a Country: </label>
            <input list="country-picker-datalist" id="country-picker-input"/>
            <datalist id="country-picker-datalist">
                {countries.map((country, i) => <option key={i} value={country} />)}
            </datalist>
        </div>
    );
}

export default CountrySelector;