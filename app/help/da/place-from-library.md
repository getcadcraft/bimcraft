---
title: Placér udstyr og møbler fra biblioteket
summary: Find et emne i biblioteket, en fil eller den åbne tegning, placér det på en etage i en IFC-model med en spøgelsesforhåndsvisning, drej det, snap det til en væg og gem.
keywords: flyt, roter, drej, træk, bibliotek, librarycraft, placér, indsæt, udstyr, møbler, blok, familie, emne, katalog, indhold, kcl, csv, gltf, obj, rfa, dwg, ifc-type
from: 3dad5d4b
---

## Hvad du skal gøre

Placér et bibliotekemne i en IFC-model: en vask, et arbejdsbord, en stol. BimCraft skriver det som et rigtigt IFC-element med en type, så hver kopi af det samme emne deler ét sæt geometri, og dets data, emnenummer og licens følger med.

## Trin

1. Åbn en IFC-model.
2. Klik på fanen {{ui:Bibliotek}} ved siden af {{ui:Egenskaber}} til højre, eller på {{ui:Bibliotek}} i værktøjslinjen over modellen.
3. Vælg en kilde:
   - **Indbyggede symboler**: generiske VVS-planssymboler, der følger med BimCraft under Apache-2.0, og som er tilgængelige offline. Kontrollér deres mål før udførelse. Til elektriske planssymboler og IFC-elektriske enheder bruges **Build › Elektrisk**.
   - **Bibliotek**: CadCraft-biblioteket på denne side. Offentlige emner kræver ingen login.
   - **Denne fil**: blokkene i en åben DWG- eller DXF-tegning. En dynamisk blok med synlighedstilstande tilbydes én gang pr. tilstand, navngivet "Vask: Dobbelt bassin", hver tegnet med kun denne tilstands objekter.
   - **Filer…**: en DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- eller CSV-fil på din computer. Den læses i denne fane; intet uploades.
   - **Andre kilder**: et andet bibliotek, der taler det samme feedformat. Tilføj dets adresse én gang; den gemmes i denne browser.
4. Søg eller vælg en kategori, og klik på et kort. Kortet viser en planforhåndsvisning, navnet, producent og model, licensen og versionen.
5. Klik på {{ui:Placér i plan}} (i planvisningen) eller {{ui:Placér i model}} (i 3D-visningen). I {{ui:Del}}, hvor plan og 3D-visning begge vises, er knappen en delt knap: dens hovedhandling er {{ui:Placér i plan}}, og pilen i dens højre ende åbner en menu med {{ui:Placér i model}}. Eller træk kortet, eller billedet i emnets detaljer, over planen eller 3D-visningen: emnet placeres, hvor du slipper. Med en pen eller en finger trykker du og holder kortet et øjeblik og trækker derefter.
6. Vælg etagen i placeringslinjen. I 3D-visningen skjules etager over den, mens du placerer, og visningen drejer til toppen; i planen viser planen allerede den etage. Vælger du {{ui:Placér i model}} fra planen alene, åbnes 3D-visningen ved siden af den.
7. Flyt markøren over modellen: en gennemsigtig boks viser, hvor emnet kommer.
8. Tryk {{key:R}} for at dreje det 90°. Tryk {{key:Tab}} (eller {{ui:Vægfang}}) for at sætte dets bagside op ad den nærmeste væg, vendt mod rummet.
9. Klik for at placere det. Eller skriv positionen i **X, Y (mm)**, for eksempel `1200, 3400`, og tryk {{key:Enter}}.

En lampe eller noget andet, der hænger fra loftet: sæt **Montering** til **Ved loftet**. Emnets top sidder så ved undersiden af loftet over stedet (eller i etagehøjden, hvor der ikke er loft). Med en loftsplan i planvisningen starter **Montering** på **Ved loftet**.

10. Svar på det ene spørgsmål: **emnenummeret** (det næste ledige nummer er udfyldt), mængden og en note. Tryk {{key:Enter}}.
11. Placér flere, eller tryk {{key:Esc}} for at stoppe.
12. Klik på {{ui:Gem som IFC}} for at downloade den redigerede kopi.

## Plan eller model

Bibliotekets placeringsknap følger den visning, du er i, og skifter, så snart du skifter visning (knapperne {{ui:Plan}}, {{ui:Del}} og {{ui:3D}}, tastaturet, åbning af en fil). Plan viser én knap, {{ui:Placér i plan}}; 3D viser én knap, {{ui:Placér i model}}; Del viser den delte knap, med {{ui:Placér i plan}} som hovedhandling og {{ui:Placér i model}} i dens menu. Begge måder bruger den samme placeringslinje og skriver det samme IFC-element: markøren arbejder i planvisningen for den ene og i 3D-visningen for den anden. Tryk {{key:Esc}} når som helst for at stoppe.

