'use client'

import { useSearch } from "@/context/Search";
import { useEffect, useState } from "react";
import Image  from 'next/image';
import { FaMapLocation } from "react-icons/fa6";

type paramsType = {
    params: {
        countryId: number;
    };
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

const Country = ({params}: paramsType ) => {

    const id = params.countryId;

    const { result } = useSearch();

    const [ dataCountry, setDataCountry ] = useState<Country>();
    const [ currencyUse, setCurrencyUse ] = useState<Country["currencies"]>();

    useEffect( () => {
        if (result.length > 0) {
            console.log("result: ", result);
            const country = result[id]
            console.log("country: ", country);
            setDataCountry(country);
            localStorage.setItem("country", JSON.stringify(country));
        }
        else{
            const localCountry = localStorage.getItem("country");
            setDataCountry(JSON.parse(localCountry!));

        }
    }, [result, id]);
    
    

    useEffect(() => {
        if(dataCountry){
            setCurrencyUse(dataCountry.currencies);
            console.log("currencyUse: ", currencyUse);
        }
    },[dataCountry, currencyUse])

    return (
        <main className="w-full flex flex-col items-center mt-10">
        {dataCountry ? (
            <div className="rounded-lg p-6 flex flex-col gap-10">
                <div className="flex flex-col-reverse items-center justify-between w-full gap-10">
                    <div className="flex flex-row gap-10 items-center">
                        <h1 className="text-3xl font-bold">{dataCountry.name.common}</h1>
                        <a href={dataCountry.maps.googleMaps} target="_blank" className="pointer-cursor hover:opacity-35 transition-all duration-300 hover:transition-all duration-200">
                            <FaMapLocation size={40}/>
                        </a>
                    </div>
                    <Image src={dataCountry.flags.png} alt={dataCountry.flags.alt} width={250} height={180} />
                </div>
                <div className="flex flex-col items-center w-full text-center gap-5">
                    <h2>Pays Frontalier(s):</h2>
                        {dataCountry.borders ? 
                        (
                            <ul className="flex flex-row flex-wrap gap-4 justify-center">
                                {dataCountry.borders.map((border) => (
                                    <li key={border} className=" py-[3px] px-4 bg-blue-500  text-white inline rounded-full ">
                                    {border}
                                    </li>
                                ))}
                            </ul>
                        )
                        :
                        (
                            <div>
                                <span> Pas de pays frontalier</span>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                    <h2> Monnaies utilisées dans le pays:</h2>
                    {Object.keys(dataCountry.currencies).map((key) => {
                        const currency = dataCountry.currencies[key];
                        return (
                            <div key={key} className="border-2 border-green-600 rounded-md text-left px-4 py-2 flex flex-col gap-5">
                                <p><span className="underline font-bold underline-offset-2">Nom</span>: {currency.name}</p>
                                <p><span className="underline font-bold underline-offset-2">Symbol</span>: {currency.symbol}</p>
                            </div>
                        );
                     })}
                </div>

                {/* Affichez d'autres informations sur le pays ici */}
            </div>
        ) : (
            <div>Loading...</div>
        )}
    </main>
    )
}

export default Country;