---
title: Dibujos de paneles en madera o acero de calibre ligero
summary: Arme los muros, pisos y techos del modelo como paneles de madera o de acero de calibre ligero, vea cada poste, solera, dintel, vigueta y par a escala, y guarde la lista de corte como CSV y los dibujos de taller como PDF.
keywords: panel, estructura, dibujo de taller, lista de corte, acero de calibre ligero, poste de acero, LGS, madera, vigueta, par, dintel, existencias, PDF
from: c09f916e
---

## Abrir los paneles

Elija {{ui:Dibujos de paneles}} en el menú {{ui:Compilación}} (o escriba {{cmd:PANELS}}). La lista contiene cada muro dibujado, cada piso y cada techo del modelo, cada uno con una marca. Los muros vienen con sus puertas y ventanas como aberturas. Un piso se arma como el rectángulo alrededor de su contorno, con las viguetas corriendo en el sentido corto. Un techo se arma como una cubierta a dos aguas sobre el contorno de sus muros, con la pendiente del techo; la lista lo indica, porque un techo a cuatro aguas o uno complejo no es una cubierta a dos aguas.

## Material, tamaño y separación

Elija {{ui:Material}}: **Madera** o **Acero de calibre ligero**. Las piezas de acero son postes en C, nombrados por su profundidad y espesor (por ejemplo C92-1.2), con una canal para las soleras. {{ui:Tamaño del miembro}} elige un tamaño para todos los paneles marcados, o deje **Predeterminado** para tomar los valores de cada tipo de panel. {{ui:Separación}} es la distancia entre postes, viguetas o pares. Son valores iniciales para que usted los ajuste. No son una verificación de código: si un poste a esa separación soporta ese muro, y si un dintel soporta ese claro, lo deciden las tablas del código (el complemento Reglamentos de construcción incluye las del IRC) y su ingeniero.

## Qué obtiene

El primer panel marcado se dibuja a escala en el cuadro de diálogo, con las dimensiones. {{ui:Lista de corte (CSV)}} guarda las piezas de cada panel por marca, tamaño y longitud, y las longitudes de existencias que debe comprar para ellas. {{ui:Dibujos de taller (PDF)}} guarda una hoja A3 por cada panel, con cada pieza marcada y su lista de corte. {{ui:Dibujo (SVG)}} guarda el primer panel como un dibujo. Lo que el código de armado no puede armar (una abertura demasiado cerca del extremo de un muro, un dintel que no cabe bajo las soleras, una pieza más larga que la existencia más larga) aparece también en {{ui:Problemas}} y en el cuadro de diálogo.

## Lo que no hace

Los paneles son dibujos hechos a partir del modelo cada vez que los pide: nada se escribe en el modelo, así que siempre coinciden con él. Para poner el armado en el modelo como miembros, use {{ui:Estructura de madera}} para muros, pisos y techos de madera.
