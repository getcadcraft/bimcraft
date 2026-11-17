---
title: Typepakker: del vægtyper som åbne filer
summary: Gem vægtyper med deres lag, materialer, tags, klassifikationskoder og familier som én åben fil (almindelig JSON eller IFC), og tilføj dem til et andet projekt. Vægtyper i en IFC-fil fra et andet program kan også læses.
keywords: typepakke, typer, vægtype, del, eksport, import, bibliotek, åbent format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materialer, lag, skabelon, kontorstandard, familier
from: e4c91331
---

## Hvad du laver

Tag dine vægtyper med fra et projekt til et andet, eller giv dem til en, der arbejder i et andet program. En typepakke indeholder hver vægtype med dens lag, tykkelser, materialer, kerne, hulrum, lagprioritet, udviklingsniveau, mængdedata og klassifikationskoder, samt de familier, du tilføjer. Det er en åben fil: almindelig JSON-tekst, som alle kan læse, eller en IFC-fil. Intet i den er låst til et firma, et land eller en konto.

## Gem typer fra et projekt

1. Åbn **Data** på modellinjen, og vælg {{ui:Type packs}}.
2. Under {{ui:Save types from this project}} sætter du flueben ved de vægtyper, der skal med. Projektets egne typer er markeret; en startertype kan tilføjes og kommer med som en kopi. Sæt flueben ved familier, hvis du vil have dem med.
3. Skriv et {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} downloader en `.cctypes.json`-fil. {{ui:Save as IFC (.ifc)}} downloader en IFC-fil, der kun indeholder typer: hver vægtype som en IfcWallType med dens materialelagsæt, materialer og klassifikation, til ethvert BIM-program.

## Tilføj typer til et projekt

1. I samme dialog vælger du {{ui:Open a pack or an IFC file…}} og vælger en `.json`-pakke eller en `.ifc`-fil.
2. Dialogen viser, hvad filen indeholder: hver vægtype med sin tykkelse, sit antal lag og sine koder, materialerne og familierne.
3. Vælg, hvad der sker med {{ui:A type this project already has}}: **Behold projektets**, **Tilføj pakkens som kopi** (den får et nyt navn, der ender på »(2)«), eller **Erstat den (kun når ingen væg bruger den)**.
4. {{ui:Add to the project}}. Dialogen viser, hvad der blev tilføjet, kopieret, erstattet eller beholdt. Det er ét trin at fortryde.

De nye typer er med det samme i typelisten i Væg-værktøjet.

## Gulv-, tag- og loftstyper

Listen over typer, der skal gemmes, indeholder også projektets gulv-, tag- og loftstyper og deres startere (markeret Gulv, Tag, Loft). En pakke kan indeholde alle fire slags; hver type angiver sin IFC-klasse (IfcWallType, IfcSlabType, IfcCoveringType). En gulv-, tag- eller loftstype, som elementer bruger, erstattes ikke fra en pakke: ændr den i typeeditoren.

## Én type som et biblioteksemne

Markér præcis én type, og vælg **Gem som biblioteksemne…**. Det gemmer en `.cctype.json`-fil: et biblioteksemne af slagsen Typer, der indeholder netop den ene type (dens lag, materialer, LOD og klassifikationskoder). Upload den i biblioteket for at dele den. **Åbn en pakke eller en IFC-fil** læser også sådan et emne og tilføjer dets type til projektet ligesom en pakke.

## Godt at vide

- En IFC-fil fra et andet program kan også åbnes her. Hver af dens vægtyper, der har materialelag, læses: navnet, lagenes materialer og tykkelser og eventuelle hulrum er filens egne. Hvilke lag der er kernen, og hvad hvert lag gør (finish, konstruktion, isolering), gættes; typen markeres **(gættet)**, og du bør kontrollere den i vægtypeditoren. En vægtype uden lag udelades og nævnes.
- Et materiale, projektet allerede har, beholdes, som det er. Et nyt materiale, hvis navn er optaget, får »(pakke)« efter sit navn.
- En type, som vægge bruger, erstattes aldrig fra en pakke. Ændr den i vægtypeditoren, som flytter dens vægge korrekt.
- En kode sat på én væg rejser ikke med: den hører til den væg. En kode sat på typen gør.
- En fil med et felt, formatet ikke har, et lag, hvis materiale mangler, eller noget, der ikke er ren tekst, afvises, og meddelelsen siger, hvor og hvorfor.
- Ikke bygget endnu: gulv-, tag- og loftstyper (de har ingen typer i denne version: hver har sin egen tykkelse), dør- og vinduestyper ud over familier, og hatch eller farver fra et andet programs fil.
