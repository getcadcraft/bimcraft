---
title: Guardar datos de recursos y un registro de mantenimiento en el modelo
summary: Usá el modelo IFC entregado para operar el edificio: fabricante, modelo, número de serie, garantía y vida útil de equipos y artefactos, y un registro de los mantenimientos hechos, todo escrito en el IFC.
keywords: entrega, certificado de finalización, certificado de ocupación, as-built, paquete de entrega, recursos, registro de activos, gestión de instalaciones, fm, operación, mantenimiento, servicio, garantía, número de serie, código de barras, fabricante, marca, modelo, vida útil, entrega, cobie, gemelo digital, vencido, por vencer, orden de trabajo
from: b84ac492
---

La pestaña {{ui:Assets}} del panel derecho convierte el modelo IFC abierto en un registro de los equipos del edificio. Todo se escribe en el propio IFC, en conjuntos de propiedades y tareas propias de IFC, así que el próximo programa que abra el archivo también lo lee. No se sube nada y no hace falta ningún servidor: guardá el IFC para conservarlo.

## Qué se lista

- Equipos y artefactos: muebles, artefactos sanitarios, luminarias, electrodomésticos, terminales de aire, válvulas, bombas, ventiladores, calderas, tanques, tomas, tableros, ascensores y otros elementos de ese tipo, y elementos de biblioteca con datos de equipo.
- Cualquier otro elemento que **sigas**: elegilo en el modelo (una puerta, un muro, una bomba dibujada como objeto simple) y hacé clic en {{ui:Track picked}}.
- Todo lo que ya tenga datos de recurso o una tarea de mantenimiento, escritos aquí o por otro programa.

Lo vencido aparece primero, y después lo que vence dentro de 30 días. Filtrá por nombre, etiqueta, fabricante, modelo o número de serie, por nivel, o marcá {{ui:Only overdue or due within 30 days}}.

## Datos del recurso

Hacé clic en un recurso de la lista (o elegilo en el modelo) para abrir sus datos: fabricante, modelo, referencia del modelo, número de serie, código de barras, el día de instalación, el número de garantía y su inicio y fin, y su vida útil en años. {{ui:Save the data}} los escribe en un solo paso ({{key:Mod+Z}} lo deshace). Dejá un campo vacío para quitar ese valor.

## Documentos

Debajo de los datos, {{ui:Documents}} lista los manuales, garantías, fotos, certificados y planos vinculados al recurso. Elegí el tipo, dale un título (o dejalo vacío: se usa el nombre del archivo) y escribí dónde está:

- una **dirección web** (`https://…`): tiene un enlace Open, que se abre en una pestaña nueva;
- o un **nombre o ruta de archivo** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, una carpeta de red): guardá los archivos junto al IFC, en la misma carpeta o en una dentro de ella, para que los nombres sigan funcionando cuando entregues la carpeta. BimCraft muestra el nombre; abrí el archivo desde la carpeta.

Los archivos en sí nunca se suben ni se copian al IFC: solo se escribe el enlace. Una dirección web con contraseña, y todo enlace que no sea una dirección web o un archivo (como `javascript:`), se rechaza. {{ui:Remove}} quita un documento del recurso (un paso; {{key:Mod+Z}} lo deshace).

Los documentos que otro programa puso en el elemento también aparecen. Los documentos del **tipo** del elemento se muestran en cada elemento de ese tipo y lo indican; cambialos donde se creó el tipo.

En el IFC, cada documento es una referencia de documento IFC vinculada al elemento, con su tipo guardado en ese vínculo, tanto en IFC4 como en IFC2X3.

## El registro de mantenimiento

Debajo de los documentos, {{ui:Record work done}}: el día en que se hizo, el trabajo, quién lo hizo, cuándo vence la próxima vez y notas. Cada entrada es un paso; {{ui:Edit}} y {{ui:Delete}} la cambian después. La fecha de vencimiento de la entrada más nueva decide si el recurso está vencido o por vencer.

## Cómo se guarda en el IFC

- Fabricante y modelo en `Pset_ManufacturerTypeInformation`, número de serie, código de barras y día de instalación en `Pset_ManufacturerOccurrence`, la garantía en `Pset_Warranty`, la vida útil en `Pset_ServiceLife`, en el propio elemento. Cuando el tipo del elemento ya trae un fabricante o modelo, se muestra hasta que escribas el tuyo.
- Cada entrada de mantenimiento es una **tarea** IFC del tipo mantenimiento, vinculada al elemento, con sus fechas (en IFC4 también como tiempos propios de la tarea) y un conjunto `CadCraft_Maintenance` con el día, quién lo hizo y el día del próximo vencimiento.
- Los valores que comparte otro elemento se copian primero: cambiar un recurso nunca cambia a sus vecinos.
- En archivos IFC2X3 más antiguos, las fechas se escriben como texto (YYYY-MM-DD); esa versión requiere un registro de fecha aparte, que BimCraft no escribe.

## Lecturas de sensores

