---
title: Poziom rozwoju (LOD) i kontrole kamieni milowych
summary: Nadaj elementom poziom rozwoju, sprawdź, skąd pochodzi, zweryfikuj model względem poziomu, którego wymaga kamień milowy, i napraw brakujące etykiety oraz nienazwane pomieszczenia. Każde sprawdzenie tylko doradza; nic nie jest blokowane.
keywords: lod, poziom rozwoju, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, kamień milowy, tabela kamieni milowych, sprawdzanie modelu, brakujące etykiety, nienazwane pomieszczenia, ogólne na wczesnym etapie, klasa IFC, klasyfikacja
from: 2091c79b
---

## Co zrobisz

Określ, jak bardzo rozwinięty jest każdy element, a następnie sprawdź cały model pod kątem tego, czego wymaga kamień milowy projektu.

## Kroki

1. Wybierz element (lub kilka) i otwórz {{ui:Właściwości}}. Znajdź {{ui:Poziom rozwoju}}.
2. Wybierz poziom z listy. Każdy poziom jest nazwany według tego, co oznacza, i obejmuje poziomy niższe. Jeden krok {{ui:Cofnij}} obejmuje cały wybór.
3. Sprawdź, skąd pochodzi poziom: z tego elementu, z jego typu lub z oznaczenia zweryfikowanego w terenie.
4. Aby sprawdzić model, otwórz po lewej stronie {{ui:Sprawdzanie modelu}}, a następnie {{ui:Kamienie milowe LOD}}. Wybierz kamień milowy i tabelę (tabelę startową lub własny plik CSV albo JSON, wczytany za pomocą {{ui:Obciążenie}}).
5. Wybierz {{ui:Sprawdź model}}. Sumy oraz wiersz dla każdego wiersza tabeli pokazują, co osiągnęło swój poziom, a co nie; wyniki pojawiają się też na liście problemów.
6. W sekcji {{ui:Brakujące etykiety i nienazwane pomieszczenia}} wybierz {{ui:Znajdź je}}, w razie potrzeby edytuj propozycje i wybierz {{ui:Zastosuj}}.

## Co powinno być widoczne

- Poziom wybrany dla elementu, obok niego klasa IFC i kody klasyfikacji.
- Sumy i wiersze dla kamienia milowego. Tabela nigdy nie zmienia tego, co oznacza poziom: skala jest stała, a tabela tylko określa, jakiego poziomu wymaga kamień milowy.
- „Ogólne na wczesnym etapie”: porada, by na wczesnym kamieniu milowym utrzymywać elementy w ogólnej postaci. To tylko porada.

## Warto wiedzieć

- Nic tutaj nie blokuje pracy. Model poniżej poziomu wymaganego przez kamień milowy jest wyświetlany na liście, a nie odrzucany.
- Trzy części poziomu (geometrię, informacje i dokumentację) można ustawić osobno; znacznik pokazuje: spełniono, poniżej lub nie podano.
