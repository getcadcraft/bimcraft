---
title: Coordenadas en BimCraft
summary: Dónde está trabajando: la posición del puntero en la planta y en la vista 3D, el nivel en el que se encuentra, el origen del proyecto y el punto de levantamiento del sitio.
keywords: coordenadas, dónde estoy, posición, puntero, lectura, x y z, nivel, origen del proyecto, origen, punto base, punto de levantamiento, sitio, coordenadas de mapa, este, norte, georreferencia, unidades, ubicación
from: 84df5245
---

## Qué hará

Sabrá dónde está en un modelo de un vistazo: en qué nivel está dibujando, qué tan lejos está el puntero del origen del proyecto y dónde está el punto de levantamiento del sitio.

## Dónde aparecen los números

- **Sobre la vista 3D** (abajo a la derecha, junto al cubo de vistas): mueva el puntero sobre el modelo. El recuadro muestra el nivel en el que está el punto y qué tan alto está sobre el piso de ese nivel; después, sus **X, Y y Z**. Sobre un espacio vacío, lee el punto sobre el piso del nivel más bajo.
- **En la planta** (abajo a la derecha, con {{ui:Draw}} activado): el nivel que muestra la planta y la altura de su piso, y las **X e Y** del puntero mientras está sobre la planta.
- Cuando el archivo tiene una conversión de mapa (se exportó con coordenadas de mapa), ambos recuadros agregan las **coordenadas este y norte** de la cuadrícula del mapa, en las {{ui:Units}} que eligió (siempre con la unidad escrita junto a ellas; los pies y pulgadas se muestran como pies decimales). Un dibujo (DWG o DXF) conserva sus propias unidades: su lectura del puntero las indica y nunca se convierte.

Cada X, Y y Z se mide desde el **origen del proyecto**, en las {{ui:Units}} elegidas en la barra de herramientas (pies y pulgadas, pulgadas, pies decimales, milímetros, centímetros o metros). La Y positiva apunta al norte del modelo, que no siempre es el norte verdadero. Las coordenadas este y norte del mapa siguen la misma elección (los pies y pulgadas se muestran como pies decimales); cuando la unidad propia del sistema de mapa es distinta de la que eligió, se indica entre paréntesis después de los números, por ejemplo *(pies de levantamiento de EE. UU.)*, para que un topógrafo vea en qué unidad está escrito el sistema.

## Los dos marcadores

- **Origen del proyecto** (un círculo rojo con una cruz): el punto 0, 0, 0 desde el que se miden todas las coordenadas del modelo.
- **Punto de levantamiento** (un círculo azul con un triángulo): el punto de referencia del sitio, para el que se dan su latitud, longitud y elevación, o sus coordenadas de mapa. En la vista 3D, apunte a él para leer dónde está.

Cuando el sitio está sobre el origen del proyecto, como en un edificio nuevo dibujado aquí, un solo marcador muestra ambos. Pulse el botón de mira en cualquiera de los dos recuadros para ocultar o mostrar los marcadores; BimCraft recuerda su elección en este navegador.

## Lo que debe ver

- Los números cambian al mover el puntero, y el recuadro de la planta indica el nivel que eligió en la lista de niveles.
- Los marcadores permanecen en su lugar mientras orbita, encuadra y hace zoom.

:::tip
Para leer la latitud y longitud de un punto, use {{ui:Measure}} › {{ui:Location}}: consulte [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure).
:::

:::touch
En una pantalla táctil, el recuadro 3D no muestra nada hasta que use un ratón o un lápiz: con un dedo se mueve la vista.
:::
