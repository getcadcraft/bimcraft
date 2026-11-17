---
title: Fejlfinding
summary: Meddelelser BimCraft viser, hvad de skyldes, og hvad du skal gøre, ved åbning af filer, mapper, 3D-modeller, tegninger og redigeringer.
keywords: problem, fejl, virker ikke, kan ikke åbne, mislykkedes, ufuldstændig, beskadiget, langsom, nedbrud, tom, mangler, meddelelse, hjælp
from: 1e5a79fc
---

Meddelelser vises i statuslinjen nederst i scenen, med rød tekst, når noget mislykkedes. Find meddelelsen nedenfor.

## Åbning af filer

**»*name* er ikke en IFC-, RVT-, RFA-, DWG- eller DXF-fil.«**
BimCraft genkendte ikke filen. Kontrollér filendelsen, og at filen ikke er tom. PDF'er, billeder og kontorfiler åbnes ikke.

**».ifczip understøttes endnu ikke. Gem eller eksportér modellen som en almindelig .ifc-fil.«** (gælder også for `.ifcxml`)
Pak `.ifczip` ud (det er en almindelig zip-fil, der indeholder en `.ifc`), eller eksportér almindelig IFC.

**»… er en projektfil, BimCraft endnu ikke kan læse.«**
En `.pln`-, `.pla`-, `.tpl`- eller `.bpn`-fil. Eksportér IFC eller DWG fra den, og åbn den: se [Åbn .pln- og .pla-projektfiler](topic:pln-project-files).

**»Denne IFC-fil kunne ikke læses.«**
IFC-filen er beskadiget, eller det er ikke rigtig IFC. Åbn den i en teksteditor: en rigtig IFC-fil begynder med `ISO-10303-21;`. Eksportér den igen.

**»Denne fil er ufuldstændig: den er … MB, men dens egen indeks peger på data mindst … MB inde i filen. …«**
Projekt- eller familiefilen blev afbrudt, mens den blev kopieret, uploadet eller synkroniseret. En fil i en skytjeneste, der er »kun online«, ser ens ud. En fil, der åbnes alene, åbnes stadig, med denne meddelelse øverst på kortet og »Viser det, der blev gendannet; kopiér originalen igen for den fulde model.«: kortet viser kun de dele, hvis hver byte er i filen, og lister resten under **Ikke i filen**. Gør filen tilgængelig offline i din skytjeneste, eller kopiér originalen igen, og åbn den igen. I en mappe viser BimCraft i stedet den nyeste komplette sikkerhedskopi.

**»… Filens egen indholdsfortegnelse er også i den manglende del, så intet i den kan åbnes.«**
Filen blev afbrudt så tidligt, at selv dens indholdsfortegnelse mangler. Intet kan gendannes fra denne kopi. Kopiér originalen igen, og åbn den igen.

**»Denne sammensatte fil har ingen BasicFileInfo-strøm, så den er ikke en Revit-fil.«**
Filen er en sammensat fil af en anden slags (gamle kontordokumenter bruger samme beholder). Kontrollér, at du valgte den rigtige fil.

**»Stadig i gang med den sidste …«**
BimCraft arbejder stadig på den forrige fil eller mappe. Vent, til statuslinjen er færdig, og prøv igen.

**Filvælgeren nedtoner min fil.**
Vælgeren tilbyder kun `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` og `.dxf`. Træk i stedet andre filer over på siden, så fortæller BimCraft dig, om den kan læse dem.

## Åbning af mapper

**»Denne mappe har mere end 20.000 filer. Vælg en mindre mappe, fx ét projekt.«**
Du valgte en mappe, der ligger for højt oppe, fx et helt drev. Vælg én projektmappe.

**»Browseren gav ikke adgang til *name*. Vælg den igen med Åbn en mappe.«**
Du klikkede på {{ui:Genåbn}} på en seneste mappe, og browserens tilladelse blev afvist eller er udløbet. Vælg mappen igen, eller træk den ind.

**Browseren siger, at den vil »uploade« filer.**
Det er browserens egen formulering for at overdrage filer til en side. BimCraft sender dem ikke nogen steder. Træk mappen ind for at undgå spørgsmålet.

**Intet sker på en telefon eller tablet.**
Mange mobilbrowsere kan ikke vælge mapper. Åbn enkeltfiler, eller brug en computer.

## IFC-motoren indlæses første gang

**Statuslinjen bliver stående på »Starter IFC-motoren…«, eller viser en fejl som »Failed to fetch«.**
IFC-motoren kunne ikke downloades. Du er måske offline, eller en firewall eller en indholdsblokering stopper den.

:::offline
Du er offline. Hvis knappen i appens bjælke ikke siger {{ui:Offline ready}}, er IFC-motoren aldrig blevet gemt i denne browser. Opret forbindelse igen, åbn filen igen, og klik derefter på {{ui:Save for offline}}, så den virker offline næste gang. Se [Online og offline](topic:online-offline).
:::

:::online
Genindlæs siden, og prøv igen. På et arbejdsnetværk skal du bede din IT-afdeling om at tillade sidens `.wasm`-filer.
:::

## Gem til offline brug

