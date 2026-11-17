---
title: Wyszukiwanie dołączonych rysunków i obrazów
summary: Pokaż dołączone rysunki (xrefy) i obrazy tabliczki rysunkowej rysunku, otwierając jego folder albo dodając pliki ręcznie.
keywords: xref, odniesienie zewnętrzne, dołączony rysunek, dołącz, nakładka, obraz, zdjęcie, logo, tabliczka rysunkowa, brakujący xref, etransmit, menedżer odniesień
from: 5593d4b1
---

## Co zrobisz

Uzupełnisz rysunek: pokażesz rysunki, do których się odwołuje (odniesienia zewnętrzne, czyli xrefy), oraz obrazy, których używa, na przykład logo na tabliczce rysunkowej.

## Najprostszy sposób: otwórz folder

1. Kliknij {{ui:Otwórz folder}} i wybierz folder, w którym są rysunek i jego odniesienia, na przykład cały folder `Cad` projektu.
2. W raporcie folderu przewiń do **Rysunki CAD**.
3. Kliknij rysunek.
4. Spójrz na panel {{ui:Właściwości}} po prawej, pod **Połączone rysunki** i **Obrazy**.

BimCraft szuka każdego dołączonego rysunku po jego nazwie („*nazwa*.dwg”), najpierw w tym samym folderze co rysunek, a potem w całym otwartym folderze. Obrazy szuka się tak samo, a także po podobnej nazwie: eksport eTransmit lub Revit często dodaje przed nazwą projektu, więc `logo.png` zostanie znalezione jako `Tower-logo-5425051.png`.

## Inny sposób: dodaj pliki ręcznie

1. Otwórz sam rysunek.
2. Po prawej, pod **Połączone rysunki**, kliknij {{ui:Dodaj rysunki dołączone…}}. Pod **Obrazy** przycisk nazywa się {{ui:Dodaj obrazy…}}; oba otwierają to samo okno wyboru.
3. Wybierz dołączone pliki `.dwg` i pliki obrazów. Możesz wybrać kilka naraz.
4. Poczekaj, aż BimCraft ponownie otworzy rysunek z nimi.

## Co powinno być widoczne

Każdy dołączony rysunek i obraz jest wymieniony z etykietą:

| Etykieta | Znaczy |
|---|---|
| **Pokazano** | Znaleziono i narysowano. Ścieżka pod nią mówi, skąd pochodzi, albo „dodane przez Ciebie”. |
| **Pokazano, podobna nazwa** | Obraz znaleziony po podobnej nazwie. Sprawdź, czy to właściwy. |
| **Nie znaleziono** | Nie ma go w folderze ani wśród dodanych plików. Brakujący obraz pokazuje się jako pusta ramka. |
| **TIFF nie może być wyświetlony w przeglądarce** | Obraz jest plikiem TIFF, którego przeglądarki nie rysują. Zapisz go jako PNG pod tą samą nazwą i dodaj. |
| **Nie udało się odczytać** | Plik znaleziono, ale nie dało się go otworzyć jako obrazu. |

Panel {{ui:Rysunek}} po lewej pokazuje „*n* z *m* załadowanych” dla dołączonych rysunków. Warstwy dołączonych rysunków pojawiają się w {{ui:Warstwy}} jako „*nazwa łącza*|*warstwa*”.

## Typowe błędy

- **Otwieranie samego rysunku.** „Ten rysunek pokazuje tylko swoją zawartość, dopóki nie zostaną dodane jego dołączone rysunki. Otwarcie całego folderu projektu znajdzie je automatycznie.”
- **Otwieranie zbyt małego folderu.** Jeśli odniesienia są w folderze obok, otwórz folder nadrzędny.
- **Zmienione nazwy odniesień.** BimCraft dopasowuje dołączone rysunki po nazwie. Łącze przemianowane na dysku nie zostanie znalezione; dodaj je ręcznie.
- **Odniesienia do odniesień.** BimCraft ładuje rysunki, do których otwarty rysunek się odwołuje. Rysunki dołączone wewnątrz nich nie są szukane, więc zwykle nie pokazują się w tej wersji.
