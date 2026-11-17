---
title: Edificios vecinos y la parcela desde CivilCraft
summary: Tome los edificios y la parcela que Dirección a terreno de CivilCraft encontró alrededor de una dirección como sugerencias, y añada los que marque.
keywords: terreno, dirección, parcela, vecinos, contexto, civilcraft, ccsite, edificios, contorno del terreno, sugerir
from: 3be9407b
---

## Qué hace

En CivilCraft, Superficie › Más › Dirección a terreno encuentra los edificios, la parcela, la zonificación, la zona inundable y el suelo alrededor de una dirección, a partir de datos abiertos. Su botón "Enviar a BimCraft como sugerencias" (o "Guardar el terreno como archivo", y luego abrir aquí el `.ccsite.json`) los trae a BimCraft. No se añade nada hasta que usted lo indique.

## Cómo usarlo

1. Inicie o abra un modelo. El punto de la dirección se sitúa en el origen de la planta en la que está.
2. Un cuadro enumera cada edificio vecino y la parcela con una casilla. Desmarque lo que no quiera.
3. Los edificios cuya altura no indicó la fuente usan la altura escrita en la parte superior del cuadro. Un edificio que solo dio su número de plantas cuenta 3 m por planta, y el cuadro lo indica.
4. Pulse "Añadir los marcados". Los edificios se convierten en muros alrededor de sus huellas, tan altos como se indicó, en un solo paso de Deshacer. La parcela se convierte en el contorno del terreno, como segundo paso de Deshacer.

La zonificación, la zona inundable y el suelo se listan solo a título informativo; no se dibujan.

## Qué debe saber

- Los contornos son tan buenos como los datos abiertos: OpenStreetMap y las capas catastrales de cada municipio difieren mucho de un lugar a otro. Compruebe lo que importa frente a un levantamiento.
- Las posiciones son metros al este y al norte del punto de la dirección, en una aproximación plana, precisas a unos metros en unos pocos kilómetros.
- Los datos llevan las licencias de sus fuentes (OpenStreetMap es ODbL); el cuadro muestra la línea de crédito.
