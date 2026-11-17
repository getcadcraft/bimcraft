---
title: "Gardinväggssystem: glasväggar på ett rutnät, med poster"
summary: Rita ett gardinväggssystem som en vägg eller lägg det på en yta, och ange sedan dess rutnätslinjer och poster. Det sparas som en IfcCurtainWall med sina glasfält och poster.
keywords: gardinväggssystem, gardinvägg, gardinrutnät, post, glasning, butiksfasad, glasvägg, panel, glasfält, på yta, yta, massa, rutnätslinje, avstånd, profil, rigel, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Vad du gör

Gör en glasvägg av glasfält mellan poster, ändra var rutnätslinjerna sitter och välj vilka linjer som har en post.

## Steg

1. Slå på {{ui:Rita}} och öppna menyn **Bygg** (i menyradsläget: fliken Arkitektur).
2. Välj **Gardinväggssystem**. Ange i dess rad överkanten (våningsplanet ovanför, eller en höjd), en linje var så mycket längs systemet, en linje var så mycket uppåt (lämna tomt för ingen), om det ska få poster och postprofilen.
3. Klicka där det börjar och där det slutar, precis som när du ritar en vägg. Shift håller det rätvinkligt.
4. För att ändra rutnätet väljer du **Gardinrutnät** och klickar på systemet:
   - **Lägg till en linje**: en lodrät linje placeras där du klickar. För en vågrät linje anger du först dess höjd i **Vid**.
   - **Flytta en linje**: klicka på linjen och sedan där den ska ta vägen.
   - **Ta bort en linje**: klicka på linjen.
   - **Ange med avstånd**: skriv avståndet i **Varje** och klicka sedan på systemet.
5. För att ändra poster väljer du **Post**, väljer vad den gäller (den lodräta linjen du klickar på, den vågräta linjen vid en höjd, kanten eller alla linjer), väljer **Placera poster** eller **Ta bort poster** och en profil, och klickar sedan på systemet.
6. Markera ett system för att se allt i **Egenskaper**: varje rutnätslinje med dess plats, en bock för dess post och en knapp för att ta bort den, avståndet, kanten, profilen och glasfältets tjocklek.

## På yta

**På yta** gör ett gardinväggssystem på en plan yta som du klickar på i 3D-vyn. Dess rad har samma rutnäts- och postinställningar.

- Den fungerar på alla plana ytor hos alla element som 3D-vyn visar: en massa, en vägg, ett golv, ett takplan, en pelare, ett placerat objekt. Ytan kan vara lodrät, lutande eller vågrät.
- Systemet tar ytans kontur. En gavel eller annan udda form skär glasfälten och posterna efter den.
- Det kan göra en **vägg** i stället, längs foten av en lodrät yta och lika högt som ytan. En vägg här står alltid lodrät, så en lutande eller vågrät yta kan inte ge en vägg.
- Det gör inget tak. Ett tak i BimCraft räknas ut från en nivås kontur och en lutning, inte från en enskild yta.
- En krökt yta är många små plana ytor: ett klick tar en av dem.
- En yta med öppningar i: systemet täcker ytans yttre kontur.

## Hur det mäts

- **Bruttoarea** är systemets kontur.
- **Glasarea** är glasfälten som de blir: varje glasfält förlorar en halv postbredd på en sida med en rutnätspost och en hel bredd vid en kantpost.
- En lodrät post går igenom från kant till kant. En vågrät post slutar vid varje lodrät post och vid kanten. Kantposter ligger inom konturen. Där två möts går den mest lodräta igenom. Skarvar skärs rakt, inte i gering.
- **Förteckningar** har en lista **Gardinväggssystem** med dessa tal när modellen har ett sådant.

## I IFC-filen

En IfcCurtainWall på sin våningsplan, uppbyggd av en IfcPlate (gardinpanel) per glasfält och en IfcMember (post) per postdel, var och en med sin egen form, sitt material och sina grundmängder.

## Bra att veta

- Alla storlekar görs som du begär. Bara en kontur utan yta nekas, eftersom det inte finns något att göra.
- Ett system ritat som en vägg behåller den höjd det ritades med. Flyttar du en nivå senare, ange höjden igen i Egenskaper.
- Flytta-verktyget flyttar inte ett gardinväggssystem ännu. Ta bort det och rita det igen, eller ändra dess rutnät på plats.
- {{ui:Ångra}} tar tillbaka varje steg: hela systemet, en rutnätsändring eller en poständring.
