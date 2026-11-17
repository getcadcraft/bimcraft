---
title: Recorrer un modelo
summary: Recorra un modelo IFC a la altura de los ojos con el teclado; la gravedad le mantiene sobre el suelo y los muros le detienen.
keywords: recorrer, recorrido, primera persona, volar, navegar, altura de los ojos, gravedad, colisión, wasd, interior, visita guiada
from: 0a22854a
---

## Qué hará

Vea un modelo como lo vería alguien de pie en él: recorra un pasillo, entre en una habitación, suba por una escalera.

## Pasos

1. Abra un modelo IFC y haga clic en {{ui:Recorrido}} de la barra de herramientas.
2. Haga clic en el suelo donde quiera situarse. Quedará de pie con los ojos a {{ui:Altura de los ojos}} (1.6 m al principio; se muestra y se escribe en las {{ui:Unidades}} que haya elegido: 5'-3" en pies y pulgadas, 1600 en milímetros; un número sin unidad está en esa unidad, o escriba una unidad como 1.8 m), mirando hacia donde miraba la vista.
3. Muévase con {{key:W}} {{key:A}} {{key:S}} {{key:D}} o con las teclas de flecha. Mantenga pulsada {{key:Shift}} para ir más deprisa. Arrastre en la vista para mirar alrededor.
4. Pulse {{key:Esc}} o haga clic en {{ui:Listo}} para detenerse. La vista se queda donde estaba, lista para orbitar.

## Qué debe ver

- **Gravedad** mantiene al usuario sobre el suelo que tiene debajo y le sube por escalones y escaleras. Desactívela para flotar: {{key:E}} o {{key:PageUp}} sube, {{key:Q}} o {{key:PageDown}} baja.
- **Detener en muros** le detiene justo antes de los muros, las puertas y cualquier otro obstáculo, y le permite deslizarse a lo largo de ellos. Desactívela para atravesarlos.
- Los elementos ocultos y los transparentes, y lo que retira un corte de sección, no le detienen ni se pisan.

## Errores frecuentes

- **No pasa nada al pulsar W.** Las teclas van a un cuadro en el que está escribiendo: haga clic primero en la vista.
- **Caí desde mucha altura.** No había suelo bajo ese punto (un hueco, o el suelo está oculto). Desactive la gravedad o empiece en una planta.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
