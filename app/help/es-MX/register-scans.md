---
title: Registrar varios escaneos en uno
summary: Coloque en un solo marco los escaneos tomados desde posiciones distintas, mediante pares de puntos elegidos o destinos escritos; refínelos con ICP, guarde el registro como proyecto y exporte la nube registrada como LAS o E57.
keywords: registro, registrar, escaneos, nube de puntos, icp, punto más cercano iterativo, destinos, pares de puntos, transformación rígida, alinear, combinar, e57, las, escaneo a BIM
from: e8e270db
---

## Qué hará

Varios escaneos de un mismo lugar (cada uno desde su propia posición del escáner) empiezan en sus propias coordenadas. Regístrelos: dé a cada escaneo una colocación para que todos estén en un mismo marco, luego guarde eso como proyecto y escriba la nube registrada como un solo archivo LAS o E57.

## Colocar los escaneos

1. Abra el cuadro de diálogo ({{ui:Registrar escaneos…}} en el panel de inicio, o {{ui:Mostrar}} › {{ui:Registrar escaneos…}} una vez abierto un modelo). {{ui:Agregar escaneos…}} acepta archivos LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o suéltelos en el cuadro de diálogo. Los escaneos con unidades distintas se rechazan con una nota: convierta primero uno de ellos.
2. Elija {{ui:Escaneo a mover}} y {{ui:Colocar contra}}. La imagen muestra cada escaneo en el marco tal como está ahora, con un color para cada uno: {{ui:Planta}}, {{ui:Frontal}} o {{ui:Lateral}}; arrastre para encuadrar y use la rueda para acercar.
3. **Por pares de puntos.** Haga clic en {{ui:Elegir un par}}, luego en un punto del escaneo que va a mover, y después en el mismo lugar de otro escaneo (una esquina, un destino, el pie de una columna). Hágalo al menos tres veces, con puntos que no estén en una misma línea y bien separados. Haga clic en {{ui:Colocar por pares}}: el escaneo se coloca con un ajuste de mínimos cuadrados, y **Sobrante** indica cuánto falla todavía cada par. Un par con un número grande es una mala elección: quítelo con la cruz y vuelva a colocar.
4. **Por destinos.** Si se conocen las coordenadas verdaderas de un punto (destinos topográficos), haga clic en {{ui:Elegir y escribir objetivo}}, haga clic en el punto de su escaneo y escriba las X, Y y Z del destino en la fila. Los pares y los destinos escritos se combinan libremente.

## Refinar con ICP

Los pares dan una colocación aproximada. {{ui:Afinar}} mueve el escaneo hasta que sus superficies coinciden con las del otro escaneo: primero **punto a punto**, luego **punto a plano**. La tabla enumera cada paso con su error y cuántos puntos coincidieron; la línea de arriba dibuja cómo baja el error. {{ui:Detener}} termina la ejecución después del paso en curso y conserva lo que alcanzó. {{ui:Deshacer}} revierte toda la ejecución (o la última colocación); {{ui:Restablecer}} devuelve el escaneo a sus coordenadas del archivo.

Para que sea rápido en un equipo portátil, ICP trabaja con una parte diezmada de los puntos ({{ui:Puntos usados}}, de 5,000 a 60,000) e ignora las coincidencias más lejanas que {{ui:Distancia máxima de pareo}} (por defecto, 5 % del tamaño del escaneo, que se reduce conforme se asienta). Necesita primero una colocación aproximada: los escaneos que apenas se traslapan informan que no pueden emparejarse. Las superficies solo planas o solo rectas no pueden fijar una posición a lo largo de sí mismas; en ese caso, agregue pares.

## Guardar y exportar

- {{ui:Guardar proyecto}} escribe un archivo `.ccscans.json` pequeño: el nombre de cada escaneo, su tamaño y una huella de sus primeros 64 KB, con su transformación. No contiene puntos. {{ui:Abrir proyecto…}} encuentra los archivos de escaneo por esas referencias (los archivos deben agregarse antes) y restablece cada transformación.
- {{ui:Exportar LAS}} y {{ui:Exportar E57}} escriben un solo archivo con cada escaneo en su lugar registrado. Los puntos nunca se reescriben en los originales; la transformación se aplica al salir. Con {{ui:Leer todos los puntos de los archivos}} activado, cada archivo se vuelve a leer para cada punto (hasta 20 millones por escaneo); desactivado, solo se escriben los puntos que se muestran en el visor.
- {{ui:Mostrar la nube registrada}} (BimCraft) escribe el LAS y lo abre en la vista 3D junto al modelo, como cualquier otra nube.

:::note
No se sube nada. El registro trabaja en las unidades propias de los archivos y conserva los milímetros: un LAS se escribe con una escala que se ajuste (hasta 0.1 mm), y un E57 con valores de punto doble. Un sistema de coordenadas se traslada al LAS solo cuando todos los escaneos indican el mismo código EPSG. El escritor de E57 es propio; se verifica leyendo sus archivos de nuevo con este lector y con libE57Format.
:::
