---
title: Byggegrunden, bygningen på den og dens niveauer
summary: Tegn byggegrundens kontur, placér og drej bygningen på grunden, tilføj niveauer i givne højder eller del bygningens højde, og tegn på det niveau, du vælger.
keywords: byggegrund, situationsplan, byggelinje, tilbagerykning, servitut, færdselsret, ejendomsgrænse, grund, parcel, skel, afgrænsning, placering af bygning, drej bygning, placér bygning, niveauer, etager, gulve, tilføj niveauer, del højde, gulv til gulv, IfcSite, IfcBuilding, IfcBuildingStorey, rumlig struktur
from: 48d10c1e
---

## Hvad du skal gøre

Opsæt de dele af en IFC-model, der bærer alt andet: byggegrunden, bygningen på den og bygningens niveauer.

En model er organiseret som en **byggegrund**, der holder en **bygning**, der holder sine **niveauer** (etager); vægge, gulve og alt andet hører til et niveau. {{ui:Fil}} › {{ui:Ny bygning}} opsætter alle tre. En model fra et andet program, der har en bygning men ingen byggegrund, får en byggegrund første gang, du tegner en: bygningen placeres på den, hvor den allerede var.

## Tegn byggegrunden

1. Slå {{ui:Tegn}} til, og vælg {{ui:Byg}} › {{ui:Byggegrund}}.
2. Klik på byggegrundens hjørner (værktøjet fanger, som vægværktøjet gør). Klik på det første hjørne igen, dobbeltklik eller tryk {{key:Enter}} for at afslutte. {{key:Backspace}} fjerner et hjørne.
3. Rækken viser byggegrundens areal. Tegn den igen for at ændre den.

Hvert niveaus plan viser byggegrundens kontur som en skelslinje.

## Placér bygningen på byggegrunden

Med {{ui:Byggegrund}} slået til skriver du bygningens **X** og **Y** på byggegrunden og dens **Drej** i grader, eller klikker på {{ui:Placér bygningen med et klik}} og klikker, hvor bygningens udgangspunkt skal være. Alt i bygningen (niveauer, vægge, akser, alt du har tegnet) flytter med den; byggegrunden og dens kontur bliver stående. Planerne viser fortsat hvert niveau retvinklet til bygningen.

## Byggelinjer og servitutter

Byggelinjer og servitutter (rettigheder over grunden, færdselsret og lignende) tegnes på byggegrunden som begrænsninger. De **advarer, de blokerer aldrig**: en væg over en af dem tegnes, som du bad om, og en advarsel med navnet på væggen og linjen eller servitutten vises i {{ui:Problemer}}. Flytter du væggen tilbage, forsvinder advarslen. En advarsel kan accepteres med en begrundelse (fx en lempelse, som myndigheden har givet).

- **Byggelinje fra tilbagerykninger.** {{ui:Byg}} › {{ui:Byggelinje}}, derefter {{ui:Tilbagerykninger}}: skriv, hvor langt linjen står ind fra hver grænse af byggegrunden. Grænserne er nummereret i planen, mens værktøjet er slået til. Linjen beregnes ud fra disse afstande og følger byggegrundens kontur, hvis du tegner den igen med lige så mange grænser. Afstandene er dine, hentet fra din tingbogsattest eller lokalplan; BimCraft udfylder ingen.
- **En tegnet byggelinje.** Med {{ui:Byggelinje}} slået til klikker du på dens punkter og afslutter med dobbeltklik eller {{key:Enter}}. Afslut på det første punkt for en lukket linje: arealet inde i den er, hvor man må bygge, og en væg med en del uden for den advares. En åben linje advarer kun om en væg, der krydser den.
- **En servitut.** {{ui:Byg}} › {{ui:Servitut}}: vælg dens type, skriv dens navn, dens tinglyste reference og dens bredde, klik derefter på dens midterlinje og afslut (et bånd), eller luk den på dens første punkt (et areal). En væg med en del på den advares om, på hvert niveau.
- En flade, der ligger præcis på en linje, er berøring, ikke krydsning (tolerancen er 1 mm).
- Den aktuelle massevariant i hvert variantsæt tjekkes på samme måde som væggene: en masse uden for skellet, over en byggelinje eller på en servitut får en advarsel. Se [Massevarianter side om side](topic:massing-options).
- Vælg en med {{ui:Vælg}} for at ændre dens navn, reference, type eller bredde, flytte den eller slette den.

De tegnes på hvert niveaus plan, på ark og i plan-PDF'en: byggelinjer stiplet, servitutter prikket, hver med sin etiket. I IFC-filen er hver en annotation (IfcAnnotation, type BuildingLine eller Servitude) på byggegrunden, med sin linje som en almindelig kurve, som andre programmer kan læse. Kontrollen bruger hver væggs faktiske kontur i planen, med dens samlinger som tegnet; en buet væg kontrolleres ud fra sin egen tykkelse om sin midterlinje.

## Tilføj niveauer

I panelet {{ui:Niveauer}} tilføjer {{ui:Tilføj et niveau øverst}} et, og {{ui:Tilføj et niveau under}} tilføjer et under det laveste (en kælder, på en negativ kote). {{ui:Tilføj niveauer…}} tilføjer flere på én gang:

- **I disse højder**: skriv højder over det laveste niveau, adskilt af kommaer (fx `12', 24', 36'`). Højder, der allerede har et niveau, springes over.
- **Del bygningens højde**: skriv bygningens højde og antallet af niveauer. De niveauer, du har, flytter til deres nye højder fra det laveste og op, manglende tilføjes, og eventuelle over dem bliver, hvor de er.

Vægge, der går op til niveauet over, følger med, og det samme gør søjler og rampe.

{{ui:Kopiér dette niveau…}} (samme panel) kopierer det, der er tegnet på det niveau, du kigger på, til et andet niveau eller til et nyt niveau øverst, så en plantegning kan gå op gennem bygningen i ét trin. Se [Tegn vægge](topic:draw-walls).

## Tegn på et niveau

Hvert {{ui:Tegn}}-værktøj virker på det niveau, der er valgt i planens niveauliste (eller valgt i panelet {{ui:Niveauer}}): det, du tegner, hører til dette niveau.

## Hvad du bør se

- Hver af disse ændringer er ét trin: {{key:Mod+Z}} fortryder den.
- I IFC-filen: byggegrunden (IfcSite) med sin kontur og sit areal, bygningen (IfcBuilding) placeret på den, og niveauerne (IfcBuildingStorey) i bygningen.

Se også [Koordinater i BimCraft](topic:coordinates) for projektets udgangspunkt og opmålingspunktet.
