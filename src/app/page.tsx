import Image from "next/image";
import Navbar from "../components/navbar";
import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Home | Jovic Sousa",
    description: "Página exibindo alguns projetos de identidade visual",
  };

export default function Home() {
  return (
    
    <div className="bg-blue-500 h-screen justify-center">

      <div>
        <Navbar></Navbar>
      </div>

      <div id="welcome" className="text-center mx-auto my-auto pt-78 items-center ">
        <p>bem vindo!</p>
      </div>


    </div>
  );
}
