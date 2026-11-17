---
title: Rozpoczynanie nowego budynku
summary: Utwórz pusty model budynku z jego poziomami, narysuj ściany, wstaw elementy z biblioteki i zapisz go jako IFC.
keywords: nowy, nowy budynek, pusty, pusty model, zacznij od zera, szablon, poziomy, kondygnacje, piętra, utwórz, model
from: 68786865
---

## Co zrobisz

Zacznij model budynku od zera zamiast go otwierać. BimCraft tworzy pusty model IFC z projektem, działką, budynkiem i jego poziomami. Na poziomach możesz wstawiać wyposażenie i meble z biblioteki, a potem zapisać model jako plik IFC.

:::note
Ściany można już rysować: zobacz [Rysowanie ścian](topic:draw-walls). Drzwi, okna, stropy i dachy są jeszcze nie zbudowane i będą dodane jako następne.
:::

## Kroki

1. Kliknij {{ui:Nowy budynek}} w sekcji **Otwórz plik lub folder** albo na stronie startowej.
2. Wpisz **Nazwę budynku**.
3. Wybierz, ile **Poziomów** ma budynek (od 1 do 200).
4. Wpisz **Wysokość poziomu**, od podłogi do podłogi: na przykład `10'-0"`, `10'6"` lub `3000 mm`. Sama liczba oznacza stopy w USA, a w pozostałych krajach milimetry.
5. Wszystkie pola są już wypełnione, więc możesz zostawić je bez zmian. Pod nimi pole pokazuje, z czym zaczynasz: jednostki, **Typ ściany**, którego narzędzie Ściana użyje najpierw (możesz wybrać inny z listy), oraz pierwszy arkusz.
6. Kliknij {{ui:Utwórz}}. Poziomy są ułożone od 0, każdy o jedną wysokość poziomu wyżej od poprzedniego, i nazwane Poziom 1, Poziom 2 i tak dalej. Pojawiają się w drzewie modelu, a rzut Poziomu 1 otwiera się obok widoku 3D z włączonym {{ui:Rysuj}}.
7. Narysuj ściany: kliknij {{ui:Ściana}} i dwa punkty. Zobacz [Rysowanie ścian](topic:draw-walls). Nazwy poziomów lub ich wysokości zmienisz w panelu **Poziomy**.
8. Wstaw elementy: zobacz [Wstawianie wyposażenia i mebli z biblioteki](topic:place-from-library). Pasek wstawiania wymienia każdy poziom.
9. Kliknij {{ui:Zapisz jako IFC}}. Plik dostaje nazwę od budynku, na przykład `Dom Smitha.ifc`.

## Warto wiedzieć

- Model jest zapisywany w milimetrach jako IFC4. Inne programy BIM go otwierają.
- Nowy budynek zawiera jeden arkusz, **A-101**, z rzutem najniższego poziomu: A3 w skali 1:100, gdy pracujesz w jednostkach metrycznych, w przeciwnym razie Tabloid w skali 1/8" = 1'-0". Jest pusty, dopóki nie narysujesz pierwszej ściany, a potem pokazuje rzut w miarę rysowania. Otwórz go w **Arkuszach** w przeglądarce projektu, aby zmienić jego papier, skalę lub tabliczkę, dodać widoki albo go usunąć. Budynek utworzony z szablonu przynosi zamiast tego arkusze szablonu.
- Aby zmienić to, z czym startuje każdy nowy budynek (typ ściany dla projektów metrycznych, poziomy, pierwszy arkusz, narzędzie aktywne po kliknięciu {{ui:Utwórz}}), zobacz [Domyślne zasady](topic:default-policies).
- Przed pierwszą ścianą nie trzeba nic konfigurować. Typ ściany, wysokości poziomów, jednostki i arkusz można zmienić później.
- **Kondygnacje** w lewym panelu wymieniają tylko poziomy, na których coś jest; drzewo modelu wymienia wszystkie.
- Dopóki nie zapiszesz, nowy budynek liczy się jako niezapisana praca. BimCraft pyta przed otwarciem innego pliku lub wyjściem i zachowuje kopię w tej przeglądarce na wypadek zamknięcia karty.
