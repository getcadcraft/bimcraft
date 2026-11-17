---
title: Przegrody ścian i wymiary odniesienia
summary: Twórz własne typy ścian warstwa po warstwie, z wyraźnym rdzeniem, utrzymuj bibliotekę materiałów projektu i wymiaruj do lic i osi, które zostają przymocowane, gdy ściana się zmienia.
keywords: lod, poziom rozwoju, lod 200, lod 300, ogólna, przegroda ściany, typ ściany, warstwy, rdzeń, lico rdzenia, oś rdzenia, szczelina, szczelina powietrzna, membrana, folia wiatroszczelna, biblioteka materiałów, materiały, grubość, wymiar odniesienia, wymiar, asocjacyjny, linia lokalizacji, okładzina, słupek, płyta gipsowo-kartonowa
from: 4ea8fbf5
---

## Co zrobisz

Utwórz typ ściany pasujący do ściany, którą zbudujesz: okładzina, poszycie, rdzeń ze słupków 5½-calowych i płyta gipsowo-kartonowa, albo cegła, szczelina powietrzna i ściana szkieletowa drewniana. Oznacz, które warstwy są rdzeniem, aby wymiar lub linia lokalizacji mogły trzymać rdzeń, gdy wykończenia wokół się zmieniają. Następnie wymiaruj ściany do lic i osi, które masz na myśli.

## Utwórz typ ściany

1. Zacznij budynek lub otwórz model IFC, włącz {{ui:Rysuj}} i wybierz narzędzie {{ui:Ściana}}.
2. Wybierz zaczątek w {{ui:Typ ściany}} i otwórz {{ui:Przegrody ścian…}}. Zaczątek otwiera się jako kopia; nadaj nowemu typowi nazwę.
3. Warstwy biegną od zewnątrz (na górze listy) do wewnątrz (na dole). Wybierz materiał każdej warstwy, wpisz jej grubość (jednostki projektu albo jawne, np. `12.7 mm` lub `1/2"`), wybierz jej funkcję (wykończenie, podłoże, konstrukcja, izolacja, membrana) i zaznacz warstwy **Rdzeń**. Rdzeń musi być jedną, ciągłą grupą.
4. {{ui:Dodaj warstwę}} dodaje warstwę, {{ui:Dodaj szczelinę}} dodaje szczelinę powietrzną z jej wentylacją (nieokreślona, niewentylowana, wentylowana), {{ui:Dodaj membranę}} dodaje warstwę bez nominalnej grubości, np. folię wiatroszczelną. Strzałki przesuwają warstwę na zewnątrz albo do wewnątrz.
5. Podgląd rysuje warstwy w skali, z podkreślonym rdzeniem, numerowane jak wiersze, i wymiaruje każdą warstwę, rdzeń i sumę. {{ui:Zapisz typ}}.

Nowy typ jest na liście narzędzia Ściana i we **Właściwościach** wybranej ściany. Zapisanie edytowanego typu zmienia każdą ścianę, która go używa; {{ui:Duplikuj typ}} tworzy osobny typ i przypisuje go tylko wybranym ścianom. Każdy zapis to jeden krok {{ui:Cofnij}}, razem ze ścianami, które przesuwa, drzwiami i oknami w nich oraz wymiarami, które od nich zależą.

Szczelina zwiększa szerokość. Membrana jej nie dodaje: zostaje w typie, aby zestawienie mogło ją później znaleźć, i nie wlicza się do grubości ściany ani rdzenia. Szczelina i membrana nigdy nie są liczone jako materiał pełny. W pliku zapisanym jako IFC2X3 membrana zostaje w zapisie typu, ale jest pominięta w jego fizycznych warstwach materiałowych.

## Oznacz typ poziomem rozwoju (LOD)

Typ może mówić, jak bardzo jest rozwinięty. W edytorze **Poziom rozwoju (LOD)** oferuje stałą skalę 100, 200, 300, 350, 400 i 500 albo **Nieustawiony**. Ściana ogólna („Ściana 230 ogólna") to LOD 100 lub 200; konkretna budowa z rzeczywistymi warstwami („230 cegła ceramiczna, tynkowana z obu stron") to LOD 300 lub wyższy. Znacznik ustawiasz sam: BimCraft go nie wylicza, a typy startowe go nie mają.

