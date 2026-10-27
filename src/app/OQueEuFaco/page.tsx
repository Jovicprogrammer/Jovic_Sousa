
import { Metadata } from "next";
import Navbar from "@/src/components/navbar";

  export const metadata: Metadata = {
    title: "O Que Eu Faço | Jovic Sousa",
    description: "Página exibindo alguns projetos de identidade visual",
  };

export default function OQueEuFaco() {

    return (

        <div>

        <div>
          <Navbar></Navbar>
        </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum animi consectetur, ratione tempora reiciendis ab et sequi debitis eaque numquam a, porro nulla soluta officia aliquam perferendis hic repudiandae!</p>
        </div>


    )

}