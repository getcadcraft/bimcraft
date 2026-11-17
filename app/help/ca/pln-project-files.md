---
title: Obre fitxers de projecte .pln i .pla
summary: Què fa BimCraft avui amb els fitxers .pln, .pla, .tpl i .bpn, i com exportar IFC i DWG des d'aquests fitxers perquè el model i els plànols s'obrin aquí.
keywords: pln, pla, tpl, bpn, fitxer de projecte, paquet, plantilla, còpia de seguretat, exportació ifc, exportació dwg, traductor, zones, presentacions
from: 41fb921d
---

## Què farà

Porteu a BimCraft un projecte desat com a `.pln` (projecte), `.pla` (paquet amb la seva biblioteca), `.tpl` (plantilla) o `.bpn` (còpia de seguretat). Són fitxers propis d'Archicad.

## Què s'obre avui

- **Els fitxers de projecte en si no s'obren encara.** El seu format no està publicat, i BimCraft encara no el llegeix. Quan n'obriu un, BimCraft ho indica i us remet aquí.
- **BimCraft comprova els primers bytes del fitxer.** Els projectes d'Archicad a partir de la versió 17 comencen amb la mateixa signatura curta, de manera que BimCraft pot dir amb certesa que un fitxer és un projecte d'Archicad. Un fitxer amb nom d'Archicad que no comença així probablement s'ha reanomenat, està malmès o prové d'una versió anterior. La signatura no distingeix un projecte, un paquet i una plantilla.
- **Una exportació IFC s'obre completa**: el model en 3D, les plantes, les zones com a espais, les dades dels elements, els conjunts de propietats i les classificacions, amb totes les eines de BimCraft.
- **Una exportació DWG s'obre** a la vista 2D, amb les seves capes i presentacions, i a {{ui:3D}}. Per editar-la, useu {{ui:Edita a CadCraft}}.

O porteu tot el projecte en un sol zip, amb les seves vistes, presentacions i grups de propietats: vegeu [Obre un paquet de projecte](topic:open-project-bundle).

## Exporta IFC (el model)

1. Obriu el projecte a Archicad.
2. Trieu **Fitxer > Anomena i desa**, i seleccioneu **IFC** com a tipus de fitxer.
3. Trieu un traductor IFC (el nom que Archicad dona a un conjunt de paràmetres d'exportació IFC). Un de **IFC4 Reference View** o **IFC2X3 Coordination View 2.0** és adequat per a BimCraft. IFC4X3 també s'obre.
4. Trieu què exportar: tot el projecte, o només els elements visibles a les plantes que esteu mirant.
5. Deseu, i després feu clic a {{ui:Trieu un fitxer}} a BimCraft i trieu el fitxer `.ifc`.

Comproveu aquests punts a la configuració del traductor abans d'exportar:

- **Zones**: exporteu-les, perquè les sales arribin com a espais. Feu clic a {{ui:Espais}} a BimCraft per veure-les.
- **Propietats i classificacions**: exporteu-les, perquè es mostrin a {{ui:Propietats}} i es puguin fer servir a {{ui:Cerca}}, {{ui:Color}} i {{ui:Totals de quantitats}}.
- **`.ifc` simple**, no `.ifczip` ni `.ifcxml`. BimCraft només obre `.ifc` simple.

## Exporta DWG (els plànols)

1. Obriu la planta, la secció o la presentació que voleu.
2. Trieu **Fitxer > Anomena i desa**, i seleccioneu **DWG** com a tipus de fitxer.
3. Trieu un traductor DXF-DWG, i deseu.
4. Per a un conjunt complet de fulls, deseu les presentacions des del Llibre de presentacions, o publiqueu-les com a DWG.
5. Obriu el `.dwg` a BimCraft. Els plànols enllaçats per l'exportació s'obren amb ell quan són a la mateixa carpeta; vegeu [Plànols i imatges enllaçats](topic:dwg-linked-files).

## Resolució de problemes

- **"… és un projecte d'Archicad: els seus primers bytes ho diuen."** Exporteu IFC o DWG tal com s'ha indicat i obriu aquest fitxer.
- **"… té nom de fitxer d'Archicad però no comença com un."** Comproveu d'on ve el fitxer: pot ser un altre tipus de fitxer amb un nom nou (proveu d'obrir-lo amb la seva extensió real), una còpia que no s'ha acabat, o un projecte d'una versió anterior a la 17. Obriu-lo a Archicad si podeu, i després exporteu IFC o DWG.
- **El model s'obre sense sales.** No s'han exportat les zones. Activeu-les al traductor IFC i torneu a exportar.
- **Les obertures no estan retallades.** BimCraft ho indica a **Encara no dibuixat** al panell {{ui:Fitxer}}. Torneu a exportar; si continua igual, obriu el model al programa que l'ha creat i comproveu-hi les obertures.
- **El text del DWG es veu diferent.** L'exportació pot mantenir tipus de lletra que BimCraft no té; BimCraft dibuixa el text amb un tipus de lletra sans-serif senzill.

Vegeu també [Porteu un fitxer de projecte al 3D mitjançant IFC](topic:rvt-to-ifc) i [Què llegeix BimCraft de cada format](topic:file-formats).
