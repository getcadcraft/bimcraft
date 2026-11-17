---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que se adapte a su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre menús y configure lo que hacen la rueda y cada botón del ratón.
keywords: estilo de menú, menús, barra de menús, cinta, línea de comandos, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, sentido del zoom, botón central, encuadre, órbita, teclas de dos letras, exportar, importar, cambiar, conocido
from: a424e836
---

Los comandos de BimCraft son los mismos sin importar cómo llegue a ellos. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y con qué teclas se ejecutan, para que pueda conservar sus hábitos. Elija uno en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato y este navegador lo recuerda.

## Los cinco estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:CadCraft}} | La barra de herramientas y las teclas propias de BimCraft ({{key:W}} muro, {{key:D}} puerta, {{key:N}} ventana, {{key:X}} sección, {{key:F}} ajustar). El punto de partida. |
| {{ui:Diseño residencial}} | Una barra de menús (Archivo, Editar, Compilación, Biblioteca, 3D, CAD, Herramientas, Vista) sobre una fila de herramientas de construcción, como las organizan los programas de diseño residencial. Las mismas teclas simples, más {{key:Mod+L}} para la biblioteca, {{key:F9}} para la vista 3D, {{key:F10}} para la planta y {{key:F11}} para ambas. |
| {{ui:Cinta BIM}} | Pestañas de botones grandes (Arquitectura, Insertar, Anotar, Modificar, Vista, Salida) con un menú Archivo y botones rápidos a la derecha. Teclas de dos letras: {{key:W}} y luego {{key:A}} para un muro, {{key:D}} {{key:R}} puerta, {{key:W}} {{key:N}} ventana, {{key:S}} {{key:C}} sección, {{key:Z}} {{key:F}} ajustar. El botón central encuadra; {{key:Shift}} y el botón central orbitan. |
| {{ui:Dibujo clásico}} | Una cinta pequeña y una línea de comandos, para quienes escriben los comandos: WALL, DOOR, WINDOW, ROOF, U (deshacer), ZOOM, SECTION, PLOT, INSERT, HELP. Empiece a escribir en cualquier lugar y las letras van a la línea de comandos; {{key:Enter}} ejecuta, {{key:Enter}} sin escribir nada repite el último comando, {{key:Esc}} la borra. |
| {{ui:Visor}} | Para abrir y revisar modelos en lugar de dibujarlos: menús {{ui:Archivo}}, {{ui:Vista}}, {{ui:Mostrar}}, {{ui:Comprobar}} y {{ui:Editar}} sobre una fila de herramientas de visualización (ajustar, superior, frontal, lateral, sección, medir, ocultar, aislar, transparencia, mostrar todo, recorrido). Las herramientas de construcción esperan en un menú {{ui:Modelo}} al final. Las mismas teclas que el estilo propio de BimCraft. |

Los menús y las cintas aparecen cuando abre un modelo o empieza un edificio nuevo; antes de eso, el panel izquierdo abre archivos y empieza edificios.

:::tip
Una tecla que pertenece a la distribución propia de BimCraft, pero no al estilo que eligió, no hace nada, y la línea de estado indica adónde fue a parar su comando ("En Cinta BIM, Sección es SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre su significado, y una herramienta en uso conserva sus propias teclas: {{key:R}} y {{key:Tab}} al colocar, {{key:W}} {{key:A}} {{key:S}} {{key:D}} al recorrer, {{key:H}} con las herramientas de puerta y ventana, números al escribir una longitud.
:::

## Personalícelo

1. Elija el estilo más cercano a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Agregar una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con una barra de menús o una cinta, use {{ui:Dónde está}} para mover el comando a otro menú o panel, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, configure la rueda, los botones que encuadran la planta y lo que hace cada botón en las vistas 3D.
5. Dé un nombre y haga clic en {{ui:Guardar}}.

Al guardar un estilo integrado se crea su propia copia ("Mi Diseño residencial"); el integrado nunca cambia. Una tecla asignada a dos comandos, o una que se ejecutaría antes de que pudiera escribirse una tecla de dos letras, aparece en rojo y debe corregirse antes de guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el predeterminado) o {{ui:Girar hacia arriba aleja}}, y la velocidad. Un pellizco en el panel táctil siempre hace zoom en el sentido en que se mueven sus dedos.
- **Encuadrar la planta y los dibujos con**: cualquiera de los botones izquierdo, central y derecho. {{key:Space}} y arrastrar también encuadran; un arrastre con el botón izquierdo solo encuadra donde un clic no seleccionaría ni dibujaría nada.
- **Arrastrar en las vistas 3D**: {{ui:Propio de cada vista}} mantiene los botones de BimCraft (izquierdo orbita, derecho encuadra). O asigne a cada botón orbitar, encuadrar, hacer zoom o ninguna acción; {{key:Shift}} con el botón intercambia órbita y encuadre. Un clic sin arrastrar sigue seleccionando.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un archivo pequeño `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de BimCraft: lo demás (un comando que esta versión no tiene, una tecla que aquí no funciona) se omite y se cuenta en la línea de estado. {{ui:Eliminar este estilo}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las apps}} debajo de las tarjetas de estilo hace que cada app se abra en su estilo equivalente (su propia barra de herramientas, una barra de menús, una cinta o {{ui:Dibujo clásico}}; {{ui:Visor}} es exclusivo de BimCraft y no tiene equivalente en otras apps), con los cambios que hizo en cada app; una app sin estilo equivalente conserva el suyo. Elegir otro estilo en una app cambia solo esa app.
:::

Relacionados: [Teclado y ratón](topic:keyboard) · [Configuración de BimCraft](topic:settings) · [Si viene de otros programas BIM y de dibujo](topic:coming-from)
