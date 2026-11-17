---
title: Pola panelu Właściwości
summary: Co oznacza każde pole w panelu Właściwości oraz w panelach Plik, Rysunek i Folder i które z nich można zmienić.
keywords: właściwości, pola, atrybuty, globalid, guid, kopiuj, kopiuj wartość, kopiuj wszystko, csv, schowek, numer seryjny, znacznik, typ obiektu, linia, express id, zestaw właściwości, pset, ilości, schemat, panel pliku
from: fe55b435
---

## Element IFC

Górna część panelu {{ui:Właściwości}} pokazuje rodzaj elementu bez przedrostka „Ifc” (na przykład „Drzwi”, „WallStandardCase”, „FurnishingElement”) oraz jego nazwę albo „Bez nazwy”.

| Pole | Znaczenie | Edytowalne |
|---|---|---|
| Nazwa | Nazwa elementu, często nazwa rodziny i typu z eksportera | Tak |
| Typ | Nazwa typu elementu, gdy go ma | Nie |
| Typ obiektu | Wolny opis typu, który wypełniają niektórzy eksporterzy | Tak |
| Znacznik | Znacznik lub oznaczenie elementu; wielu eksporterów wpisuje tu identyfikator elementu | Tak |
| Opis | Wolny tekst | Tak |
| GlobalId | Stały 22-znakowy identyfikator IFC elementu, taki sam w każdym eksporcie tego samego elementu | Nie |
| Wiersz | Numer wiersza elementu (`#1234`) w tym pliku IFC. Zmienia się między eksportami | Nie |

Poniżej znajdują się **zestawy właściwości**, posortowane według nazwy:

- Każdy zestaw otwiera się i zamyka po kliknięciu jego nazwy. Pierwsze trzy są otwarte.
- Zestaw oznaczony „(typ)” należy do typu elementu: „Właściwość typu: zmiana tutaj dotyczy każdego elementu tego typu”.
- Zestawy ilości (długości, pola, objętości, liczby, masy) są tylko do odczytu.
- Listy i wartości wyliczeniowe są pokazywane, tylko do odczytu.
- Wartości Tak/Nie pokazują się jako **Tak** lub **Nie**.
- Liczby są zaokrąglane do czterech miejsc po przecinku przy wyświetlaniu. Długości (właściwość długości albo długość ilości) pokazują się w {{ui:Jednostki}} wybranych na pasku narzędzi, z jednostką obok. Nową wartość możesz wpisać w tej jednostce albo z inną oznaczeniem jednostki (2.4 m, 8'-0"): BimCraft zapisuje z powrotem liczbę z pliku. Inne liczby pokazują się tak, jak są w pliku.
- Pusta wartość pokazuje się jako *pusta*. Zmieniona wartość jest pogrubiona i ma niebieski pasek obok.

## Kopiowanie wartości

Każda wartość w {{ui:Właściwości}} ma mały przycisk kopiowania obok: kliknij go, aby umieścić wartość w schowku dokładnie tak, jak jest pokazana, na przykład GlobalId, numer seryjny lub dowolną wartość zestawu właściwości. Kopiowanie nigdy nie rozpoczyna edycji.

Na górze {{ui:Kopiuj wszystko}} kopiuje wszystkie wartości elementu jako tekst, zestaw po zestawie, a {{ui:Kopiuj jako CSV}} kopiuje je jako wiersze grupy, właściwości i wartości do wklejenia do arkusza kalkulacyjnego. Puste wartości są zachowane, aby każde pole miało wiersz. Działa to tak samo dla elementu z innego otwartego modelu; gdy otwartych jest więcej modeli, CSV zaczyna się kolumną Model z nazwą pliku.

## Panel Plik (IFC)

| Pole | Znaczenie |
|---|---|
| Plik, Rozmiar | Plik, który otworzyłeś |
| Schemat | Wersja IFC, na przykład IFC2X3 lub IFC4 |
| Projekt | Nazwa projektu i jego pełna nazwa |
| Faza | Faza projektu, jeśli eksporter ją zapisał |
| Wyeksportowano z | Program eksportujący, z nagłówka pliku |
| Autor | Autor z nagłówka pliku |
| Wyeksportowano | Data i godzina z nagłówka pliku |
| Elementy | Ile elementów z kształtem zostało narysowanych |
| Trójkąty | Z ilu trójkątów składają się ich kształty; miara tego, jak ciężki jest model |

## Panel Plik (projekt i pliki rodzin)

| Pole | Znaczenie |
|---|---|
| Rodzaj | Projekt, Szablon projektu, Rodzina lub Szablon rodziny |
| Zapisano w | Wydanie, które ostatnio zapisało plik |
| Kompilacja | Dokładna kompilacja tego wydania |
| Odczytano | Ile pliku odczytał BimCraft, z jego rozmiaru |

## Panel Rysunek (DWG i DXF)

| Pole | Znaczenie |
|---|---|
| Format | Wydanie, w którym zapisano rysunek, wraz z kodem formatu, na przykład AC1032 |
| Jednostki | Jednostki wstawiania rysunku, gdy są ustawione |
| Obiekty | Ile obiektów odczytano |
| Warstwy | Ile warstw |
| Arkusze | Ile arkuszy (układów) albo Brak |
| Rysunki dołączone | Ile z jego dołączonych rysunków znaleziono i wczytano |
| Wyposażenie | Ile oznaczonych elementów wyposażenia jest na arkuszach |

## Panel Folder

| Pole | Znaczenie |
|---|---|
| Folder, Pliki, Rozmiar | Otwarty folder, ile plików zawiera i ich łączny rozmiar |
| Modele | Pliki projektów i rodzin, każdy z jego kopiami zapasowymi liczonymi raz |
| Rysunki CAD, modele IFC | Ile jest każdego z nich |
| Problemy | Ile kopii modeli jest niekompletnych lub nieczytelnych, albo Brak |
