---
title: Pliki, które BimCraft otwiera i zapisuje
summary: Każdy format, który BimCraft otwiera, co zachowuje, co zapisuje, dokąd trafiają zapisane pliki i co zmienia się między przeglądarkami oraz w trybie offline.
keywords: formaty, otwórz, zapisz, eksport, pobieranie, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, przesyłanie, prywatność, rozmiar pliku
from: a1f0161b
---

BimCraft czyta pliki na Twoim komputerze, w karcie przeglądarki. **Nic nie jest przesyłane** do CadCraft ani nikogo innego. Przy zapisie BimCraft przekazuje przeglądarce nowy plik do pobrania; nigdy nie nadpisuje otwartego pliku.

## Co otwiera

| Format | Rozszerzenia | Co dostajesz |
|---|---|---|
| IFC | `.ifc` | Model w 3D, kondygnacje, liczby elementów i właściwości każdego elementu. Nazwy, znaczniki i pojedyncze wartości właściwości można zmieniać. |
| Pliki projektów i rodzin | `.rvt` `.rfa` `.rte` `.rft` | Kartę pliku: wydanie, kompilację, pracę zespołową, informacje o projekcie, parametry rodziny, powiązane pliki i obraz podglądu. Bez 3D. |
| DWG | `.dwg` | Rysunek w 2D: przestrzeń modelu, każdy arkusz, warstwy, rysunki dołączone, obrazy i widok wydruku. Przestrzeń modelu także w 3D. Sprawdzone są formaty od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | To samo co DWG. |
| STEP | `.step` `.stp` | Część, urządzenie lub model dostawcy (AP203, AP214, AP242) w 3D: każda bryła staje się jednym elementem (zastępczym elementem budynku) małego modelu IFC na jednej kondygnacji, odczytana jako trójkąty w prawdziwym rozmiarze, a złożenie z każdą częścią tam, gdzie umieszcza ją plik. Dalej działa jak każdy IFC: właściwości, przekroje, pomiary, zapis jako IFC. Kolory i drzewo złożenia nie są odczytywane. |
| Chmury punktów | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skan w widoku 3D, obok modelu lub samodzielnie: zobacz [Pokaż chmurę punktów obok modelu](topic:point-clouds). |
| Pakiet projektu | `.ccbundle.zip` | Model z widokami, układami i grupami właściwości: zobacz [Otwórz pakiet projektu](topic:open-project-bundle). |
| Folder | dowolne | Raport o każdym modelu, rysunku i pakiecie projektu w nim. Każdy IFC, model, rysunek lub pakiet z raportu otwiera się kliknięciem. |

[Co BimCraft odczytuje z każdego formatu](topic:file-formats) opisuje to szczegółowo.

BimCraft rozpoznaje plik po pierwszych bajtach, a nie tylko po nazwie, więc plik projektu z nietypowym rozszerzeniem nadal otwiera się jako karta pliku.

### Nieotwierane

- `.ifczip` i `.ifcxml`: BimCraft mówi „.ifczip nie jest jeszcze obsługiwany. Zapisz lub wyeksportuj model jako zwykły plik .ifc.” Rozpakuj `.ifczip` (zawiera zwykły `.ifc`) albo wyeksportuj ponownie jako zwykły IFC.
- Rysunki DGN są wymienione w raporcie folderu, ale się nie otwierają.
- PDF, obrazy i pliki biurowe nie otwierają się samodzielnie. Obrazy służą jako obrazy w DWG, a {{ui:Buduj}} › {{ui:Z rysunku…}} zamienia strony PDF lub skanu w ściany: zobacz [Ściany z kompletu planów](topic:walls-from-plans).

## Co zapisuje

| Klikasz | Dostajesz | Gdzie |
|---|---|---|
| {{ui:Zapisz jako IFC}} | Nowy plik IFC z Twoimi zmianami, o nazwie „*nazwa oryginału* (edited).ifc” | Folder pobranych plików przeglądarki |
| {{ui:Pobierz CSV}} w zestawieniu wyposażenia | CSV z pozycjami z listy, o nazwie „*nazwa rysunku* equipment.csv” | Folder pobranych plików przeglądarki |

