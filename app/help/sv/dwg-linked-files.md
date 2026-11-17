---
title: Hitta länkade ritningar och bilder
summary: Visa en ritnings länkade ritningar (xrefs) och bilder i ritningshuvudet, genom att öppna dess mapp eller lägga till filerna för hand.
keywords: xref, extern referens, länkad ritning, bifoga, överlagring, bild, logotyp, ritningshuvud, saknad xref, etransmit, referenshanterare
from: 5593d4b1
---

## Vad du ska göra

Gör en ritning komplett: visa de ritningar den länkar till (externa referenser, eller xrefs) och de bilder den använder, till exempel en logotyp i ritningshuvudet.

## Det enkla sättet: öppna mappen

1. Klicka på {{ui:Öppna en mapp}} och välj mappen som innehåller ritningen och dess länkar, till exempel hela mappen `Cad` i ett projekt.
2. I mapprapporten, rulla ned till **CAD-ritningar**.
3. Klicka på ritningen.
4. Titta i panelen {{ui:Egenskaper}} till höger, under **Länkade ritningar** och **Bilder**.

BimCraft letar efter varje länkad ritning med dess namn ("*namn*.dwg"), först i samma mapp som ritningen, sedan var som helst i mappen du öppnade. Bilder hittas på samma sätt, och även med ett liknande namn: en eTransmit- eller Revit-export lägger ofta till projektets namn framför, så `logo.png` hittas som `Tower-logo-5425051.png`.

## Det andra sättet: lägg till filer för hand

1. Öppna ritningen för sig själv.
2. Till höger, under **Länkade ritningar**, klicka på {{ui:Lägg till länkade ritningar…}}. Under **Bilder** heter knappen {{ui:Lägg till bilder…}}; båda öppnar samma väljare.
3. Välj de länkade `.dwg`-filerna och bildfilerna. Du kan välja flera på en gång.
4. Vänta medan BimCraft öppnar ritningen igen med dem.

## Vad du ska se

Varje länkad ritning och bild listas med en etikett:

| Etikett | Betyder |
|---|---|
| **Visas** | Hittad och ritad. Sökvägen under den visar var den kommer ifrån, eller "tillagd av dig". |
| **Visas, liknande namn** | En bild hittad med ett liknande namn. Kontrollera att det är rätt. |
| **Hittades inte** | Inte i mappen eller bland filerna du lade till. En saknad bild visas som sin tomma ram. |
| **TIFF kan inte visas i en webbläsare** | Bilden är en TIFF-fil, som webbläsare inte ritar. Spara den som PNG med samma namn och lägg till den. |
| **Kunde inte läsas** | Filen hittades men kunde inte öppnas som bild. |

Panelen {{ui:Ritning}} till vänster visar "*n* av *m* lästa" för länkade ritningar. Länkade ritningars lager visas i {{ui:Lager}} som "*länknamn*|*lager*".

## Vanliga misstag

- **Att bara öppna ritningen.** ”Den här ritningen visar bara sitt eget innehåll tills dess länkade ritningar har lagts till. Om du öppnar hela projektmappen hittas de automatiskt.”
- **Att öppna en för liten mapp.** Om länkarna ligger i en syskonmapp, öppna den överordnade mappen i stället.
- **Omdöpta länkar.** BimCraft matchar länkade ritningar med namn. En länk som döpts om på disken hittas inte; lägg till den för hand.
- **Länkar till länkar.** BimCraft laddar de ritningar som den öppna ritningen länkar till. Ritningar som länkas inuti dem letas inte efter, så de visas oftast inte i den här versionen.
