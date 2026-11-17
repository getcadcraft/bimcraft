---
title: Grupos de modelo
summary: Haga de los elementos elegidos un grupo con nombre, coloque el grupo de nuevo en otro lugar y cambie una copia para cambiarlas todas.
keywords: grupo, grupo de modelo, agrupar, desagrupar, instancia, copia, repetir, unidad típica, crujía, departamento, editar grupo, IfcGroup
from: 121c5027
---

## Qué hará

Agrupe una crujía típica, colóquela varias veces y cambie cada copia cambiando una.

## Dónde está la herramienta

- Diseños de cinta: {{ui:Arquitectura}} › **Modelo** › {{ui:Grupo de modelo}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}} › Grupo de modelo.

## Pasos

1. Con Seleccionar, elija los elementos: haga clic en uno, y Ctrl+clic o Shift+clic en los demás.
2. Elija {{ui:Grupo de modelo}}. Se convierten en un grupo de inmediato. Escriba un {{ui:Nombre del grupo}} en la fila antes para nombrarlo, o escríbalo después para cambiarle el nombre.
3. Presione {{ui:Colocar otro}} y haga clic donde debe ir la copia: su esquina inferior izquierda va al punto donde hizo clic.
4. Cambie cualquier copia: mueva el extremo de un muro, cambie el tamaño de una puerta, elimine una columna. Todas las demás copias del grupo cambian en el mismo paso, y un Deshacer las devuelve todas.
5. Mientras tenga activo {{ui:Grupo de modelo}}, un clic en un elemento elige todo su grupo.

## Otras cosas que puede hacer

- {{ui:Agregar los designados}}: agregue más elementos al grupo que eligió por última vez.
- {{ui:Desagrupar}}: esta copia se convierte otra vez en elementos normales. Las demás copias siguen siendo un grupo.
- Mueva una copia completa con {{ui:Desplazar}}: es el mismo grupo en un lugar nuevo; las demás no se mueven.
- Borre los elementos de una copia y esa copia desaparece.

## Qué puede haber en un grupo

Los muros con sus puertas y ventanas, las columnas y los pisos dibujados pueden colocarse de nuevo y mantenerse iguales. Un grupo también puede tener otros elementos, pero entonces no se puede colocar de nuevo todavía; la fila indica por qué.

Las copias se desplazan; no se pueden girar ni crear por simetría.

## En el IFC

Un grupo es un IfcGroup con un IfcRelAssignsToGroup hacia sus miembros, que siguen siendo muros, columnas y pisos normales. Cada copia de un mismo grupo lleva el mismo id de definición.

## Todavía no disponible

- Girar o crear por simetría una copia.
- Escaleras, techos, pisos de habitaciones y elementos de biblioteca en un grupo que se coloca de nuevo.
- El perfil, la inclinación y las aberturas de un muro no pasan a las copias.
- Grupos dentro de grupos.

Vea también [Desplazar, alinear y distribuir](topic:move-align-distribute).
