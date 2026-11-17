---
title: Cortar un modelo IFC con un plano de sección
summary: Corte el modelo 3D desde arriba, de frente o de lado, o conserve solo lo que está dentro de una caja de sección o de un volumen de varias cajas con caras inclinadas, para ver el interior; mueva el corte arrastrando o escribiendo, inviértalo y elija lo que muestra el corte.
keywords: sección, plano de sección, caja de sección, pinzamientos, arrastrar, margen, caja de selección, caja de recorte, corte, recorte, rebanar, corte de planta, planta, elevación, interior, invertir, desfase, volumen de sección, sección escalonada, en L, inclinar, corte inclinado, plano oblicuo, plano adicional
from: 6315e71a
---

## Qué hará

Corte un modelo IFC con un plano para ver su interior: desde arriba para una planta, o de frente o de lado para una sección a través del edificio.

## Pasos

1. Abra un modelo IFC. Vea [Abrir un modelo IFC y recorrerlo en 3D](topic:open-ifc-model).
2. Haga clic en {{ui:Sección}} en la barra de herramientas, o presione {{key:X}}. El modelo se corta a media altura y aparece una barra bajo la barra de herramientas.
3. Elija desde dónde cortar: {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}}. Frontal y Lateral también giran la vista para mirar el corte.
4. Mueva el corte: arrastre el control deslizante **Desfase**, o escriba una distancia en metros en la casilla y presione {{key:Enter}}. También puede escribir milímetros, por ejemplo `1200 mm`.
5. Haga clic en {{ui:Invertir}} para conservar el otro lado del corte.
6. Haga clic en un elemento sobre el corte para ver sus propiedades.
7. Haga clic en {{ui:Desactivado}}, haga clic de nuevo en {{ui:Sección}}, o presione {{key:X}} para quitar el corte.

## Una caja de sección

Haga clic en {{ui:Caja}} en la misma barra para conservar solo lo que está dentro de una caja. Cada uno de {{ui:X}}, {{ui:Y}} y {{ui:Z}} tiene dos controles deslizantes: dónde empieza la caja y dónde termina, en metros desde el borde del modelo. Los valores se muestran junto a ellos.

- {{ui:Caja alrededor de la selección}} ajusta la caja alrededor de los elementos que designó y hace zoom a ellos. Deja 300 mm de holgura en cada lado; cámbielo en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Holgura alrededor de lo designado}}.
- Con elementos designados, {{ui:Mostrar}} › {{ui:Caja de sección alrededor de lo designado}} o {{key:Shift+X}} hace lo mismo en un paso, aun cuando no haya corte activo.
- Los **pinzamientos** de la caja la mueven con el puntero: arrastre un cuadrado en el centro de una cara para mover esa cara, uno en el centro de una arista para mover las dos caras que se unen ahí, o uno en una esquina para mover las tres. Los controles deslizantes siguen el movimiento. En {{ui:Superior}}, una esquina mueve la caja en planta; en {{ui:Frontal}} o {{ui:Lateral}}, en elevación.
- {{ui:Todo el modelo}} vuelve a abrir la caja a todo el modelo.
- {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}} regresan a un solo plano.

## Un volumen de varias cajas, caras inclinadas y planos adicionales

Una caja no siempre es la forma que necesita: una sección escalonada, un ala en forma de L, o un corte a lo largo de un muro que no está a escuadra con la cuadrícula.

