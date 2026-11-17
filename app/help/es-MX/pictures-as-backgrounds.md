---
title: Colocar una imagen bajo el plano
summary: Coloque una imagen PNG, JPEG o WebP (un plano escaneado, un croquis, una foto del sitio, una vista aérea) bajo el plano de un nivel o en un plano vertical, escálela con dos puntos, muévala, gírela, atenúela y bloquéela, véala en 3D y en el PDF del plano, y guárdela junto al modelo en un paquete.
keywords: imagen, picture, fondo, PNG, JPEG, WebP, escaneo, croquis, foto, vista aérea, plano de sitio, escala, opacidad, bloquear, subyacente, calcar
from: e3c78d1f
---

## Colocar una imagen

Active {{ui:Dibujo}}, vaya al nivel y elija {{ui:Imagen}} en el menú {{ui:Compilación}}. Luego {{ui:Insertar imagen…}} y elija un archivo PNG, JPEG o WebP. Se lee en su navegador y nunca se sube. Aparece bajo el plano, ajustada a la vista, y la barra de herramientas indica que todavía no tiene escala. Todo lo que dibuje queda encima de ella.

## Establecer la escala

Elija {{ui:Escala}}, haga clic en dos puntos de la imagen cuya distancia real conoce (dos extremos de un muro en un plano escaneado, una cota impresa en un croquis), luego escriba la distancia y pulse {{key:Enter}}. La imagen crece o se reduce alrededor del primer punto en que hizo clic. {{key:Esc}} cancela.

## Pegar un área copiada

En MarkupCraft, {{ui:Copiar área}} copia una parte de una hoja PDF como imagen. De vuelta en BimCraft, con el plano de un nivel visible, pulse {{key:Ctrl+V}} (o {{ui:Pegar}} en el menú {{ui:Editar}}): el área cae en el plano como imagen, centrada donde está el puntero (o en el centro de la vista). Cuando la hoja tenía escala de dibujo, entra a su tamaño real, así que un muro en ella mide lo mismo que sus muros. Sin escala, entra al tamaño del papel y {{ui:Escala}} se inicia, para que pueda hacer clic en dos puntos y escribir su distancia. Un área copiada como superposición empieza con la opacidad con que se copió. Es un solo paso de deshacer y se guarda como cualquier otra imagen.

Pegar toma lo último que copió: un área copiada, o algo que copió en BimCraft. {{key:Ctrl+V}} también pega cualquier otra imagen PNG, JPEG o WebP que tenga en el portapapeles, colocada como {{ui:Insertar imagen…}} y sin escalar. Un área copiada se recuerda durante seis horas.

## Mover, girar, atenuar, bloquear

{{ui:Desplazar}} toma un punto base en la imagen y luego el lugar al que debe ir. {{ui:Girar}} toma un ángulo en grados, alrededor del centro de la imagen. {{ui:Opacidad}} la atenúa para que sus líneas resalten. {{ui:Bloquear}} evita que se mueva mientras dibuja; una imagen bloqueada aún le permite cambiar su opacidad y ocultarla. Cada cambio es un paso de deshacer.

## Varias imágenes, varios niveles

Una imagen pertenece al nivel en que se colocó y aparece en el plano de ese nivel y en su plano de techo. Haga clic en una imagen para trabajar en ella, o elíjala en la lista. {{ui:Ocultar}} la desactiva sin quitarla; {{ui:Quitar}} (o {{key:Delete}}) la saca del modelo.

## Imágenes en la vista 3D

Cada imagen también aparece en la vista 3D como un plano: una imagen de plano se apoya en su nivel, y una imagen en plano vertical se levanta sobre su línea de corte. Se dibuja encima del modelo sin ocultarlo, y el modelo oculta la parte de la imagen que queda detrás de él. Las imágenes superpuestas se ordenan por distancia. Opacidad, Ocultar, Bloquear y Quitar funcionan igual, y {{ui:Mostrar en 3D}} apaga todos los planos solo en la vista 3D. Un nivel admite como máximo 8 imágenes, para que las vistas sigan rápidas.

## Una imagen en un plano vertical

En {{ui:Colocar en}} elija {{ui:Un plano vertical (línea de corte)}} y luego {{ui:Insertar imagen…}}. Haga clic en los dos extremos de una línea en el plano (un extremo de cara de muro se ajusta), o elija una línea de corte con nombre del nivel en {{ui:Sobre una línea de corte}} y no necesita clics. La imagen se levanta sobre el nivel, sobre esa línea, tan ancha como la línea. Ajuste su {{ui:Ancho}}, su posición {{ui:A lo largo de la línea}} y su {{ui:Altura sobre el nivel}} escribiendo; {{ui:Girar}} la gira en su propio plano. Una imagen vertical no se dibuja bajo el plano; el plano muestra su línea mientras trabaja en ella. BimCraft no tiene una ventana 2D interactiva de corte: los cortes y elevaciones se dibujan en las hojas, y las imágenes todavía no se imprimen en esas vistas de hoja.

## Impresión

{{ui:Vista de impresión}} en un plano escribe las imágenes del nivel en el PDF, bajo el dibujo, a su escala, giro y opacidad, recortadas a la hoja; una imagen oculta queda fuera. Un JPEG entra tal cual; las demás imágenes se reducen primero a 200 dpi en la hoja.

## Guardado junto al modelo

Los bytes de la imagen no se escriben en el texto del IFC. El modelo se refiere a cada una por su nombre (una IfcDocumentReference como pictures/<id>.png) y los bytes viajan en un paquete de proyecto. Utilice {{ui:Guardar como paquete…}} (o {{ui:Guardar como IFC}} y elíjalo): obtiene un archivo .ccbundle con el modelo y sus imágenes; el IFC queda pequeño y las ediciones siguen rápidas. Al abrir el .ccbundle, las imágenes vuelven.

Un .ifc simple no puede contener una imagen sin volverse grande. Al guardarlo, BimCraft indica cuántas imágenes se guardan fuera de él y ofrece un paquete, o un IFC simple que incrusta las imágenes de hasta 512 KB y deja fuera las demás. Un .ifc simple abierto sin su paquete muestra esas imágenes como faltantes y Problemas las enumera; abra el .ccbundle en el que se guardaron. Los archivos guardados por la primera versión, con la imagen dentro del IFC, siguen abriéndose, y al guardar un paquete sus imágenes salen del IFC. Una imagen se guarda tal cual hasta 6 MB; una más grande se reduce primero, y se le avisa. Otros programas abren el modelo e ignoran las imágenes. Una imagen que todavía no ha escalado aparece en Problemas como nota.

## En hojas de corte y elevación

Una imagen en plano vertical (elija {{ui:Vertical}} en el panel de imágenes y haga clic en los dos extremos de una línea, o colóquela sobre una línea de corte con nombre) se imprime en las vistas de hoja que la miran de frente. Un corte muestra una imagen que se apoya en su línea de corte, o que se colocó sobre esa línea por nombre. Una elevación muestra cada imagen vertical cuyo plano mira hacia ella. La imagen se dibuja bajo las líneas de la vista, a la escala de la vista, recortada a la vista, y conserva su opacidad. Abra {{ui:Hojas…}} para verla; el PDF de la hoja la lleva como imagen. Vista desde atrás, una imagen aparece en espejo, como en 3D. Las imágenes ocultas se omiten.
