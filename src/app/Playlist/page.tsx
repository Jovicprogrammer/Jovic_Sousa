
import { Metadata } from "next";
import Navbar from "@/src/components/navbar";

  export const metadata: Metadata = {
    title: "Playlist | Jovic Sousa",
    description: "Página exibindo alguns projetos de identidade visual",
  };

export default function Playlist() {

    return (

        <div>

        <div>
          <Navbar></Navbar>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus culpa natus obcaecati error fugiat id rerum facilis quis harum nobis reiciendis blanditiis voluptatem officia quidem, quasi quos repellat. Facilis, dolorem!</p>

        </div>


    )

}