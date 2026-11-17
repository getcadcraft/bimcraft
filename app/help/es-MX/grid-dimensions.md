---
title: Acotar una retícula
summary: Muestre la separación entre ejes vecinos de la retícula y el tamaño total de la retícula en la planta de cada nivel, guardado en el IFC y siguiendo a la retícula cuando cambian los ejes.
keywords: retícula, cotas de retícula, cota, separación, crujías, tamaño total, círculos, retícula de columnas, planta, hoja
from: aaea5d08
---

## Qué hará

Coloque la separación entre ejes de la retícula y el tamaño total de la retícula en las plantas, más allá de los círculos, para que las hojas hechas a partir de ellas lleven las cotas. Antes necesita una retícula: consulte [Retículas y columnas](topic:grids-and-columns).

## Pasos

1. Muestre la planta de un nivel y haga clic en {{ui:Retícula}} para activar la herramienta. Aparece la fila de opciones de la retícula.
2. Marque {{ui:Dimensiones}}. Se dibujan en la planta la separación entre ejes numerados vecinos y entre ejes con letra vecinos, y el tamaño total en cada dirección.
3. Elija otro nivel: las mismas cotas aparecen en su planta.
4. Mueva un eje, cambie el nombre de uno o agregue uno. Las cotas siguen a la retícula.
5. Desmarque {{ui:Dimensiones}} para quitarlas de nuevo.

## Notas

- Cada cambio es un solo paso de deshacer: {{key:Mod+Z}} lo revierte.
- El ajuste se guarda en el IFC junto con la retícula, y las plantas colocadas en hojas llevan las cotas.
- Si el modelo no tiene una retícula que pueda cambiar (una retícula que llegó en un archivo de otro programa no se puede cambiar aquí), la línea de estado dice "No hay ninguna retícula para cambiar."
