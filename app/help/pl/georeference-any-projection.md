---
title: Georeferencja w dowolnej projekcji
summary: Określ, w jakim układzie mapy są współrzędne modelu — z pełnej listy EPSG, dowolnej strefy UTM lub projekcji zdefiniowanej przez ciebie — i użyj go dla Położenia, warstw mapy i chmur punktów.
keywords: projekcja, układ współrzędnych, crs, epsg, utm, strefa utm, własna projekcja, proj4, ciąg proj, prj, wkt, georeferencja, konwersja mapy, ifcprojectedcrs, moje projekcje, szerokość geograficzna, długość geograficzna, wschodnie, północne, lambert, gauss-kruger, płaszczyzna stanowa, siatka krajowa
from: 6894c1f2
---

Niektóre plany są narysowane w układzie mapy, którego nie ma na krótkiej liście: w strefie UTM, w siatce krajowej albo w projekcji zapisanej jako tekstowa definicja. {{ui:Zmierz}} › {{ui:Układ współrzędnych…}} pozwala określić, którego układu używa model.

## Wybór układu dla modelu

1. Otwórz model, wybierz {{ui:Zmierz}}, a następnie {{ui:Układ współrzędnych…}}.
2. Wpisz w polu wyszukiwania. Działa każde z tych:
   - numer EPSG: `32633` lub `EPSG:2277`;
   - strefa UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - słowa z nazwy: `lambert 93`, `mga zone 56`, `texas central`;
   - definicja projekcji: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcjonalnie z nazwą przed nią (`Moja siatka = +proj=…`);
   - tekst pliku `.prj`, albo użyj {{ui:Załaduj plik .prj…}}.
3. Wybierz wynik, a następnie {{ui:Użyj tego układu}}.

Wybór jest zapisywany w modelu (zestaw właściwości `CadCraft_CRS` w projekcie), więc otwiera się razem z modelem. Zapisz model, aby go zachować. {{ui:Usuń z modelu}} wraca do tego, co mówi plik.

Jeśli twoja definicja daje te same współrzędne co wymieniony układ EPSG, BimCraft to podaje i używa tego kodu; gdy kilka wymienionych układów ma tę samą matematykę, wymienia także pozostałe.

## Moje projekcje

Definicję, którą wkleisz, albo załadowany plik `.prj` można zachować przyciskiem {{ui:Zachowaj w Moich projekcjach}}. Lista jest na tym urządzeniu (w tej przeglądarce) i jest oferowana przy następnym otwarciu wyboru.

## Co z niego korzysta

- {{ui:Zmierz}} › {{ui:Położenie}} zamienia wskazany punkt na szerokość i długość geograficzną przez układ modelu. Wcześniej zatrzymywało się z notatką, gdy plik podawał swój układ mapy bez kodu EPSG; przy zapisanym wyborze daje odpowiedź.
- Warstwy mapy pod modelem używają tego samego układu. Chmura punktów lub plik terenu w innym układzie jest proponowany z układem modelu (zob. poniżej).
- {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Położenie}} › {{ui:Wybierz inny układ…}} ustawia, co {{ui:Położenie}} podaje także: szerokość i długość geograficzną w dowolnym wymienionym układzie geograficznym albo wschodnią i północną w dowolnym wymienionym układzie płaskim, oprócz własnego układu modelu.

## Model, który nie jest jeszcze na mapie

Jeśli plik nie ma konwersji mapy, wybór układu otwiera {{ui:Umieść ten model na mapie}}. Możesz go też otworzyć z {{ui:Zmierz}} › {{ui:Początek na mapie…}}.

