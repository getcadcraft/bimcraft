---
title: Calcar un nivel, definir plumillas por vista, dibujar una escalera por croquis y abrir un OBJ
summary: Muestre otro nivel en línea discontinua bajo la planta y alinéelo, dé a muros, puertas y ventanas su propia plumilla en una vista, trace una línea de recorrido para obtener una escalera, y abra una malla Wavefront OBJ.
keywords: referencia de calco, fantasma, subyacente, plumilla, grosor de línea, tipo de línea, sobrescritura, escalera, croquis, descanso, OBJ, malla, importar, Wavefront
from: 333ebbde
---

## Calcar un nivel

Elija {{ui:Calcar}} en el menú {{ui:Compilación}} y luego una vista de la lista: la planta de otro nivel, la planta de techo de un nivel o una llamada (recortada a su recorte). Sus muros, columnas y pisos se muestran en línea discontinua bajo la planta que está dibujando. Muévala haciendo clic en un punto base de la referencia y luego en el lugar donde debe quedar ese punto, o escriba X, Y y un ángulo (gira alrededor de su propio centro). {{ui:Restablecer}} la regresa a su lugar y {{ui:Ocultar}} la quita. Es solo una referencia: nada la selecciona, no se imprime y no se guarda en el IFC. BimCraft la recuerda para cada nivel en este navegador.

## Plumillas por vista

Elija {{ui:Plumillas}}. Indique para qué sirve la plumilla: todos los muros, todas las puertas, todas las ventanas, el tipo del elemento seleccionado o los elementos seleccionados. Elija un grosor, un tipo de línea (continua, discontinua, punteada) y un color, y luego {{ui:Aplicar}}. El cambio solo aplica a la planta de este nivel. Una selección tiene prioridad sobre un tipo, y un tipo sobre una categoría completa. {{ui:Borrar todo}} las quita. Se guardan en este navegador. Marque **Colores de plumilla en 3D** para pintar en el modelo, en la vista 3D, las plumillas de color (el grosor o el trazo discontinuo pertenecen a la línea, así que allí solo se ve el color); desmárquela para volver atrás. {{ui:Imprimir}} las dibuja en el PDF de la planta: el grosor se escala según la pantalla (la plumilla predeterminada de muro, de 1.75 píxeles, equivale a 0.5 mm), las líneas discontinuas se mantienen como tales y un color se imprime con su valor del tema de papel.

## Una escalera a partir de un croquis

Elija {{ui:Escalera por croquis}} y haga clic en las esquinas de la línea de recorrido, empezando por el peldaño inferior. Una línea es una escalera recta; dos líneas que se unen en ángulo recto forman una L, y tres líneas (subir, cruzar, regresar) forman una U. Pulse {{key:L}} para dibujar un descanso: haga clic en sus esquinas y pulse {{key:Enter}}; su lado corto define el ancho de la escalera. Pulse {{key:Enter}} para colocar la escalera. Cada huella se calcula a partir de la longitud de su línea y del número de contrahuellas que requiere la altura. Después es una escalera común: cámbiela en Propiedades, y el hueco de la escalera y los pasamanos la siguen.

Marque **Hacer que sea una familia** en la fila de la herramienta (o pulse {{key:F}}) antes de pulsar {{key:Enter}}, para colocar la escalera como familia (una escalera recta, en L o en U). Entra como un solo elemento y se abre en el editor de familias con su ancho, huella, altura total, las huellas de cada tramo y la separación de una U como parámetros, así que puede agregar tamaños, un símbolo de planta o puntos activos. Los peldaños y la altura de contrahuella se derivan de ellos. No tiene pasamanos ni hueco: esos pertenecen a una escalera común.

## Abrir un OBJ

Abra un archivo `.obj` como cualquier otro archivo. Un OBJ no tiene unidades, así que BimCraft lee metros con Y hacia arriba, como lo escriben la mayoría de los programas. Cada objeto o grupo se convierte en un elemento de malla en un solo nivel, y luego puede verlo, medirlo, seccionarlo, colocarlo en un modelo y guardarlo como IFC. Las líneas, curvas y superficies se omiten, y la línea de estado lo indica.

Un objeto que es exactamente un prisma recto (una malla cerrada con dos caras extremas paralelas e idénticas, y caras laterales planas perpendiculares a ellas: una losa, un poste, un bloque de muro, una placa con agujeros) se guarda en el IFC como el sólido extruido propio de IFC, con su contorno y profundidad, y no como una lista de triángulos. Otros programas lo leen como un sólido real, ocupa poco espacio, y su profundidad y contorno pueden editarse después. La línea de estado indica cuántos objetos se conservaron de esa manera. Todo lo que no es exactamente un prisma (una forma ahusada, una malla con un vértice movido, una malla con un hueco) se queda como triángulos. Un archivo STEP se lee de la misma manera.
