---
title: Arbejd med lag og ark
summary: Slå tegningslag til og fra, skift mellem modelrum og ark, og forstå hvordan ark viser modellen gennem deres viewports.
keywords: lag, lag til og fra, frys, tø op, ark, layouts, papirrum, faner, viewports, lagbehandling, la
from: a9a16b53
---

## Hvad du skal gøre

Ryd op i visningen af en travl tegning ved at slå lag fra, og kig derefter på tegningens ark ét ad gangen.

## Trin: lag

1. Åbn en DWG- eller DXF-tegning.
2. Find listen {{ui:Lag}} til venstre. Hvert lag har et afkrydsningsfelt, en farveprøve og sit navn.
3. Fjern markeringen i et lag for at skjule alt på det.
4. Klik på {{ui:Alle fra}} for at skjule alle lag.
5. Sæt kun kryds i de lag, du vil se.
6. Klik på {{ui:Alle til}} for at vise alt igen.

## Hvad du bør se

Lag forsvinder og dukker op igen på én gang, på {{ui:Model}} og på alle ark. Lag, der er slukket eller frosset i selve tegningen, starter uden markering.

## Trin: ark

1. Kig på rækken af faner over tegningen: {{ui:Model}}, og derefter hvert ark efter navn.
2. Klik på en arkfane.
3. Kig på arket. Papiret ligger på et mørkere bord, og hver viewport viser sin del af modellen i sin egen målestok og vinkel.
4. Zoom ind på en viewport for at læse detaljer. Du zoomer arket, ikke viewporten, så hele arket flytter sig samlet.
5. Klik på {{ui:Tilpas}} eller dobbeltklik for at se hele arket igen.

## Sådan virker ark her

Et ark (et layout eller papirrum) indeholder et tegningshoved og viewports, der kigger ind i modelrummet. BimCraft tegner hver viewport beskåret til sin kant, i sin egen målestok og drejning, og skjuler de lag, der er frosset i den viewport. Hvert arks første viewport er selve arket og tegnes ikke to gange.

## Almindelige fejl

- **At forvente, at lagændringer gemmes.** Lagindstillinger påvirker kun visningen, indtil du åbner en anden fil.
- **At forvente lagstyring pr. viewport.** Listen {{ui:Lag}} skifter et lag overalt. Lag, som tegningen har frosset i én viewport, forbliver frosne der.
- **At lede efter en lagsøgning eller lagtilstande.** Endnu ikke lavet. Listen står i tegningens rækkefølge.
- **At forvente at arbejde inde i en viewport.** Der er intet at aktivere. BimCraft viser kun arket. Brug {{ui:Model}} for at kigge direkte i modelrummet.
