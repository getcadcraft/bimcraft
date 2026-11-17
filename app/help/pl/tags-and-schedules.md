---
title: Oznaczaj elementy etykietami i twórz zestawienia według etykiet
summary: Definiuj własne etykiety (nazwę, typ, dozwolone wartości i klasy, których dotyczą), oznaczaj naraz wiele elementów i twórz zestawienia, których kolumny, filtry i grupy odczytują etykiety. Etykiety są zapisane w IFC.
keywords: etykiety, etykieta, oznaczanie, właściwości własne, parametry, parametry współdzielone, zestaw właściwości, pset, zestawienie, filtr, grupuj według, wykończenie, klasa odporności ogniowej, zbiorcza edycja, csv
from: 9cc7c90d
---

## Co zrobisz

Etykieta to własna właściwość, na przykład *Wykończenie* lub *Klasa odporności ogniowej*. Definiujesz ją raz dla projektu, ustawiasz naraz na wielu elementach, a każde zestawienie w BimCraft może ją odczytać: tutaj zestawienie etykiet, {{ui:Ilości}}, Znajdź, Kolor według właściwości i [Dokumenty z modelu](topic:documents-from-the-model).

## Kroki

1. Otwórz model IFC albo rozpocznij nowy budynek.
2. W lewym panelu, pod {{ui:Ilości}}, otwórz {{ui:Etykiety}}.
3. Kliknij {{ui:Dodaj etykietę}}. Podaj nazwę, wybierz jej typ, a jeśli chcesz, wymień dozwolone wartości (po przecinku) i klasy, których dotyczy (`IfcDoor`, `IfcWall` …). Kliknij {{ui:Dodaj etykietę}}.
4. Zaznacz elementy w modelu (Znajdź pomaga: wybierz wszystkie drzwi naraz).
5. Pod {{ui:Oznacz zaznaczenie etykietą}} wybierz lub wpisz wartość dla każdej etykiety, którą chcesz ustawić, pozostałe zostaw bez zmian i kliknij {{ui:Zastosuj do … zaznaczonych elementów}}.
6. Pod {{ui:Zestawienie etykiet}} zaznacz kolumny, dodaj filtry, wybierz {{ui:Grupuj według}}, a następnie kliknij {{ui:Pobierz CSV}}.

## Czego się spodziewać

- Wpis na liście zmian dla każdej zapisanej definicji i każdego oznaczenia; {{ui:Cofnij}} go cofa.
- Elementy klasy, do której etykieta się nie odnosi, są pomijane przy tej etykiecie, a wiersz statusu podaje, ile ich jest.
- Zestawienie etykiet wypisuje jeden wiersz na element, pogrupowany według wybranego pola; kliknij pierwszą komórkę wiersza, aby wybrać ten element.
- {{ui:Ilości}} wymienia etykiety pod `CadCraft_Tags`, więc możesz tam zsumować powierzchnie lub liczby według etykiety.

## Typy

Typy są tą samą listą co parametry rodziny: Długość (milimetry), Kąt (stopnie), Liczba, Liczba całkowita, Tak / Nie, Pióro (1–16), Tekst, Materiał i Wypełnienie. Wartość, która nie pasuje do swojego typu lub nie jest jedną z dozwolonych wartości, zostaje odrzucona z komunikatem, a nic się nie zmienia.

## Warto wiedzieć

- Wszystko jest zwykłym IFC, więc inne programy odczytują wartości: definicje są w zestawie właściwości `CadCraft_TagDefs` w projekcie, a wartości w zestawie właściwości `CadCraft_Tags` na każdym elemencie (jedna właściwość na etykietę). Długości są zapisywane w jednostce długości pliku.
- `IfcWall` w klasach etykiety obejmuje też ściany standardowe i ściany złożone z elementów.
- Zmiana nazwy etykiety zmienia jej wartości na każdym elemencie w tym samym kroku. Usunięcie etykiety usuwa tylko jej definicję: wartości już ustawione pozostają na elementach jako zwykłe właściwości. Najpierw je wyczyść (wybierz {{ui:Wyczyść}}), aby je zdjąć.
- Jeszcze nie zbudowano etykiet w aplikacji rysunkowej CadCraft (atrybutów bloków).
