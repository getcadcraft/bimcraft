---
title: Zsumuj ilości, wypisz elementy i sporządź zestawienie przestrzeni
summary: Policz elementy i zsumuj ich długości, pola, objętości lub dowolną właściwość liczbową, pogrupowane według dowolnej właściwości; wypisz jeden wiersz na element albo sporządź zestawienie przestrzeni z ich polami i objętościami. Każde pobiera się jako CSV.
keywords: ilość, ilości, przedmiar, suma, sumy, zestawienie, wykaz ilości, boq, qto, csv, grupuj według, liczenie, długość, pole, objętość, przestrzenie, pomieszczenia, zestawienie pomieszczeń, zestawienie pól, lista elementów
from: e2e7210c
---

## Co zrobisz

Wyciągniesz sumy z modelu: długości ścian na kondygnację, liczbę drzwi według typu, objętość płyt według materiału, koszt każdej strefy.

## Kroki

1. Otwórz model IFC.
2. Otwórz {{ui:Sumy ilości}} w lewym panelu.
3. W {{ui:Zakres}} wybierz {{ui:Każdy element}} albo tylko wybrane.
4. Pod {{ui:Grupuj według}} wybierz właściwość, na przykład {{ui:Klasa}}. Kliknij {{ui:Dodaj grupę}}, aby podzielić dalej, do trzech poziomów, na przykład według {{ui:Kondygnacja}}.
5. Pod {{ui:Zsumuj}} zaznacz liczby do zsumowania. Zestawy ilości modelu są zaznaczone od początku.
6. Kliknij {{ui:Pobierz CSV}}, aby otworzyć tabelę w arkuszu kalkulacyjnym.

## Co powinieneś zobaczyć

- Wiersz na grupę z liczbą elementów i każdą sumą oraz wiersz łączny.
- Elementy bez wartości są liczone, ale nic nie dodają. Wtedy CSV dodaje kolumnę „pominięte” obok sumy, abyś widział, ile ich jest.
- Liczby są w jednostkach pliku, tak jak plik je zapisuje, często w milimetrach dla długości.

## Jeden wiersz na element albo przestrzenie

Zmień {{ui:Pokaż}}:

- **Jeden wiersz na element**: każdy element w osobnym wierszu, z właściwościami pod {{ui:Kolumny}} i liczbami pod {{ui:Zsumuj}}. CSV zaczyna się od GlobalId każdego elementu. Kliknij pierwszą wartość w wierszu, aby wybrać ten element.
- **Przestrzenie**: każde pomieszczenie z numerem, nazwą, kondygnacją, polem i objętością oraz ich sumy. Pola i objętości pochodzą z ilości przestrzeni, tak jak plik je podaje. Gdy pliku ich nie ma, są mierzone z kształtu przestrzeni w m² i m³ i pokazywane kursywą; CSV mówi, które jest które.

## Dalej

- [Znajdowanie elementów według klasy, nazwy lub właściwości](topic:find)
- [Kolorowanie elementów według właściwości](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Wybierz **Infrastruktura (IFC 4.3)** na liście widoków, aby zobaczyć drogi, linie kolejowe, mosty i obiekty morskie zsumowane według klasy i typu, z długością, polem i objętością, które podaje sam plik. Ilość, której plik nie podaje, zostaje pusta i nigdy nie jest wyliczana. **Wyślij ilości infrastruktury do TakeoffCraft** zapisuje plik `.quantities.json`, który TakeoffCraft otwiera jako ilości z typem.
