---
title: Co BimCraft odczytuje z każdego formatu
summary: Dokładnie to, co BimCraft odczytuje z plików IFC, projektów i rodzin oraz z DWG i DXF, oraz to, czego nie rusza.
keywords: formaty, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, wersje, zgodność, co jest odczytywane
from: 9b8dfb4f
---

## IFC

| Odczytuje | Szczegóły |
|---|---|
| Geometria | Każdy element z kształtem, w kolorze zapisanym w pliku. Pomieszczenia i przestrzenie są rysowane przezroczyście i na początku ukryte |
| Kondygnacje | Kondygnacje budynku w kolejności wysokości i elementy na każdej z nich. Elementy bez kondygnacji są grupowane jako "Bez kondygnacji" |
| Liczba elementów | Ile elementów każdego rodzaju (ściany, drzwi, płyty…), pokazane w {{ui:Elementy}} |
| Dane projektu | Nazwa projektu, pełna nazwa i faza; schemat; program eksportujący, autor i data eksportu z nagłówka pliku |
| Dane elementu | Nazwa, typ, rodzaj obiektu, oznaczenie, opis, GlobalId; każdy zestaw właściwości i zestaw wielkości na elemencie i na jego typie |

Edytowalne: nazwa, rodzaj obiektu, oznaczenie, opis i pojedyncze wartości właściwości. Zapisywane jako nowy plik IFC. Schematy IFC2X3, IFC4 i IFC4X3 się otwierają, odczytywane przez własny silnik IFC BimCraft; wszystko, czego nie da się jeszcze narysować, jest wymienione pod **Jeszcze nie narysowane** w panelu {{ui:Plik}}. Model jest przesuwany do punktu zerowego przy otwarciu, więc model umieszczony daleko od niego i tak pojawia się na środku ekranu. `.ifczip` i `.ifcxml` się nie otwierają.

## Pliki projektów i rodzin

`.rvt` projekty, `.rte` szablony projektów, `.rfa` rodziny i `.rft` szablony rodzin.

| Odczytuje | Szczegóły |
|---|---|
| Informacje o pliku | Wydanie i kompilacja, współdzielenie, ścieżka modelu centralnego, ostatnio zapisana ścieżka, nazwa użytkownika, ustawienia regionalne, GUID dokumentu |
| Informacje o projekcie | Własne pola projektu (nazwa, numer, klient, adres, status…), bez domyślnych wartości nowego projektu |
| Informacje o rodzinie | Nazwa rodziny, kategoria, wydanie, ostatnia aktualizacja oraz jej parametry według grup |
| Łącza | Lista dołączonych modeli, łączy CAD, obrazów i tabel oznaczeń, na które wskazuje plik |
| Podgląd | Miniatura zapisana w pliku |

Nie odczytywane: model 3D, elementy, widoki, arkusze i zestawienia. Są przechowywane w nieudokumentowanym formacie. BimCraft odczytuje tylko kilkadziesiąt kilobajtów z każdego pliku, więc rozmiar pliku prawie nie ma znaczenia.

## Pliki projektów .pln, .pla, .tpl i .bpn

Jeszcze nie odczytywane: BimCraft mówi o tym przy otwarciu. Wyeksportuj IFC dla modelu i DWG dla rysunków; zobacz [Otwieranie plików projektów .pln i .pla](topic:pln-project-files).

## DWG i DXF

| Odczytuje | Szczegóły |
|---|---|
| Przestrzenie | Przestrzeń modelu i każdy arkusz (układ), w kolejności kart |
| Okna widokowe | Okna widokowe każdego arkusza, z ich skalą, obrotem i zamrożonymi warstwami |
| Warstwy | Nazwa, kolor, włączenie i wyłączenie, zamrożenie, flaga wydruku i grubość linii |
| Obiekty | Linie, polilinie, łuki, okręgi, elipsy, splajny, kreskowania i bryły, tekst i tekst wieloliniowy, bloki i atrybuty, wymiary, odnośniki i wielokrotne odnośniki, tabele, punkty, obrazy |
| Dołączone rysunki | Rysowane tam, gdzie są wstawione, gdy ich pliki zostaną znalezione |
| Obrazy | Rysowane z plików graficznych, gdy zostaną znalezione (PNG, JPEG, GIF, BMP, WebP; nie TIFF) |
| Znaczniki wyposażenia | Znaczniki pozycji gastronomicznych (atrybuty `KCL-ITEM`), dla zestawienia wyposażenia |

Wszystko inne jest liczone pod **Jeszcze nie narysowane** i nigdy nie jest zgadywane. Sprawdzone są formaty DWG od AutoCAD 2000 do 2018 (pliki R13 i R14 też są przyjmowane, ale żadnego nie było w zestawie testowym; starsze DWG się nie otwierają); panel {{ui:Rysunek}} pokazuje kod formatu (np. AC1032). Pliki DXF wszystkich wersji się otwierają, także R12. Oba są odczytywane przez własne czytniki BimCraft, w tej karcie. Niczego nie zapisuje się z powrotem do DWG ani DXF.

## W folderze

| Rodzaj | Rozszerzenia | W raporcie |
|---|---|---|
| Modele | `.rvt` `.rfa` `.rte` `.rft` | Pogrupowane z numerowanymi kopiami zapasowymi, sprawdzone pod kątem stanu, karta odczytana, łącza sprawdzone |
| IFC | `.ifc` | Na liście; otwiera się w 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Na liście razem z modelami, które je łączą; DWG i DXF otwierają się w 2D, DGN nie |
| Pozostałości | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Na liście pod **Odłożone** |
| Foldery porządkowe | `*_backup`, `*_log`, `Revit_temp`, ukryte foldery | Na liście pod **Odłożone**, nieczytane |

Zobacz [Raport folderu: role, stany i łącza](topic:folder-roles).
