---
title: Plani i punës: caktoje, shfaqe, shiheje drejt
summary: Plani i punës është plani që përdorin vijat e modelit, teksti i modelit dhe Shfaqësi i planit të punës. Caktoje në një nivel, një sipërfaqe, një plan referimi të emëruar ose një vijë; shfaqe në pamjet; hap shfaqësin për të vizatuar në një plan vertikal.
keywords: plani i punës, cakto planin e punës, shfaq planin e punës, plan referimi, shfaqësi i planit të punës, plan i emëruar, sipërfaqe, nivel, plan vertikal, plan i drejtuar, vizato mbi mur, vizatim fasade, kapje, aks, plan ref
from: 8aceee1d
---

## Çfarë do të bësh

Zgjidh planin mbi të cilin vizaton, shiko ku ndodhet dhe vizato mbi një plan që qëndron vertikalisht.

## Hapat

1. Ndiz **Vizato** dhe hap menynë **Ndërtim** (në një paraqitje me shirit: skeda Arkitektura, Plani i punës).
2. Zgjidh **Cakto planin e punës**. Pastaj bëj një nga këto:
   - zgjidh një nivel te **Vendos në**;
   - zgjidh një plan referimi të emëruar në listën pranë tij;
   - kliko një vijë në planimetri: një mur, një vijë rrjeti, një plan referimi, një vijë modeli ose një sistem perde. Plani i punës bëhet plani vertikal që kalon nëpër atë vijë;
   - kliko një sipërfaqe të sheshtë në pamjen 3D. Plani i punës shtrihet mbi atë sipërfaqe.
3. Zgjidh **Shfaq planin e punës** për ta parë: një fletë me ngjyrë të hollë me rrjet metri në pamjen 3D, një kontur ose vijë me vija të ndërprera në planimetri, dhe një kontur me vija të ndërprera në panelin e fasadës dhe prerjes. Zgjidhe përsëri për ta fshehur.
4. Zgjidh **Shfaqësi i planit të punës** për të parë drejt planit. Vijat e zeza janë modeli i prerë nga plani. Përdor mjetet e tij për të vizatuar një vijë modeli, një tekst modeli ose një plan referimi mbi plan. **Shiheni në 3D** e kthen pamjen 3D përballë planit.

## Planet e referimit

Një plan referimi është një plan i emëruar që vizatohet si vijë.

1. Zgjidh **Plan referimi**. Shkruaj një emër në rreshtin e tij nëse do (përndryshe emërtohet për ty) dhe një lartësi.
2. Kliko ku fillon dhe ku mbaron. Në planimetri kjo bën një plan vertikal. Në Shfaqësin e planit të punës bën një plan që qëndron pingul me planin e punës.
3. Shfaqet si vijë jeshile me vija të ndërprera, me emrin e tij, në planimetri; si kontur me vija të ndërprera në pamjen 3D; dhe në panelin e fasadës dhe prerjes.
4. Zgjidhe për ta riemërtuar, për të ndryshuar gjatësinë, lartësinë dhe bazën e tij, ose shtyp **Përdore si planin e punës**.

Dy plane referimi nuk mund të kenë të njëjtin emër, sepse emri është mënyra si zgjidhet një prej tyre.

## Mirë për ta ditur

- Një model pa plan pune të caktuar punon në nivelin e tij më të ulët.
- Plani i punës ruhet në skedar. Shfaqja ose fshehja e tij mbahet mend në këtë shfletues, jo në skedar.
- Nëse plani i punës ndjek një plan referimi dhe ti e zhvendos atë plan, plani i punës zhvendoset me të.
- Në një plan pune vertikal, mjetet Vijë modeli dhe Tekst modeli hapin shfaqësin, sepse një planimetri nuk mund të tregojë një lartësi.
- Mjetet e vizatimit kapin skajet e planeve të referimit të vizatuara në planimetri, po ashtu si kapin skajet e vijave të tjera në shfaqës.

## Në skedarin IFC

- Plani i punës është një grup vetish (CadCraft_WorkPlane) në projekt.
- Një plan referimi është një IfcAnnotation me tipin e objektit ReferencePlane dhe emrin e tij. Forma e tij është konturi i mbyllur i planit, kështu që një program tjetër tregon ku ndodhet. Grupi i tij CadCraft_ReferencePlane mban origjinën, drejtimin, normalen dhe shtrirjen. IFC nuk ka klasë për një plan referimi; një annotation nuk numërohet si element ndërtimi dhe nuk kufizon dhoma.
