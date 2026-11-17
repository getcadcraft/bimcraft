---
title: Sprawdź folder pod kątem uszkodzonych kopii, brakujących powiązań i pozostałości
summary: Użyj raportu folderu, aby znaleźć obcięte pliki modeli, wybrać najnowszą kompletną kopię zapasową, zobaczyć, których powiązań brakuje, i wykryć pliki blokad oraz tymczasowe.
keywords: sprawdzanie stanu, uszkodzony, nieprawidłowy, niekompletny, obcięty, kopia zapasowa, brakujące powiązania, xref brakujący, audyt, pozostałości, pliki blokad, dwl, bak, przekazanie
from: 3025a539
---

## Co zrobisz

Sprawdź folder projektu przed jego przekazaniem lub przed rozpoczęciem pracy: czy każdy model jest kompletny, która kopia zapasowa jest ostatnią dobrą i czy wszystkie dołączone pliki są na miejscu?

## Kroki: uszkodzone kopie

1. Otwórz folder projektu. Zobacz [Otwórz cały folder projektu](topic:open-project-folder).
2. Przeczytaj uwagi pod nazwą folderu. „2 pliki są niekompletne lub nieczytelne. Zobacz modele poniżej.” oznacza, że jest coś do sprawdzenia.
3. W **Modele** spójrz na kolumnę **Stan**. **Kompletny** oznacza, że wszystko jest w porządku. Bursztynowe „1 niekompletny” oznacza, że jedna kopia jest uszkodzona, ale inna jest sprawna. Czerwony **Niekompletny** oznacza, że nie znaleziono żadnej sprawnej kopii.
4. Otwórz **Wszystkie … kopie** pod modelem z problemem. Lista zawiera główny plik i każdą ponumerowaną kopię zapasową, od najnowszej, z rozmiarem, datą i stanem.
5. Przeczytaj uwagę nad listą, na przykład „Tower.rvt jest niekompletny (183.2 MB, powinien mieć co najmniej 214.0 MB). Karta pokazuje najnowszą kompletną kopię, Tower.0012.rvt (Mar 3, 2025).”
6. Wybierz kopię, którą chcesz otworzyć. Można wybrać tylko kompletne kopie.

## Co robi sprawdzanie stanu

Każda kopia każdego modelu przechodzi szybkie sprawdzenie nagłówka, po 512 bajtów, więc nawet folder z dużymi modelami sprawdza się w sekundy. Plik, którego własny indeks wskazuje za jego koniec, został obcięty podczas kopiowania, wysyłania lub synchronizacji. Plik w dysku w chmurze, który wciąż jest „tylko online”, wygląda tak samo.

Karta każdego modelu jest odczytywana z pliku głównego, gdy jest sprawny, a z najnowszej sprawnej kopii, gdy nie jest.

## Kroki: brakujące powiązania

1. Poszukaj uwagi „*n* dołączonych plików nie ma w tym folderze.” pod nazwą folderu.
2. Przewiń do **Dołączone i powiązane pliki**. Brakujące powiązania są wymienione na początku.
3. Przeczytaj kolumnę **Gdzie** dla każdego powiązania:
   - **W tym folderze**: znaleziono pod ścieżką zapisaną przez model.
   - **Znaleziono o tej samej nazwie**: plik o tej samej nazwie jest gdzie indziej w folderze. Sprawdź, czy to właściwy.
   - **Plik biblioteki**: tabela kodów keynote lub zestawów. Te pliki są dostarczane z programem na każdym komputerze, więc nie należy się ich spodziewać w folderze.
   - **Nie ma go w tym folderze**: nie znaleziono w całym folderze.
4. Przeczytaj **Używany przez**, aby zobaczyć, które modele łączą się z każdym plikiem.

BimCraft szuka każdego powiązania najpierw po ścieżce względnej, potem po końcu zapisanej ścieżki (więc `\\server\jobs\Tower\Cad\X-Refs\site.dwg` zostanie znalezione jako `X-Refs/site.dwg`, gdy wybrano folder `Cad`), a dopiero potem po nazwie pliku w całym folderze.

## Kroki: pozostałości

1. Przewiń do **Odłożone** na końcu raportu.
2. Przeczytaj trzy linie, które mogą się pojawić:
   - Foldery pomocnicze (`*_backup`, `*_log`, `Revit_temp`): nie są odczytywane.
   - Pozostałości blokad, dzienników i kopii: pliki takie jak `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Zostają po programach, które się zawiesiły albo były otwarte, gdy folder był kopiowany. Zwykle można je bezpiecznie usunąć, gdy nikt nie ma ich otwartych.
   - Inne pliki: wszystko, czego BimCraft nie odczytuje.

## Częste błędy

- **Usunięcie uszkodzonego pliku głównego przed zapisaniem dobrej kopii.** Najpierw skopiuj najnowszą kompletną kopię zapasową, dopiero potem zajmij się uszkodzonym plikiem.
- **Ślepe ufanie „Znaleziono o tej samej nazwie”.** Dwa różne rysunki mogą mieć tę samą nazwę. W razie wątpliwości otwórz oba.
- **Uznawanie brakującego pliku biblioteki za problem.** Tabele kodów keynote i zestawów są przechowywane razem z programem na każdym komputerze.
- **Liczba plików różni się między przeglądarkami.** W Firefox i Safari {{ui:Open a folder}} przekazuje każdy plik, także te w folderach pomocniczych, więc liczba (i limit 20 000 plików) je uwzględnia. Przeciągnięcie folderu pomija je, tak jak w Chrome i Edge. Raport poza tym jest taki sam.
