---
title: Guarde datos de activos y un registro de mantenimiento en el modelo
summary: Use el modelo IFC entregado para operar el edificio: fabricante, modelo, número de serie, garantía y vida útil de equipos y accesorios, y un registro del mantenimiento realizado, todo escrito en el IFC.
keywords: entrega, certificado de terminación, certificado de ocupación, como construido, paquete de entrega, activos, registro de activos, administración de instalaciones, fm, operación, mantenimiento, servicio, garantía, número de serie, código de barras, fabricante, modelo, vida útil, COBie, gemelo digital, vencido, por vencer, orden de trabajo
from: b84ac492
---

La pestaña {{ui:Recursos}} del panel derecho convierte el modelo IFC abierto en un registro de los equipos del edificio. Todo se escribe en el propio IFC, en los conjuntos de propiedades y las tareas de IFC, de modo que el siguiente programa que abra el archivo también lo lea. No se sube nada y no se necesita ningún servidor: guarde el IFC para conservarlo.

## Qué se lista

- Equipos y accesorios: muebles, aparatos sanitarios, luminarias, electrodomésticos, terminales de aire, válvulas, bombas, ventiladores, calderas, tanques, salidas, tableros, elevadores y otros elementos similares, además de elementos de biblioteca con datos de equipo.
- Cualquier otro elemento que quiera **seguir**: selecciónelo en el modelo (una puerta, un muro, una bomba dibujada como objeto simple) y haga clic en {{ui:Seguir lo seleccionado}}.
- Todo lo que ya tenga datos de activo o una tarea de mantenimiento, escrita aquí o por otro programa.

Lo vencido aparece primero, y luego lo que vence en 30 días. Filtre por nombre, etiqueta, fabricante, modelo o número de serie, o por nivel, o marque {{ui:Solo vencidos o que vencen en 30 días}}.

## Datos del activo

Haga clic en un activo de la lista (o selecciónelo en el modelo) para abrir sus datos: fabricante, modelo, referencia del modelo, número de serie, código de barras, el día en que se instaló, el número de garantía con su inicio y su fin, y su vida útil en años. {{ui:Guardar los datos}} los escribe en un solo paso ({{key:Mod+Z}} lo deshace). Deje un cuadro vacío para quitar ese valor.

## Documentos

Debajo de los datos, {{ui:Documentos}} lista los manuales, garantías, fotos, certificados y planos vinculados al activo. Elija el tipo, dé un título (o déjelo vacío: se usa el nombre del archivo) e indique dónde está:

- una **dirección web** (`https://…`): tendrá un enlace Abrir, que se abre en una pestaña nueva;
- o un **nombre de archivo o ruta** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, una carpeta de red): mantenga los archivos junto al IFC, en la misma carpeta o en una inferior, para que los nombres sigan funcionando al entregar la carpeta. BimCraft muestra el nombre; abra el archivo desde la carpeta.

Los archivos en sí nunca se suben ni se copian al IFC: solo se escribe el vínculo. Una dirección web con una contraseña, y cualquier vínculo que no sea una dirección web ni un archivo (como `javascript:`), se rechaza. {{ui:Quitar}} quita un documento del activo (un paso; {{key:Mod+Z}} lo deshace).

Los documentos que otro programa puso en el elemento también aparecen en la lista. Los documentos del **tipo** del elemento se muestran en todos los elementos de ese tipo y lo indican; cámbielos donde se creó el tipo.

En el IFC, cada documento es una referencia de documento IFC vinculada al elemento, con su tipo conservado en ese vínculo, tanto en IFC4 como en IFC2X3.

## El registro de mantenimiento

Debajo de los documentos, {{ui:Registrar trabajo realizado}}: el día en que se hizo, el trabajo, quién lo hizo, cuándo vence la siguiente vez y notas. Cada entrada es un paso; {{ui:Editar}} y {{ui:Eliminar}} la cambian después. La fecha de vencimiento siguiente de la entrada más reciente decide si el activo está vencido o próximo a vencer.

## Cómo se guarda en el IFC

- Fabricante y modelo en `Pset_ManufacturerTypeInformation`; número de serie, código de barras y el día de instalación en `Pset_ManufacturerOccurrence`; la garantía en `Pset_Warranty`; la vida útil en `Pset_ServiceLife`; todo en el propio elemento. Cuando el tipo del elemento ya lleva un fabricante o un modelo, se muestra hasta que usted escriba el suyo.
- Cada entrada de mantenimiento es una **tarea** IFC del tipo mantenimiento, vinculada al elemento, con sus fechas (en IFC4 también como tiempos propios de la tarea) y un conjunto `CadCraft_Maintenance` con el día, quién lo hizo y el día de vencimiento siguiente.
- Los valores que comparte otro elemento se copian primero: cambiar un activo nunca cambia a sus vecinos.
- En archivos IFC2X3 antiguos las fechas se escriben como texto (AAAA-MM-DD); esa versión requiere allí un registro de fecha aparte, que BimCraft no escribe.

## Lecturas de sensores

Abra {{ui:Valores de sensores}} y {{ui:Abrir lecturas (CSV)…}} para traer lecturas exportadas desde un sistema de gestión del edificio, un registrador de datos o una hoja de cálculo:

