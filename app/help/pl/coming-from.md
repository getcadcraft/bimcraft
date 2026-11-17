---
title: Przejście z innych programów BIM i rysunkowych
summary: Jak nawyki z desktopowych programów BIM i przeglądania DWG odpowiadają BimCraft oraz różnice, na które ludzie się potykają.
keywords: przejście, migracja, znajomy, desktopowy BIM, rodzina, parametry, przeglądarka projektu, paleta właściwości, kostka widoku, xref, menedżer warstw, różnice, porównanie
from: 2de629af
---

Osoby znające Revit uznają większość BimCraft za znajomą w słowach, a nieznaną pod względem zakresu. Najważniejsza różnica: **ta wersja programu odczytuje i sprawdza modele oraz edytuje dane IFC. Jeszcze nie tworzy modeli jak Revit.** Nie można rysować ścian, umieszczać rodzin, tworzyć widoków ani arkuszy, ani zapisywać pliku projektu. Można natomiast otworzyć niemal dowolny plik budynku na każdym komputerze z przeglądarką, zobaczyć, co zawiera, sprawdzić cały folder projektu i poprawić dane w modelu IFC.

## Nawyki przeniesione

| Dotychczas | W BimCraft |
|---|---|
| Otwieranie `.rvt` w Revit, by zobaczyć model | BimCraft otwiera `.rvt` jako kartę pliku: wersję, informacje o projekcie, odwołania, podgląd. Model 3D eksportuj do IFC i otwórz ten plik. [Przeczytaj plik projektu lub rodziny](topic:read-rvt-file) |
| Sprawdzanie, w jakiej wersji zapisano plik, przed otwarciem | Karta podaje u góry „zapisano w Revit …”, bez aktualizacji ani zmiany pliku |
| Przeglądarka projektu | Brak przeglądarki widoków i arkuszy. Model IFC ma listy {{ui:Kondygnacje}} i {{ui:Elementy}}; rysunek ma karty arkuszy |
| Paleta właściwości | Panel {{ui:Właściwości}} po prawej stronie, dla klikniętego elementu. Zestawy właściwości IFC zamiast grup parametrów |
| Parametry wystąpienia i typu | Zestawy właściwości wystąpienia i zestawy oznaczone „(typ)”. Zmiana właściwości typu dotyczy każdego elementu tego typu, jak w Revit. [Zmień właściwość typu dla każdego elementu typu](topic:type-vs-instance) |
| Edycja typu | Brak okna dialogowego: kliknij wartość w zestawie „(typ)” i wpisz nową |
| Zaznaczanie wielu elementów, filtry, Zaznacz wszystkie wystąpienia | Jeden element naraz. Jeszcze nie zbudowano |
| Kostka widoku i koło nawigacyjne | Kostka widoku w prawym dolnym rogu, cztery przyciski ({{ui:Dopasuj}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Z boku}}) i swobodny obrót. Brak koła nawigacyjnego |
| Shift i przeciąganie środkowym przyciskiem, by obracać; środkowy przycisk, by przesuwać | Obrót lewym przyciskiem, przesuwanie prawym (albo {{key:Shift}} i przeciąganie), kółko przybliża. Styl menu {{ui:Wstążka BIM}} przełącza przesuwanie na środkowy przycisk, a obrót na {{key:Shift}} ze środkowym przyciskiem. [Menu, klawisze i mysz](topic:menus-keys-and-mouse) |
| Rzuty pięter, przekroje, pudełka przekroju | Jedna płaszczyzna {{ui:Przekrój}} naraz ({{key:X}}); brak pudełka przekroju i rzutów 2D. [Przetnij model IFC płaszczyzną przekroju](topic:section-plane) |
| Ukrywanie w widoku, izolacja, widoczność i grafika | Włączanie i wyłączanie {{ui:Kondygnacje}}, {{ui:Przestrzenie}} i {{ui:Krawędzie}}. Brak ukrywania pojedynczych elementów |
| Pomieszczenia | Przestrzenie IFC, początkowo ukryte. Kliknij {{ui:Przestrzenie}} |
| Zapisz, Zapisz jako, synchronizacja z plikiem centralnym | {{ui:Zapisz jako IFC}} pobiera nowy plik IFC. Oryginał się nie zmienia. Brak pliku centralnego i współdzielenia |
| Cofanie przez {{key:Mod+Z}} | Działa przy edycjach IFC do zapisu. [Zmień właściwości IFC i zapisz edytowaną kopię](topic:edit-ifc-properties) |
| Zarządzanie odwołaniami | Otwórz folder projektu: każde odwołanie jest sprawdzane i oznaczane **W tym folderze**, **Znaleziono tę samą nazwę**, **Plik z biblioteki** albo **Nie w tym folderze**. [Otwórz cały folder projektu](topic:open-project-folder) |
| Audyt albo otwieranie pliku, by sprawdzić, czy nie jest uszkodzony | Raport folderu sprawdza każdą kopię i kopię zapasową pod kątem ucięcia, w kilka sekund. [Sprawdź folder pod kątem uszkodzonych kopii](topic:check-folder-health) |
| Wybór właściwego pliku z bałaganiarskiego folderu | Pole {{ui:Zacznij tutaj}} podpowiada jeden plik wraz z uzasadnieniem |

