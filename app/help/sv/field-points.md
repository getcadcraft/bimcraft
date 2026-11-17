---
title: Punkter för utsättning och kontroll av som-byggt
summary: Numrera de platser en besättning sätter ut från modellen, till exempel pelarcentrum, väggändar, ankarbultar, genomföringar och alla element du väljer. Skriv dem för en totalstation och läs sedan besättningens som-byggt-punkter tillbaka för att se vad som avviker.
keywords: utsättningspunkter, utsättning, sätta ut, utstakning, totalstation, mätning, punktfil, csv, txt, pnezd, penzd, xyz, nordvärde, östvärde, höjd, som byggt, som-byggt, kontroll, tolerans, avvikelse, ankarbultar, pelarcentrum, väggändar, genomföringar, mätkoordinater, kartomvandling
from: acea9606
---

Fliken {{ui:Punkter}} till höger gör de punkter som en besättning sätter ut på plats från den öppna modellen. Den kontrollerar också de punkter som de mäter efteråt.

## Gör punkterna

1. Öppna en IFC-modell och fliken {{ui:Punkter}}.
2. Bocka för vad som ska sättas ut: **pelarcentrum** (fotpunkten på varje pelares mittlinje), **väggändar** (båda ändarna på varje väggs axel, vid dess bas), **ankarbultar**, **genomföringar** (element vars namn eller typ säger genomföring) och de **valda elementen** (var och en vid sin placeringspunkt, så välj dem i vyn först).
3. Välj första nummer och ett prefix, koordinaterna, enheterna, kolumnerna och filen:
   - **Modell**: filens egna koordinater. **Koordinatnät**: modellens georefererade kartnät (visas bara när IFC:n har en kartomvandling), i meter eller i den enhet du väljer.
   - Kolumner **PNEZD** (punkt, nordvärde, östvärde, höjd, beskrivning), **PENZD** eller **XYZ**. **CSV** (kommatecken) eller **TXT** (tabbar).
4. Tryck på {{ui:Gör punkter}}. Listan visar punkterna och vyn markerar dem i blått. {{ui:Ladda ner punkterna}} skriver filen.

Punkterna kommer i en fast ordning: efter typ, sedan i rader över planen. Att göra dem igen från samma modell ger därför samma tal. Filen är den som CivilCraft öppnar och som kommandot EXPORTPOINTS i CadCraft skriver: en punkt per rad, tre decimaler och en beskrivning inom citattecken när den innehåller ett komma.

## Kontrollera som-byggt-punkterna

När besättningen skickar tillbaka vad de mätt väljer du en **tolerans** i millimeter och hur punkterna ska paras. Det kan göras efter **punktnummer** (de behöll dina nummer) eller efter den **närmaste mätningen**. Tryck sedan på {{ui:Läs in som-byggt-punkter…}}. Läs filen i samma enheter och koordinater som du skrev den i.

Varje konstruktionspunkt är då **inom** toleransen, **utanför** den eller **inte mätt**. Varje mätning som ingen bett om är **extra**. Tabellen ger skillnaderna i den enhet du väljer i verktygsfältet. Fot visas som decimala tum. Skillnaden är som byggt minus konstruktion: öst, nord, höjd och avståndet i plan. Vyn markerar varje punkt grön eller röd med en linje till mätningen, och grå när den inte mättes. {{ui:Rapport (CSV)}} skriver hela jämförelsen.

Inget här ändrar modellen. Finns inte ännu: utsättning från bjälklagskanter, rutnätsskärningar eller öppningar som görs åt dig, och att skicka punkter direkt till instrumentet. Använd filen för det.
