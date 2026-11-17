---
title: Solución de problemas
summary: Mensajes que muestra BimCraft, qué los causa y qué hacer, para abrir archivos, carpetas, modelos 3D, planos y ediciones.
keywords: problema, error, no funciona, no se puede abrir, falló, incompleto, dañado, lento, cuelgue, en blanco, faltante, mensaje, ayuda
from: 1e5a79fc
---

Los mensajes aparecen en la línea de estado al pie del escenario, en rojo cuando algo falló. Busque el mensaje a continuación.

## Abrir archivos

**"*name* no es un archivo IFC, RVT, RFA, DWG o DXF."**
BimCraft no reconoció el archivo. Verifique la extensión y que el archivo no esté vacío. Los PDF, las imágenes y los archivos de oficina no se abren.

**".ifczip todavía no está admitido. Guarde o exporte el modelo como un archivo .ifc simple."** (también para `.ifcxml`)
Descomprima el `.ifczip` (es un zip común que contiene un `.ifc`) o exporte IFC simple.

**"… es un archivo de proyecto que BimCraft todavía no lee."**
Un archivo `.pln`, `.pla`, `.tpl` o `.bpn`. Exporte IFC o DWG desde él y ábralo: ver [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

**"No se pudo leer este archivo IFC."**
El archivo IFC está dañado o no es realmente IFC. Ábralo en un editor de texto: un archivo IFC real comienza con `ISO-10303-21;`. Vuelva a exportarlo.

**"Este archivo está incompleto: tiene … MB, pero su propio índice apunta a datos de al menos … MB más adentro. …"**
El archivo de proyecto o de familia se cortó mientras se copiaba, subía o sincronizaba. Un archivo de una unidad en la nube que está "solo en línea" se ve igual. Un archivo abierto por sí solo se abre igual, con este mensaje arriba de la tarjeta y "Mostrando lo que se pudo recuperar; copie el original otra vez para el modelo completo.": la tarjeta solo muestra las partes cuyos bytes están todos en el archivo y enumera el resto bajo **No está en el archivo**. Ponga el archivo disponible sin conexión en su unidad en la nube, o copie el original otra vez, y vuelva a abrirlo. En una carpeta, BimCraft muestra la copia de seguridad completa más reciente.

**"… La lista de contenido del archivo también está en la parte que falta, así que no se puede abrir nada de él."**
El archivo se cortó tan al principio que ni siquiera está su lista de contenido. No se puede recuperar nada de esta copia. Copie el original otra vez y vuelva a abrirlo.

**"Este archivo compuesto no tiene un flujo BasicFileInfo, así que no es un archivo de Revit."**
El archivo es un archivo compuesto de otro tipo (los documentos de oficina antiguos usan el mismo contenedor). Verifique que eligió el archivo correcto.

**"Todavía se está trabajando en el anterior…"**
BimCraft todavía está ocupado con el archivo o la carpeta anterior. Espere a que la línea de estado termine y luego intente de nuevo.

**El selector de archivos no deja elegir mi archivo.**
El selector solo ofrece `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` y `.dxf`. Arrastre otros archivos a la página, y BimCraft le dirá si puede leerlos.

## Abrir carpetas

**"Esta carpeta tiene más de 20,000 archivos. Elija una carpeta más pequeña, como la de un proyecto."**
Eligió una carpeta demasiado alta, como una unidad completa. Elija la carpeta de un proyecto.

**"El navegador no dio acceso a *name*. Elíjala de nuevo con Abrir una carpeta."**
Hizo clic en {{ui:Reopen}} en una carpeta reciente y el permiso del navegador fue denegado o venció. Elija la carpeta de nuevo, o arrástrela.

**El navegador dice que va a "subir" archivos.**
Es el texto propio del navegador para entregar archivos a una página. BimCraft no los envía a ningún lado. Arrastre la carpeta para evitar la pregunta.

**Nada pasa en un teléfono o una tableta.**
Muchos navegadores móviles no pueden elegir carpetas. Abra archivos sueltos, o use una computadora.

## El motor IFC se carga la primera vez

**La línea de estado queda en "Iniciando el motor IFC…", o muestra un error como "Failed to fetch".**
No se pudo descargar el motor IFC. Puede que no tenga conexión, o un firewall o bloqueador de contenido lo esté impidiendo.

:::offline
Está sin conexión. Si el botón de la barra de aplicación no dice {{ui:Offline ready}}, el motor IFC nunca se guardó en este navegador. Reconéctese, abra el archivo otra vez y luego haga clic en {{ui:Save for offline}} para que funcione sin conexión la próxima vez. Ver [En línea y sin conexión](topic:online-offline).
:::

:::online
Recargue la página e intente de nuevo. En una red de trabajo, pida a su equipo de TI que permita los archivos `.wasm` del sitio.
:::

## Guardar para uso sin conexión

**El botón dice {{ui:Could not save}}.**
Algunos archivos no se descargaron, generalmente porque se cortó la conexión. Verifique su conexión y haga clic en el botón otra vez. Cualquier copia sin conexión anterior se conserva hasta que una nueva esté completa.

**El botón dice {{ui:Offline not available}}.**
Esta ventana no puede guardar una copia sin conexión, por ejemplo una ventana privada o una computadora de trabajo administrada. Ver [Trabajar sin conexión](common:offline).

**El botón queda en "Guardando *n* de *m*" por un rato.**
La copia de BimCraft pesa unos 11 MB, en su mayor parte el motor IFC. Mantenga la pestaña abierta hasta que diga {{ui:Offline ready}}.

**BimCraft se abrió sin conexión pero parece desactualizado.**
Su copia guardada es de una visita anterior. Cuando tenga conexión, haga clic en {{ui:Offline ready}} y elija {{ui:Save again (get the newest version)}}.

## Vista 3D

**El modelo no está donde esperaba, o se ve minúsculo.**
Presione {{key:F}} o haga clic en {{ui:Fit}}. Ajustar siempre encuadra todo el modelo, incluidos los pisos que desmarcó y los elementos sueltos lejos del edificio, así que el edificio puede verse pequeño. Haga zoom desde allí.

**Hacer clic no elige nada.**
Mantenga el mouse quieto mientras hace clic: un pequeño arrastre orbita. Los elementos de pisos desmarcados no pueden elegirse. Con {{ui:Spaces}} activado, los espacios transparentes se eligen antes que lo que hay dentro.

**El botón {{ui:Edges}} está en gris: "Los bordes están desactivados para modelos muy grandes".**
El modelo tiene más de 1.5 millones de triángulos. Los bordes quedan desactivados para ahorrar memoria.

**La pestaña se pone lenta, en blanco, o muestra la página de error del navegador.**
El modelo es demasiado grande para la memoria que el navegador da a la pestaña. Cierre otras pestañas y recargue. Exporte un IFC más pequeño: un edificio, una disciplina o menos pisos. Ver [Navegadores, dispositivos y memoria](topic:platforms).

**La vista 3D queda en blanco.**
WebGL puede estar desactivado o bloqueado. En la configuración del navegador, active la aceleración por hardware (o aceleración gráfica) y reinicie el navegador.

## Editar IFC

**"Use un número."** El valor es numérico. Escriba un número simple sin unidades, como `2.4`.

**"Use un número entero."** El valor es un conteo o un entero. Quite los decimales.

**"Solo se pueden editar las propiedades de valor único."** Las listas, enumeraciones y cantidades son de solo lectura.

**{{key:Mod+S}} abre la ventana "Guardar página" del navegador.**
No hay cambios sin guardar, así que BimCraft dejó la tecla al navegador. Cierre la ventana.

**{{key:Mod+Z}} no hace nada.**
Funciona solo mientras hay cambios sin guardar y no está escribiendo en un campo. Después de guardar, no queda nada para deshacer.

**La lista {{ui:Changes}} todavía muestra ediciones después de descartarlas y abrir un plano o una carpeta.**
Cuando responde "¿Descartarlas?" con Aceptar y luego abre algo distinto de un modelo IFC, las ediciones anteriores se mantienen en memoria y {{ui:Save as IFC}} seguiría guardándolas. Para empezar realmente de cero, abra el IFC original otra vez o recargue la página.

**Mi edición cambió más elementos de los que elegí.**
Cambió una propiedad de un conjunto marcado "(tipo)". Las propiedades de tipo se aplican a cada elemento del tipo. Haga clic en {{ui:Undo}}. Ver [Cambiar una propiedad de tipo para cada elemento de un tipo](topic:type-vs-instance).

## Planos

**"*name* no se pudo leer. Puede estar dañado, o guardado en un formato que el lector todavía no maneja (…)."**
Guarde el plano desde el programa que lo creó como DWG antiguo (2018 o anterior) o como DXF, y vuelva a intentar.

**"Este plano no tiene nada para mostrar."** o **"*name* es un plano vacío: no tiene líneas, texto ni bloques."**
El plano está vacío, o solo tiene cosas que BimCraft todavía no dibuja (ver **Todavía no se dibuja** a la derecha).

**"Este plano es muy grande; solo se muestra una parte."**
BimCraft dejó de dibujar para seguir respondiendo. Desactive las capas que no necesita, o abra las hojas que necesita desde un plano más chico.

**Faltan partes de una hoja.**
Pueden faltar planos vinculados: busque **Planos vinculados** a la derecha. Ver [Encontrar planos vinculados e imágenes](topic:dwg-linked-files). Las capas también pueden estar desactivadas: haga clic en {{ui:All on}}.

**Una imagen aparece como un marco vacío.**
No se encontró su archivo, o es un TIFF ("TIFF no se puede mostrar en un navegador"). Agregue una copia PNG o JPEG con {{ui:Add pictures…}}.

**El desplazamiento con mi trackpad hace zoom en vez de mover el plano.**
Así funcionan los planos en BimCraft. Haga clic y arrastre para desplazarse.

## Todavía sin solución

Lea [Lo que todavía no está construido](topic:not-built-yet): lo que busca puede no existir en esta versión.
