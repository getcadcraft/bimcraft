---
title: "Documentos y revisiones (el archivo de proyecto)"
summary: "Un recorrido paso a paso por un trabajo real: poner una carpeta de proyecto de modelos IFC bajo control, reservar un modelo, modificarlo, devolverlo con una nota, enviarlo a revisión, aprobarlo y liberarlo, ver el historial y qué lo usa, lo que ve una segunda persona mientras está bloqueado, y cómo funciona con carpetas en la nube."
keywords: archivo de proyecto, documentos, recorrido, tutorial, reservar, devolver, revisión, liberar, aprobar, bloqueo, historial, dónde se usa, ifc, modelo, carpeta en la nube, carpeta de proyecto, dos personas, carpeta compartida
from: 0a753f25
---

## Qué va a hacer

Usted es Ana, y trabaja en el Riverside Clinic con un compañero, Ben. Los modelos IFC del proyecto están en una carpeta a la que ambos tienen acceso (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a la revisión liberada **A**, se habrá modificado de nuevo como **B.1**, habrá visto quién hizo cada cosa y lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: no hay servidor y no se sube nada (una carpeta en la nube es la excepción, véase el último paso). Para cada botón y cada regla en un solo lugar, consulte el tema *Documentos: reservas, revisiones y liberación* donde su aplicación lo tenga.

## 1. Prepare la carpeta del proyecto

1. Elija {{ui:Documentos}} junto a {{ui:Abrir una carpeta}} en la pantalla de inicio, o {{ui:Documentos…}} en el menú **Archivo**.
2. Elija {{ui:Elija la carpeta del proyecto}} y seleccione la carpeta que contiene los modelos IFC del proyecto. (Las carpetas de proyecto funcionan en Studio y en los navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores, el panel lo indica.)
3. Elija {{ui:Cambio}} junto a **Usted:** y escriba su nombre, `Ana` (si lo pide, también el nombre de este ordenador). El panel indica ahora *Usted: Ana en* y su ordenador. Su nombre aparece en todo lo que haga.
4. Elija {{ui:Crear un archivo de proyecto en esta carpeta}} y escriba el nombre del proyecto, `Riverside clinic`. El panel indica *Archivo de proyecto iniciado para Riverside clinic.*

## 2. Ponga un archivo bajo control

1. Abra **Archivos fuera del archivo de proyecto** y elija {{ui:Agregar}} junto a `models/House.ifc`.
2. Aparece en **Archivos del archivo de proyecto** en la revisión **A.1**, con estado **En curso**. A.1 es su primera copia; el archivo de proyecto guarda una copia de cada revisión.

## 3. Reservar, modificar, devolver

1. Elija {{ui:Abierta}} junto a `models/House.ifc`. El modelo se abre en BimCraft y el panel se cierra para que pueda verlo. Vuelva a abrir el panel desde {{ui:Documentos}}.
2. Vuelva a abrir el panel y elija {{ui:Reservar}}. La fila indica ahora **Reservado a su nombre**. Se ha creado un archivo de bloqueo en `.ccvault/locks`; nadie más puede reservar este archivo hasta que usted lo devuelva.
3. Modifique el modelo: mueva un muro, añada una puerta. Guardar se rechaza salvo que el modelo esté reservado a su nombre, y lo indica; Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Devolver}} y escriba qué ha cambiado (`Puerta movida`). El panel indica *devuelto como A.2*. El archivo de la carpeta del proyecto es ahora el modelo que tenía abierto, y el bloqueo desaparece. Devolver sin cambios conserva la revisión.

Si cambia de opinión, {{ui:Deshacer la reserva}} devuelve el archivo sin una nueva revisión.

## 4. Revisar y liberar

