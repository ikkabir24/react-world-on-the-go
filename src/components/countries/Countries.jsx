import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) =>{   
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
    }

    const [knownFlags, setKnownFlags] = useState([])

    const handleKnownFlags = (flag) =>{
        console.log(flag)
        const addNewKnownFlag = [...knownFlags, flag];
        setKnownFlags(addNewKnownFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>IN the countries: {countries.length}</h1>
            <h3>Total countries visited: {visitedCountries.length}</h3>
            <h3>Total known flags: {knownFlags.length}</h3>
            <div className='knownFlags-container'>
                {
                    knownFlags.map(flag =>{
                        return <img src={flag} alt="" />
                    })
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3} 
                        country={country} 
                        handleVisitedCountries={handleVisitedCountries}
                        handleKnownFlags={handleKnownFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; 