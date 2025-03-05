
#  Parcial - api res

esta aplicacion sigue los lineamientos que fueron especificados en la documentación para el parcial de la carrera de tecnologia en sistemas de Unicolombo

## INDICE
1. [Introducción](#introducción)
2. [Características](#características)
3. [Instalación](#instalación)
4. [Uso](#uso)
6. [Tecnologías Usadas](#tecnologías-usadas)
7. [Autor](#autor)


---

##  Introducción
Esta es una aplicación que recopila los los productos de la api de fakestore para recrear un sistema que permita colocarlos en un carrito, estipular un precio total y ordenar un formulario de pago emulando las funciones que normalmente tendria una aplicacion especializada en la compra en linea.

##  Características
-  Listar productos
-  Mostrar productos
-  Agregar personajes a favoritos
-  filtros de busqueda por caracteristicas
-  organizacion asendente o desendente
-  sistema de carrito y emulacion de compra.

##  Instalación

###  **Requisitos Previos**
- **Node.js** (última versión recomendada)
- **Ionic CLI** (instalar con `npm install -g @ionic/cli`)
- **Angular CLI** (instalar con `npm install -g @angular/cli`)

NOTA: se requiere versiones de Angular/ionic 17 o superior

### ⚙️ **Pasos de Instalación**
1. Clona este repositorio:  
   ```sh
   git clone https://github.com/DanielCorreaV/parcial-1-apires.git
   ```
2. Entra al directorio del proyecto:  
   ```sh
   cd parcial-1-apires
   ```
3. Instala las dependencias:  
   ```sh
   npm install 
   ```
    ```sh
   npm install -g @ionic/cli
   ```
      ```sh
   npm install -g @angular/cli
   ```
5. Ejecuta la aplicación en modo desarrollo:  
   ```sh
   ionic serve
   ```

## Uso
Pagina de inicio: Te muestra los productos disponibles en la api, cuenta con sistema de filtrado.
Pagina de vista: Te muestra las caracteristicas detalladas de los productos y te permite añadirlos o removerlos del carrito.
pagina de carrito: te muestra los productos agregados al carrito de compra, tiene controles para ajustar la cantidad y un acceso al formulario de pago.
resume: te muestra el resumen del pago.



## Tecnologías Usadas
- **Ionic** (Framework para aplicaciones híbridas)
- **Angular** (Framework frontend)
- **TypeScript** (Superconjunto de JavaScript)
- **API de Fake Store** (https://fakestoreapi.com/)

## Autor
- **Nombre**: [Daniel Correa Vega](https://github.com/DanielCorreaV)
- **Correo**: correavegadaniel@gmail.com
