---
title: Dun ficheiro de proxecto a BimCraft a través de IFC
summary: As opcións de exportación IFC que mellor se abren en BimCraft (versión, conxuntos de propiedades, cantidades base, cuartos, ficheiros vinculados, coordenadas), como abrir o resultado e o que conserva a exportación.
keywords: exportar, exportación ifc, rvt a ifc, converter, 3d, xeometría, ifc2x3, ifc4, vista de coordinación, vista de referencia, vista de transferencia de deseño, conxuntos de propiedades, cantidades base, cuartos, espazos, ficheiros vinculados, coordenadas compartidas, punto de levantamento, punto base do proxecto, configuración
from: 3efd5fc9
---

## O que vai facer

Converta un ficheiro de proxecto nun ficheiro IFC que pode xirar, inspeccionar, comprobar e editar en BimCraft. BimCraft aínda non le o modelo 3D dentro dun ficheiro `.rvt`, así que a exportación faise no programa que o creou (Revit); BimCraft abre o resultado.

## Pasos

1. Abra o proxecto no programa que o creou. A tarxeta de BimCraft indica a versión na que se gardou.
2. Abra unha vista 3D que mostre o que quere exportar.
3. Escolla **Ficheiro > Exportar > IFC**.
4. No diálogo de exportación escolla unha configuración (ou **Modificar configuración…**) coas opcións de abaixo.
5. Escolla un cartafol e un nome de ficheiro, e exporte.
6. En BimCraft, prema en {{ui:Choose a file}} e escolla o novo ficheiro `.ifc`. Os modelos vinculados exportados como ficheiros propios ábrense na mesma escena con {{ui:Add a model}}.

## As opcións que mellor se abren aquí

| Opción no exportador | Escolla | Por que |
|---|---|---|
| Versión IFC | **IFC4 Reference View** para ver, comprobar e medir cantidades; **IFC2X3 Coordination View 2.0** cando outros precisen IFC2X3 | Ambas se abren por completo. **IFC4 Design Transfer View** tamén se abre, con formas máis exactas, pero o ficheiro é máis grande e máis lento. |
| Tipo de ficheiro | **IFC** (simple) | BimCraft non abre `.ifczip` nin `.ifcxml`. |
| Fase / elementos visibles | A fase que quere, e **Exportar só os elementos visibles na vista** cando prepare a vista 3D para iso | Deixa fóra o que ocultou a propósito. |
| Conxuntos de propiedades | **Exportar conxuntos de propiedades de Revit** e **Exportar conxuntos de propiedades comúns de IFC** | Convértense nos conxuntos de propiedades que BimCraft mostra en {{ui:Properties}}, e que usan {{ui:Find}}, {{ui:Color}} e {{ui:Model checks}}. |
| Cantidades base | **Exportar cantidades base** | {{ui:Quantity totals}} e os cuadros úsanas (lonxitudes, superficies, volumes) en lugar de adiviñar. |
| Cuartos e superficies | **Exportar cuartos nas vistas 3D** (ou a opción Cuartos / Espazos) | Os cuartos chegan como espazos: prema en {{ui:Spaces}} para velos. |
| Ficheiros vinculados | **Exportar ficheiros vinculados como IFC separados** | Cada ligazón convértese nun ficheiro propio; ábraos xuntos con {{ui:Add a model}} e alíñanse. |
| Base de coordenadas | **Coordenadas compartidas** (ou o punto de levantamento) | O ficheiro leva entón o seu lugar no mapa (IfcMapConversion), así que funcionan Medir › Localización, as capas de mapa sobre o terreo e as nubes de puntos colocadas por coordenadas de mapa. O punto base do proxecto mantén o modelo preto da orixe, pero sen o seu lugar no mapa. |
| Dividir muros e columnas por nivel | Activado, cando mida cantidades por piso | Cada parte de cada piso é un elemento propio. |

## Que debe ver

O modelo en 3D, cos pisos tomados dos niveis do proxecto e a información do proxecto no panel {{ui:File}}. **Exported from** indica o exportador.

## O que conserva a exportación e o que non

- **Conservado**: xeometría, pisos, tipos de elemento, nomes, tipos, a maioría dos parámetros (como conxuntos de propiedades), cantidades base cando se piden, cuartos como espazos, e o lugar no mapa con coordenadas compartidas.
- **Non conservado**: vistas, follas, anotación, familias como familias editables, conxuntos de traballo e opcións de deseño. Un ficheiro IFC é unha instantánea dos elementos do modelo, non do proxecto. Para as follas, exporte DWG e ábrao na vista 2D.

## Erros comúns

- **Faltan parámetros en BimCraft.** Active as opcións de conxuntos de propiedades de enriba e exporte de novo.
- **Faltan cuartos.** Active a opción de cuartos e prema en {{ui:Spaces}}.
- **Gardar como `.ifczip`.** Escolla IFC simple, ou descomprima o `.ifczip`.
- **Sen lugar no mapa.** Exporte con coordenadas compartidas; comprobe que o punto de levantamento do proxecto está definido.
- **Esperar que as edicións volvan ao proxecto.** Os cambios que garda en BimCraft van a un novo ficheiro IFC, non ao ficheiro do proxecto.
