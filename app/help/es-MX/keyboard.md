---
title: Teclas y ratón
summary: Cada tecla, acción de ratón, panel táctil y pantalla táctil de BimCraft, agrupadas según lo que esté viendo.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, trackpad, táctil, órbita, encuadre, zoom, ocultar, aislar, transparencia, deshacer, rehacer, copiar, pegar, duplicar, guardar, encuadrar, vista de impresión, escape, configuración, dibujo, muro, puerta, ventana, planta
from: 5c6eedce
---

BimCraft tiene pocos atajos. La mayor parte del trabajo se hace con el ratón y los paneles. Los atajos escritos con {{key:Mod}} usan Command en Mac y Ctrl en los demás sistemas. Vea [Teclas, ratones y trackpads](common:keys) para ver cómo se escriben las teclas en esta ayuda.

## En todas partes

| Tecla | Qué hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna los modos de pantalla: normal, pantalla completa y pantalla completa con las barras ocultas. Ctrl en todas las plataformas, incluido Mac |
| {{key:Esc}} | Sale de pantalla completa |
| {{key:Mod+,}} | Abre {{ui:Configuración}}. Vea [Configuración de BimCraft](topic:settings) |
| {{key:Tab}} | Pasa entre botones, casillas y valores. Todos los controles se pueden usar desde el teclado |

## Vista 3D (modelos IFC)

| Tecla o acción | Qué hace |
|---|---|
| {{key:F}} | Encuadra todo el modelo, en vista tres cuartos (igual que {{ui:Encuadrar}}) |
| {{key:Esc}} | Quita la selección, o deja de colocar o pegar |
| Clic | Selecciona el elemento bajo el puntero; haga clic en un fondo vacío para quitar la selección |
| {{key:Mod}}+clic o {{key:Shift}}+clic | Agrega un elemento a la selección, o lo quita |
| {{key:H}} | Oculta los elementos seleccionados. Vea [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate) |
| {{key:I}} | Muestra solo los elementos seleccionados (aislar) |
| {{key:T}} | Muestra los elementos seleccionados y deja lo demás transparente |
| {{key:Shift+H}} | Vuelve a mostrar todos los elementos |
| {{ui:Recorrido}} | Luego, {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las flechas caminan, {{key:Shift}} corre, arrastrar gira la vista, {{key:Esc}} detiene. Vea [Recorrer un modelo](topic:walk) |
| {{key:M}} | Mide distancias y áreas de caras. Vea [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure) |
| Arrastrar con el botón izquierdo | Órbita |
| Arrastrar con el botón derecho | Encuadre |
| {{key:Shift}} o {{key:Mod}} y arrastrar con el botón izquierdo | Encuadre (útil en un trackpad) |
| Girar la rueda, o arrastrar con el botón central | Zoom |
| Desplazar con dos dedos o pellizcar en un trackpad | Zoom |
| Un dedo (táctil) | Órbita; un toque selecciona |
| Dos dedos (táctil) | Pellizcar para hacer zoom; mover juntos para encuadrar |

| {{key:X}} | Plano de sección activado y desactivado. Vea [Cortar un modelo IFC con un plano de sección](topic:section-plane) |
| {{key:Shift+X}} | Caja de sección alrededor de los elementos seleccionados, con el espacio libre configurado en Configuración |

No hay teclas para {{ui:Superior}}, {{ui:Frontal}} y {{ui:Lateral}}; use los botones.

## Edición

Los mismos comandos están en la barra de herramientas: {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y el menú {{ui:Más}}, que muestra cada tecla. Funcionan en la vista 3D de un modelo IFC, no mientras escribe en un campo. Vea [Copiar, pegar y duplicar elementos de la biblioteca](topic:copy-paste).

| Tecla | Qué hace |
|---|---|
| {{key:Mod+Z}} | Deshace el último cambio |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehace lo que Deshacer revirtió |
| {{key:Mod+C}} | Copia los elementos seleccionados (sus nombres y propiedades también van al portapapeles como texto) |
| {{key:Mod+X}} | Corta los elementos seleccionados: los copia y luego los elimina |
| {{key:Mod+V}} | Pega lo que copió: sigue al puntero; haga clic donde debe ir |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: donde estaba lo cortado, o junto a los originales después de copiar |
| {{key:Mod+D}} | Duplica: copia los elementos seleccionados e inicia su pegado |
| {{key:Delete}} | Elimina los elementos seleccionados, con sus partes y huecos. Vea [Eliminar, cortar, copiar y pegar elementos de construcción](topic:edit-elements) |
| {{key:Mod+A}} | Selecciona todos los elementos mostrados |
| {{key:Esc}} | No selecciona nada |

Cuando hay texto seleccionado en la página, {{key:Mod+C}} copia ese texto como de costumbre.

## Vista de planta (Dibujo)

Funcionan mientras {{ui:Dibujo}} está activado y no escribe en un campo. Vea [Dibujar muros](topic:draw-walls) y [Puertas y ventanas](topic:doors-and-windows).

| Tecla o acción | Qué hace |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:W}} | {{ui:Muro}} |
| {{key:D}} | {{ui:Puerta}} |
| {{key:N}} | {{ui:Ventana}} |
| {{key:H}} | Con {{ui:Puerta}} o {{ui:Ventana}}: bisagras en el otro extremo |
| {{key:Shift}} mientras dibuja un muro | Lo mantiene en 0°, 90°, 180° o 270° |
| Dígitos y las marcas de pie y pulgada (`'` y `"`) | Empieza a escribir una longitud en el cuadro {{ui:Longitud}}; {{key:Enter}} la usa |
| {{key:Enter}}, {{key:Esc}}, clic derecho o doble clic | Termina el muro que se está dibujando; {{key:Esc}} de nuevo vuelve a {{ui:Seleccionar}} |
| {{key:Delete}} | Elimina los muros, puertas y ventanas seleccionados; los muros restantes se vuelven a unir |
| {{key:F}} con el puntero sobre la planta | Encuadra la planta |
| Girar la rueda | Zoom alrededor del puntero |
| Arrastrar con el botón central o derecho, o {{key:Space}} y arrastrar | Encuadre; con {{ui:Seleccionar}} activado, un arrastre simple también encuadra |
| Arrastrar una puerta o ventana con {{ui:Seleccionar}} | La desplaza a lo largo de su muro, o a otro muro |
| Dos dedos (táctil) | Pellizcar para hacer zoom; mover juntos para encuadrar |

