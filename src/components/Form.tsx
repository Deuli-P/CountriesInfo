"use client"

import { useEffect, useState } from "react"; 
import { useSearch } from "./../context/Search";

type SubmitTypes = {
    langue: string;
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
    },[search])


    // Envoi des données vers le serveur

    const sendData = async ({data}: dataSendType)=> {
        const response = await fetch(`https://restcountries.com/v3.1/lang/${data}`)
        const result = await response.json();
        setResult(result);
        console.log("result: ", result);
    }


    return(
        <form action="submit" onSubmit={(e)=>{e.preventDefault()}} className="px-6 py-4 border-2 border-red-500 rounded-md ring-offset-1 ring-2 ring-blue-600 w-[320px] h-auto flex flex-col justify-center items-center">
            <label  className="text-blue-400 w-full text-center "> Entrer la langue:
                <input type="text" className="text-black px-2 w-90% my-3 rounded-md text-6 focus" name="langue" id="langue" value={search} onChange={(text)=>{setSearch(text.target.value)}} placeholder="Langue"/>
            </label>
        </form>
    )
}

export default Formulaire ;