import Affichage from "@/components/Affichage";
import Footer from "@/components/Footer";
import Formulaire from "@/components/Form";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";

type ButtonCTAProps = {
  url: string;
  text: string;
}

const ButtonCTA =({url,text}:ButtonCTAProps)=> {
  return (
    <a href={`https://${url}`} >
      <div className="py-4 px-6 bg-red-400 rounded-full shadow-lg shadow-slate-500 hover:bg-red-500 transition-all duration-[0.3s] ease-out origin-bottom-right">
        <span>{text}</span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center gap-10 mt-16 mb-14 px-6">
      <section className="flex w-full flex-col gap-16 relative ">
        <div className=" flex flex-col gap-6 text-left overflow-hidden px-4">
          <h1 className=" font-inter w-auto relative text-3xl font-bold after:skew-x-3 after:bg-red-400 after:w-[200px] after:absolute after:right-[12%] after:h-2 after:bottom-[5%] after:-z-20">Information sur les pays</h1>
          <p className=" w-[90%] text-ellipsis text-wrap whitespace-normal ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illo unde, deserunt culpa asperiores earum ex nobis nisi quod sunt vitae laboriosam, omnis facere excepturi amet cupiditate. Quod, tenetur vel?</p>
          <div className="absolute top-[-24%] right-[-15%] -z-50">
            <TbWorld size={400} color="#E1E1E1"/>
          </div>
        </div>
        <div className="flex flex-row gap-10 w-full justify-center items-center">
          <ButtonCTA url="pierre-antoniutti.fr" text="Porfolio" />
          <a href="https://github.com/Deuli-P/CountriesInfo">
            <span className="underline underline-offset-2 opacity-50" >Respository</span>
          </a>
        </div>
      </section>
      <Formulaire />
      <Affichage />
    </main>
      <Footer />
    </>
  );
}
