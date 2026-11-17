---
title: Calcar un nivel, definir plumas por vista, bosquejar una escalera y abrir un OBJ
summary: Mostrar otro nivel con trazo discontinuo bajo la planta y alinearlo, dar a muros, puertas y ventanas su propia pluma en una vista, dibujar una línea de recorrido para obtener una escalera, y abrir una malla Wavefront OBJ.
keywords: referencia de calco, fantasma, subyacente, pluma, grosor de línea, tipo de línea, sustitución, escalera, bosquejo, descanso, OBJ, malla, importar, Wavefront
from: 333ebbde
---

## Calcar un nivel

Elija {{ui:Trace}} en el menú {{ui:Build}} y luego una vista de la lista: la planta de otro nivel, la planta de cielorraso de un nivel o una llamada de detalle (recortada a su encuadre). Sus muros, columnas y pisos se muestran con trazo discontinuo bajo la planta que está dibujando. Muévala haciendo clic en un punto base de la referencia y luego donde ese punto debe ir, o escriba X, Y y un ángulo (gira alrededor de su propio centro). {{ui:Reset}} la devuelve a su lugar, {{ui:Hide}} la quita. Es solo una referencia: nada la elige, no se imprime y no se guarda en el IFC. BimCraft la recuerda para cada nivel en este navegador.

## Plumas por vista

Elija {{ui:Pens}}. Indique para qué es la pluma: todos los muros, todas las puertas, todas las ventanas, el tipo del elemento elegido o los elementos elegidos. Elija un grosor, un tipo de línea (continua, discontinua, punteada) y un color, y luego {{ui:Apply}}. El cambio vale solo para la planta de este nivel. Una elección vence a un tipo, y un tipo vence a una categoría completa. {{ui:Clear all}} las quita. Se guardan en este navegador. Marque **Colores de plumas en 3D** para pintar en el modelo, en la vista 3D, las plumas de color (un grosor o un trazo corresponde a la línea, así que allí solo se ve el color); desmárquelo para volver atrás. {{ui:Print}} las dibuja en el PDF de la planta: el grosor se escala desde la pantalla (la pluma predeterminada de muro de 1.75 píxeles equivale a 0.5 mm), los trazos siguen siendo trazos y un color se imprime con su valor del tema de papel.

## Una escalera a partir de un bosquejo

Elija {{ui:Sketch stair}} y haga clic en las esquinas de la línea de recorrido, empezando por el primer escalón. Una línea es una escalera recta, dos líneas que se encuentran en ángulo recto son una L, y tres líneas (subir, cruzar, volver) son una U. Presione {{key:L}} para dibujar un descanso: haga clic en sus esquinas y presione {{key:Enter}}, y su lado corto fija el ancho de la escalera. Presione {{key:Enter}} para colocar la escalera. Cada huella se calcula a partir de la longitud de su línea y del número de contrahuellas que necesita la altura. Después es una escalera común: cámbiela en **Propiedades**, y el hueco de escalera y los pasamanos la siguen.

Marque **Hacer una familia** en la fila de la herramienta (o presione {{key:F}}) antes de {{key:Enter}} para colocar la escalera como familia (una escalera recta, L o U). Entra como un solo elemento y se abre en el editor de familias con su ancho, huella, altura total, las huellas de cada tramo y la separación de una U como parámetros, para que pueda agregar medidas, un símbolo de planta o puntos activos. Los escalones y la altura de contrahuella se derivan de ellos. No tiene pasamanos ni hueco de escalera: eso corresponde a una escalera común.

## Abrir un OBJ

Abra un archivo `.obj` como cualquier otro archivo. Un OBJ no tiene unidades, así que BimCraft lee metros con Y hacia arriba, como lo escriben la mayoría de los programas. Cada objeto o grupo se convierte en un elemento de malla en un solo nivel, y luego puede ver, medir, cortar, colocarlo en un modelo y guardarlo como IFC. Se omiten las líneas, curvas y superficies, y la línea de estado lo indica.

Un objeto que es exactamente un prisma recto (una malla cerrada con dos caras extremas paralelas e idénticas y caras laterales planas y perpendiculares a ellas: una losa, un poste, un bloque de muro, una placa con agujeros) se guarda en el IFC como sólido extruido propio de IFC, con su contorno y profundidad, y no como lista de triángulos. Otros programas lo leen como un sólido real, ocupa poco espacio, y su profundidad y contorno pueden editarse después. La línea de estado indica cuántos objetos se conservaron así. Lo que no es exactamente un prisma (una forma ahusada, una malla con un vértice movido, una malla con un hueco) queda como triángulos. Un archivo STEP se lee de la misma manera.
