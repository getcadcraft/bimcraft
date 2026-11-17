---
title: Edificios vecinos y la parcela desde CivilCraft
summary: Tomá los edificios y la parcela que Dirección a sitio de CivilCraft encontró alrededor de una dirección como sugerencias, y agregá los que tildes.
keywords: sitio, dirección, parcela, vecinos, contexto, civilcraft, ccsite, edificios, contorno del sitio, sugerir
from: 3be9407b
---

## Qué hace

En CivilCraft, Superficie › Más › Address to site encuentra los edificios, la parcela, la zonificación, la zona inundable y el suelo alrededor de una dirección, a partir de datos abiertos. Su botón "Send to BimCraft as suggestions" (o "Save the site as a file", y después abrir el `.ccsite.json` acá) los trae a BimCraft. No se agrega nada hasta que lo indiques.

## Cómo usarlo

1. Iniciá o abrí un modelo. El punto de la dirección queda en el origen del nivel en el que estás.
2. Una casilla lista cada edificio vecino y la parcela con una casilla de verificación. Destildá lo que no quieras.
3. Los edificios cuya altura no dio la fuente usan la altura escrita arriba de la casilla. Un edificio que dio solo su cantidad de niveles cuenta 3 m por nivel, y la casilla lo indica.
4. Presioná "Add the ticked ones". Los edificios se vuelven muros alrededor de su huella, tan altos como se listó, en un solo paso de deshacer. La parcela se vuelve el contorno del sitio, como un segundo paso de deshacer.

La zonificación, la zona inundable y el suelo se listan solo a título informativo; no se dibujan.

## Qué tener en cuenta

- Los contornos son tan buenos como los datos abiertos: OpenStreetMap y las capas de parcelas municipales difieren mucho de un lugar a otro. Verificá lo que importa contra un relevamiento.
- Las posiciones son metros al este y al norte del punto de la dirección, sobre una aproximación plana, precisas a unos pocos metros dentro de unos pocos kilómetros.
- Los datos llevan las licencias de sus fuentes (OpenStreetMap es ODbL); la casilla muestra la línea de crédito.
