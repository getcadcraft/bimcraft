---
title: Pliki, które BimCraft otwiera i zapisuje
summary: Każdy format, który otwiera BimCraft, co z niego zachowuje, co zapisuje, dokąd trafiają zapisane pliki oraz co zmienia się między przeglądarkami i w trybie offline.
keywords: formaty, otwórz, zapisz, eksport, pobierz, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, prześlij, prywatność, rozmiar pliku
from: a7275dbf
---

BimCraft odczytuje pliki z komputera, w karcie przeglądarki. **Nic nie jest przesyłane** do CadCraft ani do nikogo innego. Przy zapisie BimCraft przekazuje przeglądarce nowy plik do pobrania; nigdy nie nadpisuje pliku, który został otwarty.

## Co otwiera

| Format | Rozszerzenia | Co otrzymujesz |
|---|---|---|
| IFC | `.ifc` | Model w 3D, kondygnacje, liczba elementów i właściwości każdego elementu. Nazwy, etykiety i pojedyncze wartości właściwości można zmieniać. |
| Pliki projektu i rodzin | `.rvt` `.rfa` `.rte` `.rft` | Karta pliku: wersja, kompilacja, udostępnianie pracy, informacje o projekcie, parametry rodziny, pliki dołączone i obraz podglądu. Bez 3D. |
| DWG | `.dwg` | Rysunek w 2D: przestrzeń modelu, każdy arkusz, warstwy, dołączone rysunki, obrazy i widok wydruku. Także przestrzeń modelu w 3D. Sprawdzono formaty od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Tak samo jak DWG. |
| STEP | `.step` `.stp` | Część, element wyposażenia lub model dostawcy (AP203, AP214, AP242) w 3D: każda bryła staje się jednym elementem (element budowlany typu proxy) małego modelu IFC na jednej kondygnacji, odczytywanym jako trójkąty w rzeczywistym rozmiarze; złożenie ze wszystkimi częściami tam, gdzie plik je umieszcza. Dalej działa jak każdy IFC: właściwości, przekroje, pomiar, zapis jako IFC. Kolory i drzewo złożenia nie są odczytywane. |
| Chmury punktów | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skan w widoku 3D, obok modelu lub samodzielnie: zobacz [Pokaż chmurę punktów obok modelu](topic:point-clouds). |
| Paczka projektu | `.ccbundle.zip` | Model z jego widokami, układami i grupami właściwości: zobacz [Otwórz paczkę projektu](topic:open-project-bundle). |
| Folder | dowolne | Raport o każdym modelu, rysunku i paczce projektu w folderze. Każdy IFC, model, rysunek lub paczka w raporcie otwiera się kliknięciem. |

[Co BimCraft odczytuje z każdego formatu](topic:file-formats) opisuje to szczegółowo.

BimCraft ustala, czym jest plik, patrząc zarówno na jego pierwsze bajty, jak i na nazwę, więc plik projektu z nietypowym rozszerzeniem nadal otworzy się jako karta pliku.

### Nieotwierane

- `.ifczip` i `.ifcxml`: BimCraft wyświetla komunikat: ".ifczip nie jest jeszcze obsługiwany. Zapisz lub wyeksportuj model jako zwykły plik .ifc." Rozpakuj `.ifczip` (zawiera zwykły `.ifc`) albo wyeksportuj ponownie jako zwykły IFC.
- Rysunki DGN są wymienione w raporcie folderu, ale nie otwierają się.
- Pliki PDF, obrazy i pliki biurowe nie otwierają się samodzielnie. Obrazy są używane jako obrazy wewnątrz DWG, a {{ui:Kompilacja}} › {{ui:Z rysunku…}} zamienia strony pliku PDF lub skanu w ściany: zobacz [Ściany z zestawu planów](topic:walls-from-plans).

## Co zapisuje

| Kliknięcie | Wynik | Gdzie |
|---|---|---|
| {{ui:Zapisz jako IFC}} | Nowy plik IFC z wprowadzonymi zmianami, nazwany „*nazwa oryginału* (edited).ifc” | Folder pobranych plików przeglądarki |
| {{ui:Pobierz CSV}} w harmonogramie wyposażenia | CSV z pozycjami z listy, nazwany „*nazwa rysunku* equipment.csv” | Folder pobranych plików przeglądarki |

