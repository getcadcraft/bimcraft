---
title: Estime la luz natural de cada habitación
summary: El factor medio de luz natural de cada habitación a partir de sus ventanas, sus superficies interiores y el cielo que ve cada ventana, con el ángulo de cielo medido en el modelo. Una estimación de diseño temprano, no una simulación ni una verificación normativa.
keywords: luz natural, factor de luz natural, factor medio de luz natural, adf, componente vertical de cielo, vsc, ganancia solar, sol, valor g, retícula, flujo dividido, componente de cielo, componente reflejada internamente, iluminación natural, ventana, acristalamiento, ángulo de cielo, obstrucción, sombra, balcón, voladizo, reflectancia, transmitancia, diseño temprano, análisis, habitaciones, espacios
from: 5f300a78
---

La pestaña {{ui:Luz natural}} del panel derecho calcula el **factor medio de luz natural** de cada habitación: qué parte de la luz de un cielo nublado exterior llega a la habitación, en promedio, como porcentaje. Lee las habitaciones (espacios) y las ventanas del modelo IFC abierto. No se cambia nada en el modelo y no se sube nada.

:::warning
Todo lo de esta pestaña es **una ayuda de diseño, no un cálculo de cumplimiento**: estimaciones de diseño temprano por métodos publicados, **no una simulación** y **no una verificación contra un código de construcción o una norma**. BS EN 17037, LEED, BREEAM y los códigos de energía piden una simulación de luz natural con el clima del lugar; para esos casos use un programa de simulación de luz natural.
:::

## Cómo calcularlo

1. Abra un modelo IFC que tenga habitaciones (espacios) y ventanas. Los modelos dibujados aquí tienen una habitación dentro de cada conjunto cerrado de muros.
2. Abra la pestaña {{ui:Luz natural}} y haga clic en {{ui:Calcular}}.
3. Cada habitación muestra su factor de luz natural y una banda: menos de 2 %, de 2 a 5 %, 5 % o más. Haga clic en una habitación para ver sus superficies y el área y el ángulo de cielo de cada ventana; la habitación y sus ventanas se seleccionan en el modelo.

Cambie una entrada y los números se actualizan al instante; después de cambiar el modelo, haga clic en {{ui:Calcular de nuevo}}. {{ui:CSV}} guarda cada habitación con sus números y las entradas usadas.

## La fórmula

