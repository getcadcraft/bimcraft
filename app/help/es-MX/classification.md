---
title: Códigos de clasificación (Uniclass, OmniClass, UniFormat)
summary: Asigne un código de clasificación a cada elemento y tipo, elija qué sistemas usa un proyecto, busque en las tablas Uniclass que vienen con la aplicación, cargue las tablas con licencia propias de su oficina y muestre los códigos en los cuadros. Los códigos se escriben en el archivo IFC para otro software.
keywords: clasificación, clasificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabla, código de elemento, código de tipo, código predeterminado, IfcClassification, IfcClassificationReference, cobie, columna de cuadro, csv, licencia
from: 222b94cd
---

## Qué hará

Asigne un código de clasificación a muros, pisos, techos, puertas, ventanas y cualquier otro elemento del modelo, en hasta tres sistemas a la vez: Uniclass, OmniClass y UniFormat. Otras disciplinas y otro software dependen del código, no del nombre, así que los códigos se guardan en el archivo IFC como referencias de clasificación que cualquier programa BIM lee.

## Asignar un código a un elemento

1. Seleccione un elemento (o varios) y abra **Propiedades**. Abra la sección {{ui:Clasificación}}.
2. Escriba el código en el campo de su sistema y pulse Enter. Con una lista de códigos cargada, escriba parte de un código o unas palabras ("muro cortina") y elija entre las coincidencias: el título del código se llena por usted.
3. {{ui:Se aplica a}} indica dónde va el código: **Este elemento**, o **Su tipo (cada elemento del tipo)**. Un código en un tipo de muro lo lee cada muro de ese tipo, también los que dibuje después.
4. {{ui:Borrar}} quita un código.

Bajo cada código, la sección indica de dónde viene: asignado a este elemento, desde su tipo, o el predeterminado del proyecto para su clase. El código propio de un elemento siempre prevalece sobre el de su tipo, y el del tipo sobre un predeterminado. Con varios elementos seleccionados, un campo que dice "varía" significa que no comparten un mismo código; al escribir uno, se asigna a todos. Cada cambio es un paso de deshacer.

Un código siempre se puede escribir, esté o no cargada una lista. Si no parece un código de ese sistema, o no está en la lista cargada, una sugerencia lo indica y el código se conserva tal como lo escribió.

## Elegir los sistemas del proyecto

Abra **Datos** en la barra del modelo y elija {{ui:Clasificación}} (o {{ui:Clasificación del proyecto…}} en la sección Propiedades).

- Marque los sistemas que usa este proyecto. Propiedades entonces muestra solo esos.
- **Uniclass**: las tablas de Elementos/funciones (EF), Sistemas (Ss) y Productos (Pr) vienen con la aplicación. Son © NBS, con licencia Creative Commons Atribución-SinDerivadas 4.0, y se pasan sin cambios. El diálogo muestra la edición de cada tabla y el día en que se leyó. No son las tablas más recientes: el editor publica nuevas cada trimestre en su propio sitio.
- **OmniClass** y **UniFormat**: ninguna lista de códigos viene con la aplicación, porque su editor no permite pasar las tablas sin una licencia. Escriba cualquier código, o cargue la tabla con licencia de su oficina.
- {{ui:Cargar una tabla (CSV)…}} lee la tabla propia de su oficina desde un archivo CSV con una columna de código y una de título (un encabezado llamado Código, Número o Identificador y Título, Nombre o Descripción se detecta solo; sin encabezado se usan las dos primeras columnas). La tabla se queda en este navegador y nunca se incluye en el archivo del proyecto. Solo se guardan en el archivo los códigos que asigna. Puede cargar una tabla Uniclass más nueva de la misma forma.
- {{ui:Asignar a los elementos un código predeterminado por su clase}} da a cada muro, piso, techo, puerta, ventana, escalera, rampa, columna, viga y mueble un código Uniclass inicial de la tabla Elementos/funciones cuando no tiene uno propio. Los elementos que dibuje después también lo reciben.
- {{ui:Mostrar los códigos como columnas en los cuadros}} agrega una columna por sistema a los cuadros de Puertas, Ventanas, Muros por tipo y Espacios, y a su CSV. Una fila de varios elementos muestra "varía" cuando sus códigos difieren.

## Conviene saber

- Los códigos predeterminados son la elección inicial propia de CadCraft, no la del editor, y no han sido revisados por un profesional. Compárelos con el estándar de su proyecto.
- En el archivo, un predeterminado es una clasificación real, marcada con el nombre de relación "CadCraft default", y desaparece en cuanto el elemento o su tipo recibe un código propio.
- Los códigos que ya tiene un archivo importado se leen y se muestran, sin importar cómo escribió el otro programa el nombre del sistema. Los códigos de cualquier otro sistema (el propio de una oficina) se listan y no se tocan.
- Los códigos se leen de nuevo al abrir el archivo otra vez, aquí o en otro programa. También se llevan a la exportación IFC5 alfa (IFCX) cuando esa opción de laboratorio está activa, salvo un código asignado a un techo.
- No incluido: un árbol para explorar una tabla nivel por nivel, códigos en niveles y espacios como predeterminados del proyecto, y la comprobación de un código contra la edición indicada en el archivo.
