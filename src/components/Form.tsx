"use client"

import { useEffect, useState } from "react"; 
import { useSearch } from "./../context/Search";

type SubmitTypes = {
    search: string;
}

type dataSendType = {
    data: string;
}

const Formulaire =()=> {

    const { search, setSearch, result, setResult } = useSearch();


    const [ empty, setEmpty ] = useState(true);
    const [ disabled, setDisabled ] = useState(true);

    // regex pour vérifier si la langue est valide mini 3 caractères que des lettres pas d'accent

    const regex = /^[a-zA-Z]{3,}$/;


    useEffect(()=>{
        const searchWithoutTrim = search.trim().toLowerCase();
        if(searchWithoutTrim.length > 2){
            setEmpty(false);
            setDisabled(false);
        }
        else{
            setEmpty(true);
            setDisabled(true);
        }
        sendData({data: searchWithoutTrim})
    },[search, empty, disabled])


    // Envoi des données vers le serveur

    const sendData = async ({data}: dataSendType)=> {
        const response = await fetch(`https://restcountries.com/v3.1/lang/${data}`)
        const result = await response.json();
        setResult(result);
        console.log("result: ", result);
    }


    return(
        <form 
            action="submit" 
            onSubmit={(e)=>{e.preventDefault()}} 
            className="
                py-4 
                rounded-md 
                w-full
                h-auto 
                justify-center 
                items-center"
        >
            <label  className="text-black w-full text-2xl text-center flex-col flex gap-6"> Entrer la langue ici
                <input type="text" className="text-black px-4 py-2 w-full  rounded-md text-lg focus h-10 shadow-lg shadow-neutral-400" name="langue" id="langue" value={search} onChange={(text)=>{setSearch(text.target.value)}} placeholder="ENG, english, FRA,deutch..."/>
            </label>
        </form>
    )
}

export default Formulaire ;