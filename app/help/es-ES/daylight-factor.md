---
title: "Estimar la luz natural en cada estancia"
summary: "El factor medio de luz natural de cada estancia a partir de sus ventanas, sus superficies interiores y el cielo que ve cada ventana, con el ángulo de cielo medido en el modelo. Una estimación de fase de diseño temprana, no una simulación ni una comprobación normativa."
keywords: luz natural, factor de luz natural, factor medio de luz natural, adf, componente de cielo vertical, vsc, ganancia solar, sol, valor g, cuadrícula, flujo dividido, componente de cielo, componente reflejado internamente, ventana, acristalamiento, ángulo de cielo, obstrucción, sombra, balcón, voladizo, reflectancia, transmitancia, diseño temprano, análisis, estancias, espacios
from: 5f300a78
---

La pestaña {{ui:Luz natural}} del panel derecho calcula el **factor medio de luz natural** de cada estancia: qué parte de la luz de un cielo cubierto del exterior llega a la estancia, de media, en porcentaje. Lee las estancias (espacios) y las ventanas del modelo IFC abierto. No se modifica nada en el modelo y no se sube nada.

:::warning
Todo lo de esta pestaña es **una ayuda de diseño, no un cálculo de cumplimiento**: estimaciones de fase de diseño según métodos publicados, **no una simulación** y **no una comprobación frente a un código de edificación ni a una norma**. BS EN 17037, LEED, BREEAM y los códigos energéticos piden una simulación de luz natural con el clima del lugar; para ello use un programa de simulación de luz natural.
:::

## Cómo se calcula

1. Abra un modelo IFC que tenga estancias (espacios) y ventanas. Los modelos dibujados aquí tienen una estancia dentro de cada conjunto cerrado de muros.
2. Abra la pestaña {{ui:Luz natural}} y haga clic en {{ui:Calcular}}.
3. Cada estancia muestra su factor de luz natural y una banda: menos del 2 %, 2–5 % o 5 % o más. Haga clic en una estancia para ver sus superficies y el área y el ángulo de cielo de cada ventana; la estancia y sus ventanas se seleccionan en el modelo.

Si cambia un dato, los números se actualizan al momento; después de cambiar el modelo, haga clic en {{ui:Calcular de nuevo}}. {{ui:CSV}} guarda cada estancia con sus números y los datos usados.

## La fórmula

Factor medio de luz natural (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumado para las ventanas de la estancia (fórmula de Littlefair, usada por BRE 209, BS 8206-2 y CIBSE LG10):

- **T**, la transmitancia luminosa del vidrio (0.7 para empezar: use la cifra del fabricante).
- **Ag**, el área acristalada: el área de cada ventana (su anchura total × altura, o si no, su tamaño en el modelo) × la **proporción acristalada** (0.75 para empezar: el resto es marco).
- **θ**, el ángulo de cielo que ve la ventana, en grados (más abajo).
- **M**, el factor de mantenimiento por suciedad del vidrio (1 para empezar).
- **A**, todas las superficies interiores de la estancia: suelo, muros, techo y ventanas, tomadas de la forma propia de la estancia.
- **R**, su reflectancia media, ponderada por área: suelo 0.2, muros 0.5, techo 0.7 para empezar; el vidrio cuenta como 0.1.

## Cómo se mide el ángulo de cielo

Para cada ventana, BimCraft corta el modelo con un plano vertical perpendicular a la ventana, desde la cara exterior del vidrio, y mira desde el horizonte hacia arriba: todo lo que el corte encuentra delante de la ventana (un edificio enfrente, un balcón o un voladizo encima, el alero) oculta parte de esos 90°. θ es lo que queda. La propia ventana y el muro en que está se excluyen. Lo hace en cinco puntos a lo largo de la anchura de la ventana y toma la media, de modo que un montante delgado delante del centro toma su parte, no todo el cielo.

Un edificio 8.5 m por encima del centro de la ventana y a 9.9 m de distancia oculta 40.65° (el ángulo cuya tangente es 8.5 ÷ 9.9), dejando θ = 49.35°.

## Componente de cielo vertical de cada ventana

{{ui:Calcular}} también mide, para cada ventana, lo que ve de todo el cielo: el mismo corte vertical, girado a cada dirección delante de la ventana (cada 2°, de un lado a otro), de modo que un edificio a un lado, una aleta o un derrame profundo toman su parte. A partir de ello BimCraft calcula el **componente de cielo vertical (VSC)**: qué parte de la luz del cielo cubierto llega al vidrio, como proporción de lo que recibiría una cubierta plana y abierta. Una ventana sin nada delante recibe **39.6 %**, lo máximo posible para una ventana vertical; un edificio alto que se eleva 25° sobre la ventana deja unos **27 %**, la cifra que usa la guía británica (BRE 209) como regla práctica. Cada ventana, en el detalle de la estancia, muestra su VSC y su **ángulo de obstrucción** (hasta qué altura se elevan las cosas justo delante de ella).

El cielo es el cielo cubierto estándar CIE, que es tres veces más brillante justo encima que en el horizonte, y el corte es exacto: no se muestrea nada.

## El sol a través de las ventanas en una fecha

Abra {{ui:Sol a través de las ventanas en una fecha}} y elija una fecha. BimCraft sigue el sol durante ese día en cuartos de hora y suma, para cada ventana, el calor que el sol aporta a través del vidrio:

- el **sol directo**, cuando está delante de la ventana y nada del modelo lo oculta (el mismo corte exacto, girado hacia el sol: un balcón que da sombra al sol alto del verano al mediodía deja entrar el sol bajo del invierno);
- la **luz del cielo** en el vidrio, menos lo que la ventana no puede ver;
- la luz **reflejada desde el suelo** (su reflectancia: 0.2 para empezar);
- todo ello a través del **valor g** del vidrio (la parte de la energía solar que deja pasar: 0.6 para empezar; use la cifra del fabricante) y su proporción acristalada.

Cada estancia muestra el total del día en kWh y su pico en vatios con la hora; el detalle de una estancia dibuja el día como gráfico. El cielo es despejado según el modelo de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), con las cifras de verano o de invierno del lugar y de la estación, y la altura del emplazamiento; la posición del sol es la de NOAA. La latitud y la longitud del emplazamiento se toman del sitio IFC, y el norte, del norte verdadero del modelo; si el modelo no tiene emplazamiento, escriba una latitud y una longitud. Las horas son la hora estándar (sin horario de verano) en la zona horaria que escriba, o si no, la que sugiere la longitud.

