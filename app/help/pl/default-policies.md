---
title: "Domyślne zasady: ustaw, od czego zaczyna się nowy budynek"
summary: "Raz określ, jaki typ ściany, poziomy, pierwszy arkusz, etykiety LOD, jednostki i narzędzie ma nowy budynek, osobno dla projektów metrycznych i imperialnych, i udostępniaj zasady w biurze jako mały plik."
keywords: domyślne, ustawienia domyślne, domyślne zasady, zasada, standard biura, domyślne ustawienia biura, szablon, nowy budynek, pierwszy typ ściany, ściana metryczna, murowana, LOD, poziom rozwinięcia, pierwszy arkusz, papier, skala, poziomy, wysokość kondygnacji, nazwy poziomów, narzędzie ściany, jednostki, udostępnij, eksport, import, json
from: 42379aa5
---

## Co zrobisz

Powiedz BimCraft, od czego ma zaczynać się nowy budynek, aby nikt w biurze nie zmieniał tych samych rzeczy za każdym razem. To dodatek: jest wyłączony, dopóki go nie włączysz. Zasada, której nie ustawisz, zostawia domyślną wartość BimCraft bez zmian.

:::note
Te ustawienia dotyczą **nowych** budynków i **nowych** elementów. Projekt, który już zacząłeś, nie zmienia się.
:::

## Kroki

1. Otwórz Ustawienia, przejdź do {{ui:Dodatki}} i włącz {{ui:Domyślne zasady}}.
2. W Ustawieniach otwórz kartę **BimCraft** i wybierz {{ui:Domyślne zasady}} na liście po lewej.
3. Ustaw zasady, które chcesz. Każda zaczyna od **własnej wartości BimCraft**, z jej opisem w nawiasie. Zasada z polami **Metryczne** i **Imperialne** przyjmuje jedną wartość dla każdego rodzaju projektu. Wypełnij tylko te pola, których potrzebujesz.
4. Nie ma przycisku Zapisz: każda zmiana zapisuje się od razu. Wartość, której nie da się użyć, zostaje odrzucona z komunikatem, a stara wartość pozostaje.
5. Kliknij {{ui:Nowy budynek}}. Okno dialogowe wypełnia się z twoich zasad, a przy każdej wartości ustawionej przez zasadę pojawia się napis **z twoich Domyślnych zasad**. Każdą z nich możesz nadal zmienić przed kliknięciem {{ui:Utwórz}}.

## Zasady

- **Jednostki nowego budynku**: jednostki przełączają się na tę wartość po kliknięciu Utwórz.
- **Liczba poziomów**, **Nazwy poziomów** i **Wysokość poziomu**. W nazwie `{n}` liczy 1, 2, 3; `{n0}` liczy 0, 1, 2; `{nn}` i `{nn0}` robią to samo na dwóch cyfrach. Więc `Floor {nn0}` daje Floor 00, Floor 01, Floor 02.
- **Pierwszy typ ściany**: to, co narzędzie Ściana rysuje najpierw. Biuro metryczne może zacząć od Exterior masonry 300 mm, a projekty imperialne zachowują Exterior 2×6.
- **Etykieta LOD na startowych typach ścian**: poziom rozwinięcia (LOD 100 do 500), jaki pokazują dziewięć startowych typów wszędzie tam, gdzie typ jest wymieniony. Zobacz [Budowanie zestawów ścian](topic:wall-assemblies).
- **LOD nowo utworzonego typu ściany**: etykieta, jaką nowy typ dostaje w edytorze typów. Możesz ją tam zmienić.
- **Pierwszy arkusz**: jego papier, skala, numer arkusza i nazwa (użyj `{level}` dla nazwy najniższego poziomu) albo brak pierwszego arkusza.
- **Rozmiary adnotacji na papierze** (Ustawienia › Ogólne › Domyślne zasady): wysokości biura, w milimetrach tak, jak wydrukowane, dla notatek, tekstu wymiarów, znaczników, nazw pomieszczeń, liter bąbelków siatki, tytułów widoków i tekstu zestawień. Nowy budynek przyjmuje je po kliknięciu Utwórz i zachowuje w swoim pliku. Zobacz [Rysuj w pełnym rozmiarze, adnotuj wg skali](topic:annotation-sizes).
- **Narzędzie aktywne po Utwórz**: Zaznacz, tak jak robi BimCraft sam, albo Ściana, aby dwa pierwsze kliknięcia na planie od razu rysowały ścianę.

## Układ zestawień: standard biura

W **Ustawienia › Ogólne › Domyślne zasady**, w sekcji **Układ zestawienia (standard biura)**, ustaw, jak grupuje się każde zestawienie, czy ma sumy częściowe i sumę końcową, jego tytuł oraz wielkość liter nagłówków kolumn. Każde zestawienie, które nie podaje własnych, przyjmuje te ustawienia, bez względu na to, kto je ustawił. Zobacz [Układ, zapis i eksport zestawienia](topic:schedule-layouts).

## Udostępnij w biurze

1. W Ustawieniach otwórz kartę **Ogólne** i wybierz {{ui:Domyślne zasady}}.
2. Wpisz **Nazwę biura**, jeśli chcesz. Jest zapisywana w pliku.
3. Kliknij {{ui:Zapisz do pliku}}. Dostajesz mały plik kończący się na `.ccdefaults.json`.
4. Na innym komputerze włącz dodatek, otwórz to samo miejsce i kliknij {{ui:Wczytaj z pliku}}. Zasady z pliku zastępują zasady na tym komputerze.

Karta Ogólne ma też **System jednostek nowego projektu**, który obowiązuje w każdej aplikacji z tym dodatkiem, oraz {{ui:Zresetuj wszystkie zasady}}. {{ui:Przywróć domyślne ustawienia BimCraft}} na karcie BimCraft czyści tylko ustawienia BimCraft.

## Dobrze wiedzieć

- Plik jest zwykłym, otwartym JSON-em: lista nazw zasad i wartości. Zasada, której ta wersja nie zna, zostaje pominięta i wymieniona w komunikacie. Reszta się wczytuje.
- Zasady są zachowywane w tej przeglądarce, dla każdej aplikacji CadCraft na tym komputerze. Nie są zapisywane w pliku budynku i nie synchronizują się między komputerami: użyj pliku.
- Etykieta LOD na startowym typie pochodzi z zasady na tym komputerze. Typ, który tworzysz jako kopię startowego, niesie swoją etykietę w pliku budynku.
- BimCraft nie ma ustawienia precyzji, więc nie ma tu zasady precyzji.
- Budynek zaczęty z szablonu przejmuje własne poziomy i arkusze szablonu. Zasada typu ściany i jednostek nadal obowiązuje.
- Wyłącz dodatek, a wszystko wróci do ustawień własnych BimCraft. Twoje zasady zostają zachowane na wypadek ponownego włączenia.
