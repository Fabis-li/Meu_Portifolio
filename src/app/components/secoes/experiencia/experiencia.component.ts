import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemExperiencia } from './models/item-experiencia';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [NgForOf],
  templateUrl:"./experiencia.component.html",  
})
export class ExperienciaComponent {
  experiencias: ItemExperiencia[] = [
    {
      duracaoExperiencia: "Abr/2020 - Mai/2021",
      imgUrl: "./mkj.jpg",
      alt: "Logo Makenji",
      titulo: "Analista de Planejamento",
      descricao: `
        
      `,
    },
    {
      duracaoExperiencia: "Ago/2019 - Fev/2020",
      imgUrl: "./polowear.png",
      alt: "Logo Polo Wear",
      titulo: "Analista de Planejamento",
      descricao: `
     
      `,
    },
    {
      duracaoExperiencia: "Ago/2013 - Jun/2019",
      imgUrl: "./tng.png",
      alt: "Logo TNG",
      titulo: "Analista de Planejamento",
      descricao: `
     
      `,
    },
  ];
}

// <p>
// <span class="app-texto-principal fw-semibold">Stack:</span> .NET
// Framework, .NET Core, Entity Framework Core, ASP.NET Core MVC,
// ASP.NET Web API, Angular.
// </p>