1. En {{ui:Caja}}, haga clic en {{ui:Agregar una caja}}. El corte ahora conserva lo que está dentro de **cualquiera** de las cajas, así que dos cajas forman un volumen escalonado o en L. La lista junto a ella indica a qué caja cambian los controles ({{ui:Caja 1}}, {{ui:Caja 2}}…); {{ui:Quitar esta caja}} elimina la elegida. Un volumen admite hasta 8 cajas.
2. Abra {{ui:Inclinación y planos}} para dar forma a la caja elegida:
   - Elija una {{ui:Cara}} y escriba cuánto se inclina en cada sentido, en grados (hasta 80). La cara gira alrededor de su centro; las demás caras se quedan donde las dejaron los controles. {{ui:Cuadrado}} la regresa.
   - {{ui:Agregar un plano}} corta la caja con un plano más. {{ui:Caras}} es el lado hacia el que mira la parte cortada, en grados desde X hacia Y; {{ui:Inclinación}} es cuánto se inclina hacia arriba (0 para un plano vertical, 90 para uno horizontal); {{ui:Desfase}} es la distancia del plano al centro de la caja, en metros. × lo quita. Una caja admite hasta 6 planos adicionales.
3. Donde el volumen corta sólidos, las caras cortadas se rellenan como antes, también donde dos cajas se unen en un escalón.

:::tip
Si el contorno desaparece y no queda nada, las inclinaciones o los planos no dejan nada dentro de esa caja; la barra lo indica. Incline una cara hacia atrás o cambie el desfase de un plano.
:::

## Un edificio girado en su sitio

Muchos modelos colocan el edificio con un ángulo respecto a los ejes del archivo (norte verdadero, coordenadas compartidas). Cuando los muros van en ángulo, una sección nueva empieza a escuadra con el edificio: {{ui:Frontal}}, {{ui:Lateral}} y la caja siguen sus propios muros, y {{ui:A escuadra con el edificio}} en la barra de sección queda activado. Haga clic en él para volver a los ejes del modelo, y de nuevo para regresar (la línea de estado indica cuánto está girado el edificio). Con **Configuración › BimCraft › Un edificio girado en su sitio › Tal como está colocado en el sitio**, las secciones y las vistas empiezan en los ejes del modelo. Vea [Configuración](topic:settings).

## Qué debe ver

- **Superior** conserva lo que está debajo del corte, así que mira hacia abajo a los locales. El desfase se mide hacia arriba desde la base del modelo.
- **Frontal** conserva lo que queda detrás del corte, visto desde el frente; **Lateral** conserva lo que queda más allá, visto desde el lado. El desfase se mide desde el frente o el lado del modelo.
- Una línea delgada de color muestra dónde está el plano.
- Donde el plano corta un muro, losa u otro sólido, la cara cortada se rellena en un color oscuro, como un corte dibujado. {{ui:Relleno}} en la barra lo activa y desactiva.
- El cubo de vistas en la esquina inferior derecha gira el modelo para mirar el corte desde cualquier lado.
- Hacer clic designa lo que se ve: lo que está cortado no puede designarse.

## Errores comunes

- **Nada cambió.** El corte puede estar por encima de la cubierta o fuera del modelo. Arrastre el control deslizante, o escriba un desfase menor.
- **El desfase regresó.** Una distancia más allá del modelo se mueve a su extremo, y la línea de estado lo indica.
- **Un problema muestra solo parte de mi volumen.** Un problema (BCF) conserva una caja con sus caras inclinadas y planos: la primera caja de un volumen. La línea de estado lo indica al crear el problema.
- **El corte está hueco.** {{ui:Relleno}} en la barra está desactivado: haga clic para rellenar las caras cortadas de muros, losas y otros sólidos.
- **Un corte relleno se ve moteado o le falta una pieza.** El relleno requiere sólidos cerrados; un elemento cuya forma en el archivo no está cerrada (una sola lámina, follaje de árbol) se deja sin rellenar en lugar de pintarse encima. Un elemento hecho de piezas de distintos colores (un marco y su vidrio) se rellena cuando sus piezas se tocan.
- **¿Dónde está la barra de sección?** Está en la parte superior de la vista 3D que corta: en la mitad 3D con {{ui:Dividir}}, y bajo la barra de dibujo con {{ui:Planta}} sola. En una vista corta se desplaza.

## Siguiente

- [Mostrar y ocultar niveles, espacios y aristas](topic:storeys-and-spaces)
- [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d): los dibujos en 3D tienen el mismo plano de sección.
