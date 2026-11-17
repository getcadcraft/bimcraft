---
title: Sammenlign en skanning med modellen og 4D-tidsplanen
summary: Vurder hvert element i modellen mot en åpen punktsky (bygget, delvis, mangler, ikke nådd), se prosentandelen bygget, fargelegg modellen etter den, og med en 4D-tidsplan lastet, list opp hva som henger etter eller ligger foran på 4D-dagen.
keywords: skanning, punktsky, fremdrift, prosent fullført, bygget, mangler, etter tidsplan, foran tidsplan, 4D, byggeplassfremdrift, avvik, som bygget, laserskanning, drone, sammenlign
from: 6fdc9003
---

Åpne en IFC-modell, åpne en punktsky ved siden av den (se [Punktskyer](topic:point-clouds)) og plasser den på modellen. Delen {{ui:Sammenlign skanningen med modellen}} vises i høyre panel mens en sky er åpen.

## Hva den gjør

Trykk {{ui:Sammenlign}}. Hvert element i modellen vurderes etter overflaten sin, fordi det er den en skanner ser. De seks flatene på boksen deles i celler på omtrent 20 cm; en celle teller når et skannepunkt ligger innenfor din {{ui:Toleranse}} (50 mm til å begynne med) av flaten. Den beste store flaten teller, slik at en vegg skannet fra én side ikke trekkes ned for sin andre side.

- **Bygget**: minst 40 % av overflaten er sett.
- **Delvis**: 10 % til 40 %.
- **Mangler**: mindre enn det, men skanningen når elementet (punkter innen 1.5 m fra det).
- **Ikke nådd**: skanningen har aldri vært der, så det sies ingenting om den.

For bygde og delvis bygde elementer gir den også den gjennomsnittlige avstanden fra skannepunktene til modellens overflate, og sier om elementet står på plass (innenfor toleransen), nær (innenfor tre ganger) eller ute av posisjon (lenger unna). Den ser bare avvik opptil fem ganger toleransen: et element bygget lenger fra stedet sitt enn det, leses som mangler.

Oppsummeringen gir prosentandelen bygget blant elementene skanningen når, etter antall og etter volum. Delvis bygde elementer telles hver for seg og legges ikke til de bygde.

## Mot 4D-tidsplanen

Med en 4D-tidsplan lastet (se [4D-tidsplan](topic:4d-schedule)), bruker resultatet også dagen du har satt på 4D-skyveknappen: elementer som skulle være ferdige innen den dagen, og som skanningen ikke viser som bygget, er **etter tidsplanen**; elementer som ennå ikke skulle vært ferdige, og som er bygget, er **foran**. Elementer etter tidsplanen listes i {{ui:Problemer}}, og tabellen kan filtreres til dem. Uten en tidsplan sies det ingenting om etter eller foran.

## Tabellen og modellen

Klikk en rad for å velge elementet. {{ui:Fargelegg modellen}} maler elementene grønne (bygget), gule (delvis), røde (mangler) eller grå (ikke nådd); {{ui:Egne farger}} setter dem tilbake. {{ui:Lagre CSV}} skriver tabellen. {{ui:Merk de samsvarende elementene som kontrollert i felt}} merker hvert element som er sett som bygget og innenfor toleransen, som kontrollert i felt (LOD 500, metode skanning), i ett trinn du kan angre. Se [Merk elementer som kontrollert eller kontrollert i felt](topic:verification).

:::warning
Dette sammenligner boksen til hvert element med skannepunkter innenfor en toleranse. Det er **ikke en oppmåling, et mengdeuttak eller et grunnlag for betaling**. Et element som skjules bak et skannet (en vegg bak en kledning, en plate under et gulvbelegg) deler overflaten og kan leses som bygget; et buet eller skrånende element har en boks som er større enn kroppen sin, og kan leses som delvis eller mangler. Se på listen før du handler etter den. Kommentarer til byggetillatelser og fremdriftsnotater er ikke en del av dette: de blir i kolonnene du beholder dem i.
:::

En assistent kan kjøre den samme sammenligningen med verktøyet {{ui:Sammenlign skanningen med modellen}}; det endrer ingenting i modellen.
