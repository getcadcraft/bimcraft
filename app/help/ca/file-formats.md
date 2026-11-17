---
title: Què llegeix BimCraft de cada format
summary: Exactament què llegeix BimCraft dels fitxers IFC, de projecte i de família, DWG i DXF, i què deixa sense tocar.
keywords: formats, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versions, compatibilitat, què es llegeix
from: 9b8dfb4f
---

## IFC

| Llegeix | Detalls |
|---|---|
| Geometria | Tots els elements amb una forma, acolorits tal com indica el fitxer. Les sales i els espais es dibuixen transparents i ocults al principi |
| Plantes | Les plantes de l'edifici en ordre d'elevació, i quins elements hi són. Els elements que no són en cap planta s'agrupen com a "No està en cap planta" |
| Recomptes d'elements | Quants elements de cada tipus (murs, portes, forjats…), mostrats a {{ui:Elements}} |
| Dades del projecte | Nom del projecte, nom llarg i fase; esquema; el programa que exporta, l'autor i la data d'exportació, de la capçalera del fitxer |
| Dades de l'element | Nom, tipus, tipus d'objecte, etiqueta, descripció, GlobalId; tots els conjunts de propietats i de quantitats de l'element i del seu tipus |

Editables: nom, tipus d'objecte, etiqueta, descripció i valors de propietat individuals. Es desa com a fitxer IFC nou. S'obren els esquemes IFC2X3, IFC4 i IFC4X3, llegits pel propi motor IFC de BimCraft; tot el que encara no pot dibuixar es llista sota **Encara no dibuixat** al panell {{ui:Fitxer}}. El model es mou a l'origen en obrir-lo, de manera que un model col·locat lluny encara es mostra al mig de la pantalla. `.ifczip` i `.ifcxml` no s'obren.

## Fitxers de projecte i de família

`.rvt` projectes, `.rte` plantilles de projecte, `.rfa` famílies i `.rft` plantilles de família.

| Llegeix | Detalls |
|---|---|
| Informació del fitxer | Versió i compilació, treball compartit, camí del model central, darrer camí desat, nom d'usuari, configuració regional, GUID del document |
| Informació del projecte | Els camps propis del projecte (nom, número, client, adreça, estat…), sense els valors per defecte d'un projecte nou |
| Informació de la família | Nom de la família, categoria, versió, darrera actualització, i els seus paràmetres per grups |
| Enllaços | La llista de models enllaçats, enllaços CAD, imatges i taules de notes clau que apunta el fitxer |
| Imatge de vista prèvia | La miniatura desada al fitxer |

No es llegeixen el model 3D, els elements, les vistes, els fulls ni els quadres. S'emmagatzemen en un format no documentat. BimCraft només llegeix unes quantes desenes de kilobytes de cada fitxer, de manera que la mida del fitxer quasi no importa.

## Fitxers de projecte .pln, .pla, .tpl i .bpn

Encara no es llegeixen: BimCraft ho indica quan n'obres un. Exporta IFC per al model i DWG per als plànols; consulta [Obre fitxers de projecte .pln i .pla](topic:pln-project-files).

## DWG i DXF

| Llegeix | Detalls |
|---|---|
| Espais | L'espai model i cada full (presentació), en ordre de pestanya |
| Finestres gràfiques | Les finestres gràfiques de cada full, amb la seva escala, el seu gir i les capes congelades |
| Capes | Nom, color, activada o desactivada, congelada, marca de traçat i gruix de línia |
| Objectes | Línies, polilínies, arcs, cercles, el·lipses, splines, trames i sòlids, text i text multilínia, blocs i atributs, cotes, línies de crida i multicrides, taules, punts, imatges |
| Dibuixos enllaçats | Es dibuixen on s'insereixen, quan es troben els seus fitxers |
| Imatges | Es dibuixen a partir dels fitxers d'imatge quan es troben (PNG, JPEG, GIF, BMP, WebP; no TIFF) |
| Etiquetes d'equipament | Etiquetes d'elements de cuina de restauració (atributs `KCL-ITEM`), per al quadre d'equipament |

Qualsevol altra cosa es compta sota **Encara no dibuixat**, mai no s'endevina. Els formats DWG d'AutoCAD de 2000 a 2018 són els verificats (també s'accepten fitxers R13 i R14, però cap no era al conjunt de proves; els DWG més antics no s'obren); el panell {{ui:Dibuix}} mostra el codi de format (com AC1032). Els fitxers DXF de totes les versions s'obren, també R12. Tots dos els llegeixen els lectors propis de BimCraft, en aquesta pestanya. No es desa res de tornada a DWG ni a DXF.

## En una carpeta

| Tipus | Extensions | A l'informe |
|---|---|---|
| Models | `.rvt` `.rfa` `.rte` `.rft` | Agrupats amb còpies de seguretat numerades, comprovats de salut, lectura de la fitxa, enllaços comprovats |
| IFC | `.ifc` | Llistats; s'obren en 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Llistats amb els models que els enllacen; DWG i DXF s'obren en 2D, DGN no |
| Restes | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Llistades sota **Apartats** |
| Carpetes de manteniment | `*_backup`, `*_log`, `Revit_temp`, carpetes ocultes | Llistades sota **Apartats**, no es llegeixen |

Veure [Informe de carpeta: rols, estats i enllaços](topic:folder-roles).
