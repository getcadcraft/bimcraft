---
title: Warianty bryły obok siebie
summary: Przechowuj kilka wariantów bryły w tym samym modelu, ustaw jeden jako bieżący, sprawdź go względem linii zabudowy i służebności działki, pobierz bryły z ModelCraft i opracuj wybrany wariant w ściany i stropy.
keywords: bryła, masa, wariant, warianty, zestaw wariantów, schemat, koncepcja, projekt koncepcyjny, etap 2, alternatywy, porównanie wariantów, bieżący wariant, bryła budynku, push pull, modelcraft, civilcraft, powierzchnia brutto, rzut, kubatura, opracowanie bryły, służebność, linia zabudowy, odsunięcie od granicy
from: 69a01459
---

## Czego dokonasz

Przechowuj warianty bryły koncepcji w jednym modelu, zamiast w osobnych plikach: kilka brył budynku obok siebie, jeden z nich jest **bieżącym wariantem**, a pozostałe zachowane do porównania.

Wariant bryły to bryła budynku: zarys podniesiony do wysokości, z określoną liczbą kondygnacji. To nie są jeszcze ściany. Możesz zachować dowolnie wiele, grupując je w **zestawy wariantów** (warianty jednego zestawu są względem siebie alternatywami).

## Zachowaj wariant

1. Otwórz {{ui:Program pomieszczeń do bryły}}, wpisz program pomieszczeń i zarys, i wybierz {{ui:Znajdź opcje}}.
2. Wybierz jeden z wymienionych wariantów.
3. W sekcji {{ui:Warianty bryły w modelu}} wpisz nazwę dla {{ui:Zestaw wariantów}}, jeśli chcesz, i wybierz {{ui:Zachowaj wybrany wariant}}.

Wariant pojawia się w modelu jako bryła budynku i na liście, z kondygnacjami, rzutem, powierzchnią brutto i kubaturą. Nic nie jest budowane. Kolejny zachowujesz tak samo.

Pierwszy wariant zestawu jest jego bieżącym wariantem. Każdy krok to jeden krok cofnięcia.

## Bieżący wariant

W każdym zestawie jeden wariant jest bieżący. Oznacza to dwie rzeczy:

- **Jego kondygnacje liczą się jako powierzchnie użytkowe budynku.** Bieżący wariant ma jedną przestrzeń na kondygnację, niosącą powierzchnię brutto tej kondygnacji, więc wszystko, co odczytuje powierzchnie kondygnacji, widzi obowiązujący wariant i żaden inny.
- **Jest sprawdzany względem działki.** Jeśli wykracza poza granicę działki, za linię zabudowy lub na służebność, w {{ui:Problemy}} pojawia się ostrzeżenie z jego nazwą. To tylko ostrzeżenie: nic nie jest odrzucane. Warianty niebieżące nie są sprawdzane.

Wybierz {{ui:Ustaw jako bieżący}} na innym wariancie, aby go zmienić.

{{ui:Ukryj warianty niebieżące}} ukrywa pozostałe w widoku 3D. Dotyczy to tylko tej przeglądarki i nie jest zapisywane w pliku.

## Bryły z ModelCraft

W ModelCraft {{ui:Eksportuj}} › {{ui:Bryła do BimCraft…}} wysyła każdą grupę lub komponent jako jeden wariant. BimCraft otwiera plik z wymienionymi wariantami.

Aby wprowadzić je do już otwartego modelu, wybierz {{ui:Dodaj warianty bryły z pliku}} i wskaż plik `.ifc`. Jego bryły wchodzą jako warianty jednego zestawu, w jednym kroku cofnięcia, stojąc tam, gdzie je modelowano. Plik brył budynku z CivilCraft działa tak samo.

Wariant oznaczony „(kształt uproszczony)” nie był w ModelCraft prostą pionową bryłą (cofa się, pochyla albo nie jest zamknięty). Tutaj jego bryła to zarys podstawy podniesiony do wysokości; jego powierzchnie kondygnacji i kubatura są mierzone z samej bryły.

## Opracuj wybrany wariant

Wybierz {{ui:Opracuj}} na wariancie. Staje się on poziomami (dodanymi aż do jego liczby kondygnacji), ścianami wokół zarysu na każdej kondygnacji i płytą stropową na każdej z nich, w jednym kroku cofnięcia. Wariant znika z listy; pozostałe warianty zostają bez zmian. Dachu jeszcze nie ma.

{{ui:Zmień nazwę}} zmienia nazwę wariantu, {{ui:Usuń}} wyjmuje go z modelu. Usunięcie bieżącego wariantu czyni bieżącym pierwszy z pozostałych wariantów zestawu.

## Co powinieneś zobaczyć

- Każdy zachowany wariant jako bryłę w widoku 3D i wiersz na liście.
- (bieżący) obok jednego wariantu w każdym zestawie.
- Ostrzeżenie w {{ui:Problemy}}, gdy bieżący wariant przekracza granicę działki, linię zabudowy lub służebność.

## Warto wiedzieć

- W pliku IFC wariant to building element proxy z zestawem właściwości `CadCraft_SiteMass` (jego zestaw wariantów, nazwa wariantu i to, czy jest bieżący, znajdują się w tym zestawie). Kondygnacje bieżącego wariantu są przestrzeniami typu `MassingFloor`. Inne programy odczytują proxy jako ogólny element.
- Zachowanie wariantu nigdy nie dodaje poziomów; opracowanie tak.
- Asystent może wyświetlić zachowane warianty, zachować jeden, ustawić bieżący, zmienić nazwę, opracować lub usunąć wariant.
