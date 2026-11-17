---
title: Solución de problemas
summary: Mensajes que muestra BimCraft, qué los causa y qué hacer, al abrir archivos, carpetas, modelos 3D, dibujos y ediciones.
keywords: problema, error, no funciona, no se puede abrir, fallo, incompleto, dañado, lento, bloqueo, en blanco, falta, mensaje, ayuda
from: 1e5a79fc
---

Los mensajes aparecen en la barra de estado de la parte inferior del escenario, en rojo cuando algo ha fallado. Busque el mensaje a continuación.

## Abrir archivos

**"*name* no es un archivo IFC, RVT, RFA, DWG ni DXF."**
BimCraft no ha reconocido el archivo. Compruebe la extensión y que el archivo no esté vacío. Los PDF, las imágenes y los archivos de ofimática no se abren.

**".ifczip no se admite todavía. Guarde o exporte el modelo como archivo .ifc normal."** (también para `.ifcxml`)
Descomprima el `.ifczip` (es un zip normal que contiene un `.ifc`) o exporte un IFC normal.

**"… es un archivo de proyecto que BimCraft todavía no lee."**
Un archivo `.pln`, `.pla`, `.tpl` o `.bpn`. Exporte IFC o DWG desde él y ábralo: véase [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

**"Este archivo IFC no se ha podido leer."**
El archivo IFC está dañado o no es realmente IFC. Ábralo en un editor de texto: un archivo IFC real empieza por `ISO-10303-21;`. Vuelva a exportarlo.

**"Este archivo está incompleto: ocupa … MB, pero su propio índice apunta a datos de al menos … MB más adentro. …"**
El archivo de proyecto o de familia se cortó al copiarlo, subirlo o sincronizarlo. Un archivo de una unidad en la nube que está "solo en línea" tiene el mismo aspecto. Un archivo abierto por sí solo se abre igualmente, con este mensaje en la parte superior de la ficha y "Se muestra lo recuperado; copie de nuevo el original para ver el modelo completo.": la ficha solo muestra las partes cuyos bytes están todos en el archivo y enumera el resto en **No está en el archivo**. Haga disponible el archivo sin conexión en su unidad en la nube, o copie el original de nuevo, y vuelva a abrirlo. En una carpeta, BimCraft muestra la copia de seguridad completa más reciente.

**"… La lista de contenido del archivo también está en la parte que falta, así que no se puede abrir nada de él."**
El archivo se cortó tan al principio que ni siquiera está su lista de contenido. Esta copia no permite recuperar nada. Copie de nuevo el original y vuelva a abrirlo.

**"Este archivo compuesto no tiene un flujo BasicFileInfo, así que no es un archivo de Revit."**
El archivo es un archivo compuesto de otro tipo (los documentos de oficina antiguos usan el mismo contenedor). Compruebe que eligió el archivo correcto.

**"Todavía se está procesando el anterior…"**
BimCraft sigue ocupado con el archivo o la carpeta anterior. Espere a que termine la barra de estado y vuelva a intentarlo.

**El selector de archivos atenúa mi archivo.**
El selector solo ofrece archivos `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` y `.dxf`. Arrastre otros archivos a la página en su lugar, y BimCraft le indicará si puede leerlos.

## Abrir carpetas

**"Esta carpeta tiene más de 20.000 archivos. Elija una carpeta más pequeña, como la de un proyecto."**
Ha elegido una carpeta demasiado alta, como una unidad completa. Elija una carpeta de proyecto.

**"El navegador no ha dado acceso a *name*. Elíjala de nuevo con Abrir una carpeta."**
Ha hecho clic en {{ui:Reabrir}} en una carpeta reciente y el permiso del navegador se ha denegado o ha caducado. Vuelva a elegir la carpeta, o arrástrela.

**El navegador dice que va a "subir" archivos.**
Es la forma en que el navegador lo expresa para entregar archivos a una página. BimCraft no los envía a ningún sitio. Arrastre la carpeta para evitar esa pregunta.

**No pasa nada en un teléfono o en una tableta.**
Muchos navegadores móviles no pueden elegir carpetas. Abra archivos sueltos, o use un ordenador.

## El motor IFC se carga la primera vez

**La barra de estado se queda en "Iniciando el motor IFC…", o muestra un error como "Failed to fetch".**
No se pudo descargar el motor IFC. Puede que no tenga conexión, o que un cortafuegos o un bloqueador de contenido lo impida.

:::offline
Está sin conexión. Si el botón de la barra de la aplicación no dice {{ui:Listo sin conexión}}, el motor IFC nunca se guardó en este navegador. Vuelva a conectarse, abra el archivo de nuevo y haga clic en {{ui:Guardar para uso sin conexión}} para que funcione sin conexión la próxima vez. Véase [En línea y sin conexión](topic:online-offline).
:::

:::online
Recargue la página y vuelva a intentarlo. En una red de trabajo, pida a su departamento de informática que permita los archivos `.wasm` del sitio.
:::

## Guardar para uso sin conexión

**El botón dice {{ui:No se pudo guardar}}.**
Algunos archivos no se descargaron, normalmente porque la conexión se interrumpió. Compruebe su conexión y haga clic de nuevo en el botón. Cualquier copia sin conexión anterior se conserva hasta que una nueva esté completa.

**El botón dice {{ui:Sin conexión no disponible}}.**
Esta ventana no puede guardar una copia sin conexión, por ejemplo una ventana privada o un equipo de trabajo administrado. Véase [Trabajar sin conexión](common:offline).

**El botón permanece en "Guardando *n* de *m*" durante un rato.**
La copia de BimCraft ocupa unos 11 MB, sobre todo el motor IFC. Mantenga abierta la pestaña hasta que diga {{ui:Listo sin conexión}}.

**BimCraft se abre sin conexión pero parece desactualizado.**
Su copia guardada es de una visita anterior. Cuando tenga conexión, haga clic en {{ui:Listo sin conexión}} y elija {{ui:Guardar de nuevo (obtener la versión más reciente)}}.

## Vista 3D

**El modelo no está donde esperaba, o es diminuto.**
Pulse {{key:F}} o haga clic en {{ui:Encuadrar}}. Encuadrar abarca siempre todo el modelo, incluidas las plantas que haya desmarcado y los elementos sueltos lejos del edificio, de modo que el edificio puede verse pequeño. Haga zoom desde ahí.

**Al hacer clic no se selecciona nada.**
Mantenga el ratón quieto mientras hace clic: un arrastre pequeño orbita. Los elementos de plantas desmarcadas no pueden seleccionarse. Con {{ui:Espacios}} activado, los espacios transparentes se seleccionan antes que lo que hay dentro de ellos.

**El botón {{ui:Aristas}} aparece atenuado: "Las aristas están desactivadas en modelos muy grandes".**
El modelo tiene más de 1.5 millones de triángulos. Las aristas se dejan desactivadas para ahorrar memoria.

**La pestaña se vuelve lenta, blanca o muestra la página de error del navegador.**
El modelo es demasiado grande para la memoria que el navegador da a la pestaña. Cierre las demás pestañas y recargue. Exporte un IFC más pequeño: un edificio, una disciplina o menos plantas. Véase [Navegadores, dispositivos y memoria](topic:platforms).

**La vista 3D permanece en blanco.**
WebGL puede estar desactivado o bloqueado. En la configuración del navegador, active la aceleración por hardware (o la aceleración gráfica) y reinicie el navegador.

## Editar IFC

**"Introduzca un número."** El valor es numérico. Escriba un número simple sin unidades, como `2.4`.

**"Introduzca un número entero."** El valor es un recuento o un entero. Quite los decimales.

**"Solo se pueden editar propiedades de valor único."** Las listas, las enumeraciones y las cantidades son de solo lectura.

**{{key:Mod+S}} abre la ventana "Guardar página" del navegador.**
No hay cambios sin guardar, así que BimCraft deja la tecla al navegador. Cierre la ventana.

**{{key:Mod+Z}} no hace nada.**
Solo funciona mientras tiene cambios sin guardar y no está escribiendo en un campo. Después de guardar, no queda nada que deshacer.

**La lista {{ui:Cambios}} sigue mostrando ediciones después de descartarlas y abrir un dibujo o una carpeta.**
Cuando responde con Aceptar a la pregunta "¿Descartarlas?" y después abre algo distinto de un modelo IFC, las ediciones antiguas se conservan en memoria y {{ui:Guardar como IFC}} seguiría guardándolas. Para empezar de verdad desde cero, vuelva a abrir el IFC original o recargue la página.

**Mi edición cambió más elementos de los que seleccioné.**
Ha cambiado una propiedad de un conjunto marcado "(tipo)". Las propiedades de tipo se aplican a todos los elementos del tipo. Haga clic en {{ui:Deshacer}}. Véase [Cambiar una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance).

## Dibujos

**"*name* no se pudo leer. Puede que esté dañado o guardado en un formato que el lector todavía no admite (…)."**
Guarde el dibujo desde el programa que lo creó como DWG antiguo (2018 o anterior) o como DXF, e inténtelo de nuevo.

**"Este dibujo no tiene nada que mostrar."** o **"*name* es un dibujo vacío: no contiene líneas, textos ni bloques."**
El dibujo está vacío, o solo contiene cosas que BimCraft todavía no dibuja (véase **No dibujado todavía** a la derecha).

**"Este dibujo es muy grande; solo se muestra una parte."**
BimCraft ha dejado de dibujar para mantener la respuesta. Desactive las capas que no necesita, o abra las hojas que necesite desde un dibujo más pequeño.

**Faltan partes de una hoja.**
Puede que falten dibujos vinculados: busque en **Dibujos vinculados** a la derecha. Véase [Buscar dibujos y imágenes vinculados](topic:dwg-linked-files). Las capas también pueden estar desactivadas: haga clic en {{ui:Todas activadas}}.

**Una imagen aparece como un marco vacío.**
No se encontró su archivo, o es un TIFF ("TIFF no se puede mostrar en un navegador"). Añada una copia en PNG o JPEG con {{ui:Agregar imágenes…}}.

**Al desplazarme con el panel táctil, se hace zoom en lugar de mover el dibujo.**
Así funcionan los dibujos en BimCraft. Haga clic y arrastre para desplazarse.

## Si sigue sin funcionar

Lea [Lo que todavía no está construido](topic:not-built-yet): puede que lo que busca no exista en esta versión.
