---
title: Eksporto modelin si Collada ose për Google Earth
summary: Shkruaj modelet IFC të hapura si skedar Collada (.dae) për Blender dhe programe të tjera 3D, ose si paketë Google Earth (.kmz) të vendosur aty ku është modeli në hartë.
keywords: collada, dae, kmz, kml, google earth, blender, eksporto, gjeolokacion, georeferencë, gjerësi gjeografike, gjatësi gjeografike, vendndodhje, programe 3d
from: 81cfec09
---

{{ui:Collada}} në shiritin e veglave (ose {{ui:Export Collada (.dae, .kmz)…}} te menyja Skedar e stileve me menu dhe shirit) shkruan atë që është hapur si Collada 1.4.1: çdo model që shfaqet, modelet e federuara aty ku i keni vendosur.

## Eksporto

1. Zgjidhni {{ui:Collada}}.
2. Zgjidhni formatin:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Ofrohet vetëm kur modeli ka një vendndodhje.
3. Zgjidhni opsionet, pastaj {{ui:Export}}. Skedari shkarkohet, dhe shiriti i statusit thotë sa elementë u futën.

| Opsioni | Çfarë bën |
|---|---|
| {{ui:Write the location into the file}} | Shton gjerësinë dhe gjatësinë gjeografike, lartësinë dhe drejtimin e origjinës së skedarit në .dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, ose {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Hapësirat futen gjithashtu (lihen jashtë si parazgjedhje) |
| {{ui:Include hidden elements}} | Elementët që keni fshehur shkruhen gjithashtu (si parazgjedhje shkruhet vetëm ajo që shihni) |

## Çfarë është në skedar

| Në model | Në skedarin Collada |
|---|---|
| Ndërtesa, katet | Nyje të futura, katet sipas lartësisë; elementët pa kat nën "Unplaced" |
| Çdo element | Një nyje me rrjetën e vet, e emërtuar si në model (emri i tij, ose përndryshe klasa dhe etiketa) |
| Klasa, GlobalId, lloji i paracaktuar | Në të dhënat shtesë të nyjes (profil IFC), me emrin e saktë (profil ModelCraft) |
| Ngjyrat | Materiale, me transparencë |
| Njësitë dhe boshtet | Metra, Z lart. Niveli 0 i modelit përpara është në lartësi 0 |

Modeli qëndron afër origjinës përgjatë tokës, kështu që programet që punojnë me saktësi të thjeshtë e shfaqin pa dridhje. ModelCraft i shkruan skedarët e tij Collada me të njëjtin shkrues, dhe i hap këta skedarë me emrat e elementeve.

## Nga vjen vendndodhja

Modeli përpara jep vendndodhjen, në të njëjtën mënyrë si {{ui:Measure}} llogarit gjerësinë dhe gjatësinë gjeografike të një pike:

- Një konvertim hartë (IFC4 IfcMapConversion, ose grupet e vetive IFC2X3) përmes sistemit koordinativ të modelit. Një sistem që keni zgjedhur për modelin fiton mbi atë që emërton skedari.
- Përndryshe, gjerësia dhe gjatësia gjeografike e vendit (të përafërta: mjaftojnë për një vend).

Drejtimi matet, nuk supozohet: merr parasysh rrotullimin e hartës, veriun e vërtetë dhe konvergjencën e hartës. Për t'i dhënë një modeli vendndodhje, përdorni {{ui:Map origin…}} te {{ui:Measure}}.

## Në programe të tjera

- **Google Earth** lexon .kmz: modeli shfaqet në vendndodhje, i kthyer nga veriu. Një .dae i thjeshtë nuk ka vend nga e cila Google Earth lexon një vendndodhje; përdorni .kmz.
- **Blender** (4.x dhe më të vjetër): File, Import, Collada (.dae). Çdo element hyn si objekt i vet me materialin e tij. Vendndodhja ruhet në të dhënat shtesë të skedarit, të cilat Blender nuk i lexon. Blender 5.0 e hoqi importuesin e tij të integruar të Collada; atje përdorni {{ui:USD}} ose eksportin glTF, ose hapni .dae në Blender 4.5 dhe ruani një .blend.

Testet tona kontrollojnë çdo skedar sipas skemës Collada 1.4.1 dhe e lexojnë sërish me një lexues të pavarur Collada. Nuk e kanë hapur në Blender ose Google Earth.
