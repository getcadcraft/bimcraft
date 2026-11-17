---
title: Umieszczanie i zamiana elementu biblioteki z wariantami
summary: Niektóre elementy biblioteki występują w kilku rozmiarach lub opcjach. Wybierz wariant przed umieszczeniem, sprawdź, jaki wariant ma umieszczony element, zamień go na inny jednym kliknięciem i zachowaj go po aktualizacji elementu.
keywords: wariant, warianty, rozmiary, opcje, konfiguracja, biblioteka, librarycraft, umieść, zamień, konfigurator, rodzina, typ, aktualizacja, porty
from: c05f0af3
---

## Co zrobisz

Umieść element biblioteki w potrzebnym rozmiarze lub opcji i zmień zdanie później, bez ponownego umieszczania. Element z wariantami to jeden element w bibliotece (jedna nazwa, jedna licencja, jedna wersja) z tabelą wariantów, w jakich występuje: na przykład płyta montażowa w rozmiarach Small, Medium i Large albo ta sama płyta bez otworów.

## Wybierz wariant i umieść go

1. Otwórz kartę {{ui:Biblioteka}} i kliknij kartę elementu.
2. Pod nazwą wybór {{ui:Wariant}} wyświetla każdy wariant z jego rozmiarem. Domyślny wariant elementu jest wybrany jako pierwszy.
3. Wybierz jeden. Rzut, rozmiar i wiersz bryły 3D podążają za Twoim wyborem.
4. Kliknij {{ui:Umieść w planie}} (lub {{ui:Umieść w modelu}} w widoku 3D) i umieść go jak każdy element: zob. [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library).

Umieszczony element jest nazwany od elementu i wariantu, np. *Mounting plate — Large*, dzięki czemu zestawienie {{ui:Wyposażenie}} i drzewo je odróżniają. Każdy wariant jest osobnym typem IFC: umieszczenie tego samego wariantu dwa razy współdzieli jeden typ, a inny wariant dostaje własny.

## Sprawdź, jaki wariant jest umieszczony

Wybierz element. W **Właściwościach** pole **Element biblioteki** ma wiersz **Wariant**. IFC zapisuje to w `CadCraft_LibraryItem`: `Variant` (identyfikator wariantu), `VariantName` i `VariantValues` (wartości opcji, jako tekst), aby inne programy mogły je odczytać.

## Zamień na inny wariant

1. Wybierz umieszczony element i kliknij {{ui:Zamień element…}} w polu **Element biblioteki**. Otworzy się karta {{ui:Biblioteka}}.
2. Na górze **Inne warianty elementu** *nazwa elementu* wyświetla każdy wariant z rozmiarem. Umieszczony wariant jest oznaczony i nie można go wybrać.
3. Kliknij {{ui:Zamień na …}} przy wariancie, który chcesz.

Element zachowuje swoje miejsce, obrót, kondygnację, numer pozycji, ilość i notatki; jego typ, kształt i dane zmieniają się na inny wariant. {{key:Mod+Z}} przywraca poprzedni. Nadal możesz zamiast tego wybrać dowolny inny element z listy poniżej, jak dotychczas: zob. [Zamiana umieszczonego elementu i aktualizacja elementów z biblioteki](topic:swap-and-update-library-items).

## Kopiowanie, wklejanie i aktualizacje

- Kopia umieszczonego wariantu jest tym samym wariantem: w tym modelu oraz w innym modelu otwartym w tej samej karcie przeglądarki, przez Kopiuj i Wklej.
- **Aktualizacje** zachowują wariant: jeśli nowsza wersja elementu nadal go ma, umieszczenie staje się tym wariantem nowej wersji. Jeśli nowa wersja go już nie ma, umieszczenie przyjmuje domyślny wariant elementu.

## Warto wiedzieć

- Tylko niektóre elementy biblioteki mają warianty. Karty tego nie pokazują; wybór {{ui:Wariant}} widzisz, gdy otworzysz element.
- Element może mieć **porty** (punkty połączeń dla rur i kanałów) dla każdego wariantu. Karta Biblioteki pokazuje, ile ich ma wariant. Przy umieszczaniu z karty Biblioteki porty **nie są jeszcze** zapisywane do IFC.
- Wariant bez bryły 3D jest umieszczany jako zastępcze pudełko, jak każdy symbol 2D.
- Rozmiary w wyborze są podane w milimetrach, tak jak zapisuje je biblioteka.
