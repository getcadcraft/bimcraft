---
title: Enviar tubería a un programa de tensiones o de isométricos, y leerla de nuevo (PCF)
summary: Escriba los tramos de tubería del modelo como archivo de componentes de tubería PCF, o lea un archivo PCF de un programa de tensiones o de isométricos y dibuje su tubería como tramos.
keywords: pcf, archivo de componentes de tubería, tensiones en tuberías, isométrico, isométricos, exportar, importar, tubería, planta industrial, tubería de acero, mover un trabajo, otro software
from: 24f91355
---

## Qué hará

PCF es el archivo de texto plano que leen y escriben los programas de análisis de tensiones en tuberías y de isométricos. Lista cada componente de cada línea con sus puntos extremos y sus diámetros nominales.

## Exportar

1. Elija la herramienta Tubería. La fila de opciones muestra **Exportar PCF**.
2. Haga clic en ella. Se escribe cada tramo de tubería del modelo: tubo recto, codos (un giro de 90 grados; si no, una curva), tes con su punto de ramal, reducciones y válvulas.
3. El archivo usa milímetros. Los diámetros nominales están en milímetros. El punto central de un codo es su esquina, donde se unen sus dos tramos.

PCF se escribe para tubería de acero soldada a tope. Un tramo de otro material también se escribe, con claves de componente de acero, y se anota en el panel de Problemas.

## Importar

1. Elija la herramienta Tubería y haga clic en **Importar PCF…**, y luego elija el archivo.
2. El tubo recto, a través de codos, curvas, válvulas y bridas, se convierte en un solo tramo en el nivel actual. Un cambio de tamaño inicia un tramo nuevo. La derivación de una te se convierte en su propio tramo, que empieza en el centro de la te.
3. El modelo coloca sus propios accesorios. Las reducciones y las tes no se copian: aparecen donde se encuentran tramos de tamaños distintos, o una derivación.

:::note
Las alturas del archivo se leen como alturas sobre el nivel actual. Las cargas, los apoyos y el propio análisis de tensiones no están en un archivo PCF y no se importan.
:::

## Compruebe lo que se importó

- La longitud total de tubería por línea debe coincidir con la del origen.
- El panel de Problemas enumera, una vez cada uno, un codo cuyo punto central no está a la misma distancia de ambos extremos, la tubería sin longitud y un diámetro nominal que no es un tamaño estándar.

## Tubería que ya está en un archivo IFC

Cuando hay un archivo IFC abierto, **Exportar PCF** también escribe sus propios segmentos de tubería, accesorios y válvulas, junto a los tramos que usted dibujó. Un segmento obtiene sus extremos de sus puertos, o de los extremos de su cuerpo. Un accesorio sin puertos se omite, y el panel de Problemas lo indica. Puede exportar solo desde el IFC cuando el modelo no tiene tramos dibujados.

Al importar, los soportes, las derivaciones (olets), las bridas, las juntas y las tapas del archivo no se dibujan. El panel de Problemas enumera cuántos de cada uno se omitieron, para que nada desaparezca sin avisar.