Znacznik pokazuje się obok nazwy typu na liście typów narzędzia Ściana, we **Właściwościach** ściany i na liście [Zamień typ](topic:wall-tools); raport po zamianie mówi, czy poziom wzrósł, czy spadł. Aby zobaczyć go w zestawieniu **Ściany wg typu** i jego CSV, zaznacz **Pokaż LOD każdego typu ściany w zestawieniu ścian** w Ustawienia › BimCraft › Ściany: dodana zostaje ostatnia kolumna LOD. Znacznik zapisuje się w pliku IFC razem z typem (w zestawie właściwości `CadCraft_WallType` jako właściwość `LOD` oraz w zapisie typu), więc jest tam po ponownym otwarciu pliku. Na razie dotyczy tylko typów ścian, nie pojedynczych elementów ani innych rodzajów elementów.

## Ogólne ściany na etapie szkicu

Lista typów narzędzia Ściana zaczyna się od dwóch ścian **ogólnych**: **Ściana ogólna 200 mm (zewnętrzna)** i **Ściana ogólna 100 mm (wewnętrzna)**. Każda to jedna warstwa materiału ogólnego, oznaczona LOD 200. Użyj ich, gdy wiesz, gdzie stoją ściany, ale jeszcze nie wiesz, z czego są zrobione.

Ściana, której typ ma znacznik **LOD 100** lub **LOD 200**, jest rysowana w każdym planie jako **jeden zakreskowany pas** na każdym poziomie szczegółowości: bez warstw i bez linii warstw. Dotyczy to ścian ogólnych i każdego własnego typu oznaczonego LOD 100 lub 200. Sama ściana jest kompletna: ma grubość, drzwi i okna, pomieszczenia oraz ilości.

Aby ją rozwinąć, zamień jej typ (Edycja › Ściany › **Zamień typ** albo Typ we Właściwościach). Ściana nie jest rysowana od nowa: ta sama ściana przyjmuje nowy typ, a raport mówi, co się przesunęło. Typ oznaczony LOD 300 lub wyższy jest rysowany z warstwami jak dotąd.

Aby rysować każdą ścianę według warstw, niezależnie od znacznika: Ustawienia › BimCraft › Ściany, odznacz **Rysuj ściany typu LOD 100 lub LOD 200 jako jeden zakreskowany pas**.

Startowe drzwi i okna to także rodzaje ogólne (rozmiar i sposób otwierania, nie produkt). Przy włączonym **Pokaż LOD każdego typu ściany w zestawieniu ścian** zestawienia Drzwi i Okna pokazują dla nich LOD 200.

## Nadaj typowi dane przedmiaru

W edytorze typu ściany **Dane przedmiaru** zawiera to, co kosztorysant musi wiedzieć o ścianie, raz dla typu: **element**, z którego jest zbudowana (cegła lub bloczek: nazwa, długość, wysokość i szerokość), **zaprawę** (nazwa i grubość spoiny) oraz **cenę jednostkową** z kodem waluty (trzy litery, np. USD, EUR lub ZAR) i tym, za co jest: metr kwadratowy lub stopę kwadratową netto powierzchni ściany, metr lub stopę długości ściany albo każdą ścianę. Wszystko jest opcjonalne.

Zapisuje się z typem w pliku. Każda ściana tego typu raportuje je: {{ui:Zestawienia}} › **Typy ścian: dane przedmiaru** wypisuje element, zaprawę, cenę i cenę pomnożoną przez zmierzoną ilość, a przedmiar przekazany do TakeoffCraft niesie je w pozycji tego typu ściany. Zmień typ, a każda ściana pójdzie za zmianą.

Trzy kolejne pola służą do liczenia cegieł lub bloczków i zaprawy:

- **Naddatek na elementy, %** dodawany jest do liczby elementów. Zostaw puste, aby użyć wartości z metody pomiaru projektu, albo bez naddatku, jeśli metoda go nie ma. Wpisz 0, aby nie mieć naddatku, bez względu na metodę.
- **Dodatkowa zaprawa, %** dotyczy wyżłobień lub perforacji, które przyjmują zaprawę. Dodawana jest do objętości zaprawy. Zostaw puste, jeśli brak.
- **Warstwy zbudowane z tego elementu**: zaznacz każdą warstwę, która jest murem z tego elementu. Ściana dwuwarstwowa ma dwie. Bez zaznaczenia liczone są warstwy rdzenia.