Jeśli otwierasz modele głównie do sprawdzania, jak w programie do kontroli modeli lub przeglądania IFC, wybierz styl menu {{ui:Przeglądarka}}: narzędzia do przeglądania i sprawdzania są na pierwszym miejscu, a narzędzia budowania czekają w jednym menu. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).

## Z przeglądania plików DWG

Jeśli pliki DWG otwiera się w AutoCAD lub w przeglądarce DWG:

| Dotychczas | W BimCraft |
|---|---|
| Karty modelu i układu na dole | Karty nad rysunkiem: {{ui:Model}} i jedna na każdy arkusz |
| ZOOM Extents, dwukrotne kliknięcie kółka | Dwukrotne kliknięcie, {{key:F}} albo {{ui:Dopasuj}} |
| Przesuwanie środkowym przyciskiem | Przeciągnij dowolnym przyciskiem |
| Menedżer warstw | Lista {{ui:Warstwy}}: zaznacz, by pokazać, odznacz, by ukryć, {{ui:Włącz wszystkie}} i {{ui:Wyłącz wszystkie}} |
| Menedżer odwołań xref | **Rysunki dołączone** po prawej, ze statusem **Pokazany** albo **Nie znaleziono**, oraz {{ui:Dodaj rysunki dołączone…}} |
| Podgląd wydruku | {{ui:Widok wydruku}} albo {{key:P}}: czarno na białym z grubościami linii. Nie drukuje |
| Wyodrębnianie danych z atrybutów bloków | Karta {{ui:Wyposażenie}} dla oznaczonych rysunków gastronomicznych, z {{ui:Pobierz CSV}} |
| Mierzenie, rysowanie, edycja, zapisz jako | Brak w BimCraft. Aplikacja rysunkowa CadCraft rysuje i edytuje |

## Różnice, które sprawiają kłopot

- **Działa w przeglądarce, a przeglądarka dba o pliki.** BimCraft odczytuje tylko pliki i foldery, które mu wskazano: przez wybór albo przeciągnięcie. Sam nie otworzy pliku i nie nadpisze go. Każdy zapis to pobranie.
- **Nic nie jest wysyłane.** Słowo „Prześlij” w niektórych oknach folderów przeglądarek to słownictwo samej przeglądarki. Pliki pozostają na komputerze.
- **IFC to format modelu.** Plik projektu otwiera się jako karta, bo jego zawartość 3D nie jest udokumentowana. IFC jest drogą, którą modele trafiają do BimCraft.
- **Edycje kopiują dane przy zmianie.** Zmiana wartości jednego elementu nigdy nie zmienia sąsiadów, nawet gdy eksporter współdzielił tę wartość między nimi. Właściwości typu są świadomym wyjątkiem.
- **Brak projektu, brak widoków.** BimCraft pokazuje jeden plik naraz i nie pamięta go po zamknięciu karty, poza nazwami ostatnich folderów w Chrome i Edge.
- **Klawisze Mac.** Tam, gdzie skróty Revit w Windows używają {{key:Ctrl}}, skróty BimCraft używają {{key:Mod}}: na Macu to Command.
- **Nawyki z myszą.** Obrót to lewy przycisk, a nie {{key:Shift}} i środkowy, chyba że wybrano styl menu {{ui:Wstążka BIM}} albo ustawiono przyciski samodzielnie w [Menu, klawisze i mysz](topic:menus-keys-and-mouse).

Zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet), żeby dowiedzieć się, czego używać zamiast tego dziś.
