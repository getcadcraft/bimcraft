---
title: Werk tussen twee BIM-programme
summary: Stuur 'n model van een BIM-program na 'n ander deur IFC met BimCraft in die middel, behou sy GlobalIds, eienskapstelle en klassifikasies, stel albei programme op vir dieselfde eienskappe, en sien wat teruggekom het.
keywords: ifc, heen-en-terug, interoperabiliteit, globalid, guid, eienskapstelle, psets, klassifikasies, gedeelde parameters, eienskapafbeelding, vertaler, bcf, koördinasie, uitruil
from: 9f224176
---

## Wat jy sal doen

Beweeg 'n model tussen twee BIM-programme, byvoorbeeld van Revit na Archicad en terug, deur IFC, met BimCraft in die middel om dit te kontroleer, daarby te voeg en te rapporteer wat oorleef het. Geen van albei programme se eie lêerformaat word gelees nie: alles reis as IFC.

## Wat BimCraft behou

Wanneer jy 'n model in BimCraft verander en {{ui:Stoor as IFC}} klik, word elke reël wat jy nie verander het nie presies soos dit was teruggeskryf. So:

- **GlobalIds** bly dieselfde, en die ander program kan elke element pas by die een wat dit gestuur het.
- **Eienskapstelle** en hul waardes bly, behalwe die waardes wat jy verander het.
- **Klassifikasies** bly aan hul elemente geheg.

## Stel albei programme op vir dieselfde eienskappe

1. Maak die model in BimCraft oop (en die projekbundel, as jy een het: sy eiendomsgroepe word bygevoeg).
2. Maak in die linkerpaneel {{ui:Tussen twee BIM-programme}} oop.
3. Laai onder **Eiendomsafbeelding** af wat elke program nodig het:
   - {{ui:Gedeelde parameters}}: 'n gedeelde parameterlêer. In Revit laai jy dit met Bestuur › Gedeelde parameters en voeg die parameters by die kategorieë wat hulle nodig het.
   - {{ui:IFC-uitvoer eiendomstelle}}: 'n gebruikergedefinieerde eiendomstel-lêer. In Revit se IFC-uitvoerinstellings kies jy dit onder gebruikergedefinieerde eiendomstelle, sodat die uitgevoerde IFC dieselfde stel- en eienskapnamen dra.
   - {{ui:Afbeeldingstabel (CSV)}}: elke eienskap met sy IFC-stel en naam, sy tipe, en die ooreenstemmende name in elke program. Archicad se afbeeldingslêers is nie 'n gepubliseerde formaat nie, so stel sy IFC-vertaler en eienskapbestuurder met die hand op uit hierdie tabel.
   - {{ui:Afbeeldingslêer}}: die hele afbeelding as een lêer, om by die projek te hou.

Standaardstelle (Pset_ en Qto_) word uit die gedeelde parameterlêer gelaat: albei programme skryf dié uit hul eie data.

## Stuur die model en bring dit terug

1. Voer IFC uit vanaf die eerste program met GlobalIds behou (Revit: "Store the IFC GUID in an element parameter after export" aan).
2. Maak dit in BimCraft oop, kontroleer dit ({{ui:Modelkontroles}}, {{ui:Botsingstoets}}), voeg kwessies by ({{ui:Kwessies}}, BCF), verander waardes as jy dit nodig het, en {{ui:Stoor as IFC}}.
3. Maak die gestoorde IFC in die tweede program oop, werk daarop, en voer IFC daarvandaan uit met GlobalIds behou (Archicad se vertaler: "Global Unique Identifiers: Keep existing").
4. Terug in BimCraft, maak die model oop wat uitgestuur is, en voeg dan die een by wat teruggekom het ({{ui:Voeg 'n model by}} onder Modelle).
5. In {{ui:Tussen twee BIM-programme}}, kies **Uitgestuur** en **Teruggekom**, en klik {{ui:Maak die verslag}}.

## Lees die verslag

- **Elemente**: hoeveel met dieselfde GlobalId teruggekom het, hoeveel ontbreek, en hoeveel nuut is. Elemente met 'n nuwe GlobalId wys as een ontbrekend en een nuut: die ander program het dit nie behou nie.
- **IFC-klas verander**: elemente wat as 'n ander soort element teruggekom het.
- **Eienskapwaardes behou**: die aandeel waardes wat onveranderd teruggekom het. Die lys hieronder wys die eienskappe met die meeste veranderde of ontbrekende waardes.
- **Klassifikasies**: behou, verander (dieselfde stelsel, ander kode) of ontbrekend.

{{ui:Laai die verslag af (CSV)}} gee elke eienskap met sy tellings. Om te sien watter elemente geskuif of van vorm verander het, gebruik {{ui:Vergelyk weergawes}} op dieselfde twee modelle.

:::note
BimCraft laat nie een van die twee programme loop nie. Watter instellings 'n waarde deurdra, hang af van elke program se IFC-instellings: die verslag wys wat werklik teruggekom het, so probeer 'n instelling, voer weer uit en vergelyk.
:::

## Kwessies reis as BCF

Kwessies wat jy in BimCraft opper, voer uit as BCF ({{ui:Kwessies}}), wat albei programme met hul BCF-gereedskap kan lees. So bereik 'n vraag oor 'n element die persoon wat in die ander program werk, met sy aansig.

Sien ook [Maak 'n projekbundel oop](topic:open-project-bundle), [Van 'n projeklêer na BimCraft deur IFC](topic:rvt-to-ifc) en [Vergelyk twee weergawes van 'n model](topic:compare-versions).
