---
title: Pisos de cualquier forma, aberturas y rampas
summary: Dibuje un piso o una losa por su contorno (un balcón, un voladizo, un rellano), practique aberturas en él y dibuje rampas con sus rellanos.
keywords: piso, losa, contorno, balcón, voladizo, rellano, terraza, abertura de piso, hueco, hueco de instalaciones, vacío, rampa, pendiente, rampa accesible, rampa para silla de ruedas, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Qué hará

Cree pisos que no siguen a las habitaciones, como un balcón más allá de los muros, y dibuje rampas entre niveles.

## Dibujar un piso por su contorno

1. Active {{ui:Dibujo}}, elija el nivel y después {{ui:Compilación}} › {{ui:Piso por contorno}}.
2. En la fila bajo las herramientas, elija el tipo (losa de hormigón o piso de madera), su uso (piso o rellano), su espesor y la altura de su cara superior sobre el nivel (0 = a la altura del suelo del nivel; un valor negativo lo sitúa más bajo).
3. Haga clic en las esquinas. La herramienta se ajusta a los muros, a las líneas de cuadrícula y a sus cruces; mantenga pulsado {{key:Shift}} para que una arista quede en escuadra. La longitud de cada arista y la superficie se muestran a medida que avanza. {{key:Backspace}} retira la última esquina.
4. Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar.

## Practicar una abertura

Haga clic en el piso (en la vista 3D, o en su contorno del plano) y después, en {{ui:Propiedades}}, haga clic en {{ui:Agregar una abertura}} y en las esquinas de la abertura dentro del piso, terminando como se ha indicado. Las **Propiedades** del piso enumeran sus aberturas, cada una con {{ui:Eliminar}}, y su superficie sin ellas.

## Dibujar una rampa

1. Elija {{ui:Compilación}} › {{ui:Rampa}}. Fije su ancho y si va **hasta el nivel superior** o **subiendo un desnivel** que usted escriba.
2. Elija cómo se define: **por pendiente** (1:12 al inicio; la rampa tiene la longitud que necesite el desnivel) o **por longitud** (su segundo clic fija la longitud, y la pendiente se ajusta).
3. Haga clic en el pie de la rampa (el centro de su arista inferior) y después en el sentido de subida. La vista previa muestra su longitud, sus tramos y su pendiente.

Un desnivel superior a 30 pulgadas (760 mm) se divide en tramos, con un rellano de 5 pies (1525 mm) entre ellos. Son valores habituales de planificación, no su normativa: compruebe las reglas del lugar donde construya. Una rampa más empinada que 1:12 se marca en sus **Propiedades**.

## Qué debería ver

- Cada piso, abertura y rampa es un paso: {{key:Mod+Z}} lo deshace.
- En el plano, el contorno de un piso dibujado (una abertura se dibuja cruzada), y el contorno, los tramos y los rellanos de una rampa, con una flecha hacia arriba y su pendiente.
- Las **Propiedades** de un piso dibujado (tipo, uso, espesor, cara superior, superficie, aberturas) y de una rampa (ancho, cara superior, desnivel, pendiente o longitud); {{key:Delete}} elimina cualquiera de ellos.
- Una rampa hasta el nivel superior sigue a ese nivel cuando cambia su altura.
- En el archivo IFC: un piso dibujado es una losa (IfcSlab, de piso o de rellano) con sus aberturas recortadas (IfcOpeningElement); una rampa es un IfcRamp formado por tramos inclinados (IfcRampFlight) y losas de rellano, con su pendiente y su ancho.

:::note
Los pisos dibujados de este modo se quedan donde los dibujó. Los pisos hechos con {{ui:Piso}} siguen a las habitaciones cuando se mueven los muros: véase [Habitaciones, pisos, techos y cubiertas](topic:floors-and-roofs).
:::
