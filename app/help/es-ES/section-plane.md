---
title: Cortar un modelo IFC con un plano de sección
summary: Corte el modelo 3D desde arriba, desde delante o de lado, o conserve solo lo que está dentro de una caja de sección o de un volumen de varias cajas con caras inclinadas, para ver el interior; mueva el corte arrastrando o escribiendo, inviértalo y elija lo que muestra.
keywords: sección, plano de sección, caja de sección, agarres, arrastrar, margen, caja de selección, caja de recorte, corte, recorte, seccionar, corte en planta, planta, alzado, interior, invertir, desfase, volumen de sección, sección escalonada, en L, inclinación, corte inclinado, plano oblicuo, plano adicional
from: 6315e71a
---

## Qué hará

Corte un modelo IFC con un plano para ver su interior: desde arriba para una planta, o desde delante o de lado para una sección a través del edificio.

## Pasos

1. Abra un modelo IFC. Véase [Abrir un modelo IFC y mirar alrededor en 3D](topic:open-ifc-model).
2. Haga clic en {{ui:Sección}} en la barra de herramientas, o pulse {{key:X}}. El modelo se corta a media altura, y aparece una barra bajo la barra de herramientas.
3. Elija desde dónde cortar: {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}}. Frontal y Lateral también giran la vista para mirar el corte.
4. Mueva el corte: arrastre el control deslizante **Desfase**, o escriba una distancia en metros en el cuadro y pulse {{key:Enter}}. También puede escribir milímetros, por ejemplo `1200 mm`.
5. Haga clic en {{ui:Invertir}} para conservar el otro lado del corte.
6. Haga clic en un elemento del corte para ver sus propiedades.
7. Haga clic en {{ui:Desactivado}}, vuelva a hacer clic en {{ui:Sección}} o pulse {{key:X}} para quitar el corte.

## Una caja de sección

Haga clic en {{ui:Caja}} en la misma barra para conservar solo lo que está dentro de una caja. Cada una de {{ui:X}}, {{ui:Y}} y {{ui:Z}} tiene dos controles deslizantes: dónde empieza la caja y dónde termina, en metros desde el borde del modelo. Los valores se muestran junto a ellos.

- {{ui:Caja alrededor de la selección}} ajusta la caja a los elementos que haya elegido y hace zoom sobre ellos. Deja 300 mm de margen en cada lado; cámbielo en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Holgura alrededor de lo designado}}.
- Con elementos elegidos, {{ui:Mostrar}} › {{ui:Caja de sección alrededor de lo designado}} o {{key:Shift+X}} hace lo mismo en un paso, incluso cuando no hay corte activado.
- Los **agarres** de la caja la mueven con el puntero: arrastre un cuadrado en el centro de una cara para mover esa cara, uno en el centro de una arista para mover las dos caras que se encuentran allí, o uno en una esquina para mover las tres. Los controles deslizantes siguen el movimiento. En {{ui:Superior}} una esquina mueve la caja en planta; en {{ui:Frontal}} o {{ui:Lateral}}, en alzado.
- {{ui:Todo el modelo}} abre la caja a todo el modelo de nuevo.
- {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}} vuelven a un solo plano.

## Un volumen de varias cajas, caras inclinadas y planos adicionales

Una caja no siempre es la forma que necesita: una sección escalonada, un ala en L o un corte a lo largo de un muro que no está en escuadra con la cuadrícula.

1. En {{ui:Caja}}, haga clic en {{ui:Agregar una caja}}. El corte conserva lo que está dentro de **cualquiera** de las cajas, así que dos cajas forman un volumen escalonado o en L. La lista junto a ella indica a qué caja afectan los controles deslizantes ({{ui:Caja 1}}, {{ui:Caja 2}}…); {{ui:Quitar esta caja}} quita la elegida. Un volumen admite hasta 8 cajas.
2. Abra {{ui:Inclinación y planos}} para dar forma a la caja elegida:
   - Elija una {{ui:Cara}} y escriba cuánto se inclina en cada sentido, en grados (hasta 80). La cara gira alrededor de su centro; las demás caras se quedan donde las fijaron los controles deslizantes. {{ui:A escuadra}} la devuelve a su sitio.
   - {{ui:Agregar un plano}} corta la caja con un plano más. {{ui:Caras}} es el sentido hacia el que mira el lado cortado, en grados desde X hacia Y; {{ui:Inclinación}} es cuánto gira hacia arriba (0 para un plano vertical, 90 para uno horizontal); {{ui:Desfase}} es la distancia del plano al centro de la caja, en metros. × lo quita. Una caja admite hasta 6 planos adicionales.
