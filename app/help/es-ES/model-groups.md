---
title: Grupos de modelo
summary: Reúna los elementos elegidos en un grupo con nombre, coloque el grupo de nuevo en otro lugar y cambie una copia para cambiarlas todas.
keywords: grupo, grupo de modelo, agrupar, desagrupar, instancia, copia, repetir, unidad tipo, crujía, piso, editar grupo, IfcGroup
from: 121c5027
---

## Qué va a hacer

Agrupe una crujía tipo, colóquela varias veces y cambie todas las copias modificando una.

## Dónde está la herramienta

- Diseños con cinta: {{ui:Arquitectura}} › **Modelo** › {{ui:Grupo de modelo}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}} › Grupo de modelo.

## Pasos

1. Con la herramienta Seleccionar, elija los elementos: haga clic en uno, y Ctrl+clic o Shift+clic en los demás.
2. Elija {{ui:Grupo de modelo}}. Pasan a ser un grupo de inmediato. Escriba un {{ui:Nombre del grupo}} en la fila antes para nombrarlo, o escríbalo después para cambiarle el nombre.
3. Pulse {{ui:Colocar otro}} y haga clic donde deba ir la copia: su esquina inferior izquierda va al punto en el que hace clic.
4. Cambie cualquier copia: mueva el extremo de un muro, cambie el tamaño de una puerta, borre un pilar. Todas las demás copias del grupo cambian en el mismo paso, y un Deshacer lo revierte todo.
5. Mientras tenga activo {{ui:Grupo de modelo}}, un clic en un elemento selecciona todo su grupo.

## Otras acciones

- {{ui:Añadir los seleccionados}}: añade más elementos al grupo que eligió por último.
- {{ui:Desagrupar}}: esta copia pasa a ser elementos normales. Las demás copias siguen siendo un grupo.
- Mueva una copia completa con {{ui:Desplazar}}: es el mismo grupo en un lugar nuevo; las demás no se mueven.
- Borre los elementos de una copia y esa copia desaparece.

## Qué puede haber en un grupo

Los muros con sus puertas y ventanas, los pilares y los forjados dibujados pueden colocarse de nuevo y mantenerse iguales. Un grupo puede contener también otros elementos, pero entonces no puede colocarse de nuevo todavía; la fila indica el motivo.

Las copias se desplazan, no se giran ni se reflejan.

## En el IFC

Un grupo es un IfcGroup con una IfcRelAssignsToGroup hacia sus miembros, que siguen siendo muros, pilares y forjados normales. Todas las copias de un mismo grupo llevan el mismo identificador de definición.

## Todavía no disponible

- Girar o reflejar una copia.
- Escaleras, cubiertas, forjados de habitaciones y elementos de biblioteca en un grupo que se vuelve a colocar.
- El perfil, la inclinación y los huecos de un muro no se transfieren a las copias.
- Grupos dentro de grupos.

Véase también [Desplazar, alinear y distribuir](topic:move-align-distribute).
