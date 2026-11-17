---
title: La vista en vivo
summary: Un panel junto al modelo que lo muestra con el aspecto en tiempo real, con sol, sombras y luz rebotada, y que sigue cada cambio que haga; recorra el modelo y defina la hora del día y el mes.
keywords: vista en vivo, tiempo real, render en tiempo real, recorrido, recorrer, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, temporada, mes, sombras, oclusión ambiental, reflejos, luz rebotada, iluminación global, webgpu, webgl
from: ea5c02bf
---

La vista en vivo muestra el modelo con el aspecto en tiempo real: el cielo y el sol según el lugar y la fecha de su terreno, las sombras del sol, las pinturas y materiales que asignó a los elementos, lámparas y la luz que rebota en muros y pisos. Sigue lo que hace: si gira la vista 3D, ella también gira; si cambia el modelo, muestra el cambio un momento después. No se sube nada.

Dibuja la misma escena, pinturas, lámparas y sol que [Renderizar una imagen](topic:render); para una imagen terminada use esa función.

## Ábralo

1. Abra un modelo y elija {{ui:Vista en vivo}} en la barra de herramientas. El panel se abre sobre la aplicación, abajo a la derecha.
2. Arrastre su barra de título para moverlo y jale su esquina para agrandarlo.
3. {{ui:Vista en vivo en otra ventana}} (el botón junto a él) o {{ui:Otra ventana}} en el panel lo pasa a una ventana propia, para una segunda pantalla. Si su navegador bloquea las ventanas emergentes, se abre como panel.
4. {{ui:Cerrar}} lo cierra.

## Los controles

| Control | Qué hace |
|---|---|
| {{ui:Seguir la vista}} | Activado: la vista en vivo mira hacia donde mira la vista 3D. Al recorrer, se desactiva |
| {{ui:Recorrido}} | Recorre el modelo (abajo) |
| {{ui:Gravedad}} | Al recorrer: camina sobre los pisos y sube escaleras. Desactivado: vuela |
| {{ui:Hora}} | La hora del día. El sol se mueve al arrastrar |
| {{ui:Mes}} | El mes, para ver el sol en invierno y en verano |
| {{ui:Calidad}} | {{ui:Para esta computadora}}, o {{ui:Baja}}, {{ui:Medio}} o {{ui:Alta}} |

La línea de abajo indica qué dibuja la vista (WebGPU o WebGL 2), la calidad y la luz rebotada.

## Recorra el modelo

1. Gire la vista 3D hacia donde quiera pararse y elija {{ui:Recorrido}}. Usted queda de pie sobre el piso bajo el punto de vista, con 1.6 m de altura.
2. Haga clic en la vista en vivo y luego use {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las flechas. Mantenga {{key:Shift}} para correr. Arrastre para mirar alrededor.
3. Se suben escalones de hasta 40 cm (escaleras); todo lo más alto es un muro. Los muros lo detienen y usted se desliza a lo largo de ellos.
4. Con {{ui:Gravedad}} desactivada, vuela: {{key:E}} sube, {{key:Q}} baja.
5. {{key:Esc}} detiene el recorrido.

## Luz rebotada

La luz que rebota de un muro soleado hacia el piso, y el interior más oscuro de un cuarto, se calcula en segundo plano en cada núcleo del procesador. Mientras trabaja, la línea de abajo dice {{ui:Luz rebotada: 40 %}}; cuando está lista, la vista la incorpora. Después de un cambio, vuelve a empezar.

:::note
Esto es una aproximación para una vista en vivo, no una imagen renderizada: los detalles pequeños entre los puntos reciben la luz rebotada de los puntos cercanos.
:::

:::note
Los navegadores difieren. Donde el navegador tiene WebGPU, la vista en vivo lo usa; en otros casos usa WebGL 2 y se ve igual. Si no hay ninguno, el panel lo indica.
:::
