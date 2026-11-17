---
title: Kontroller for kollisjoner
summary: Finn der elementer i ett sett løper inn i elementer i et annet — kanaler gjennom bjelker, vegger inn i dekker — i én modell eller på tvers av flere, med en toleranse, og gjør en kollisjon om til en sak.
keywords: kollisjon, kollisjonsdeteksjon, kollisjonskontroll, hard kollisjon, interferens, sammenstøt, koordinering, overlapp, toleranse, mep, vvs, konstruksjon
from: 9cb12346
---

## Hva du gjør

Finn stedene der to sett med elementer løper inn i hverandre, for eksempel alt i VVS-modellen mot konstruksjonen. Se så på hver enkelt, og behold de som betyr noe, som saker.

## Trinn

1. Åpne en IFC-modell, og legg til de andre med {{ui:Legg til en modell…}} hvis du kontrollerer på tvers av modeller. Se [Se flere IFC-modeller sammen](topic:several-models).
2. Åpne {{ui:Kollisjonskontroll}} i venstre panel.
3. I {{ui:Kontroller}} og {{ui:Mot}} velger du to sett: elementene du valgte, en klasse (over alle åpne modeller), et lagret søkesett (se [Finn elementer etter klasse, navn eller egenskap](topic:find)), eller alt.
4. Angi hvor mye overlapp som skal ignoreres, i meter. 0.01 ignorerer elementer som bare så vidt møtes.
5. Klikk {{ui:Kjør}}. Kontrollen kjører i bakgrunnen; {{ui:Avbryt}} stopper den.
6. Klikk et resultat for å se det: de to elementene velges og vises, alt annet gjøres gjennomsiktig, og visningen zoomer til dem.
7. Klikk {{ui:Lag en sak av den}} under et resultat for å skrive det opp i {{ui:Saker}}-fanen. Se [Saker og BCF-filer](topic:issues-bcf).

## Hva du skal se

- Kollisjonene listet med begge elementenes navn (og filene deres, når flere modeller er åpne), og hvor dypt de overlapper, det dypeste først.
- Flater som bare berører hverandre, for eksempel en vegg som står på et dekke eller en dør i sin åpning, er ikke kollisjoner.

## Godt å vite

- Dette er en enkel sjekk for harde kollisjoner: elementer der overflatene krysser hverandre. Et element som er helt skjult inni et annet (et rør gravd inn i en vegg) blir ikke funnet ennå.
- Dybden er hvor langt de to elementenes avgrensninger minst overlapper. Den er en veiledning, ikke en eksakt måling.

## Neste

- [Mål avstander, flateareal og plasseringer i 3D](topic:measure)
- [Skjul, isoler og gjør elementer gjennomsiktige](topic:hide-and-isolate)