1. Elija {{ui:Enviar a revisión}}. El estado pasa a **Para revisión** y el archivo queda de solo lectura.
2. Antes de aprobar, elija {{ui:Ajustes del proyecto}} y enumere quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que quien aprueba debe ser alguien distinto del autor. Elija {{ui:Guardar ajustes}}. Ahora el propio archivo rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Aprobar}} y escribe el nombre de quien aprueba. El estado pasa a **Liberado** y la revisión a **A**, con *aprobado por* y el nombre. Un archivo liberado es de solo lectura. {{ui:Devolver para corregir}} lo habría devuelto a En curso, con un motivo.

El nombre de quien aprueba es el que se escribe en el panel; es un registro de quién dio su conformidad, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:Revisión nueva}}. Queda reservado para la siguiente letra.
2. Modifíquelo y después elija {{ui:Devolver}}. La revisión es **B.1**, en curso. Libérela del mismo modo y pasará a **B**. {{ui:Deshacer la reserva}} antes de la primera devolución lo deja en **A**.

Las letras de revisión van A, B … Z, AA, AB. Si su norma omite algunas letras, el ajuste del proyecto *Usar la secuencia de ASME Y14.35* omite I, O, Q, S, X y Z en las revisiones siguientes.

## 6. Ver qué ha pasado

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:Historial}}**: cada evento, el más reciente primero, con quién, qué ordenador y cuándo: *Devuelto A.2* por Ana, *Liberado* por Ben, etc.
- **{{ui:Revisiones}}**: la tabla de revisiones: cada revisión guardada, con su fecha, quién la devolvió, la nota y quién la aprobó. El archivo de proyecto guarda una copia de cada una en `.ccvault/revs`.
- **{{ui:Usa}}**: los documentos a los que apunta un modelo IFC.
- **{{ui:Usado por}}**: lista cada modelo del archivo de proyecto que apunta a este archivo.

## Modelos que apuntan a otros documentos

Un modelo IFC que apunta a otros documentos de la carpeta (planos, tablas) los muestra en **Usa**, y cada uno de ellos muestra el modelo en **Usado por**. Al devolver un documento, puede ver qué modelos lo referencian.

## 7. Lo que ve Ben mientras usted tiene el archivo

Ahora reserve el archivo de nuevo, y pida a Ben que abra la misma carpeta de proyecto en su ordenador y abra el panel. En la fila del archivo ve **Reservado por Ana en** su ordenador **desde** la hora, y ningún botón {{ui:Reservar}}. Si lo intenta igualmente, el archivo de proyecto lo rechaza: el bloqueo es un archivo que el sistema no permite crear dos veces, así que dos personas no pueden tener el archivo a la vez, ni siquiera en el mismo instante, cuando la carpeta está en disco en Studio. (En un navegador, la carpeta solo permite un mejor esfuerzo, y el panel lo indica en **Carpeta**.)

Si Ana está fuera y Ben necesita el archivo, {{ui:Romper la reserva}} lo libera. Debe escribir un motivo; se guarda en el registro junto con a quién pertenecía la reserva. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una reserva más antigua que el límite de caducidad (14 días por defecto) aparece marcada como *hace mucho tiempo*. Tras la ruptura, la devolución tardía de Ana se rechaza, así que ninguno de los dos puede sobrescribir los cambios del otro.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta de proyecto guardada en el almacenamiento en la nube del equipo, así que el equipo no necesita una unidad compartida. En Studio, con sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta en la nube}} junto a {{ui:Elija la carpeta del proyecto}}. Elíjala y seleccione la carpeta, listada como espacio de trabajo / carpeta. Un propietario del espacio de trabajo crea primero la carpeta, y el almacenamiento en la nube del equipo debe estar vigente. Todo lo anterior funciona igual; el servidor crea el bloqueo, que es estricto entre personas. Si no ha iniciado sesión, el panel le pide que lo haga. En una pestaña normal del navegador no se ofrece el botón de la nube; use Studio.

## Pruébelo

Haga los ocho pasos anteriores con una copia de un archivo real. Para los pasos de dos personas necesita otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad incluye una comprobación que pide exactamente esto y acepta resultados.
