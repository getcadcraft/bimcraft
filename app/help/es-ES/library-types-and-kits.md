---
title: Símbolos, tipos y activos, plantillas de proyecto y Kits rápidos
summary: La biblioteca tiene tres tipos de elemento (símbolos, tipos y activos). Añada un tipo a su proyecto, parta de una plantilla de proyecto compartida, añada un Kit rápido y comparta los suyos desde la página de subida de la biblioteca.
keywords: biblioteca, símbolos, tipos, activos, tipo, tipo de muro, tipo de suelo, tipo de cubierta, tipo de techo, plantilla de proyecto, plantilla, kit rápido, kit, compartir, subir, versión, registro de cambios, LOD, clasificación, licencia, notas de la práctica
from: e13b0e67
---

## Qué va a hacer

Encuentre en la Biblioteca lo que necesita según lo que es, añada un tipo al proyecto que está dibujando, empiece un proyecto nuevo a partir de una plantilla que alguien haya compartido, y comparta sus propias plantillas, tipos y kits.

## Los tres tipos de elemento de la Biblioteca

- **Símbolos** son convenciones de dibujo: solo 2D, dibujados al tamaño de anotación y agrupados por disciplina.
- **Tipos** indican de qué está hecho un elemento: sus capas con su espesor real, su nivel de desarrollo (LOD) y su código de clasificación. Un tipo se añade al proyecto, no se dibuja.
- **Activos** son objetos físicos, como puertas, ventanas, mobiliario, aparatos y equipos, con una vista en planta y un cuerpo 3D a tamaño real.

En la pestaña {{ui:Biblioteca}}, elija {{ui:Biblioteca}} y use **Tipo de elemento** para mostrar Todo, Símbolos, Tipos o Activos.

## Añadir un tipo a su proyecto

1. Elija **Tipos** en **Tipo de elemento** y ábralo.
2. Revise su composición, LOD y clasificación bajo la imagen y, después, pulse {{ui:Añadir a este proyecto}}.
3. Se añade como tipo de muro, suelo, cubierta o techo con el que puede dibujar. Si ya hay un tipo con ese nombre, el nuevo se añade como copia y el suyo permanece como estaba. Un Deshacer lo retira.

## Plantillas de proyecto y Kits rápidos

Elija {{ui:Kits}} para ver lo que han compartido otras personas.

- **Una plantilla de proyecto** es un archivo IFC con plantas, rejillas, tipos y ajustes. {{ui:Guardar en mis plantillas}} la coloca en Edificio nuevo, bajo **Empezar desde**.
- **Un kit rápido** es una lista de elementos de la Biblioteca. {{ui:Mostrar los elementos del kit}} los muestra como tarjetas que puede colocar.
- Cada kit tiene una versión y un registro de cambios, con el más reciente primero. Una versión que empieza por 0 es para debate; 1.0.0 es solo lo que el responsable de la línea ha adoptado.

## Comparta los suyos

- **Una plantilla de proyecto:** {{ui:Guardar como plantilla}}, marque {{ui:Crear también un archivo para compartir en la Biblioteca}}, añada lo que contiene y una versión. Obtiene un archivo `.json`.
- **Un kit rápido:** en {{ui:Kits}}, elija {{ui:Crear un Kit rápido a partir de este proyecto}}. Lista los elementos de la Biblioteca que usa el proyecto.
- **Un tipo:** en {{ui:Paquetes de tipos}}, marque un tipo y elija {{ui:Guardar como elemento de la Biblioteca…}}.

Suba el archivo en la página de subida de la Biblioteca. Pasa la misma revisión que cualquier elemento, y allí elige la licencia: cada elemento indica su licencia. Se piden para cada elemento su LOD, una clase IFC y un código de clasificación (un código, no solo un nombre).

## Notas de la práctica

En la página de cualquier elemento de la Biblioteca, los miembros con sesión iniciada pueden añadir una nota: usado en un proyecto real, probado en un proyecto de muestra o problema encontrado. Diga en pocas palabras qué tipo de proyecto es y no incluya nombres de clientes. Una nota es pública y no es una valoración: no cambia el elemento.

## Conviene saber

- La aplicación no envía nada. Los archivos se crean en su ordenador y usted los sube.
- Un kit creado a partir de una plantilla lleva el texto IFC exactamente como se guardó. Revíselo por si hay algo privado antes de subirlo.
- CadCraft muestra los Símbolos y los Activos en su pestaña Biblioteca; los Tipos y las plantillas son para proyectos de BimCraft.
