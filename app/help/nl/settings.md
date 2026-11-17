---
title: BimCraft-instellingen
summary: Kies of ruimten en spaces zichtbaar zijn, of randen worden getekend en in welke weergave een model opent, en begin met plaatsen met wandsnap aan.
keywords: instellingen, voorkeuren, opties, spaces, ruimten, ifcspace, randen, lijnen, prestaties, groot model, openingsweergave, camera, bovenaanzicht, wandsnap, snappen
from: 4416e64f
---

Open {{ui:Instellingen}} met het tandwiel in de app-balk of met {{key:Mod+,}}. Het eerste tabblad, {{ui:BimCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat de instellingen die alle CadCraft-apps gemeen hebben (thema, werkbalk, panelen). De instellingen van BimCraft bestaan alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze. {{ui:BimCraft-instellingen opnieuw instellen}} onderaan het dialoogvenster zet ze, en de gedeelde instellingen, terug op de beginwaarden.

## Menu's, toetsen en muis

De menustijl (de eigen werkbalk van BimCraft, een menubalk voor woningontwerp, een BIM-lint of een opdrachtregel voor tekenen), uw eigen toetsen en menu's, en wat het wiel en de muisknoppen doen. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).

## Wanneer een model opent

- **Ruimten en spaces tonen** (bij de start uit): ruimten en spaces zijn doorzichtige dozen die de wanden erachter kunnen verbergen, daarom beginnen ze verborgen. De knop {{ui:Ruimten}} boven het model schakelt ze nog steeds in en uit voor het geopende model.
- **Randen**: {{ui:Randen aan}} (de start) tekent de randlijnen die de tekenstijl geven. {{ui:Alleen kleine modellen}} tekent ze alleen voor modellen met minder dan 300,000 driehoeken, wat grote modellen sneller te draaien houdt. {{ui:Randen uit}} opent elk model zonder. De knop {{ui:Randen}} schakelt ze nog steeds voor het geopende model. Boven 1.5 miljoen driehoeken zijn randen altijd uit.

## Tekeningen openen in

Hoe een DWG- of DXF-tekening voor het eerst verschijnt: {{ui:3D (snelst)}} (de start) tekent zelfs een grote tekening snel, of {{ui:Model (2D)}} opent de platte weergave van de modelruimte. De tabbladen boven de tekening schakelen op elk moment tussen {{ui:Model}}, de bladen en {{ui:3D}}. Een tekening zonder inhoud in de modelruimte, of een browser die 3D niet kan tonen, opent altijd in 2D.

## Openingsweergave

De camera waarmee een model opent: {{ui:Passend}} (de start, het hele model vanuit een hoek), {{ui:Boven}}, {{ui:Voor}} of {{ui:Zijaanzicht}}. De knoppen boven het model wijzigen de weergave op elk moment.

**Een gebouw dat op het terrein gedraaid is**: veel modellen komen binnen met het gebouw onder een hoek ten opzichte van de assen van het bestand (bij landmeetkundige of gedeelde coördinaten). {{ui:Haaks op het gebouw}} (de start) toont zo'n gebouw recht: {{ui:Passend}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Zijaanzicht}}, de vlakken van de weergavekubus en elke nieuwe doorsnede volgen de wanden, en het kompas van de weergavekubus wijst nog steeds naar het noorden van het model. {{ui:Zoals op het terrein geplaatst}} houdt de assen van het bestand aan. Een gebouw waarvan de wanden langs de assen lopen, ziet er in beide gevallen hetzelfde uit.

## Bibliotheekitems plaatsen

**Begin met wandsnap aan** (bij de start uit): wanneer het plaatsen of plakken van een bibliotheekitem begint, snapt de achterkant ervan naar de dichtstbijzijnde wand, met de kant naar de ruimte. {{key:Tab}} of {{ui:Wandsnap}} in de plaatsbalk schakelt het voor het moment uit. Een verdieping zonder wanden begint zonder.

## Snijkader

{{ui:Ruimte om de keuze}} is hoeveel ruimte {{ui:Snijkader om de keuze}} op elke zijde van de gekozen elementen laat, in millimeters: 300 bij de start, tot 5000. Zie [Een IFC-model snijden met een snijvlak](topic:section-plane).

## Locatie

{{ui:Breedte- en lengtegraad in}} kiest het systeem waarin {{ui:Meten}} › {{ui:Locatie}} breedte- en lengtegraden geeft: WGS 84 (EPSG:4326, de start, zoals GPS en webkaarten gebruiken), {{ui:Het eigen datum van het bestand}} of een van ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 en CGCS2000. Het eigen kaartsysteem en datum van het bestand worden altijd ook getoond. Zie [Afstanden, vlakoppervlakken en locaties in 3D meten](topic:measure).

## Hoekindicator

Wat rechtsonder in de 3D-weergaven staat (een IFC-model, en een tekening die naar 3D is gezet): {{ui:Weergavekubus}} (de start), {{ui:Assenpictogram}} (een kleine X, Y en Z) of {{ui:Geen}}. Het verandert meteen. De 2D-tekenweergave toont er nooit een.

Klik op de weergavekubus op een vlak, een rand of een hoek om vanaf die kant te kijken, sleep de kubus om om het model heen te draaien, sleep de ring om te keren, en klik op het huisje voor de startweergave.

## Uw naam bij issues

Aangemeld dragen issues de naam van uw account, en BimCraft vraagt daar niets voor: dit deel toont {{ui:Van uw account (<name>)}}. {{ui:Gebruik een andere naam}} opent een vak voor een andere naam, die voorrang heeft tot u {{ui:Gebruik mijn accountnaam}} kiest. Afgemeld vraagt het issueformulier, zoals voorheen, om een naam. Zie [Issues en BCF-bestanden](topic:issues-bcf).

## Assistenten

**Laat AI-assistenten en scripts BimCraft gebruiken** (bij de start uit) laat een assistent op uw computer het geopende model bereiken via CadCraft Studio: **Lezen** zoekt elementen en leest hun eigenschappen, **De weergave wijzigen** isoleert, verbergt en toont ze. **Activiteit** toont de aanroepen. Zie [Laat een AI-assistent met uw model werken](topic:assistants).

:::note
De andere instellingen gelden wanneer een model opent of het plaatsen begint. Een model dat al open is, behoudt zijn uiterlijk totdat u de werkbalkknoppen gebruikt of het opnieuw opent.
:::

## Gerelateerd

- [Bibliotheekitems kopiëren, plakken en dupliceren](topic:copy-paste)
- [Apparatuur en meubilair uit de bibliotheek plaatsen](topic:place-from-library)
- [Het BimCraft-scherm](topic:workspace)
- [Laat een AI-assistent met uw model werken](topic:assistants)
