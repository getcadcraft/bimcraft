---
title: Jednostki split, VRF i klimakonwektory
summary: Umieszczaj jednostki wewnętrzne ścienne, kasetonowe i kanałowe, jednostki zewnętrzne single-split i VRF, złącza refnet oraz klimakonwektory dwu- lub czterorurowe, każdy z przyłączami czynnika chłodniczego, wody, skroplin i kanałów, i rysuj między nimi zestawy przewodów o wymiarach z tabeli, którą możesz zmienić.
keywords: split, mini split, minisplit, multi split, vrf, vrv, zmienny przepływ czynnika, pompa ciepła, jednostka wewnętrzna, jednostka zewnętrzna, agregat skraplający, montaż ścienny, wysoki montaż ścienny, kaseton, kanałowa, ukryta, klimakonwektor, fcu, 2-rurowy, 4-rurowy, refnet, rozgałęźnik, złącze Y, zestaw przewodów, lineset, czynnik chłodniczy, przewód cieczy, przewód gazowy, przewód ssawny, acr, miedź, skropliny, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Co zrobisz

Umieść jednostki układu split, multi-split lub VRF oraz klimakonwektory w modelu, a następnie połącz je zestawami przewodów: przewodem cieczy i przewodem gazowym z miedzi ACR, przymocowanymi do przyłączy jednostek. Jednostki działają jak każdy inny element z [Wyposażenie MEP z przyłączami](topic:mep-equipment): ten sam pasek, Właściwości, przyłącza i [połączenia](topic:mep-connections).

:::note
To pomoc w rysunku i koordynacji. Jednostki są ogólnymi kształtami o wymiarach, które wpisujesz, a nie produktami konkretnego producenta. Ich średnice rur pochodzą z tabeli **typowych wartości przykładowych** dla urządzeń na R410A i R32, a nie od producenta: rzeczywiste wymiary określa instrukcja montażu producenta jednostki, a długie trasy lub duże różnice wysokości je zmieniają. Zmień tabelę lub wpisz wymiary tak, aby pasowały do Twoich jednostek.
:::

## Umieść jednostkę

1. Włącz {{ui:Rysuj}}, otwórz {{ui:Kompilacja}} i wybierz {{ui:Wyposażenie}}.
2. Wybierz rodzaj i ustaw jego wartości:

| Rodzaj | Ustawiasz | Jego przyłącza |
|---|---|---|
| Split, jednostka wewnętrzna, ścienna | moc, przewód cieczy i gazowy, długość, głębokość, wysokość, rozmiar odpływu skroplin | czynnik: ciecz i gaz, odpływ skroplin (na prawym końcu, przy ścianie) |
| Split, jednostka wewnętrzna, kasetonowa | moc, przewód cieczy i gazowy, panel, korpus, wysokość, rozmiar odpływu skroplin | czynnik: ciecz i gaz, odpływ skroplin (z jednej strony, blisko góry) |
| Split, jednostka wewnętrzna, kanałowa | moc, przewód cieczy i gazowy, długość, szerokość, wysokość, otwory nawiewu i wywiewu, rozmiar odpływu skroplin | nawiew do kanału, wywiew z kanału, czynnik: ciecz i gaz, odpływ skroplin |
| Split, jednostka zewnętrzna | moc, przewód cieczy i gazowy, szerokość, głębokość, wysokość | czynnik: ciecz i gaz (z prawej strony) |
| Jednostka zewnętrzna VRF | moc, przewód cieczy i gazowy, szerokość, głębokość, wysokość | czynnik: ciecz i gaz (z przodu, nisko) |
| Złącze refnet | przewód cieczy lub gazowy, obciążenie każdej gałęzi, rura na każdym końcu | wejście, gałąź A, gałąź B |
| Klimakonwektor | 2-rurowy lub 4-rurowy, długość, szerokość, wysokość, otwory nawiewu i wywiewu, rura wymiennika i układ, rura grzewcza, rozmiar odpływu skroplin | nawiew do kanału, wywiew z kanału, wejście i wyjście wymiennika, wejście i wyjście grzania (4-rurowy), odpływ skroplin |

3. Ustaw **Na wysokości**: wysokość podstawy jednostki nad poziomem. Podstawa jednostki ściennej to jej spód (często 2100 mm); kasetonowej — jej lico w suficie; złącza refnet — wysokość osi jego rury.
4. Kliknij miejsce, w którym ma stanąć ({{key:R}} obraca ją o 90°).