**Knappen siger {{ui:Could not save}}.**
Nogle filer blev ikke downloadet, typisk fordi forbindelsen afbrød. Kontrollér din forbindelse, og klik på knappen igen. En tidligere offlinekopi beholdes, indtil en ny er færdig.

**Knappen siger {{ui:Offline not available}}.**
Dette vindue kan ikke gemme en offlinekopi, fx et privat vindue eller en administreret arbejdscomputer. Se [Arbejde offline](common:offline).

**Knappen bliver stående på »Gemmer *n* af *m*« et stykke tid.**
BimCrafts kopi fylder ca. 11 MB, og det meste er IFC-motoren. Hold fanen åben, indtil der står {{ui:Offline ready}}.

**BimCraft åbnede offline, men ser forældet ud.**
Din gemte kopi stammer fra et tidligere besøg. Når du er online, klik på {{ui:Offline ready}} og vælg {{ui:Save again (get the newest version)}}.

## 3D-visning

**Modellen er ikke, hvor jeg forventede, eller den er meget lille.**
Tryk på {{key:F}} eller klik på {{ui:Fit}}. Tilpas rammer altid alt i modellen, inklusive etager, du har fravalgt, og løse elementer langt fra bygningen, så bygningen kan se lille ud. Zoom ind derfra.

**Et klik vælger intet.**
Hold musen stille, mens du klikker: et lille træk kredsbevæger. Elementer på fravalgte etager kan ikke vælges. Med {{ui:Spaces}} slået til vælges de gennemsigtige zoner, før det, der er inde i dem.

**Knappen {{ui:Edges}} er nedtonet: »Edges are off for very large models«.**
Modellen har mere end 1.5 million trekanter. Kanterne er slået fra for at spare hukommelse.

**Fanen bliver langsom, hvid eller viser browserens nedbrudsside.**
Modellen er for stor til den hukommelse, browseren giver fanen. Luk andre faner, og genindlæs. Eksportér en mindre IFC: én bygning, én disciplin eller færre etager. Se [Browsere, enheder og hukommelse](topic:platforms).

**3D-visningen bliver ved at være tom.**
WebGL er måske slået fra eller blokeret. Slå hardwareacceleration (eller grafikacceleration) til i browserens indstillinger, og genstart browseren.

## Redigering af IFC

**»Use a number.«** Værdien er numerisk. Skriv et almindeligt tal uden enheder, fx `2.4`.

**»Use a whole number.«** Værdien er en tælling eller et heltal. Fjern decimalerne.

**»Only single-value properties can be edited.«** Lister, opremsninger og mængder er skrivebeskyttede.

**{{key:Mod+S}} åbner browserens vindue »Gem side«.**
Der er ingen ikke-gemte ændringer, så BimCraft overlod tasten til browseren. Luk vinduet.

**{{key:Mod+Z}} gør ingenting.**
Det virker kun, når der er ikke-gemte ændringer, og du ikke skriver i et felt. Efter en gemning er der intet tilbage at fortryde.

**Listen {{ui:Changes}} viser stadig redigeringer, efter jeg kasserede dem og åbnede en tegning eller en mappe.**
Når du svarer »Kassér dem?« med OK og derefter åbner noget andet end en IFC-model, bliver de gamle redigeringer i hukommelsen, og {{ui:Save as IFC}} ville stadig gemme dem. For virkelig at starte forfra skal du åbne den oprindelige IFC igen eller genindlæse siden.

**Min redigering ændrede flere elementer, end jeg valgte.**
Du ændrede en egenskab i et sæt markeret »(type)«. Typeegenskaber gælder for alle elementer af typen. Klik på {{ui:Undo}}. Se [Ændr en typeegenskab for hvert element af en type](topic:type-vs-instance).

## Tegninger

**»*name* kunne ikke læses. Den kan være beskadiget, eller være gemt i et format, læseren endnu ikke håndterer (…).«**
Gem tegningen fra det program, der lavede den, som en ældre DWG (2018 eller tidligere) eller som DXF, og prøv igen.

**»Denne tegning har intet at vise.«** eller **»*name* er en tom tegning: den indeholder ingen linjer, tekst eller blokke.«**
Tegningen er tom, eller den indeholder kun ting, BimCraft endnu ikke tegner (se **Ikke tegnet endnu** til højre).

**»Denne tegning er meget stor; kun en del vises.«**
BimCraft stoppede med at tegne for at forblive responsiv. Slå de lag fra, du ikke har brug for, eller åbn de ark, du har brug for, fra en mindre tegning.

**Dele af et ark mangler.**
Refererede tegninger mangler måske: kig under **Eksterne referencer** til højre. Se [Find eksterne referencer og billeder](topic:dwg-linked-files). Lag kan også være slukket: klik på {{ui:All on}}.

**Et billede vises som en tom ramme.**
Dets fil blev ikke fundet, eller det er en TIFF (»TIFF kan ikke vises i en browser«). Tilføj en PNG- eller JPEG-kopi med {{ui:Add pictures…}}.

**Rulning på min trackpad zoomer i stedet for at flytte tegningen.**
Sådan virker tegninger i BimCraft. Klik og træk for at panorere.

## Stadig fast

Læs [Hvad der ikke er bygget endnu](topic:not-built-yet): det, du leder efter, findes måske ikke i denne version.
