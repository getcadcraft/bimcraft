---
title: Ver un dibujo DWG o DXF en 3D
summary: Cambie el espacio modelo de un dibujo a 3D para ver elevaciones, espesores, caras 3D, mallas y bloques, orbitar alrededor, hacer clic en un objeto para ver sus propiedades y ver lo que todavía no está dibujado.
keywords: 3d, dwg, dxf, dibujo, espacio modelo, órbita, sección, corte, recorte, elegir, seleccionar, propiedades, atributos, handle, elevación, espesor, extrusión, 3dface, polyface, malla, polilínea 3d, bloques, vistas, perspectiva, paralela, extensión, acis, sólidos
from: a0c6cd17
---

## Qué hará

Vea el espacio modelo de un dibujo en 3D. Las líneas y las polilíneas quedan a sus alturas reales, los objetos con espesor se levantan como muros, y las caras 3D, las mallas y los bloques 3D se muestran como superficies alrededor de las cuales puede orbitar. Las hojas siguen en 2D.

## Pasos

1. Abra un DWG o DXF. Vea [Ver un dibujo DWG o DXF](topic:view-dwg). Se abre en 3D, salvo que {{ui:Settings}} › {{ui:BimCraft}} › **Los dibujos se abren en** indique {{ui:Model (2D)}}.
2. Desde 2D, haga clic en {{ui:3D}} en la barra sobre el dibujo, o presione {{key:3}}.
3. Espere un momento la primera vez: la barra de estado dice "Construyendo el dibujo en 3D…", y después indica cuántas líneas y caras muestra.
4. Oriente, encuadre y haga zoom (vea la tabla de abajo).
5. Haga clic en una vista de la segunda barra: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} o {{ui:Right}}.
6. Haga clic en {{ui:Perspective}} para cambiar entre una vista en perspectiva y una vista paralela.
7. Haga clic en {{ui:Extents}} o presione {{key:F}} para ver de nuevo todo el dibujo.
8. Haga clic otra vez en {{ui:3D}}, presione {{key:3}}, o haga clic en {{ui:Model}} o en una pestaña de hoja para volver a 2D.

## Qué debe ver

- El espacio modelo en 3D, con Z hacia arriba y en los colores propios del dibujo. Las caras son un tono más claro que sus aristas.
- Las capas que apague en {{ui:Layers}} también desaparecen de la vista 3D.
- A la derecha: el número de líneas y caras, el tamaño del dibujo en X, Y y Z, **Solo en la vista 2D** y **Aún no dibujado**.

## Cortarlo con un plano de sección

Haga clic en {{ui:Section}} en la barra 3D, o presione {{key:X}}. La barra debajo funciona igual que en los modelos IFC (vea [Cortar un modelo IFC con un plano de sección](topic:section-plane)): corte desde {{ui:Top}}, {{ui:Front}} o {{ui:Side}}, arrastre o escriba el desplazamiento —en las unidades propias del dibujo, aquí— y use {{ui:Flip}} para conservar el otro lado. Lo que el plano corta no puede elegirse. Volver a 2D quita el corte.

## Ver las propiedades de un objeto

Haga clic en un objeto de la vista 3D. Se vuelve del color de selección y {{ui:Properties}} muestra lo que dice el archivo sobre él: su tipo, capa, color, tipo de línea y handle, y luego sus datos propios, como el inicio, el final y la longitud de una línea, el centro y el radio de un círculo, las esquinas de una cara 3D, o el bloque, el punto de inserción, la escala, la rotación y los valores de atributo de una referencia a bloque.

- Una referencia a bloque se elige completa, junto con los bloques anidados en ella.
- Un clic a unos píxeles de una línea elige la línea.
- Mantenga presionada {{key:Mod}} y haga clic para elegir más objetos, o para quitar uno; {{ui:Properties}} entonces los cuenta por tipo.
- {{key:Esc}}, o un clic en un espacio vacío, quita la selección.
- Los objetos en capas que apagó no pueden elegirse.

## Desplazarse

:::mouse
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón central, o con el botón izquierdo |
| Encuadrar | Arrastre con el botón derecho, o mantenga presionado {{key:Shift}} y arrastre |
| Hacer zoom | Gire la rueda; el zoom se dirige a lo que está bajo el puntero |
| Ver todo | {{ui:Extents}} o {{key:F}} |
| Mirar desde un lado | Haga clic en una cara, arista o esquina del cubo de vistas, en la esquina inferior derecha |
:::

El cubo de vistas puede cambiarse por un icono de ejes, o ocultarse, en {{ui:Settings}}. Vea [Configuración de BimCraft](topic:settings).

:::mac mouse
En un trackpad, deslice con dos dedos para orbitar, mantenga presionada {{key:Shift}} y deslice para encuadrar, y pellizque para hacer zoom.
:::

:::touch
Arrastre con un dedo para orbitar. Pellizque con dos dedos para hacer zoom, y muévalos juntos para encuadrar.
:::

## Qué se dibuja en 3D

| En el dibujo | En 3D |
|---|---|
| Líneas, polilíneas 3D | A sus alturas reales |
| Polilíneas, círculos, arcos, elipses | En su propio plano, a su elevación, inclinados cuando el dibujo los inclina |
| Espesor en líneas, polilíneas, círculos y arcos | Muros de esa altura; los círculos quedan cerrados arriba y abajo |
| Caras 3D, mallas polyface, mallas de polígonos | Superficies sombreadas con sus aristas visibles |
| Bloques | Colocados, girados y escalados en 3D, incluidos los bloques anidados |
| Sombreados | Sus contornos |
| Trazos 2D simples | Planos, donde se dibujaron |

## Solo en la vista 2D

El texto, el texto de líneas múltiples y los atributos visibles de los bloques se dibujan en 3D, en su propio plano y a su propia altura, y un clic sobre ellos los elige. Las polilíneas anchas muestran su ancho como una banda plana. Las directrices múltiples, las imágenes y los patrones de sombreado se cuentan en **Solo en la vista 2D**: véalos en la pestaña {{ui:Model}} o en las hojas.

## Aún no dibujado

Los sólidos y superficies guardados como cuerpos ACIS (sólidos 3D, cuerpos, regiones y superficies) y las mallas de subdivisión aparecen en **Aún no dibujado**, con cuántos hay. Se omiten; no se adivinan.

## Errores comunes

- **Todo se ve plano.** El dibujo es 2D: sus líneas no tienen altura. Haga clic en {{ui:Front}} para comprobarlo; un dibujo plano se ve como una línea.
- **Un modelo sólido no muestra nada.** Los sólidos hechos con un modelador de sólidos son cuerpos ACIS, enumerados en **Aún no dibujado**. Exporte el modelo como IFC o como caras 3D desde el programa que lo hizo.
- **El dibujo es un pequeño grupo en el centro.** Algo lejano en el espacio modelo, como una copia antigua de una planta, hace grande la extensión. Acérquese con la rueda donde quiera mirar.

## Siguiente

- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
