---
title: Nakładaj materiały na ściany, podłogi i dachy
summary: Nadaj elementom materiał, taki jak cegła, okładzina elewacyjna, gont, drewno lub płytka, na cały element albo na jedną stronę. Materiał jest zapisany w IFC i pokazany na renderach.
keywords: maluj, materiał, materiały, wykończenie, wykończenia, tekstura, cegła, okładzina, gont, pokrycie dachowe, drewno, kamień, płytka, beton, tynk, trawa, żwir, szkło, metal, strona ściany, wewnątrz, na zewnątrz, wykończenie podłogi, pomieszczenie, styl powierzchni
from: fbfed676
---

{{ui:Maluj}} na pasku narzędzi otwiera bibliotekę materiałów nad widokiem 3D: cegła i bloczki, okładziny elewacyjne, pokrycia dachowe, drewno, kamień, płytki, beton, tynk, grunt, szkło i metal.

## Maluj elementy

1. Kliknij {{ui:Maluj}}.
2. Kliknij materiał.
3. Kliknij elementy w widoku 3D. Każde kliknięcie maluje element, w który klikasz.

Aby pomalować wiele naraz, najpierw je zaznacz (kliknięciem, {{key:Ctrl}}+kliknięciem albo [wyszukiwaniem](topic:find)), a potem kliknij materiał: każdy zaznaczony element dostaje go jednym krokiem.

Element od razu pokazuje kolor materiału w widoku 3D. Jego tekstura jest widoczna na [renderze](topic:render). {{key:Esc}} albo {{ui:Zamknij}} kończy malowanie.

## Maluj jedną stronę

Wybierz {{ui:Tylko kliknięta strona}}, a następnie kliknij stronę, którą chcesz: zewnętrzną stronę ściany w okładzinie i jej wnętrze w innym wykończeniu, górę podłogi w drewnie z pozostawionym spodem. Reszta elementu zachowuje swój materiał.

Strona jest wyznaczana na podstawie kierunków samego elementu, więc pozostaje tą samą stroną, gdy go przesuwasz lub obracasz.

Aby malować podłogi pomieszczenie po pomieszczeniu, nadaj każdemu pomieszczeniu własną podłogę ({{ui:Rysuj}} › {{ui:Podłoga}} › **To pomieszczenie**, zobacz [Pomieszczenia, podłogi, sufity i dachy](topic:floors-and-roofs)), a potem maluj górę każdej podłogi.

## Zdejmij materiał

Kliknij paskową próbkę ({{ui:Bez materiału}}), a potem kliknij element. Znikają wszystkie materiały z niego, łącznie ze stronami.

## W pliku

Malowanie zmienia IFC (jeden krok za każdym razem, {{key:Ctrl+Z}} je cofa) i pozostaje zwykłym IFC:

- każdy pomalowany element dostaje zestaw właściwości `CadCraft_Render` z nazwą jego materiału oraz po jednej właściwości na każdą pomalowaną stronę;
- jego bryła dostaje styl powierzchni z kolorem materiału, dzięki czemu inne programy BIM pokazują kolor. W IFC4 styl podaje także teksturę.

Gdy BimCraft przekształca pomalowaną ścianę (na przykład przesuwasz jej koniec), ściana zachowuje swój materiał i kolor, w BimCraft, na obrazach i w innych programach.

:::note
Tekstury są rysowane przez sam BimCraft: działają offline i są wolne do dowolnego użytku (CC0). Własne tekstury obrazów nie są jeszcze obsługiwane.
:::

## Tekstury w widoku 3D

Pomalowana ceglana ściana pokazuje swoje cegły, a drewniana podłoga swoje deski, w rzeczywistym rozmiarze, zaraz po nałożeniu farby. Odznacz **Pokaż tekstury w widoku 3D** w palecie Maluj, aby zobaczyć zamiast tego płaskie kolory (bardzo duży model sam je wyłącza i o tym informuje). Kolor według właściwości zawsze pokazuje własne kolory. Tekstury rysuje program, więc nic nie jest pobierane, a rendery i plik glTF zawierają je w obu przypadkach.
