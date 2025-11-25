import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing-module";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventario',
  imports: [RouterOutlet],
  templateUrl: './inventario.html',
  styleUrl: './inventario.scss'
})
export class Inventario {

}
