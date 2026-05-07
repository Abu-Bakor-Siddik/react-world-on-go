import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    const[visited,setVisited]=useState(false);
    // console.log(country.area.area);
    // console.log(handleVisitedCountries);
    const handleVisited = () => {
        //Using if else toggle
        /* if(visited){
            setVisited(false);
        }else{
            setVisited(true);
        } */

        //using ternary toggle
        /* setVisited(visited? false : true); */

        //Using bang sign toggle
        setVisited(!visited)
        handleVisitedCountries(country);
    }

    return (
        //Using AND Operator
        //Using ternary operator
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country'}`}>
        <div className={`country ${visited && 'country-visited'}`}>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population:{country.population.population} </p>
            <p>Area: {country.area.area} & It is a {country.area.area> 2040 ? 'Big Country':"Small Country"}</p>
            <button onClick={handleVisited}>{visited? 'Visited':'Not Visited'}</button>
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;

/**
 * 1.Inline CSS(Style object)
 * 2.
 *  */ 