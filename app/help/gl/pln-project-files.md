---
title: Abrir ficheiros de proxecto .pln e .pla
summary: Que fai BimCraft hoxe cos ficheiros .pln, .pla, .tpl e .bpn e como exportar IFC e DWG desde eles para que o modelo e os debuxos se abran aquí.
keywords: pln, pla, tpl, bpn, ficheiro de proxecto, arquivo, plantilla, copia de seguranza, exportación IFC, exportación DWG, tradutor, zonas, layouts
from: 41fb921d
---

## Que farás

Traia para BimCraft un proxecto gardado como `.pln` (proxecto), `.pla` (arquivo coa súa biblioteca), `.tpl` (plantilla) ou `.bpn` (copia de seguranza). Son ficheiros propios de Archicad.

## Que se abre hoxe

- **Os propios ficheiros de proxecto aínda non se abren.** O seu formato non está publicado e BimCraft aínda non o le. Ao abrir un, BimCraft indícao e remite a esta páxina.
- **BimCraft comproba os primeiros bytes do ficheiro.** Os proxectos de Archicad desde a versión 17 comezan coa mesma sinatura curta, así que BimCraft pode indicar con certeza que un ficheiro é un proxecto de Archicad. Un ficheiro con nome de Archicad que non comece así probablemente foi renomeado, está danado ou procede dunha versión anterior. A sinatura non distingue un proxecto, un arquivo e unha plantilla.
- **Unha exportación IFC ábrese por completo**: o modelo en 3D, os pisos, as zonas como espazos, os datos dos elementos, os conxuntos de propiedades e as clasificacións, con todas as ferramentas de BimCraft.
- **Unha exportación DWG ábrese** na vista 2D, coas súas capas e layouts, e en {{ui:3D}}. Para editala, use {{ui:Editar en CadCraft}}.

Ou traia o proxecto completo como un zip, coas súas vistas, layouts e grupos de propiedades: consulte [Abrir un paquete de proxecto](topic:open-project-bundle).

## Exportar IFC (o modelo)

1. Abra o proxecto en Archicad.
2. Escolla **Ficheiro > Gardar como** e seleccione **IFC** como tipo de ficheiro.
3. Escolla un tradutor IFC (o nome que Archicad dá a un conxunto de axustes de exportación IFC). Un para **IFC4 Reference View** ou **IFC2X3 Coordination View 2.0** encaixa con BimCraft. IFC4X3 tamén se abre.
4. Escolla o que exportar: o proxecto completo, ou só os elementos visibles nos pisos que está a ver.
5. Garde, despois prema en {{ui:Choose a file}} en BimCraft e escolla o ficheiro `.ifc`.

Comprobe estes axustes do tradutor antes de exportar:

- **Zonas**: expórteas, para que as salas cheguen como espazos. Prema en {{ui:Spaces}} en BimCraft para velas.
- **Propiedades e clasificacións**: expórteas, para que aparezan en {{ui:Properties}} e se poidan usar en {{ui:Find}}, {{ui:Color}} e {{ui:Quantity totals}}.
- **`.ifc` simple**, non `.ifczip` nin `.ifcxml`. BimCraft abre só `.ifc` simple.

## Exportar DWG (os debuxos)

1. Abra a planta, sección ou layout que quere.
2. Escolla **Ficheiro > Gardar como** e seleccione **DWG** como tipo de ficheiro.
3. Escolla un tradutor DXF-DWG e garde.
4. Para un conxunto completo de follas, garde os layouts desde o Libro de layouts, ou publíqueos como DWG.
5. Abra o `.dwg` en BimCraft. Os debuxos ligados pola exportación ábrense con el cando están na mesma cartafol; consulte [Debuxos e imaxes ligados](topic:dwg-linked-files).

## Solución de problemas

- **"… é un proxecto de Archicad: os seus primeiros bytes así o indican."** Exporte IFC ou DWG como se indica enriba e abra ese ficheiro.
- **"… ten nome de ficheiro de Archicad pero non comeza como un."** Comprobe de onde procede o ficheiro: pode ser outro tipo de ficheiro con nome novo (probe a abrilo coa súa extensión real), unha copia que non rematou ou un proxecto dunha versión anterior á 17. Ábrao en Archicad se pode, e despois exporte IFC ou DWG.
- **O modelo ábrese sen salas.** Non se exportaron as zonas. Actíveas no tradutor IFC e exporte de novo.
- **As aberturas non están cortadas.** BimCraft indícao baixo **Aínda non debuxado** no panel {{ui:File}}. Exporte de novo; se persiste, abra o modelo no programa que o fixo e comprobe as aberturas alí.
- **O texto do DWG ten outro aspecto.** A exportación pode manter tipos de letra que BimCraft non ten; BimCraft debuxa o texto cunha fonte sans-serif simple.

Ver tamén [Obter un ficheiro de proxecto en 3D mediante IFC](topic:rvt-to-ifc) e [O que lee BimCraft de cada formato](topic:file-formats).
