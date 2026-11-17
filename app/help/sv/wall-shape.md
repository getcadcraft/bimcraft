---
title: Forma en vägg: fäst, profil, lutning och öppningar
summary: Fäst väggens överkant mot ett tak, en bjälklagsplatta eller ett undertak, ge den en egen konturprofil, luta den, eller skär en öppning utan dörr eller fönster, i Egenskaper, i en fasad eller sektion, på väggens egna frontvy eller i 3D; varje ändring är ett ångra-steg.
keywords: fäst, fäst överkant, fäst underkant, tak, bjälklag, undertak, gavel, profil, redigera profil, konturlinje, trappstegad, parapet, lutning, luta, lutande, lutning åt sidan, avsmalnande, dubbel lutning, öppning, väggöppning, hål, genomgång, ingen dörr, grepp, fasad, sektion, 3D, frontvy, krökt vägg, kopia
from: f558b269
---

## Vad du gör

Ändra en väggs form ovanför och under dess plan: dess överkant kan följa ett tak, en bjälklagsplatta eller ett undertak, den kan ha en egen kontur sedd från sidan, den kan luta, och den kan ha öppningar utan dörr eller fönster i sig. Väggens plan, dess hörn och dess placeringslinje förblir som de var.

## Var du kan göra det

- **Egenskaper**: med {{ui:Rita}} på och {{ui:Markera}} på klickar du på en vägg du ritat. **Egenskaper** visar väggens rader, sedan **Form**, där allt skrivs in.
- **En fasad eller en sektion**: projektwebbläsarens penna ({{ui:Redigera i den här vyn}}) öppnar vyn; välj en vägg där och dra i dess grepp. Se ”I en fasad eller en sektion” nedan.
- **Väggens egen frontvy**: {{ui:Väggar}} › {{ui:Redigera profil}}, klicka sedan på väggen i planen. Det fungerar för alla väggar, även en som ingen fasad ser rakt på, och för en krökt vägg (visas utvikt).
- **Planen och 3D-vyn**: de fyra kommandona under {{ui:Väggar}} (gruppen Redigera): {{ui:Fäst överkant / underkant}}, {{ui:Redigera profil}}, {{ui:Lutning}} och {{ui:Väggöppning}}. Se ”I planen och i 3D” nedan.

Oavsett vilket sätt du väljer är det samma ändring: ett steg i **Ändringar**, och {{ui:Ångra}} tar tillbaka det.

Raka och krökta väggar tar båda emot varje formverktyg. På en krökt vägg mäts avstånd längs dess båge.

## Fäst överkanten eller underkanten

- **{{ui:Fäst överkant}}**: välj ett tak, ett golv eller ett undertak. Väggens överkant följer undersidan av det du valde, rakt ovanför varje hörn av väggen. Under ett sluttande tak får en vägg en lutande överkant, och där taket byter plan (en åslinje eller en valm) böjs väggens överkant med det.
- **{{ui:Fäst underkant}}**: välj ett golv eller ett undertak. Väggens underkant följer dess överyta.
- Där det inte finns något ovanför (eller nedanför) en del av väggen, behåller den delen väggens egen höjd.
- Kopplingen består: ändra takets lutning eller överhäng, eller undertakets höjd, så följer de fästa väggarna med i samma steg.
- Välj **Egen höjd** för att släppa kopplingen.

## Redigera profilen

{{ui:Redigera profil…}} öppnar väggens kontur sedd från sidan:

- **Överkantslinje**: rader med **Längs** (avståndet från väggens start) och **Höjd** (över väggens underkant). Tre rader 0 / 3000, 2500 / 4500, 5000 / 3000 gör en gavel på en 5 m vägg.
- **Underkantslinje**: lämna den tom för en plan underkant, eller ange rader för en vägg på en trappstegad grund.
- {{ui:Lägg till en punkt}} lägger till en rad, **Ta bort** tar bort en. {{ui:Använd den här profilen}} tillämpar den; {{ui:Tillbaka till rak}} tar bort den.

Varje linje går längs väggen en gång, från start till slut; en linje som går tillbaka på sig själv, eller en överkant som går ner till underkanten, avvisas. Har väggen även en fäst överkant används den lägre av de två.

## Luta väggen

**Lutning**: **Lodrät**, **Lutande** (båda ytorna lutar åt samma håll, tjockleken består) eller **Dubbel lutning** (varje yta sin egen vinkel: en vägg som blir tunnare eller tjockare när den stiger). Skriv grader från lodrätt; en plusvinkel lutar åt väggens vänstra sida, sett från dess start. Väggen står kvar där den ritats vid sin underkant; väggarna som är kopplade till den lutar inte med den.

## Öppningar utan dörr eller fönster

{{ui:Lägg till öppning}} skär ett hål 900 brett i mitten av väggen. Dess rad i **Öppningar** anger **Från start**, **Bredd**, **Underkant** (från nivån) och **Höjd**; **Ta bort** tar bort den. Öppningen går genom hela väggen, väggens mängder utelämnar den, och planen visar ett gap där den når planens snitthöjd. När väggens start glider längs sin linje behåller öppningen sin plats; en ändring som skulle lämna den utanför väggen avvisas.

