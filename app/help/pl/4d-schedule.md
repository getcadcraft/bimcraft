---
title: Odtwarzanie harmonogramu budowy na modelu
summary: Otwórz listę zadań jako CSV, powiąż każde zadanie z elementami według właściwości i przechodź przez daty, aby zobaczyć, co jest zbudowane, w toku i jeszcze nierozpoczęte.
keywords: 4d, harmonogram, kolejność budowy, oś czasu, etapowanie, program prac, gantt, zadania, daty, symulacja, postęp, zbudowane, csv, etap, faza, pakiet robót, wbs, grupa
from: 1b985a64
---

## Co zrobisz

Obserwuj, jak budynek powstaje: każde zadanie w harmonogramie powiązane z elementami, które buduje, pokazane dzień po dniu.

## Kroki

1. Otwórz model IFC i otwórz {{ui:Harmonogram 4D}} w lewym panelu.
2. Kliknij {{ui:Pobierz szablon}}, aby pobrać listę zadań z tygodniem na kondygnację, i zmień ją w arkuszu kalkulacyjnym. Albo napisz własną.
3. Kliknij {{ui:Otwórz listę zadań…}} i wybierz plik CSV.
4. Przeciągnij suwak dat albo kliknij {{ui:Odtwórz}}.

## Lista zadań

Plik CSV z wierszem nagłówka i kolumnami **Task**, **Start**, **Finish**, **Field** i **Value**. Działają zarówno przecinki, jak i średniki.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Poziom 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Dach | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Dach | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Zapisuj daty w formacie YYYY-MM-DD.
- Wiersz łączy zadanie z każdym elementem, którego **Field** ma dokładnie tę **Value**. Polem jest właściwość, np. Storey, Class, Name, Type, Material, Tag lub GlobalId, albo dowolna właściwość zapisana jako zestaw i nazwa: `Pset_WallCommon.FireRating`.
- Powtórz zadanie w kilku wierszach, z tymi samymi datami, aby powiązać z nim więcej elementów.

## Etapy i pakiety robót

Dodaj kolumnę **Stage**, kolumnę **Package** albo obie, aby zgrupować zadania w etapy i pakiety robót. Nazwy kolumn Phase i WBS też działają.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Płyta poziomu 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konstrukcja | Szkielet |
| Ściany poziomu 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konstrukcja | Szkielet |
| Drzwi | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Wykończenia | Stolarka |

- Zadanie należy do jednego etapu i jednego pakietu. Jeśli późniejszy wiersz tego samego zadania podaje inny, ten wiersz jest wymieniany wraz z numerem wiersza i pomijany.
- Ta sama nazwa pakietu w dwóch etapach to dwa pakiety.

Gdy lista ma grupy, nad datą pojawia się lista {{ui:Pokaż}}. Wybierz etap lub pakiet, a odtworzy się jako całość:

- suwak i {{ui:Odtwórz}} biegną od pierwszego początku grupy do ostatniego końca,
- pokazywane i malowane są tylko zadania grupy, a wszystko poza nią jest półprzezroczyste,
- wiersz pod listą mówi, ile zadań grupy jest na tę datę ukończonych, ile jest w toku, a ile jeszcze do wykonania,
- {{ui:Zaznacz jego elementy}} zaznacza wszystkie elementy grupy, do {{ui:Pokaż}}, {{ui:Przekrój}} lub zestawienia.

Wybierz **Wszystkie zadania**, aby znów zobaczyć cały harmonogram.

## Co powinno być widoczne

- **Zbudowane**: elementy, których wszystkie zadania są zakończone, we własnych kolorach.
- **W toku**: elementy, których zadanie trwa danego dnia, w kolorze ochry. Zadanie trwa od daty początku do daty końca.
- **Nierozpoczęte**: półprzezroczyste.
- Elementy bez zadania pozostają bez zmian. Lista pokazuje, ile elementów znalazło każde zadanie. Wiersze, których nie udało się odczytać albo które niczego nie znalazły, są wymienione wraz z numerami wierszy.

## Powiązania, wykres Gantta i MS Project

- Otwórz plik XML Microsoft Project (`.xml`) albo CSV z kolumną `Predecessors`. Powiązania mogą być typu koniec do startu, start do startu, koniec do końca lub start do końca, każde z wyprzedzeniem lub opóźnieniem w dniach.
- Pod listą zadań wykres Gantta rysuje każde zadanie jako pasek ze strzałkami powiązań. Zadania na ścieżce krytycznej są czerwone. Pętla powiązań albo poprzednik, który nie istnieje, jest wymieniany w panelu.
- {{ui:Zapisz jako XML MS Project}} i {{ui:Zapisz CSV z powiązaniami}} zapisują harmonogram wraz z jego powiązaniami.

## Dalej

- [Znajdowanie elementów według klasy, nazwy lub właściwości](topic:find)
- [Kolorowanie elementów według właściwości](topic:color-by-property)
