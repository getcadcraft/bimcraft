---
title: Campos del panel Propiedades
summary: Qué significa cada campo del panel Propiedades y de los paneles Archivo, Dibujo y Carpeta, y cuáles puede cambiar.
keywords: propiedades, campos, atributos, globalid, guid, copiar, copiar valor, copiar todo, csv, portapapeles, número de serie, etiqueta, tipo de objeto, línea, id express, conjunto de propiedades, pset, cantidades, esquema, panel de archivo
from: fe55b435
---

## Un elemento IFC

La parte superior del panel {{ui:Propiedades}} muestra el tipo del elemento sin el prefijo "Ifc" (por ejemplo "Door", "WallStandardCase", "FurnishingElement") y su nombre, o "Sin nombre".

| Campo | Significado | Editable |
|---|---|---|
| Nombre | El nombre del elemento, a menudo el nombre de familia y tipo que indica el exportador | Sí |
| Tipo | El nombre del tipo del elemento, cuando lo tiene | No |
| Tipo de objeto | Una descripción libre del tipo, que algunos exportadores llenan | Sí |
| Etiqueta | La etiqueta o marca del elemento; muchos exportadores escriben aquí el ID del elemento | Sí |
| Descripción | Texto libre | Sí |
| GlobalId | El identificador IFC permanente de 22 caracteres del elemento, igual en cada exportación del mismo elemento | No |
| Línea | El número de línea (`#1234`) del elemento en este archivo IFC. Cambia entre exportaciones | No |

Debajo aparecen los **conjuntos de propiedades**, ordenados por nombre:

- Cada conjunto se abre y se cierra al hacer clic en su nombre. Los tres primeros están abiertos.
- Un conjunto marcado "(tipo)" pertenece al tipo del elemento: "Propiedad de tipo: un cambio aquí se aplica a cada elemento de este tipo."
- Los conjuntos de cantidades (longitudes, áreas, volúmenes, conteos, pesos) son de solo lectura.
- Las listas y los valores enumerados se muestran, de solo lectura.
- Los valores Sí/No se muestran como **Sí** o **No**.
- Los números se redondean a cuatro decimales para mostrarlos. Las longitudes (una propiedad de longitud o la longitud de una cantidad) se muestran en las {{ui:Unidades}} elegidas en la barra de herramientas, con la unidad al lado, y puede escribir un valor nuevo en esa unidad o con otra unidad (2.4 m, 8'-0"): BimCraft escribe de vuelta el número propio del archivo. Los demás números se muestran tal como los tiene el archivo.
- Un valor vacío se muestra como *vacío*. Un valor editado aparece en negrita con una barra azul a su lado.

## Copiar un valor

Cada valor de {{ui:Propiedades}} tiene un pequeño botón de copiar junto a él: haga clic para poner ese valor en el portapapeles exactamente como se muestra, por ejemplo un GlobalId, un número de serie o cualquier valor de un conjunto de propiedades. Copiar nunca inicia una edición.

En la parte superior, {{ui:Copy all}} copia cada valor del elemento como texto, conjunto por conjunto, y {{ui:Copy as CSV}} copia filas de grupo, propiedad y valor para pegarlas en una hoja de cálculo; los valores vacíos se conservan para que cada campo tenga una fila. Esto funciona igual para un elemento de otro modelo abierto; cuando hay más de un modelo abierto, el CSV empieza con una columna Modelo que indica su archivo.

## El panel Archivo (IFC)

| Campo | Significado |
|---|---|
| Archivo, Tamaño | El archivo que abrió |
| Esquema | La versión de IFC, como IFC2X3 o IFC4 |
| Proyecto | El nombre del proyecto y su nombre largo |
| Fase | La fase del proyecto, si el exportador la escribió |
| Exportado desde | El programa que exportó, según el encabezado del archivo |
| Autor | El autor, según el encabezado del archivo |
| Exportado | La fecha y hora del encabezado del archivo |
| Elementos | Cuántos elementos con forma se dibujaron |
| Triángulos | Cuántos triángulos forman sus formas; una medida del peso del modelo |

## El panel Archivo (proyecto y familia)

| Campo | Significado |
|---|---|
| Tipo | Proyecto, Plantilla de proyecto, Familia o Plantilla de familia |
| Guardado en | La versión que guardó el archivo por última vez |
| Compilación | La compilación exacta de esa versión |
| Leído | Cuánto del archivo leyó BimCraft, frente a su tamaño |

## El panel Dibujo (DWG y DXF)

| Campo | Significado |
|---|---|
| Formato | La versión en que se guardó el dibujo, con su código de formato, como AC1032 |
| Unidades | Las unidades de inserción del dibujo, cuando están definidas |
| Entidades | Cuántos objetos se leyeron |
| Capas | Cuántas capas hay |
| Hojas | Cuántas hojas (presentaciones) hay, o Ninguna |
| Dibujos vinculados | Cuántos de sus dibujos vinculados se encontraron y cargaron |
| Equipos | Cuántos equipos etiquetados hay en las hojas |

## El panel Carpeta

| Campo | Significado |
|---|---|
| Carpeta, Archivos, Tamaño | La carpeta que abrió, cuántos archivos contiene y su tamaño total |
| Modelos | Archivos de proyecto y de familia, cada uno con sus copias de seguridad contadas una vez |
| Dibujos CAD, Modelos IFC | Cuántos hay de cada uno |
| Problemas | Cuántas copias de modelos están incompletas o no se pueden leer, o Ninguno |
