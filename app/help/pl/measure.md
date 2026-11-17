---
title: Mierz odległości, pola ścian i położenia w 3D
summary: Mierz między dwoma punktami modelu IFC z przyciąganiem do narożników i krawędzi, odczytuj różnicę wzdłuż X, Y i Z oraz mierz pole płaskiej ściany.
keywords: zmierz, pomiar, odległość, długość, wymiar, pole, pole ściany, przyciąganie, narożnik, krawędź, taśma, linijka, prześwit, położenie, szerokość geograficzna, długość geograficzna, lat long, współrzędne, georeferencja, konwersja na mapę, EPSG, geodezja, współrzędne wschodnie, współrzędne północne, WGS 84, datum
from: 5f430bba
---

## Czego dokonasz

Sprawdź prześwit, długość ściany lub wymiar ściany bezpośrednio z modelu, bez otwierania programu do projektowania.

## Kroki

1. Otwórz model IFC.
2. Kliknij {{ui:Zmierz}} na pasku narzędzi lub naciśnij {{key:M}}. Pasek otwiera się u dołu widoku.
3. **Odległość:** przy wybranym {{ui:Odległość}} kliknij pierwszy punkt, potem drugi. W pobliżu narożnika wskaźnik przyciąga się do niego, a w pobliżu krawędzi na krawędź; mała etykieta przy wskaźniku mówi, który to. Każda para kliknięć daje jeden pomiar.
4. **Pole ściany:** wybierz {{ui:Pole ściany}} i kliknij ścianę. Cała płaska ściana się podświetla i pokazuje się jej pole.
5. **Proste linie:** przytrzymaj {{key:Shift}}, wybierając drugi punkt, albo naciśnij {{ui:Prosta}} na pasku, aby to utrzymać. Linia biegnie wtedy wzdłuż tej osi, do której wskaźnik jest najbliższy (w widoku z góry wzdłuż X lub Y rzutu; w innych widokach wzdłuż X, Y lub Z), a etykieta wskaźnika mówi „prosto wzdłuż osi”. {{key:M}} nadal uruchamia i zatrzymuje Zmierz.
6. Kliknij {{ui:Wyczyść}}, aby usunąć pomiary, albo {{ui:Gotowe}} (lub {{key:Esc}}), aby zakończyć mierzenie.

## Co powinieneś zobaczyć

- Linię między dwoma punktami z jej długością, a na pasku długość wraz z tym, jak daleko biegnie wzdłuż X, Y i Z (w osiach modelu, Z w górę), wszystko w {{ui:Jednostki}} wybranych na pasku narzędzi.
- Pole ściany w metrach kwadratowych, na ścianie i na pasku.
- Etykiety pozostają przy swoich pomiarach podczas obracania, przesuwania i powiększania.
- Podczas mierzenia kliknięcia nie wybierają elementów. Płaszczyzna przekroju lub pudełko nadal tną model, a możesz mierzyć to, co pokazują, w tym przecięte powierzchnie.

## Miejsce na Ziemi

Kliknij {{ui:Położenie}} na pasku pomiaru, a potem punkt na modelu (przyciąga się do narożników i krawędzi jak przy odległościach). Pasek pokazuje:

- **szerokość i długość geograficzną**, w stopniach dziesiętnych oraz w stopniach, minutach i sekundach, na początek w WGS 84;
- **współrzędne mapy** (wschodnie i północne, zapisane w {{ui:Jednostki}} wybranych na pasku narzędzi) w układzie mapy modelu, na przykład `EPSG:28356`;
- **wysokość** i datum wysokości podany w pliku oraz **własny datum pliku** (na przykład GDA94).

{{ui:Kopiuj}} umieszcza wszystko w schowku w jednym wierszu. Zmień układ, w którym jest szerokość i długość geograficzna, w {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Położenie}}: WGS 84 (jak GPS i mapy internetowe), własny datum pliku albo inny popularny, na przykład ETRS89 lub NAD83.

Potrzebny jest model z georeferencją: taki, który wyeksportowano ze współrzędnymi mapy (konwersją na mapę do układu rzutowego z kodem EPSG). Model, który ma tylko szerokość i długość geograficzną działki, dostaje przybliżone położenie, wyliczone z punktu działki i jej północy rzeczywistej, a pasek to mówi. Gdy otwartych jest kilka modeli, każdy punkt używa georeferencji własnego modelu.

:::note
Przesunięcie między datumami (na przykład z GDA94 do WGS 84) odbywa się bez plików siatek, więc jest dokładne do kilku metrów; wiersz stanu mówi, jak dokładnie. Same współrzędne mapy są dokładne.
:::

## Częste błędy

- **„…nie ma georeferencji”.** Plik nie ma konwersji na mapę ani szerokości i długości geograficznej działki. Wyeksportuj go ponownie z ustawionym układem współrzędnych (wspólne współrzędne / punkt geodezyjny w programie do projektowania).
- **Współrzędne mapy, ale brak szerokości i długości geograficznej.** Plik podaje swój układ mapy bez kodu EPSG albo z kodem, którego nie ma na liście; wiersz stanu mówi, który.

- **Punkt ląduje na ścianie, a nie na narożniku.** Przyciąganie patrzy na element pod wskaźnikiem. Przesuń bliżej narożnika albo powiększ widok.
- **Pole jest mniejsze, niż oczekiwano.** Otwory są pominięte, a ściana, która się wygina, to kilka ścian: kliknij każdą.
- **{{key:Esc}} zatrzymał mierzenie.** Pierwsze {{key:Esc}} porzuca napoczętą odległość, drugie kończy mierzenie.

## Dalej

- [Przetnij model IFC płaszczyzną przekroju](topic:section-plane)
- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