Lo que deja fuera: las nubes (es un día despejado), que el vidrio deje pasar menos luz con ángulos bajos, los marcos que dan sombra al vidrio, las persianas, y lo que absorben los muros y la cubierta. La estimación de refrigeración de la misma pestaña usa el pico.

## El factor de luz natural en una cuadrícula

Abra {{ui:Factor de luz natural en una cuadrícula}} y haga clic en {{ui:Calcular la cuadrícula}}: BimCraft traza una cuadrícula sobre el suelo de cada estancia a la altura del plano de trabajo (0.85 m para empezar), medio metro hacia dentro desde los muros, y calcula el factor de luz natural en cada punto por el **método de flujo dividido de BRE**:

- el **componente de cielo**: el cielo cubierto que ve el punto a través de la abertura de cada ventana, menos los marcos;
- el **componente reflejado exteriormente**: lo que el punto ve de los edificios exteriores a través de la ventana, que brillan a una décima parte del cielo que tienen detrás (cambie la luminosidad de la obstrucción si son mucho más claros u oscuros);
- el **componente reflejado interiormente**: la luz que rebota dentro de la estancia, según las superficies y reflectancias de la estancia, el área de las ventanas y cuánta queda fuera de ellas (la fórmula de BRE, con la transmitancia del vidrio en lugar del vidrio transparente que suponía).

Cada estancia muestra su media, su punto más bajo y qué parte recibe el 2 % o más; el detalle de una estancia dibuja su planta con cada punto coloreado según su factor de luz natural y las ventanas en rojo. Para que vaya rápido en cualquier ordenador, una estancia tiene como máximo **400 puntos**: en una estancia grande la separación aumenta para ajustarse (escriba una separación para elegir la suya).

## Lo que deja fuera

- Las ventanas de cubierta (vidrio horizontal o inclinado) se listan, pero no se cuentan: las fórmulas de aquí son para ventanas en muros.
- Las ventanas sin estancia detrás (un vestíbulo sin espacio, por ejemplo) se listan aparte.
- Los derrames de las ventanas (la abertura se toma en la cara exterior), el deslumbramiento, las horas de sol y la luz natural basada en el clima. Para BS EN 17037, LEED o BREEAM use un programa de simulación de luz natural.
- Las bandas proceden de una guía británica anterior (BS 8206-2) y se muestran como orientación, nunca como aprobado o suspenso.
