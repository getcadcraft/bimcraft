---
title: Zacznij nowy budynek
summary: Utwórz pusty model budynku z jego kondygnacjami, narysuj ściany, umieść elementy z biblioteki i zapisz go jako IFC.
keywords: nowy, nowy budynek, pusty, od zera, szablon, poziomy, kondygnacje, piętra, utwórz, model
from: 546b8ae8
---

## Co zrobisz

Zaczniesz model budynku od zera, zamiast otwierać gotowy. BimCraft tworzy pusty model IFC z projektem, terenem, budynkiem i jego kondygnacjami. Możesz umieszczać na kondygnacjach wyposażenie i meble z biblioteki oraz zapisać model jako plik IFC.

:::note
Ściany można już rysować: zobacz [Rysowanie ścian](topic:draw-walls). Drzwi, okna, stropy i dachy są w budowie.
:::

## Kroki

1. Kliknij {{ui:Nowy budynek}} pod **Otwórz plik lub folder** albo na stronie startowej.
2. Wpisz **Nazwę budynku**.
3. Wybierz, ile ma **Kondygnacji** (od 1 do 200).
4. Wpisz **Wysokość kondygnacji**, od podłogi do podłogi: na przykład `10'-0"`, `10'6"` lub `3000 mm`. Sama liczba oznacza stopy w USA, a gdzie indziej milimetry.
5. Kliknij {{ui:Utwórz}}. Kondygnacje są ułożone od 0, każda o wysokość kondygnacji wyżej od poprzedniej, i nazwane Kondygnacja 1, Kondygnacja 2 itd. Widać je w drzewie modelu, a rzut Kondygnacji 1 otwiera się obok widoku 3D z włączonym {{ui:Rysuj}}.
6. Narysuj ściany: zobacz [Rysowanie ścian](topic:draw-walls). Zmień nazwy kondygnacji lub ich wysokości w panelu **Poziomy**.
7. Umieść elementy: zobacz [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library). Pasek umieszczania wymienia każdą kondygnację.
8. Kliknij {{ui:Zapisz jako IFC}}. Plik otrzymuje nazwę budynku, na przykład `Dom Kowalskich.ifc`.

## Warto wiedzieć

- Model jest zapisywany w milimetrach, jako IFC4. Otwierają go inne programy BIM.
- **Kondygnacje** w lewym panelu wymieniają tylko poziomy, na których coś jest; drzewo modelu wymienia wszystkie.
- Dopóki nie zapiszesz, nowy budynek liczy się jako niezapisana praca. BimCraft pyta przed otwarciem innego pliku lub opuszczeniem strony i zachowuje kopię w tej przeglądarce na wypadek zamknięcia karty.
