---
title: Colocar una imagen bajo la planta
summary: Coloque una imagen PNG, JPEG o WebP (un plano escaneado, un croquis, una foto del terreno, una vista aérea) bajo la planta de un nivel o en un plano vertical, escálela con dos puntos, mueva, gire, difumine y bloquéela, véala en 3D y en el PDF de la planta, y guárdela junto al modelo en un paquete.
keywords: imagen, fondo, PNG, JPEG, WebP, escaneado, croquis, foto, vista aérea, plano de situación, escala, opacidad, bloquear, calco, calcar
from: e3c78d1f
---

## Colocar una imagen

Active {{ui:Dibujo}}, vaya al nivel y elija {{ui:Imagen}} en el menú {{ui:Compilación}}. Después {{ui:Insertar imagen…}} y elija un archivo PNG, JPEG o WebP. Se lee en su navegador y nunca se sube. Aparece bajo la planta, ajustada a la vista, y la barra de herramientas indica que todavía no está escalada. Todo lo que dibuje se sitúa encima de ella.

## Establecer la escala

Elija {{ui:Escala}}, haga clic en dos puntos de la imagen cuya distancia real conoce (dos extremos de un muro en un plano escaneado, una cota impresa en un croquis), después escriba la distancia y pulse {{key:Enter}}. La imagen crece o se reduce alrededor del primer punto en el que hizo clic. {{key:Esc}} cancela.

## Pegar un área copiada

En MarkupCraft, {{ui:Copiar área}} copia una parte de una hoja PDF como imagen. De vuelta en BimCraft, con la planta de un nivel visible, pulse {{key:Ctrl+V}} (o {{ui:Pegar}} en el menú {{ui:Edición}}): el área se coloca en la planta como imagen, centrada donde esté el puntero (o en el centro de la vista). Cuando la hoja tenía una escala de dibujo, entra a su tamaño real, de modo que un muro en ella mide lo mismo que sus muros. Sin escala, entra al tamaño del papel y empieza {{ui:Escala}}, así que puede hacer clic en dos puntos y escribir su distancia. Un área copiada como superposición empieza con la opacidad con la que se copió. Es un paso de deshacer y se conserva como cualquier otra imagen.

Pegar toma lo último que copió: un área copiada o algo que copió en BimCraft. {{key:Ctrl+V}} también pega cualquier otra imagen PNG, JPEG o WebP que tenga en el portapapeles, colocada como {{ui:Insertar imagen…}} y todavía sin escalar. Un área copiada se recuerda durante seis horas.

## Mover, girar, difuminar, bloquear

{{ui:Desplazar}} toma un punto base en la imagen y después el lugar al que debe ir. {{ui:Girar}} toma un ángulo en grados, alrededor del centro de la imagen. {{ui:Opacidad}} la difumina para que sus líneas destaquen. {{ui:Bloquear}} impide moverla mientras dibuja; una imagen bloqueada aún le permite cambiar su opacidad y ocultarla. Cada cambio es un paso de deshacer.

## Varias imágenes, varios niveles

Una imagen pertenece al nivel en el que se colocó y se ve en la planta de ese nivel y en su planta de techo. Haga clic en una imagen para trabajar con ella, o elíjala en la lista. {{ui:Ocultar}} la desactiva sin quitarla; {{ui:Quitar}} (o {{key:Delete}}) la elimina del modelo.

## Imágenes en la vista 3D

Cada imagen también aparece en la vista 3D como un plano: una imagen de planta descansa sobre su nivel, y una imagen de plano vertical se levanta sobre su línea de sección. Se dibuja sobre el modelo sin ocultarlo, y el modelo oculta la parte de la imagen que queda detrás. Las imágenes superpuestas se ordenan por distancia. Opacidad, Ocultar, Bloquear y Quitar funcionan igual, y {{ui:Mostrar en 3D}} desactiva todos los planos solo en la vista 3D. Un nivel admite como máximo 8 imágenes, para que las vistas sigan siendo rápidas.

## Una imagen en un plano vertical

Bajo {{ui:Colocar en}} elija {{ui:Un plano vertical (línea de sección)}}, después {{ui:Insertar imagen…}}. Haga clic en los dos extremos de una línea en la planta (un extremo de cara de muro se ajusta), o elija una línea de sección con nombre del nivel en {{ui:Sobre una línea de sección}} y no hará falta hacer clic. La imagen se levanta en el nivel sobre esa línea, tan ancha como la línea. Ajuste su {{ui:Ancho}}, su posición {{ui:A lo largo de la línea}} y su {{ui:Altura sobre el nivel}} escribiéndolos; {{ui:Girar}} la gira en su propio plano. Una imagen vertical no se dibuja bajo la planta; la planta muestra su línea mientras trabaja en ella. BimCraft no tiene una ventana de sección 2D interactiva: las secciones y alzados se dibujan en las hojas, y las imágenes todavía no se imprimen en esas vistas de hoja.

## Impresión

{{ui:Vista de impresión}} en una planta escribe las imágenes del nivel en el PDF bajo el dibujo, a su escala, giro y opacidad, recortadas a la hoja; una imagen oculta queda fuera. Un JPEG se incluye tal cual; las demás imágenes se reducen a 200 ppp en la hoja antes.

## Guardada junto al modelo

Los bytes de la imagen no se escriben en el texto IFC. El modelo se refiere a cada una por su nombre (un IfcDocumentReference como pictures/<id>.png) y los bytes viajan en un paquete de proyecto. Use {{ui:Guardar como paquete…}} (o {{ui:Guardar como IFC}} y elíjalo): obtiene un archivo .ccbundle con el modelo y sus imágenes; el IFC sigue siendo pequeño y las ediciones son rápidas. Al abrir el .ccbundle, las imágenes vuelven.

Un .ifc simple no puede contener una imagen sin hacerse grande. Al guardar uno, BimCraft le indica cuántas imágenes se guardan fuera de él y le ofrece un paquete, o un IFC simple que incrusta las imágenes de hasta 512 KB y deja fuera las demás. Un .ifc simple abierto sin su paquete muestra esas imágenes como faltantes y Problemas las enumera; abra el .ccbundle en el que se guardaron. Los archivos guardados por la primera versión, con la imagen dentro del IFC, siguen abriéndose, y un guardado en paquete saca sus imágenes fuera. Una imagen se conserva tal cual hasta 6 MB; una mayor se reduce antes, y se le avisa. Otros programas abren el modelo e ignoran las imágenes. Una imagen que todavía no ha escalado aparece en Problemas como nota.

## En hojas de sección y alzado

Una imagen en un plano vertical (elija {{ui:Vertical}} en el panel de imagen y haga clic en los dos extremos de una línea, o colóquela sobre una línea de sección con nombre) se imprime en las vistas de hoja que la miran de frente. Una sección muestra una imagen que se levanta sobre su línea de corte, o que se colocó sobre esa línea de sección por nombre. Un alzado muestra cada imagen vertical cuyo plano mira hacia él. La imagen se dibuja bajo las líneas de la vista, a la escala de la vista, recortada a ella, y conserva su opacidad. Abra {{ui:Hojas…}} para verla; el PDF de la hoja la incluye como imagen. Vista desde detrás, una imagen aparece reflejada, como en 3D. Las imágenes ocultas quedan fuera.
