import React, { useState } from 'react';
import './Country.css';

const Country = ({ country , handleVisitedCountries , handleKnownFlags }) => {

    // console.log(handleVisitedCountries)

    const [Visited, setVisited] = useState(false);

    // console.log(country.area.area)

    const handleVisited = () => {
        Visited
        ? setVisited(false)
        : setVisited(true)

        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
                {
                    country.area.area > 300000
                        ? ' Big Country'
                        : ' Small Country'
                }
            </p>
            <button onClick={handleVisited}>
                {
                    Visited
                        ? 'Visited'
                        : 'Not Visited'
                }
            </button>
            <button onClick={()=> handleKnownFlags(country?.flags?.flags.png)}>
                Add to Known Flags
            </button>
        </div>
    );
};

export default Country;