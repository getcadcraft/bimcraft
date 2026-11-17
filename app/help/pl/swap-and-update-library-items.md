---
title: Zamiana umieszczonego elementu i aktualizacja elementów z biblioteki
summary: Zamień jeden umieszczony element biblioteki na inny, zachowując jego miejsce i numer pozycji, i sprawdzaj w Bibliotece nowsze wersje wszystkiego, co jest w modelu.
keywords: zamiana, zastąp, podstaw, aktualizacja, nowsza wersja, sprawdź aktualizacje, biblioteka, wycofany, zmiana licencji, numer pozycji
from: 8bdfe01d
---

## Co zrobisz

Zmień zdanie o elemencie bez ponownego przesuwania go i utrzymuj elementy biblioteki w modelu w aktualności.

## Zamień jeden element

1. Kliknij umieszczony element biblioteki w modelu.
2. We {{ui:Właściwościach}} kliknij {{ui:Zamień element…}} w polu **Element biblioteki**. Otwiera się karta {{ui:Biblioteka}}.
3. Znajdź nowy element i kliknij jego kartę.
4. Kliknij {{ui:Zamień … na ten}}.

Element zachowuje swoje miejsce, obrót, kondygnację, numer pozycji, ilość i notatki. Jego typ, kształt i dane zmieniają się na nowy element. Elementy wstawione w ten sam sposób dzielą jeden typ, tak jak przy wstawianiu.

Element, który ma warianty (zobacz [Wstawianie i zamiana elementu biblioteki z wariantami](topic:library-variants)), przy zamianie wymienia pozostałe warianty na górze karty {{ui:Biblioteka}}: jedno kliknięcie na każdy.

Gdy nowy element jest innym rodzajem obiektu, na przykład zlewem zamiast stołu, klasa IFC elementu zmienia się, by pasować (tu z elementu wyposażenia na terminal sanitarny), dzięki czemu inne oprogramowanie poprawnie go zestawi. Pozostaje tym samym elementem, z tym samym GlobalId, więc odwołania do niego nadal działają. {{key:Mod+Z}} przywraca starą klasę wraz ze starym elementem.

## Sprawdź aktualizacje

1. Kliknij {{ui:Aktualizacje}} na pasku narzędzi (albo {{ui:Sprawdź aktualizacje}} w polu elementu biblioteki).
2. Przeczytaj listę: każdy element Biblioteki w modelu z jego wersją w modelu, najnowszą wersją i statusem: **Aktualna**, **Nowsza wersja**, **Wycofany** lub **Nie znaleziono**. Lista podaje też, co się zmieniło (geometria, dane, licencja lub poprawka).
3. Kliknij {{ui:Aktualizuj}} w wierszu albo {{ui:Aktualizuj wszystkie}}.

## Czego się spodziewać

- „Zaktualizowano *n* umieszczeń. Miejsca, numery pozycji, ilości i notatki są zachowane.”
- Wiersze „Zaktualizowano: *element*” na liście zmian. {{key:Mod+Z}} cofa każdą z nich.

## Warto wiedzieć

- Sprawdzać można tylko elementy z Biblioteki. Elementy z plików nie mają identyfikatora biblioteki.
- Gdy licencja się zmieniła, już umieszczona kopia zachowuje licencję, z którą przyszła, dopóki jej nie zaktualizujesz.
- Element **Wycofany** nie jest oferowany do nowych umieszczeń. Element wycofany z powodów praw autorskich nie może być w ogóle pobrany; zastąp go, używając {{ui:Zamień element…}}.
- Umieszczony wariant pozostaje tym wariantem, jeśli nowsza wersja elementu go nadal ma; w przeciwnym razie przyjmuje wariant domyślny elementu.
- Sprawdzanie wysyła tylko identyfikatory elementów i wersje, nigdy Twojego modelu.
