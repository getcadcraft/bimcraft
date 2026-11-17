---
title: "Przyszłości klimatu: 2050 i 2080 – powódź, upał i pożar roślinności"
summary: Uruchom ponownie powódź, rok energetyczny i wstępną ocenę pożaru z przyszłym klimatem (scenariusze SSP2-4.5 i SSP5-8.5, lata 2050 i 2080) z pakietu danych klimatycznych, przedstawione obok obecnego stanu.
keywords: klimat, zmiana klimatu, przyszłość, 2050, 2080, ssp, cmip6, scenariusz, poziom morza, powódź, upał, plik pogodowy, epw, morfing, energyplus, pożar, pożar roślinności, pożar buszu, warunki pożarowe
from: 224ecd08
---

Dane klimatyczne pochodzą z **pakietu danych**, a nie z aplikacji. Włącz dodatek {{ui:Climate futures}} w Ustawieniach › Dodatki albo wczytaj własny plik pakietu w bloku {{ui:Climate future}}.

:::warning
Pakiet dołączony do dodatku jest **próbny**: trzy miejsca (Denver, Miami, Johannesburg), jeden model klimatyczny i pięć lat w każdym 20-letnim okresie. Służy do wypróbowania narzędzi, **nie do projektowania**. Panel mówi to pogrubionym tekstem, gdy jest w użyciu. Pełny pakiet (wiele modeli, wszystkie lata, więcej miejsc) buduje się poleceniem `tools/climate/build-pack.mjs` z danych NASA NEX-GDDP-CMIP6.
:::

## Wybierz przyszłość

W lewym panelu, w {{ui:Hazard playback}}, wybierz **Scenariusz** (SSP2-4.5, środkowa droga, albo SSP5-8.5, wysoka emisja) i **Rok** (2050 oznacza 2041–2060, 2080 oznacza 2071–2090; oba w odniesieniu do 1995–2014). **Miejsce** to miejsce w pakiecie najbliższe lokalizacji modelu (szerokość i długość geograficzna IfcSite) albo to, które wybierzesz. Gdy jest daleko od każdego miejsca, używane są globalne średnie zmiany z pakietu, a panel to mówi.

## Powódź: obecna obok przyszłej

Gdy wybrany jest scenariusz, ustaw **Typ powodzi**: przybrzeżna (dodaje wzrost poziomu morza), rzeczna lub intensywne opady (głębsza o zmianę opadów w najbardziej deszczowym dniu) albo obie. Naciśnij Uruchom: powódź odtwarza się jak dotąd, a tabela pokazuje obecną i przyszłą powódź obok siebie (poziom wody, pomieszczenia, które zostaną zalane, najgłębsza woda). Pod nią wymienione są założenia:

- poziom przybrzeżny rośnie o cały wzrost poziomu morza; sztormy i fale nie są zmieniane;
- przepływ rzeki rośnie jeden do jednego z opadami w najbardziej deszczowym dniu, a głębokość idzie za przepływem do potęgi 0.6 (równanie Manninga dla szerokiego koryta);
- obie części są po prostu dodane.

## Upał: przyszły plik pogodowy

Wybierz rodzaj {{ui:Heat: future weather file}}, wskaż obecny plik pogodowy `.epw` i naciśnij {{ui:Make the future weather file}}. Plik jest **poddawany morfingowi** miesiąc po miesiącu opublikowaną metodą przesunięcia i rozciągania (Belcher, Hacker i Powell 2005): średnia miesięczna rośnie o zmianę z pakietu, gorące popołudnia o zmianę dziennego maksimum, a chłodne noce o zmianę dziennego minimum; wilgotność względna zmienia się o zmianę z pakietu, a temperatura punktu rosy jest liczona na nowo. Ciśnienie i wiatr pozostają bez zmian. Tabela porównuje średnie i najwyższe temperatury, projektowe temperatury chłodzenia 0.4 % i ogrzewania 99.6 %, liczbę godzin przy 30 °C i 35 °C oraz stopniodni.

{{ui:Save the future weather file}} zapisuje go; {{ui:Use it in the energy check}} przekazuje go do sprawdzenia EnergyPlus (karta Energia). Przyszły plik to ten sam typowy rok, tylko cieplejszy: nie dodaje nowych fal upałów.

## Rok energetyczny: obecny obok przyszłego

W sprawdzeniu EnergyPlus na karcie Energia (osobny dodatek, z własnym silnikiem) wybierz obecny plik pogodowy, a następnie scenariusz i rok w jego bloku {{ui:Climate future}}, i naciśnij {{ui:Simulate a year: present and future}}: rok jest liczony na obecnym pliku i na jego przyszłym, poddanym morfingowi odpowiedniku, a ogrzewanie i chłodzenie każdego pomieszczenia są wymienione obok siebie.

## Narażenie na pożar (tylko wstępna ocena)

Wybierz rodzaj {{ui:Wildfire exposure (screening only)}}: najbliższa roślinność, nachylenie terenu w górę od niej do budynku i odległość do niej. Wynik to pasmo od bardzo niskiego do ekstremalnego, obecne i przyszłe.

:::warning
**Tylko wstępna ocena.** To nasza własna względna skala, pozwalająca stwierdzić, czy miejsce wymaga właściwej oceny zagrożenia pożarowego. Nie jest to ocena według przepisów ani poziom zagrożenia pożarowego budynku (BAL). Mnoży ona wagę roślinności, współczynnik nachylenia (ogień przyspiesza mniej więcej dwukrotnie na każde 10 stopni wzniesienia, liczone do 20 stopni), współczynnik odległości (10 m podzielone przez odległość, nie więcej niż 1) oraz zmianę indeksu warunków pożarowych w pakiecie.
:::

## Skąd pochodzą liczby

- **Temperatura, wilgotność, nasłonecznienie, opady, warunki pożarowe:** NASA NEX-GDDP-CMIP6, dzienne wyniki modeli CMIP6 po przeskalowaniu (downscaling). Wyniki każdego modelu są objęte licencją CC BY 4.0. Zmiana warunków pożarowych to Canadian Fire Weather Index obliczony dzień po dniu z pogody modelu (z dzienną wilgotnością zamiast wilgotności w południe).
- **Wzrost poziomu morza:** globalna średnia IPCC AR6 (nie lokalna; podnoszenie lub opadanie lądu nie jest w niej uwzględnione), chyba że pakiet zawiera lokalne dane.
- Pakiet podaje swoje źródło, licencję i datę; panel je pokazuje.
