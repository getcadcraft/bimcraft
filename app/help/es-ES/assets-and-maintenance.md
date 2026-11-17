---
title: Guardar datos de recursos y un registro de mantenimiento en el modelo
summary: Use el modelo IFC entregado para explotar el edificio: fabricante, modelo, número de serie, garantía y vida útil de equipos y accesorios, y un registro del mantenimiento realizado, todo escrito en el IFC.
keywords: entrega, certificado de fin de obra, certificado de ocupación, según construido, paquete de entrega, recursos, registro de recursos, gestión de instalaciones, fm, explotación, mantenimiento, servicio, garantía, número de serie, código de barras, fabricante, modelo, vida útil, entrega, cobie, gemelo digital, vencido, pendiente, orden de trabajo
from: b84ac492
---

La pestaña {{ui:Recursos}} del panel derecho convierte el modelo IFC abierto en un registro de los equipos del edificio. Todo se escribe en el propio IFC, en los conjuntos de propiedades y tareas de IFC, de modo que el siguiente programa que abra el archivo también lo lee. No se sube nada y no hace falta ningún servidor: guarde el IFC para conservarlo.

## Qué se lista

- Equipos y accesorios: mobiliario, aparatos sanitarios, luminarias, electrodomésticos, terminales de aire, válvulas, bombas, ventiladores, calderas, depósitos, tomas de corriente, cuadros, ascensores y otros elementos de ese tipo, y elementos de biblioteca con datos de equipo.
- Cualquier otro elemento que **seguir**: elíjalo en el modelo (una puerta, un muro, una bomba dibujada como objeto simple) y haga clic en {{ui:Seguir lo designado}}.
- Cualquier cosa que ya tenga datos de recurso o una tarea de mantenimiento, escrita aquí o por otro programa.

Lo vencido aparece primero, y después lo que vence en 30 días. Filtre por nombre, etiqueta, fabricante, modelo o número de serie, o por planta, o marque {{ui:Solo vencidos o que vencen en 30 días}}.

## Datos del recurso

Haga clic en un recurso de la lista (o elíjalo en el modelo) para abrir sus datos: fabricante, modelo, referencia del modelo, número de serie, código de barras, día de instalación, número de garantía con su inicio y su fin, y vida útil en años. {{ui:Guardar los datos}} los escribe en un solo paso ({{key:Mod+Z}} lo deshace). Deje un cuadro vacío para eliminar ese valor.

## Documentos

Bajo los datos, {{ui:Documentos}} lista los manuales, garantías, fotos, certificados y planos vinculados al recurso. Elija el tipo, dele un título (o déjelo vacío: se usa el nombre del archivo) e indique dónde está:

- una **dirección web** (`https://…`): obtiene un enlace Abrir, que se abre en una pestaña nueva;
- o un **nombre o ruta de archivo** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, una unidad de red): guarde los archivos junto al IFC, en la misma carpeta o en una inferior, para que los nombres sigan funcionando al entregar la carpeta. BimCraft muestra el nombre; abra el archivo desde la carpeta.

Los archivos nunca se suben ni se copian en el IFC: solo se escribe el vínculo. Se rechaza una dirección web con contraseña, y cualquier enlace que no sea una dirección web ni un archivo (como `javascript:`). {{ui:Quitar}} quita un documento del recurso (en un paso; {{key:Mod+Z}} lo deshace).

Los documentos que otro programa puso en el elemento también aparecen en la lista. Los documentos del **tipo** del elemento se muestran en cada elemento de ese tipo, y así se indica; cámbielos donde se creó el tipo.

En el IFC, cada documento es una referencia de documento IFC vinculada al elemento, con su tipo guardado en ese vínculo, tanto en IFC4 como en IFC2X3.

## El registro de mantenimiento

