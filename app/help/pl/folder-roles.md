---
title: Raport folderu: role, statusy i łącza
summary: Każda etykieta w raporcie folderu, jej znaczenie i sposób wyboru sugestii Zacznij tutaj.
keywords: raport folderu, role, status, kompletny, niekompletny, nieczytelny, połączony, tło, szablon, centralny, rodzina, tylko kopie zapasowe, zacznij tutaj, status łącza
from: b35bdd10
---

## Status kopii

Każda kopia modelu, plik główny i ponumerowane kopie zapasowe, otrzymuje kontrolę nagłówka.

| Etykieta | Znaczenie |
|---|---|
| **Kompletny** | Nagłówek pliku i jego indeks mieszczą się w pliku |
| **Niekompletny** | Plik jest krótszy, niż wskazuje jego własny indeks: został ucięty podczas kopiowania, przesyłania lub synchronizacji albo jest plikiem w chmurze, który nadal jest oznaczony jako „tylko online” |
| **Nieczytelny** | Plik nie jest poprawnym plikiem złożonym albo nie dało się go odczytać |

W kolumnie **Status** model pokazuje **Kompletny**, bursztynowe „*n* niekompletnych”, gdy co najmniej jedna kopia jest uszkodzona, a inna jest sprawna, albo czerwone **Niekompletny**, gdy żadna kopia nie jest sprawna.

## Kopie zapasowe

Pliki o nazwach `Name.0001.rvt`, `Name.0002.rvt` i tak dalej są ponumerowanymi kopiami zapasowymi `Name.rvt`. Są grupowane pod swoim modelem, od najnowszej, w **Wszystkie … kopie**. Karta jest odczytywana z pliku głównego, gdy jest kompletny, w przeciwnym razie z najnowszej kompletnej kopii zapasowej („najnowsza kompletna”).

## Role

Wyświetlane kursywą pod nazwą modelu.

| Rola | Znaczenie |
|---|---|
| Połączony przez *inny model*: tło | Inny model w folderze łączy ten, więc najpewniej jest to czyjeś tło, na przykład model konsultanta |
| Szablon lub plik bez nazwy | Nazwa taka jak Blank, Template, Default, Untitled lub Project1: punkt wyjścia albo plik, który nigdy nie został porządnie nazwany |
| Model centralny | Model centralny w pracy współdzielonej. Praca odbywa się w lokalnej kopii, a nie tutaj |
| Rodzina (część) | Plik `.rfa` lub `.rft`: komponent, a nie projekt |
| Tylko kopie zapasowe | Plik główny zniknął i pozostały tylko ponumerowane kopie zapasowe |

## Jak wybierany jest Zacznij tutaj

BimCraft stosuje rozumowanie, jakiego użyłby doświadczony użytkownik:

1. Kandydatami są czytelne pliki projektu (`.rvt`, `.rte`), które nie są połączone przez inny model i nie są szablonami.
2. Modele centralne i modele mające tylko kopie zapasowe liczą się tylko wtedy, gdy nic lepszego nie istnieje.
3. Spośród kandydatów wygrywa ten, który został zapisany najpóźniej.

Pole wymienia swoje powody i ostrzega, gdy plik wyglądający na oczywisty wybór jest uszkodzony, gdy inne modele są tłem oraz gdy wybór jest modelem centralnym. To najlepsze przypuszczenie; sprawdź u osoby, która ostatnio pracowała nad projektem.

## Status łącza

| Etykieta | Znaczenie |
|---|---|
| **W tym folderze** | Znaleziony pod zapisaną ścieżką względną albo na końcu zapisanej pełnej ścieżki wewnątrz folderu |
| **Znaleziono o tej samej nazwie** | Nie pod swoją ścieżką, ale w folderze jest plik o tej samej nazwie. Sprawdź, czy to właściwy |
| **Plik biblioteki** | Tabela kodów keynote lub kodów zestawień. Dostarczana z programem na każdym komputerze |
| **Brak w tym folderze** | Nie znaleziono nigdzie w folderze |

Kolumna **Znalezione łącza** w **Modelach** pokazuje, ile łączy modelu znaleziono spośród tych, których oczekiwano w folderze (pliki bibliotek nie są liczone).

## Odłożone na bok

| Pozycja | Znaczenie |
|---|---|
| Foldery techniczne Revit (nie są odczytywane) | `*_backup`, `*_log` i `Revit_temp`, a także ukryte foldery i `__MACOSX` |
| Pozostałości blokad, logów i kopii zapasowych | Pliki `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` i `.slog` |
| Inne pliki | Wszystko inne (pierwsze 40 jest wymienionych z nazwy) |
