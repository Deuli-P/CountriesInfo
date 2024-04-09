
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
        <section id="list-pays" className=" w-full h-auto border border-3 rounded-lg border-yellow-500 flex flex-col md:flex-row  md:flex-wrap gap-4 py-4 justify-center p-4">
            
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
                    <div className="w-full h-full flex justify-center items-center">
                        <p className="text-red-500 text-2xl text-center whitespace-nowrap">Pas de pays selectionné</p>
                    </div>
                )
        }
        </section>
    )
}

export default Affichage;