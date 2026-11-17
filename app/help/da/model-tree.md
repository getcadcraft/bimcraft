---
title: Find vej med modeltræet
summary: Gennemse en IFC-model efter projekt, område, bygning, etage og zone, med dens elementer grupperet efter type; sæt kryds for at vise og skjule, klik på en række for at vælge, og dobbeltklik for at zoome.
keywords: modeltræ, træ, struktur, rumlig struktur, browser, oversigt, navigator, etage, niveau, gulv, zone, rum, gruppe, klasse, skjul, vis, vælg, zoom
from: 69de4ab7
---

## Hvad du gør

Se hvordan en model er sat sammen, og kom til ethvert element uden at lede efter det i 3D: bygningen, dens etager, zonerne på hver etage og elementerne i dem, grupperet efter type (vægge, døre, dæk …).

## Trin

1. Åbn en IFC-model. {{ui:Modeltræ}} til venstre åbner ned til etagerne.
2. Klik på pilen ved siden af en række for at åbne eller lukke den. En etage har først sine zoner, derefter sine elementer efter type med antal. Et element, der består af dele, såsom en trappe, har sine dele.
3. Sæt kryds i en rækkes felt for at vise alt i den; fjern krydset for at skjule det. Et felt med en streg betyder, at kun noget af det, der er i den, vises.
4. Klik på en rækkes navn for at vælge det, den står for: ét element, eller alle elementer i en gruppe, etage eller zone. {{key:Mod}}+klik tilføjer dem til valget eller fjerner dem.
5. Klik på knappen {{ui:i}} ved siden af en etage, zone eller bygning for at se dens egne egenskaber.
6. Dobbeltklik på en række for at zoome til den.

## Hvad du skal se

- Når du vælger et element i 3D-visningen, åbner træet ned til det og markerer det.
- Skjulte elementer er overstreget. Træets felter og {{ui:Vis}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) virker sammen: se [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate).
- Elementer, som modellen ikke placerer på nogen etage, ligger til sidst i en gruppe, **Ikke i den rumlige struktur**.
- En lang gruppe viser 200 rækker ad gangen; klik på **Vis mere** under den for resten.

## Taster

Med en rækkes navn i fokus: {{key:Up}} og {{key:Down}} flytter, {{key:Right}} åbner, {{key:Left}} lukker eller går op, {{key:Space}} sætter eller fjerner krydset, {{key:Enter}} vælger.

## Almindelige fejl

- **En etages felt er sat, men intet vises.** Listen {{ui:Etager}} under træet slår hele etager fra af sig selv: sæt krydset der også.
- **En række vælger ingenting.** Nogle rækker, som en tom zone, har ingen elementer, der kan tegnes; statuslinjen siger det.

## Næste

- [Slet, klip, kopiér og sæt ind bygningselementer](topic:edit-elements)
- [Vis og skjul etager, zoner og kanter](topic:storeys-and-spaces)