Abrí {{ui:Sensor values}} y {{ui:Open readings (CSV)…}} para traer lecturas exportadas de un sistema de gestión del edificio, un registrador de datos o una planilla:

- La **primera columna es la hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` o segundos Unix. Una hora sin zona se lee en la zona horaria de tu computadora. Las fechas con el día primero, como `23/10/2026`, no se leen (son ambiguas); exportá fechas ISO.
- **Cada otra columna es un sensor**, con encabezado igual a la **etiqueta**, el **nombre** o el **GlobalId** de su recurso. Un encabezado que no coincide con ningún recurso, o con más de uno, se lista y se deja de lado. Las comas, punto y coma o tabulaciones separan las columnas; con punto y coma o tabulaciones también se lee la coma decimal (`21,5`).
- Las horas o valores que no se pueden leer (una palabra, una unidad escrita en la celda) se cuentan y se dejan de lado, nunca se adivinan.

La lectura más reciente se muestra en la columna {{ui:Reading}} de la lista y en el bloque {{ui:Sensor}} del recurso, con un **gráfico** de todas las lecturas (en un teléfono, los gráficos esperan hasta que toques {{ui:Show the chart}}). Fijá un **límite inferior y superior** y una unidad en un recurso y hacé clic en {{ui:Save the limits}}: una lectura fuera de ellos marca el recurso. Marcá {{ui:Show on the model}} para pintar cada recurso según su lectura: azul por debajo de su límite inferior, verde dentro de sus límites, rojo por encima de su límite superior, y, para recursos sin límites, una sola escala azul de la lectura más baja a la más alta, con su lectura como etiqueta (hasta 60 etiquetas, primero las marcadas).

**Las lecturas quedan en esta pestaña del navegador**: no se guardan en el IFC ni se envían a ningún lado; volvé a abrir el CSV la próxima vez. Los **límites sí se guardan en el IFC** (un conjunto `CadCraft_Sensor` en el elemento: Low, High, Unit), así que la próxima persona que abra el archivo ve las mismas marcas.

## Lecturas en vivo

{{ui:Live feed}} lee valores a medida que ocurren, **directamente desde este navegador a tu propio sistema**. Nada pasa por nuestro servidor y nada se guarda fuera de la pestaña de tu navegador. No se conecta nada al abrir un archivo: solo lo hace {{ui:Connect}}.

- **MQTT sobre WebSockets**: la dirección del listener WebSocket de tu broker (`wss://broker.example.com:8884/mqtt`), y uno o más temas con `{tag}` donde va la etiqueta del recurso, por ejemplo `site/{tag}/temperature` (BimCraft se suscribe a `site/+/temperature` y lee la etiqueta del tema de cada mensaje). Los temas sin `{tag}` nombran al sensor ellos mismos. Un mensaje es un número simple (`21.5`) o JSON como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (fijá {{ui:Value field in JSON}} si el tuyo tiene otro nombre).
- **Consultar una dirección (HTTP)**: una dirección web que responde tu sistema de gestión del edificio o un pequeño script tuyo, consultada cada cierta cantidad de segundos (5 como mínimo). Puede responder con JSON indexado por etiqueta (`{"AHU-1": 21.5}`), una lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`), o un CSV de lecturas como el de arriba. Si no responde, BimCraft espera el doble antes de volver a consultar, hasta cinco minutos.

Cada lectura va al recurso cuya etiqueta, nombre o GlobalId nombra, igual que una columna de CSV; los nombres que no coinciden con ningún recurso se listan. Las lecturas se suman a {{ui:Sensor values}}: la lista, los gráficos, los límites y los colores del modelo funcionan igual.

**Tu contraseña o token** se escribe para una sola conexión: se entrega a la conexión y el campo se vacía; nunca se guarda en este navegador ni en el IFC. Un token se envía como encabezado estándar `Authorization: Bearer`, y no se envían cookies.

{{ui:Keep these settings in the IFC}} escribe en el modelo la dirección, los temas, el campo de valor y cada cuánto consultar (un conjunto `CadCraft_Feed` en el proyecto; no hay campo para la contraseña), así que la próxima persona que abra el archivo solo escribe su propio acceso y hace clic en {{ui:Connect}}. No pongas una contraseña ni una clave en la dirección: una dirección con usuario y contraseña se rechaza.

:::note
**Lo que necesita tu broker o dirección.** Una página del navegador solo puede hablar con un servidor que lo permita:
- La página es segura (https), así que el navegador solo se conecta a direcciones `wss://` y `https://` — salvo en tu propia computadora (`localhost`), donde `ws://` y `http://` sirven para probar.
- Una dirección HTTP debe permitir pedidos desde esta página (CORS: el encabezado `Access-Control-Allow-Origin`, y `Authorization` entre los encabezados permitidos si usás un token).
- La mayoría de los brokers (Mosquitto, EMQX, HiveMQ y otros) ofrecen un listener WebSocket; suele estar apagado hasta que lo actives. BimCraft habla MQTT 3.1.1.
:::