Factor medio de luz natural (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumado sobre las ventanas de la habitación (fórmula de Littlefair, usada por BRE 209, BS 8206-2 y CIBSE LG10):

- **T**, la transmitancia de luz del vidrio (0.7 para empezar: use el dato del fabricante).
- **Ag**, el área acristalada: el área de cada ventana (su ancho total × alto, o si no, su tamaño en el modelo) × la **proporción acristalada** (0.75 para empezar: el resto es marco).
- **θ**, el ángulo de cielo que ve la ventana, en grados (abajo).
- **M**, el factor de mantenimiento por suciedad en el vidrio (1 para empezar).
- **A**, cada superficie interior de la habitación: piso, muros, techo y ventanas, tomada de la forma propia de la habitación.
- **R**, su reflectancia media, ponderada por área: piso 0.2, muros 0.5, techo 0.7 para empezar; el vidrio cuenta como 0.1.

## Cómo se mide el ángulo de cielo

Para cada ventana, BimCraft corta el modelo con un plano vertical perpendicular a la ventana, desde la cara exterior del vidrio, y mira desde el horizonte directamente hacia arriba: todo lo que el corte encuentra delante de la ventana (un edificio enfrente, un balcón o un voladizo arriba, el alero) oculta parte de esos 90°. θ es lo que queda. La propia ventana y el muro donde está se excluyen. Lo hace en cinco puntos a lo ancho de la ventana y toma la media, así que un poste delgado delante del centro toma su parte, no todo el cielo.

Un edificio 8.5 m por encima del centro de la ventana y a 9.9 m de distancia oculta 40.65° (el ángulo cuya tangente es 8.5 ÷ 9.9), dejando θ = 49.35°.

## Componente vertical de cielo de cada ventana

{{ui:Calcular}} también mide, para cada ventana, lo que ve de todo el cielo: el mismo corte vertical, girado a cada dirección frente a la ventana (cada 2°, de un lado a otro), de modo que un edificio a un lado, una aleta o un derrame profundo toman su parte. A partir de eso BimCraft calcula el **componente vertical de cielo (VSC)**: qué parte de la luz del cielo nublado llega al vidrio, como proporción de lo que recibiría un techo plano abierto. Una ventana sin nada delante recibe **39.6 %**, lo máximo que puede una ventana vertical; un edificio largo que se eleva 25° por encima de la ventana deja cerca de **27 %**, la cifra que la guía británica (BRE 209) usa como regla práctica. Cada ventana en el detalle de una habitación muestra su VSC y su **ángulo de obstrucción** (qué tan alto se elevan las cosas justo delante de ella).

El cielo es el cielo nublado estándar CIE, que es tres veces más brillante justo arriba que en el horizonte, y el corte es exacto: no se muestrea nada.

## El sol por las ventanas en una fecha

Abra {{ui:El sol por las ventanas en una fecha}} y elija una fecha. BimCraft sigue al sol durante ese día en cuartos de hora y suma, para cada ventana, el calor que el sol trae a través del vidrio:

- el **sol directo**, cuando está delante de la ventana y nada en el modelo lo oculta (el mismo corte exacto, girado hacia el sol: un balcón que da sombra al sol alto del verano al mediodía deja entrar el sol bajo del invierno);
- la **luz del cielo** sobre el vidrio, menos lo que la ventana no puede ver;
- la luz **reflejada desde el suelo** (su reflectancia: 0.2 para empezar);
- todo pasado por el **valor g** del vidrio (la parte de la energía del sol que deja pasar: 0.6 para empezar; use el dato del fabricante) y su proporción acristalada.

Cada habitación muestra el total del día en kWh y su pico en watts con la hora; el detalle de una habitación dibuja el día como gráfica. El cielo es despejado según el modelo de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), con las cifras de verano o invierno del lugar y de la temporada, y con la altura del sitio; la posición del sol es la de NOAA. La latitud y la longitud del sitio vienen del sitio del IFC, y el norte viene del norte verdadero del modelo; si el modelo no tiene sitio, escriba una latitud y una longitud. Las horas son de hora estándar (sin horario de verano) en la zona horaria que escriba, o si no, la que sugiere la longitud.

Lo que no incluye: nubes (es un día despejado), que el vidrio deje pasar menos luz a ángulos bajos, marcos que dan sombra al vidrio, persianas, y lo que absorben los muros y la cubierta. La estimación de enfriamiento de la misma pestaña usa el pico.

## El factor de luz natural en una retícula

Abra {{ui:Factor de luz natural en una retícula}} y {{ui:Calcular la retícula}}: BimCraft tiende una retícula sobre el piso de cada habitación a la altura del plano de trabajo (0.85 m para empezar), a medio metro hacia dentro de los muros, y calcula el factor de luz natural en cada punto por el **método de flujo dividido de BRE**:

- el **componente de cielo**: el cielo nublado visto desde el punto a través de la abertura de cada ventana, menos los marcos;
- el **componente reflejado externamente**: lo que el punto ve de los edificios exteriores a través de la ventana, que brillan a una décima parte del cielo detrás de ellos (cambie el brillo de las obstrucciones si son mucho más claras u oscuras);
- el **componente reflejado internamente**: la luz que rebota dentro de la habitación, según las superficies y reflectancias de la habitación, el área de las ventanas y cuánto queda fuera de ellas (la fórmula de BRE, con la transmitancia del vidrio en lugar del vidrio claro que supone).

Cada habitación muestra su media, su punto más bajo y qué parte recibe 2 % o más; el detalle de una habitación dibuja su planta con cada punto coloreado según su factor de luz natural y las ventanas en rojo. Para que funcione rápido en cualquier computadora, una habitación recibe como máximo **400 puntos**: en una habitación grande la separación aumenta para ajustarse (escriba una separación para elegir la suya).

## Lo que no incluye

- Las ventanas de techo (vidrio plano o inclinado) se listan pero no se cuentan: las fórmulas de aquí son para ventanas en muros.
- Las ventanas sin habitación detrás (un vestíbulo sin espacio, por ejemplo) se listan aparte.
- Los derrames de ventana (la abertura se toma en la cara exterior), el deslumbramiento, las horas de sol y la luz natural según el clima. Para BS EN 17037, LEED o BREEAM use un programa de simulación de luz natural.
- Las bandas vienen de guías británicas más antiguas (BS 8206-2) y se muestran como guía, nunca como aprobado o reprobado.
