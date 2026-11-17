---
title: Símbolos, tipos y activos, plantillas de proyecto y Quick Kits
summary: La Biblioteca tiene tres clases de elementos (Símbolos, Tipos, Activos). Agregue un tipo a su proyecto, comience desde una plantilla de proyecto compartida, agregue un Quick Kit y comparta los suyos desde la página de carga de la Biblioteca.
keywords: biblioteca, símbolos, tipos, activos, tipo, tipo de muro, tipo de piso, tipo de techo, tipo de plafón, plantilla de proyecto, plantilla, Quick Kit, kit, compartir, carga, versión, registro de cambios, LOD, clasificación, licencia, notas de práctica
from: e13b0e67
---

## Qué hará

Encuentre en la Biblioteca lo que necesita según lo que es, agregue un tipo al proyecto que está dibujando, comience un proyecto nuevo desde una plantilla que alguien compartió y comparta sus propias plantillas, tipos y kits.

## Las tres clases de elementos de la biblioteca

- **Símbolos** son convenciones de dibujo: solo 2D, dibujados al tamaño de anotación y agrupados por disciplina.
- **Tipos** indican de qué está hecho un elemento: sus capas con su espesor real, su nivel de desarrollo (LOD) y su código de clasificación. Un tipo se agrega al proyecto; no se dibuja.
- **Activos** son objetos físicos, como puertas, ventanas, mobiliario, accesorios y equipos, con una vista en planta y un cuerpo 3D a tamaño real.

En la pestaña {{ui:Biblioteca}}, elija {{ui:Biblioteca}} y use **Clase de elemento** para mostrar Todo, Símbolos, Tipos o Activos.

## Agregue un tipo a su proyecto

1. Elija **Tipos** en Clase de elemento y ábralo.
2. Revise su composición, LOD y clasificación debajo de la imagen, y luego elija {{ui:Agregar a este proyecto}}.
3. Se agrega como tipo de muro, piso, techo o plafón con el que puede dibujar. Si ya hay un tipo con ese nombre, el nuevo se agrega como copia y el suyo queda como estaba. Un solo Deshacer lo quita.

## Plantillas de proyecto y Quick Kits

Elija {{ui:Kits}} para ver lo que compartieron otras personas.

- **Una plantilla de proyecto** es un archivo IFC con niveles, ejes, tipos y configuración. {{ui:Guardar en mis plantillas}} la coloca en Nuevo edificio, en Comenzar desde.
- **Un Quick Kit** es una lista de elementos de la biblioteca. {{ui:Mostrar los elementos del kit}} los muestra como tarjetas que puede colocar.
- Cada kit tiene una versión y un registro de cambios, con el más reciente primero. Una versión que empieza con 0 es para discusión; 1.0.0 es solo para lo que adoptó el propietario de la línea.

## Comparta los suyos

- **Una plantilla de proyecto:** {{ui:Guardar como plantilla}}, marque {{ui:Crear también un archivo para compartir en la Biblioteca}}, agregue lo que contiene y una versión. Obtendrá un archivo `.json`.
- **Un Quick Kit:** en {{ui:Kits}}, elija {{ui:Crear un Quick Kit a partir de este proyecto}}. Lista los elementos de la biblioteca que usa el proyecto.
- **Un tipo:** en {{ui:Paquetes de tipos}}, marque un tipo y elija {{ui:Guardar como elemento de la Biblioteca…}}.

Cargue el archivo en la página de carga de la Biblioteca. Pasa por la misma revisión que cualquier elemento, y allí elige la licencia: cada elemento indica su licencia. A los elementos se les pide su LOD, una clase IFC y un código de clasificación (un código, no solo un nombre).

## Notas de práctica

En la página de cualquier elemento de la Biblioteca, los miembros con sesión iniciada pueden agregar una nota: usado en un proyecto real, probado en un proyecto de muestra o problema encontrado. Indique en pocas palabras el tipo de proyecto y omita los nombres de clientes. Una nota es pública y no es una reseña: no cambia el elemento.

## Conviene saber

- La aplicación no envía nada. Los archivos se generan en su equipo y usted los carga.
- Un kit hecho desde una plantilla conserva el texto IFC tal como se guardó. Revíselo por si hay algo privado antes de cargarlo.
- CadCraft muestra Símbolos y Activos en su pestaña de Biblioteca; los tipos y las plantillas son para proyectos de BimCraft.
