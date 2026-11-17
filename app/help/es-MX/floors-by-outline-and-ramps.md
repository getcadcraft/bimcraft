---
title: Pisos de cualquier forma, aberturas y rampas
summary: Dibuje un piso o una losa por su contorno (un balcón, un voladizo, un descanso), haga aberturas en él y dibuje rampas con sus descansos.
keywords: piso, losa, contorno, balcón, voladizo, descanso, terraza, abertura de piso, agujero, cubo, vacío, rampa, pendiente, rampa accesible, rampa para silla de ruedas, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Qué va a hacer

Haga pisos que no sigan a los locales, como un balcón más allá de los muros, y dibuje rampas entre niveles.

## Dibujar un piso por su contorno

1. Active {{ui:Dibujo}}, elija el nivel y luego {{ui:Compilación}} › {{ui:Piso por contorno}}.
2. En la fila bajo las herramientas, elija el tipo (losa de concreto o piso de madera), su uso (piso o descanso), su espesor y cuánto sube su parte superior sobre el nivel (0 = al nivel del piso del nivel; un valor negativo lo baja).
3. Haga clic en las esquinas. La herramienta se ajusta a los muros, a las líneas de la rejilla y a sus cruces; mantenga pulsado {{key:Shift}} para conservar un borde a escuadra. La longitud de cada borde y el área se muestran conforme avanza. {{key:Backspace}} quita la última esquina.
4. Haga clic de nuevo en la primera esquina, haga doble clic, o pulse {{key:Enter}} para terminar.

## Cortar una abertura

Haga clic en el piso (en la vista 3D, o en su contorno en el plano) y luego, en {{ui:Propiedades}}, haga clic en {{ui:Agregar una abertura}} y haga clic en las esquinas de la abertura dentro del piso, terminando como se indicó arriba. Las propiedades del piso enumeran sus aberturas, cada una con {{ui:Eliminar}}, y su área sin ellas.

## Dibujar una rampa

1. Elija {{ui:Compilación}} › {{ui:Rampa}}. Defina su ancho, y si va **al nivel superior** o **hacia arriba un desnivel** que usted escriba.
2. Elija cómo se define: **por pendiente** (1:12 al inicio; la rampa tiene la longitud que requiera el desnivel) o **por longitud** (su segundo clic define la longitud, y la pendiente se ajusta).
3. Haga clic en el pie de la rampa (el centro de su borde inferior) y luego en la dirección de subida. La vista previa muestra su longitud, sus tramos y su pendiente.

Un desnivel mayor de 30 in (760 mm) se divide en tramos con un descanso de 5 ft (1525 mm) entre ellos. Son valores comunes de planeación, no los de su reglamento: revise las normas del lugar donde construye. Una rampa más empinada que 1:12 se marca en sus {{ui:Propiedades}}.

## Qué debe ver

- Cada piso, abertura y rampa es un solo paso: {{key:Mod+Z}} lo deshace.
- En el plano, el contorno de un piso dibujado (una abertura se dibuja cruzada), y el contorno de una rampa, sus tramos, descansos y una flecha hacia arriba con su pendiente.
- Las propiedades de un piso dibujado (tipo, uso, espesor, parte superior, área, aberturas) y de una rampa (ancho, parte superior, desnivel, pendiente o longitud); {{key:Delete}} quita cualquiera de los dos.
- Una rampa hacia el nivel superior sigue a ese nivel cuando cambia su altura.
- En el archivo IFC: un piso dibujado es una losa (IfcSlab, un piso o un descanso) con sus aberturas recortadas (IfcOpeningElement); una rampa es un IfcRamp formado por tramos inclinados (IfcRampFlight) y losas de descanso, con su pendiente y su ancho.

:::note
Los pisos dibujados así se quedan donde los dibujó. Los pisos hechos con {{ui:Piso}} siguen a los locales cuando se mueven los muros: vea [Locales, pisos, techos y cubiertas](topic:floors-and-roofs).
:::
