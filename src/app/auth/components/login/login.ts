import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  router = inject(Router);
  authService = inject(AuthService);
  loading = false;

  funIngresar() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const sub = this.authService.funConectarConBackendExterno(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("access_token", res.access_token);
        this.router.navigate(["/admin/usuario"], { replaceUrl: true });
      },
      (error) => {
        console.error('Login error', error);
        // Dejar que el usuario vea el mensaje de error
        alert('Credenciales incorrectas');
      }
    );
    // asegurarnos de resetear loading cuando termine
    sub.add(() => this.loading = false);
  }

  funPersonalizado(){
    alert('Función personalizada ejecutada.');
  }

}
