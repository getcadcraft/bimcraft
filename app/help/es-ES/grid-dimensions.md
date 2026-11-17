---
title: Acotar una retícula
summary: Muestre la separación entre ejes contiguos y el tamaño total de la retícula en la planta de cada nivel, guardados en el IFC y siguiendo la retícula cuando cambian los ejes.
keywords: retícula, cotas de retícula, cota, separación, crujías, tamaño total, círculos, retícula de pilares, planta, hoja
from: aaea5d08
---

## Qué va a hacer

Coloque la separación entre ejes y el tamaño total de la retícula en las plantas, más allá de los círculos, para que las hojas creadas a partir de ellas incluyan las cotas. Antes necesita una retícula: consulte [Retículas y pilares](topic:grids-and-columns).

## Pasos

1. Muestre la planta de un nivel y haga clic en {{ui:Retícula}} para activar la herramienta de retícula. Aparece la fila de opciones de la retícula.
2. Marque {{ui:Dimensiones}}. Se dibujan en la planta la separación entre ejes numerados contiguos y entre ejes con letras contiguos, así como el tamaño total en cada dirección.
3. Seleccione otro nivel: las mismas cotas aparecen en su planta.
4. Mueva un eje, cambie su nombre o añada uno. Las cotas siguen a la retícula.
5. Desmarque {{ui:Dimensiones}} para quitarlas de nuevo.

## Notas

- Cada cambio es un solo paso de deshacer: {{key:Mod+Z}} lo revierte.
- El ajuste se guarda en el IFC junto con la retícula, y las plantas colocadas en hojas incluyen las cotas.
- Si el modelo no tiene una retícula que pueda modificar (una retícula que llegó en un archivo de otro programa no se puede cambiar aquí), la línea de estado dice «No hay ninguna retícula que cambiar.»