- La **primera columna es la hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` o segundos Unix. Una hora sin zona se lee en la zona horaria de su computadora. Las fechas con el día primero, como `23/10/2026`, no se leen (son ambiguas); exporte fechas ISO.
- **Cada otra columna es un sensor**, con el encabezado de la **etiqueta**, el **nombre** o el **GlobalId** de su activo. Un encabezado que no coincide con ningún activo, o que coincide con más de uno, se lista y se omite. Las columnas se separan con comas, punto y coma o tabuladores; con punto y coma o tabuladores también se lee la coma decimal (`21,5`).
- Las horas o valores que no se leen (una palabra, una unidad escrita en la celda) se cuentan y se omiten; nunca se adivinan.

La última lectura aparece en la columna {{ui:Lectura}} de la lista y en el bloque {{ui:Sensor}} del activo, con una **gráfica** de todas las lecturas (en un teléfono, las gráficas esperan hasta que toque {{ui:Mostrar la gráfica}}). Defina un **límite inferior y superior** y una unidad en un activo, y haga clic en {{ui:Guardar los límites}}: una lectura fuera de ellos marca el activo. Marque {{ui:Mostrar en el modelo}} para pintar cada activo según su lectura —azul por debajo de su límite inferior, verde dentro de sus límites, rojo por encima de su límite superior y, para los activos sin límites, una sola escala azul desde la lectura más baja hasta la más alta—, con su lectura como etiqueta (hasta 60 etiquetas, primero las marcadas).

**Las lecturas permanecen en esta pestaña del navegador**: no se guardan en el IFC ni se envían a ningún lado; abra el CSV de nuevo la próxima vez. Los **límites se guardan en el IFC** (un conjunto `CadCraft_Sensor` en el elemento: Low, High, Unit), así que la siguiente persona que abra el archivo verá las mismas marcas.

## Lecturas en vivo

{{ui:Datos en vivo}} lee valores conforme ocurren, **directamente desde este navegador hasta su propio sistema**. Nada pasa por nuestro servidor, y nada se almacena fuera de la pestaña de su navegador. Nada se conecta al abrir un archivo: solo lo hace {{ui:Conectar}}.

- **MQTT sobre WebSockets**: la dirección del receptor WebSocket de su broker (`wss://broker.example.com:8884/mqtt`) y uno o más temas con `{tag}` donde va la etiqueta del activo, por ejemplo `site/{tag}/temperature` (BimCraft se suscribe a `site/+/temperature` y lee la etiqueta del tema de cada mensaje). Los temas sin `{tag}` nombran al sensor por sí mismos. Un mensaje es un número simple (`21.5`) o JSON, como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (defina {{ui:Campo del valor en JSON}} si el suyo tiene otro nombre).
- **Consultar una dirección (HTTP)**: una dirección web que responde su sistema de gestión del edificio o un pequeño script suyo, consultada cada cierto número de segundos (5 como mínimo). Puede responder con JSON indexado por etiqueta (`{"AHU-1": 21.5}`), con una lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`) o con un CSV de lecturas como el anterior. Si no responde, BimCraft espera el doble de tiempo antes de volver a consultar, hasta cinco minutos.

Cada lectura va al activo cuya etiqueta, nombre o GlobalId indica, exactamente como lo haría una columna de CSV; los nombres que no coinciden con ningún activo se listan. Las lecturas se suman a {{ui:Valores de sensores}}: la lista, las gráficas, los límites y los colores en el modelo funcionan igual.

**Su contraseña o token** se escribe para una sola conexión: se entrega a la conexión y el cuadro se vacía; nunca se guarda en este navegador ni en el IFC. Un token se envía como encabezado estándar `Authorization: Bearer`, y no se envían cookies.

{{ui:Conservar esta configuración en el IFC}} escribe la dirección, los temas, el campo del valor y la frecuencia de consulta en el modelo (un conjunto `CadCraft_Feed` en el proyecto; no hay campo para una contraseña), de modo que la siguiente persona que abra el archivo solo escriba su propio acceso y haga clic en {{ui:Conectar}}. No ponga una contraseña ni una clave en la dirección misma: una dirección con usuario y contraseña se rechaza.

:::note
**Lo que necesita su broker o su dirección.** Una página del navegador solo puede hablar con un servidor que lo permita:
- La página es segura (https), así que el navegador solo se conecta a direcciones `wss://` y `https://`, salvo en su propia computadora (`localhost`), donde `ws://` y `http://` funcionan para pruebas.
- Una dirección HTTP debe permitir solicitudes desde esta página (CORS: el encabezado `Access-Control-Allow-Origin`, y `Authorization` entre los encabezados permitidos si usa un token).
- La mayoría de los brokers (Mosquitto, EMQX, HiveMQ y otros) ofrecen un receptor WebSocket; a menudo está apagado hasta que se activa. BimCraft habla MQTT 3.1.1.
:::

No hay **alertas** cuando BimCraft está cerrado: los límites marcan un activo mientras el modelo está abierto con una fuente de datos conectada. Vigilar un edificio las 24 horas requiere un servidor, que BimCraft no opera.