**Moc** to nominalna moc chłodnicza jednostki w kW, a obok niej podano Btu/h. Gdy **Przewód cieczy** i **Przewód gazowy** pozostają ustawione na **Z tabeli**, przyłącza jednostki przyjmują rozmiary z tabeli dla tej mocy; wybierz rozmiar rury, aby użyć rur własnej jednostki. Wejście złącza refnet jest dobierane dla obu gałęzi razem, a każda gałąź — dla własnego obciążenia.

Przyłącza czynnika działają w obu kierunkach (pompa ciepła pracuje w obu kierunkach). Odpływ skroplin to rozmiar rury jak każdy odpływ.

## Rysuj zestaw przewodów

1. Wybierz dwa elementy ({{key:Shift}}+kliknięcie drugiego): jednostkę zewnętrzną i wewnętrzną (układ single-split) albo jednostkę zewnętrzną i złącze refnet, złącze refnet i jednostkę wewnętrzną, albo dwa złącza refnet (VRF).
2. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Zestaw przewodów}}.

BimCraft rysuje przewody cieczy i gazu między ich wolnymi przyłączami: od każdego przyłącza w górę do wspólnej wysokości, z miedzi ACR (rura zwijana do 1-5/8 in, rura prosta powyżej), jako jeden krok {{ui:Cofnij}}. Złącze refnet przyjmuje tylko swój przewód: wejście od strony zewnętrznej i wyjście z gałęzi w stronę jednostek wewnętrznych. Każdy przewód przyjmuje rozmiar swojego dalszego końca (jednostki wewnętrznej lub wejścia złącza refnet); gdy przyłącze drugiego końca ma inny rozmiar, {{ui:Sprawdź połączenia}} to wskaże: tam potrzebna jest redukcja. Dwie jednostki wewnętrzne wymagają złącza refnet między nimi.

Przewody możesz przesunąć później jak każdą trasę rur; ich końce pozostają na przyłączach. Przewody między poziomami rysuje się narzędziem {{ui:Rura}}: rura zaczęta na przyłączu czynnika przejmuje jego układ, miedź ACR i rozmiar.

## Zmień tabelę zestawów przewodów

Otwórz {{ui:Kompilacja}} i wybierz {{ui:Rozmiary zestawów przewodów}}. Każdy wiersz oznacza: do tej mocy (kW), ta rura cieczy i ta rura gazowa.

| Do | Ciecz | Gaz |
|---|---|---|
| 2,8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5,6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22,4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

To są początkowe, typowe wartości. Zmień wiersz, dodaj lub usuń wiersze i wybierz {{ui:Zapisz}}: tabela jest zachowana w modelu, więc każdy, kto pracuje nad plikiem, używa jej, a {{ui:Cofnij}} ją przywraca. {{ui:Użyj wartości typowych}} przywraca tabelę początkową. Elementy już umieszczone zachowują swoje przyłącza, dopóki ich nie zmienisz.

## W pliku IFC

Jednostki wewnętrzne i zewnętrzne układów split i VRF są IfcUnitaryEquipment typu SPLITSYSTEM, a typ obiektu określa, który to: „Split indoor unit, wall-mounted”, „Split indoor unit, ceiling cassette”, „Split indoor unit, ducted”, „Split outdoor unit” albo „VRF outdoor unit”. Klimakonwektor to IfcUnitaryEquipment typu AIRHANDLER z typem obiektu „Fan coil unit”: IFC4 nie ma typu klimakonwektora, a wentylator, wymiennik i filtr dla jednego pomieszczenia to właśnie to, co opisuje AIRHANDLER. Złącze refnet to IfcPipeFitting typu JUNCTION („Refnet joint”). Pliki IFC2X3 otrzymują IfcEnergyConversionDevice i IfcFlowFitting z odpowiednimi typami.

Przyłącza i przewody czynnika są w systemach REFRIGERATION (jeden dla przewodów cieczy, jeden dla przewodów gazowych), a skropliny w systemie DRAINAGE. Przewody ACR są nazwane średnicą zewnętrzną. Tabela zestawów przewodów to zestaw właściwości CadCraft_HvacLineSets w projekcie.

Zobacz też [Wyposażenie MEP z przyłączami](topic:mep-equipment), [Podłączanie rur i kanałów do wyposażenia](topic:mep-connections) oraz [Rury i kanały](topic:pipes-and-ducts).
