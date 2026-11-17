---
title: Cortar un modelo IFC con un plano de sección
summary: Cortá el modelo 3D desde arriba, de frente o de lado, o conservá solo lo que está dentro de una caja de sección o de un volumen de varias cajas con caras inclinadas, para ver el interior; mové el corte arrastrando o escribiendo, invertilo, y elegí lo que muestra el corte.
keywords: sección, plano de sección, caja de sección, agarraderas, arrastrar, margen, cuadro de selección, caja de recorte, corte, recorte, rebanada, corte de planta, planta, elevación, interior, invertir, desplazamiento, volumen de sección, sección escalonada, en L, inclinación, corte oblicuo, plano adicional
from: 6315e71a
---

## Lo que vas a hacer

Cortá un modelo IFC con un plano para ver su interior: desde arriba para una planta, o de frente o de lado para una sección a través del edificio.

## Pasos

1. Abrí un modelo IFC. Ver [Abrir un modelo IFC y mirarlo en 3D](topic:open-ifc-model).
2. Hacé clic en {{ui:Sección}} en la barra de herramientas, o presioná {{key:X}}. El modelo se corta a mitad de altura, y aparece una barra debajo de la barra de herramientas.
3. Elegí desde dónde cortar: {{ui:Arriba}}, {{ui:Frente}} o {{ui:Lateral}}. Frente y Lateral también giran la vista para mirar el corte.
4. Mové el corte: arrastrá el control deslizante **Desplazamiento**, o escribí una distancia en metros en el cuadro y presioná {{key:Enter}}. También podés escribir milímetros, por ejemplo `1200 mm`.
5. Hacé clic en {{ui:Invertir}} para conservar el otro lado del corte.
6. Hacé clic en un elemento sobre el corte para ver sus propiedades.
7. Hacé clic en {{ui:Desactivado}}, hacé clic en {{ui:Sección}} otra vez, o presioná {{key:X}} para quitar el corte.

## Una caja de sección

Hacé clic en {{ui:Caja}} en la misma barra para conservar solo lo que está dentro de una caja. Cada una de {{ui:X}}, {{ui:Y}} y {{ui:Z}} tiene dos controles deslizantes: dónde empieza la caja y dónde termina, en metros desde el borde del modelo. Los valores se muestran al lado.

- {{ui:Caja alrededor de la selección}} ajusta la caja alrededor de los elementos que elegiste y hace zoom sobre ellos. Deja 300 mm de margen en cada lado; cambialo en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Espacio alrededor de la elección}}.
- Con elementos seleccionados, {{ui:Mostrar}} › {{ui:Caja de sección alrededor de la selección}} o {{key:Shift+X}} hace lo mismo en un paso, incluso cuando no hay corte activo.
- Las **agarraderas** de la caja la mueven con el puntero: arrastrá un cuadrado en el medio de una cara para mover esa cara, uno en el medio de un borde para mover las dos caras que se encuentran allí, o uno en una esquina para mover las tres. Los controles deslizantes siguen el movimiento. En {{ui:Arriba}} una esquina mueve la caja en planta; en {{ui:Frente}} o {{ui:Lateral}}, en elevación.
- {{ui:Modelo completo}} vuelve a abrir la caja para todo el modelo.
- {{ui:Arriba}}, {{ui:Frente}} o {{ui:Lateral}} vuelven a un solo plano.

## Un volumen de varias cajas, caras inclinadas y planos adicionales

Una caja no siempre es la forma que necesitás: una sección escalonada, un ala en L, o un corte a lo largo de un muro que no está a escuadra con la cuadrícula.

