---
title: "Desarrollar un volumen de edificación a partir de un estudio de implantación"
summary: "Tome un volumen de edificación estudiado en la vista de emplazamiento de CivilCraft y desarróllelo en plantas, muros y forjados, conservando la ubicación del emplazamiento en el mapa."
keywords: volumen, volumen de edificación, volumetría, estudio de emplazamiento, desarrollar, CivilCraft, entregar, plantas, muros, forjados, huella, georreferenciación, IFC
from: 557b94d1
---

La vista de emplazamiento de CivilCraft puede dibujar volúmenes de edificación sobre una parcela y comprobarlos frente al terreno, los límites que escriba y el sol. **Desarrollar en BimCraft** abre allí BimCraft en una pestaña nueva con los volúmenes; **Volúmenes como IFC** los guarda como un archivo que se abre aquí de la forma habitual. En ambos casos, cada volumen llega como un emplazamiento, un edificio con una planta por piso y un bloque (el propio volumen) que lleva sus datos.

## Desarrollar un volumen

1. Seleccione un volumen en la vista 3D. Las propiedades muestran su uso, pisos y altura de piso, huella, superficie construida bruta, cómo se asienta en la pendiente y su parcela.
2. Haga clic en **Desarrollar este volumen**.

En un solo paso de deshacer, cada planta de ese edificio recibe muros alrededor de la huella (la huella es la cara exterior de los muros; cada muro sube hasta la planta de encima, y el último tiene la altura de un piso) y un forjado bajo todo el edificio. El bloque se sustituye, y el edificio conserva los datos del estudio en el conjunto de propiedades `CadCraft_SiteMass`, marcado como desarrollado. No hay cubierta: una cubierta depende del diseño.

## La ubicación del emplazamiento

Un archivo de CivilCraft se escribe en la unidad de longitud propia del proyecto y, cuando el proyecto de CivilCraft tenía un sistema de coordenadas, lo lleva como conversión de mapa del proyecto. Desarrollar un volumen no toca eso, así que el edificio sigue donde indica el mapa.
