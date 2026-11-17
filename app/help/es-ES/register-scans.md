---
title: Registrar varios escaneos en uno
summary: Coloque escaneos tomados desde posiciones distintas en un único marco mediante pares de puntos elegidos u objetivos escritos, afínelos con ICP, guarde el registro como proyecto y exporte la nube registrada como LAS o E57.
keywords: registrar, registro, escaneos, nube de puntos, icp, punto más cercano iterativo, objetivos, pares de puntos, transformación rígida, alinear, combinar, e57, las, escaneo a BIM
from: e8e270db
---

## Qué va a hacer

Varios escaneos de un mismo lugar (cada uno desde su propia posición del escáner) empiezan en sus propias coordenadas. Regístrelos: asigne a cada escaneo una única colocación para que todos estén en un mismo marco, guarde eso como proyecto y escriba la nube registrada como un único archivo LAS o E57.

## Colocar los escaneos

1. Abra el cuadro de diálogo ({{ui:Register scans…}} en el panel de inicio, o {{ui:Show}} › {{ui:Register scans…}} cuando haya un modelo abierto). {{ui:Add scans…}} admite archivos LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o arrástrelos al cuadro de diálogo. Los escaneos con unidades distintas se rechazan con una nota: convierta primero uno de ellos.
2. Elija {{ui:Scan to move}} y {{ui:Place against}}. La imagen muestra cada escaneo en el marco tal como está ahora, con un color para cada uno: {{ui:Plan}}, {{ui:Front}} o {{ui:Side}}; arrastre para desplazarse y use la rueda para hacer zoom.
3. **Por pares de puntos.** Pulse {{ui:Pick a pair}}, luego un punto del escaneo que mover y después el mismo lugar en otro escaneo (una esquina, un objetivo, el pie de un pilar). Hágalo al menos tres veces, con puntos que no estén en una misma línea y separados entre sí. Pulse {{ui:Place by pairs}}: el escaneo se coloca mediante un ajuste por mínimos cuadrados, y **Restante** indica cuánto falla aún cada par. Un par con un número grande es una mala elección: quítelo con la cruz y vuelva a colocar.
4. **Por objetivos.** Si se conocen las coordenadas reales de un punto (objetivos topografiados), pulse {{ui:Pick, then type target}}, pulse el punto en su escaneo y escriba la X, la Y y la Z del objetivo en la fila. Los pares y los objetivos escritos pueden mezclarse libremente.

## Afinar con ICP

Los pares dan una colocación aproximada. {{ui:Refine}} mueve el escaneo hasta que sus superficies coincidan con las del otro: primero **punto a punto** y luego **punto a plano**. La tabla enumera cada paso con su error y cuántos puntos coincidieron; la línea de encima dibuja la caída del error. {{ui:Stop}} termina la ejecución después del paso en curso y conserva lo alcanzado. {{ui:Undo}} deshace toda la ejecución (o la última colocación); {{ui:Reset}} devuelve el escaneo a sus coordenadas del archivo.

Para que sea rápido en un portátil, ICP trabaja con una parte reducida de los puntos ({{ui:Points used}}, de 5,000 a 60,000) e ignora las coincidencias más lejanas que {{ui:Largest match distance}} (por defecto, el 5% del tamaño del escaneo, que se reduce a medida que se estabiliza). Necesita antes una colocación aproximada: los escaneos que apenas se solapan indican que no se pueden emparejar. Las superficies solo planas o solo rectas no pueden fijar una posición a lo largo de sí mismas; en ese caso, añada pares.

## Guardar y exportar

- {{ui:Save project}} escribe un pequeño archivo `.ccscans.json`: el nombre y el tamaño de cada escaneo, una huella de sus primeros 64 KB y su transformación. No contiene puntos. {{ui:Open project…}} busca los archivos de escaneo por esas referencias (los archivos deben haberse añadido antes) y restaura todas las transformaciones.
- {{ui:Export LAS}} y {{ui:Export E57}} escriben un único archivo con todos los escaneos en su lugar registrado. Los originales nunca se reescriben; la transformación se aplica al salir. Con {{ui:Read every point from the files}} activado, cada archivo se vuelve a leer para cada punto (hasta 20 millones por escaneo); desactivado, solo se escriben los puntos que se ven en el visor.
- {{ui:Show registered cloud}} (BimCraft) escribe el LAS y lo abre en la vista 3D junto al modelo, como cualquier otra nube.

:::note
No se sube nada. El registro funciona en las unidades propias de los archivos y conserva los milímetros: un LAS se escribe con una escala que se ajusta (hasta 0.1 mm), y un E57 con valores de doble precisión. Un sistema de coordenadas solo pasa al LAS cuando todos los escaneos indican el mismo código EPSG. El escritor de E57 es propio; se comprueba leyendo sus archivos de nuevo con este lector y con libE57Format.
:::
