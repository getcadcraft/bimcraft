---
title: Escaleras y barandillas
summary: Dibuje escaleras rectas, en L, en U y de peldaños en abanico que ajustan sus contrahuellas y huellas a la altura entre plantas, con pasamanos, balaustres y el hueco de escalera cortado en la planta superior; dibuje barandillas de protección a lo largo de terrazas y alrededor de huecos.
keywords: espiral, escalera de caracol, escalera, escaleras, tramo, contrahuella, huella, descansillo, peldaños en abanico, escalera en L, escalera en U, cambio de sentido, pasamanos, barandilla de protección, barandilla, balaustre, barrote, pilar de arranque, poste, hueco de escalera, altura libre, terraza, balcón
from: 16e5ace4
---

## Qué hará

Añada escaleras entre plantas y barandillas donde las personas las necesiten. Una escalera calcula sus propios peldaños a partir de la altura entre las plantas, se mantiene dentro de los límites habituales en viviendas, coloca pasamanos en sus lados abiertos y corta su hueco de escalera en la planta superior.

## Dibujar una escalera

1. En la planta desde la que arranca la escalera, abra {{ui:Compilación}} y elija {{ui:Escalera}}.
2. Elija el tipo —**Recta**, **En L con descansillo**, **En U con descansillo** o **En L con peldaños en abanico**—, hacia qué lado **gira**, su **anchura** y dónde van sus **pasamanos**.
3. Haga clic donde empieza la escalera: en el centro del borde delantero del primer peldaño.
4. Mueva el puntero en la dirección en que sube la escalera; los peldaños lo siguen, con el número de contrahuellas y huellas. Se ajusta a los muros y a escalones de 15°; mantenga pulsado {{key:Shift}} para dejarla en escuadra.
5. Haga clic. {{key:Esc}} vuelve a empezar.

## Dibujar una escalera de caracol

1. Abra {{ui:Compilación}}, elija {{ui:Escalera}} y, a continuación, elija **Caracol** como tipo.
2. Ajuste **Giro**, el sentido en que se enrolla al subir (izquierda es en sentido antihorario).
3. Haga clic en el centro de su poste central.
4. Haga clic en la dirección hacia la que apunta la huella del primer peldaño.

Empieza con 30" de anchura (la huella, desde el poste hasta el exterior), con un poste de 4½". Las contrahuellas se calculan a partir de la altura entre plantas, como máximo 9½" por defecto. Las huellas tienen 7½" de fondo en la línea de paso, y 12" hacia fuera desde el poste. El pasamanos va por el exterior.

En **Propiedades**, una escalera de caracol añade **Poste central**, su diámetro. El campo **Huella** se mide en la línea de paso. Sus comprobaciones se marcan como valores predeterminados para escaleras de caracol: 26" de ancho libre, al menos 6¾" de huella en la línea de paso, contrahuellas de 9½" como máximo y pasamanos de 34"–38". No son cálculos técnicos; la autoridad de edificación decide.

## Cómo se calculan los peldaños

La altura entre el suelo de la planta y la planta superior se reparte en contrahuellas iguales de no más de 7¾", y cada huella tiene 10" de fondo (ambos valores pueden cambiarse en **Propiedades**). Un descansillo cuenta como un peldaño; los peldaños en abanico son tres peldaños abanicados alrededor de la esquina interior. Si cambia la altura de una planta, cada escalera de esa planta se vuelve a calcular.

:::warning
7¾" de contrahuella, 10" de huella, 36" de anchura, 6'-8" de altura libre y pasamanos de 34"–38" son valores predeterminados identificados como tales según la normativa residencial habitual, no cálculos técnicos. **Propiedades** indica cuáles se cumplen; la autoridad de edificación decide lo que se aplica.
:::

## Modificar una escalera

Seleccione la escalera (haga clic en ella en el plano o en la vista 3D) y cambie en **Propiedades** su tipo y giro, su anchura, la contrahuella más alta, el fondo de las huellas, los pasamanos y su altura, y **Cortar el forjado superior** para el hueco de escalera. Debajo se muestran las contrahuellas y huellas que resultaron.

## El hueco de escalera

Cuando la planta superior tiene forjado, la escalera lo corta allí donde los peldaños tendrían menos de 6'-8" de altura libre. El corte se mueve con la escalera y desaparece al eliminar la escalera.

## Dibujar una barandilla

1. Abra {{ui:Compilación}} y elija {{ui:Barandal}}.
2. Elija **Barandilla de protección** (36" de altura) o **Pasamanos**, y su altura.
3. Haga clic a lo largo del borde —una terraza, un balcón, alrededor de un hueco de escalera— y haga doble clic o pulse {{key:Enter}} para terminar.

Las barandillas tienen postes en sus extremos y esquinas, y balaustres con huecos de menos de 4". Seleccione una para cambiar su tipo, su altura o cuánto se eleva sobre el suelo donde empieza.

## Dibujar una valla

Elija **Valla** en la misma herramienta {{ui:Barandal}}, ajuste su altura (1800 mm para empezar), haga clic a lo largo de la línea de la valla y pulse {{key:Enter}}.

- La valla lleva un poste en cada extremo y en cada esquina, y un poste como máximo cada 2.4 m entre ellos. Una valla de paneles tiene un panel entre postes; una valla de travesaños tiene dos travesaños. Estas medidas son opciones habituales, no un requisito normativo: la normativa local limita la altura de una valla.
- Es un solo elemento del modelo (un IfcRailing llamado Fence) con un conjunto de propiedades {{ui:CadCraft_Fence}}: estilo, altura, postes, paneles, travesaños, puertas, longitud y área de paneles. Un paso para deshacer.
- No se dibuja aquí: puertas (el generador de CivilCraft las dispone), listones, terreno (la valla se apoya en la planta) ni seleccionar un poste individual.

## Qué se guarda

Una escalera se guarda como escalera IFC formada por tramos (con sus contrahuellas, su altura de contrahuella y la longitud de sus huellas), descansillos, peldaños en abanico y pasamanos; el hueco de escalera es un hueco en el forjado superior. Las barandillas son barandillas IFC con su longitud y su número de balaustres y postes.
