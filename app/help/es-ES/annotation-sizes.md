---
title: Dibujar a tamaño real, anotar por escala
summary: El edificio siempre se dibuja a tamaño real. El texto, las cotas, las etiquetas, los nombres de espacios, las burbujas de ejes y los símbolos se dimensionan sobre papel, en milímetros tal como se imprimen, y conservan ese tamaño cuando la escala de un plano cambia de 1:100 a 1:50.
keywords: escala de anotación, anotativo, tamaño de texto, altura de texto, altura en papel, tamaño del texto de cotas, tamaño de etiqueta, tamaño del nombre de espacio, burbuja de eje, tamaño de símbolo, escala de dibujo, 1:50, 1:100, estándar de oficina, rotulación, dibujar a 1:1, tamaño real, texto de hoja
from: 94118788
---

## Qué hará

Defina una vez, para el edificio, la altura de las letras de sus planos sobre papel. Nunca hace falta escalar el modelo ni cambiar el tamaño del texto para cada escala: BimCraft calcula el tamaño a partir de la altura en papel y de la escala del plano.

## Cómo funciona

- El modelo está a tamaño real. Un muro de 10 m mide 10 000 mm de largo en cualquier escala.
- Una anotación tiene una **altura en papel**: la altura de una letra mayúscula en la hoja impresa, en milímetros.
- A escala 1:100, un texto de 2.5 mm mide 250 mm de alto en el modelo; a 1:50, 125 mm. En papel mide 2.5 mm en ambos casos.
- Los símbolos de planta (electricidad, fontanería) se dibujan en milímetros de papel y siguen la misma regla.

## Pasos

1. Abra el explorador de proyecto. Bajo {{ui:Hojas}}, haga clic en {{ui:Tamaños de anotación…}}.
2. Escriba una altura en milímetros para los tipos que quiera definir: {{ui:Notas y rótulos}}, {{ui:Texto de cotas}}, {{ui:Etiquetas y nombres de nivel}}, {{ui:Nombres de espacios}}, {{ui:Letras de burbujas de ejes}}, {{ui:Títulos de vistas en hojas}} y {{ui:Texto de tablas}}. Un cuadro vacío mantiene el tamaño propio de BimCraft, que aparece en gris.
3. Haga clic en {{ui:Guardar}}. Es un solo paso que puede deshacer.

Desde entonces, cada hoja, el conjunto de planos, el PDF de planta y los alzados y secciones usan esos tamaños. La separación entre una línea de cota y su texto, el tamaño de una burbuja de eje y la altura de una fila de tabla crecen con su texto.

## Un plano con escala propia

Dé al plano una escala en su rango de vista ({{ui:Escala}}; véase [Vistas y hojas](topic:views-and-sheets)). Entonces:

- en pantalla, los nombres de espacios, las etiquetas, el texto de cotas y las burbujas de ejes se dibujan con su tamaño impreso frente al modelo, de modo que lo que ve es lo que mostrará la hoja;
- los símbolos de planta y sus etiquetas se dimensionan para esa escala. Si cambia la escala de 1:100 a 1:50, son la mitad de grandes en el modelo y del mismo tamaño en papel.

Un plano sin escala propia conserva su texto de pantalla fijo, y sus símbolos se dimensionan para 1:50 (1/4" = 1'-0" en pies y pulgadas), como antes.

## Los tamaños de su oficina

Con el complemento Default Policies activado, defina las alturas de la oficina en Configuración › Global › Default Policies › {{ui:Tamaños de anotación en papel}}. Un edificio nuevo las toma al hacer clic en Crear. En un edificio ya iniciado, el cuadro de diálogo tiene {{ui:Usar los tamaños de mi oficina}}. Véase [Default Policies](topic:default-policies).

## Los tamaños de una normativa

Un paquete normativo puede indicar las alturas de texto que exige su lugar (el complemento Building regulations, convenciones de dibujo). Marque el paquete en Configuración › Building regulations; después, en el cuadro de diálogo, haga clic en {{ui:Usar los tamaños de un paquete normativo}}: los cuadros se rellenan, y usted los comprueba y guarda. Un tamaño que un paquete indica en puntos es un tamaño de fuente, y se convierte en altura de mayúscula, así que compruébelo. No se fija nada hasta que guarde.

## Lo que debe ver

- La misma altura de texto en milímetros en una hoja a 1:100 y en una hoja a 1:50, mientras el plano en sí es el doble de grande a 1:50.
- Los tamaños viajan con el edificio: se guardan en su archivo IFC.

## Conviene saber

- Los tamaños propios de BimCraft son los que sus hojas han usado siempre (unos 1.5 mm de mayúscula para el texto de cotas). No son una norma de delineación: defina los de su oficina.
- Una altura debe estar entre 0.5 y 50 mm.
- La rotulación del cajetín y las leyendas de notas clave no forman parte de esto: conservan sus propios tamaños.
