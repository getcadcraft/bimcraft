---
title: Oszacowanie obciążeń grzewczych i chłodniczych
summary: Strata ciepła każdego pomieszczenia, jego ogrzewanie w ciągu roku według stopniodni oraz szczyt chłodzenia, wyliczone z tego, co je ogranicza w modelu, i ze współczynnika U każdego elementu, z pokazanymi wszystkimi danymi wejściowymi. Narzędzie pomocnicze projektanta, a nie obliczenie zgodności z przepisami.
keywords: energia, ogrzewanie, chłodzenie, strata ciepła, obciążenie cieplne, obciążenie chłodnicze, współczynnik U, przenikalność cieplna, stopniodni, HDD, wentylacja, wymiany powietrza, zyski wewnętrzne, zysk słoneczny, lambda, przewodność, izolacja, wstępny projekt, analiza, pomieszczenia, przestrzenie
from: ec312d20
---

Na karcie {{ui:Światło dzienne}}, po kliknięciu {{ui:Oblicz}}, otwórz {{ui:Obciążenia grzewcze i chłodnicze}} i kliknij {{ui:Oblicz obciążenia}}. Każde pomieszczenie dostaje swoją **stratę ciepła** w zimowy dzień projektowy, **ogrzewanie w ciągu roku** oraz **szczyt chłodzenia** w gorący dzień. Nic nie jest przesyłane; nic w modelu się nie zmienia, chyba że wpiszesz współczynnik U.

:::warning
To **narzędzie pomocnicze projektanta, a nie obliczenie zgodności z przepisami**: szacunek w stanie ustalonym, z każdym danym wejściowym na ekranie. To **nie** jest metoda ISO 52016-1, nie jest symulacją ani świadectwem energetycznym; nie dobiera kotłów, pomp ciepła ani agregatów chłodniczych. Wyniki sprawdź, a urządzenia dobierz z inżynierem.
:::

## Co ogranicza każde pomieszczenie

BimCraft znajduje to w samym modelu, więc działa każdy plik IFC z dowolnego programu (nie potrzebuje granic przestrzeni, które eksportują niektóre programy). Z każdego fragmentu powierzchni pomieszczenia patrzy prosto na zewnątrz:

- pierwsza ściana, okno, drzwi, podłoga, dach, pokrycie, ściana osłonowa lub belka, którą napotka, **ogranicza** ten fragment;
- tuż za tym elementem: albo **inne pomieszczenie** (liczone jako sąsiednie, w tej samej temperaturze: brak strat), albo **nic** (na zewnątrz), albo, pod podłogą na najniższej kondygnacji, **grunt**;
- otwarte przejście do innego pomieszczenia liczy się jako sąsiednie; fragment, który nie trafia w nic (w odległości 1.5 m w bok lub w dół, 8 m w górę), jest wypisywany przy pomieszczeniu i pomijany.

Okna i drzwi biorą swój rozmiar z IFC (szerokość całkowita × wysokość) z ściany, w której są osadzone. Kliknij pomieszczenie w tabeli, aby zobaczyć każdy element, który je ogranicza, wraz z jego powierzchnią, współczynnikiem U i tym, skąd pochodzi ten współczynnik.

## Współczynniki U

Dla każdego elementu BimCraft używa, w tej kolejności:

1. **Własny współczynnik U z IFC** — `ThermalTransmittance` we wspólnym zestawie właściwości elementu (na przykład `Pset_WallCommon`) lub jego typu. Większość programów projektowych potrafi go zapisać.
2. **Jego warstwy materiałowe** — 1 ÷ (opór powierzchni wewnętrznej + grubość każdej warstwy ÷ jej przewodność λ + opór powierzchni zewnętrznej), ze zwykłymi oporami powierzchni (0.13 i 0.04 m²K/W dla ścian; 0.10 w górę, 0.17 w dół po stronie wewnętrznej). Typowe przewodności na start (wełna mineralna 0.035, cegła 0.77, beton 1.4…); w polu {{ui:Przewodność materiałów}} wpisz podaną przez producenta, a każdy współczynnik U wynikający z tych warstw się zaktualizuje.
3. **Wartość typowa** (ściany 0.3, dachy 0.2, podłogi 0.25, okna 1.4, drzwi 1.6 W/m²K), oznaczona jako taka — wpisz własną.

Współczynnik U wpisany w szczegółach pomieszczenia jest zapisywany we wspólnym zestawie właściwości elementu jako `ThermalTransmittance` (jeden krok; {{key:Mod+Z}} go cofa). Jeśli kilka elementów korzysta z tego zestawu (na przykład jeden typ ściany), zmienią się wszystkie razem, a wiersz stanu podaje, ile ich jest.

## Ogrzewanie

- **Strata ciepła** = Σ U × A × (wewnątrz − na zewnątrz) dla wszystkiego, co graniczy z zewnętrzem, + Σ U × A × (wewnątrz − grunt) dla podłóg na gruncie + 0.335 × wymiany powietrza na godzinę × objętość pomieszczenia × (wewnątrz − na zewnątrz). 0.335 Wh na m³ na kelwin to gęstość powietrza (1.2 kg/m³) razy jego pojemność cieplna (1005 J/kgK).
- **Ogrzewanie w ciągu roku** = (strata pomieszczenia na stopień na zewnątrz, przez przegrody i powietrze, plus jego strata do gruntu przeskalowana do tej samej różnicy) × **stopniodni** × 24 ÷ 1000, w kWh. Wpisz stopniodni dla danego miejsca albo kliknij {{ui:Wczytaj stopniodni z CSV…}} (jeden wiersz na dzień lub miesiąc; ostatnia liczba w każdym wierszu jest sumowana). Używaj stopniodni przy temperaturze bazowej, z której korzysta Twoje źródło: ta baza już uwzględnia darmowe ciepło od ludzi, świateł i słońca.

## Chłodzenie

**Szczyt chłodzenia** = ciepło przez przegrody i powietrze w letniej temperaturze projektowej + ludzie (powierzchnia na osobę × ciepło na osobę) + oświetlenie i urządzenia na m² podłogi + **słońce**: szczyt {{ui:Słońce w oknach danego dnia}} dla tego pomieszczenia. Najpierw policz słońce w gorący dzień; do tego czasu słońce liczy się jako 0, a sekcja to podaje. Szczyty poszczególnych części są sumowane, nawet jeśli przypadają na różne godziny, co trochę zawyża wynik.

## Czego nie uwzględnia

- Miesięczne i godzinowe metody ISO 52016-1 (norma płatna), ciepło magazynowane w masie budynku, mostki cieplne, sprawność systemów grzewczych i chłodniczych oraz pliki klimatyczne.
- Pomieszczenia sąsiadujące ze sobą przyjmowane są w tej samej temperaturze; przestrzenie nieogrzewane nie są modelowane.

Zobacz też [Oszacowanie światła dziennego w każdym pomieszczeniu](topic:daylight-factor).
