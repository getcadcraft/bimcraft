---
title: Unidades al importar: el archivo indica sus unidades, o se te consulta antes
summary: Cuando un archivo que traés indica sus unidades, BimCraft las usa y lo informa. Cuando no lo hace, BimCraft consulta antes de colocar nada y recuerda tu respuesta para ese archivo.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, muy grande, muy pequeño, 1000 veces, consultar, recordado
from: f044e9bc
---

## Lo que vas a hacer

Traer un archivo y asegurarte de que entre con el tamaño correcto.

## Pasos

1. Abrí o agregá el archivo como de costumbre: {{ui:Open}}, {{ui:Files}} de la Biblioteca, {{ui:Point clouds}}, o Armar › Desde un plano.
2. Si el archivo indica sus unidades, no se pregunta nada. La línea de estado dice qué unidades indica el archivo.
3. Si no las indica, un diálogo pregunta **Unidades de** el archivo. Elegí qué es una unidad en el archivo y hacé clic en {{ui:Use these units}}. No se coloca nada antes de que respondas.
4. {{ui:Cancel}} (o {{key:Esc}}) no trae nada.

## Qué archivos indican sus unidades

- **IFC**: indica su unidad de longitud, y "Abierto" dice cuál. Un IFC que no indica ninguna se consulta antes de abrirse; tu respuesta queda escrita en el modelo, así que el archivo la indica una vez que guardás.
- **DWG y DXF**: las unidades de inserción del plano. Un plano que no las tiene se consulta (archivos de la Biblioteca, Armar › Desde un plano, terreno a partir de curvas de nivel).
- **Listas de puntos** para terreno: no indican unidades. Se consulta.
- **Nubes de puntos**: LAS y LAZ con sistema de coordenadas, E57, PTX y PLY indican las suyas. Las demás se consultan.
- **OBJ y STL**: nunca indican unidades. Se consulta.
- **glTF y GLB**: metros, según la regla propia del formato.
- **Imágenes**: no tienen tamaño propio. Una imagen se ajusta a la vista y vos definís su tamaño con Escala por dos puntos. El tamaño que das queda recordado para ese archivo: al colocarlo otra vez, entra con ese tamaño y la línea de estado lo dice.
- **Complemento Nube de puntos**: consulta cuando armás una nube cuyo archivo no indica unidad, y rotula los números de la nube con la unidad que lleva.

## Buenas de saber

- La respuesta queda recordada para ese archivo (su nombre, tamaño y fecha) en esta computadora, en todas las apps de CadCraft. La próxima vez que entra el mismo archivo no se pregunta, y la línea de estado dice que se usaron las unidades recordadas.
- Para que se pregunte de nuevo: paleta de comandos ({{key:Mod+K}}) › **Preguntar otra vez las unidades de archivos importados**.
- Una lista de unidades que la importación ya tenga (Unidades de la Biblioteca, Unidades de la barra de la nube, Unidades del plano en Desde un plano) igual cambia las unidades después. La lista Unidades de la herramienta de terreno ahora es solo el punto con el que empieza la consulta.
