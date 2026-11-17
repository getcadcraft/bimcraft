---
title: Themelet nën muret
summary: Vendos një pllakë mbi tokë, mure themeli me një pllakë, një hapësirë zvarre ose një bodrum nën një ndërtesë me një klikim; bazamentet dimensionohen nga muret dhe numri i kateve, dhe themeli ndjek kur lëvizin muret.
keywords: themel, bazament, pllakë mbi tokë, skaj i trashë, pllakë monolitike, mur themeli, hapësirë zvarre, zvarre, bodrum, mur bodrumi, ngricë, beton, gjerësia e bazamentit
from: c0e20172
---

## Çfarë do të bësh

Jepi ndërtesës një themel që përshtatet me muret e saj. BimCraft ndjek jashtë faqes së mureve, dimensionon bazamentet nga lloji i murit dhe sa kate mbahen mbi ta, dhe e ribën themelin sa herë ndryshojnë muret.

## Vendos një themel

1. Te niveli ku qëndrojnë muret mbi të (zakonisht i pari), hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Themel}}.
2. Zgjidh llojin:
   - **Pllakë mbi tokë**: një pllakë betoni 4" me majën si dysheme, me një skaj të trashë nën muret.
   - **Mure themeli dhe pllakë**: mure themeli deri te dyshemeja mbi bazamente, me një pllakë brenda tyre.
   - **Hapësirë zvarre**: mure themeli që ndalojnë nën strukturën e dyshemesë, mbi bazamente, pa pllakë.
   - **Bodrum**: mure themeli me lartësi të plotë mbi bazamente, me një pllakë bodrumi, nën strukturën e dyshemesë.
3. Shëno brenda ndërtesës: bazamentet shfaqen me vija të ndërprera me madhësinë e tyre. Kliko.

Kliko një ndërtesë që ka tashmë një themel e zgjedh atë, që ta ndryshosh në vend që të shtosh një të dytë.

## Ndryshoje

Zgjidh themelin (kliko brenda ndërtesës me {{ui:Themel}}, ose kliko ndonjë pjesë të tij në pamjen 3D ose në pemën e modelit) dhe ndryshoje te **Vetitë**: llojin, gjerësinë dhe thellësinë e bazamentit, sa poshtë është fundi i bazamentit, trashësinë e murit, sa poshtë dyshemesë ndalojnë muret, lartësinë e bodrumit dhe trashësinë e pllakës. Çdo ndryshim është një hap Zhbërje.

Madhësitë e shënuara **auto** vijnë nga muret: bazamente 12", 15" ose 23" të gjera për një, dy ose tre kate mbi një pllakë ose mure themeli; 18", 22" ose 27" mbi një hapësirë zvarre ose bodrum; dhe 4" më të gjera nën muret prej tullash ose betoni. Shkruaj një madhësi për ta vendosur vetë; shkruaj `0` për t'u kthyer te auto.

:::warning
Madhësitë automatike janë vlera të etiketuara standarde për shtëpi tipike me skelet të lehtë, jo llogari inxhinierike. Një projektues ose inxhinier kontrollon bazamentet, thellësitë dhe muret për tokën, thellësinë e ngricës dhe ngarkesat.
:::

## Çfarë ruhet

Një themel ruhet si një grup elementësh IFC ("Foundation") i përbërë nga një bazament (ose skaji i trashë i një pllake), një mur themeli dhe një pllakë sipas nevojës së llojit të tij, të gjitha prej betoni, çdo një me sasitë e veta: gjatësi, gjerësi, lartësi, sipërfaqe dhe vëllime, gati për llogaritje sasish.

## Gjëra të dobishme

- Lëvizja, shtimi ose fshirja e mureve e ribën themelin nën to; vizato mure në nivelin sipër dhe bazamentet poshtë zgjerohen për katin shtesë.
- {{key:Delete}} heq një themel të zgjedhur me të gjitha pjesët e tij.
- Me tokën e vendit në model (shih [Toka e vendit, plataforma e ndërtesës dhe shtruarja](topic:terrain)), muret e themelit dhe bazamentet e hapësirës së zvarrit zbresin me të në hapa 8".
- Bazamentet nën muret e brendshme nuk bëhen ende.
