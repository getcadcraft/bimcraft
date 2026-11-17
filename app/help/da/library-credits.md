---
title: Vis krediteringer for biblioteket og log ind på biblioteket
summary: Se hvert biblioteksemne, der bruges i en model, med dets licens og kildeangivelse, kopiér krediteringerne eller download dem sammen med listen, og log ind for at se dit teams emner.
keywords: krediteringer, kildeangivelse, licens, cc by, cc0, ophavsret, teambibliotek, log ind, forbind, token, udstyrsliste, csv
from: 81971658
---

## Hvad du gør

Giv kredit, hvor en licens kræver det, og få adgang til dit teams egne biblioteksemner.

## Krediteringer for biblioteket

1. Åbn modellen.
2. Klik på {{ui:Credits}} i værktøjslinjen.
3. Læs listen: hvert brugt emne, dets version, licens, kildeangivelse og de emnenumre, det er placeret som.
4. Klik på {{ui:Copy credits}} for at kopiere kildeangivelseslinjerne, eller på {{ui:CSV with the schedule}} for et regneark med hver placering og dens kredit.

Licensen og kildeangivelsen vises også i {{ui:Properties}}, når du vælger et placeret emne, og de gemmes i IFC-filen (`CadCraft_LibraryItem`), så de følger med filen.

## Modelens udstyrsliste

Klik på {{ui:Equipment}} i værktøjslinjen. Listen laves ud fra de placerede biblioteksemner: emnenummer, antal, navn, producent, model, el- og VVS-data, grupperet efter etage. Den downloades som den samme CSV, som en tegnings liste er.

## Log ind på biblioteket

1. I fanen {{ui:Library}} vælger du **Library**.
2. Klik på {{ui:Sign in to the library}}. Et lille vindue åbner på denne side.
3. Log ind, hvis du bliver bedt om det, og klik derefter på **Connect**. Vinduet giver BimCraft en bibliotekets nøgle, og du kan lukke det.

## Det skal du se

- "Signed in to the library" øverst i biblioteksslisten. Dit teams emner vises ved siden af de offentlige.
- Emner, du placerer, registreres som brugt, så biblioteket kan fortælle dig, når de ændres.

## Godt at vide

- Nøglen gemmes kun i denne fane og slutter, når du lukker den. {{ui:Forget sign-in}} fjerner den tidligere.
- Din kontos sikkerhedsside viser nøglen som "BimCraft library (browser)"; tilbagekald den dér.
- Der sendes intet om din model: kun hvilke biblioteksemner du har placeret.
