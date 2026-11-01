---
title: Pierwsze kroki z BimCraft
summary: Co BimCraft robi dziś, jak otworzyć pierwszy model, obejrzeć go w 3D, zmienić jedną wartość i zapisać kopię.
keywords: start, pierwsze uruchomienie, otwórz, ifc, rvt, dwg, szybki start, wprowadzenie, przeglądarka modeli, bim
from: fc2dea19
---

BimCraft to aplikacja z rodziny CadCraft do modeli budynków. W tej wersji **otwiera, czyta i sprawdza** pliki budynków oraz **edytuje dane w modelach IFC**. Nie rysuje jeszcze ani nie modeluje nowych elementów. Traktuj go jak przeglądarkę i kontroler modeli, który pozwala też poprawiać nazwy, znaczniki i wartości właściwości w pliku IFC.

Co otwiera:

| Plik | Co dostajesz |
|---|---|
| IFC (`.ifc`) | Pełny model w 3D: obracanie, kondygnacje, właściwości elementów oraz edycja nazw i wartości właściwości |
| Pliki projektów i rodzin (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartę pliku: wersję, w której go zapisano, informacje o projekcie, obraz podglądu i powiązane pliki. Bez 3D. |
| DWG i DXF | Rysunek w 2D: przestrzeń modelu i każdy arkusz, warstwy, rysunki dołączone, widok wydruku oraz zestawienie wyposażenia dla oznaczonych rysunków gastronomicznych |
| Folder projektu | Raport o każdym modelu w folderze: kopie zapasowe, powiązania, uszkodzone kopie i podpowiedź, od którego pliku zacząć |

Wszystko dzieje się w przeglądarce, na Twoim komputerze. **Nic nie jest przesyłane.** Szczegóły w [Pliki, które BimCraft otwiera i zapisuje](topic:files).

## Otwórz BimCraft

1. Otwórz BimCraft w aktualnej przeglądarce. Działają Chrome, Edge, Firefox i Safari; [Przeglądarki, urządzenia i pamięć](topic:platforms) wymienia różnice.
2. Poczekaj na pusty ekran z napisem „Otwórz model budynku.”

:::note
BimCraft działa w przeglądarce, a na komputerze wewnątrz CadCraft Studio, razem z pozostałymi aplikacjami. Zapis w chmurze nie jest jeszcze dostępny: pliki otwierasz z komputera i zapisujesz na nim kopie.
:::

## Otwórz pierwszy model

Najszybszy sposób, by zobaczyć, co robi BimCraft, to plik IFC.

1. Kliknij {{ui:Wybierz plik}} na środku ekranu.
2. Wskaż plik `.ifc` w {{pick:mac=Finderze|windows=Eksploratorze plików|linux=menedżerze plików}} i potwierdź.
3. Poczekaj, aż wiersz stanu na dole ekranu powie „Uruchamiam silnik IFC…”, a potem „Buduję geometrię”.

Zobaczysz model w 3D pośrodku, panel {{ui:Plik}} i listę {{ui:Kondygnacje}} po lewej oraz pusty panel {{ui:Właściwości}} po prawej. Wiersz stanu kończy się słowem „Otwarto” i liczbą elementów.

:::tip
Plik z {{pick:mac=Findera|windows=Eksploratora plików|linux=menedżera plików}} możesz też przeciągnąć prosto na stronę. Podczas przeciągania ekran pokazuje „Upuść, aby otworzyć”.
:::

:::offline
Silnik IFC ładuje się ze strony przy pierwszym otwarciu modelu IFC, chyba że BimCraft zapisano do pracy offline. Rysunki DWG i DXF, pliki projektów i foldery nie wymagają niczego więcej: ich czytniki są częścią aplikacji. Jeśli przycisk paska aplikacji pokazuje {{ui:Gotowe offline}}, wszystko otwiera się offline. Jeśli nie, modele IFC nie otworzą się do czasu ponownego połączenia, chyba że jeden został już otwarty w tej karcie. Zobacz [Online i offline](topic:online-offline).
:::

:::online
Jedziesz tam, gdzie nie ma połączenia? Kliknij {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj na {{ui:Gotowe offline}}. Zapisana kopia (około 11 MB) zawiera silnik IFC. Zobacz [Praca offline](common:offline).
:::

## Rozejrzyj się

:::mouse
1. Przeciągnij lewym przyciskiem myszy, aby obracać wokół modelu.
2. Przewijaj kółkiem, aby powiększać.
3. Przeciągnij prawym przyciskiem myszy, aby przesuwać widok. Na gładziku Maca przytrzymaj zamiast tego {{key:Shift}} i przeciągnij.
4. Naciśnij {{key:F}} albo kliknij {{ui:Dopasuj}}, aby ponownie zobaczyć cały model.
:::

:::touch
1. Przeciągnij jednym palcem, aby obracać.
2. Ściśnij dwoma palcami, aby powiększyć, i przesuń dwa palce razem, aby przesunąć widok.
3. Stuknij {{ui:Dopasuj}}, aby ponownie zobaczyć cały model.
:::

## Zrób jedną prawdziwą rzecz: popraw znacznik

1. Kliknij ścianę, drzwi lub dowolny element modelu. Robi się niebieski, a jego właściwości pojawiają się po prawej.
2. W panelu {{ui:Właściwości}} kliknij wartość obok **Znacznik**.
3. Wpisz nowy znacznik i naciśnij {{key:Enter}}.
4. Spójrz na sekcję {{ui:Zmiany}}, która otworzyła się po lewej: Twoja zmiana jest na liście ze starą i nową wartością.

## Zapisz kopię

1. Kliknij {{ui:Zapisz jako IFC}} w sekcji {{ui:Zmiany}} albo naciśnij {{key:Mod+S}}.
2. Znajdź nowy plik w folderze pobranych plików. Nazwa to nazwa oryginału z dopiskiem „ (edited)”, na przykład `Clinic (edited).ifc`.

Oryginalny plik nigdy nie jest zmieniany. [Zmień właściwości IFC i zapisz edytowaną kopię](topic:edit-ifc-properties) opisuje edycję w całości.

## Dokąd dalej

- [Ekran BimCraft](topic:workspace): każdy panel po nazwie.
- [Przejście z innych programów BIM i rysunkowych](topic:coming-from): co wygląda inaczej, jeśli znasz Revita.
- [Otwórz cały folder projektu](topic:open-project-folder): wskaż BimCraft folder projektu i pozwól mu uporządkować pliki.
- [Obejrzyj rysunek DWG lub DXF](topic:view-dwg): arkusze, warstwy i widok wydruku.