## I en fasad eller en sektion

Öppna vyn med projektwebbläsarens penna. Med {{ui:Markera och flytta}} på:

- **Profil**: klicka på en vägg som vetter mot vyn. Dess överkant- och underkantslinjer blir blå, med ett kvadratiskt grepp på varje punkt och en prick mitt i varje del.
  - Dra i en kvadrat för att flytta den punkten (de två ändpunkterna rör sig bara upp och ned).
  - Dra i en prick för att flytta hela delen upp eller ned.
  - Dubbelklicka på en linje (eller högerklicka på den) för att lägga till en punkt där; {{ui:Lägg till en punkt (överkant)}} och {{ui:Lägg till en punkt (underkant)}} lägger till en i mitten av den längsta delen.
  - Klicka på en kvadrat och tryck på Delete (eller högerklicka på den) för att ta bort punkten. {{ui:Tillbaka till rak}} tar bort profilen.
  - När en punkt är vald skriver du dess **Längs** och **Höjd** i raden under verktygsfältet.
- **Fäst**: raden har listorna **Fäst överkant** och **Fäst underkant** för den valda väggen. Eller använd verktyget {{ui:Fäst överkant}} eller {{ui:Fäst underkant}}: klicka på väggen eller väggarna, sedan på taket, golvet eller undertaket, som visas som streckade rutor. Alla valda väggar fästs i ett steg.
- **Väggöppningar**: med verktyget {{ui:Väggöppning}} drar du en rektangel på en väggs yta. Tillbaka i {{ui:Markera och flytta}} drar du en öppning för att flytta den, drar i ett av dess åtta grepp för att ändra storlek, skriver **Från start**, **Bredd**, **Underkant** och **Höjd** i raden, eller trycker på Delete för att ta bort den.
- **Lutning**: en vägg som vyn ser längs (sedd rakt framifrån, som ett snitt genom den eller i en fasad från dess ände) kan också klickas. Dra det runda handtaget överst för att luta den, eller välj **Lodrät**, **Lutande** eller **Dubbel lutning** i raden och skriv vinklarna.

Storlekar snäpper till 10 mm; skriv ett värde för allt finare. En krökt vägg kan redigeras i en fasad medan den går åt ett håll över vyn; dess egen frontvy fungerar alltid.

## I planen och i 3D

Öppna {{ui:Väggar}} i gruppen Redigera:

- {{ui:Fäst överkant / underkant}}: välj **Fäst överkant** eller **Fäst underkant** i verktygets rad. Klicka på väggen eller väggarna (i planen eller i 3D-vyn), och sedan på det de fästs i: i 3D klickar du på taket, golvet eller undertaket själv; i planen klickar du på en punkt under det (när fler än ett finns där frågar en lista vilket).
- {{ui:Redigera profil}}: i planen klickar du på en vägg för att öppna dess frontvy. I 3D klickar du på en vägg: dess profilpunkter får grepp; dra i en av dem i väggens plan.
- {{ui:Lutning}}: klicka på en vägg (plan eller 3D) och skriv hur mycket den lutar.
- {{ui:Väggöppning}}: i planen klickar du på en vägg där öppningen ska vara; dess **Bredd**, **Höjd** och **Underkant** finns i verktygets rad. I 3D klickar du på ett hörn på väggens yta, sedan på motsatt hörn. Med en vägg vald i 3D har dess öppningar grepp: hörnen ändrar storlek, mitten flyttar.

3D-greppen är 3D-vyns egna grepp, så de väntar medan sektionsrutan visar sina grepp.

## På planen

En lutande vägg ritas där planen skär den (1200 över nivån om inte vyn säger något annat): dess kontur förskjuts så mycket som den lutar på den höjden, och en dubbel lutning är bredare eller smalare där. Dess kontur vid golvet ritas med de tunna linjerna för det som ligger under snittet. Väggens hörn, grepp och mått står kvar vid dess underkant.

## Kopior

{{ui:Kopiera den här nivån…}} och Flytta med **Kopiera** tar med väggens profil, lutning och väggöppningar. En vägg som är fäst vid ett golv eller undertak fästs vid det kopierade golvet eller undertaket på den nya nivån; en fäst till ett tak kopieras inte med en nivå (tak kopieras inte). En kopia på samma nivå förblir fäst vid samma tak, golv eller undertak.

## I filen

En formad vägg skrivs som en facetterad solid (IfcFacetedBrep), som andra program läser som den ritats; dess inställningar finns på väggen (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). En öppning är ett IfcOpeningElement i väggen utan något som fyller den.

## Finns inte ännu

- En profil med överhäng eller hål i konturen (använd öppningar för hål).
- I 3D: att lägga till eller ta bort profilpunkter, och lutningen med ett handtag (använd väggens frontvy, en fasad eller en sektion, eller skriv in dem).
- {{ui:Förskjutning}} med Kopiera på kopierar inte formen eller väggöppningarna (Flytta med Kopiera gör det).
- En lutande väggs skikt ritas inte på planer med detaljnivåerna Medel och Fin (dess kontur ritas).
- Öppningar som inte är rektanglar.
