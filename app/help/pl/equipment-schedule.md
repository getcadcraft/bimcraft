---
title: Utwórz zestawienie wyposażenia i wyeksportuj CSV
summary: Zamień znaczniki pozycji na rysunku gastronomicznym w zestawienie wyposażenia, filtruj je, przejdź do każdej pozycji na jej arkuszu i pobierz zestawienie jako CSV.
keywords: wyposażenie, zestawienie, gastronomia, kuchnia, znaczniki pozycji, kcl, atrybuty, bom, zestawienie materiałów, csv, arkusz kalkulacyjny, eksport, wyodrębnianie danych
from: e3faa1c8
---

## Co zrobisz

Odczytasz listę wyposażenia z rysunku kuchni lub gastronomii, sprawdzisz ją, znajdziesz każdą pozycję na planie i pobierzesz ją jako plik arkusza kalkulacyjnego.

To działa na rysunkach, których znaczniki wyposażenia niosą dane jako atrybuty bloku, tak jak w bibliotekach projektowania kuchni, na przykład KCL: każdy znacznik zawiera numer pozycji (`KCL-ITEM`), ilość, kategorię, producenta, model, dane elektryczne i hydrauliczne oraz uwagi. Inne rysunki nie mają karty {{ui:Wyposażenie}}.

## Kroki

1. Otwórz rysunek, najlepiej z jego folderu projektu, aby załadowały się też jego dołączone rysunki.
2. Kliknij kartę {{ui:Wyposażenie}} nad rysunkiem. Jej etykieta pokazuje, ile pozycji znajduje się na arkuszach, na przykład "Wyposażenie (88)".
3. Przeczytaj zestawienie: **Pozycja**, **Ilość**, **Wyposażenie**, **Producent**, **Model**, **Elektryka**, **Hydraulika** i **Gdzie**.
4. Wybierz, co wypisać w menu nad tabelą: **Wszystkie arkusze**, jeden arkusz, **Na żadnym arkuszu** lub **Wszystko oznaczone w rysunku**. Każdy wybór pokazuje swoją liczbę.
5. Wpisz w polu filtra ("Filtr: kategoria, producent, model…"), aby zawęzić listę, na przykład `lodówka` albo `208`.
6. Kliknij nazwę arkusza w kolumnie **Gdzie** przy pozycji.
7. Spójrz na rysunek: BimCraft przełącza się na ten arkusz, powiększa pozycję i rysuje wokół niej pierścień. Wiersz stanu mówi: "Pozycja *n*, *category* jest obrysowana na arkuszu *sheet*."
8. Kliknij {{ui:Wyposażenie}}, aby wrócić do zestawienia.
9. Kliknij {{ui:Pobierz CSV}}.

## Czego się spodziewać

- Plik o nazwie "*drawing name* equipment.csv" (z nazwą arkusza w nawiasach, gdy wypisujesz jeden arkusz) w folderze pobranych. Otwiera się w Excelu, Numbers, LibreOffice lub Arkuszach Google.
- Wiersz stanu: "Pobrano *file name* (*n* pozycji)."

CSV ma te kolumny: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (liczba znaczników). Pobierane są dokładnie te wiersze, które widać w tabeli, po zastosowaniu menu i filtra.

## Jak zbudowane jest zestawienie

- Jest odczytywane z **samych znaczników**, a nie z tabeli zestawienia narysowanej na arkuszu. Notatka nad tabelą mówi, ile znaczników odczytano.
- Jeden wiersz to jeden numer pozycji z jednym zestawem danych. Jego ilość to **suma** jego znaczników, tak jak liczy wydrukowane zestawienie: półki oznaczone "5" w jednym miejscu i "3" w innym dają 8, pokazane jako "5 + 3".
- **Gdzie** wymienia arkusze, na których widać każdą pozycję, ustalone na podstawie tego, co pokazują okna widokowe arkuszy, czyli to, co się drukuje. "Tylko model" oznacza, że żaden arkusz jej nie pokazuje.
- **Numer użyty dwukrotnie** oznacza jeden numer pozycji przypisany do dwóch różnych urządzeń. Wiersz ma bursztynowy znacznik.
- Znaczniki, których żaden arkusz nie pokazuje, są trzymane osobno pod **Na żadnym arkuszu**. Często pozostają po wcześniejszych planach lub innych zleceniach i nigdy nie są mieszane z **Wszystkie arkusze**.
- **Elektryka** pokazuje ampery, kW, HP, wolty, fazę, przyłącze i wtyczkę tak, jak są oznaczone. **Hydraulika** pokazuje rozmiary przyłączy: CW zimna woda, HW ciepła woda, DD odpływ bezpośredni, ID odpływ pośredni i gaz. Pozostałe pola znacznika nie są jeszcze pokazywane.

## Częste błędy

- **Brak karty {{ui:Wyposażenie}}.** Rysunek nie ma znaczników `KCL-ITEM` albo jego wyposażenie jest narysowane bez danych. Nie ma nic do odczytania.
- **Liczby różnią się od wydrukowanego zestawienia.** Wydrukowane zestawienie może zawierać zapasowe numery lub krótsze nazwy niż znaczniki. Co do tego, co jest umieszczone, ufaj znacznikom; różnice sprawdź z projektantem.
- **Po otwarciu CSV widać dziwne znaki.** Plik jest w UTF-8. Otwórz go poleceniem importu w arkuszu i wybierz UTF-8, jeśli program o to zapyta.
- **Komórka zaczyna się od apostrofu.** Wartości zaczynające się od `=`, `+`, `-` lub `@` dostają wiodący `'`, aby arkusze nie uruchamiały ich jako formuł.
- **{{key:F}} i {{key:P}} nie działają.** Działają na rysunku, a nie na zestawieniu. Najpierw kliknij zakładkę arkusza.
