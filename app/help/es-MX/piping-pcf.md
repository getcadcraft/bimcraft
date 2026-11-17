---
title: Enviar tubería a un programa de esfuerzos o isométricos, y leerla de nuevo (PCF)
summary: Escriba los tramos de tubería del modelo como archivo de componentes de tubería PCF, o lea un archivo PCF de un programa de análisis de esfuerzos o de isométricos y dibuje su tubería como tramos.
keywords: pcf, archivo de componentes de tubería, esfuerzos en tubería, isométrico, isométricos, exportar, importar, tubería, planta industrial, tubería de acero, mover un trabajo, otro software
from: 24f91355
---

## Qué hará

PCF es el archivo de texto plano que leen y escriben los programas de análisis de esfuerzos en tuberías e isométricos. Enumera los componentes de cada línea con sus puntos extremos y sus diámetros nominales.

## Exportar

1. Elija la herramienta Tubería. La fila de opciones muestra **Exportar PCF**.
2. Haga clic en ella. Se escribe cada tramo de tubería del modelo: tubo recto, codos (un giro de 90 grados; de otro modo, una curva), tes con su punto de derivación, reducciones y válvulas.
3. El archivo usa milímetros. Los diámetros nominales están en milímetros. El punto central de un codo es su esquina, donde se unen sus dos tramos.

El PCF se escribe para tubería de acero con soldadura a tope. Un tramo de otro material también se escribe, con claves de componente de acero, y se anota en el panel de Problemas.

## Importar

1. Elija la herramienta Tubería y haga clic en **Importar PCF…**, luego elija el archivo.
2. Desde el tubo recto hasta los codos, curvas, válvulas y bridas, todo se convierte en un tramo del nivel actual. Un cambio de diámetro inicia un tramo nuevo. La derivación de una te se convierte en su propio tramo, que inicia en el centro de la te.
3. El modelo coloca sus propios accesorios. Las reducciones y las tes no se copian: aparecen donde se encuentran tramos de distinto diámetro, o una derivación.

:::note
Las alturas del archivo se leen como alturas sobre el nivel actual. Las cargas, los apoyos y el análisis de esfuerzos en sí no están en un archivo PCF y no se traen.
:::

## Verificar lo que llegó

- La longitud total de tubería por línea debe coincidir con la de la fuente.
- El panel de Problemas enumera, una vez cada uno, un codo cuyo punto central no está a la misma distancia de ambos extremos, la tubería sin longitud y un diámetro nominal que no es un tamaño estándar.

## Tubería que ya está en un archivo IFC

Cuando hay un archivo IFC abierto, **Exportar PCF** también escribe sus propios segmentos de tubería, accesorios y válvulas, junto a los tramos que dibujó. Un segmento toma sus extremos de sus puertos, o de los extremos de su cuerpo. Un accesorio sin puertos se omite, y el panel de Problemas lo indica. Puede exportar solo desde el IFC cuando el modelo no tiene tramos dibujados.

Al importar, los soportes, olets, bridas, juntas y tapas del archivo no se dibujan. El panel de Problemas enumera cuántos de cada uno se omitieron, así que nada desaparece en silencio.
