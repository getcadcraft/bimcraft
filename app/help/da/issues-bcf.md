---
title: Emner og BCF-filer
summary: Gem en visning af modellen som et emne — kamera, valgte elementer, skjulte elementer og snit — del den som en BCF-fil med andre koordineringsværktøjer, og åbn deres BCF-filer for at se deres emner.
keywords: bcf, bcfzip, emne, emner, topic, synspunkt, kollisionsrapport, koordinering, kommentar, snapshot, åbn bcf, gem bcf, eksport, import
from: 2a6cf201
---

## Hvad du gør

Peg på et problem i modellen, behold den visning, der viser det, og giv den videre i en BCF-fil, det format, andre koordineringsværktøjer læser og skriver.

## Trin

1. Åbn en IFC-model, og indstil visningen: drej til den, vælg de berørte elementer, skjul det, der er i vejen, og skær den med en snitplan eller -boks.
2. Klik på fanen {{ui:Emner}} til højre, og derefter på {{ui:Nyt emne fra denne visning}}.
3. Skriv en titel og en kommentar, hvis du vil; vælg en status; angiv dit navn eller din e-mail (er du logget ind, udfyldes din kontos navn; se [BimCraft-indstillinger](topic:settings#your-name-on-issues)). Klik på {{ui:Opret emne}}.
4. Klik på {{ui:Vis}} ved et emne for at få dets visning tilbage.
5. Klik på {{ui:Gem BCF}} for at downloade alle emner som én `.bcf`-fil.
6. Vil du se emner, andre har lavet, klik på {{ui:Åbn BCF…}} og vælg deres `.bcf`- eller `.bcfzip`-fil.

## Det skal du se

- Hvert emne i listen med et billede af dets visning, titel, status, forfatter og dato.
- {{ui:Vis}} sætter kameraet, de valgte elementer, det der var skjult (eller de eneste viste ting), og snittet tilbage. Elementer findes via deres GlobalId i alle åbne modeller; statuslinjen siger, hvis nogle mangler.
- Et snitplan eller en snitboks fra et andet værktøj vises, når den flugter med modellens akser; skrå eller ekstra planer kommer tilbage som et snitvolumen (op til 6 planer). Et emne beholder den første boks i et volumen med flere bokse.

## Godt at vide

- Filen er BCF 2.1 og gemmer visningen i modellens egne koordinater, så andre værktøjer sætter kameraet samme sted.
- Emner bliver i denne fane, indtil du gemmer dem. Åbner du en anden model, beholdes listen; åbn den model, emnerne handler om, før du viser dem.
- Et parallelt (ortogonalt) kamera fra et andet værktøj vises med denne visers perspektivkamera, trukket tilbage, så den samme del af modellen fylder visningen.

## Typiske fejl

- **Vis flyttede kameraet et mærkeligt sted.** Emnet blev lavet på en anden model eller med andre koordinater. Åbn den rigtige model først.
- **Filen åbner ikke.** Den er ikke en BCF-zip-fil, eller den er beskadiget; statuslinjen siger hvorfor.

## Næste

- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [Skær en IFC-model med en snitplan](topic:section-plane)
