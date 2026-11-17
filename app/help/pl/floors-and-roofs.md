---
title: Pokoje, podłogi, sufity i dachy
summary: Pokoje pojawiają się, gdy zamykają je ściany; nadaj pokojowi lub całemu budynkowi podłogę i sufit oraz załóż dach czterospadowy lub dwuspadowy na ściany. Wszystko podąża za ścianami, gdy te są przesuwane.
keywords: pokój, pokoje, przestrzeń, powierzchnia, obwód, podłoga, płyta, podłoga pomocnicza, sufit, dach, dach czterospadowy, dach dwuspadowy, nachylenie, wysunięcie, okap, kalenica, dolina, 6/12
from: 1fb1813c
---

## Co zrobisz

Dokończ obudowę budynku. Pokoje powstają same ze ścian; podłogi, sufity i dach wykonuje się jednym kliknięciem. Ponieważ są wyznaczane na podstawie ścian, podążają za nimi, gdy ściany się przesuwają.

## Pokoje

Każda przestrzeń zamknięta narysowanymi ścianami jest pokojem. Pojawia się od razu, gdy zamyka ją ostatnia ściana, z numerem (101, 102 … na pierwszej kondygnacji, 201 … na następnej) i nazwą (**Pokój 1**, **Pokój 2** …), a jego powierzchnia jest pokazana na rzucie w jego środku.

- Przy włączonym {{ui:Zaznacz}} kliknij wewnątrz pokoju, aby go wybrać. We **Właściwościach** zmień jego **Nazwę** (na przykład `Kuchnia`) i **Numer**; jego powierzchnia i obwód są pokazane.
- Usuń ścianę między dwoma pokojami, a staną się jednym; narysuj ścianę przez pokój, a podzieli się na dwa. Pokój zachowuje swoją nazwę i numer, gdy ściany wokół niego się przesuwają.
- Pokoju nie można usunąć osobno: jest przestrzenią, którą tworzą ściany.

Powierzchnie są mierzone wewnątrz lic ścian. Pokoje są zapisywane jako przestrzenie IFC z powierzchnią podłogi, obwodem, wysokością i objętością, dzięki czemu zestawienia je odczytują (zob. [Sumowanie ilości, wypisywanie elementów i zestawianie przestrzeni](topic:quantity-totals)).

## Podłogi

1. Kliknij {{ui:Podłoga}}.
2. Wybierz **Ten pokój** lub **Cały budynek**, **Rodzaj** (podłoga drewniana lub płyta betonowa) i jej grubość.
3. Wskaż wnętrze pokoju (lub dowolne miejsce wewnątrz budynku). To, co podłoga by pokryła, zostaje podświetlone wraz z powierzchnią.
4. Kliknij. Górna powierzchnia podłogi jest poziomem kondygnacji; podłoga schodzi w dół o swoją grubość. Podłoga na cały budynek sięga do zewnętrznych lic ścian.

## Sufity

1. Kliknij {{ui:Sufit}}.
2. Wybierz **Ten pokój** lub **Cały budynek** oraz jego **Wysokość** nad podłogą.
3. Wskaż wnętrze i kliknij.
4. Aby zobaczyć go od dołu, z jego siatką i oświetleniem, przełącz rzut na rzut sufitu: zob. [Widoki, zakresy widoku i własne arkusze](topic:views-and-sheets).

## Dach

1. Na kondygnacji, której ściany noszą dach, kliknij {{ui:Dach}}.
2. Wpisz **Nachylenie** jako wzniesienie na 12 (`6/12`) lub w stopniach (`30`) oraz **Wysunięcie**.
3. Wybierz **Zakończenia**: **Dach czterospadowy** (każda strona jest nachylona), **Szczyty na krótszych bokach** lub **Szczyty na dłuższych bokach** (budynek o czterech bokach) albo **Pulpitowy**.
4. Wskaż wnętrze budynku: okap i kalenica pokażą się na rzucie. Kliknij.

