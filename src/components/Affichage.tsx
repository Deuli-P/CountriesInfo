
'use client'
// List des pays a afficher
import { useSearch } from "./../context/Search";
import Article from "./Article";

// Quand vide petit rectangle avec au milieu : Pas de pays selectionné

interface Country {
    flags: {
        png: string;
        alt: string;
    };
    translations: {
        fra: {
            common: string;
        };
    };
    name: {
        common: string;
        official: string;
        nativeName: {
          [key: string]: {
            common: string;
            official: string;
          };
        }
    }
}


const Affichage = ()=> {

    const { result, search } = useSearch();



    return (
        <section id="list-pays" className=" w-full h-auto grid grid-cols-2  gap-4 py-4 p-4 border-t-slate-500 border-t-2">
            
            { result.length > 0 ?
                (
                    result?.map((item: Country, index:number)=>{
                        return(
                            <Article key={index} item={item} id={index}/>
                        )
                    })
                )       
            :
                (
                        <p className="text-slate-300 text-2xl text-center whitespace-nowrap">Pas de pays selectionné</p>
                )
        }
        </section>
    )
}

export default Affichage;