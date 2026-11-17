---
title: Placera en fasad och öppna dess vy
summary: Placera en fasadmarkering i planritningen, rikta den åt det håll den ska se ut, hitta dess ritning i projektbläddraren, redigera i den och placera den på ett blad. Steg för menyflikslayouterna och för den klassiska layouten.
keywords: fasad, fasadvy, fasadmarkering, fasadetikett, placera fasad, ny fasad, skapa fasad, yttre fasad, sidovy, frontvy, vy från en punkt, var finns min fasad, öppna fasad, fasad på blad, vänd fasad, byt namn på fasad, norra fasaden, delad vy, sida vid sida, plan och 3D sida vid sida
from: a7cfd2b9
---

## Det här gör du

Gör en fasad själv: en ritning av byggnaden sedd från en punkt du väljer, i den riktning du väljer. Det tar två klick i en planritning. Ritningen listas sedan tillsammans med byggnadens övriga fasader.

:::note
De fyra sidorna finns redan. Varje byggnad har fasaderna Norr, Öst, Syd och Väst i {{ui:Project browser}} under {{ui:Elevations}} utan att du placerar något. Placera en egen när du vill ha en vy från någon annan plats: vinkelrätt mot en vinklad länga, från insidan av en gård eller av en vägg inne i ett rum.
:::

## Var verktyget finns

- Menyflikslayouter: {{ui:View}} › **Skapa** › {{ui:Elevation}}.
- Klassisk layout: slå på {{ui:Draw}}, välj sedan {{ui:Build}} › {{ui:Elevation}}.
- Valfri menystil: kommandot heter Höjd; kommandopaletten hittar det, och kommandoraden tar ELEVATION.

## Steg

1. Välj {{ui:Elevation}}. En fasad placeras på en planritning, så om du var i 3D-vyn visar BimCraft planen för den våningsnivå du var på. Pekaren säger **Klicka där fasaden står**.
2. Klicka där vyn tas. För en yttre fasad klickar du utanför byggnaden, en bit från väggen du vill se.
3. Pekaren säger nu **Klicka hur den ser ut**. Flytta mot byggnaden: en pil visar riktningen, och den korta linjen över ditt första klick är kanten som vyn ses från. Klicka.
4. En cirkel med ett nummer och en pekare visas i planritningen. Det är fasadmarkeringen. Den första är 1, nästa 2.
5. Tryck på Esc för att avsluta, eller fortsätt och placera en till.

Att placera en markering är ett steg: {{key:Mod+Z}} tar tillbaka den.

## Öppna ritningen

Planen ligger kvar framför dig efter det andra klicket. Ritningen finns i {{ui:Project browser}}:

1. Öppna {{ui:Elevations}}. Din listas efter de fyra sidorna som **Fasad 1**.
2. Klicka på pennknappen {{ui:Edit in this view}} på dess rad för att se ritningen och arbeta i den: flytta väggar, dörrar, fönster och nivåer, lägg till noteringar och mått. Se [Redigera i fasader och sektioner](topic:edit-in-elevations).
3. Klicka på raden för att öppna ritningsuppsättningen, eller lägg till vyn på ett eget blad. Se [Vyer och blad](topic:views-and-sheets).

I den klassiska layouten finns projektbläddraren i den vänstra panelen när {{ui:Draw}} är på. I menyflikslayouterna är den fliken {{ui:Project Browser}} under Egenskaper.

## Vad vyn visar

- Allt framför markeringen, så långt som byggnaden sträcker sig. Ingenting bakom den.
- Nivåerna, med namn och höjder.
- Om markeringen står inne i byggnaden skärs det den står i där, som en sektion skär. För en ren yttre fasad, stå utanför.

## Ändra den

Markera markeringen i planen (klicka på dess cirkel med {{ui:Select}}). Egenskaper har:

- {{ui:Label}}: dess nummer eller ett eget namn, upp till 8 tecken.
- {{ui:Flip the view}}: titta åt motsatt håll från samma plats.
- {{ui:Look as far as}}: hur långt framför markeringen vyn når. 0 visar allt.

Tryck på Delete för att ta bort markeringen och dess ritning. Ångra återställer båda.

:::tip
För att se planen och 3D-vyn samtidigt när du arbetar, använd {{ui:View}} › **Fönster** › {{ui:Tile Views}} i menyflikslayouterna, eller {{ui:Split}} i den klassiska layouten. Ett klick på en vyflik går tillbaka till en vy.
:::

## Begränsningar

- En markering kan inte dras eller vridas i planen ännu. Ta bort den och placera den igen, eller använd {{ui:Flip the view}}.
- I listan över vyer du kan lägga till på ett blad listas en egen fasad tillsammans med sektionerna.
- Dörr- och fönstermarkeringar ritas på de fyra sidofasaderna, inte på en du placerat.

## I IFC

Markeringen sparas i filen som en IfcAnnotation med namnet "Elevation 1" och objekttypen "Elevation marker", i den våningsnivå den placerades på. Ett annat program visar den som en annotation; själva ritningen görs av BimCraft från modellen varje gång.