## Hoja de cálculo COBie

**COBie** es la hoja de cálculo de entrega que muchos propietarios y equipos de mantenimiento solicitan (publicada por el National BIM Standard en EE. UU.; BS 1192-4 en el Reino Unido). Abra {{ui:Hoja de cálculo COBie}} en la pestaña:

- {{ui:Guardar como COBie (.xlsx)}} escribe las hojas COBie 2.4 (Contact, Facility, Floor, Space, Type, Component, System, Job, Document y Attribute) a partir del modelo y de los datos de activo: el edificio, sus niveles y habitaciones (áreas tomadas de las cantidades del modelo), cada activo como componente con su número de serie, día de instalación, inicio de garantía, etiqueta y código de barras, su tipo con fabricante, modelo, vida útil y duración de garantía, los sistemas a los que pertenece, el registro de mantenimiento como trabajos y los documentos vinculados. Cada componente lleva el GlobalId IFC del elemento. Escriba su correo electrónico para la columna "created by" de COBie, o déjela vacía (entonces dirá n/a). Los valores que el modelo no tiene dicen **n/a**; las columnas de categoría llevan la clase IFC, no un código OmniClass.
- {{ui:Leer una hoja COBie…}} la lee de vuelta, de BimCraft o de otro programa, y **lista primero cada cambio**: qué activo, qué valor, de qué a qué, y los documentos nuevos. {{ui:Aplicar}} los escribe todos en un solo paso ({{key:Mod+Z}} lo deshace). Las filas se emparejan por el GlobalId y luego por el nombre del componente. Las filas que no coinciden con nada en el modelo se listan, no se agregan.

Una hoja de cálculo se trata como no confiable: nunca se leen ni ejecutan fórmulas (solo el valor guardado por última vez en la celda); un valor que haría terminar una garantía antes de empezar y un vínculo de documento que no sea una dirección web ni un nombre de archivo se omiten y se cuentan; y los libros muy grandes se rechazan. Los trabajos de COBie son el trabajo planeado de un tipo, así que se escriben pero no se leen de vuelta. En la hoja de cálculo que escribe BimCraft, el texto que una hoja podría tomar por una fórmula (que empieza con `=`, `+`, `-` o `@`) se marca como texto.

El libro se verifica en nuestras pruebas con un lector de hojas de cálculo independiente; no ha pasado por un validador de COBie. Si un equipo receptor usa uno, infórmenos qué indica.

## Documentos de entrega

Los papeles que se entregan al propietario con el edificio terminado pertenecen al proyecto, no a un solo activo. En la pestaña {{ui:Recursos}}, abra {{ui:Documentos de entrega}}:

1. {{ui:Agregar un documento}}, elija su tipo (certificado de terminación, certificado de ocupación, garantía, manual, planos como construido, otro), y escriba su título, fecha de emisión, quién lo emitió y su número de referencia.
2. Indique dónde está: una dirección web, un nombre de archivo junto al IFC, o {{ui:Adjunte un archivo}}.
3. {{ui:Agregar a la lista}}. {{ui:Editar}} y {{ui:Quitar}} cambian la lista; cada cambio es un paso que puede deshacer.

{{ui:Generar el paquete de entrega}} descarga un zip: una portada con cada documento, la misma lista como hoja de cálculo, el libro COBie (los documentos están en su hoja Document, como filas sobre el Facility), el modelo y cada archivo adjunto. Un certificado de terminación u ocupación que todavía no está en la lista se nombra en la portada; el paquete se genera de todos modos.

El modelo del paquete es el **modelo como construido**: indica qué elementos se midieron en obra. Con él, en la carpeta `as-built`: la declaración, una lista de cada elemento con su estado de verificación, el juego de planos tal como está ahora en un solo PDF (los planos como construido) y el registro de cambios de planos cuando el modelo ha emitido juegos. Vea [Marque elementos como revisados o verificados en obra](topic:verification).

- En el archivo IFC, cada documento es un IfcDocumentInformation vinculado al proyecto (IfcRelAssociatesDocument), con su título, referencia, fecha, emisor y lugar, para que otros programas lo listen.
- Un archivo adjunto se registra por nombre, tamaño y SHA-256. Para guardar el archivo en sí con el proyecto, use {{ui:Guardar el proyecto como paquete}} (un .ccbundle contiene el modelo y los archivos adjuntos; al abrirlo se recuperan, cada uno verificado contra su registro). Un guardado normal le pregunta cuál quiere.
- Un .ifc simple conserva el registro, no el archivo: después de abrirlo, use {{ui:Vuelva a adjuntar el archivo}}. Se reconoce el mismo archivo; uno distinto reemplaza el registro.

## CSV

{{ui:CSV}} guarda cada activo con sus datos, cada entrada de mantenimiento y cada documento, una fila por cada uno, para una hoja de cálculo u otro programa de mantenimiento.

:::note
Pendiente: un servicio alojado que guarde las lecturas y envíe alertas mientras BimCraft está cerrado, y leer de vuelta los trabajos de COBie. Vea [Aún no disponible](topic:not-built-yet).
:::
