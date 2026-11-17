---
title: O que lee BimCraft de cada formato
summary: Exactamente o que lee BimCraft dos ficheiros IFC, de proxectos e familias, DWG e DXF, e o que deixa sen tocar.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versións, compatibilidade, o que se lê
from: 9b8dfb4f
---

## IFC

| Lido | Detalles |
|---|---|
| Xeometría | Cada elemento con forma, coloreado como indica o ficheiro. Os cuartos e os espazos debúxanse transparentes e ocultos ao principio |
| Pisos | Os pisos do edificio por orde de altura, e que elementos hai en cada un. Os elementos que non están en ningún piso agrúpanse como "Sen piso" |
| Contas de elementos | Cantos elementos hai de cada tipo (muros, portas, lousas…), mostrado en {{ui:Elementos}} |
| Datos do proxecto | Nome do proxecto, nome longo e fase; esquema; o programa que exporta, o autor e a data de exportación, desde a cabeceira do ficheiro |
| Datos dos elementos | Nome, tipo, tipo de obxecto, etiqueta, descrición, GlobalId; cada conxunto de propiedades e cada conxunto de cantidades do elemento e do seu tipo |

Editable: nome, tipo de obxecto, etiqueta, descrición e valores individuais de propiedades. Gárdase como un novo ficheiro IFC. Ábrense os esquemas IFC2X3, IFC4 e IFC4X3, lidos polo propio motor IFC de BimCraft; o que aínda non sabe debuxar aparece listado baixo **Sen debuxar aínda** no panel {{ui:Ficheiro}}. O modelo lévase á orixe ao abrirse, así que un modelo colocado lonxe dela aínda aparece no centro da pantalla. `.ifczip` e `.ifcxml` non se abren.

## Proxectos e ficheiros de familia

`.rvt` proxectos, `.rte` plantillas de proxecto, `.rfa` familias e `.rft` plantillas de familia.

| Lido | Detalles |
|---|---|
| Información do ficheiro | Versión e compilación, compartición de traballo, ruta do modelo central, ruta do último gardado, nome de usuario, idioma, GUID do documento |
| Información do proxecto | Os campos propios do proxecto (nome, número, cliente, enderezo, estado…), sen os valores por defecto dun proxecto novo |
| Información da familia | Nome da familia, categoría, versión, última actualización e os seus parámetros por grupo |
| Ligazóns | A lista de modelos ligados, ligazóns CAD, imaxes e táboas de notas clave que sinala o ficheiro |
| Imaxe de vista previa | A miniatura gardada no ficheiro |

Non se lé: o modelo 3D, os elementos, as vistas, as follas e os cuadros. Gárdanse nun formato sen documentar. BimCraft lé só unhas decenas de kilobytes de cada ficheiro, así que o tamaño do ficheiro case non importa.

## Ficheiros de proxecto .pln, .pla, .tpl e .bpn

Aínda non se len: BimCraft avísao cando abre un. Exporte o modelo como IFC e os debuxos como DWG; vexa [Abrir ficheiros de proxecto .pln e .pla](topic:pln-project-files).

## DWG e DXF

| Lido | Detalles |
|---|---|
| Espazos | O espazo do modelo e cada folla (disposición), en orde de lapela |
| Vistas | As vistas de cada folla, coa súa escala, xiro e capas conxeladas |
| Capas | Nome, cor, activada ou desactivada, conxelada, marca de impresión e grosor de liña |
| Obxectos | Liñas, polilíneas, arcos, círculos, elipses, splines, tramas e sólidos, texto e texto multilínea, bloques e atributos, cotas, indicadores e multiindicadores, táboas, puntos, imaxes |
| Debuxos ligados | Debuxados onde se insertan, cando se atopan os seus ficheiros |
| Imaxes | Debuxadas desde os ficheiros de imaxe cando se atopan (PNG, JPEG, GIF, BMP, WebP; non TIFF) |
| Etiquetas de equipamento | Etiquetas de elementos de hostalaría (atributos `KCL-ITEM`), para o cuadro de equipamento |

Calquera outra cousa contabilízase baixo **Sen debuxar aínda**, nunca se adiviña. Os formatos DWG de AutoCAD 2000 ata 2018 son os comprobados (tamén se aceptan os ficheiros R13 e R14, pero ningún estaba no conxunto de probas; os DWG máis antigos non se abren). O panel {{ui:Debuxo}} mostra o código de formato (como AC1032). Os ficheiros DXF de calquera versión ábrense, incluído R12. Ambos son lidos polos propios lectores de BimCraft, nesta lapela. Non se garda nada de volta en DWG nin en DXF.

## Nun cartafol

| Tipo | Extensións | No informe |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados con copias de seguridade numeradas, con comprobación de estado, lectura da ficha e ligazóns comprobadas |
| IFC | `.ifc` | Listados; ábrense en 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados cos modelos que os ligan; DWG e DXF ábrense en 2D, DGN non |
| Restos | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados baixo **Apartados** |
| Cartafoles de mantemento | `*_backup`, `*_log`, `Revit_temp`, cartafoles ocultos | Listados baixo **Apartados**, sen ler |

Ver [Informe de cartafol: funcións, estados e ligazóns](topic:folder-roles).
