---
title: Lista bibliotekskällor och logga in i biblioteket
summary: Se varje biblioteksobjekt som används i en modell med dess licens och källangivelse, kopiera källangivelserna eller ladda ner dem tillsammans med förteckningen, och logga in för att se ditt teams objekt.
keywords: källor, källangivelse, licens, cc by, cc0, upphovsrätt, teambibliotek, logga in, anslut, token, utrustningsförteckning, csv
from: 81971658
---

## Vad du gör

Ge källangivelse där en licens kräver det, och nå ditt teams egna biblioteksobjekt.

## Bibliotekskällor

1. Öppna modellen.
2. Klicka på {{ui:Källor}} i verktygsfältet.
3. Läs listan: varje objekt som används, dess version, licens, källangivelse och de artikelnummer det placerats som.
4. Klicka på {{ui:Kopiera källangivelser}} för att kopiera källangivelsernas rader, eller på {{ui:CSV med förteckningen}} för ett kalkylblad med varje placering och dess källangivelse.

Licensen och källangivelsen visas också under {{ui:Egenskaper}} när du väljer ett placerat objekt, och de sparas i IFC-filen (`CadCraft_LibraryItem`), så att de följer med filen.

## Utrustningsförteckningen för en modell

Klicka på {{ui:Utrustning}} i verktygsfältet. Förteckningen byggs från de placerade biblioteksobjekten: artikelnummer, antal, namn, tillverkare, modell, el- och VVS-data, grupperade per våningsplan. Den laddas ner som samma CSV som en ritnings förteckning gör.

## Logga in i biblioteket

1. I fliken {{ui:Bibliotek}} väljer du **Bibliotek**.
2. Klicka på {{ui:Logga in i biblioteket}}. Ett litet fönster öppnas på den här sajten.
3. Logga in om du uppmanas, klicka sedan på **Anslut**. Fönstret ger BimCraft en biblioteksnyckel och du kan stänga det.

## Vad du bör se

- "Inloggad i biblioteket" överst i biblioteksslistan. Ditt teams objekt visas bredvid de publika.
- Objekt du placerar registreras som använda, så att biblioteket kan säga till när de ändras.

## Bra att veta

- Nyckeln sparas bara i den här fliken och upphör när du stänger den. {{ui:Glöm inloggning}} tar bort den tidigare.
- Ditt kontos säkerhetssida listar nyckeln som "BimCraft library (browser)"; återkalla den där.
- Ingenting om din modell skickas: bara vilka biblioteksobjekt du placerat.
