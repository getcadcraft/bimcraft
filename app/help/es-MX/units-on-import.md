---
title: Unidades al importar: un archivo indica sus unidades, o se le pregunta primero
summary: Cuando un archivo que trae indica sus unidades, BimCraft las usa y lo dice. Cuando no lo hace, BimCraft pregunta antes de colocar algo y recuerda su respuesta para ese archivo.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, muy grande, muy pequeño, 1000 veces, preguntar, recordado
from: f044e9bc
---

## Qué hará

Traiga un archivo y asegúrese de que entre con el tamaño correcto.

## Pasos

1. Abra o agregue el archivo como de costumbre: {{ui:Abierta}}, {{ui:Archivos}} de la Biblioteca, {{ui:Nubes de puntos}}, o Construir › Desde un dibujo.
2. Si el archivo indica sus unidades, no se pregunta nada. La línea de estado dice qué unidades indica el archivo.
3. Si no las indica, un cuadro de diálogo pregunta **Unidades de** el archivo. Elija cuánto vale una unidad en el archivo y haga clic en {{ui:Usar estas unidades}}. Nada se coloca antes de que responda.
4. {{ui:Cancelar}} (o {{key:Esc}}) no trae nada.

## Qué archivos indican sus unidades

- **IFC**: indica su unidad de longitud, y "Abierto" dice cuál. Un IFC que no indica ninguna se le pregunta antes de abrirse; su respuesta se escribe en el modelo, así que el archivo la indica una vez que guarda.
- **DWG y DXF**: las unidades de inserción del dibujo. A un dibujo que no las tiene se le pregunta (archivos de la Biblioteca, Construir › Desde un dibujo, terreno a partir de curvas de nivel).
- **Listas de puntos** para terreno: no indican unidades. Se le pregunta.
- **Nubes de puntos**: LAS y LAZ con sistema de coordenadas, E57, PTX y PLY indican las suyas. Sobre las demás se pregunta.
- **OBJ y STL**: nunca indican unidades. Se le pregunta.
- **glTF y GLB**: metros, por la regla propia del formato.
- **Imágenes**: no tienen tamaño propio. Una imagen se ajusta a la vista y usted fija su tamaño con Escalar por dos puntos. El tamaño que dé se recuerda para ese archivo: al colocarla de nuevo, entra con ese tamaño y la línea de estado lo dice.
- **El complemento Nubes de puntos**: pregunta cuando crea una nube cuyo archivo no indica unidad, y rotula los números de la nube en la unidad que lleva.

## Conviene saber

- La respuesta se recuerda para ese archivo (su nombre, tamaño y fecha) en esta computadora, en todas las aplicaciones de CadCraft. La próxima vez que entre el mismo archivo no se le pregunta, y la línea de estado indica que se usaron las unidades recordadas.
- Para que se le vuelva a preguntar: la paleta de comandos ({{key:Mod+K}}) › **Volver a preguntar las unidades de los archivos importados**.
- Una lista de unidades que una importación ya tiene (Unidades de la Biblioteca, Unidades de la barra de la nube, Unidades del dibujo en Desde un dibujo) igual cambia las unidades después. La lista de unidades de la herramienta de terreno ahora es solo con lo que empieza la pregunta.
