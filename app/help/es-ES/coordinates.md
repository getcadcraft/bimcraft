---
title: Coordenadas en BimCraft
summary: Dónde está trabajando: la posición del puntero en la planta y en la vista 3D, la planta en la que se encuentra, el origen del proyecto y el punto topográfico del emplazamiento.
keywords: coordenadas, dónde estoy, posición, puntero, lectura, x y z, planta, nivel, origen del proyecto, origen, punto base, punto topográfico, emplazamiento, coordenadas de mapa, coordenadas este, coordenadas norte, georreferencia, unidades, ubicación
from: 84df5245
---

## Qué hará

Sepa de un vistazo dónde está en un modelo: en qué planta está dibujando, a qué distancia está el puntero del origen del proyecto y dónde está el punto topográfico del emplazamiento.

## Dónde se muestran los valores

- **Sobre la vista 3D** (abajo a la derecha, junto al cubo de vista): mueva el puntero sobre el modelo. El recuadro muestra la planta en la que está el punto y su altura sobre el suelo de esa planta, y después sus **X, Y y Z**. Sobre un espacio vacío, lee el punto en el suelo de la planta más baja.
- **En la planta** (abajo a la derecha, mientras {{ui:Dibujo}} está activado): la planta que muestra el plano y la altura de su suelo, y las **X e Y** del puntero mientras esté sobre el plano.
- Cuando el archivo tiene una conversión a mapa (se exportó con coordenadas de mapa), ambos recuadros añaden las **coordenadas este y norte** de la cuadrícula del mapa, en las {{ui:Unidades}} que haya elegido (siempre con la unidad escrita junto a ellas; los pies y pulgadas se muestran como pies decimales). Un dibujo (DWG o DXF) conserva sus propias unidades: su lectura del puntero las indica y nunca se convierte.

Todas las X, Y y Z se miden desde el **origen del proyecto**, en las {{ui:Unidades}} elegidas en la barra de herramientas (pies y pulgadas, pulgadas, pies decimales, milímetros, centímetros o metros). La Y positiva apunta al norte del modelo, que no siempre es el norte verdadero. Las coordenadas este y norte del mapa siguen la misma elección (los pies y pulgadas se muestran como pies decimales). Cuando la unidad propia del sistema de mapa es distinta de la que eligió, se indica entre paréntesis después de los números, por ejemplo *(US survey feet)*, para que un topógrafo vea en qué unidad está escrito el propio sistema.

## Los dos marcadores

- **Origen del proyecto** (un círculo rojo con una cruz): el punto 0, 0, 0 desde el que se miden todas las coordenadas del modelo.
- **Punto topográfico** (un círculo azul con un triángulo): el punto de referencia del emplazamiento, aquel para el que se dan su latitud, su longitud y su elevación, o sus coordenadas de mapa. En la vista 3D, apunte hacia él para leer dónde está.

Cuando el emplazamiento está sobre el origen del proyecto, como en un edificio nuevo dibujado aquí, un solo marcador muestra ambos. Pulse el botón de la mira en cualquiera de los dos recuadros para ocultar o mostrar los marcadores; BimCraft recuerda su elección en este navegador.

## Lo que debe ver

- Los valores cambian al mover el puntero, y el recuadro de la planta indica la planta que eligió en la lista de plantas.
- Los marcadores permanecen fijos al orbitar, desplazar y hacer zoom.

:::tip
Para leer la latitud y la longitud de un punto, use {{ui:Medir}} › {{ui:Ubicación}}: vea [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure).
:::

:::touch
En una pantalla táctil, el recuadro 3D no muestra nada hasta que use un ratón o un lápiz: el dedo mueve la vista.
:::