Cena może też być za element do zamówienia, za 1000 elementów do zamówienia lub za m³ zaprawy. Gdy element ma długość i wysokość, **Typy ścian: dane przedmiaru** pokazuje elementy na m² (lub ft²) jednego muru, elementy do zamówienia i objętość zaprawy; wzory są w [Cegły, bloczki i zaprawa](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Typ ma jeden element: dwóch murów z różnych elementów (cegła w warstwie zewnętrznej i bloczek w wewnętrznej) nie da się jeszcze policzyć na jednym typie.

## Trzymaj rdzeń w miejscu

We **Właściwościach** ustaw **Linię lokalizacji** ściany na lico rdzenia albo oś rdzenia. Gdy później dodasz lub pogrubisz wykończenie, ta linia zostaje na miejscu, a ściana rośnie wokół niej; ściany stykające się z nią w narożniku podążają za nią, więc proste narożniki pozostają zamknięte.

## Materiały projektu

{{ui:Biblioteka materiałów…}} wypisuje materiały projektu: nazwę, kategorię, grubość, od której zaczyna się warstwa, kolor wyświetlania, wzór wypełnienia przekroju i uwagi. Biblioteka zapisuje się w IFC razem z projektem. Wybór materiału dla warstwy nadaje jej domyślną grubość tego materiału, którą można potem zmienić; późniejsza edycja biblioteki nigdy nie zmienia wymiarów ścian, które już narysowano. Materiał można też utworzyć z listy materiałów warstwy przyciskiem {{ui:+ Nowy materiał…}}.

## Wymiary odniesienia

{{ui:Adnotuj}} › {{ui:Wymiar odniesienia}}: wybierz poziomy, pionowy lub wyrównany oraz odniesienie: zewnętrzne lub wewnętrzne lico wykończenia, zewnętrzne lub wewnętrzne lico rdzenia, oś ściany albo oś rdzenia. Wybierz pierwszą ścianę, zmień odniesienie, jeśli chcesz, wybierz drugą, a potem kliknij, gdzie ma być linia wymiaru. Dwa odniesienia na jednej ścianie mierzą jej grubość całkowitą lub grubość rdzenia. {{ui:Wymiary odniesienia…}} wypisuje wymiary widoku, łącznie z tymi, które straciły ścianę, z przyciskami Właściwości, Przepnij odniesienia i Usuń.

### Wymiaruj cały rzut regułami

{{ui:Adnotuj}} › {{ui:Wymiaruj rzut…}} wymiaruje zewnętrze rzutu kondygnacji, na który patrzysz: wymiar całkowity w obu kierunkach oraz rząd wymiarów wzdłuż każdej zewnętrznej krawędzi (końce ścian, ściany stykające się z krawędzią, drzwi i okna w niej), z rzędami ułożonymi poza budynkiem. Zaznacz, co chcesz, sprawdź liczbę, a potem {{ui:Dodaj wymiary}}. To zwykłe wymiary odniesienia, więc podążają za ścianami, gdy te się przesuną, a każdy z nich możesz wybrać, przesunąć lub usunąć. Cały zestaw to jeden krok {{ui:Cofnij}}, a ponowne uruchomienie nie tworzy żadnego wymiaru podwójnie.

Wymiarowane są tylko zewnętrza: pomieszczenia wewnątrz budynku, zakrzywione ściany i ściany nieprostopadłe do rzutu zostają dla narzędzi ręcznych, a linie siatki nie są ścianami, więc wymiary między osiami nie powstają tutaj. Twój połączony asystent może zrobić to samo za pomocą `plan_dimension`.

Wymiar jest przypięty do ścian, nie do punktu na ekranie: gdy ściana się przesunie albo zmieni typ, wartość podąża za nią. Jeśli ścianę usuniesz, wymiar pokazuje, że jest nierozwiązany i nie wyświetla liczby, aż go przepniesz lub cofniesz. Pole długości przyjmuje też współrzędne rzutu, np. `10',12'`, dla linii wymiaru w dokładnym miejscu.

Wymiary dotyczą ścian narysowanych przez BimCraft, w widokach rzutów. Jeszcze niezbudowane: wymiary w przekrojach i elewacjach, do drzwi, okien i innych komponentów oraz warstwy przegród rysowane w rzucie i przekroju; zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).

## Zobacz także

[Rysowanie ścian](topic:draw-walls), [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door), [Właściwości](topic:properties-panel).
