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
      imgUrl: "./assets/arm_peixe.png",
      descricao: "Armadura de Peixes",
    },
    {
      href: "#",
      imgUrl: "./assets/arm_virgem.jpg",
      descricao: "Armadura de Virgem",
    },
    {
      href: "#",
      imgUrl: "./assets/pegasus.jpg",
      descricao: "Caveleiro de Pegasus",
    },    
  ];
}
