import Affichage from "@/components/Affichage";
import Formulaire from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 h-full">
      <Formulaire />
      <Affichage />
    </main>
  );
}
