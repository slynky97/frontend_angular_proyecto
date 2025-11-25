import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  const token = localStorage.getItem("access_token");

  // Only add Authorization header when a token exists to avoid sending 'Bearer null'
  let peticion = req;
  if (token) {
    peticion = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
  }

  return next(peticion).pipe(
    catchError((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          // Token expirado o inválido - eliminar token
          localStorage.removeItem("access_token");
          // Si la petición es el login, no redireccionamos: permitimos que el componente maneje el error
          const requestUrl: string = (peticion as any)?.url || '';
          if (!requestUrl.includes('/auth/login')) {
            router.navigate(['/auth/login'], { replaceUrl: true });
          }
        }
        // Otros errores (400, 422, 500, etc.) se relanzarán sin redireccionar
      }
      return throwError(() => error);
    })
  );
};
