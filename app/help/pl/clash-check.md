---
title: Sprawdź kolizje
summary: Znajdź miejsca, w których elementy jednego zestawu wchodzą w elementy drugiego — kanały przez belki, ściany w stropy — w jednym modelu lub w kilku, z tolerancją, i zamień kolizję w problem.
keywords: kolizja, wykrywanie kolizji, sprawdzanie kolizji, twarda kolizja, interferencja, zderzenie, koordynacja, nakładanie, tolerancja, mep, konstrukcja
from: 9cb12346
---

## Co zrobisz

Znajdź miejsca, w których dwa zestawy elementów wchodzą w siebie, na przykład wszystko w modelu instalacji względem konstrukcji, a następnie przejrzyj każde z nich i zachowaj te, które mają znaczenie, jako problemy.

## Kroki

1. Otwórz model IFC i dodaj pozostałe przyciskiem {{ui:Add a model…}}, jeśli sprawdzasz między modelami. Zobacz [Oglądaj kilka modeli IFC razem](topic:several-models).
2. Otwórz {{ui:Clash check}} w lewym panelu.
3. W {{ui:Check}} i {{ui:Against}} wybierz dwa zestawy: elementy, które zaznaczyłeś, klasę (we wszystkich otwartych modelach), zapisany zestaw wyszukiwania (zobacz [Znajdź elementy po klasie, nazwie lub właściwości](topic:find)) albo wszystko.
4. Ustaw, jakie nakładanie ignorować, w metrach. 0.01 pomija elementy, które się tylko stykają.
5. Naciśnij {{ui:Run}}. Sprawdzanie działa w tle; {{ui:Cancel}} je zatrzymuje.
6. Wybierz wynik, aby go zobaczyć: oba elementy zostaną zaznaczone i pokazane, reszta będzie prześwitująca, a widok przybliży się do nich.
7. Wybierz {{ui:Make an issue of it}} pod wynikiem, aby opisać go na karcie {{ui:Issues}}. Zobacz [Problemy i pliki BCF](topic:issues-bcf).

## Czego się spodziewać

- Kolizje wymienione z nazwami obu elementów (i ich plikami, gdy otwartych jest kilka modeli) oraz głębokością nakładania, najgłębsze na początku.
- Powierzchnie, które się tylko stykają, na przykład ściana stojąca na stropie albo drzwi w otworze, nie są kolizjami.

## Warto wiedzieć

- To podstawowe sprawdzenie twardych kolizji: elementy, których powierzchnie się przecinają. Element całkowicie ukryty w innym (rura wbudowana w ścianę) nie jest jeszcze wykrywany.
- Głębokość to, o ile co najmniej nakładają się granice dwóch elementów: wskazówka, a nie dokładny pomiar.

## Dalej

- [Mierz odległości, pola powierzchni i położenia w 3D](topic:measure)
- [Ukrywanie, izolowanie i prześwitywanie elementów](topic:hide-and-isolate)
