# Movie Search App

Esta es una aplicación para buscar películas utilizando la API de Open Movie Database (OMDb).

## Requerimientos

- API a usar: [OMDb API](https://www.omdbapi.com/)
- Necesitas conseguir una API Key registrando tu email en la página web.

## Características

- Muestra un campo de búsqueda y un botón para buscar películas.
- Lista las películas encontradas, mostrando el título, año y póster.
- El formulario de búsqueda funciona correctamente.
- Las películas se muestran en un grid responsive.
- Realiza la solicitud a la API para obtener los datos de las películas.

## Primer Iteración

- Evita realizar la misma búsqueda dos veces seguidas.
- La búsqueda se realiza automáticamente mientras se escribe en el campo de búsqueda.
- Evita realizar la búsqueda continuamente mientras se escribe (debounce).

## Capturas de Pantalla

![Movie Search App](screenshot.png)

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar tu API Key en el archivo `services/movies.js`. Reemplaza `YOUR_API_KEY` con tu API Key obtenida de OMDb.

```javascript
const API_KEY = "YOUR_API_KEY";
Instalación
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

Clona este repositorio:

git clone <URL_DEL_REPOSITORIO>
Navega al directorio del proyecto:

cd movie-search-app
Instala las dependencias:

npm install
Inicia la aplicación:

npm start
La aplicación estará disponible en http://localhost:3000.

Contribuciones
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork de este repositorio.
Crea una rama con el nombre de tu nueva característica o solución de error: git checkout -b nombre-de-la-rama.
Realiza tus cambios y realiza commits descriptivos: git commit -m "Descripción de los cambios".
pushea tus cambios a tu repositorio: git push origin nombre-de-la-rama.
Abre un pull request en este repositorio.
Licencia
Este proyecto está bajo la Licencia MIT.