---
title: Dibujá a tamaño real, anotá por escala
summary: El edificio siempre se dibuja a tamaño real. Texto, cotas, etiquetas, nombres de ambientes, burbujas de cuadrícula y símbolos se dimensionan en papel, en milímetros como se imprimen, y conservan ese tamaño cuando la escala de un plano cambia de 1:100 a 1:50.
keywords: escala de anotación, anotativo, tamaño de texto, altura de texto, altura en papel, tamaño de texto de cota, tamaño de etiqueta, tamaño de nombre de ambiente, burbuja de cuadrícula, tamaño de símbolo, escala de plano, 1:50, 1:100, estándar de la oficina, rotulado, dibujar a 1:1, tamaño real, texto de hoja
from: 94118788
---

## Mba'e ejapóta

Fijá qué alto será el rotulado de tus planos en papel, una sola vez para todo el edificio. Nunca escalás el modelo y nunca cambiás el tamaño del texto según la escala: BimCraft calcula el tamaño a partir de la altura en papel y la escala del plano.

## Mba'éichapa oñemba'apo

- El modelo está a tamaño real. Una pared de 10 m de largo mide 10 000 mm en cualquier escala.
- Una anotación tiene una **altura en papel**: la altura de una letra mayúscula en la hoja impresa, en milímetros.
- A escala 1:100, un texto de 2,5 mm mide 250 mm de alto en el modelo; a 1:50, mide 125 mm. En papel mide 2,5 mm en los dos casos.
- Los símbolos de plano (eléctricos, sanitarios) se dibujan en milímetros de papel y siguen la misma regla.

## Pasos

1. Abrí el navegador de proyecto. En {{ui:Sheets}} hacé clic en {{ui:Annotation sizes…}}.
2. Escribí una altura en milímetros para los tipos que querés fijar: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} y {{ui:Schedule text}}. Un campo vacío mantiene el tamaño propio de BimCraft, que se muestra en gris.
3. Hacé clic en {{ui:Save}}. Es un solo paso que podés deshacer.

Desde entonces, cada hoja, el conjunto de planos, el PDF de planta y las elevaciones y cortes usan esos tamaños. La separación entre una línea de cota y su texto, el tamaño de una burbuja de cuadrícula y la altura de una fila de planilla crecen con su texto.

## Un plano con escala propia

Dale una escala al plano en su rango de vista ({{ui:Scale}}; ver [Vistas y hojas](topic:views-and-sheets)). Entonces:

- en pantalla, los nombres de ambientes, las etiquetas, el texto de cotas y las burbujas de cuadrícula se dibujan con su tamaño impreso frente al modelo, así que lo que ves es lo que mostrará la hoja;
- los símbolos del plano y sus etiquetas se dimensionan para esa escala. Si cambiás la escala de 1:100 a 1:50, son la mitad de grandes en el modelo y iguales en papel.

Un plano sin escala propia mantiene su texto fijo de pantalla, y sus símbolos se dimensionan para 1:50 (1/4" = 1'-0" en pies y pulgadas), como antes.

## Los tamaños de tu oficina

Con el complemento Default Policies activado, fijá las alturas de la oficina en Configuración › Global › Default Policies › {{ui:Annotation sizes on paper}}. Un edificio nuevo las toma cuando hacés clic en Create. En un edificio que ya empezaste, el diálogo tiene {{ui:Use my office's sizes}}. Ver [Default Policies](topic:default-policies).

## Los tamaños de un paquete de normativa

Un paquete de normativa puede dar las alturas de texto que pide su lugar (el complemento Building regulations, convenciones de dibujo). Marcá el paquete en Configuración › Building regulations, y después en el diálogo hacé clic en {{ui:Use a regulation pack's sizes}}: los campos se completan, y los revisás y guardás. Un tamaño que el paquete da en puntos es un tamaño de fuente, y se convierte en altura de mayúscula, así que revisalo. Nada queda fijado hasta que guardes.

## Lo que debés ver

- La misma altura de texto en milímetros en una hoja a 1:100 y en una hoja a 1:50, mientras el plano en sí es el doble de grande a 1:50.
- Los tamaños viajan con el edificio: se guardan en su archivo IFC.

## Bueno saber

- Los tamaños propios de BimCraft son los que sus hojas siempre usaron (unos 1,5 mm de mayúsculas para el texto de cotas). No son un estándar de dibujo: fijá los de tu oficina.
- Una altura debe estar entre 0,5 y 50 mm.
- El rotulado del cajetín y las leyendas de notas clave no entran en esto: mantienen sus propios tamaños.
