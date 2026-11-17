---
title: Unidades al importar: un archivo indica sus unidades, o se le pregunta antes
summary: Cuando un archivo que trae indica sus unidades, BimCraft las usa y lo dice. Cuando no lo hace, BimCraft pregunta antes de colocar nada y recuerda su respuesta para ese archivo.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, demasiado grande, demasiado pequeño, 1000 veces, preguntar, recordado
from: f044e9bc
---

## Qué hará

Traiga un archivo y asegúrese de que entra con el tamaño correcto.

## Pasos

1. Abra o añada el archivo como de costumbre: {{ui:Open}}, {{ui:Files}} de la Biblioteca, {{ui:Point clouds}}, o Construir › Desde un dibujo.
2. Si el archivo indica sus unidades, no se pregunta nada. La línea de estado dice qué unidades indica el archivo.
3. Si no lo hace, un cuadro de diálogo le pregunta por las **Unidades de** el archivo. Elija qué es una unidad en el archivo y haga clic en {{ui:Use these units}}. No se coloca nada hasta que responda.
4. {{ui:Cancel}} (o {{key:Esc}}) no trae nada.

## Qué archivos indican sus unidades

- **IFC**: indica su unidad de longitud, y "Abierto" dice cuál. Un IFC que no indica ninguna se le pregunta antes de abrirse; su respuesta se escribe en el modelo, así que el archivo la indica una vez que lo guarde.
- **DWG y DXF**: las unidades de inserción del dibujo. Un dibujo que no las tiene se le pregunta (archivos de la Biblioteca, Construir › Desde un dibujo, terreno a partir de curvas de nivel).
- **Listas de puntos** para terreno: no indican unidades. Se le pregunta.
- **Nubes de puntos**: LAS y LAZ con un sistema de coordenadas, E57, PTX y PLY indican las suyas. A las demás se les pregunta.
- **OBJ y STL**: nunca indican unidades. Se le pregunta.
- **glTF y GLB**: metros, según la regla propia del formato.
- **Imágenes**: no tienen tamaño propio. Una imagen se ajusta a la vista, y usted define su tamaño con Escalar por dos puntos. El tamaño que indique se recuerda para ese archivo: al colocarlo de nuevo, entra con ese tamaño y la línea de estado lo dice.
- **El complemento Nubes de puntos**: pregunta cuando crea una nube cuyo archivo no indica unidad, y rotula los números de la nube en la unidad que lleva.

## Conviene saber

- La respuesta se recuerda para ese archivo (su nombre, tamaño y fecha) en este equipo, en todas las aplicaciones de CadCraft. La próxima vez que entre el mismo archivo no se le pregunta, y la línea de estado indica que se usaron las unidades recordadas.
- Para que se le pregunte de nuevo: la paleta de comandos ({{key:Mod+K}}) › **Preguntar de nuevo las unidades de los archivos importados**.
- Una lista de unidades que una importación ya tiene (Unidades de la Biblioteca, Unidades de la barra de la nube, Unidades del dibujo en Desde un dibujo) sigue cambiando las unidades después. La lista Unidades de la herramienta de terreno es ahora solo lo que inicia la pregunta.
