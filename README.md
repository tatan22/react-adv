# Aplicación React Base

## Sistema de rutas con react router dom

Para la implementación de rutas se utilizo la librería react router dom, con la cual se implemento la navegación de la aplicación.
se instala mediante el comando `npm install react-router-dom`

> recomendado visitar [documentación](https://reactrouter.com/start/data/installation)

Recordemos que :
Link : Me permite hacer redirecciones de rutas
NavLink : Me permite hacer navegación entre rutas pero tiene un path que me permite saber en que ruta estoy y poner estilo a esa ruta

## Implementación de YUP para validaciones

En cortas palabra usaremos un validation schema builder para las validaciones de los formularios. Este es el recomendado por Formik para la implementación de validaciones.

Se puede apreciar en la documentación de la librería de   [Formik](https://formik.org/docs/getting-started)

> recomendado visitar [documentación](https://jquense.github.io/yup/)

## Diferencia entre método y función

Una función es en general un bloque de código que se ejecuta cuando se llama a ella. Un método es un bloque de código que se ejecuta cuando se llama a un objeto.

> Pero cuando desestructuramos el método de un objeto se convierte en una función.

Por eso el getFieldProps se convierte en una función y retorna un objeto con las propiedades que se necesitan.
