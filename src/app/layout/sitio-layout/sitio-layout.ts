import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing-module";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sitio-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sitio-layout.html',
  styleUrl: './sitio-layout.scss'
})
export class SitioLayout {

}
