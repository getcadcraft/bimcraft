---
title: Menús, teclas y ratón
summary: Elija un estilo de menús que encaje con su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre menús y defina lo que hacen la rueda y cada botón del ratón.
keywords: estilo de menús, menús, barra de menús, cinta, línea de comandos, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, sentido del zoom, botón central, desplazar, orbitar, teclas de dos letras, exportar, importar, cambiar, familiar
from: a424e836
---

Los comandos de BimCraft son los mismos sea cual sea la forma de llegar a ellos. Un **estilo de menús** solo decide dónde se sitúan en pantalla, cómo se llaman allí y qué teclas los ejecutan, así que puede conservar sus costumbres. Elíjalo en {{ui:Configuración}} ({{key:Mod+,}}) › BimCraft › {{ui:Menús, teclas y ratón}}; el cambio es inmediato y este navegador lo recuerda.

## Los cinco estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:CadCraft}} | La barra de herramientas y las teclas propias de BimCraft ({{key:W}} muro, {{key:D}} puerta, {{key:N}} ventana, {{key:X}} sección, {{key:F}} ajustar). El punto de partida. |
| {{ui:Diseño residencial}} | Una barra de menús (Archivo, Edición, Compilación, Biblioteca, 3D, CAD, Herramientas, Vista) sobre una fila de herramientas de construcción, como las distribuyen los programas de diseño residencial. Las mismas teclas sencillas, más {{key:Mod+L}} para la biblioteca, {{key:F9}} para la vista 3D, {{key:F10}} para la planta y {{key:F11}} para ambas. |
| {{ui:Cinta BIM}} | Pestañas de botones grandes (Arquitectura, Insertar, Anotar, Modificar, Vista, Salida) con un menú Archivo y botones rápidos a la derecha. Teclas de dos letras: {{key:W}} y luego {{key:A}} para un muro, {{key:D}} {{key:R}} puerta, {{key:W}} {{key:N}} ventana, {{key:S}} {{key:C}} sección, {{key:Z}} {{key:F}} ajustar. El botón central desplaza la vista; {{key:Shift}} y el botón central orbitan. |
| {{ui:Dibujo clásico}} | Una cinta pequeña y una línea de comandos, para quien escribe los comandos: WALL, DOOR, WINDOW, ROOF, U (deshacer), ZOOM, SECTION, PLOT, INSERT, HELP. Empiece a escribir en cualquier lugar y las letras van a la línea de comandos; {{key:Enter}} ejecuta, {{key:Enter}} sin nada repite el último comando, {{key:Esc}} la borra. |
| {{ui:Visor}} | Para abrir y revisar modelos en lugar de dibujarlos: menús {{ui:Archivo}}, {{ui:Vista}}, {{ui:Mostrar}}, {{ui:Comprobar}} y {{ui:Edición}} sobre una fila de herramientas de visualización (ajustar, superior, frontal, lateral, sección, medir, ocultar, aislar, transparencia, mostrar todo, recorrido). Las herramientas de construcción esperan en un menú {{ui:Modelo}} al final. Las mismas teclas que el estilo propio de BimCraft. |

Los menús y las cintas aparecen cuando hay un modelo abierto o se empieza un edificio nuevo; antes, el panel de la izquierda abre archivos y empieza edificios.

:::tip
Una tecla que pertenece al diseño propio de BimCraft pero no al estilo elegido no hace nada, y la línea de estado indica adónde fue su comando («En Cinta BIM, Sección es SC»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre su función, y una herramienta en uso mantiene sus propias teclas: {{key:R}} y {{key:Tab}} al colocar, {{key:W}} {{key:A}} {{key:S}} {{key:D}} al recorrer, {{key:H}} con las herramientas de puerta y ventana, números al escribir una longitud.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Añadir una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con una barra de menús o una cinta, {{ui:Dónde está}} mueve el comando a otro menú o panel, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda, los botones que desplazan la planta y lo que hace cada botón en las vistas 3D.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi diseño residencial»); el integrado nunca cambia. Una tecla asignada a dos comandos, o una que se ejecutaría antes de poder escribir una tecla de dos letras, aparece en rojo y hay que corregirla antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicial) o {{ui:Girar hacia arriba aleja}}, y a qué velocidad. Un pellizco en el panel táctil siempre hace zoom en el sentido en que se mueven los dedos.
- **Desplazar la planta y los dibujos con**: cualquiera de los botones izquierdo, central y derecho. {{key:Space}} y arrastrar también desplaza; un arrastre con el botón izquierdo solo desplaza donde un clic no elegiría ni dibujaría.
- **Arrastrar en las vistas 3D**: {{ui:Propio de cada vista}} mantiene los botones de BimCraft (izquierdo orbita, derecho desplaza). O asigne a cada botón orbitar, desplazar, zoom o nada; {{key:Shift}} con el botón intercambia orbitar y desplazar. Un clic sin arrastrar sigue eligiendo.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, de otro equipo o de un colega. Un archivo importado solo puede apuntar a comandos propios de BimCraft: lo demás (un comando que esta versión no tiene, una tecla que aquí no funciona) se omite y se cuenta en la línea de estado. {{ui:Borrar este estilo}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}}, bajo las tarjetas de estilo, hace que cada aplicación se abra en su estilo correspondiente (su propia barra de herramientas, una barra de menús, una cinta o {{ui:Dibujo clásico}}; {{ui:Visor}} es exclusivo de BimCraft y no tiene equivalente en las demás), con los cambios que haya hecho en cada una; una aplicación sin estilo correspondiente conserva el suyo. Elegir otro estilo en una aplicación cambia solo esa aplicación.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Configuración de BimCraft](topic:settings) · [Procedente de otros programas BIM y de dibujo](topic:coming-from)