## Colocar y pegar elementos de la biblioteca

| Tecla | Qué hace |
|---|---|
| {{key:R}} | Gira el elemento 90° |
| {{key:Tab}} | Ajuste a muro activado y desactivado: la parte trasera del elemento se pega al muro más cercano |
| {{key:Enter}} en **X, Y (mm)** | Coloca el elemento en la posición escrita |
| {{key:Esc}} | Deja de colocar o pegar |

## Edición de valores IFC

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | Conserva el valor escrito |
| {{key:Esc}} | Cancela y restablece el valor anterior |
| Clic en otro lugar | Conserva el valor escrito |
| {{key:Mod+Z}} | Deshace el último cambio. Solo mientras tenga cambios sin guardar y no esté escribiendo en un campo |
| {{key:Mod+Y}} | Rehace lo que Deshacer revirtió |
| {{key:Mod+S}} | Guarda como IFC. Solo mientras tenga cambios sin guardar; de lo contrario se abre el comando de guardado propio del navegador |

Para editar solo con el teclado: pulse {{key:Tab}} hasta que un valor esté resaltado y luego pulse {{key:Enter}} para empezar a escribir.

## Dibujos 2D (DWG y DXF)

| Tecla o acción | Qué hace |
|---|---|
| {{key:F}} | Encuadra el dibujo o la hoja |
| {{key:P}} | Vista de impresión activada y desactivada |
| Doble clic | Encuadra |
| Arrastrar con cualquier botón | Encuadre |
| Girar la rueda | Zoom en el puntero |
| Desplazar con dos dedos o pellizcar en un trackpad | Zoom en el puntero. Desplazar con dos dedos no encuadra |
| Un dedo (táctil) | Encuadre. El zoom por pellizco todavía no está disponible para dibujos |

## Dibujos en 3D

| Tecla o acción | Qué hace |
|---|---|
| {{key:3}} | 3D activado y desactivado (también en la vista 2D) |
| {{key:F}} | Extensión: todo el dibujo |
| Arrastrar con el botón central o izquierdo | Órbita |
| Arrastrar con el botón derecho, o {{key:Shift}} y arrastrar | Encuadre |
| Girar la rueda | Zoom hacia lo que está bajo el puntero |
| Deslizar con dos dedos en un trackpad | Órbita; con {{key:Shift}}, encuadre |
| Pellizcar en un trackpad | Zoom |
| Un dedo (táctil) | Órbita |
| Dos dedos (táctil) | Pellizcar para hacer zoom; mover juntos para encuadrar |

{{key:F}}, {{key:P}} y {{key:3}} no hacen nada mientras escribe en un campo, mientras se muestra la cédula de equipos, o cuando mantiene presionado {{key:Mod}} o {{key:Alt}}.

## Archivos

| Acción | Qué hace |
|---|---|
| Arrastrar un archivo a la página | Lo abre |
| Arrastrar una carpeta a la página | La abre como carpeta de proyecto, sin pedir permiso |
