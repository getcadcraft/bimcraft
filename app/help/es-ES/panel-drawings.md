---
title: Planos de paneles en madera o en acero conformado en frío
summary: Enmarque los muros, suelos y cubiertas del modelo como paneles en madera o en acero conformado en frío, vea cada montante, solera, dintel, vigueta y cabio a escala, y guarde la lista de corte como CSV y los planos de taller como PDF.
keywords: panel, entramado, plano de taller, lista de corte, acero conformado en frío, montante, LGS, madera, vigueta, cabio, dintel, existencias, PDF
from: c09f916e
---

## Abrir los paneles

Elija {{ui:Planos de paneles}} en el menú {{ui:Compilación}} (o escriba {{cmd:PANELS}}). La lista contiene cada muro dibujado, cada suelo y cada cubierta del modelo, cada uno con su casilla. Los muros llegan con sus puertas y ventanas como huecos. Un suelo se enmarca como el rectángulo que rodea su contorno, con las viguetas en la dirección corta. Una cubierta se enmarca como un faldón a dos aguas sobre el contorno de sus muros, con la pendiente de la cubierta; la lista lo indica, porque una cubierta a cuatro aguas o una cubierta compleja no es a dos aguas.

## Material, tamaño y separación

Elija {{ui:Material}}: **Madera** o **Acero conformado en frío**. Las piezas de acero son montantes en C, nombrados por su canto y espesor (por ejemplo, C92-1.2), con una canal para las soleras. {{ui:Sección de la pieza}} elige un tamaño para todos los paneles marcados, o deje Predeterminado para tomar los valores de cada tipo de panel. {{ui:Separación}} es la distancia entre montantes, viguetas o cabios. Son valores de partida para que los ajuste. No son una comprobación normativa: si un montante a esa separación soporta ese muro, y un dintel esa luz, lo deciden las tablas del código (el complemento de normativa de edificación incluye las del IRC) y su ingeniero.

## Lo que obtiene

El primer panel marcado se dibuja a escala en el diálogo, con las cotas. {{ui:Lista de corte (CSV)}} guarda las piezas de cada panel por marca, tamaño y longitud, y las longitudes de existencias que debe comprar para ellas. {{ui:Planos de taller (PDF)}} guarda una página A3 por cada panel, con cada pieza marcada y su lista de corte. {{ui:Plano (SVG)}} guarda el primer panel como dibujo. Todo lo que el cálculo del entramado no pueda enmarcar (un hueco demasiado cerca del extremo de un muro, un dintel que no cabe bajo las soleras, una pieza más larga que la existencia más larga) se enumera en **Problemas**, además de en el diálogo.

## Lo que no hace

Los paneles son dibujos que se hacen a partir del modelo cada vez que lo pide: nada se escribe en el modelo, así que siempre coinciden con él. Para incorporar el entramado al modelo como elementos, use {{ui:Estructura de madera}} en muros, suelos y cubiertas de madera.
