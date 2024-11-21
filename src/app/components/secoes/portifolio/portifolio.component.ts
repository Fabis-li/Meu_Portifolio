import { Component } from "@angular/core";
import { itemPortifolio } from "./models/item-portifolio.models";
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: "app-portifolio",
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: "./portifolio.component.html",
  animations: [],
})
export class PortifolioComponent {  
  public itensPortifolio: itemPortifolio[] = [
    {
      href: "#",
      imgUrl: "./assets/pagina_inicial_locadora.png",
      descricao: "Locadora de Autmovéis",
    },
    {
      href: "#",
      imgUrl: "./assets/gerenciador_filmes.png",
      descricao: "Gerenciador de Filmes",
    },
    {
      href: "#",
      imgUrl: "./assets/pegasus.jpg",
      descricao: "Caveleiro de Pegasus",
    },    
  ];
}
