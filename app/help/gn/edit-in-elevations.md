---
title: Editar en elevaciones y cortes, tamaños de hoja, cajetines y renombrar
summary: Mové muros, puertas, ventanas y niveles, y dibujá muros, aberturas, niveles, cotas y notas directamente en una elevación o un corte; conservá tus propios tamaños de hoja y cajetines como datos, y renombrá familias, tamaños y elementos desde el explorador de proyecto.
keywords: nuevo nivel en elevación, cota en elevación, editar en elevación, editar en corte, vista de elevación, vista de corte, mover muro en elevación, antepecho de ventana, altura de nivel, arrastrar nivel, dibujar muro en corte, notas en elevación, anotación, tamaño de hoja, tamaño de hoja personalizado, tamaño de papel, cajetín, plantilla de cajetín, formato de hoja, borde, campos, cliente, dibujado por, revisión, renombrar familia, renombrar tipo, renombrar elemento, explorador de proyecto
from: 8726cf83
---

## Lo que hará

Cambiá el edificio donde lo ves desde un costado, armá las hojas que usa tu oficina, y dale a familias, tamaños y elementos los nombres que querés.

## Editar en una elevación o un corte

1. Activá {{ui:Dibujar}}. En el {{ui:Explorador de proyecto}}, abrí {{ui:Elevaciones}} o {{ui:Cortes}}.
2. Ojeclic el botón de lápiz {{ui:Editar en esta vista}} en una fila. La vista se abre como la dibujan las hojas, con lo que podés cambiar encima.
3. Con {{ui:Seleccionar y mover}}:
   - arrastrá un muro que mira hacia la vista a lo largo de sí mismo;
   - arrastrá una puerta o ventana a lo largo de su muro, y una ventana hacia arriba o abajo para cambiar su antepecho;
   - arrastrá la línea de un nivel hacia arriba o abajo para cambiar su altura;
   - arrastrá una nota.
4. {{ui:Puerta}} y {{ui:Ventana}}: ojeclic en un muro donde va (una ventana a la altura que ojeclic).
5. {{ui:Muro}} (en cortes): ojeclic dónde comienza y dónde termina sobre el plano del corte; se dibuja en el nivel bajo tu primer clic, hasta el siguiente nivel.
6. {{ui:Nota}}: ojeclic y escribí. Las notas se guardan en el archivo y se dibujan en cada hoja que muestra la vista.
7. {{ui:Nivel}}: ojeclic a la altura donde va un nivel nuevo. Tiene la altura de la distancia al nivel de arriba (3000 mm en el tope); arrastrá su línea para cambiarla. Un segundo nivel a menos de 50 mm de otro se rechaza.
8. {{ui:Cota}}: ojeclic dónde comienza y dónde termina. Los clics se ajustan a los bordes de muros, puertas, ventanas y niveles, y la cota es horizontal o vertical según hacia dónde muevas. Se guarda en el archivo y se dibuja, con su longitud, en cada hoja que muestra la vista. Ojeclic con {{ui:Seleccionar y mover}} para elegirla.
9. {{ui:Eliminar}} o la tecla Suprimir quita el muro, puerta, ventana, cota o nota elegido. Ctrl+Z deshace el último cambio mientras el panel está abierto. Esc vuelve a {{ui:Seleccionar y mover}}.

Cada cambio es el mismo cambio que hace la planta, un paso de deshacer: la planta, la vista 3D y las hojas lo siguen.

## Tamaños de hoja y cajetines

1. Abrí una hoja ({{ui:Hoja nueva}}, o una de las tuyas en {{ui:Hojas}}). Junto a {{ui:Papel}} están {{ui:Cajetín}} y {{ui:Formatos…}}.
2. {{ui:Papel}} lista cada tamaño estándar (de Letter a Arch E, de A4 a A0) y los tuyos.
3. {{ui:Cajetín}}: {{ui:Franja (abajo)}}, {{ui:Columna (derecha)}} con los campos habituales, o el tuyo. Los campos del que elijas se muestran debajo del nombre de la hoja: escribí el cliente, quién lo dibujó, la revisión.
4. {{ui:Formatos…}} crea los tuyos: un tamaño de hoja (nombre, ancho, alto, borde) y un cajetín (dónde va, su ancho, sus campos uno por línea; terminá un campo con * para que sea grande).
5. {{ui:Exportar}} los guarda como archivo de biblioteca, e {{ui:Importar…}} agrega uno a otro modelo. Se conservan en el modelo, así que una plantilla los lleva consigo.

## Renombrar familias, tamaños y elementos

1. En el {{ui:Explorador de proyecto}}, abrí {{ui:Familias}}.
2. El lápiz al lado de una familia la renombra; el tipo de cada tamaño toma el nombre nuevo.
3. Abrí los tamaños de una familia para renombrar un tamaño, o un elemento colocado desde ella (se listan hasta 40 por tamaño).

Cada renombrado es un paso de deshacer.
