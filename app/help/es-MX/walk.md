---
title: Recorrer un modelo
summary: Recorra un modelo IFC a la altura de los ojos con el teclado; la gravedad lo mantiene sobre el piso y los muros lo detienen.
keywords: recorrido, recorrido virtual, primera persona, volar, navegar, altura de los ojos, gravedad, colisión, wasd, interior, visita
from: 0a22854a
---

## Qué hará

Vea un modelo como lo vería alguien de pie dentro de él: recorra un pasillo, entre a un cuarto, suba una escalera.

## Pasos

1. Abra un modelo IFC y pulse {{ui:Recorrido}} en la barra de herramientas.
2. Haga clic en el piso donde quiera estar. Usted queda de pie, con los ojos a {{ui:Altura de los ojos}} (1.6 m al inicio, que se muestra y se escribe en las {{ui:Unidades}} que haya elegido: 5'-3" en pies y pulgadas, 1600 en milímetros; un número sin unidad se toma en esa unidad, o escriba una unidad como 1.8 m), mirando hacia donde miraba la vista.
3. Muévase con {{key:W}} {{key:A}} {{key:S}} {{key:D}} o con las teclas de flecha. Mantenga pulsado {{key:Shift}} para ir más rápido. Arrastre en la vista para mirar alrededor.
4. Pulse {{key:Esc}} o haga clic en {{ui:Listo}} para detenerse. La vista se queda donde estaba, lista para la órbita.

## Qué debe ver

- La **gravedad** lo mantiene sobre el piso que tiene debajo y lo sube por escalones y escaleras. Desactívela para flotar: {{key:E}} o {{key:PageUp}} suben, {{key:Q}} o {{key:PageDown}} bajan.
- **Detenerse en muros** lo frena justo antes de muros, puertas y cualquier otra cosa que esté en el camino, y le permite deslizarse a lo largo de ellos. Desactívela para atravesarlos.
- Los elementos ocultos y transparentes, y lo que corte una sección, no lo detienen y no se pisan.

## Errores comunes

- **No pasa nada al pulsar W.** Las teclas van a un cuadro en el que está escribiendo: haga clic primero en la vista.
- **Caí una gran distancia.** No había piso bajo ese punto (una abertura, o el piso está oculto). Desactive la gravedad o comience sobre un piso.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
