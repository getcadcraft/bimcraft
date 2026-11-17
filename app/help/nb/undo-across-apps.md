---
title: Angre på tvers av programmer i CadCraft Studio
summary: I Studio forteller BimCraft Studio om hvert fullførte steg, slik at Studio kan angre det siste steget ditt i vinduet du jobbet i sist.
keywords: angre, studio, på tvers av programmer, prosjektangring, historikk, journal, vindu
from: c66dd0c1
---

## Hva det gjør

I CadCraft Studio sier hvert programvindu fra til Studio når et steg er fullført (en vegg tegnet, et sett med vegger godtatt fra en skanning). Studio beholder disse stegene i den rekkefølgen du jobbet, og kan be vinduet som laget det siste stegget om å angre det, ved hjelp av vinduets egen angrefunksjon. Ctrl+Z i BimCraft er fortsatt BimCraft sin egen, og meldes også til Studio.

## Det du bør vite

- Studio ber bare et vindu om å angre når angrelisten er akkurat slik steget etterlot den. Etter Lagre (som starter en ny endringsliste) eller etter at du bytter modellen du redigerer, svarer BimCraft at listen har endret seg, og Studio hopper over dette vinduet. Ingenting blir tvunget.
- Å angre virkningene av ett program i et annet er ikke bygget ennå.
- Utenfor Studio endres ingenting.
- Menyelementet i Studio som ber om angringen følger med en Studio-versjon. Inntil da blir stegene rapportert, men ingen menyelement bruker dem.

## Neste

- [Arbeid live med andre](topic:work-live)
