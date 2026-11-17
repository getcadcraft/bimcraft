---
title: Etykiety pomieszczeń i powierzchni
summary: Umieść etykietę z numerem, nazwą i powierzchnią na pomieszczeniu lub powierzchni. Etykieta podąża za nim i jest skalowana wysokością na papierze.
keywords: etykieta, etykieta pomieszczenia, etykieta powierzchni, oznacz pomieszczenie, oznacz powierzchnię, oznacz wszystkie, oznacz wszystkie nieoznaczone, podpis, wysokość tekstu, wysokość na papierze, adnotacja
from: 67059d8a
---

## Co zrobisz

Oznaczaj pomieszczenia i powierzchnie pojedynczo lub wszystkie naraz i przesuwaj etykietę tam, gdzie dobrze się czyta.

## Gdzie są narzędzia

- Układy wstążki: {{ui:Architektura}} › **Pomieszczenie i powierzchnia** › {{ui:Oznacz pomieszczenie}} i {{ui:Oznacz powierzchnię}}.
- Układ klasyczny: pasek Rysuj › menu {{ui:Pomieszczenia}}.
- Zaznaczone pomieszczenie lub powierzchnia: Właściwości › {{ui:Dodaj etykietę}}.

## Kroki

1. Wybierz {{ui:Oznacz pomieszczenie}} i kliknij w pomieszczeniu, w miejscu, w którym ma stać etykieta.
2. Lub naciśnij {{ui:Oznacz wszystkie nieoznaczone}} w wierszu: każde pomieszczenie na tym poziomie, które nie ma etykiety, dostaje ją w swoim środku. To jeden krok cofnięcia.
3. Aby przesunąć etykietę, zaznacz ją narzędziem Zaznacz i przeciągnij. We Właściwościach jest {{ui:Przywróć na środek}}.
4. {{ui:Oznacz powierzchnię}} działa tak samo dla powierzchni.

## Co robi etykieta

- Podaje numer, nazwę i powierzchnię w wybranych jednostkach wyświetlania.
- Podąża za swoim pomieszczeniem: zmień nazwę pomieszczenia, przesuń ścianę, a treść i położenie etykiety zmienią się w tym samym kroku.
- Jest skalowana na papierze: {{ui:Wysokość tekstu na papierze}} podaje się w milimetrach (na start 2.5). Przy skali widoku 1:50 etykieta 2.5 mm ma 125 mm wysokości w modelu; przy 1:100 ma 250 mm.
- Pomieszczenie z etykietą pokazuje etykietę zamiast zwykłego podpisu.
- Gdy jego pomieszczenie lub powierzchnia znikają, etykieta znika razem z nimi. Cofnięcie przywraca oba.

## W IFC

Etykieta to IfcAnnotation (ObjectType ROOMTAG lub AREATAG) z tekstem jako literałem tekstowym oraz GlobalId tego, co nazywa. Tekst w pliku podaje powierzchnię w metrach kwadratowych.

## Jeszcze nie zbudowano

- Własne kształty etykiet oraz linia odnośnika.
- Etykiety drzwi, okien i ścian to osobne narzędzie (zobacz style etykiet arkuszy).

Zobacz też [Pomieszczenia i separatory pomieszczeń](topic:rooms-and-separators).
