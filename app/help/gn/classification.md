---
title: Códigos de clasificación (Uniclass, OmniClass, UniFormat)
summary: Asigne un código de clasificación a cada elemento y tipo, elija qué sistemas usa el proyecto, busque en las tablas de Uniclass que vienen con la aplicación, cargue las tablas con licencia propias de su oficina y muestre los códigos en las planillas. Los códigos se escriben en el archivo IFC para otros programas.
keywords: clasificación, clasificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabla, código de elemento, código de tipo, código predeterminado, IfcClassification, IfcClassificationReference, cobie, columna de planilla, csv, licencia
from: 222b94cd
---

## Mba'e rejapóta

Ponga un código de clasificación en muros, pisos, techos, puertas, ventanas y todo lo demás del modelo, en hasta tres sistemas a la vez: Uniclass, OmniClass y UniFormat. Otras disciplinas y otros programas se basan en el código, no en el nombre, así que los códigos se guardan en el archivo IFC como referencias de clasificación que cualquier programa BIM lee.

## Asignar un código a un elemento

1. Seleccione un elemento (o varios) y abra **Propiedades**. Abra la sección {{ui:Clasificación}}.
2. Escriba el código en el recuadro de su sistema y presione Enter. Con una lista de códigos cargada, escriba parte de un código o algunas palabras ("muro cortina") y elija entre las coincidencias: el título del código se completa solo.
3. {{ui:Se aplica a}} indica dónde va el código: **Este elemento**, o **Su tipo (todos los elementos del tipo)**. Un código en un tipo de muro lo leen todos los muros de ese tipo, también los que dibuje después.
4. {{ui:Limpiar}} quita un código.

Debajo de cada código la sección indica de dónde viene: asignado a este elemento, desde su tipo, o el valor predeterminado del proyecto para su clase. El código propio de un elemento siempre gana al de su tipo, y el del tipo al predeterminado. Con varios elementos seleccionados, un recuadro que dice "varía" significa que no comparten un mismo código; si escribe uno, se lo asigna a todos. Cada cambio es un paso de deshacer.

Un código siempre se puede escribir, esté o no cargada una lista. Si no parece un código de ese sistema, o no está en la lista cargada, un aviso lo indica y el código se mantiene tal como lo escribió.

## Elegir los sistemas del proyecto

Abra **Datos** en la barra del modelo y elija {{ui:Clasificación}} (o {{ui:Clasificación del proyecto…}} en la sección Propiedades).

- Marque los sistemas que usa este proyecto. Propiedades entonces muestra solo esos.
- **Uniclass**: las tablas de Elementos/funciones (EF), Sistemas (Ss) y Productos (Pr) vienen con la aplicación. Son © NBS, con licencia Creative Commons Atribución-SinDerivadas 4.0, y se pasan sin cambios. El diálogo muestra la edición de cada tabla y el día en que se leyó. No son las tablas más nuevas: el editor publica nuevas cada trimestre en su propio sitio.
- **OmniClass** y **UniFormat**: no viene ninguna lista de códigos con la aplicación, porque su editor no permite pasar las tablas sin licencia. Escriba cualquier código, o cargue la tabla con licencia de su oficina.
- {{ui:Cargar tabla (CSV)…}} lee la tabla propia de su oficina desde un archivo CSV con una columna de código y una de título (un encabezado llamado Código, Número o Identificador y Título, Nombre o Descripción se detecta solo; sin encabezado se usan las dos primeras columnas). La tabla queda en este navegador y nunca se pone en el archivo del proyecto. En el archivo solo se guardan los códigos que asigna. Puede cargar una tabla Uniclass más nueva de la misma forma.
- {{ui:Dar un código predeterminado a los elementos según su clase}} da a cada muro, piso, techo, puerta, ventana, escalera, rampa, columna, viga y mueble un código inicial de Uniclass de la tabla de Elementos/funciones cuando no tiene uno propio. Los elementos que dibuje después también lo reciben.
- {{ui:Mostrar los códigos como columnas en las planillas}} agrega una columna por sistema a las planillas de Puertas, Ventanas, Muros por tipo y Ambientes, y a su CSV. Una fila de varios elementos muestra "varía" cuando sus códigos difieren.

## Aikuaa porã

- Los códigos predeterminados son la elección inicial de CadCraft, no del editor, y no los ha revisado un profesional. Verifíquelos contra el estándar de su proyecto.
- En el archivo, un predeterminado es una clasificación real, marcada con el nombre de relación "CadCraft default", y desaparece en cuanto el elemento o su tipo recibe un código propio.
- Los códigos que ya trae un archivo importado se leen y se muestran, con la grafía que haya usado el otro programa para el nombre del sistema. Los códigos de cualquier otro sistema (el propio de una oficina) se listan y no se tocan.
- Los códigos se vuelven a leer cuando se abre el archivo de nuevo, aquí o en otro programa. También se llevan a la exportación IFC5 alfa (IFCX) cuando esa opción de laboratorio está activa, salvo un código asignado a un techo.
- No está hecho todavía: un árbol para recorrer una tabla nivel por nivel, códigos en niveles y ambientes como predeterminados del proyecto, y verificar un código contra la edición indicada en el archivo.
