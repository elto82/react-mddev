# Prueba técnica de React

Este proyecto es una prueba técnica para evaluar las habilidades de juniors y trainees de React en Live Coding. El objetivo de la prueba es desarrollar una aplicación que muestre un hecho aleatorio sobre gatos y una imagen relacionada con la primera palabra del hecho.

## APIs
- API de Facts Random: [https://catfact.ninja/fact](https://catfact.ninja/fact)
- API de Imagen random: [https://cataas.com/cat/says/hello](https://cataas.com/cat/says/hello)

## Funcionalidad
La aplicación realiza las siguientes acciones:
- Recupera un hecho aleatorio de gatos utilizando la API de Facts Random.
- Extrae la primera palabra del hecho obtenido.
- Muestra una imagen de un gato relacionada con la primera palabra utilizando la API de Imagen random.

## Estructura del proyecto
El proyecto tiene la siguiente estructura de archivos:
- `App.css`: Archivo CSS para estilizar la aplicación.
- `hooks/useCatImage.js`: Hook personalizado que obtiene la imagen del gato relacionada con la primera palabra del hecho.
- `hooks/useCatFact.js`: Hook personalizado que obtiene el hecho aleatorio sobre gatos.
- `services/facts.js`: Contiene la función `getRandomFact()` que realiza una solicitud a la API de Facts Random y devuelve un hecho aleatorio sobre gatos.
- `App.js`: Componente principal de la aplicación que utiliza los hooks `useCatFact` y `useCatImage` para mostrar el hecho y la imagen del gato.
- `index.js`: Punto de entrada de la aplicación.

## Dependencias
El proyecto tiene las siguientes dependencias:
- React: 18.2.0
- React DOM: 18.2.0
- @vitejs/plugin-react: 4.0.1
- standard: 17.1.0
- vite: 4.3.2

## Uso
Para ejecutar la aplicación, sigue los siguientes pasos:
1. Instala las dependencias ejecutando el siguiente comando en la terminal:
npm install


2. Inicia la aplicación con el siguiente comando:
npm run dev

Esto iniciará la aplicación en modo de desarrollo.
3. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Contribución
Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:
1. Realiza un fork del repositorio.
2. Crea una rama con la nueva funcionalidad o la corrección que deseas implementar.
3. Realiza los cambios y realiza commit de tus modificaciones.
4. Envía un pull request para que tus cambios sean revisados e incorporados al proyecto principal.

