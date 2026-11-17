---
title: Edificios vecinos y el predio desde CivilCraft
summary: Tome los edificios y el predio que encontró Dirección a sitio de CivilCraft alrededor de una dirección como sugerencias, y agregue los que marque.
keywords: sitio, dirección, predio, vecinos, contexto, civilcraft, ccsite, edificios, contorno del sitio, sugerir
from: 3be9407b
---

## Qué hace

En CivilCraft, Superficie › Más › Dirección a sitio encuentra, a partir de datos abiertos, los edificios, el predio, la zonificación, la zona de inundación y el suelo alrededor de una dirección. Su botón «Enviar a BimCraft como sugerencias» (o «Guardar el sitio como archivo» y abrir el `.ccsite.json` aquí) los trae a BimCraft. No se agrega nada hasta que usted lo indique.

## Cómo usarlo

1. Inicie o abra un modelo. El punto de la dirección queda en el origen del nivel en que está.
2. Un cuadro enumera cada edificio vecino y el predio con una casilla. Desmarque lo que no quiera.
3. Los edificios cuya altura no dio la fuente usan la altura escrita en la parte superior del cuadro. Un edificio que solo dio su número de niveles cuenta 3 m por nivel, y el cuadro lo indica.
4. Pulse «Agregar los marcados». Los edificios se convierten en muros alrededor de sus huellas, tan altos como se indicó, en un solo paso de deshacer. El predio se convierte en el contorno del terreno, en un segundo paso de deshacer.

La zonificación, la zona de inundación y el suelo se listan solo como información; no se dibujan.

## Qué debe saber

- Los contornos son tan buenos como los datos abiertos: OpenStreetMap y las capas catastrales de predios difieren mucho de un lugar a otro. Verifique lo que importa con un levantamiento.
- Las posiciones son metros al este y al norte del punto de la dirección, con una aproximación plana, precisas a unos metros dentro de unos cuantos kilómetros.
- Los datos llevan las licencias de sus fuentes (OpenStreetMap es ODbL); el cuadro muestra la línea de crédito.