At trække et kort har ingen tast af sin egen: den delte knap eller den almindelige knap gør det samme med tastaturet.

## Flyt eller drej et placeret emne

I {{ui:Tegn}} vælger du emnet i planen. Et kvadratisk greb vises ved dets indsætningspunkt, og et rundt greb ved siden af det.

- Træk emnet, eller dets kvadratiske greb, for at flytte det. Det snapper som Væg-værktøjet (vægender og flader); {{key:Shift}} holder det vinkelret på, hvor det var.
- Træk det runde greb for at dreje det i 15°-trin. Hold {{key:Shift}} for 1°-trin.
- Tryk {{key:R}} for at dreje det 90°.
- I **Egenskaber** (også i 3D-visningen) skriver du **X**, **Y** og **Rotation (°)**, eller klikker på **Drej 90°**.

Hver flytning er ét trin i fortryd og synkroniseres i Live TeamWork. Emnet beholder sit emnenummer, sine biblioteksdata og sin højde over etagen. Ikke lavet endnu: at trække det i 3D-visningen.

## Hvad du bør se

- Emnet i modellen, valgt, med dens egenskaber til højre: en boks **Bibliotekemne** med dens licens og kildeangivelse, og sættene `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` og, for emner fra mærkede tegninger, `CadCraft_SourceAttributes`.
- "Placeret: *emne* (emne *n*)" i ændringslisten. {{key:Mod+Z}} fortryder det.
- Statuslinjen: "Placeret *emne* som emne *n*."

## Godt at vide

- Nogle emner kommer i flere størrelser eller valgmuligheder: kortet har så et **Variant**-valg, og den, du vælger, er den, der placeres. Se [Placér og byt et bibliotekemne, der har varianter](topic:library-variants).
- Et emne uden 3D-legeme (et 2D-symbol) placeres med en stand-in-boks; du angiver dens højde, når du bliver spurgt.
- Mere af det samme: vælg et placeret emne og brug {{ui:Kopiér}} og {{ui:Sæt ind}}, eller {{key:Mod+D}}. Se [Kopiér, indsæt og duplikér bibliotekemner](topic:copy-paste).
- For at starte hver placering med vægfang til, slå **Start med vægfang til** til i [BimCraft-indstillinger](topic:settings).
- Længder omregnes til modellens egne enheder, uanset hvilke de er.
- **Entourage** (træer, buske, personer, biler) er også i biblioteket: søg efter "træ", "person" eller "bil". Disse er tegnet af CadCraft (CC0) og beholder deres farver, når de placeres (en stamme brun, blade grønne, en bils ruder gennemsigtige), i BimCraft og i andre BIM-programmer. De vises i [renderede billeder](topic:render).
- I en IFC2X3-fil skrives geometrien som en facetteret solid; i IFC4 som et trianguleret flademængde. Begge åbner i andre IFC-værktøjer.
- En tegning (DWG eller DXF) kan ikke gemmes her, så emner placeres kun i IFC-modeller. Brug **Denne fil** på en tegning for at se, hvad dens blokke ville blive til.

## Emner på dit sprog

Et emne kan have sit navn, sin beskrivelse og sin type på andre sprog. Når det har dem på det sprog, BimCraft er indstillet til (Indstillinger › Generelt › Sprog), viser emnets side dem, med navnet som dets producent gav det nedenunder, og **Placér** skriver navnet på dit sprog ind i modellen, så listen {{ui:Udstyr}} viser det sådan. Emnet forbliver det samme emne: opdateringstjek og bytning går efter selve emnet, aldrig efter dets navn. Emner uden oversættelse beholder deres egne ord.

## Almindelige fejl

- **Placeringsknappen mangler.** Ingen IFC-model er åben. Åbn en først.
- **Spøgelset følger ikke markøren.** Markøren er uden for modellens område, eller etageplanet er uden for udsnittet. Klik på {{ui:Top}}.
- **{{ui:Vægfang}} siger, at der ingen vægge er.** Etagen har ingen vægge i IFC'en (nogle eksporter lægger vægge på en anden etage). Vælg den etage, eller skriv X og Y.
- **En fils emner har den forkerte størrelse.** Filen har ingen enheder, eller siger de forkerte. I {{ui:Filer…}} vælger du enhederne og læser den igen.

:::tip
Placeres det samme emne to gange, deler det én IFC-type, så en model med fyrre stole gemmer stolen én gang.
:::
