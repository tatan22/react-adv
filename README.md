# Aplicación React Base

## Sistema de rutas con react router dom

 Para la implementación de rutas se utilizo la librería react router dom, con la cual se implemento la navegación de la aplicación.
se instala mediante el comando `npm install react-router-dom`
> recomendado visitar [documentación](https://reactrouter.com/start/data/installation)

Recordemos que :
Link : Me permite hacer redirecciones de rutas
NavLink : Me permite hacer navegación entre rutas pero tiene un path que me permite saber en que ruta estoy y poner estilo a esa ruta

## Uso de Git y Github

> El comando `git checkout -- .` para eliminar los archivos en el directorio que no se encuentran en el repositorio, esto es necesario para que git no se quede con archivos que no se encuentran en el repositorio.

Qué hace exactamente

Revierte los archivos modificados a su último estado guardado en el repositorio (último commit).

Es como decir: “olvida todo lo que cambié y vuelve a como estaba antes”.

Qué NO hace

❌ No borra archivos nuevos que no estén trackeados por Git.

❌ No revierte commits.

❌ No afecta archivos ya confirmados.

## Renombrar Chunks

En este proyecto no se renombran los chunks como se muestra en el video, ya que el proyecto está creado con Create React App (CRA), el cual utiliza Webpack encapsulado.

En este entorno no se tiene acceso a la configuración de Webpack, por lo que no es posible controlar ni personalizar los nombres de los chunks.

CRA genera los chunks automáticamente usando nombres internos y hashes para:

- Optimizar el caché del navegador

- Evitar conflictos entre archivos

- Mejorar el rendimiento en producción

Por esta razón, aunque el lazy loading sí funciona correctamente, el renombrado manual de chunks ya no aplica ni es necesario en este tipo de proyecto.

## Uso Nested Lazy Routes

> Se utiliza el componente `Outlet` que se encuentra en el archivo `App.jsx` para mostrar las rutas anidadas.