Bajo los documentos, {{ui:Registrar trabajo realizado}}: el día en que se hizo, el trabajo, quién lo hizo, cuándo vence la siguiente vez y notas. Cada entrada es un paso; {{ui:Edición}} y {{ui:Eliminar}} la modifican después. La fecha de próximo vencimiento de la entrada más reciente decide si el recurso está vencido o pronto a vencer.

## Cómo se guarda en el IFC

- Fabricante y modelo en `Pset_ManufacturerTypeInformation`; número de serie, código de barras y día de instalación en `Pset_ManufacturerOccurrence`; la garantía en `Pset_Warranty`; la vida útil en `Pset_ServiceLife`; todo en el propio elemento. Cuando el tipo del elemento ya indica fabricante o modelo, se muestra hasta que escriba el suyo.
- Cada entrada de mantenimiento es una **tarea** IFC del tipo mantenimiento, vinculada al elemento, con sus fechas (en IFC4 también como tiempos propios de la tarea) y un conjunto `CadCraft_Maintenance` con el día, quién lo hizo y el día del próximo vencimiento.
- Los valores que comparte otro elemento se copian primero: cambiar un recurso nunca cambia a sus vecinos.
- En archivos IFC2X3 más antiguos, las fechas se escriben como texto (AAAA-MM-DD); esa versión requiere un registro de fecha aparte, que BimCraft no escribe.

## Lecturas de sensores

Abra {{ui:Valores de sensores}} y {{ui:Abrir lecturas (CSV)…}} para traer lecturas exportadas de un sistema de gestión del edificio, de un registrador de datos o de una hoja de cálculo:

