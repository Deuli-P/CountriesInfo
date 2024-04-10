'use client'
import { useState, useEffect } from "react";

type CCA3Type = {
    cca3: string;
}

interface Country {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
        [key:string]: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: {
        [key: string]: number;
    };
    fifa: string;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
}

const BorderCountry =({cca3}:CCA3Type,)=> {

    const [ dataCountry, setDataCountry ] = useState<Country>();

    console.log(typeof cca3);
    

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
                const data = await response.json();
                setDataCountry(data[0]);
                console.log(`[${cca3}] data import:`, dataCountry);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetching();
    },[cca3]);

    return (
        dataCountry ?
        (
            <div className=" py-2 px-4 bg-blue-400 text-white whitespace-nowrap rounded-full shadow-md" >
                <p >{dataCountry.name.common} {dataCountry.flag}</p>
            </div>
        )
        :
        null
    )
}

export default BorderCountry;
