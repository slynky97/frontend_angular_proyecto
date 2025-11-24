import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