- La **primera columna es la hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` o segundos Unix. Una hora sin zona se lee en la zona horaria de su ordenador. No se leen las fechas con el día primero, como `23/10/2026` (son ambiguas); exporte fechas ISO.
- **Cada una de las demás columnas es un sensor**, encabezada por la **etiqueta**, el **nombre** o el **GlobalId** de su recurso. Un encabezado que no coincide con ningún recurso, o que coincide con más de uno, se lista y se omite. Las comas, el punto y coma o las tabulaciones separan las columnas; con punto y coma o tabulaciones también se lee una coma decimal (`21,5`).
- Las horas o los valores que no se leen (una palabra, una unidad escrita en la celda) se cuentan y se omiten, nunca se adivinan.

La última lectura aparece en la columna {{ui:Lectura}} de la lista y en el bloque {{ui:Sensor}} del recurso, con un **gráfico** de todas las lecturas (en un móvil, los gráficos esperan a que pulse {{ui:Mostrar el gráfico}}). Defina un **límite inferior y superior** y una unidad en un recurso, y haga clic en {{ui:Guardar los límites}}: una lectura fuera de ellos marca el recurso. Marque {{ui:Mostrar en el modelo}} para pintar cada recurso según su lectura —azul por debajo de su límite inferior, verde dentro de sus límites y rojo por encima de su límite superior y, para los recursos sin límites, una escala azul única desde la lectura más baja hasta la más alta—, con su lectura como etiqueta (hasta 60 etiquetas, primero las marcadas).

**Las lecturas permanecen en esta pestaña del navegador**: no se guardan en el IFC ni se envían a ningún sitio; vuelva a abrir el CSV la próxima vez. Los **límites se guardan en el IFC** (un conjunto `CadCraft_Sensor` en el elemento: Low, High, Unit), así que la siguiente persona que abra el archivo verá las mismas marcas.

## Lecturas en directo

{{ui:Fuente en directo}} lee los valores según se producen, **directamente desde este navegador hasta su propio sistema**. Nada pasa por nuestro servidor, y nada se guarda salvo en la pestaña de su navegador. Nada se conecta al abrir un archivo: solo lo hace {{ui:Conectar}}.

- **MQTT sobre WebSockets**: la dirección del receptor WebSocket de su broker (`wss://broker.example.com:8884/mqtt`) y uno o más temas con `{tag}` donde va la etiqueta del recurso, por ejemplo `site/{tag}/temperature` (BimCraft se suscribe a `site/+/temperature` y lee la etiqueta del tema de cada mensaje). Los temas sin `{tag}` nombran el sensor directamente. Un mensaje es un número simple (`21.5`) o un JSON como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (defina {{ui:Campo de valor en JSON}} si el suyo tiene otro nombre). BimCraft habla MQTT 3.1.1.
- **Preguntar a una dirección (HTTP)**: una dirección web que responde su sistema de gestión del edificio o un pequeño script suyo, a la que se pregunta cada cierto número de segundos (5 como mínimo). Puede responder con JSON por etiqueta (`{"AHU-1": 21.5}`), con una lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`) o con un CSV de lecturas como el de arriba. Si no responde, BimCraft espera el doble antes de volver a preguntar, hasta cinco minutos.

Cada lectura va al recurso cuya etiqueta, nombre o GlobalId indica, exactamente como lo haría una columna CSV; los nombres que no coinciden con ningún recurso se listan. Las lecturas se suman a {{ui:Valores de sensores}}: la lista, los gráficos, los límites y los colores del modelo funcionan igual.

**Su contraseña o token** se escribe para una sola conexión: se entrega a la conexión y el cuadro se vacía; nunca se guarda en este navegador ni en el IFC. Un token se envía como cabecera estándar `Authorization: Bearer`, y no se envían cookies.

{{ui:Conservar estos ajustes en el IFC}} escribe en el modelo la dirección, los temas, el campo de valor y cada cuánto tiempo preguntar (un conjunto `CadCraft_Feed` en el proyecto; no hay campo para la contraseña), de modo que la siguiente persona que abra el archivo solo escribe su propio acceso y hace clic en {{ui:Conectar}}. No ponga una contraseña ni una clave en la propia dirección: una dirección con usuario y contraseña se rechaza.

:::note
**Lo que necesita su broker o su dirección.** Una página del navegador solo puede hablar con un servidor que lo permita:
- La página es segura (https), así que el navegador solo se conecta a direcciones `wss://` y `https://`, salvo en su propio ordenador (`localhost`), donde `ws://` y `http://` sirven para hacer pruebas.
- Una dirección HTTP debe permitir peticiones desde esta página (CORS: la cabecera `Access-Control-Allow-Origin`, y `Authorization` entre las cabeceras permitidas si usa un token).
- La mayoría de brokers (Mosquitto, EMQX, HiveMQ y otros) ofrecen un receptor WebSocket; a menudo está desactivado hasta que se activa. BimCraft habla MQTT 3.1.1.
:::

No hay **alertas** cuando BimCraft está cerrado: los límites marcan un recurso mientras el modelo está abierto con una fuente conectada. Vigilar un edificio las 24 horas requiere un servidor, que BimCraft no ejecuta.

## Hoja de cálculo COBie

**COBie** es la hoja de cálculo de entrega que muchos propietarios y equipos de mantenimiento piden (publicada por el National BIM Standard en EE. UU.; BS 1192-4 en el Reino Unido). Abra {{ui:Hoja de cálculo COBie}} en la pestaña:

- {{ui:Guardar como COBie (.xlsx)}} escribe las hojas COBie 2.4 —Contact, Facility, Floor, Space, Type, Component, System, Job, Document y Attribute— a partir del modelo y de los datos de recursos: el edificio, sus plantas y espacios (superficies de las cantidades del modelo), cada recurso como componente con su número de serie, día de instalación, inicio de garantía, etiqueta y código de barras, su tipo con fabricante, modelo, vida útil y duración de la garantía, los sistemas a los que pertenece, el registro de mantenimiento como trabajos y los documentos vinculados. Cada componente lleva el GlobalId IFC del elemento. Escriba su correo electrónico para la columna «created by» de COBie, o déjela vacía (pondrá n/a). Los valores que el modelo no tiene indican **n/a**; las columnas de categoría contienen la clase IFC, no un código OmniClass.
- {{ui:Leer una hoja de cálculo COBie…}} la lee de vuelta, de BimCraft u otro programa, y **lista primero todos los cambios**: qué recurso, qué valor, de qué a qué, y los documentos nuevos. {{ui:Aplicar}} los escribe todos en un solo paso ({{key:Mod+Z}} lo deshace). Las filas se emparejan por GlobalId y, después, por el nombre del componente. Las filas que no coinciden con nada del modelo se listan, no se añaden.

