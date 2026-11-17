---
title: Cofanie między aplikacjami w CadCraft Studio
summary: W Studio BimCraft informuje Studio o każdym zakończonym kroku, dzięki czemu Studio może cofnąć Twój ostatni krok w tym oknie, w którym pracowałeś najostatniej.
keywords: cofnij, studio, między aplikacjami, cofanie projektu, historia, dziennik, okno
from: c66dd0c1
---

## Co to robi

W CadCraft Studio każde okno aplikacji informuje Studio, kiedy krok jest zakończony (narysowana ściana, zestaw ścian przyjęty ze skanu). Studio zachowuje te kroki w kolejności, w jakiej pracowałeś, i może poprosić okno, które wykonało ostatni z nich, o cofnięcie go przy użyciu własnego cofania tego okna. Ctrl+Z w BimCraft pozostaje cofnięciem BimCraft i jest również przekazywane do Studio.

## Co warto wiedzieć

- Studio prosi okno o cofnięcie tylko wtedy, gdy jego lista cofania jest dokładnie taka, jak pozostawił ją krok. Po zapisaniu (co rozpoczyna nową listę zmian) albo po przełączeniu modelu, który edytujesz, BimCraft odpowiada, że lista się przesunęła, i Studio pomija to okno. Nic nie jest wymuszane.
- Cofanie skutków jednej aplikacji w innej nie jest jeszcze zbudowane.
- Poza Studio nic się nie zmienia.
- Pozycja menu Studio, która prosi o cofnięcie, pojawia się wraz z wersją Studio; do tego czasu kroki są zgłaszane, ale żadna pozycja menu ich nie używa.

## Dalej

- [Praca na żywo z innymi](topic:work-live)