**No hay alertas** cuando BimCraft está cerrado: los límites marcan un recurso mientras el modelo está abierto con una fuente conectada. Vigilar un edificio todo el día necesita un servidor, que BimCraft no ofrece.

## Planilla COBie

**COBie** es la planilla de entrega que muchos propietarios y equipos de mantenimiento piden (publicada por el National BIM Standard en EE. UU.; BS 1192-4 en el Reino Unido). Abrí {{ui:COBie spreadsheet}} en la pestaña:

- {{ui:Save as COBie (.xlsx)}} escribe las hojas COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document y Attribute — a partir del modelo y los datos de los recursos: el edificio, sus niveles y ambientes (superficies a partir de las cantidades del modelo), cada recurso como componente con su número de serie, día de instalación, inicio de garantía, etiqueta y código de barras, su tipo con fabricante, modelo, vida útil y duración de la garantía, los sistemas a los que pertenece, el registro de mantenimiento como trabajos y los documentos vinculados. Cada componente lleva el GlobalId IFC del elemento. Escribí tu correo para la columna "created by" de COBie, o dejala vacía (dirá n/a). Los valores que el modelo no tiene dicen **n/a**; las columnas de categoría llevan la clase IFC, no un código OmniClass.
- {{ui:Read a COBie spreadsheet…}} lee una de vuelta, de BimCraft o de otro programa, y **lista primero todos los cambios**: qué recurso, qué valor, de qué a qué, y documentos nuevos. {{ui:Apply}} los escribe todos en un solo paso ({{key:Mod+Z}} lo deshace). Las filas se emparejan por el GlobalId y luego por el nombre del componente. Las filas que no coinciden con nada del modelo se listan, no se agregan.

Una planilla se trata como no confiable: nunca se leen ni se ejecutan fórmulas (solo el último valor guardado en la celda), un valor que haría terminar una garantía antes de empezar y un enlace de documento que no sea una dirección web o un nombre de archivo se dejan de lado y se cuentan, y los libros muy grandes se rechazan. Los trabajos de COBie son el trabajo planificado de un tipo, así que se escriben pero no se leen de vuelta. En la planilla que escribe BimCraft, el texto que una planilla podría tomar por fórmula (que empieza con `=`, `+`, `-` o `@`) se marca como texto.

El libro se revisó en nuestras pruebas con un lector de planillas independiente; no pasó por un validador COBie. Si un equipo receptor usa uno, avisanos qué dice.

## Documentos de entrega

Los papeles que se entregan al propietario con el edificio terminado pertenecen al proyecto, no a un solo recurso. En la pestaña {{ui:Assets}}, abrí {{ui:Handover documents}}:

1. {{ui:Add a document}}, elegí su tipo (certificado de finalización, certificado de ocupación, garantía, manual, planos as-built, otro), y escribí su título, fecha de emisión, quién lo emitió y su número de referencia.
2. Indicá dónde está: una dirección web, un nombre de archivo guardado junto al IFC, o {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} y {{ui:Remove}} cambian la lista; cada una es un paso que podés deshacer.

{{ui:Build the handover package}} descarga un zip: una portada con cada documento, la misma lista que una planilla, el libro COBie (los documentos están en su hoja Document, como filas sobre el Facility), el modelo y cada archivo adjunto. Un certificado de finalización o de ocupación que todavía no esté en la lista se nombra en la portada; el paquete se arma igual.

El modelo del paquete es el **modelo as-built**: indica qué elementos se midieron en obra. Junto a él, en la carpeta `as-built`: la declaración, una lista de cada elemento con su estado de verificación, el conjunto de planos tal como está ahora en un solo PDF (los planos as-built), y el registro de cambios de planos cuando el modelo emitió conjuntos. Ver [Marcar elementos como revisados o verificados en obra](topic:verification).

- En el archivo IFC, cada documento es un IfcDocumentInformation vinculado al proyecto (IfcRelAssociatesDocument), con su título, referencia, fecha, emisor y lugar, para que otros programas lo listen.
- Un archivo adjunto se registra por nombre, tamaño y SHA-256. Para guardar el archivo en sí con el proyecto, usá {{ui:Save the project as a bundle}} (un .ccbundle contiene el modelo y los archivos adjuntos; al abrirlo se recuperan, cada uno verificado contra su registro). Un guardado común pregunta cuál querés.
- Un .ifc común conserva el registro, no el archivo: después de abrirlo, usá {{ui:Attach the file again}}. Se reconoce el mismo archivo; uno distinto reemplaza el registro.

## CSV

{{ui:CSV}} guarda cada recurso con sus datos, cada entrada de mantenimiento y cada documento, una fila por cada uno, para una planilla u otro programa de mantenimiento.

:::note
Todavía no está hecho: un servicio alojado que guarde lecturas y envíe alertas con BimCraft cerrado, y leer de vuelta los trabajos de COBie. Ver [Todavía no está hecho](topic:not-built-yet).
:::
