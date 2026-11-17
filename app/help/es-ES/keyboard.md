---
title: Teclas y ratón
summary: Todas las acciones de teclado, ratón, trackpad y táctiles en BimCraft, agrupadas según lo que está viendo.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, trackpad, táctil, órbita, desplazar, zoom, ocultar, aislar, transparencia, deshacer, rehacer, copiar, pegar, duplicar, guardar, encuadrar, vista de impresión, escape, configuración, dibujar, muro, puerta, ventana, plano
from: 5c6eedce
---

BimCraft tiene pocos atajos. La mayor parte del trabajo se hace con el ratón y los paneles. Los atajos escritos con {{key:Mod}} usan Comando en Mac y Ctrl en el resto. Consulte [Teclas, ratones y trackpads](common:keys) para ver cómo se escriben las teclas en esta ayuda.

## En todas partes

| Tecla | Qué hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Cambia los modos de pantalla: normal, pantalla completa y pantalla completa con las barras ocultas. Ctrl en todas las plataformas, incluido Mac |
| {{key:Esc}} | Sale de pantalla completa |
| {{key:Mod+,}} | Abre {{ui:Configuración}}. Consulte [Configuración de BimCraft](topic:settings) |
| {{key:Tab}} | Se desplaza entre botones, casillas y valores. Se puede llegar a todos los controles con el teclado |

## Vista 3D (modelos IFC)

| Tecla o acción | Qué hace |
|---|---|
| {{key:F}} | Encuadra todo el modelo, vista a tres cuartos (igual que {{ui:Encuadrar}}) |
| {{key:Esc}} | Anula la selección, o deja de colocar o pegar |
| Clic | Selecciona el elemento bajo el puntero; haga clic en el fondo vacío para anular |
| {{key:Mod}}+clic o {{key:Shift}}+clic | Añade un elemento a la selección o lo quita |
| {{key:H}} | Oculta los elementos seleccionados. Consulte [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate) |
| {{key:I}} | Muestra solo los elementos seleccionados (aislar) |
| {{key:T}} | Muestra los elementos seleccionados y el resto transparente |
| {{key:Shift+H}} | Vuelve a mostrar todos los elementos |
| {{ui:Recorrido}} | Después, {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las flechas recorren; {{key:Shift}} corre; arrastrar mira alrededor; {{key:Esc}} detiene. Consulte [Recorrer un modelo](topic:walk) |
| {{key:M}} | Mide distancias y áreas de caras. Consulte [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure) |
| Arrastrar con el botón izquierdo | Órbita |
| Arrastrar con el botón derecho | Desplazar |
| {{key:Shift}} o {{key:Mod}} y arrastrar con el botón izquierdo | Desplazar (útil en un trackpad) |
| Girar la rueda, o arrastrar con el botón central | Zoom |
| Desplazamiento de dos dedos o pellizco en un trackpad | Zoom |
| Un dedo (táctil) | Órbita; un toque selecciona |
| Dos dedos (táctil) | Pellizcar para ampliar, mover juntos para desplazar |

| {{key:X}} | Plano de sección activado y desactivado. Consulte [Cortar un modelo IFC con un plano de sección](topic:section-plane) |
| {{key:Shift+X}} | Caja de sección alrededor de los elementos seleccionados, con el recinto configurado en Configuración |

No hay teclas para {{ui:Superior}}, {{ui:Frontal}} y {{ui:Lateral}}; use los botones.

## Editar

Los mismos comandos están en la barra de herramientas: {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y el menú {{ui:Más}}, que muestra cada tecla. Funcionan en la vista 3D de un modelo IFC, no mientras escribe en un campo. Consulte [Copiar, pegar y duplicar elementos de la biblioteca](topic:copy-paste).

| Tecla | Qué hace |
|---|---|
| {{key:Mod+Z}} | Deshace el último cambio |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehace lo que Deshacer retiró |
| {{key:Mod+C}} | Copia los elementos seleccionados (sus nombres y propiedades también van al portapapeles como texto) |
| {{key:Mod+X}} | Corta los elementos seleccionados: los copia y después los elimina |
| {{key:Mod+V}} | Pega lo copiado: sigue al puntero; haga clic donde deba ir |
| {{key:Mod+Shift+V}} | Pega en su sitio: donde estaba un corte, o junto a los originales tras una copia |
| {{key:Mod+D}} | Duplica: copia los elementos seleccionados y empieza a pegarlos |
| {{key:Delete}} | Elimina los elementos seleccionados, con sus partes y huecos. Consulte [Eliminar, cortar, copiar y pegar elementos de construcción](topic:edit-elements) |
| {{key:Mod+A}} | Selecciona todos los elementos visibles |
| {{key:Esc}} | No selecciona ninguno |

Cuando hay texto seleccionado en la página, {{key:Mod+C}} copia ese texto como de costumbre.

## Vista en planta (Dibujo)

Estas acciones funcionan con {{ui:Dibujo}} activado y mientras no escribe en un campo. Consulte [Dibujar muros](topic:draw-walls) y [Puertas y ventanas](topic:doors-and-windows).

| Tecla o acción | Qué hace |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:W}} | {{ui:Muro}} |
| {{key:D}} | {{ui:Puerta}} |
| {{key:N}} | {{ui:Ventana}} |
| {{key:H}} | Con {{ui:Puerta}} o {{ui:Ventana}}: bisagras en el otro extremo |
| {{key:Shift}} mientras dibuja un muro | Lo mantiene a 0°, 90°, 180° o 270° |
| Dígitos y las marcas de pie y de pulgada (`'` y `"`) | Empieza a escribir una longitud en el cuadro {{ui:Longitud}}; {{key:Enter}} la aplica |
| {{key:Enter}}, {{key:Esc}}, clic derecho o doble clic | Termina el muro que dibuja; {{key:Esc}} de nuevo vuelve a {{ui:Seleccionar}} |
| {{key:Delete}} | Elimina los muros, puertas y ventanas seleccionados; los muros restantes se vuelven a unir |
| {{key:F}} con el puntero sobre el plano | Encuadra el plano |
| Girar la rueda | Zoom alrededor del puntero |
| Arrastrar con el botón central o derecho, o {{key:Space}} y arrastrar | Desplazar; con {{ui:Seleccionar}} activado, un arrastre simple también desplaza |
| Arrastrar una puerta o ventana con {{ui:Seleccionar}} | La mueve a lo largo de su muro, o a otro muro |
| Dos dedos (táctil) | Pellizcar para ampliar, mover juntos para desplazar |

