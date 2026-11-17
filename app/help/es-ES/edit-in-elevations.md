---
title: Editar en alzados y secciones, tamaños de hoja, cajetines y renombrar
summary: Mueva muros, puertas, ventanas y niveles, y dibuje muros, huecos, niveles, cotas y notas directamente en un alzado o una sección; guarde sus propios tamaños de hoja y cajetines como datos, y renombre familias, tamaños y elementos desde el navegador del proyecto.
keywords: nuevo nivel en alzado, cota en alzado, editar en alzado, editar en sección, vista de alzado, vista de sección, mover muro en alzado, antepecho de ventana, altura de nivel, arrastrar nivel, dibujar muro en sección, notas en alzado, anotación, tamaño de hoja, tamaño de hoja personalizado, tamaño de papel, cajetín, plantilla de cajetín, formato de hoja, borde, campos, cliente, dibujado por, revisión, renombrar familia, renombrar tipo, renombrar elemento, navegador del proyecto
from: 8726cf83
---

## Qué hará

Cambie el edificio cuando lo ve desde un lateral, prepare las hojas que usa su oficina y dé a familias, tamaños y elementos los nombres que quiera.

## Editar en un alzado o una sección

1. Active {{ui:Dibujo}}. En el {{ui:Navegador del proyecto}}, abra {{ui:Alzados}} o {{ui:Secciones}}.
2. Haga clic en el botón del lápiz {{ui:Editar en esta vista}} de una fila. La vista se abre como la dibujan las hojas, con lo que puede cambiar encima.
3. Con {{ui:Seleccionar y mover}}:
   - arrastre un muro que mira a la vista a lo largo de sí mismo;
   - arrastre una puerta o una ventana a lo largo de su muro, y una ventana hacia arriba o hacia abajo para cambiar su antepecho;
   - arrastre la línea de un nivel hacia arriba o hacia abajo para cambiar su altura;
   - arrastre una nota.
4. {{ui:Puerta}} y {{ui:Ventana}}: haga clic en un muro donde va (una ventana a la altura en que hace clic).
5. {{ui:Muro}} (en secciones): haga clic donde empieza y donde termina en el plano de la sección; se dibuja en el nivel bajo su primer clic, hasta el siguiente nivel.
6. {{ui:Nota}}: haga clic y escriba. Las notas se guardan en el archivo y se dibujan en cada hoja que muestra la vista.
7. {{ui:Nivel}}: haga clic a la altura donde va un nuevo nivel. Tiene la altura del hueco hasta el nivel superior (3000 mm en lo más alto); arrastre su línea para cambiarla. Un segundo nivel a menos de 50 mm de otro se rechaza.
8. {{ui:Cota}}: haga clic donde empieza y donde termina. Los clics capturan los bordes de muros, puertas, ventanas y niveles, y la cota es horizontal o vertical, según el sentido en que mueva. Se guarda en el archivo y se dibuja, con su longitud, en cada hoja que muestra la vista. Haga clic en ella con {{ui:Seleccionar y mover}} para elegirla.
9. {{ui:Eliminar}} o la tecla Supr quita el muro, puerta, ventana, cota o nota elegidos. Ctrl+Z deshace el último cambio mientras el panel está abierto. Esc vuelve a {{ui:Seleccionar y mover}}.

Cada cambio es el mismo que hace la planta, y cuenta como un solo paso de deshacer: la planta, la vista 3D y las hojas lo siguen.

## Tamaños de hoja y cajetines

1. Abra una hoja ({{ui:Hoja nueva}}, o una de las suyas bajo {{ui:Hojas}}). Junto a {{ui:Papel}} están {{ui:Cajetín}} y {{ui:Formatos…}}.
2. {{ui:Papel}} enumera todos los tamaños estándar (de Letter a Arch E, de A4 a A0) y los suyos.
3. {{ui:Cajetín}}: {{ui:Franja (inferior)}}, {{ui:Columna (derecha)}} con los campos habituales, o los suyos. Los campos del que elija aparecen bajo el nombre de la hoja: escriba el cliente, quién lo dibujó y la revisión.
4. {{ui:Formatos…}} crea los suyos: un tamaño de hoja (nombre, ancho, alto, borde) y un cajetín (dónde va, su ancho y sus campos, uno por línea; termine un campo con * para hacerlo grande).
5. {{ui:Exportar}} los guarda como archivo de biblioteca, e {{ui:Importar…}} añade uno a otro modelo. Se guardan en el modelo, así que una plantilla los lleva consigo.

## Renombrar familias, tamaños y elementos

1. En el {{ui:Navegador del proyecto}}, abra {{ui:Familias}}.
2. El lápiz junto a una familia la renombra; el tipo de cada tamaño toma el nombre nuevo.
3. Abra los tamaños de una familia para renombrar un tamaño, o un elemento colocado a partir de ella (se enumeran hasta 40 por tamaño).

Cada cambio de nombre es un solo paso de deshacer.
