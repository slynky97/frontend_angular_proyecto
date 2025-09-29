## Flujo de trabajo con gitFlow
### Inicializar
- Por defecto crea una rama develop
```
git flow init
```
### Crear (Feature)
- Creara una rama (Feature/desc)
```
git flow feature start add-configuracion
```
- Si tiene modificaciones registrar cambios
```
git add .
git commit -m "actualizando cambios"
``` 
```
git flow feature finish add-configuracion
```