Inne rzeczy są zapisywane tam, gdzie powstają, każda w osobnym temacie: {{ui:USD}} ([Eksport modelu jako USD](topic:usd)), {{ui:Collada}} (.dae oraz .kmz dla Google Earth: [Eksport modelu jako Collada lub do Google Earth](topic:collada)), plik .glb {{ui:Do renderowania}}, wyrenderowane obrazy, arkusze i plany jako PDF, harmonogramy i listy jako CSV, zgłoszenia BCF, arkusz COBie, pliki rodzin oraz zarejestrowane skany jako LAS lub E57. BimCraft nie zapisuje plików DWG, DXF ani projektu i nigdy nie zmienia otwartych plików.

:::chromium
Chrome i Edge zapisują pobrane pliki w folderze ustawionym w ich ustawieniach, zwykle Pobrane. Aby przy każdym pobieraniu pytano o miejsce zapisu, włącz w ustawieniach pobierania przeglądarki opcję „Pytaj, gdzie zapisać każdy plik przed pobraniem”.
:::

:::firefox
Firefox zapisuje do folderu Pobrane, chyba że w ustawieniach ustawiono „Zawsze pytaj, gdzie zapisać pliki”.
:::

:::safari
Safari zapisuje do folderu Pobrane, chyba że w **Safari > Ustawienia > Ogólne > Lokalizacja pobierania plików** wybrano inny folder.
:::

## Ponowny zapis

Każdy zapis pobiera cały model z **każdą zmianą od chwili jego otwarcia**, a nie tylko zmiany wprowadzone po ostatnim zapisie. Lista {{ui:Zmiany}} zaczyna się po każdym zapisie od nowa, więc nie można cofnąć zmian sprzed zapisu. Aby zacząć od oryginału, otwórz ponownie oryginalny plik.

## Duże pliki i pamięć

- Pliki **IFC** są odczytywane w całości do pamięci karty, a geometria 3D zajmuje dodatkowo pamięć. Model o rozmiarze kilkuset megabajtów może być dla laptopa zbyt dużym obciążeniem. Powyżej 1,5 miliona trójkątów krawędzie są wyłączane, aby oszczędzić pamięć („Krawędzie wyłączone dla bardzo dużych modeli”).
- **Pliki projektu** nie są odczytywane w całości. BimCraft odczytuje tylko małe fragmenty, których potrzebuje, około 40 KB do 100 KB niezależnie od rozmiaru pliku, więc model centralny o rozmiarze 500 MB na dysku sieciowym otwiera się w mgnieniu oka.
- Pliki **DWG** i **DXF** są odczytywane w całości. Bardzo duży rysunek pokazuje komunikat „Ten rysunek jest bardzo duży; pokazano tylko jego część”.
- **Foldery** z do 20 000 plików można otworzyć. Odczytywane są tylko kilka kilobajtów potrzebnych dla każdej karty modelu.

Więcej: [Przeglądarki, urządzenia i pamięć](topic:platforms).

## Online i offline

Otwieranie plików nigdy nie wymaga internetu. Jeden czytnik ładuje się z witryny za pierwszym razem, gdy jest potrzebny: silnik IFC, przy pierwszym otwarciu modelu IFC („Uruchamianie silnika IFC…”). Czytniki DWG i DXF są częścią aplikacji.

:::offline
Brak połączenia. Jeśli przycisk na pasku aplikacji pokazuje {{ui:Gotowe offline}}, każdy format otwiera się jak zwykle. Jeśli nie, model IFC nie może się otworzyć, chyba że wcześniej otwarto jakiś w tej karcie: najpierw przywróć połączenie. Zobacz [Online i offline](topic:online-offline).
:::

Aby korzystać z BimCraft bez połączenia, przy działającym połączeniu wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj na {{ui:Gotowe offline}}. Zapisana kopia ma około 33 MB; zawiera silnik IFC, więc modele IFC także otwierają się offline. [Praca offline](common:offline) opisuje zapisane kopie ogólnie.

## Zapis w chmurze

Zapis w chmurze nie jest jeszcze dostępny. Zapisuj edytowane kopie na własnym komputerze lub na serwerze plików biura, tak jak każdy inny plik. Zobacz [Twoje pliki](common:your-files).
