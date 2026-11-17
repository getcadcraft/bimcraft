---
title: Schody i balustrady
summary: Rysuj proste, L, U i ślimakowe schody, które dobierają podstopnice i stopnice do wysokości między kondygnacjami, z poręczami i słupkami oraz wyciętym szybem schodowym w stropie wyżej; rysuj balustrady ochronne wzdłuż tarasów i wokół otworów.
keywords: ślimakowe, okrągłe schody, schody, klatka schodowa, bieg, podstopnica, stopnica, spocznik, stopnie wachlarzowe, schody L, schody U, zawrotka, poręcz, balustrada ochronna, balustrada, szczebel, słupek, szyb schodowy, prześwit, taras, balkon
from: 16e5ace4
---

## Co zrobisz

Dodaj schody między poziomami i balustrady tam, gdzie ludzie ich potrzebują. Schody same wyliczają stopnie z wysokości między poziomami, trzymają się zwyczajowych limitów mieszkaniowych, dają poręcze na otwartych bokach i wycinają szyb schodowy w stropie wyżej.

## Rysowanie schodów

1. Na poziomie, z którego zaczynają się schody, otwórz {{ui:Kompilacja}} i wybierz {{ui:Schody}}.
2. Wybierz rodzaj — **Proste**, **L ze spocznikiem**, **U ze spocznikiem** lub **L ze stopniami wachlarzowymi** — w którą stronę **skręcają**, ich **szerokość** i gdzie mają mieć **poręcze**.
3. Kliknij, gdzie zaczynają się schody: w środku przedniej krawędzi dolnego stopnia.
4. Przesuń wskaźnik w kierunku, w którym idą schody; stopnie podążają za nim, wraz z liczbą podstopnic i stopnic. Przyciągają się do ścian i do kątów co 15°; przytrzymaj {{key:Shift}}, aby zachować kąt prosty.
5. Kliknij. {{key:Esc}} zaczyna od nowa.

## Rysowanie schodów ślimakowych

1. Otwórz {{ui:Kompilacja}}, wybierz {{ui:Schody}}, a następnie **Ślimakowe** jako rodzaj.
2. Ustaw **Skręt**, czyli w którą stronę schody wiją się w górę (lewo to przeciwnie do ruchu wskazówek zegara).
3. Kliknij środek swojego słupa.
4. Kliknij kierunek, w którym wskazuje dolny stopień.

Zaczyna się o szerokości 30" (stopnica, od słupa do zewnątrz), ze słupem 4½". Podstopnice wyliczane są z wysokości od podłogi do podłogi, domyślnie najwyżej 9½". Stopnice mają 7½" głębokości na linii chodu, 12" od słupa. Poręcz biegnie po zewnętrznej stronie.

We **Właściwościach** schody ślimakowe dodają **Słup środkowy** i jego średnicę. Pole **Stopnica** mierzy się na linii chodu. Sprawdzenia są oznaczone jako wartości domyślne dla schodów ślimakowych: wolna szerokość 26", co najmniej 6¾" stopnicy na linii chodu, podstopnice najwyżej 9½" i poręcze 34"–38". Nie są to obliczenia inżynierskie; decyzję podejmuje inspektor nadzoru budowlanego.

## Jak wylicza się stopnie

Wysokość między podłogą poziomu a poziomem wyżej dzieli się na równe podstopnice nie wyższe niż 7¾", a każda stopnica ma 10" głębokości (oba wymiary można zmienić we **Właściwościach**). Spocznik liczy się jako jeden stopień; stopnie wachlarzowe to trzy stopnie rozłożone wokół wewnętrznego narożnika. Zmiana wysokości poziomu powoduje ponowne wyliczenie wszystkich schodów na nim.

:::warning
7¾" podstopnice, stopnice 10", szerokość 36", prześwit 6'-8" i poręcze 34"–38" to wartości domyślne według zwyczajowych przepisów mieszkaniowych, a nie obliczenia inżynierskie. **Właściwości** pokazują, które są spełnione; o tym, co obowiązuje, decyduje inspektor nadzoru budowlanego.
:::

## Zmiana schodów

Wybierz je (kliknij na rzucie lub w widoku 3D) i zmień we **Właściwościach**: ich rodzaj i skręt, szerokość, najwyższą podstopnicę, głębokość stopnicy, poręcze i ich wysokość oraz **Wytnij strop powyżej** dla szybu schodowego. Pod spodem pokazane są podstopnice i stopnice, jakie ostatecznie uzyskały.

## Szyb schodowy

Jeśli poziom wyżej ma podłogę, schody wycinają ją tam, gdzie stopnie miałyby mniej niż 6'-8" prześwitu. Wycięcie przesuwa się razem ze schodami i znika, gdy schody zostaną usunięte.

## Rysowanie balustrady

1. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Balustrada}}.
2. Wybierz **Balustradę ochronną** (wysokość 36") lub **Poręcz** i jej wysokość.
3. Klikaj wzdłuż krawędzi — tarasu, balkonu, wokół szybu schodowego — i kliknij dwukrotnie lub naciśnij {{key:Enter}}, aby zakończyć.

Balustrady dostają słupki na końcach i narożnikach oraz szczeble z odstępem poniżej 4". Wybierz jedną, aby zmienić jej rodzaj, wysokość lub to, jak wysoko nad podłogą się zaczyna.

## Rysowanie ogrodzenia

W tym samym narzędziu Balustrada wybierz **Ogrodzenie**, ustaw jego wysokość (na start 1800 mm), kliknij wzdłuż linii ogrodzenia i naciśnij {{key:Enter}}.

- Ogrodzenie dostaje słupek na każdym końcu i każdym narożniku oraz słupek co najwyżej co 2.4 m między nimi. Ogrodzenie płytowe ma płytę między słupkami; ogrodzenie szczeblowe ma dwa rygle. Te wymiary to typowe wybory, a nie wymóg przepisów: lokalne przepisy ograniczają wysokość ogrodzenia.
- Jest to jeden element w modelu (IfcRailing o nazwie Fence) z zestawem właściwości {{ui:CadCraft_Fence}}: styl, wysokość, słupki, płyty, rygle, bramy, długość i pole płyt. Jeden krok cofania.
- Tutaj nie są rysowane: bramy (generator w CivilCraft je rozmieszcza), sztachety, teren (ogrodzenie stoi na poziomie) ani wybieranie pojedynczego słupka.

## Co jest zapisywane

Schody zapisują się jako schody IFC złożone z biegów (z ich podstopnicami, stopnicami, wysokością podstopnicy i długością stopnicy), spocznikami, stopniami wachlarzowymi i poręczami; szyb schodowy jest otworem w płycie stropowej wyżej. Balustrady są balustradami IFC z ich długością oraz liczbą szczebli i słupków.
