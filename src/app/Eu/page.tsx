
import { Metadata } from "next";
import Navbar from "@/src/components/navbar";

  export const metadata: Metadata = {
    title: "Eu | Jovic Sousa",
    description: "Página exibindo alguns projetos de identidade visual",
  };

export default function Eu() {

    return (

        <div>

        <div>
          <Navbar></Navbar>
        </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quo atque id aliquam recusandae harum, ipsum iure quaerat velit delectus pariatur deserunt, rerum natus nihil maiores? Aspernatur doloribus in fugit?</p>

        </div>


    )

}