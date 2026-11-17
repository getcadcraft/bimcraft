---
title: Dodawanie wymiarów do siatki
summary: Pokaż rozstaw sąsiednich linii siatki i wymiar gabarytowy siatki na rzucie każdej kondygnacji. Wymiary są zapisywane w IFC i podążają za siatką, gdy linie się zmieniają.
keywords: siatka, wymiary siatki, wymiar, rozstaw, przęsła, wymiar gabarytowy, oznaczenia, siatka słupów, rzut, arkusz
from: aaea5d08
---

## Co zrobisz

Umieść rozstaw między liniami siatki i wymiar gabarytowy siatki na rzutach, za oznaczeniami, aby arkusze powstałe z tych rzutów zawierały wymiary. Najpierw potrzebujesz siatki: zobacz [Siatki i słupy](topic:grids-and-columns).

## Kroki

1. Pokaż rzut kondygnacji i kliknij {{ui:Siatka}}, aby włączyć narzędzie siatki. Pojawi się wiersz opcji siatki.
2. Zaznacz {{ui:Wymiary}}. Rozstaw między sąsiednimi liniami numerowanymi oraz między sąsiednimi liniami literowymi, a także wymiar gabarytowy w każdym kierunku, zostaną narysowane na rzucie.
3. Wybierz inną kondygnację: te same wymiary pojawią się na jej rzucie.
4. Przesuń linię, zmień jej nazwę lub dodaj nową. Wymiary podążają za siatką.
5. Odznacz {{ui:Wymiary}}, aby je ponownie usunąć.

## Uwagi

- Każda zmiana to jeden krok cofania: {{key:Mod+Z}} cofa ją.
- Ustawienie jest zapisywane w IFC razem z siatką, a rzuty umieszczone na arkuszach zawierają wymiary.
- Jeśli model nie ma siatki, którą można zmienić (siatka z pliku z innego programu nie może być tu zmieniana), wiersz stanu pokazuje „Brak siatki do zmiany.”