1. En {{ui:Caja}}, hacé clic en {{ui:Agregar una caja}}. El corte ahora conserva lo que está dentro de **cualquiera** de las cajas, así que dos cajas forman un volumen escalonado o en L. La lista al lado indica a qué caja afectan los controles ({{ui:Caja 1}}, {{ui:Caja 2}}…); {{ui:Quitar esta caja}} quita la elegida. Un volumen admite hasta 8 cajas.
2. Abrí {{ui:Inclinación y planos}} para dar forma a la caja elegida:
   - Elegí una {{ui:Cara}} y escribí cuánto se inclina en cada sentido, en grados (hasta 80). La cara gira alrededor de su centro; las demás caras quedan donde las ubicaron los controles. {{ui:Cuadrar}} la devuelve a su posición.
   - {{ui:Agregar un plano}} corta la caja con un plano más. {{ui:Caras}} es hacia dónde mira el lado cortado, en grados desde X hacia Y; {{ui:Pendiente}} es cuánto se inclina hacia arriba (0 para un plano vertical, 90 para uno horizontal); {{ui:Desplazamiento}} es la distancia del plano al centro de la caja, en metros. × lo quita. Una caja admite hasta 6 planos adicionales.
3. Donde el volumen corta sólidos, las caras cortadas se rellenan como antes, también donde se encuentran dos cajas en un escalón.

:::tip
Si el contorno desaparece y no queda nada, las inclinaciones o los planos no dejan nada dentro de esa caja; la barra lo indica. Incliná una cara hacia atrás o cambiá el desplazamiento de un plano.
:::

## Un edificio girado en su sitio

Muchos modelos ubican el edificio en un ángulo respecto a los ejes del archivo (norte verdadero, coordenadas compartidas). Cuando los muros van en ángulo, una nueva sección empieza a escuadra con el edificio: {{ui:Frente}}, {{ui:Lateral}} y la caja siguen sus propios muros, y {{ui:Derecho respecto al edificio}} en la barra de sección queda activado. Hacé clic en él para usar los ejes del modelo, y otra vez para volver (la línea de estado indica cuánto está girado el edificio). Con **Configuración › BimCraft › Un edificio girado en su sitio › Como está ubicado en el sitio**, las secciones y las vistas empiezan en cambio con los ejes del modelo. Ver [Configuración](topic:settings).

## Qué deberías ver

- **Arriba** conserva lo que está debajo del corte, así que mirás hacia abajo dentro de los ambientes. El desplazamiento se mide hacia arriba desde la base del modelo.
- **Frente** conserva lo que está detrás del corte, visto de frente; **Lateral** conserva lo que está más allá, visto de lado. El desplazamiento se mide desde el frente o el lateral del modelo.
- Un contorno delgado de color muestra dónde está el plano.
- Donde el plano corta un muro, una losa u otro sólido, la cara cortada se rellena en un color oscuro, como una sección dibujada. {{ui:Relleno}} en la barra lo activa y desactiva.
- El cubo de vista en la esquina inferior derecha gira el modelo para mirar el corte desde cualquier lado.
- Al hacer clic se elige lo que se ve: lo que está cortado no se puede seleccionar.

## Errores comunes

- **No cambió nada.** Puede que el corte esté por encima de la cubierta o fuera del modelo. Arrastrá el control deslizante, o escribí un desplazamiento menor.
- **El desplazamiento volvió atrás.** Una distancia más allá del modelo se lleva a su extremo, y la línea de estado lo indica.
- **Una incidencia muestra solo una parte de mi volumen.** Una incidencia (BCF) conserva una caja con sus caras inclinadas y planos: la primera caja del volumen. La línea de estado lo indica al crear la incidencia.
- **El corte está hueco.** {{ui:Relleno}} en la barra está desactivado: hacé clic para rellenar las caras cortadas de muros, losas y otros sólidos.
- **Un corte rellenado se ve moteado o le falta una parte.** El relleno necesita sólidos cerrados; un elemento cuya forma en el archivo no está cerrada (una sola hoja, follaje de árbol) queda sin rellenar en lugar de pintarse encima. Un elemento hecho de partes de distintos colores (un marco y su vidrio) se rellena cuando sus partes se tocan.
- **¿Dónde está la barra de sección?** Está arriba de la vista 3D que corta: en la mitad 3D en {{ui:Dividido}}, y debajo de la barra de dibujo en {{ui:Planta}} sola. En una vista baja se desplaza.

## Siguiente

- [Mostrar y ocultar pisos, espacios y bordes](topic:storeys-and-spaces)
- [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d) — los dibujos en 3D tienen el mismo plano de sección
