---
title: Solución de problemas
summary: Mensajes que muestra BimCraft, sus causas y qué hacer al abrir archivos, carpetas, modelos 3D, dibujos y al editar.
keywords: problema, error, no funciona, no se puede abrir, falló, incompleto, dañado, lento, fallo, en blanco, faltante, mensaje, ayuda
from: 1e5a79fc
---

Los mensajes aparecen en la línea de estado en la parte inferior de la escena, en rojo cuando algo falló. Busque el mensaje a continuación.

## Abrir archivos

**"*name* no es un archivo IFC, RVT, RFA, DWG ni DXF."**
BimCraft no reconoció el archivo. Revise la extensión y que el archivo no esté vacío. Los PDF, las imágenes y los archivos de oficina no se abren.

**".ifczip todavía no se admite. Guarde o exporte el modelo como archivo .ifc de texto plano."** (también para `.ifcxml`)
Descomprima el `.ifczip` (es un zip normal que contiene un `.ifc`) o exporte IFC de texto plano.

**"… es un archivo de proyecto que BimCraft todavía no lee."**
Un archivo `.pln`, `.pla`, `.tpl` o `.bpn`. Exporte IFC o DWG desde él y ábralo: vea [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

**"Este archivo IFC no se pudo leer."**
El archivo IFC está dañado o no es realmente IFC. Ábralo en un editor de texto: un archivo IFC real comienza con `ISO-10303-21;`. Expórtelo de nuevo.

**"Este archivo está incompleto: tiene … MB, pero su propio índice apunta a datos de al menos … MB dentro. …"**
El archivo de proyecto o de familia se cortó al copiarse, cargarse o sincronizarse. Un archivo de una unidad en la nube que está "solo en línea" se ve igual. Un archivo abierto por sí solo se abre igual, con este mensaje arriba de la tarjeta y "Mostrando lo que se recuperó; copie el original de nuevo para el modelo completo.": la tarjeta solo muestra las partes cuyos bytes están todos en el archivo, y enumera el resto en **No está en el archivo**. Haga el archivo disponible sin conexión en su unidad en la nube, o copie el original de nuevo, y vuelva a abrirlo. En una carpeta, BimCraft muestra en su lugar la copia de respaldo completa más reciente.

**"… La lista de contenido del archivo también está en la parte faltante, así que nada de lo que contiene se puede abrir."**
El archivo se cortó tan pronto que ni siquiera está su lista de contenido. No se puede recuperar nada de esta copia. Copie el original de nuevo y ábralo.

**"Este archivo compuesto no tiene un flujo BasicFileInfo, así que no es un archivo de Revit."**
El archivo es un archivo compuesto de otro tipo (los documentos de oficina antiguos usan el mismo contenedor). Verifique que eligió el archivo correcto.

**"Aún se está procesando el anterior…"**
BimCraft sigue ocupado con el archivo o la carpeta anterior. Espere a que la línea de estado termine y vuelva a intentarlo.

**El selector de archivos muestra mi archivo en gris.**
El selector solo ofrece `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` y `.dxf`. Arrastre otros archivos a la página, y BimCraft le indicará si puede leerlos.

## Abrir carpetas

**"Esta carpeta tiene más de 20,000 archivos. Elija una carpeta más pequeña, como la de un proyecto."**
Eligió una carpeta demasiado alta, como una unidad completa. Elija una carpeta de proyecto.

**"El navegador no dio acceso a *name*. Elíjala de nuevo con Abrir una carpeta."**
Hizo clic en {{ui:Reabrir}} en una carpeta reciente, y el permiso del navegador fue negado o caducó. Elija la carpeta de nuevo, o arrástrela.

**El navegador dice que va a "cargar" archivos.**
Es la forma en que el navegador dice que entrega archivos a una página. BimCraft no los envía a ningún lado. Arrastre la carpeta para evitar la pregunta.

**Nada sucede en un teléfono o tableta.**
Muchos navegadores móviles no pueden elegir carpetas. Abra archivos individuales, o use una computadora.

## El motor IFC se carga la primera vez

**La línea de estado se queda en "Iniciando el motor IFC…", o muestra un error como "Failed to fetch".**
No se pudo descargar el motor IFC. Puede que no tenga conexión, o que un firewall o un bloqueador de contenido lo esté impidiendo.

:::offline
Está sin conexión. Si el botón de la barra de la aplicación no dice {{ui:Lista sin conexión}}, el motor IFC nunca se guardó en este navegador. Reconéctese, vuelva a abrir el archivo y luego haga clic en {{ui:Guardar para usar sin conexión}} para que funcione sin conexión la próxima vez. Vea [En línea y sin conexión](topic:online-offline).
:::

:::online
Recargue la página e inténtelo de nuevo. En una red de trabajo, pida a su equipo de TI que permita los archivos `.wasm` del sitio.
:::

## Guardar para uso sin conexión

**El botón dice {{ui:No se pudo guardar}}.**
Algunos archivos no se descargaron, normalmente porque se cortó la conexión. Revise su conexión y haga clic de nuevo en el botón. Cualquier copia sin conexión anterior se conserva hasta que una nueva esté completa.

**El botón dice {{ui:Sin conexión no disponible}}.**
Esta ventana no puede guardar una copia sin conexión, por ejemplo una ventana privada o una computadora de trabajo administrada. Vea [Trabajar sin conexión](common:offline).

**El botón se queda en "Guardando *n* de *m*" durante un rato.**
La copia de BimCraft pesa unos 11 MB, en su mayoría el motor IFC. Mantenga la pestaña abierta hasta que diga {{ui:Lista sin conexión}}.

**BimCraft se abrió sin conexión, pero parece desactualizado.**
Su copia guardada es de una visita anterior. Cuando tenga conexión, haga clic en {{ui:Lista sin conexión}} y elija {{ui:Guardar de nuevo (obtener la versión más reciente)}}.

## Vista 3D

**El modelo no está donde esperaba, o está diminuto.**
Pulse {{key:F}} o haga clic en {{ui:Encuadrar}}. Encuadrar siempre abarca todo el modelo, incluidos los niveles que desmarcó y los elementos sueltos lejos del edificio, así que el edificio puede verse pequeño. Haga zoom desde ahí.

**Al hacer clic no se selecciona nada.**
Mantenga el ratón quieto mientras hace clic: un arrastre pequeño orbita. Los elementos de niveles desmarcados no se pueden seleccionar. Con {{ui:Espacios}} activado, los espacios transparentes se seleccionan antes que lo que hay dentro de ellos.

**El botón {{ui:Aristas}} está atenuado: "Las aristas están desactivadas para modelos muy grandes".**
El modelo tiene más de 1.5 millones de triángulos. Las aristas se dejan desactivadas para ahorrar memoria.

**La pestaña se vuelve lenta, blanca o muestra la página de fallo del navegador.**
El modelo es demasiado grande para la memoria que el navegador le da a la pestaña. Cierre otras pestañas y recargue. Exporte un IFC más pequeño: un edificio, una disciplina o menos niveles. Vea [Navegadores, dispositivos y memoria](topic:platforms).

**La vista 3D se queda en blanco.**
WebGL puede estar desactivado o bloqueado. En la configuración del navegador, active la aceleración por hardware (o la aceleración de gráficos) y reinicie el navegador.

## Editar IFC

**"Use un número."** El valor es numérico. Escriba un número simple sin unidades, como `2.4`.

**"Use un número entero."** El valor es un conteo o un entero. Quite los decimales.

**"Solo se pueden editar propiedades de valor único."** Las listas, enumeraciones y cantidades son de solo lectura.

**{{key:Mod+S}} abre la ventana "Guardar página" del navegador.**
No hay cambios sin guardar, así que BimCraft dejó la tecla al navegador. Cierre la ventana.

**{{key:Mod+Z}} no hace nada.**
Solo funciona mientras tiene cambios sin guardar y no está escribiendo en un campo. Después de guardar, no queda nada que deshacer.

**La lista de {{ui:Cambios}} todavía muestra ediciones después de descartarlas y abrir un dibujo o una carpeta.**
Cuando responde "¿Descartarlas?" con Aceptar y luego abre algo distinto de un modelo IFC, las ediciones anteriores se mantienen en memoria, y {{ui:Guardar como IFC}} aún las guardaría. Para empezar de cero de verdad, vuelva a abrir el IFC original o recargue la página.

**Mi edición cambió más elementos de los que seleccioné.**
Cambió una propiedad de un conjunto marcado "(tipo)". Las propiedades de tipo se aplican a todos los elementos del tipo. Haga clic en {{ui:Deshacer}}. Vea [Cambiar una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance).

## Dibujos

**"*name* no se pudo leer. Puede estar dañado, o estar guardado en un formato que el lector todavía no maneja (…)."**
Guarde el dibujo desde el programa que lo creó como DWG de una versión anterior (2018 o anterior) o como DXF, e inténtelo de nuevo.

**"Este dibujo no tiene nada que mostrar."** o **"*name* es un dibujo vacío: no contiene líneas, texto ni bloques."**
El dibujo está vacío, o solo contiene cosas que BimCraft todavía no dibuja (vea **Todavía no dibujado** a la derecha).

**"Este dibujo es muy grande; solo se muestra una parte."**
BimCraft dejó de dibujar para seguir respondiendo. Desactive las capas que no necesita, o abra las hojas que necesita desde un dibujo más pequeño.

**Faltan partes de una hoja.**
Puede faltar algún dibujo vinculado: busque en **Dibujos vinculados** a la derecha. Vea [Encontrar dibujos e imágenes vinculados](topic:dwg-linked-files). También puede que las capas estén desactivadas: haga clic en {{ui:Todas activadas}}.

**Una imagen aparece como un marco vacío.**
No se encontró su archivo, o es un TIFF ("TIFF no se puede mostrar en un navegador"). Agregue una copia PNG o JPEG con {{ui:Agregar imágenes…}}.

**Al desplazarme con mi trackpad se hace zoom en lugar de mover el dibujo.**
Así funcionan los dibujos en BimCraft. Haga clic y arrastre para encuadrar.

## Todavía sin solución

Lea [Lo que aún no está construido](topic:not-built-yet): lo que busca puede no existir en esta versión.