1. Podaj początek modelu jako współrzędne wschodnie i północne w tym układzie albo wpisz szerokość i długość geograficzną i wybierz {{ui:Przelicz na współrzędne wschodnie i północne}}.
2. Podaj obrót do północy siatki (stopnie, przeciwnie do ruchu wskazówek zegara; 0 oznacza, że oś Y modelu wskazuje północ siatki) oraz wysokość początku.
3. Skala zaczyna od różnicy jednostek między modelem a mapą (0.001 dla modelu w milimetrach na siatce w metrach). Zmieniaj ją tylko dla łącznego współczynnika z gruntu na siatkę.
4. Wybierz {{ui:Umieść na mapie}}. Jeden krok cofnięcia zapisuje IfcProjectedCRS i IfcMapConversion (IFC4). Sam model się nie przesuwa.

Plik IFC2X3 nie ma żadnej z tych encji. BimCraft zapisuje te same liczby tak, jak pozwala na to ten standard: zestawy właściwości buildingSMART `ePSet_MapConversion` i `ePSet_ProjectedCRS` w projekcie, szerokość i długość geograficzną działki oraz północ prawdziwą. Okno to podaje. Zapisz model, aby go zachować.

## Model, który jest już na mapie

Gdy plik już umieszcza się na mapie, a wybierzesz inny układ, BimCraft pyta:

- {{ui:Zmień tylko to, co raportuje Położenie}} zachowuje własną georeferencję pliku i używa twojego wyboru dla {{ui:Położenia}}, warstw mapy i chmur punktów (liczby modelu są wtedy odczytywane jako podane w nowym układzie).
- {{ui:Przenieś model do tego układu}} przepisuje georeferencję: początek przechodzi przez projekcję (wschodnie, północne, wysokość, obrót i skala), a IfcProjectedCRS (nazwa, datum, projekcja, strefa, jednostka) jest przepisany, więc zapisany IFC mówi o nowym układzie. Miejsce na Ziemi pozostaje to samo: początek zachowuje swoją szerokość i długość geograficzną. Elementy wewnątrz modelu nigdy się nie zmieniają; zmienia się tylko georeferencja.

Okno pokazuje stary i nowy początek, zanim wybierzesz. Przeniesienie tam i z powrotem przywraca początek w granicach milimetra.

## Chmury punktów i teren w innym układzie

Chmura lub plik pomiarowy niesie własny układ (LAS, LAZ, E57, GeoTIFF) albo nie niesie żadnego. Gdy różni się od układu modelu, BimCraft proponuje {{ui:Przelicz na układ modelu}}. Punkty są przesuwane partiami (w procesie roboczym, gdy jest ich wiele, aby strona pozostawała używalna), plik na twoim komputerze nie jest ruszany, a wiersz stanu mówi, co zrobiono. Otwórz plik ponownie, aby wrócić do jego własnego układu. Dla chmury już otwartej {{ui:Przelicz na model…}} w pasku chmury robi to samo.

Jeśli plik nie podaje żadnego układu, BimCraft pyta {{ui:W jakim układzie jest ten plik?}}: wybierz go przyciskiem {{ui:Wybierz układ…}}, a odpowiedź jest zapamiętywana dla tego pliku na tym urządzeniu. {{ui:Zachowaj własny układ pliku}} zostawia punkty bez zmian.

## Gdy coś jest przybliżone

Problemy są wymieniane w oknie i w panelu Problemy, nigdy po cichu:

- Miejsce poza obszarem, dla którego układ jest przeznaczony: liczby działają, ale zniekształcenie rośnie.
- Przesunięcia datum wymagające pliku siatki (NADCON, NTv2 i podobne) nie są dostępne. Układy o innym datum są przesuwane przesunięciem bez siatki, podanym w rejestrze EPSG, a wynik jest przybliżony z podaną dokładnością, którą komunikat podaje w metrach.
- Punkt, którego nie da się zrzutować, jest pomijany i zliczany; plik przekraczający limit rozmiaru jest odrzucany, a limit jest podany.

:::tip
Współrzędne mapy wymagają konwersji mapy. Plik bez niej umieszcza się na mapie za pomocą {{ui:Początek na mapie…}}.
:::

:::note
Przejście między datum bez pliku siatki jest dokładne do kilku metrów; wynik Położenia podaje, o ile, gdy katalog to zna.
:::
