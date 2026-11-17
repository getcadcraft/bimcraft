---
title: Cantidades a TakeoffCraft
summary: Un clic envía las cantidades del modelo a TakeoffCraft: muros por tipo, cubiertas por superficie inclinada, cumbreras, limatesas y limahoyas, cimentaciones, puertas y ventanas, muebles bajos, dispositivos eléctricos, superficie de planta y la lista de corte de madera, marcadas en un plano de cada nivel, con los conjuntos de partidas de los paquetes de oficios en los elementos.
keywords: cuantificación, cuantificación de cantidades, estimación, estimar, presupuesto, lista de materiales, lista de materiales de obra, takeoffcraft, cantidades, superficie de muro, superficie de cubierta, cuadros de tejado, cimentación, hormigón, metros cúbicos, lista de corte, madera, paquete de oficio, conjunto de partidas
from: c5a745af
---

## Qué hará

Convierta el modelo en una lista de materiales y un presupuesto en TakeoffCraft. BimCraft dibuja un plano de cada nivel a una escala estándar, marca en él cada cantidad y pone la cuantificación dentro del PDF. TakeoffCraft mide las marcas por sí mismo, así que cada número se puede comprobar en la hoja.

## Enviar

1. Haga clic en {{ui:Cuantificación}} en la barra del modelo (junto a {{ui:Hojas}}).
2. TakeoffCraft se abre en una pestaña nueva con los planos. Cuando lo pida, elija abrir la cuantificación que encontró en el PDF.
3. Añada sus precios en la tabla de cantidades de TakeoffCraft; los conjuntos de partidas ya enumeran los materiales.

:::note
Si TakeoffCraft no está disponible aquí, el botón descarga el PDF en su lugar. Ábralo en TakeoffCraft más tarde: encuentra la cuantificación que contiene.
:::

## Qué se mide

- **Muros** por tipo y altura: sus ejes como tramos, con la altura del muro en el elemento, de modo que TakeoffCraft da la longitud y la superficie del muro. Cada tramo lleva las puertas y ventanas del muro, así que TakeoffCraft las descuenta una vez de la superficie del muro, con la misma regla que las tablas de BimCraft: ambas coinciden en bruto, deducciones y neto. Los datos de cuantificación de un tipo de muro (unidad, mortero, precio unitario; consulte [Conjuntos de muros](topic:wall-assemblies)) se incluyen como una línea con precio en el elemento de ese tipo. Con un método de medición distinto del predeterminado (consulte [Elegir un método de medición](topic:plan-schedules-and-pdf#choose-a-measurement-method)), la cuantificación lleva el método, cada tramo lleva lo que las uniones descuentan de su cara de muro, y TakeoffCraft mide con el mismo método y lo indica. Un tipo cuya unidad tiene longitud y altura entrega dos componentes con cantidades: las unidades a pedir y el volumen de mortero, con precio cuando el precio del tipo es por unidad, por 1000 unidades o por m³ de mortero. Un recuento que cae exactamente en un número entero puede salir una unidad más en TakeoffCraft, porque la entrega redondea las posiciones en la hoja.
- **Cubiertas**: cada plano de cubierta como una superficie con su pendiente (TakeoffCraft da la superficie inclinada), cumbreras, limatesas y limahoyas (las limatesas y las limahoyas a lo largo de su pendiente), aleros y aleros laterales.
- **Cimentaciones**: zapatas y muros de cimentación como tramos a lo largo de su eje; losas como superficies con su espesor, de modo que el hormigón sale por volumen.
- **Puertas y ventanas** contadas por tipo, con cercos de ventana.
- **Muebles bajos de cocina** por la longitud de sus frentes.
- **Dispositivos eléctricos** contados por clase.
- **Superficie de planta** de cada nivel, a partir de sus habitaciones.
- **La lista de corte de madera** del entramado, contada en una hoja propia (un punto por pieza).

Cuando un paquete de oficios tiene un conjunto de partidas equivalente —muros exteriores e interiores, losas, zapatas, muros de cimentación, tejas, remate de cumbrera y limatesa, limahoyas, aleros, puertas interiores, cercos de ventana, muebles bajos, tomas de corriente, interruptores, luminarias, cajas de conexión y el cuadro—, el elemento incluye sus materiales y fórmulas. Los paquetes vienen sin precios y todavía no han sido revisados por un estimador.

:::tip
Los planos se generan cada vez que hace clic a partir del modelo, así que tras un cambio basta con volver a hacer clic en {{ui:Cuantificación}}.
:::
