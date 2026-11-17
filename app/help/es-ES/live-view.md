---
title: La vista en directo
summary: Un panel junto al modelo que lo muestra con el aspecto de tiempo real, con sol, sombras y luz de rebote, y que sigue cada cambio que hace; con él puede recorrer el modelo y ajustar la hora del día y el mes.
keywords: vista en directo, tiempo real, render en tiempo real, recorrido, recorrer, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, estación, mes, sombras, oclusión ambiental, reflejos, luz de rebote, iluminación global, webgpu, webgl
from: ea5c02bf
---

La vista en directo muestra el modelo con el aspecto de tiempo real: el cielo y el sol según el lugar y la fecha de su emplazamiento, las sombras del sol, las pinturas y materiales que asignó a los elementos, las lámparas y la luz que rebota en muros y suelos. Sigue lo que hace: si gira la vista 3D, ella también gira; si cambia el modelo, muestra el cambio poco después. No se sube nada.

Dibuja la misma escena, pinturas, lámparas y sol que [Renderizar una imagen](topic:render); para una imagen acabada use esa.

## Cómo abrirla

1. Abra un modelo y elija {{ui:Vista en directo}} en la barra de herramientas. El panel se abre sobre la aplicación, abajo a la derecha.
2. Arrastre su barra de título para moverlo, y tire de su esquina para hacerlo más grande.
3. {{ui:Vista en directo en una ventana nueva}} (el botón junto a él) o {{ui:Nueva ventana}} en el panel lo pasa a una ventana propia, para una segunda pantalla. Si su navegador bloquea las ventanas emergentes, se abre como panel.
4. {{ui:Cerrar}} lo cierra.

## Los controles

| Control | Qué hace |
|---|---|
| {{ui:Seguir la vista}} | Activado: la vista en directo mira hacia donde mira la vista 3D. Al recorrer, se desactiva |
| {{ui:Recorrido}} | Recorre el modelo (abajo) |
| {{ui:Gravedad}} | Al recorrer: pisar suelos y subir escaleras. Desactivado: volar |
| {{ui:Hora}} | La hora del día. El sol se mueve al arrastrar |
| {{ui:Mes}} | El mes, para ver el sol en invierno y en verano |
| {{ui:Calidad}} | {{ui:Para este ordenador}}, o {{ui:Baja}}, {{ui:Medio}} o {{ui:Alta}} |

La línea inferior indica qué dibuja la vista (WebGPU o WebGL 2), la calidad y la luz de rebote.

## Recorrer el modelo

1. Gire la vista 3D hacia donde quiere estar de pie y elija {{ui:Recorrido}}. Usted queda de pie sobre el suelo, bajo el punto de vista de la vista, a 1.6 m de altura.
2. Haga clic en la vista en directo y use {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las teclas de flecha. Mantenga pulsado {{key:Shift}} para correr. Arrastre para mirar alrededor.
3. Los escalones de hasta 40 cm se suben (escaleras); todo lo que sea más alto es un muro. Los muros le detienen, y usted se desliza a lo largo de ellos.
4. Con {{ui:Gravedad}} desactivado vuela: {{key:E}} sube, {{key:Q}} baja.
5. {{key:Esc}} detiene el recorrido.

## Luz de rebote

La luz que rebota desde un muro iluminado por el sol hasta el suelo, y el interior más oscuro de una habitación, se calculan en segundo plano en cada núcleo del procesador. Mientras trabaja, la línea inferior indica {{ui:Luz de rebote: 40 %}}; cuando está lista, la vista la incorpora. Tras un cambio, vuelve a empezar.

:::note
Es una aproximación para una vista en directo, no una imagen renderizada: los detalles pequeños entre puntos reciben la luz de rebote de los puntos cercanos.
:::

:::note
Los navegadores difieren. Donde el navegador tiene WebGPU, la vista en directo lo usa; en los demás casos usa WebGL 2 y se ve igual. Si no hay ninguno, el panel lo indica.
:::
