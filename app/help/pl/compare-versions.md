---
title: Porównaj dwie wersje modelu
summary: Otwórz dwie wersje tego samego modelu IFC i sprawdź, które elementy zostały dodane, usunięte i zmienione, dopasowane po ich GlobalId, wraz z plikiem CSV z każdą zmianą.
keywords: porównanie, różnica, wersje, rewizja, zmiany, zmieniony, dodany, usunięty, przesunięty, globalid, guid, co się zmieniło
from: cfca6971
---

## Co zrobisz

Zobacz, co zmieniło się między modelem, który miałeś, a tym, który dostałeś: które elementy są nowe, które zniknęły, które się przesunęły albo dostały nowe wartości właściwości.

## Kroki

1. Otwórz nowszą wersję, następnie kliknij {{ui:Dodaj model…}} i wybierz starszą. Zobacz [Zobacz kilka modeli IFC razem](topic:several-models).
2. W {{ui:Modele}} otwórz {{ui:Porównaj wersje}}.
3. Wybierz {{ui:Starsza wersja}} i {{ui:Nowsza wersja}}.
4. Kliknij {{ui:Porównaj}}.
5. Kliknij element na liście, aby go wybrać i zobaczyć jego właściwości. Kliknij {{ui:Pobierz CSV}}, aby pobrać każdą zmianę, właściwość po właściwości.
6. Kliknij {{ui:Wyczyść}}, aby wrócić do zwykłego widoku.

## Co powinno być widoczne

- **Dodane** elementy na niebiesko, z nowszej wersji.
- **Usunięte** elementy na czerwono, ze starszej wersji.
- **Zmienione** elementy na ochrowo, z nowszej wersji, z opisem zmiany: właściwości, przesunięcie z podaniem odległości albo nowy kształt.
- Wszystko, co się nie zmieniło, widoczne przez przezroczystość.

## Warto wiedzieć

- Elementy dopasowuje się po GlobalId. Program, który nadaje elementom nowe GlobalId przy każdym eksporcie, sprawi, że każdy element będzie wyglądał na usunięty i dodany ponownie.
- Pozycje porównuje się tam, gdzie modele stoją na scenie. Jeśli jedną wersję przesunięto celowo, najpierw wyrównaj je narzędziem {{ui:Przesuń}} w {{ui:Modele}}.
- GlobalId użyte dwa razy w jednym modelu są pomijane w porównaniu. [Sprawdź model pod kątem typowych problemów](topic:model-checks) wskazuje takie przypadki.

## Dalej

- [Problemy i pliki BCF](topic:issues-bcf)
- [Zsumuj ilości według właściwości](topic:quantity-totals)
