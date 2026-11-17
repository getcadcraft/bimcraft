---
title: Wyświetl autorów elementów biblioteki i zaloguj się do biblioteki
summary: Zobacz każdy element biblioteki użyty w modelu wraz z jego licencją i atrybucją, skopiuj autorów lub pobierz ich razem z zestawieniem, a także zaloguj się, aby zobaczyć elementy swojego zespołu.
keywords: autorzy, atrybucja, licencja, cc by, cc0, prawa autorskie, zespołowa biblioteka, zaloguj się, połącz, token, zestawienie wyposażenia, csv
from: 81971658
---

## Co zrobisz

Podaj autorów tam, gdzie wymaga tego licencja, i sięgnij po elementy biblioteki swojego zespołu.

## Autorzy elementów biblioteki

1. Otwórz model.
2. Kliknij {{ui:Autorzy}} na pasku narzędzi.
3. Przeczytaj listę: każdy użyty element, jego wersję, licencję, atrybucję i numery pozycji, pod którymi jest umieszczony.
4. Kliknij {{ui:Kopiuj autorów}}, aby skopiować wiersze atrybucji, albo {{ui:CSV z zestawieniem}}, aby uzyskać arkusz kalkulacyjny ze wszystkimi umieszczeniami i ich autorami.

Licencja i atrybucja są też widoczne we {{ui:Właściwościach}} po wybraniu umieszczonego elementu, a zapisywane są w IFC (`CadCraft_LibraryItem`), więc podróżują razem z plikiem.

## Zestawienie wyposażenia modelu

Kliknij {{ui:Wyposażenie}} na pasku narzędzi. Zestawienie powstaje z umieszczonych elementów biblioteki: numer pozycji, ilość, nazwa, producent, model, dane elektryczne i instalacyjne, pogrupowane według kondygnacji. Pobiera się jako ten sam plik CSV, co zestawienie na rysunku.

## Zaloguj się do biblioteki

1. W karcie {{ui:Biblioteka}} wybierz **Biblioteka**.
2. Kliknij {{ui:Zaloguj się do biblioteki}}. Otworzy się małe okno na tej stronie.
3. Zaloguj się, jeśli zostaniesz o to poproszony, a potem kliknij **Połącz**. Okno przekazuje BimCraft klucz biblioteki i możesz je zamknąć.

## Co zobaczysz

- Komunikat „Zalogowano do biblioteki” na górze listy Biblioteki. Elementy Twojego zespołu pojawiają się obok publicznych.
- Umieszczone przez Ciebie elementy są zapisywane jako używane, dzięki czemu biblioteka może poinformować Cię, gdy się zmienią.

## Warto wiedzieć

- Klucz jest przechowywany tylko w tej karcie i wygasa po jej zamknięciu. {{ui:Zapomnij logowanie}} usuwa go wcześniej.
- Strona zabezpieczeń Twojego konta wymienia klucz jako "BimCraft library (browser)"; cofnij go tam.
- Nic o modelu nie jest wysyłane: tylko to, które elementy biblioteki umieściłeś.
