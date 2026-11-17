---
title: Wyposażenie MEP z przyłączami
summary: Umieszczaj ogólne centrale wentylacyjne, wentylatory, pompy, kotły, podgrzewacze wody, jednostki końcowe, dyfuzory, kratki i zbiorniki o wymiarach, które wpiszesz, każde z przyłączami rur i przewodów, do których podłączają się inne przebiegi.
keywords: mep, wyposażenie, centrala wentylacyjna, ahu, wentylator, wentylator kanałowy, pompa, kocioł, podgrzewacz wody, jednostka końcowa, vav, dyfuzor, kratka, nawiew, zbiornik, przyłącze, przyłącza, połączenie, króciec, rozmiar szyjki, hvac, instalacje sanitarne, instalacje mechaniczne, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Co zrobisz

Umieść wyposażenie na końcach rur i przewodów. Każdy element to ogólny kształt o wymiarach, które wpiszesz, z przyłączami jako **przyłączami**: miejscami, w których łączy się z nim rura lub przewód, z podaniem systemu, kierunku przepływu i rozmiaru. Rury i przewody rysowane z przyłącza przyjmują jego rozmiar i system i pozostają do niego przypięte: zobacz [Podłączanie rur i przewodów do wyposażenia](topic:mep-connections).

:::note
To pomoc projektowa i koordynacyjna, dobierana przez inżyniera. Wyposażenie nie jest produktem konkretnego producenta: bez mocy, ciężarów i rozmiarów przyłączy producentów. Gdy ich potrzebujesz, przenieś model producenta z programu MEP jako IFC.
:::

## Umieszczanie elementu

1. Włącz {{ui:Rysuj}}, otwórz {{ui:Kompilacja}} i wybierz {{ui:Wyposażenie}}.
2. Na pasku wybierz rodzaj i wpisz jego wymiary. Każdy rodzaj wymaga własnych:

| Rodzaj | Wpisujesz | Jego przyłącza |
|---|---|---|
| Centrala wentylacyjna | długość, szerokość, wysokość; otwory nawiewny i wywiewny; rozmiar rury i system nagrzewnicy; rozmiar odpływu skroplin | wyjście kanału nawiewnego, wejście kanału wywiewnego, wejście i wyjście nagrzewnicy, odpływ skroplin |
| Wentylator kanałowy | średnica, długość, system | wejście i wyjście kanału |
| Pompa | rozmiar rury, system | wlot i wylot |
| Kocioł | długość, szerokość, wysokość, rozmiar rury, rozmiar gazu, średnica spalin | wyjście zasilania grzewczego i wejście powrotu, wejście gazu, wyjście spalin |
| Podgrzewacz wody | średnica, wysokość, rozmiar rury, gaz lub prąd | wejście zimnej wody, wyjście ciepłej wody (oraz wejście gazu i spaliny, gdy spala gaz) |
| Jednostka końcowa | długość, szerokość, wysokość, okrągłe wejście, szerokość i wysokość wyjścia | wejście i wyjście powietrza nawiewanego |
| Dyfuzor | czoło, szyjka, system | jego szyjka (wejście powietrza) |
| Kratka | szerokość i wysokość czoła, szerokość i wysokość szyjki, system | jej szyjka (wyjście powietrza do przewodu wywiewnego lub wyrzutowego) |
| Zbiornik | średnica, wysokość, rozmiar rury, system | wejście u góry, wyjście blisko dołu |
| Grzejnik | długość, wysokość, głębokość, rozmiar rury, system | zasilanie u góry jednego końca, powrót u dołu drugiego |
| Konwektor / grzejnik płytowy | długość, wysokość, głębokość, rozmiar rury, system | zasilanie na jednym końcu, powrót na drugim |
| Rodzina producenta | rodzinę (zobacz [Specyfikacje rur, zawory, przepustnice i rodziny producentów](topic:pipe-specs)) | przyłącza, które otrzymała jego rodzina |

3. Ustaw **Na wysokości**, czyli wysokość podstawy nad poziomem. Wysokość dyfuzora lub kratki to wysokość ich czoła: wpisz wysokość sufitu.
4. Wpisz **Oznaczenie**, jeśli chcesz (`AHU-1`); następny element tego samego rodzaju dostaje kolejny numer.
5. Przesuń wskaźnik nad rzut: obrys i jego przyłącza podążają za nim. Naciśnij {{key:R}}, aby obrócić o 90°. Kliknij, gdzie ma stanąć.

Rozmiary rur to stalowe rozmiary rur (ASME B36.10M). Rura narysowana z pompy wykonanej z innego materiału przyjmuje ten sam rozmiar nominalny w swoim materiale.

## Zmiana lub usunięcie

Wskaż element w rzucie lub w widoku 3D. Właściwości pokazują każdy wpisany wymiar, oznaczenie, X, Y, wysokość i obrót oraz każde przyłącze: jego rozmiar, system, kierunek przepływu i to, czy coś jest do niego podłączone. Każda zmiana to jeden krok {{ui:Cofnij}}; przebiegi przypięte do jego przyłączy przesuwają się razem z nim. {{key:Delete}} usuwa element; przebiegi przypięte do niego pozostają, a sprawdzenie połączeń je wypisuje.

## W pliku IFC

Każdy rodzaj zapisuje się jako swoja klasa IFC: IfcUnitaryEquipment (centrala wentylacyjna), IfcFan, IfcPump, IfcBoiler (kocioł; podgrzewacz wody to IfcBoiler typu water z typem obiektu „Water heater”), IfcAirTerminalBox (jednostka końcowa), IfcAirTerminal (dyfuzor, kratka) i IfcTank, z typem wspólnym dla każdego elementu tego samego rodzaju i rozmiarów. Pliki IFC2X3 otrzymują IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal i IfcFlowStorageDevice z odpowiednimi typami. Każde przyłącze jest IfcDistributionPort umieszczonym w miejscu połączenia, skierowanym na zewnątrz, z kierunkiem przepływu i systemem; inne programy odczytują, który przebieg łączy się z którym przyłączem. Element należy do systemu każdego ze swoich przyłączy i niesie zestawy elementów biblioteki, jakie ma każdy umieszczony element biblioteki.
