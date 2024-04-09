'use client'

import { useContext, createContext, useState } from 'react';

type SearchContextType = {
    search: string;
    setSearch: (value: string) => void;
    result: any[] ;
    setResult: (value: any[]) => void;
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

// on veut : 
 // les resultats de la recherche 
 // ?? la valeur de la recherche ??

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({children}: {children: React.ReactNode}) => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState<any[]>([])

    const values={
        search,
        setSearch,
        result,
        setResult
    }

    return (
        <SearchContext.Provider value={values}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {

    const context = useContext(SearchContext);
    if(!context){
        throw new Error("useSearch doit être utilisé dans un SearchProvider");
    }
    return context;
}
