---
title: "Documentos y revisiones (la bóveda)"
summary: Un recorrido paso a paso por un trabajo real: ponga bajo control una carpeta de proyecto con modelos IFC, reserve un modelo, cámbielo, entréguelo con una nota, envíelo a revisión, apruébelo y libérelo, vea el historial y lo que lo usa, lo que ve una segunda persona mientras está bloqueado, y cómo funciona con carpetas en la nube.
keywords: bóveda, documentos, recorrido, tutorial, reservar, entregar, revisión, liberar, aprobar, bloquear, historial, dónde se usa, ifc, modelo, carpeta en la nube, carpeta de proyecto, dos personas, carpeta compartida
from: 0a753f25
---

## Lo que hará

Usted es Ana, y trabaja en la Clínica Riverside con una colega, Ben. Los modelos IFC del proyecto viven en una carpeta a la que ambos llegan (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a una revisión liberada **A**, se habrá cambiado de nuevo como **B.1**, habrá visto quién hizo qué y habrá visto lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: sin servidor y sin subir nada (una carpeta en la nube es la excepción, vea el último paso). Para cada botón y cada regla en un solo lugar, vea el tema *Documentos: reservar, revisiones y liberación* donde su aplicación lo tenga.

## 1. Configurar la carpeta del proyecto

1. Elija {{ui:Documentos}} junto a {{ui:Abrir una carpeta}} en la pantalla de inicio, o {{ui:Documentos…}} en el menú **Archivo**.
2. Elija {{ui:Elegir la carpeta del proyecto}} y seleccione la carpeta que contiene los modelos IFC del proyecto. (Las carpetas de proyecto funcionan en Studio y en navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores el panel lo indica.)
3. Elija {{ui:Cambio}} junto a **Usted:** y escriba su nombre, `Ana` (si lo pide, también el nombre de esta computadora). El panel dice ahora *Usted: Ana en* y su computadora. Su nombre va en todo lo que haga.
4. Elija {{ui:Crear una bóveda en esta carpeta}} y escriba el nombre del proyecto, `Clínica Riverside`. El panel dice *Bóveda iniciada para Clínica Riverside.*

## 2. Poner un archivo bajo control

1. Abra **Archivos fuera de la bóveda** y elija {{ui:Agregar}} junto a `models/House.ifc`.
2. Aparece en **Archivos en la bóveda** con la revisión **A.1** y el estado **Trabajo en curso**. A.1 es su primera copia; la bóveda guarda una copia de cada revisión.

## 3. Reservar, cambiar, entregar

1. Elija {{ui:Abierta}} junto a `models/House.ifc`. El modelo se abre en BimCraft y el panel se cierra para que lo vea. Abra el panel de nuevo desde {{ui:Documentos}}.
2. Abra el panel otra vez y elija {{ui:Reservar}}. La fila dice ahora **Reservado a usted**. Se creó un archivo de bloqueo en `.ccvault/locks`; nadie más puede reservar este archivo hasta que usted lo entregue.
3. Cambie el modelo: mueva un muro, agregue una puerta. Guardar se rechaza salvo que el modelo esté reservado a usted, y dice por qué; Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Entregar}} y escriba lo que cambió (`Movió la puerta`). El panel dice *entregado como A.2*. El archivo de la carpeta del proyecto es ahora el modelo que tenía abierto, y el bloqueo desaparece. Entregar sin cambios conserva la revisión.

Si cambia de opinión, {{ui:Deshacer la reserva}} devuelve el archivo sin una nueva revisión.

## 4. Revisar y liberar

1. Elija {{ui:Enviar a revisión}}. El estado pasa a **Para revisión** y el archivo queda de solo lectura.
2. Antes de aprobar, elija {{ui:Ajustes del proyecto}} y liste quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que quien aprueba debe ser alguien distinto del autor. Elija {{ui:Guardar ajustes}}. Ahora la bóveda misma rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Aprobar}} y escribe el nombre de quien aprueba. El estado pasa a **Liberado** y la revisión pasa a **A**, con *aprobado por* y el nombre. Un archivo liberado es de solo lectura. {{ui:Devolver}} lo habría regresado a Trabajo en curso, con un motivo.

El nombre de quien aprueba es el que se escribe en el panel; es un registro de quién dio su visto bueno, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:Nueva revisión}}. Usted lo reserva para la siguiente letra.
2. Cámbielo y luego elija {{ui:Entregar}}. La revisión es **B.1**, trabajo en curso. Libérela de la misma forma y pasará a **B**. {{ui:Deshacer la reserva}} antes de la primera entrega lo deja en **A**.

Las letras de revisión van A, B … Z, AA, AB. Si su estándar omite algunas letras, el ajuste del proyecto *Usar la secuencia de ASME Y14.35* omite I, O, Q, S, X y Z en las siguientes revisiones.

## 6. Ver lo que pasó

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:Historial}}**: cada evento, del más reciente al más antiguo, con quién, en qué computadora y cuándo: *Entregado A.2* por Ana, *Liberado* por Ben, y así sucesivamente.
- **{{ui:Revisiones}}**: la tabla de revisiones: cada revisión guardada, con su fecha, quién la entregó, la nota y quién la aprobó. La bóveda guarda una copia de cada una en `.ccvault/revs`.
- **{{ui:Usa}}**: los documentos a los que apunta un modelo IFC.
- **{{ui:Usado por}}**: lista todos los modelos de la bóveda que apuntan a este archivo.

## Modelos que apuntan a otros documentos

Un modelo IFC que apunta a otros documentos de la carpeta (planos, cuadros) los muestra bajo **Usa**, y cada uno de ellos muestra el modelo bajo **Usado por**. Al entregar un documento, puede ver qué modelos lo mencionan.

## 7. Lo que ve Ben mientras usted tiene el archivo

Ahora reserve el archivo de nuevo, y pida a Ben que abra la misma carpeta de proyecto en su computadora y abra el panel. En la fila del archivo ve **Reservado por Ana en** la computadora de Ana **desde** la hora, y no hay botón {{ui:Reservar}}. Si lo intenta de todos modos, la bóveda lo rechaza: el bloqueo es un archivo que el sistema no crea dos veces, así que dos personas no pueden tener el archivo, ni siquiera en el mismo instante, cuando la carpeta está en disco en Studio. (En un navegador la carpeta solo permite un esfuerzo razonable, y el panel lo dice bajo **Carpeta**.)

Si Ana está fuera y Ben necesita el archivo, {{ui:Romper la reserva}} lo libera. Él debe escribir un motivo; queda en el registro junto con de quién era la reserva. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una reserva más antigua que el límite de antigüedad (14 días por defecto) se marca como *mucho tiempo*. Después de romperla, la entrega tardía de Ana se rechaza, así que ustedes dos no pueden sobrescribirse.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta de proyecto guardada en el almacenamiento en la nube de su equipo, así que el equipo no necesita una unidad compartida. En Studio, con sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta en la nube}} junto a {{ui:Elegir la carpeta del proyecto}}. Elíjala y seleccione la carpeta, listada como espacio de trabajo / carpeta. Un propietario del espacio de trabajo crea la carpeta primero, y el almacenamiento en la nube del equipo debe estar vigente. Todo lo anterior funciona igual; el servidor hace el bloqueo, que es estricto entre personas. Si no tiene sesión iniciada, el panel le pide que la inicie. En una pestaña de navegador normal no se ofrece el botón de la nube; use Studio.

## Pruébelo

Haga los ocho pasos de arriba con una copia de un archivo real. Para los pasos de dos personas necesita otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad tiene una verificación que pide exactamente esto y recibe resultados.
