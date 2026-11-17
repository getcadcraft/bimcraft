---
title: Zmiana właściwości typu dla każdego elementu danego typu
summary: Odróżnij właściwości typu od właściwości egzemplarza, zmień wartość na typie, aby każdy element za nią podążył, i sprawdź, czy edycja jednego elementu pozostaje jego własna.
keywords: typ, egzemplarz, właściwości typu, typ rodziny, współdzielone, kopiowanie przy zapisie, wszystkie elementy, zbiorcza edycja, producent, model
from: bffd8789
---

## Co zrobisz

Ustawisz producenta na typie drzwi, aby każde drzwi tego typu go pokazywały, a potem nadasz jednym drzwiom własną klasę ogniową, nie dotykając pozostałych. Pokazuje to różnicę między właściwościami typu a właściwościami egzemplarza w BimCraft.

## Typ czy egzemplarz?

- **Egzemplarz** należy do jednego elementu: jego oznaczenie, znak, pomieszczenie, własna klasa ogniowa.
- **Typ** należy do typu, który dzieli wiele elementów: producent, model, szerokość typu drzwi.

W panelu {{ui:Właściwości}} zestawy pochodzące z typu mają po nazwie " (type)" i wiersz „Właściwość typu: zmiana tutaj dotyczy każdego elementu tego typu.”. Każdy inny zestaw należy do samego elementu. **Typ** w pierwszym bloku pokazuje nazwę typu.

## Kroki: zmiana typu

1. Otwórz model IFC i kliknij drzwi.
2. Zanotuj ich **Typ** w pierwszym bloku panelu {{ui:Właściwości}}, na przykład "Single-Flush 900 x 2100".
3. Przewiń do zestawu, którego nazwa kończy się na "(type)".
4. Kliknij wartość, którą chcesz zmienić, na przykład **Manufacturer**.
5. Wpisz nową wartość i naciśnij {{key:Enter}}.
6. Zajrzyj na listę {{ui:Zmiany}}: wpis kończy się na "(type)".
7. Kliknij inne drzwi tego samego typu.
8. Sprawdź tę samą wartość: pokazuje również nową wartość.

## Kroki: zmiana tylko jednego elementu

1. Kliknij jedne drzwi.
2. Otwórz zestaw, którego nazwa nie zawiera "(type)", na przykład `Pset_DoorCommon`.
3. Kliknij wartość, na przykład **FireRating**, wpisz nową wartość i naciśnij {{key:Enter}}.
4. Kliknij sąsiednie drzwi tego samego typu.
5. Sprawdź tę samą wartość: nadal pokazuje starą.

Nawet jeśli eksporter współdzielił ten zestaw właściwości między oboma drzwiami, BimCraft przed zmianą dał pierwszym drzwiom własną kopię. Zob. [Dlaczego edycja zmienia tylko jeden element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Zapis

1. Kliknij {{ui:Zapisz jako IFC}} lub naciśnij {{key:Mod+S}}.
2. Otwórz zapisaną kopię w BimCraft albo w dowolnej przeglądarce plików IFC, aby sprawdzić obie zmiany.

## Typowe błędy

- **Nie każdy model ma typy.** Niektóre eksportery nie zapisują obiektów typów albo wrzucają wszystko na egzemplarz. Wtedy nie ma zestawów "(type)" i każdy element trzeba zmienić osobno.
- **Ta sama wartość występuje w zestawie typu i w zestawie egzemplarza.** Niektóre eksportery zapisują parametr w obu miejscach. Inne programy mogą odczytać którekolwiek z nich; jeśli mają się zgadzać, zmień oba.
- **Oczekiwanie, że wybierzesz „wszystkie drzwi tego typu” i zmienisz je razem.** W tej wersji nie ma zaznaczania wielu elementów. Właściwość typu to sposób na zmianę wielu elementów naraz.