Una hoja de cálculo se trata como no fiable: nunca se leen ni ejecutan fórmulas (solo el último valor guardado en la celda); un valor que haría terminar una garantía antes de empezar y un enlace de documento que no sea una dirección web ni un nombre de archivo se omiten y se cuentan; los libros muy grandes se rechazan. Los trabajos de COBie son el trabajo previsto de un tipo: se escriben, pero no se leen de vuelta. En la hoja que escribe BimCraft, el texto que una hoja de cálculo podría tomar por una fórmula (que empiece por `=`, `+`, `-` o `@`) se marca como texto.

El libro se comprueba en nuestras pruebas con un lector de hojas de cálculo independiente; no ha pasado por un validador COBie. Si un equipo receptor lo ejecuta, indíquenos qué resultado da.

## Documentos de entrega

Los documentos que se entregan al propietario con el edificio terminado pertenecen al proyecto, no a un solo recurso. En la pestaña {{ui:Recursos}}, abra {{ui:Documentos de entrega}}:

1. {{ui:Añadir un documento}}, elija su tipo (certificado de fin de obra, certificado de ocupación, garantía, manual, planos según construido, otros) y escriba su título, fecha de emisión, quién lo emitió y su número de referencia.
2. Indique dónde está: una dirección web, un nombre de archivo junto al IFC, o {{ui:Adjuntar un archivo}}.
3. {{ui:Añadir a la lista}}. {{ui:Edición}} y {{ui:Quitar}} modifican la lista; cada uno es un paso que puede deshacer.

{{ui:Generar el paquete de entrega}} descarga un zip: una portada con todos los documentos, la misma lista que una hoja de cálculo, el libro COBie (los documentos están en su hoja Document, como filas sobre Facility), el modelo y cada archivo adjunto. Un certificado de fin de obra o de ocupación que todavía no esté en la lista se nombra en la portada; el paquete se genera igualmente.

El modelo del paquete es el **modelo según construido**: indica qué elementos se midieron en obra. Con él, en la carpeta `as-built`: la declaración, una lista de todos los elementos con su estado de verificación, el conjunto de planos tal como está ahora en un único PDF (los planos según construido) y el registro de cambios de planos cuando el modelo tiene conjuntos emitidos. Véase [Marcar elementos como comprobados o verificados en obra](topic:verification).

- En el archivo IFC, cada documento es un IfcDocumentInformation vinculado al proyecto (IfcRelAssociatesDocument), con su título, referencia, fecha, emisor y lugar, para que otros programas lo listen.
- Un archivo adjunto se registra por nombre, tamaño y SHA-256. Para guardar el propio archivo con el proyecto, use {{ui:Guardar el proyecto como paquete}} (un .ccbundle contiene el modelo y los archivos adjuntos; al abrirlo se recuperan, cada uno comprobado con su registro). Un guardado normal pregunta cuál quiere.
- Un .ifc normal conserva el registro, no el archivo: tras abrirlo, use {{ui:Vuelva a adjuntar el archivo}}. Se reconoce el mismo archivo; uno diferente sustituye al registro.

## CSV

{{ui:CSV}} guarda cada recurso con sus datos, cada entrada de mantenimiento y cada documento, una fila por cada uno, para una hoja de cálculo u otro programa de mantenimiento.

:::note
Aún no disponible: un servicio alojado que conserve lecturas y envíe alertas mientras BimCraft está cerrado, y la lectura de vuelta de los trabajos de COBie. Véase [Aún no disponible](topic:not-built-yet).
:::
