---
title: Byt ut ett placerat objekt och uppdatera objekt från biblioteket
summary: Ersätt ett placerat biblioteksobjekt med ett annat och behåll dess plats och objektnummer, och sök i Bibliotek efter nyare versioner av allt i modellen.
keywords: byt, byt ut, ersätt, uppdatera, nyare version, sök efter uppdateringar, bibliotek, återkallad, licensändring, objektnummer
from: 8bdfe01d
---

## Vad du gör

Ändra dig om ett objekt utan att flytta det igen, och håll biblioteksobjekten i en modell aktuella.

## Byt ut ett objekt

1. Klicka på ett placerat biblioteksobjekt i modellen.
2. I {{ui:Egenskaper}}, klicka på {{ui:Byt objekt…}} i rutan **Biblioteksobjekt**. Fliken {{ui:Bibliotek}} öppnas.
3. Hitta det nya objektet och klicka på dess kort.
4. Klicka på {{ui:Byt ut … mot detta}}.

Elementet behåller sin plats, vridning, våningsplan, objektnummer, mängd och anteckningar. Dess typ, form och objektdata ändras till det nya objektet. Objekt som placeras på samma sätt delar en typ, precis som när du placerar dem.

Ett objekt som har varianter (se [Placera och byt ett biblioteksobjekt som har varianter](topic:library-variants)) listar sina andra varianter överst på fliken {{ui:Bibliotek}} när du byter det: ett klick för var och en.

När det nya objektet är en annan sorts sak, till exempel en diskbänk i stället för ett bord, ändras elementets IFC-klass så att den stämmer (här från möbelelement till sanitetsterminal), så att annan programvara schemalägger det rätt. Det är fortfarande samma element, med samma GlobalId, så länkar till det fungerar fortfarande. {{key:Mod+Z}} återställer den gamla klassen med det gamla objektet.

## Sök efter uppdateringar

1. Klicka på {{ui:Uppdateringar}} i verktygsfältet (eller {{ui:Sök efter uppdateringar}} i ett biblioteksobjekts ruta).
2. Läs listan: varje biblioteksobjekt i modellen med dess version i modellen, den senaste versionen och en status: **Uppdaterad**, **Nyare version**, **Återkallad** eller **Hittades inte**. Den säger också vad som ändrats (geometri, data, licens eller en rättelse).
3. Klicka på {{ui:Uppdatera}} på en rad, eller {{ui:Uppdatera alla}}.

## Vad du bör se

- ”Uppdaterade *n* placeringar. Placeringar, objektnummer, mängder och anteckningar behålls.”
- Raderna ”Uppdaterad: *objekt*” i ändringslistan. {{key:Mod+Z}} ångrar var och en.

## Bra att veta

- Endast objekt som kommer från biblioteket kan kontrolleras. Objekt från filer har inget biblioteks-id.
- När en licens ändrats behåller kopian du redan placerat den licens den kom med, tills du uppdaterar den.
- Ett **Återkallat** objekt erbjuds inte för nya placeringar. Ett som återkallats av upphovsrättsskäl kan inte laddas ner alls; ersätt det med {{ui:Byt objekt…}}.
- En placerad variant förblir den varianten när den nyare versionen av objektet fortfarande har den. Annars tar den objektets standardvariant.
- Kontrollen skickar bara objekt-id och versioner, aldrig din modell.
