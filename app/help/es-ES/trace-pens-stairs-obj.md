---
title: Calcar un nivel, definir plumas por vista, croquizar una escalera y abrir un OBJ
summary: Mostrar otro nivel en trazo discontinuo bajo la planta y alinearlo, dar a muros, puertas y ventanas su propia pluma en una vista, dibujar una línea de recorrido para obtener una escalera y abrir una malla Wavefront OBJ.
keywords: referencia de calco, fantasma, subyacente, pluma, grosor de línea, tipo de línea, sustitución, escalera, croquis, descansillo, OBJ, malla, importar, Wavefront
from: 333ebbde
---

## Calcar un nivel

Elija {{ui:Calcar}} en el menú {{ui:Compilación}} y después una vista de la lista: la planta de otro nivel, la planta de techos de un nivel o un detalle (recortado a su encuadre). Sus muros, pilares y forjados se muestran en trazo discontinuo bajo la planta que está dibujando. Muévala haciendo clic en un punto base de la referencia y después en el lugar donde debe ir ese punto, o escriba X, Y y un ángulo (gira alrededor de su propio centro). {{ui:Restablecer}} la devuelve a su sitio, {{ui:Ocultar}} la quita. Es solo una referencia: nada la selecciona, no se imprime y no se guarda en el IFC. BimCraft la recuerda para cada nivel en este navegador.

## Plumas por vista

Elija {{ui:Plumas}}. Indique para qué es la pluma: todos los muros, todas las puertas, todas las ventanas, el tipo del elemento seleccionado o los elementos seleccionados. Elija un grosor, un tipo de línea (continua, discontinua, de puntos) y un color, y después {{ui:Aplicar}}. El cambio afecta solo a la planta de este nivel. Una selección prevalece sobre un tipo, y un tipo prevalece sobre una categoría completa. {{ui:Borrar todo}} las elimina. Se guardan en este navegador. Marque **Colores de pluma en 3D** para pintar las plumas de color en el modelo de la vista 3D (el grosor y el trazo son propios de la línea, así que allí solo se ve el color); desmarque la casilla para volver atrás. {{ui:Imprimir}} las dibuja en el PDF de la planta: el grosor se escala según la pantalla (la pluma de muro predeterminada de 1.75 píxeles equivale a 0.5 mm), los trazos siguen siendo trazos y un color se imprime con su valor del tema de papel.

## Una escalera a partir de un croquis

Elija {{ui:Croquizar escalera}} y haga clic en las esquinas de la línea de recorrido, empezando por el peldaño inferior. Una línea es una escalera recta, dos líneas que se encuentran en ángulo recto forman una L, y tres líneas (subida, travesía y regreso) forman una U. Pulse {{key:L}} para dibujar un descansillo: haga clic en sus esquinas y pulse {{key:Enter}}; su lado corto fija el ancho de la escalera. Pulse {{key:Enter}} para colocar la escalera. Cada huella se calcula a partir de la longitud de su línea y del número de contrahuellas que exige la altura. Después es una escalera normal: cámbiela en Propiedades y el hueco de escalera y las barandillas se ajustarán.

Marque **Convertir en familia** en la fila de la herramienta (o pulse {{key:F}}) antes de {{key:Enter}} para colocar la escalera como familia (recta, en L o en U). Entra como un solo elemento y se abre en el editor de familias con su ancho, su huella, su altura total, las huellas de cada tramo y el hueco de una U como parámetros, de modo que puede añadir medidas, un símbolo en planta o zonas activas. Los peldaños y la altura de contrahuella se derivan de ellos. No tiene barandillas ni hueco de escalera: eso corresponde a una escalera normal.

## Abrir un OBJ

Abra un archivo `.obj` como cualquier otro archivo. Un OBJ no tiene unidades, así que BimCraft lee metros con Y hacia arriba, como lo escriben la mayoría de los programas. Cada objeto o grupo se convierte en un elemento de malla en un único nivel, y después puede verlo, medirlo, seccionarlo, colocarlo en un modelo y guardarlo como IFC. Las líneas, las curvas y las superficies se omiten, y la barra de estado lo indica.

Un objeto que es exactamente un prisma recto (una malla cerrada con dos caras extremas paralelas e idénticas y caras laterales planas perpendiculares a ellas: una losa, un poste, un bloque de muro, una placa con agujeros) se guarda en el IFC como sólido extruido propio de IFC, con su contorno y su profundidad, y no como una lista de triángulos. Otros programas lo leen como un sólido real, ocupa poco y su profundidad y su contorno pueden editarse después. La barra de estado indica cuántos objetos se han conservado así. Lo que no sea exactamente un prisma (una forma que se estrecha, una malla con un vértice desplazado, una malla con un hueco) se mantiene como triángulos. Un archivo STEP se lee de la misma forma.
