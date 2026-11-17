---
title: Enviar caño a un programa de esfuerzos o isométricos, y leerlo de vuelta (PCF)
summary: Escribí los tramos de caño del modelo como archivo de componentes de cañería PCF, o leé un archivo PCF de un programa de esfuerzos en tuberías o de isométricos y dibujá su caño como tramos.
keywords: pcf, archivo de componentes de cañería, esfuerzos en caños, isométrico, isométricos, exportar, importar, cañería, planta, caño de acero, mover un trabajo, otro software
from: 24f91355
---

## Mba'e pe ojapóta

PCF es el archivo de texto plano que leen y escriben los programas de esfuerzos en caños y de isométricos. Lista los componentes de cada línea con sus puntos finales y sus diámetros interiores.

## Exportar

1. Elegí la herramienta Caño. La fila de opciones muestra **Export PCF**.
2. Hacé clic en ella. Se escribe cada tramo de caño del modelo: caño recto, codos (un giro de 90 grados; si no, una curva), tes con su punto de derivación, reducciones y válvulas.
3. El archivo usa milímetros. Los diámetros interiores son diámetros nominales en milímetros. El punto central de un codo es su esquina, donde se unen sus dos tramos.

PCF se escribe para caño de acero a tope soldado. Un tramo de otro material también se escribe, con claves de componente de acero, y se anota en el panel Problemas.

## Importar

1. Elegí la herramienta Caño y hacé clic en **Import PCF…**, después elegí el archivo.
2. El caño recto, los codos, curvas, válvulas y bridas se convierten en un solo tramo en el nivel actual. Un cambio de tamaño empieza un tramo nuevo. La derivación de una te se vuelve un tramo propio que empieza en el centro de la te.
3. El modelo arma sus propios accesorios. Las reducciones y las tes no se copian: aparecen donde se encuentran tramos de tamaños distintos, o una derivación.

:::note
Las alturas del archivo se leen como alturas sobre el nivel actual. Las cargas, los apoyos y el análisis de esfuerzos en sí no están en un archivo PCF y no vienen con él.
:::

## Verificar lo que llegó

- La longitud total de caño por línea debe coincidir con la del origen.
- El panel Problemas lista, una sola vez cada uno, un codo cuyo punto central no está a la misma distancia de ambos extremos, un caño sin longitud y un diámetro interior que no es un tamaño estándar.

## Cañería que ya está en un archivo IFC

Cuando hay un archivo IFC abierto, **Export PCF** también escribe sus propios segmentos de caño, accesorios y válvulas, junto con los tramos que dibujaste. Un segmento toma sus extremos de sus puertos, o de los extremos de su cuerpo. Un accesorio sin puertos se deja afuera y el panel Problemas lo dice. Podés exportar solo desde el IFC cuando el modelo no tiene tramos dibujados.

Al importar, no se dibujan los soportes, derivaciones, bridas, juntas y tapas del archivo. El panel Problemas indica cuántos de cada uno se dejaron afuera, para que nada desaparezca en silencio.