3. Cuando el volumen corta sólidos, las caras cortadas se rellenan como antes, también donde dos cajas se unen en un escalón.

:::tip
Si el contorno desaparece y no queda nada, las inclinaciones o los planos no dejan nada dentro de esa caja; la barra lo indica. Incline una cara hacia atrás o cambie el desfase de un plano.
:::

## Un edificio girado en su emplazamiento

Muchos modelos colocan el edificio con un ángulo respecto a los ejes del archivo (norte verdadero, coordenadas compartidas). Cuando los muros van en ángulo, una nueva sección empieza en escuadra con el edificio: {{ui:Frontal}}, {{ui:Lateral}} y la caja siguen sus propios muros, y {{ui:A escuadra con el edificio}} en la barra de sección está activado. Haga clic en él para volver a los ejes del modelo, y de nuevo para regresar (la línea de estado indica cuánto está girado el edificio). Con **Configuración › BimCraft › Un edificio girado en su emplazamiento › Tal como está colocado en el emplazamiento**, las secciones y las vistas empiezan en los ejes del modelo. Véase [Configuración](topic:settings).

## Lo que debe ver

- **Superior** conserva lo que queda debajo del corte, así que mira hacia las habitaciones desde arriba. El desfase se mide hacia arriba desde la base del modelo.
- **Frontal** conserva lo que queda detrás del corte, visto desde delante; **Lateral** conserva lo que queda más allá, visto de lado. El desfase se mide desde el frente o el lado del modelo.
- Un contorno fino de color muestra dónde está el plano.
- Donde el plano corta un muro, una losa u otro sólido, la cara cortada se rellena en un color oscuro, como una sección dibujada. {{ui:Relleno}} en la barra lo activa y lo desactiva.
- El cubo de vistas en la esquina inferior derecha gira el modelo para mirar el corte desde cualquier lado.
- Al hacer clic se elige lo que se ve: lo que está cortado no se puede elegir.

## Errores frecuentes

- **No cambió nada.** Puede que el corte esté por encima de la cubierta o fuera del modelo. Arrastre el control deslizante o escriba un desfase menor.
- **El desfase volvió atrás.** Una distancia más allá del modelo se lleva a su extremo, y la línea de estado lo indica.
- **Una incidencia muestra solo parte de mi volumen.** Una incidencia (BCF) conserva una caja con sus caras inclinadas y planos: la primera caja del volumen. La línea de estado lo indica al crear la incidencia.
- **El corte está hueco.** {{ui:Relleno}} en la barra está desactivado: haga clic para rellenar las caras cortadas de muros, losas y otros sólidos.
- **Un corte relleno se ve moteado o le falta una pieza.** El relleno necesita sólidos cerrados; un elemento cuya forma en el archivo no está cerrada (una sola lámina, follaje de árbol) se deja sin rellenar en lugar de pintarse encima. Un elemento hecho de partes de distintos colores (un marco y su vidrio) se rellena cuando sus partes se cierran juntas.
- **¿Dónde está la barra de sección?** Está en la parte superior de la vista 3D que corta: en la mitad 3D de {{ui:Dividir}}, y bajo la barra de dibujo en {{ui:Planta}} sola. En una vista baja se desplaza.

## Siguiente

- [Mostrar y ocultar plantas, espacios y aristas](topic:storeys-and-spaces)
- [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d): los dibujos en 3D tienen el mismo plano de sección
