---
title: Ver un plano DWG o DXF en 3D
summary: Cambiá el espacio modelo de un plano a 3D para ver elevaciones, espesores, caras 3D, mallas y bloques, orbitar alrededor, ojeclic un objeto para ver sus propiedades, y ver lo que todavía no está dibujado.
keywords: 3d, dwg, dxf, plano, espacio modelo, orbitar, corte, recorte, elegir, seleccionar, propiedades, atributos, handle, elevación, espesor, extrusión, 3dface, polyface, malla, polilínea 3d, bloques, vistas, perspectiva, paralela, extensión, acis, sólidos
from: a0c6cd17
---

## Lo que hará

Mirá el espacio modelo de un plano en 3D. Las líneas y polilíneas quedan a sus alturas reales, los objetos con espesor se levantan como muros, y las caras 3D, mallas y bloques 3D se muestran como superficies alrededor de las cuales podés orbitar. Las hojas siguen en 2D.

## Pasos

1. Abrí un DWG o DXF. Ver [Ver un plano DWG o DXF](topic:view-dwg). Se abre en 3D salvo que {{ui:Configuración}} › {{ui:BimCraft}} › **Los planos se abren en** diga {{ui:Modelo (2D)}}.
2. Desde 2D, ojeclic {{ui:3D}} en la barra encima del plano, o presioná {{key:3}}.
3. Esperá un momento la primera vez: la línea de estado dice "Construyendo el plano en 3D…", y luego cuántas líneas y caras muestra.
4. Orbitá, desplazá y acercá (ver la tabla abajo).
5. Ojeclic una vista en la segunda barra: {{ui:Iso}}, {{ui:Arriba}}, {{ui:Abajo}}, {{ui:Frente}}, {{ui:Atrás}}, {{ui:Izquierda}} o {{ui:Derecha}}.
6. Ojeclic {{ui:Perspectiva}} para cambiar entre una vista en perspectiva y una vista paralela.
7. Ojeclic {{ui:Extensión}} o presioná {{key:F}} para ver otra vez el plano completo.
8. Ojeclic {{ui:3D}} otra vez, presioná {{key:3}}, o ojeclic {{ui:Modelo}} o una pestaña de hoja para volver a 2D.

## Lo que deberías ver

- Espacio modelo en 3D, con Z hacia arriba, en los colores propios del plano. Las caras se ven un tono más claras que sus bordes.
- Las capas que apagues en {{ui:Capas}} desaparecen también de la vista 3D.
- A la derecha: la cantidad de líneas y caras, el tamaño del plano en X, Y y Z, **Solo en la vista 2D** y **Todavía no dibujado**.

## Cortarlo con un plano de sección

Ojeclic {{ui:Sección}} en la barra 3D, o presioná {{key:X}}. La barra debajo funciona como en los modelos IFC (ver [Cortar un modelo IFC con un plano de sección](topic:section-plane)): cortá desde {{ui:Arriba}}, {{ui:Frente}} o {{ui:Lateral}}, arrastrá o escribí el desplazamiento —en las unidades propias del plano aquí— y {{ui:Invertir}} para quedarte con el otro lado. Lo que el plano corta y aleja no se puede elegir. Volver a 2D quita el corte.

## Ver las propiedades de un objeto

Ojeclic un objeto en la vista 3D. Se pinta del color de selección y {{ui:Propiedades}} muestra lo que el archivo dice sobre él: su tipo, capa, color, tipo de línea y handle, y luego sus datos propios, como el inicio, fin y longitud de una línea, el centro y radio de un círculo, las esquinas de una cara 3D, o el bloque, punto de inserción, escala, rotación y valores de atributo de una referencia de bloque.

- Una referencia de bloque se elige como un todo, y también los bloques anidados dentro.
- Un clic a pocos píxeles de una línea elige la línea.
- Mantené {{key:Mod}} y ojeclic para elegir más objetos, o para quitar uno; {{ui:Propiedades}} entonces los cuenta por tipo.
- {{key:Esc}}, o un clic en un espacio vacío, quita la selección.
- Los objetos en capas que apagaste no se pueden elegir.

## Moverse alrededor

:::mouse
| Para | Hacé esto |
|---|---|
| Orbitar | Arrastrá con el botón del medio, o con el izquierdo |
| Desplazar | Arrastrá con el botón derecho, o mantené {{key:Shift}} y arrastrá |
| Acercar | Girá la rueda; acerca hacia lo que está bajo el puntero |
| Ver todo | {{ui:Extensión}} o {{key:F}} |
| Mirar desde un lado | Ojeclic una cara, borde o esquina del cubo de vista en la esquina inferior derecha |
:::

El cubo de vista se puede cambiar por un icono de ejes, u ocultar, en {{ui:Configuración}}. Ver [Configuración de BimCraft](topic:settings).

:::mac mouse
En un trackpad, deslizá con dos dedos para orbitar, mantené {{key:Shift}} y deslizá para desplazar, y pellizcá para acercar.
:::

:::touch
Arrastrá con un dedo para orbitar. Pellizcá con dos dedos para acercar, y muévelos juntos para desplazar.
:::

## Qué se dibuja en 3D

| En el plano | En 3D |
|---|---|
| Líneas, polilíneas 3D | A sus alturas reales |
| Polilíneas, círculos, arcos, elipses | En su propio plano, a su elevación, inclinados cuando el plano los inclina |
| Espesor en líneas, polilíneas, círculos y arcos | Muros de esa altura; los círculos quedan cerrados arriba y abajo |
| Caras 3D, mallas polyface, mallas de polígonos | Superficies sombreadas con sus bordes visibles |
| Bloques | Colocados, girados y escalados en 3D, también los bloques anidados |
| Sombreados | Sus contornos |
| Trazos 2D simples | Planos, donde fueron dibujados |

## Solo en la vista 2D

El texto, el texto multilínea y los atributos visibles de los bloques se dibujan en 3D, en su propio plano y a su propia altura, y un clic sobre ellos los elige. Las polilíneas anchas muestran su ancho como una banda plana. Los multilíderes, imágenes y patrones de sombreado se cuentan en **Solo en la vista 2D**: véanlos en la pestaña {{ui:Modelo}} o en las hojas.

## Todavía no dibujado

Los sólidos y superficies guardados como cuerpos ACIS (sólidos 3D, cuerpos, regiones y superficies) y las mallas de subdivisión aparecen en **Todavía no dibujado** con cuántos hay. Se omiten, no se adivinan.

## Errores comunes

- **Todo se ve plano.** El plano es 2D: sus líneas no tienen altura. Ojeclic {{ui:Frente}} para comprobarlo; un plano plano se ve como una línea.
- **Un modelo sólido no muestra nada.** Los sólidos hechos con un modelador de sólidos son cuerpos ACIS, listados en **Todavía no dibujado**. Exportá el modelo como IFC o como caras 3D desde el programa que lo hizo.
- **El plano es un pequeño grupo en el medio.** Algo lejano en el espacio modelo, como una copia vieja de una planta, hace grande la extensión. Acercá con la rueda donde quieras mirar.

## Siguiente

- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
