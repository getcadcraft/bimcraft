---
title: Cantidades para TakeoffCraft
summary: Con un clic las cantidades del modelo van a TakeoffCraft — muros por tipo, techos por superficie inclinada, cumbreras, limatesas y limahoyas, cimientos, puertas y ventanas, muebles bajos, dispositivos eléctricos, superficie del piso y la lista de corte de madera — marcadas en un plano de cada nivel, con los conjuntos de los paquetes de oficio en los ítems.
keywords: cómputo, cómputo de cantidades, presupuesto, estimación, lista de materiales, lista de cantidades, takeoffcraft, cantidades, superficie de muro, superficie de techo, cuadrados, zapata, hormigón, metros cúbicos, lista de corte, madera, paquete de oficio, conjunto
from: c5a745af
---

## Mba'épa oñemboguáta

Convertí el modelo en una lista de materiales y un presupuesto en TakeoffCraft. BimCraft dibuja un plano de cada nivel a una escala estándar, marca cada cantidad en él, y pone el cómputo dentro del PDF. TakeoffCraft mide las marcas por sí mismo, así que cada número se puede verificar en la hoja.

## Enviarlo

1. Haga clic en {{ui:Cómputo}} en la barra del modelo (al lado de {{ui:Hojas}}).
2. TakeoffCraft se abre en una pestaña nueva con los planos. Cuando pregunta, elegí abrir el cómputo que encontró en el PDF.
3. Agregá tus precios en la tabla de cantidades de TakeoffCraft; los conjuntos ya listan los materiales.

:::note
Cuando TakeoffCraft no está disponible acá, el botón descarga el PDF en cambio. Abrilo en TakeoffCraft después: encuentra el cómputo dentro.
:::

## Qué se mide

- **Muros** por tipo y altura: sus ejes como tramos, con la altura del muro en el ítem, para que TakeoffCraft dé el largo y la superficie del muro. Cada tramo lleva las puertas y ventanas del muro, así que TakeoffCraft las saca de la superficie del muro una vez, con la misma regla que las planillas de BimCraft: las dos coinciden en bruto, deducciones y neto. Los datos de cómputo de un tipo de muro (unidad, mortero, tarifa; ver [Wall assemblies](topic:wall-assemblies)) vienen como una línea con precio en el ítem de ese tipo. Con un método de medición distinto al predeterminado (ver [Choose a measurement method](topic:plan-schedules-and-pdf#choose-a-measurement-method)), el cómputo lleva el método, cada tramo lleva lo que las uniones descuentan de su cara de muro, y TakeoffCraft mide con el mismo método y lo nombra. Un tipo cuya unidad tiene largo y altura entrega dos componentes con cantidades: las unidades a pedir y el volumen de mortero, con precio cuando la tarifa del tipo es por unidad, por 1000 unidades o por m³ de mortero. Una cantidad que cae exactamente en un número entero puede ser una unidad más en TakeoffCraft, porque la entrega redondea las posiciones en la hoja.
- **Techos**: cada plano del techo como superficie con su pendiente (TakeoffCraft da la superficie inclinada), cumbreras, limatesas y limahoyas (las limatesas y limahoyas a lo largo de su pendiente), aleros y rakes.
- **Cimientos**: zapatas y muros de cimiento como tramos que pasan por su medio, losas como superficies con su espesor, para que el hormigón salga por volumen.
- **Puertas y ventanas** contadas por tipo, con marcos de ventana.
- **Muebles bajos** por el largo de sus frentes.
- **Dispositivos eléctricos** contados por tipo.
- **Superficie de piso** de cada nivel, a partir de sus ambientes.
- **La lista de corte de madera** a partir del entramado, contada en una hoja propia (un punto por pieza).

Cuando un paquete de oficio tiene un conjunto que coincide — muros exteriores e interiores, losas, zapatas, muros de cimiento, tejas, cumbrera y limatesa, limahoyas, aleros, puertas interiores, marcos de ventana, muebles bajos, tomas, interruptores, luces, cajas de paso y el tablero — el ítem viene con sus materiales y fórmulas. Los paquetes vienen sin precios y todavía no fueron revisados por un presupuestista.

:::tip
Los planos se hacen con el modelo cada vez que hacés clic, así que después de un cambio, hacé clic en {{ui:Cómputo}} otra vez.
:::
