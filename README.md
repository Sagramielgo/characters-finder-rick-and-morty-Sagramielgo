## Characters Finder Rick and Morty

El ejercicio consiste en realizar una SPA funcional poniendo en práctica los conocimientos de React adquiridos en Adalab durante este módulo.
Partimos de una plantilla de React; primero haz npm install y después npm start para visionar el estado del ejercicio en la web.

Podemos modificarla; he actualizado el archivo package json para que cree directamente la carpeta de producción docs, necesaria para publicar en gitHub pages, y no sea necesario ejecutar npm build.

Orden y concierto:
Carpeta componentes para javascript; carpeta stylesSheets para archivos scss y services para llamada a la API.
Componentes de javascript con código escrito en JSX, cuya sintaxis es similar a HTML pero en este caso se escribe en archivos de js.
He preferido utilizar componentes funcionales, you know why ;)

Y DICHO ESTO:
El ejercicio versa sobre los personajes de la serie de animación RICK AND MORTY.

FASES DEL EJERCICIO:

LLAMADA API: Filtrar de salida la información que nos interesa.

PINTAR EN PANTALLA LISTA DE PERSONAJES: Con la información que nos devuelve la API mostrar tarjetas con imagen, nombre y género de cada personaje.

FILTROS: En un formulario planteamos diversas formas de búsqueda, combinando también funcionalidades distintas (como inputs de texto, desplegables o checkboxes):
La usuaria puede buscar su personaje favorito por nombre, especie o laneta de origen.

TARJETA DETALLE: Haciendo click sobre la tarjeta de un personaje, se muestra una tarjeta ampliando la información con vivo o muerto, especie, planeta de origen y núm de episodios en los que aparece; y por supuesto con un botón para regresar a la página principal

BONUS:
FILTROS EXTRA: Además del input de texto que pedían he añadido otros dos por planeta de origen y especie.

URL COMPARTIBLES: Para copiar y pegar en tu navegador.

¿Y SI 'COPYPASTEO' MAL...? Salta un mensaje de error en la búsqueda, y te muestra el camino de regreso a casa.

RUTAS DINÁMICAS: Para enviarte a cada tarjeta detalle.

FUNCIONALIDAD LOADING: En caso de que tarde en cargar unos segundos o hubiera algún problema, te indica que esperes, para que no desesperes!

ORDEN ALFABÉTICO: Ordenar las tarjetas de personajes mediante una función.

EVITAR el envío por defecto del formulario.

FILTRADO con independencia de mayúsculas y minúsculas.

CADA OVEJA CON SU PAREJA: Cada componente de js tiene su correspondiente archivo de estilos, con el mismo nombre y en una carpeta gemela. Para que puedas llevarte a tu proyecto el trocito que te guste, completo.

MEJORAS:

- Estilos y diseño: La página es muy chula, responsive y grid-friendly.
- Código limpio, ordenado y comentado.
- Mensaje de Oops!, no encuentro lo que buscas. Try again!
- Animaciones, para que sea divertida y adictiva la experiencia de usuaria.
- COLAPSABLE: Un botón abre y cierra la sección de filtros, experiencia de usuaria completa.

Puedes descargar, clonar, copiar o inspirarte; compartir es vivir!

Sigo en proceso de aprendizaje, pero si quieres ver más,
[#gitFuntastic] (https://github.com/Sagramielgo)

That's all folks!
