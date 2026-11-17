---
title: Nga një skedar projekti te BimCraft përmes IFC
summary: Cilësimet e eksportit IFC që hapen më mirë në BimCraft (versioni, grupet e vetive, sasitë bazë, dhomat, modelet e lidhura, koordinatat), si ta hapësh rezultatin dhe çfarë mban eksporti.
keywords: eksport, eksport ifc, rvt në ifc, konverto, 3d, gjeometri, ifc2x3, ifc4, pamje koordinimi, pamje reference, pamje transferimi projekti, grupe vetish, sasi bazë, dhoma, hapësira, skedarë të lidhur, koordinata të përbashkëta, pika e topografisë, pika bazë e projektit, cilësimet
from: 3efd5fc9
---

## Çfarë do të bësh

Kthe një skedar projekti në një skedar IFC që mund ta rrotullosh, inspektosh, kontrollosh dhe redaktosh në BimCraft. BimCraft nuk e lexon ende modelin 3D brenda një skedari `.rvt`, kështu që eksporti bëhet në programin që e krijoi skedarin (Revit); BimCraft hap rezultatin.

## Hapat

1. Hap projektin në programin që e krijoi. Kartela e BimCraft emëron versionin me të cilin u ruajt.
2. Hap një pamje 3D që tregon atë që do të eksportosh.
3. Zgjidh **Skedari > Eksporto > IFC**.
4. Te dialogu i eksportit zgjidh një konfigurim (ose **Ndrysho konfigurimin…**) me cilësimet më poshtë.
5. Zgjidh një dosje dhe emër skedari, dhe eksporto.
6. Në BimCraft, kliko {{ui:Zgjidh një skedar}} dhe zgjidh skedarin e ri `.ifc`. Modelet e lidhura të eksportuara si skedarë të veçantë hapen në të njëjtën skenë me {{ui:Shto një model}}.

## Cilësimet që hapen më mirë këtu

| Cilësimi në eksportues | Zgjidh | Pse |
|---|---|---|
| Versioni IFC | **IFC4 Reference View** për shikim, kontroll dhe llogaritje sasish; **IFC2X3 Coordination View 2.0** kur të tjerët kanë nevojë për IFC2X3 | Të dyja hapen plotësisht. **IFC4 Design Transfer View** hapet gjithashtu, me forma më të sakta, por skedari është më i madh dhe më i ngadaltë. |
| Lloji i skedarit | **IFC** (i thjeshtë) | BimCraft nuk hap `.ifczip` ose `.ifcxml`. |
| Faza / elementet e dukshme | Fazën që do, dhe **Eksporto vetëm elementet e dukshme në pamje** kur e përgatit pamjen 3D për këtë | Lë jashtë atë që fshehe qëllimisht. |
| Grupet e vetive | **Eksporto grupet e vetive të Revit** dhe **Eksporto grupet e zakonshme IFC** | Bëhen grupet e vetive që BimCraft shfaq te {{ui:Vetitë}}, dhe që përdorin {{ui:Kërko}}, {{ui:Ngjyra}} dhe {{ui:Kontrollet e modelit}}. |
| Sasitë bazë | **Eksporto sasitë bazë** | {{ui:Totalet e sasive}} dhe tabelat i përdorin (gjatësi, sipërfaqe, vëllime) në vend që të hamendësojnë. |
| Dhomat dhe sipërfaqet | **Eksporto dhomat në pamjet 3D** (ose opsionin Dhomat / Hapësirat) | Dhomat vijnë si hapësira: kliko {{ui:Hapësira}} për t'i parë. |
| Skedarët e lidhur | **Eksporto skedarët e lidhur si IFC të veçantë** | Çdo lidhje bëhet skedar i vet; hapi bashkë me {{ui:Shto një model}} dhe përputhen. |
| Baza e koordinatave | **Koordinata të përbashkëta** (ose pika e topografisë) | Skedari mban atëherë vendin e vet në hartë (IfcMapConversion), kështu që Matje › Vendndodhja, shtresat e hartës në tokë dhe retë e pikave të vendosura sipas koordinatave të hartës funksionojnë. Pika bazë e projektit e mban modelin afër origjinës, por pa vendin e vet në hartë. |
| Ndaj muret dhe kolonat sipas nivelit | Aktiv, kur llogarit sasitë për kat | Pjesa e çdo kati bëhet element i vet. |

## Çfarë duhet të shohësh

Modelin në 3D, me katet e marra nga nivelet e projektit dhe informacionin e projektit në panelin {{ui:Skedari}}. **Eksportuar nga** emëron eksportuesin.

## Çfarë mban eksporti dhe çfarë jo

- **Mbahet**: gjeometria, katet, llojet e elementeve, emrat, tipet, shumicën e parametrave (si grupe vetish), sasitë bazë kur kërkohen, dhomat si hapësira, dhe vendi në hartë me koordinatat e përbashkëta.
- **Nuk mbahet**: pamjet, fletët, anotimet, familjet si familje të redaktueshme, worksets dhe opsionet e dizajnit. Një skedar IFC është një fotografi e elementeve të modelit, jo i gjithë projekti. Për fletët, eksporto DWG dhe hape në pamjen 2D.

## Gabimet më të shpeshta

- **Parametra që mungojnë në BimCraft.** Aktivizo opsionet e grupeve të vetive më sipër dhe eksporto përsëri.
- **Dhoma që mungojnë.** Aktivizo opsionin e dhomave, pastaj kliko {{ui:Hapësira}}.
- **Ruajtja si `.ifczip`.** Zgjidh IFC të thjeshtë, ose çpaketo `.ifczip`.
- **Pa vend në hartë.** Eksporto me koordinata të përbashkëta; kontrollo që pika e topografisë së projektit të jetë vendosur.
- **Pritja që ndryshimet të rikthehen.** Ndryshimet që ruan në BimCraft shkojnë në një skedar të ri IFC, jo në skedarin e projektit.
