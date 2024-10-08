import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemStack } from './models/item-stack';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgForOf],
  templateUrl:"./stack.component.html",
  styleUrl: `./stack.component.scss`,
})
export class StackComponent {
  public itensStack: ItemStack[] = [
    { icone: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" ,alt: ".NET", titulo: ".NET" },
    { icone: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png", alt: "logo Angular",titulo: "Angular", },
    { icone: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", alt: "JavaScript", titulo: "JavaScript" },
    { icone: "https://miro.medium.com/max/256/1*tYwniVWMqcytJ1AQ6zud7A.png", alt: "TypeScript", titulo: "TypeScript" },
    { icone:"https://cdn.worldvectorlogo.com/logos/c--4.svg", alt: "CSharp", titulo: "C#" },
    { icone:"https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png", alt: "Node.Js", titulo: "Node.js" },
    //{ icone:"https://assets.mofoprod.net/network/images/discord.original.jpg", alt: "Discord", titulo: "Discord.js" },
    { icone:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png", alt: "Express", titulo: "Express" },
    { icone:"https://hermes.dio.me/articles/cover/8661e194-83ff-4ad5-8e69-f0ed56bc7b66.png", alt: "Entity Framework", titulo: "Entity Framework" },
    { icone:"https://cdn-icons-png.flaticon.com/512/4492/4492311.png", alt: "SQL Server", titulo: "Microsoft SQL Server" },
    { icone:"https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png", alt: "PostgresSQL", titulo: "PostgreSQL"},
    { icone:"https://static-00.iconduck.com/assets.00/selenium-icon-2048x1986-3fr2ikf8.png", alt: "Selenium", titulo: "Selenium" },
    { icone: "https://www.stickersdevs.com.br/wp-content/uploads/2023/03/cypress_sticker_adesivo-800x800.jpg", alt: "Cypress", titulo: "Cypress" },
  ]
}
