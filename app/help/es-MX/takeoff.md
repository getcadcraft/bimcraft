---
title: Cantidades a TakeoffCraft
summary: Un clic envía las cantidades del modelo a TakeoffCraft: muros por tipo, techos por área inclinada, cumbreras, limatones y limahoyas, cimentaciones, puertas y ventanas, gabinetes, dispositivos eléctricos, área de piso y la lista de corte de madera, marcadas en una planta de cada nivel, con los ensambles de los paquetes de oficio en los conceptos.
keywords: cuantificación, cuantificación de cantidades, presupuesto, estimación, estimar, lista de materiales, takeoffcraft, cantidades, área de muro, área de techo, cuadros, zapata, concreto, yardas cúbicas, lista de corte, madera, paquete de oficio, ensamble
from: c5a745af
---

## Qué hará

Convierta el modelo en una lista de materiales y un presupuesto en TakeoffCraft. BimCraft dibuja una planta de cada nivel a una escala estándar, marca cada cantidad en ella y pone la cuantificación dentro del PDF. TakeoffCraft mide las marcas por sí mismo, así que cada número puede verificarse en la hoja.

## Enviarla

1. Haga clic en {{ui:Cuantificación}} en la barra del modelo (junto a {{ui:Hojas}}).
2. TakeoffCraft se abre en una pestaña nueva con las plantas. Cuando lo pregunte, elija abrir la cuantificación que encontró en el PDF.
3. Agregue sus precios en la tabla de cantidades de TakeoffCraft; los ensambles ya enumeran los materiales.

:::note
Cuando TakeoffCraft no está disponible aquí, el botón descarga el PDF. Ábralo en TakeoffCraft después: encuentra la cuantificación dentro.
:::

## Qué se mide

- **Muros** por tipo y altura: sus ejes como tramos, con la altura del muro en el concepto, para que TakeoffCraft calcule la longitud y el área del muro. Cada tramo lleva las puertas y ventanas del muro, así que TakeoffCraft las descuenta del área del muro una sola vez, con la misma regla que las tablas de BimCraft: ambas coinciden en bruto, deducciones y neto. Los datos de cuantificación de un tipo de muro (unidad, mortero, tarifa; vea [Ensambles de muro](topic:wall-assemblies)) llegan como una partida con precio en el concepto de ese tipo. Con un método de medición distinto al predeterminado (vea [Elegir un método de medición](topic:plan-schedules-and-pdf#choose-a-measurement-method)), la cuantificación lleva el método, cada tramo lleva lo que las uniones descuentan de su cara de muro, y TakeoffCraft mide con el mismo método y lo nombra. Un tipo cuya unidad tiene longitud y altura entrega dos componentes con cantidades: las unidades a pedir y el volumen de mortero, con precio cuando la tarifa del tipo es por unidad, por cada 1000 unidades o por m³ de mortero. Un conteo que cae exactamente en un número entero puede ser una unidad mayor en TakeoffCraft, porque la entrega redondea las posiciones en la hoja.
- **Techos**: cada plano de techo como un área con su pendiente (TakeoffCraft da el área inclinada), cumbreras, limatones y limahoyas (limatones y limahoyas a lo largo de su pendiente), aleros y aleros laterales.
- **Cimentaciones**: zapatas y muros de cimentación como tramos a lo largo de su eje, losas como áreas con su espesor, de modo que el concreto sale por volumen.
- **Puertas y ventanas** contadas por tipo, con marcos de ventana.
- **Gabinetes** bajos por la longitud de sus frentes.
- **Dispositivos eléctricos** contados por tipo.
- **Área de piso** de cada nivel, a partir de sus habitaciones.
- **La lista de corte de madera** a partir de la estructura, contada en una hoja propia (un punto por pieza).

Cuando un paquete de oficio tiene un ensamble correspondiente —muros exteriores e interiores, losas, zapatas, muros de cimentación, tejas, cumbrera y limatón, limahoyas, aleros, puertas interiores, marcos de ventana, gabinetes bajos, contactos, apagadores, luminarias, cajas de conexión y el tablero— el concepto llega con sus materiales y fórmulas. Los paquetes llegan sin precios y aún no han sido revisados por un estimador.

:::tip
Las plantas se generan cada vez a partir del modelo al hacer clic, así que después de un cambio sólo haga clic en {{ui:Cuantificación}} otra vez.
:::
