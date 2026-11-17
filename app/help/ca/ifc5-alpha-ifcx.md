---
title: Obre i exporta fitxers IFC5 alfa (fitxers IFCX)
summary: Una opció de laboratori per al format de fitxer IFC5 alfa (.ifcx): obriu un fitxer amb les seves capes, veieu què no ha pogut comprovar la lectura i exporteu els models oberts. El format encara canvia, així que llegiu-ho primer.
keywords: ifc5, ifcx, alfa, buildingsmart, json, capes, esquema, laboratori, quantitats, qto, exporta, importa
from: cffe1669
---

IFC5 alfa (fitxer que acaba en {{ui:.ifcx}}) és el format de fitxer que buildingSMART encara està dissenyant. No és definitiu: els fitxers, i la nostra lectura d'ells, poden canviar. Per això és una opció de laboratori i per això la lectura va primer.

## Activa-ho

1. Trieu {{ui:Configuració}}, i després la secció {{ui:IFC5 alfa (IFCX)}} de la pestanya BimCraft.
2. Marqueu {{ui:IFC5 alfa (IFCX) - el format encara canvia; llegiu-ho primer}}.

Està desactivada per defecte. Mentre ho està, un fitxer .ifcx es rebutja amb una frase que remet a aquí. {{ui:Obre IFC5 alfa (.ifcx)…}} i el botó d'exportació {{ui:IFC5 alfa}} apareixen quan està activada.

## Obre

- Trieu un fitxer .ifcx amb {{ui:Obre un fitxer o una carpeta}} (substitueix el model obert, després de la pregunta habitual sobre canvis), o
- trieu {{ui:Obre IFC5 alfa (.ifcx)…}} i seleccioneu diversos fitxers junts: el fitxer, les seves capes i els fitxers d'esquema que importa. Amb un model ja obert, el fitxer s'**afegeix al costat** d'aquest; la x de la llista de models el treu de nou, que és la manera de desfer-ho.

Un fitxer IFCX enumera nodes (una ruta, els seus fills, el que hereta, els seus atributs). Diversos fitxers poden descriure el mateix node: un fitxer posterior (una capa) substitueix els atributs d'un d'anterior, i un fill nul elimina un fill. BimCraft els compon i després dibuixa el resultat com un petit model IFC4: projecte, emplaçament, edifici, plantes i elements amb noms, classes, propietats, quantitats, colors i malles.

No es descarrega res de la xarxa. Els fitxers d'esquema que importa un fitxer (per exemple `ifc@v5a.ifcx`) només s'utilitzen si els heu triat amb el fitxer; altrament l'informe ho indica i els atributs es llegeixen sense comprovació de tipus.

### L'informe

Després d'obrir, un informe llista el que ha trobat la lectura: dades que no coincideixen amb el seu esquema, fitxers d'esquema no donats, atributs que aquí no tenen significat IFC. Els atributs sense assignació es **conserven** al model, no s'eliminen, i s'escriuen de nou en exportar.

## Equivalències

| Al fitxer IFCX | A BimCraft |
|---|---|
| Un node amb una classe IFC (projecte, emplaçament, edifici, planta, mur …) | L'element IFC4 corresponent; una classe que aquesta lectura no coneix esdevé un element de construcció genèric (proxy) |
| El nom que el node té sota el seu pare | El nom de l'element |
| Atributs amb un tipus de quantitat (Longitud, Àrea, Volum, Massa …) | Un conjunt de quantitats IFC4 anomenat `Qto_IFCX` (les quantitats IFC4 es mantenen com a conjunts `Qto_*` d'IFC4) |
| Altres atributs de propietat | Un conjunt de propietats anomenat `Pset_IFCX` |
| Atributs de malla i de transformació | Els triangles i la col·locació de l'element; les malles invisibles no es dibuixen |
| Color, opacitat, material, classificació | Estil de superfície, material i classificació de l'element |

Les unitats es prenen com a metres, amb la Z cap amunt: l'alfa indica que les unitats es documentaran més endavant.

## Exportació

Trieu {{ui:IFC5 alfa}} a la barra d'eines, llegiu la nota i després {{ui:Exporta .ifcx}}. El fitxer té la nostra pròpia capçalera (autor CadCraft, versió ifcx_alpha) i diu en si mateix que és el format alfa. Cada model s'escriu en les seves pròpies coordenades de fitxer, en metres, amb noms, classes, conjunts de propietats, quantitats (com a atributs amb el seu tipus), colors i triangles. Les capes i l'herència s'escriuen aplanades. Comproveu el fitxer al programa al qual l'envieu.

## Límits

- La geometria corba (corbes, superfícies) no es llegeix: només malles de triangles.
- Les portes i finestres dins d'un mur es col·loquen a la planta; el mur del qual venen no queda enllaçat.
- Els noms de conjunts `Qto_*` d'IFC4 es conserven com a grups d'atributs propis (`cadcraft::qto::…`); l'esquema alfa estàndard només té alguns noms de quantitat.
- El format pot canviar sota nostre; un fitxer fet avui pot no llegir-se demà.
