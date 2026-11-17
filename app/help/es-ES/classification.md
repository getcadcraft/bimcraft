---
title: Códigos de clasificación (Uniclass, OmniClass, UniFormat)
summary: Asigne un código de clasificación a cada elemento y tipo, elija qué sistemas usa un proyecto, busque en las tablas Uniclass que vienen con la aplicación, cargue las tablas con licencia propias de su oficina y muestre los códigos en las tablas. Los códigos se escriben en el archivo IFC para otro software.
keywords: clasificación, clasificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabla, código de elemento, código de tipo, código por defecto, IfcClassification, IfcClassificationReference, cobie, columna de tabla, csv, licencia
from: 222b94cd
---

## Qué hará

Asigne un código de clasificación a muros, suelos, cubiertas, puertas, ventanas y cualquier otra cosa del modelo, en hasta tres sistemas a la vez: Uniclass, OmniClass y UniFormat. Otras disciplinas y otro software se basan en el código, no en el nombre, así que los códigos se guardan en el archivo IFC como referencias de clasificación que cualquier programa BIM lee.

## Asignar un código a un elemento

1. Seleccione un elemento (o varios) y abra **Propiedades**. Abra la sección {{ui:Classification}}.
2. Escriba el código en el cuadro de su sistema y pulse Intro. Con una lista de códigos cargada, escriba parte de un código o unas palabras ("muro cortina") y elija entre las coincidencias: el título del código se rellena por usted.
3. {{ui:Applies to}} indica dónde va el código: **Este elemento**, o **Su tipo (cada elemento del tipo)**. Un código en un tipo de muro lo lee cada muro de ese tipo, también los que dibuje más adelante.
4. {{ui:Clear}} quita un código.

Bajo cada código, la sección indica de dónde viene: asignado a este elemento, de su tipo, o el valor por defecto del proyecto para su clase. El código propio de un elemento siempre prevalece sobre el de su tipo, y el del tipo sobre un valor por defecto. Con varios elementos seleccionados, un cuadro que dice "varía" significa que no comparten un mismo código; si escribe uno, se asigna a todos. Cada cambio es un paso de deshacer.

Un código siempre puede escribirse, con o sin lista cargada. Si no parece un código de ese sistema, o no está en la lista cargada, un aviso lo indica y el código se conserva tal como lo escribió.

## Elegir los sistemas del proyecto

Abra **Datos** en la barra del modelo y elija {{ui:Classification}} (o {{ui:Project classification…}} en la sección Propiedades).

- Marque los sistemas que usa este proyecto. Propiedades muestra entonces solo esos.
- **Uniclass**: las tablas de Elementos/funciones (EF), Sistemas (Ss) y Productos (Pr) vienen con la aplicación. Son © NBS, con licencia Creative Commons Atribución-SinDerivadas 4.0, y se transmiten sin cambios. El cuadro de diálogo muestra la edición de cada tabla y el día en que se leyó. No son las tablas más recientes: el editor publica otras nuevas cada trimestre en su propio sitio.
- **OmniClass** y **UniFormat**: la aplicación no incluye ninguna lista de códigos, porque su editor no permite transmitir las tablas sin licencia. Escriba cualquier código, o cargue la tabla con licencia de su oficina.
- {{ui:Load a table (CSV)…}} lee la tabla de su oficina desde un archivo CSV con una columna de código y una de título (una fila de encabezado llamada Código, Número o Identificador y Título, Nombre o Descripción se encuentra sola; sin ella se usan las dos primeras columnas). La tabla permanece en este navegador y nunca se incluye en el archivo del proyecto. Solo se guardan en el archivo los códigos que asigne. Puede cargar una tabla Uniclass más reciente del mismo modo.
- {{ui:Give elements a default code by their class}} da a cada muro, suelo, cubierta, puerta, ventana, escalera, rampa, pilar, viga y mueble un código Uniclass inicial de la tabla de Elementos/funciones cuando no tiene uno propio. Los elementos que dibuje después también lo reciben.
- {{ui:Show the codes as columns in the schedules}} añade una columna por sistema a las tablas de Puertas, Ventanas, Muros por tipo y Espacios, y a su CSV. Una fila de varios elementos muestra "varía" cuando sus códigos difieren.

## Conviene saber

- Los códigos por defecto son la elección inicial de CadCraft, no del editor, y no los ha revisado un profesional. Compruébelos con el estándar de su proyecto.
- En el archivo, un valor por defecto es una clasificación real, marcada con el nombre de relación "CadCraft default", y desaparece en cuanto el elemento o su tipo recibe un código propio.
- Los códigos que ya tiene un archivo importado se leen y se muestran, sea cual sea la grafía que usó el otro programa para el nombre del sistema. Los códigos de cualquier otro sistema (de la propia oficina) se listan y no se tocan.
- Los códigos se leen de nuevo al volver a abrir el archivo, aquí o en otro programa. También se trasladan a la exportación IFC5 alfa (IFCX) cuando esa opción de laboratorio está activa, salvo un código asignado a una cubierta.
- Aún no incluido: un árbol para explorar una tabla nivel por nivel, códigos en niveles y espacios como valores por defecto del proyecto, y la comprobación de un código frente a la edición indicada en el archivo.
