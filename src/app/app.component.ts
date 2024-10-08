import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SobreComponent } from "./components/secoes/sobre/sobre.component";
import { HabilidadesComponent } from "./components/secoes/habilidades/habilidades.component";
import { StackComponent } from './components/secoes/stack/stack.component';
import { ExperienciaComponent } from "./components/secoes/experiencia/experiencia.component";
import { PortifolioComponent } from "./components/secoes/portifolio/portifolio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SobreComponent, HabilidadesComponent, StackComponent, ExperienciaComponent, PortifolioComponent],  
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss",
 
})
export class AppComponent {
  title = 'portifolio';
}
