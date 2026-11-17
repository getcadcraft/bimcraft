---
title: Pakiety typów: udostępniaj typy ścian jako otwarte pliki
summary: Zapisz typy ścian wraz z warstwami, materiałami, znacznikami i kodami klasyfikacji oraz rodzinami jako jeden otwarty plik (zwykły JSON lub IFC) i dodaj je do innego projektu. Można też odczytać typy ścian z pliku IFC z innego programu.
keywords: pakiet typów, typy, typ ściany, udostępnianie, eksport, import, biblioteka, otwarty format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiały, warstwy, szablon, standard biura, rodziny
from: e4c91331
---

## Co zrobisz

Przeniesiesz typy ścian z jednego projektu do drugiego albo przekażesz je komuś, kto pracuje w innym programie. Pakiet typów zawiera każdy typ ściany z jego warstwami, grubościami, materiałami, rdzeniem, pustkami, priorytetem warstw, poziomem rozwoju, danymi do przedmiaru i kodami klasyfikacji oraz wszystkie dodane rodziny. To otwarty plik: zwykły tekst JSON, który każdy może przeczytać, albo plik IFC. Nic w nim nie jest zamknięte dla firmy, kraju ani konta.

## Zapisz typy z projektu

1. Otwórz **Dane** na pasku modelu i wybierz {{ui:Pakiety typów}}.
2. Pod {{ui:Zapisz typy z tego projektu}} zaznacz typy ścian do zapisania. Typy własne projektu są zaznaczone; typ startowy można dodać i trafia jako kopia. Zaznacz rodziny, jeśli chcesz je dołączyć.
3. Wpisz {{ui:Nazwa zestawu}}.
4. {{ui:Zapisz jako zestaw (.json)}} pobiera plik `.cctypes.json`. {{ui:Zapisz jako IFC (.ifc)}} pobiera plik IFC zawierający tylko typy: każdy typ ściany jako IfcWallType z zestawem warstw materiałowych, materiałami i klasyfikacją, dla dowolnego programu BIM.

## Dodaj typy do projektu

1. W tym samym oknie wybierz {{ui:Otwórz zestaw lub plik IFC…}} i wskaż plik `.json` z zestawem albo plik `.ifc`.
2. Okno wypisuje, co zawiera plik: każdy typ ściany z grubością, liczbą warstw i kodami, materiały oraz rodziny.
3. Wybierz, co się stanie z {{ui:Typ, który ten projekt już ma}}: **Zachowaj typ z projektu**, **Dodaj typ z zestawu jako kopię** (dostanie nową nazwę kończącą się na "(2)") albo **Zastąp go (tylko gdy żadna ściana go nie używa)**.
4. {{ui:Dodaj do projektu}}. Okno wypisuje, co dodano, skopiowano, zastąpiono lub zachowano. To jeden krok cofnięcia.

Nowe typy od razu pojawiają się na liście typów narzędzia Ściana.

## Typy stropów, dachów i sufitów

Lista typów do zapisania zawiera też typy stropów, dachów i sufitów projektu oraz ich startowe (oznaczone Strop, Dach, Sufit). Pakiet może zawierać wszystkie cztery rodzaje; każdy typ podaje swoją klasę IFC (IfcWallType, IfcSlabType, IfcCoveringType). Typ stropu, dachu lub sufitu, którego używają elementy, nie jest zastępowany z pakietu: zmień go w edytorze typów.

## Jeden typ jako element biblioteki

Zaznacz dokładnie jeden typ i wybierz **Zapisz jako element biblioteki…**. Zapisuje to plik `.cctype.json`: element biblioteki rodzaju Typy, zawierający ten jeden typ (jego warstwy, materiały, LOD i kody klasyfikacji). Prześlij go do Biblioteki, aby go udostępnić. **Otwórz zestaw lub plik IFC** odczytuje też taki element i dodaje jego typ do projektu jak zestaw.

## Warto wiedzieć

- Plik IFC z innego programu można tu również otworzyć. Każdy jego typ ściany, który ma warstwy materiałowe, jest odczytywany: nazwa, materiały warstw i grubości oraz ewentualna pustka należą do pliku. To, które warstwy są rdzeniem i co robi każda z nich (wykończenie, konstrukcja, izolacja), jest szacowane, a typ jest oznaczony **(szacowane)** i warto go sprawdzić w edytorze typu ściany. Typ ściany bez warstw zostaje pominięty i wymieniony z nazwy.
- Materiał, który projekt już ma, zostaje bez zmian. Nowy materiał, którego nazwa jest zajęta, dostaje po nazwie "(pack)".
- Typ, którego używają ściany, nigdy nie jest zastępowany z pakietu. Zmień go w edytorze typu ściany, który poprawnie przesuwa jej ściany.
- Kod ustawiony na jednej ścianie nie przechodzi: należy do tej ściany. Kod ustawiony na typie przechodzi.
- Plik z polem, którego format nie obsługuje, z warstwą bez brakującego materiału albo cokolwiek, co nie jest zwykłym tekstem, zostaje odrzucony, a komunikat podaje, gdzie i dlaczego.
- Jeszcze nie zbudowano: typów stropów, dachów i sufitów (w tej wersji nie mają typów: każdy ma swoją grubość), typów drzwi i okien innych niż rodziny oraz szrafur lub kolorów z pliku innego programu.