Inne rzeczy są zapisywane tam, gdzie powstają, każda w swoim temacie: {{ui:USD}} ([Eksportuj model jako USD](topic:usd)), plik .glb {{ui:Do renderowania}}, wyrenderowane obrazy, arkusze i rzuty jako PDF, zestawienia i listy jako CSV, problemy BCF, arkusz COBie, pliki rodzin oraz zarejestrowane skany jako LAS lub E57. BimCraft nie zapisuje plików DWG, DXF ani projektów i nigdy nie zmienia otwartych plików.

:::chromium
Chrome i Edge zapisują pobrane pliki w folderze ustawionym w ich ustawieniach, zwykle Pobrane. Aby przeglądarka pytała za każdym razem, gdzie zapisać, włącz „Przed pobraniem pytaj, gdzie zapisać każdy plik” w ustawieniach pobierania przeglądarki.
:::

:::firefox
Firefox zapisuje w folderze Pobrane, chyba że ustawisz w jego ustawieniach „Zawsze pytaj, gdzie zapisać pliki”.
:::

:::safari
Safari zapisuje w Pobranych, chyba że wybierzesz inny folder w **Safari > Ustawienia > Ogólne > Lokalizacja pobranych plików**.
:::

## Zapisywanie po raz drugi

Każdy zapis pobiera cały model ze **wszystkimi zmianami od otwarcia**, nie tylko ze zmianami po ostatnim zapisie. Lista {{ui:Zmiany}} po każdym zapisie znów jest pusta, więc nie cofniesz zmian sprzed zapisu. Aby zacząć od oryginału, otwórz oryginalny plik jeszcze raz.

## Duże pliki i pamięć

- Pliki **IFC** są w całości wczytywane do pamięci karty, a geometria 3D zajmuje jeszcze więcej. Model o kilkuset megabajtach może być zbyt duży dla laptopa. Powyżej 1,5 miliona trójkątów krawędzie są wyłączane, aby oszczędzić pamięć („Krawędzie są wyłączone dla bardzo dużych modeli”).
- **Pliki projektów** nie są czytane w całości. BimCraft czyta tylko małe części, których potrzebuje, około 40 KB do 100 KB niezależnie od rozmiaru pliku, więc centralny model 500 MB na dysku sieciowym otwiera się w mgnieniu oka.
- Pliki **DWG i DXF** są czytane w całości. Bardzo duży rysunek pokazuje „Ten rysunek jest bardzo duży; pokazano tylko jego część.”
- **Foldery** do 20 000 plików się otwierają. Czytane jest tylko kilka kilobajtów, których potrzebuje karta każdego modelu.

Więcej w [Przeglądarki, urządzenia i pamięć](topic:platforms).

## Online i offline

Otwieranie plików nigdy nie wymaga internetu. Jeden czytnik ładuje się ze strony przy pierwszej potrzebie: silnik IFC, przy pierwszym otwarciu modelu IFC („Uruchamiam silnik IFC…”). Czytniki DWG i DXF są częścią aplikacji.

:::offline
Jesteś offline. Jeśli przycisk paska aplikacji pokazuje {{ui:Gotowe offline}}, każdy format otwiera się jak zwykle. Jeśli nie, model IFC nie otworzy się, chyba że jeden został już otwarty w tej karcie: najpierw połącz się z internetem. Zobacz [Online i offline](topic:online-offline).
:::

Aby używać BimCraft bez połączenia, kliknij {{ui:Zapisz do pracy offline}} na pasku aplikacji, gdy jesteś online, i poczekaj na {{ui:Gotowe offline}}. Zapisana kopia ma około 33 MB; zawiera silnik IFC, więc modele IFC otwierają się też offline. [Praca offline](common:offline) wyjaśnia zapisane kopie w ogólności.

## Zapis w chmurze

Zapis w chmurze nie jest jeszcze dostępny. Zapisuj edytowane kopie na własnym komputerze lub na serwerze plików biura, jak każdy inny plik. Zobacz [Twoje pliki](common:your-files).
