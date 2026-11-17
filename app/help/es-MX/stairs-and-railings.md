---
title: Escaleras y barandales
summary: Dibuje escaleras rectas, en L, en U y de peldaños en abanico que calculan sus contrahuellas y huellas a partir de la altura de piso a piso, con pasamanos y balaustres, y con el hueco de escalera cortado en el piso de arriba; dibuje barandales a lo largo de terrazas y alrededor de huecos.
keywords: caracol, escalera de caracol, escalera, escaleras, tramo, contrahuella, huella, descanso, peldaño en abanico, escalera en L, escalera en U, pasamanos, barandal de protección, barandal, balaustre, poste, poste de arranque, hueco de escalera, altura libre, terraza, balcón, cerca
from: 16e5ace4
---

## Qué hará

Agregue escaleras entre niveles y barandales donde las personas los necesiten. Una escalera calcula sus propios peldaños a partir de la altura entre niveles, se mantiene dentro de los límites habituales para vivienda, coloca pasamanos en sus lados abiertos y corta su hueco de escalera en el piso de arriba.

## Dibujar una escalera

1. En el nivel donde empieza la escalera, abra {{ui:Compilación}} y elija {{ui:Escalera}}.
2. Elija el tipo —**Recta**, **En L con descanso**, **En U con descanso** o **En L con peldaños en abanico**—, el lado hacia el que **gira**, su **ancho** y dónde van sus **pasamanos**.
3. Haga clic donde empieza la escalera: en el centro del borde frontal del primer peldaño.
4. Mueva el puntero en la dirección en que sube la escalera; los peldaños lo siguen, con el número de contrahuellas y huellas. Se ajusta a los muros y a pasos de 15°; mantenga presionada {{key:Shift}} para mantenerla a escuadra.
5. Haga clic. {{key:Esc}} reinicia el dibujo.

## Dibujar una escalera de caracol

1. Abra {{ui:Compilación}}, elija {{ui:Escalera}} y luego **De caracol** como tipo.
2. Ajuste **Giro**, hacia qué lado se enrolla al subir (izquierda es en sentido contrario a las manecillas del reloj).
3. Haga clic en el centro de su poste.
4. Haga clic en la dirección hacia la que apunta la huella del primer peldaño.

Empieza con 30" de ancho (la huella, desde el poste hasta el exterior), con un poste de 4½". Las contrahuellas se calculan a partir de la altura de piso a piso, como máximo 9½" por defecto. Las huellas miden 7½" de fondo sobre la línea de paso, a 12" del poste. El pasamanos corre por el exterior.

En **Propiedades** una escalera de caracol agrega **Poste central**, su diámetro. El campo **Huella** se mide sobre la línea de paso. Sus verificaciones son valores predeterminados identificados como tales para escaleras de caracol: 26" de ancho libre, al menos 6¾" de huella sobre la línea de paso, contrahuellas de máximo 9½" y pasamanos de 34"–38". No son cálculos de ingeniería; la autoridad de construcción decide.

## Cómo se calculan los peldaños

La altura entre el piso del nivel y el nivel de arriba se divide en contrahuellas iguales de no más de 7¾", y cada huella mide 10" de fondo (ambas pueden cambiarse en **Propiedades**). Un descanso cuenta como un peldaño; los peldaños en abanico son tres peldaños distribuidos alrededor de la esquina interior. Si cambia la altura de un nivel, cada escalera de ese nivel se vuelve a calcular.

:::warning
Contrahuellas de 7¾", huellas de 10", ancho de 36", altura libre de 6'-8" y pasamanos de 34"–38" son valores predeterminados identificados según el reglamento habitual para vivienda, no cálculos de ingeniería. **Propiedades** indica cuáles se cumplen; la autoridad de construcción decide qué aplica.
:::

## Cambiar una escalera

Seleccione la escalera (haga clic en ella en la planta o en la vista 3D) y cambie en **Propiedades** su tipo y giro, su ancho, la contrahuella máxima, la profundidad de huella, los pasamanos y su altura, y **Cortar el piso de arriba** para el hueco de escalera. Debajo se muestran las contrahuellas y huellas que resultaron.

## El hueco de escalera

Cuando el nivel de arriba tiene un piso, la escalera lo corta donde los peldaños tendrían menos de 6'-8" de altura libre. El corte se mueve con la escalera y desaparece cuando la escalera se elimina.

## Dibujar un barandal

1. Abra {{ui:Compilación}} y elija {{ui:Barandal}}.
2. Elija **Barandal de protección** (36" de alto) o **Pasamanos** y su altura.
3. Haga clic a lo largo del borde —una terraza, un balcón, alrededor de un hueco de escalera— y haga doble clic o presione {{key:Enter}} para terminar.

Los barandales llevan postes en sus extremos y esquinas, y balaustres con separaciones menores de 4". Seleccione uno para cambiar su tipo, su altura o a qué altura sobre el piso comienza.

## Dibujar una cerca

Elija **Cerca** en la misma herramienta de Barandal, ajuste su altura (1800 mm para empezar), haga clic a lo largo de la línea de la cerca y presione {{key:Enter}}.

- La cerca lleva un poste en cada extremo y en cada esquina, y un poste como máximo cada 2.4 m entre ellos. Una cerca de paneles tiene un panel entre postes; una cerca de rieles tiene dos rieles. Estas medidas son opciones habituales, no un requisito de reglamento: las normas locales limitan la altura de una cerca.
- Es un solo elemento del modelo (un IfcRailing llamado Fence) con un conjunto de propiedades {{ui:CadCraft_Fence}}: estilo, altura, postes, paneles, rieles, portones, longitud y área de paneles. Un solo paso de deshacer.
- No se dibujan aquí: portones (el generador de CivilCraft los distribuye), tablillas, el terreno (la cerca se apoya en el nivel) ni seleccionar un solo poste.

## Qué se guarda

Una escalera se guarda como escalera IFC formada por tramos (con sus contrahuellas, altura de contrahuella y longitud de huella), descansos, peldaños en abanico y pasamanos; el hueco de escalera es una abertura en la losa del piso de arriba. Los barandales se guardan como barandales IFC con su longitud y su número de balaustres y postes.