## Colocar y pegar elementos de la biblioteca

| Tecla | Qué hace |
|---|---|
| {{key:R}} | Gira el elemento 90° |
| {{key:Tab}} | Ajuste al muro activado y desactivado: el dorso del elemento se apoya en el muro más cercano |
| {{key:Enter}} en **X, Y (mm)** | Coloca el elemento en la posición escrita |
| {{key:Esc}} | Deja de colocar o pegar |

## Editar valores IFC

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | Mantiene el valor escrito |
| {{key:Esc}} | Cancela y restaura el valor anterior |
| Clic en otro lugar | Mantiene el valor escrito |
| {{key:Mod+Z}} | Deshace el último cambio. Solo mientras tenga cambios sin guardar y no esté escribiendo en un campo |
| {{key:Mod+Y}} | Rehace lo que Deshacer retiró |
| {{key:Mod+S}} | Guarda como IFC. Solo si tiene cambios sin guardar; en caso contrario se abre el comando de guardado del navegador |

Para editar solo con el teclado: pulse {{key:Tab}} hasta que un valor esté resaltado y, después, pulse {{key:Enter}} para empezar a escribir.

## Dibujos 2D (DWG y DXF)

| Tecla o acción | Qué hace |
|---|---|
| {{key:F}} | Encuadra el dibujo o la hoja |
| {{key:P}} | Activa y desactiva la vista de impresión |
| Doble clic | Encuadra |
| Arrastrar con cualquier botón | Desplazar |
| Girar la rueda | Zoom en el puntero |
| Desplazamiento de dos dedos o pellizco en un trackpad | Zoom en el puntero. El desplazamiento de dos dedos no desplaza |
| Un dedo (táctil) | Desplazar. El zoom por pellizco todavía no está disponible para dibujos |

## Dibujos en 3D

| Tecla o acción | Qué hace |
|---|---|
| {{key:3}} | Activa y desactiva 3D (también en la vista 2D) |
| {{key:F}} | Extensiones: todo el dibujo |
| Arrastrar con el botón central o izquierdo | Órbita |
| Arrastrar con el botón derecho, o {{key:Shift}} y arrastrar | Desplazar |
| Girar la rueda | Zoom hacia lo que hay bajo el puntero |
| Deslizar con dos dedos en un trackpad | Órbita; con {{key:Shift}}, desplazar |
| Pellizcar en un trackpad | Zoom |
| Un dedo (táctil) | Órbita |
| Dos dedos (táctil) | Pellizcar para ampliar, mover juntos para desplazar |

{{key:F}}, {{key:P}} y {{key:3}} no hacen nada mientras escribe en un campo, mientras se muestra la tabla de equipos, o cuando mantiene pulsado {{key:Mod}} o {{key:Alt}}.

## Archivos

| Acción | Qué hace |
|---|---|
| Arrastrar un archivo a la página | Lo abre |
| Arrastrar una carpeta a la página | La abre como carpeta de proyecto, sin pedir permiso |