Dach leży na ścianach, na kondygnacji nad nimi, a jego spód łączy się z zewnętrznym licem ścian. Szczyty są wypełniane ścianą szczytową tak grubą jak ściana poniżej. Budynek w kształcie L, T lub U dostaje dach czterospadowy, którego skrzydła spotykają się w dolinach.

## Zmiana

Wybierz podłogę, sufit lub dach (w widoku 3D, w drzewie modelu albo dach, klikając wewnątrz jego obrysu na kondygnacji wyżej) i zmień go we **Właściwościach**: rodzaj podłogi, jej grubość i to, o ile jej górna powierzchnia jest nad poziomem; dla sufitu wysokość, grubość i **Wzór** (siatkę, którą rzut sufitu rysuje na nim: brak, 600 × 600, 600 × 1200, 2' × 2' lub 2' × 4'); dla dachu nachylenie, wysunięcie, zakończenia i grubość. Każda zmiana to jeden krok cofnięcia.

## Nadaj podłodze, sufitowi lub dachowi typ z warstwami

Podłoga, sufit i dach mogą mieć **typ**, jak ściana: nazwaną konstrukcję warstw, każda z materiałem i rzeczywistą grubością.

- **Przy umieszczaniu.** Narzędzia Podłoga, Sufit, Dach i Rysuj podłogę mają na swoim wierszu listę **Typ**. **Brak typu** umieszcza jak dotąd, z własną grubością. Typ umieszcza go o grubości równej sumie grubości warstw typu.
- **Później.** Wybierz podłogę, sufit lub dach i wybierz **Typ** we Właściwościach. Element pozostaje tym samym elementem: jego położenie, pokój i dane są zachowane, a nic nie jest rysowane ponownie. Zmienia się tylko jego typ, grubość i materiał. W ten sposób element z etapu szkicu staje się opracowanym: zamień jego ogólny typ na prawdziwy.
- **Edytuj typ…** otwiera edytor typu: warstwy od **góry** w dół, rdzeń, funkcja każdej warstwy i znacznik LOD typu. Zapis zmienia każdy element tego typu jednym krokiem, a jedno Cofnij to cofa. Zmiana typu startowego zapisuje kopię jako twój własny typ.
- Gdy element ma typ, jego **Grubość** należy do typu i nie można jej wpisać. Aby ją zmienić, wybierz inny typ lub **Brak typu**.

Typy startowe to po jednym **ogólnym** typie dla każdego (jedna warstwa ogólnego materiału, oznaczona LOD 200) oraz dwa typy warstwowe (oznaczone LOD 300): podłoga drewniana na belkach stropowych i podłoga betonowa z wylewką; dach drewniany i betonowy dach płaski; sufit z płyt gipsowo-kartonowych i sufit podwieszany z płytek. To wartości wyjściowe, a nie sprawdzone konstrukcje: przed użyciem sprawdź warstwy.

Zestawienie **Warstwy: powierzchnia i objętość** wymienia każdą warstwę każdego używanego typu; zob. [Zestawienia, wymiary i PDF](topic:plan-schedules-and-pdf). Typy podłóg, sufitów i dachów przenoszą się między projektami w pakiecie typów lub jako element Biblioteki; zob. [Pakiety typów](topic:type-packs).

## Warto wiedzieć

- Przesuwanie, dodawanie lub usuwanie ścian ponownie tworzy pokoje, podłogi, sufity i dach nad nimi.
- Dach pasuje do dowolnego obrysu. Aby nadać każdej ścianie własne nachylenie, szczyt, zakończenie pulpitowe, podwyższoną murłatę, deskę czołową i podbitkę albo narysować pojedynczą płaszczyznę dachu, zob. [Dachy: nachylenie dla każdej ściany, szczyty, pulpity i płaszczyzny dachu](topic:roofs).
- {{key:Delete}} usuwa wybraną podłogę, sufit lub dach.
