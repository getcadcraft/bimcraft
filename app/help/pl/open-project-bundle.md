---
title: Otwórz pakiet projektu
summary: Pakiet projektu to jeden plik zip z modelem, jego widokami, arkuszami i grupami właściwości. Otwórz go, pokaż widok wraz z jego kondygnacją i warstwami, otwórz arkusz i zobacz właściwości w grupach projektu.
keywords: pakiet, pakiet projektu, ccbundle, zip, widoki, mapa widoków, arkusze, książka arkuszy, kombinacja warstw, grupy właściwości, standardy, pln, szablon
from: b5b86e8f
---

## Co zrobisz

Otwierasz **pakiet projektu** (`.ccbundle.zip`) i pracujesz z projektem w takiej organizacji, w jakiej został zrobiony: z jego widokami, arkuszami i grupami właściwości, na bazie modelu.

Pakiet zawiera:

- model jako IFC,
- arkusze jako PDF i DWG,
- listę tego, czego IFC nie przenosi: widoki (każdy z jego kondygnacją, kombinacją warstw i skalą), arkusze i rysunki na nich umieszczone, definicje właściwości w ich grupach, klasyfikacje oraz standardy, takie jak warstwy, zestawy piór, typy linii, wypełnienia, powierzchnie i kompozyty.

Pakiety tworzy skrypt o otwartym kodzie, który działa wewnątrz Archicad i pyta sam Archicad o te listy. BimCraft nigdy nie czyta bezpośrednio plików `.pln` ani `.tpl`; zobacz [Otwórz pliki projektu .pln i .pla](topic:pln-project-files).

## Utwórz pakiet

Skrypt jest wersją podglądową: nie został jeszcze wypróbowany na każdej wersji Archicad. Pobierz go z [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potrzebujesz Archicad 24 lub nowszego oraz Python 3.8 lub nowszego; nic więcej nie trzeba instalować.

1. Zapisz `archicad_bundle.py` w folderze, na przykład `C:\cc-bundle`.
2. W Archicad otwórz projekt i utwórz zestaw publikacji o nazwie dokładnie **CadCraft bundle**: widok 3D jako IFC, każdy arkusz jako PDF i każdy arkusz ponownie jako DWG, publikowane do plików na dysku w jednym płaskim folderze.
3. Przy otwartym projekcie uruchom raz `python archicad_bundle.py --probe --out .`. Tylko odczytuje dane i zapisuje `probe.json`.
4. Uruchom `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (użyj tłumacza IFC, który wybrałeś). Archicad publikuje zestaw, a skrypt zapisuje `<project>.ccbundle.zip`.

Jeśli publikowanie przez skrypt się nie uda, opublikuj zestaw ręcznie i uruchom `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Wszystkie opcje są w pliku README repozytorium. Jeśli czegoś brakuje, otwórz tam zgłoszenie i dołącz `probe.json`.

## Otwórz pakiet

1. Kliknij {{ui:Wybierz plik}} albo upuść `.ccbundle.zip` na BimCraft. W folderze otwartym przez {{ui:Otwórz folder}} pakiety są wymienione pod **Pakiety projektu**; kliknij jeden po nazwie.
2. Model otwiera się tak jak każdy plik IFC, a sekcja **Pakiet projektu** pojawia się po lewej, pod danymi pliku.

Nic nie jest przesyłane: pakiet jest odczytywany na twoim komputerze, po jednym pliku naraz, więc duży model nie jest kopiowany dwa razy.

## Pokaż widok

Pod **Widoki** widoki są pogrupowane według folderów, jakie miały w projekcie. Kliknij nazwę widoku:

- **Rzut** pokazuje tylko jego kondygnację, patrząc z góry.
- **Jego kombinacja warstw** ukrywa elementy na warstwach, które ta kombinacja ukrywa. Wiersz stanu podaje, ile elementów to ukryło.
- **Jego skala** jest pokazana obok nazwy i w wierszu stanu.
- **Widok 3D** pokazuje wszystkie kondygnacje.

Aby znów pokazać wszystko, użyj {{ui:Pokaż wszystko}} w {{ui:Pokaż}} i zaznacz każdą kondygnację.

:::note
BimCraft znajduje warstwy przez przypisania warstw w pliku IFC. Jeśli IFC wyeksportowano bez nich, kombinacja warstw nic nie ukrywa, a wiersz stanu podaje 0 ukrytych elementów.
:::

## Otwórz arkusz

Pod **Arkusze** każdy arkusz pokazuje swój numer, nazwę, format papieru i widoki na nim umieszczone.

- **PDF** zapisuje PDF arkusza z pakietu.
- **DWG** otwiera rysunek arkusza w widoku 2D. Kliknij dowolny widok, aby wrócić do modelu.
- **Otwórz w …** wysyła plik arkusza do aplikacji, która na nim pracuje, w nowej karcie: PDF do MarkupCraft, DWG do CadCraft. Pokazuje się tylko tam, gdzie ta aplikacja jest otwarta obok BimCraft. Plik jest odczytywany z pakietu, gdy karta się ładuje, i nic nie jest przesyłane.

Arkusz bez żadnego z nich pokazuje **Brak pliku w pakiecie**.

## Zobacz właściwości w grupach projektu

Wybierz element. **Grupy właściwości** pokazuje jego właściwości pod grupami zdefiniowanymi w projekcie, dopasowanymi przez zestaw właściwości i nazwę, jakie definicja podaje dla IFC, a w przeciwnym razie przez nazwę. Reszta pozostaje w {{ui:Właściwości}} jak zwykle. **Definicje właściwości** wymienia każdą definicję z jej grupą, typem i nazwą IFC.

## Standardy i uwagi

- **Standardy** zlicza warstwy, kombinacje warstw, zestawy piór, typy linii, wypełnienia, powierzchnie, kompozyty i materiały w pakiecie.
- **Uwagi** wymieniają to, czego skrypt nie zdołał pobrać z danej wersji Archicad, każde pole, którego BimCraft nie mógł odczytać, oraz każdy plik, który pakiet wymienia, ale nie zawiera.

## Rozwiązywanie problemów

- **„… jest plikiem zip, ale nie pakietem projektu.”** Plik zip nie ma `manifest.json`. Rozpakuj go i otwórz `.ifc` w środku.
- **„… jest nowszym pakietem projektu niż ten, który czyta BimCraft.”** Zaktualizuj BimCraft.
- **„… nie zawiera modelu, który wymienia jego manifest.”** Plik zip został ucięty albo zmieniony. Utwórz pakiet ponownie.
- **Widok pokazuje wszystkie kondygnacje.** Jego kondygnacji nie ma w IFC modelu (wiersz stanu to mówi). Sprawdź, czy eksport IFC zawierał tę kondygnację.

Zobacz też [Praca między dwoma programami BIM](topic:two-bim-programs) oraz [Co BimCraft odczytuje z każdego formatu](topic:file-formats).
