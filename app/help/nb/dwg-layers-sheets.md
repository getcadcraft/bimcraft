---
title: Arbeid med layer og ark
summary: Slå tegningslayer av og på, bytt mellom modellrom og ark, og forstå hvordan ark viser modellen gjennom sine visningsområder.
keywords: layer, layer på/av, frys, tine, ark, layouts, papirrom, faner, visningsområder, layer-behandler, la
from: a9a16b53
---

## Hva du skal gjøre

Rydd opp i visningen av en travel tegning ved å slå av layer, og gå deretter gjennom tegningens ark ett for ett.

## Trinn: layer

1. Åpne en DWG- eller DXF-tegning.
2. Finn listen {{ui:Layer}} til venstre. Hvert layer har en avkrysningsboks, en fargeprøve og navnet sitt.
3. Fjern haken for et layer for å skjule alt på det.
4. Klikk {{ui:Alle av}} for å skjule alle layer.
5. Sett bare hake på layerne du vil se.
6. Klikk {{ui:Alle på}} for å vise alt igjen.

## Hva du bør se

Layer forsvinner og dukker opp igjen med en gang, på {{ui:Modell}} og på hvert ark. Layer som er av eller frosset i selve tegningen, starter uten hake.

## Trinn: ark

1. Se på raden med faner over tegningen: {{ui:Modell}}, deretter hvert ark med navn.
2. Klikk en arkfane.
3. Se på arket: papiret ligger på et mørkere skrivebord, og hvert visningsområde viser sin del av modellen i sin egen skala og vinkel.
4. Zoom inn i et visningsområde for å lese detaljer. Du zoomer arket, ikke visningsområdet, så hele arket beveger seg sammen.
5. Klikk {{ui:Tilpass}} eller dobbeltklikk for å se hele arket igjen.

## Hvordan ark fungerer her

Et ark (et layout, eller papirrom) inneholder en tegningshode og visningsområder som ser inn i modellrommet. BimCraft tegner hvert visningsområde klippet til kanten sin, i sin egen skala og vridning, og skjuler layerne som er frosset i det visningsområdet. Første visningsområde på hvert ark er selve arket og tegnes ikke to ganger.

## Vanlige feil

- **Å vente at endringer av layer lagres.** Innstillinger for layer påvirker bare visningen, til du åpner en annen fil.
- **Å vente kontroll per visningsområde.** Listen {{ui:Layer}} bytter et layer overalt. Layer som tegningen har frosset i ett visningsområde, forblir frosset der.
- **Å lete etter layersøk eller layertilstander.** Ikke bygget ennå. Listen følger rekkefølgen i tegningen.
- **Å forvente å arbeide inne i et visningsområde.** Det er ingenting å aktivere: BimCraft viser bare arket. Bruk {{ui:Modell}} for å se modellrommet direkte.
