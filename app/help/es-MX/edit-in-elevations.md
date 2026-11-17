---
title: Editar en alzados y secciones, tamaños de hoja, cuadros de rótulo y renombrar
summary: Mueva muros, puertas, ventanas y niveles, y dibuje muros, aberturas, niveles, cotas y notas directamente en un alzado o una sección; conserve sus propios tamaños de hoja y cuadros de rótulo como datos, y renombre familias, tamaños y elementos desde el navegador del proyecto.
keywords: nuevo nivel en alzado, cota en alzado, editar en alzado, editar en sección, vista de alzado, vista de sección, mover muro en alzado, antepecho de ventana, altura de nivel, arrastrar nivel, dibujar muro en sección, notas en alzado, anotación, tamaño de hoja, tamaño de hoja personalizado, tamaño de papel, cuadro de rótulo, plantilla de cuadro de rótulo, formato de hoja, marco, campos, cliente, dibujado por, revisión, renombrar familia, renombrar tipo, renombrar elemento, navegador del proyecto
from: 8726cf83
---

## Qué hará

Cambie el edificio donde lo ve desde un lado, configure las hojas que usa su oficina, y dé a las familias, tamaños y elementos los nombres que quiere.

## Editar en un alzado o una sección

1. Active {{ui:Draw}}. En el {{ui:Project browser}}, abra {{ui:Elevations}} o {{ui:Sections}}.
2. Haga clic en el botón de lápiz {{ui:Edit in this view}} en una fila. La vista se abre como la dibujan las hojas, con lo que puede cambiar encima.
3. Con {{ui:Select and move}}:
   - arrastre un muro que mira hacia la vista, a lo largo de él;
   - arrastre una puerta o ventana a lo largo de su muro, y una ventana hacia arriba o hacia abajo para cambiar su antepecho;
   - arrastre la línea de un nivel hacia arriba o hacia abajo para cambiar su altura;
   - arrastre una nota.
4. {{ui:Door}} y {{ui:Window}}: haga clic en un muro donde va (una ventana, a la altura en la que haga clic).
5. {{ui:Wall}} (en secciones): haga clic donde empieza y donde termina, sobre el plano de la sección; se dibuja en el nivel bajo su primer clic, hasta el siguiente nivel.
6. {{ui:Note}}: haga clic y escriba. Las notas se guardan en el archivo y se dibujan en cada hoja que muestra la vista.
7. {{ui:Level}}: haga clic a la altura donde va un nuevo nivel. Tiene la altura del espacio hasta el nivel superior (3000 mm en la parte superior); arrastre su línea para cambiarla. Un segundo nivel a menos de 50 mm de otro se rechaza.
8. {{ui:Dimension}}: haga clic donde empieza y donde termina. Los clics se ajustan a los bordes de muros, puertas, ventanas y niveles, y la cota es horizontal o vertical, según la dirección en que mueva. Se guarda en el archivo y se dibuja, con su longitud, en cada hoja que muestra la vista. Haga clic en ella con {{ui:Select and move}} para elegirla.
9. {{ui:Delete}} o la tecla Delete elimina el muro, puerta, ventana, cota o nota elegidos. Ctrl+Z deshace el último cambio mientras el panel está abierto. Esc vuelve a {{ui:Select and move}}.

Cada cambio es el mismo cambio que hace la planta, un solo paso de deshacer: la planta, la vista 3D y las hojas lo siguen.

## Tamaños de hoja y cuadros de rótulo

1. Abra una hoja ({{ui:New sheet}}, o una de las suyas en {{ui:Sheets}}). Junto a {{ui:Paper}} están {{ui:Title block}} y {{ui:Formats…}}.
2. {{ui:Paper}} enumera cada tamaño estándar (Letter a Arch E, A4 a A0) y los suyos.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} con los campos habituales, o los suyos. Los campos del que elija se muestran bajo el nombre de la hoja: escriba el cliente, quién la dibujó y la revisión.
4. {{ui:Formats…}} crea los suyos: un tamaño de hoja (nombre, ancho, alto, borde) y un cuadro de rótulo (dónde va, su ancho, sus campos uno por línea; termine un campo con * para que sea grande).
5. {{ui:Export}} los guarda como archivo de biblioteca, e {{ui:Import…}} agrega uno a otro modelo. Se conservan en el modelo, así que una plantilla los lleva consigo.

## Renombrar familias, tamaños y elementos

1. En el {{ui:Project browser}}, abra {{ui:Families}}.
2. El lápiz junto a una familia la renombra; el tipo de cada tamaño toma el nuevo nombre.
3. Abra los tamaños de una familia para renombrar un tamaño, o un elemento colocado a partir de él (se enumeran hasta 40 por tamaño).

Cada cambio de nombre es un paso de deshacer.
