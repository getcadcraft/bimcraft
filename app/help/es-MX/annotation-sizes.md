---
title: Dibuje a tamaño real y anote según la escala
summary: El edificio siempre se dibuja a tamaño real. El texto, las cotas, las etiquetas, los nombres de espacios, las burbujas de rejilla y los símbolos se dimensionan en papel, en milímetros tal como se imprimen, y conservan ese tamaño cuando la escala de un dibujo cambia de 1:100 a 1:50.
keywords: escala de anotación, anotativo, tamaño de texto, altura de texto, altura en papel, tamaño del texto de cotas, tamaño de etiqueta, tamaño del nombre de espacio, burbuja de rejilla, tamaño de símbolo, escala del dibujo, 1:50, 1:100, estándar de la oficina, rotulación, dibujar a 1:1, tamaño real, texto de hoja
from: 94118788
---

## Qué hará

Defina una vez, para todo el edificio, la altura de las letras de sus dibujos en papel. Nunca escale el modelo ni cambie el tamaño del texto según la escala: BimCraft calcula el tamaño a partir de la altura en papel y la escala del dibujo.

## Cómo funciona

- El modelo está a tamaño real. Un muro de 10 m de largo mide 10 000 mm de largo en cualquier escala.
- Una anotación tiene una **altura en papel**: la altura de una letra mayúscula en la hoja impresa, en milímetros.
- A una escala de 1:100, un texto de 2.5 mm mide 250 mm de alto en el modelo; a 1:50, mide 125 mm. En papel mide 2.5 mm en ambos casos.
- Los símbolos de planta (eléctricos, sanitarios) se dibujan en milímetros de papel y siguen la misma regla.

## Pasos

1. Abra el explorador de proyectos. En {{ui:Hojas}}, haga clic en {{ui:Tamaños de anotación…}}.
2. Escriba una altura en milímetros para los tipos que quiera definir: {{ui:Notas y etiquetas}}, {{ui:Texto de cotas}}, {{ui:Etiquetas y nombres de nivel}}, {{ui:Nombres de espacios}}, {{ui:Letras de burbujas de rejilla}}, {{ui:Títulos de vistas en hojas}} y {{ui:Texto de cuadros}}. Un cuadro vacío conserva el tamaño propio de BimCraft, que se muestra en gris.
3. Haga clic en {{ui:Guardar}}. Es un solo paso que puede deshacer.

Desde entonces, cada hoja, el juego de planos, el PDF de planos y las elevaciones y secciones usan esos tamaños. La separación entre una línea de cota y su texto, el tamaño de una burbuja de rejilla y la altura de una fila de cuadro crecen con su texto.

## Una planta con escala propia

Asigne una escala a una planta en su rango de vista ({{ui:Escala}}; vea [Vistas y hojas](topic:views-and-sheets)). Entonces:

- en pantalla, los nombres de espacios, las etiquetas, el texto de cotas y las burbujas de rejilla se dibujan con su tamaño impreso frente al modelo, de modo que lo que ve es lo que mostrará la hoja;
- los símbolos de planta y sus etiquetas se dimensionan para esa escala. Si cambia la escala de 1:100 a 1:50, son la mitad de grandes en el modelo y del mismo tamaño en papel.

Una planta sin escala propia conserva su texto fijo en pantalla, y sus símbolos se dimensionan para 1:50 (1/4" = 1'-0" en pies y pulgadas), como antes.

## Los tamaños de su oficina

Con el complemento Default Policies activado, defina las alturas de la oficina en Configuración › Global › Default Policies › {{ui:Tamaños de anotación en papel}}. Un edificio nuevo los toma al hacer clic en Crear. En un edificio que ya empezó, el cuadro de diálogo tiene {{ui:Usar los tamaños de mi oficina}}. Vea [Default Policies](topic:default-policies).

## Los tamaños de un paquete de normativa

Un paquete de normativa puede dar las alturas de texto que exige su lugar (el complemento Building regulations, convenciones de dibujo). Marque el paquete en Configuración › Building regulations; luego, en el cuadro de diálogo, haga clic en {{ui:Usar los tamaños de un paquete de normativa}}: los cuadros se llenan, y usted los revisa y guarda. Un tamaño que un paquete da en puntos es un tamaño de fuente, y se convierte en una altura de mayúscula, así que compruébelo. Nada se define hasta que guarde.

## Lo que debe ver

- La misma altura de texto en milímetros en una hoja a 1:100 y en una hoja a 1:50, mientras que la planta misma es el doble de grande a 1:50.
- Los tamaños viajan con el edificio: se guardan en su archivo IFC.

## Bueno saber

- Los tamaños propios de BimCraft son los que sus hojas siempre han usado (unas capitales de 1.5 mm aproximadamente para el texto de cotas). No son un estándar de dibujo: defina los de su oficina.
- Una altura debe estar entre 0.5 y 50 mm.
- La rotulación del cajetín y las leyendas de notas clave no forman parte de esto: conservan sus propios tamaños.
