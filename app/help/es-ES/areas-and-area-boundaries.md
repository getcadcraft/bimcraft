---
title: Áreas y contornos de superficie
summary: Mida la superficie bruta construida o la superficie alquilable dentro de contornos que dibuje o tome de los muros, y liste las superficies en una tabla.
keywords: área, áreas, contorno de área, esquema de áreas, superficie bruta construida, superficie bruta, GFA, alquilable, plano de áreas, tabla de áreas, elegir muros, no cerrada
from: c79f96d2
---

## Qué hará

Dibuje los contornos de un esquema de áreas, coloque las áreas dentro de ellos y lea los totales.

## Dónde están las herramientas

- Diseños con cinta: {{ui:Arquitectura}} › **Room & Area** › {{ui:Área}} y {{ui:Contorno de superficie}}.
- Diseño clásico: barra Dibujo › menú {{ui:Habitaciones}}.

## Pasos

1. Elija {{ui:Contorno de superficie}}. En la fila elija el {{ui:Esquema}}: Superficie bruta construida o Alquilable. Cada esquema tiene sus propios contornos.
2. Elija cómo trazar las líneas en {{ui:Crear por}}:
   - **Dibujar**: haga clic punto a punto.
   - **Elegir muros: línea central**: haga clic en un muro, y su línea central es un contorno.
   - **Elegir muros: la cara pulsada**: haga clic en un muro por el lado que quiera; esa cara es el contorno. Para la superficie bruta construida, haga clic en el exterior de los muros exteriores.
3. Elija {{ui:Área}}. Elija el mismo esquema, escriba un nombre, número o tipo si quiere, y haga clic dentro de los contornos.
4. El área se mide al momento. Selecciónela para cambiar su nombre, número o tipo en **Propiedades**.

## Qué depende de qué

- Un contorno creado al elegir un muro sigue a ese muro: si mueve el muro, el área se vuelve a medir en el mismo paso.
- Un contorno que dibujó se queda donde lo dibujó.
- Las caras de los muros que se encuentran en una esquina también se encuentran allí, así que cuatro muros elegidos cierran un área sin huecos.
- Los contornos de área se muestran en la planta mientras usa una herramienta de espacios o de áreas, para que no saturen la planta el resto del tiempo.

## Si los contornos no cierran

El área se coloca igualmente. Indica **Sin cerrar** y no mide nada hasta que los contornos la cierren alrededor. Es un aviso: no se rechaza nada.

## La tabla

Panel izquierdo › {{ui:Tablas}} › **Áreas**: esquema, número, nombre, tipo, planta, superficie y perímetro, con un total. Un clic en una fila selecciona el área. {{ui:Descargar CSV}} da la misma tabla.

## En el IFC

Un área es un IfcSpace sin cuerpo: PredefinedType GFA para el esquema de superficie bruta construida, y USERDEFINED con ObjectType Rentable para la alquilable. Lleva GrossFloorArea y GrossPerimeter, y no lleva superficie neta, para no confundirla con un espacio. Un contorno es un IfcVirtualElement.

## Aún no disponible

- Esquemas propios (solo Superficie bruta construida y Alquilable).
- Rellenos de color por tipo de área.
- Reglas que colocan el contorno por usted, como «hasta la línea del vidrio».

Véase también [Espacios y separadores de espacios](topic:rooms-and-separators), [Etiquetas de espacios y áreas](topic:room-and-area-tags).
