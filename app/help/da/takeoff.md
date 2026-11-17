---
title: Mængder til TakeoffCraft
summary: Ét klik sender modellens mængder til TakeoffCraft — vægge efter type, tage efter skråt areal, rygninger, valmhjørner og dalinger, fundamenter, døre og vinduer, skabe, el-enheder, gulvareal og tømmerets tilskæringsliste — markeret på en plan for hvert niveau, med fagpakkernes kalkulationsenheder på posterne.
keywords: mængdeudtræk, mængdeoversigt, overslag, kalkulation, materialeliste, stykliste, takeoffcraft, mængder, vægareal, tagareal, kvadrat, fundament, beton, kubikyard, tilskæringsliste, tømmer, fagpakke, kalkulationsenhed
from: c5a745af
---

## Hvad du skal gøre

Lav modellen om til en materialeliste og et overslag i TakeoffCraft. BimCraft tegner en plan af hvert niveau i en standardskala, markerer hver mængde på den og lægger mængdeudtrækket i PDF'en. TakeoffCraft måler selv markeringerne, så hvert tal kan kontrolleres på arket.

## Send den

1. Klik på {{ui:Mængdeudtræk}} i modellinjen (ved siden af {{ui:Ark}}).
2. TakeoffCraft åbnes i en ny fane med planerne. Når den spørger, vælger du at åbne det mængdeudtræk, den fandt i PDF'en.
3. Tilføj dine priser i TakeoffCraft's mængdetabel; kalkulationsenhederne lister allerede materialerne.

:::note
Når TakeoffCraft ikke er tilgængelig her, henter knappen PDF'en i stedet. Åbn den i TakeoffCraft senere: den finder mængdeudtrækket i den.
:::

## Hvad måles

- **Vægge** efter type og højde: deres midterlinjer som strækninger, med vægens højde på emnet, så TakeoffCraft giver længden og vægarealet. Hver strækning bærer væggens døre og vinduer, så TakeoffCraft trækker dem fra vægarealet én gang efter samme regel som BimCraft's lister: de to stemmer overens for brutto, fradrag og netto. En vægtypes mængdedata (enhed, mørtel, sats; se [Vægkalkulationsenheder](topic:wall-assemblies)) følger med som én prissat linje på typens emne. Under en måleméthode andet end standarden (se [Vælg en måleméthode](topic:plan-schedules-and-pdf#choose-a-measurement-method)) bærer udtrækket méthoden, hver strækning bærer det, samlingerne fratrækker fra dens vægflade, og TakeoffCraft måler efter samme méthode og navngiver den. En vægtype, hvis enhed har en længde og en højde, overdrager to komponenter med mængder: de enheder, der skal bestilles, og mørteltuven, prissat når typens sats er pr. enhed, pr. 1000 enheder eller pr. m³ mørtel. Et antal, der lander præcis på et helt tal, kan være én enhed højere i TakeoffCraft, fordi overdragelsen runder positioner på arket.
- **Tage**: hvert tagplan som et areal med sin hældning (TakeoffCraft giver det skrå areal), rygninger, valmhjørner og dalinger (valmhjørner og dalinger langs deres skråning), udhæng og gavludhæng.
- **Fundamenter**: fodringe og stemvægge som strækninger langs deres midterlinjer, plader som arealer med deres tykkelse, så betonen kommer ud efter volumen.
- **Døre og vinduer** talt efter type, med vindueskarm.
- **Underskabe** efter længden af deres fronter.
- **El-enheder** talt efter slags.
- **Gulvareal** for hvert niveau, fra dets rum.
- **Tømmerets tilskæringsliste** fra tømmerkonstruktionen, talt på et ark for sig (en prik pr. stykke).

Hvor en fagpakke har en matchende kalkulationsenhed — ydre og indre vægge, dæk, fundamenter, stemvægge, tagdækning, rygnings- og valmhætter, dalinger, udhæng, indvendige døre, vindueskarm, underskabe, udtag, kontakter, lamper, forgreningsdåser og tavlen — får posten sine materialer og formler. Pakkerne kommer uden priser og er endnu ikke gennemgået af en kalkulator.

:::tip
Planerne laves ud fra modellen hver gang, du klikker, så efter en ændring skal du blot klikke på {{ui:Mængdeudtræk}} igen.
:::
