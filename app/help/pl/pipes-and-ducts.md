---
title: Rury i kanały
summary: Rysuj trasy rur i kanałów na planie według ich osi; kolana, trójniki, redukcje i przejścia wykonywane są za Ciebie, trasy należą do systemów z połączonymi portami w pliku IFC i są widoczne na planach, w zestawieniach oraz w przedmiarze.
keywords: rura, rury, instalacje, instalacja sanitarna, kanał, kanały, przewody wentylacyjne, hvac, mep, mechaniczne, kolano, trójnik, redukcja, przejście, kształtka, kształtki, zawór, zawory, zasuwa, zawór kulowy, zawór grzybkowy, zawór zwrotny, pion, spadek, odpływ, kanalizacja, kanalizacja deszczowa, wentylacja, woda zimna, woda ciepła, woda lodowa, ogrzewanie, gaz, ppoż, nawiew, wywiew, wyciąg, system, systemy, port, porty, złącze, złącza, przybór, przybory, przybór sanitarny, umywalka, zlewozmywak, miska ustępowa, brodzik, zlew pralniczy, jednostki przyborowe, uhc, dfu, wymiarowanie kanalizacji, odgałęzienie, kolektor, przepływ powietrza, cfm, tarcie, równe tarcie, dobór, zestawienie, przedmiar, nbr, nbr 5648, nbr 5688, nbr 8160, PVC soldável, dn
from: 85140bc5
---

## Co zrobisz

Rysuj rury i kanały budynku tak, jak rysujesz ściany: klikaj narożniki osi trasy na wysokości, którą ustawisz. BimCraft tworzy kształtki, przypisuje każdy element do jego systemu i łączy je, więc inne programy odczytują trasę jako jeden połączony system.

## Narysuj rurę

1. Włącz {{ui:Rysuj}}, otwórz {{ui:Kompilacja}} i wybierz {{ui:Rura}}.
2. Na pasku wybierz **system** (zimna woda, ciepła woda, kanalizacja sanitarna, gaz…). Ustawia on zwykły materiał: miedź dla wody, PVC dla odpływów i wentylacji, stal dla ogrzewania, wody lodowej, gazu i ppoż. Zmień **materiał**, **klasę** i **rozmiar**, jeśli potrzebujesz. Rozmiary i grubości ścianek pochodzą z publicznych norm: rura stalowa ASME B36.10M, miedziana ASTM B88, PVC ASTM D1785 i PEX ASTM F876. Projekty brazylijskie mogą używać **rury PVC na wodę (NBR 5648)**, PVC klejonego rozpuszczalnikowo do zimnej wody, oraz **rury kanalizacyjnej PVC (NBR 5688)**, serii normalnej lub wzmocnionej, na odpływy i wentylację: ich rozmiary nazywa się przez DN (DN 25, DN 100). Gdy wybierzesz jedną z nich, wybór innego systemu trzyma się brazylijskich rur (rura kanalizacyjna PVC dla kanalizacji sanitarnej po rurze PVC na wodę).
3. Ustaw **Na wysokości**: wysokość osi rury nad poziomem.
4. Kliknij, gdzie rura się zaczyna, potem każdy narożnik. Na ostatnim punkcie kliknij dwukrotnie albo naciśnij {{key:Enter}}. {{key:Backspace}} cofa ostatni narożnik; {{key:Esc}} porzuca trasę.

Rura przyciąga się jak ściany i do innych tras: zacznij na końcu rury, aby kontynuować od niej, lub zakończ na linii rury, aby się odgałęzić. Nowa trasa przyjmuje wysokość rury, do której się przyciąga.

Trasa zaczęta lub zakończona na porcie elementu wyposażenia przyjmuje jego rozmiar i system i pozostaje do niego przypięta: zobacz [Wyposażenie MEP z portami](topic:mep-equipment) oraz [Podłącz rury i kanały do wyposażenia](topic:mep-connections).

## Ustaw standard instalacji projektu

Pierwsza lista na pasku rury to **standard instalacji** modelu: **US (IPC, cale)** albo **Brazylia (ABNT, DN)**. Jest zapisany w modelu, więc każdy, kto otworzy plik, zaczyna trasy tak samo. Przy **US** nowa trasa zaczyna się w miedzi (woda) lub PVC Schedule 40 (odpływy), w calach, ze spadkiem z International Plumbing Code. Przy **Brazylia** zimna woda zaczyna jako PVC soldável DN 25, kanalizacje sanitarne i deszczowe oraz wentylacje jako PVC esgoto DN 100 ze spadkiem wg NBR 8160, a ciepła woda w miedzi. Dotyczy to też trasy zaczętej na złączu przyboru lub porcie urządzenia. Narysowane już rury zachowują swój materiał i własne tabele; lista materiałów pozostaje otwarta, więc nadal możesz celowo narysować jedną brazylijską trasę w modelu US. Plik bez wyboru działa jak dotąd: nowa trasa idzie za materiałem w użyciu.

## Narysuj kanał

1. Wybierz {{ui:Kanał}}. Wybierz system (nawiew, wywiew, wyciąg lub powietrze zewnętrzne) i kształt: okrągły, prostokątny lub płaski owalny.
2. Wpisz szerokość i wysokość (szerokość kanału okrągłego to jego średnica) oraz **Na wysokości** dla wysokości osi.
3. Aby dobrać rozmiar z przepływu, wpisz **Przepływ** i wskaźnik **Tarcie**, potem kliknij {{ui:Dobierz rozmiar}}. Kanał dobierany jest metodą równego tarcia, opisaną w rozdziale o projektowaniu kanałów w ASHRAE Handbook, i zaokrąglany do rozmiaru z katalogu, tak że tarcie wychodzi na poziomie lub poniżej wpisanego wskaźnika. Bez wpisanego wskaźnika używa 0,08 in. wody na 100 ft (0,8 Pa/m). Prostokątny kanał zachowuje wpisaną wysokość i dostaje szerokość; BimCraft to podaje, gdy boki różnią się więcej niż 4 do 1.
4. Klikaj narożniki jak przy rurze.

## Przybory sanitarne

{{ui:Kompilacja}} › {{ui:Umieść rodzinę}} oferuje pięć przyborów startowych, każdy z odpływem i przyłączem zimnej wody: **Miska ustępowa**, **Umywalka**, **Zlewozmywak kuchenny**, **Brodzik** i **Zlew pralniczy**. Ich przód jest zwrócony do Ciebie przy umieszczaniu, a tył przylega do ściany. Ich odpływy mają najmniejszy rozmiar odpływu przyboru wg NBR 8160 (DN 100 dla miski ustępowej, DN 50 dla zlewozmywaka kuchennego, DN 40 dla pozostałych); woda to DN 20. Zmieniasz ich rozmiary albo je edytujesz jak każdą rodzinę: zobacz [Rodziny i ich rozmiary](topic:families).

Rodzina podaje, jakim przyborem jest, w polu {{ui:Przybór sanitarny}} na karcie {{ui:Złącza}} edytora rodzin. Jej odpływ jest wtedy liczony w jednostkach przyborowych: 6 UHC dla miski ustępowej, 1 dla umywalki, 3 dla zlewozmywaka kuchennego lub zlewu pralniczego, 2 dla brodzika (NBR 8160), albo jednostki odpływu z IPC Table 709.1.

## Ze złącza przyboru

Elementy umieszczone z rodziny ze złączami (odpływ i kran umywalki, króciec nawiewnika: zobacz [Edytuj rodzinę](topic:family-editor)) pokazują swoje wolne złącza jako punkty, gdy włączone jest {{ui:Rura}} lub {{ui:Kanał}}, a kursor się do nich przyciąga.

- **Start na złączu**: trasa przyjmuje swój system i rozmiar (rura materiału z paska o rozmiarze równym lub tuż powyżej złącza; kanał okrągły o jego średnicy). Gdy złącze jest skierowane w dół lub w górę, jak odpływ pod umywalką, trasa najpierw idzie prosto w dół lub w górę do wysokości w polu **Na wysokości**, a potem dalej według Twoich kliknięć.
- **Koniec na złączu**: trasa idzie w dół lub w górę do niego i kończy się tam.

Trasa jest połączona z elementem w pliku IFC, więc inne programy widzą przybór jako część jego systemu. Element umieszczony później ze złączem na końcu trasy też się do niej podłącza. Trasa przesunięta od złącza przestaje być z nim połączona.

## Kształtki wykonane za Ciebie

| Gdzie | Co wykonuje BimCraft |
|---|---|
| Trasa skręca | Kolano. Rura stalowa w długim promieniu ASME B16.9 (1,5 × rozmiar), inna rura przy jednej średnicy zewnętrznej, kanał okrągły przy 1,5 średnicy, kanał prostokątny przy jednej szerokości (lub jednej wysokości przy skręcie w górę lub w dół) |
| Trasa kończy się na linii innej trasy | Trójnik; tamta trasa zostaje tam przecięta |
| Dwie trasy łączą się czoło w czoło o różnych rozmiarach | Redukcja (rury) lub przejście (kanały) |
| Dwie trasy tego samego rozmiaru łączą się czoło w czoło pod kątem | Kolano |

Gdy zmienisz, przesuniesz lub usuniesz trasę, każda kształtka na tym poziomie jest wykonywana ponownie. Jeśli odcinek jest za krótki dla kształtek na swoich końcach, BimCraft to mówi i niczego nie zmienia: przesuń narożnik dalej.

:::note
Kształtki i zawory są ogólne: wykonane według rozmiaru rury lub kanału, a nie według katalogu producenta. Kształtki wciskane, zaciskane i rowkowane, korpusy zaworów i wyposażenie mają własne rozmiary producentów; sprawdź je u dostawcy przed zamówieniem.
:::

## Piony

Podczas rysowania wpisz nową wysokość w **Na wysokości** i naciśnij {{key:Enter}}: trasa idzie prosto w górę lub w dół na ostatnim narożniku, z kolanem na każdym końcu. Pion może wejść na poziom wyżej. Każdy poziom pokazuje części trasy, do których sięga jego zakres widoku, z **UP** albo **DN** przy pionie.

## Odpływy i ich spadek

Odpływy sanitarne i deszczowe zaczynają od najmniejszego spadku dozwolonego przez International Plumbing Code dla ich rozmiaru: 1/4 in. na stopę do 2-1/2 in., 1/8 in. na stopę od 3 do 6 in., 1/16 in. na stopę od 8 in. Brazylijska rura kanalizacyjna PVC zaczyna od spadku wg NBR 8160: 2 % do DN 75, 1 % od DN 100. Wpisz inny spadek na pasku lub we Właściwościach: `1/4"/ft`, `2 %` albo `1:50`. Trasa opada od swojego pierwszego punktu, więc rysuj odpływy w kierunku ich przepływu. Plan pokazuje spadek i strzałkę. Właściwości ostrzegają, gdy odpływ jest płaskszy niż minimum przepisów.

## Dobierz odpływy wg jednostek przyborowych

Wybierz odpływ sanitarny: **Jednostki przyborowe** we Właściwościach mówi, ile przenosi i jaki najmniejszy rozmiar potrzebuje. Liczy się każdy przybór sanitarny, którego złącze odpływu jest na trasie, i każdy odpływ, który do niej wpada: rysuj odpływy w kierunku ich przepływu, każdy kończąc na odpływie, do którego wpada.

- Odpływy z brazylijskiej rury kanalizacyjnej PVC liczą **UHC** i trzymają się NBR 8160; pozostałe liczą **DFU** i trzymają się International Plumbing Code.
- **Odpływ**: **Odgałęzienie** dobierane jest z tabeli przepisów dla odgałęzień przyborów; **Główny odpływ budynku** z tabeli wg spadku, więc liczy się jego **Spadek**.
- Odpływ nigdy nie jest mniejszy niż odpływy przyborów, które obsługuje (miska ustępowa wymaga DN 100, czyli 3 in.), ani niż odpływ, który do niego wpada. Wg NBR 8160 główny odpływ budynku ma co najmniej DN 100.

{{ui:Dobierz rozmiary kanalizacji}} ustawia każdy odpływ sanitarny modelu, który jest za mały na swoje jednostki przyborowe, na potrzebny rozmiar, jako jeden krok, który możesz cofnąć. Odpływ narysowany większy, niż potrzeba, zostaje bez zmian. Gdy odpływ przenosi więcej, niż może największy rozmiar jego rury przy danym spadku, BimCraft o tym mówi: zwiększ spadek albo wybierz inną rurę.

:::note
Tabele dotyczą odpływów poziomych. Piony, wentylacje i odpływy deszczowe nie są tu dobierane: sprawdź je oraz cały projekt według przepisów obowiązujących w projekcie.
:::

## Zawory

1. Wybierz {{ui:Zawór}} i rodzaj: zasuwowy, kulowy, grzybkowy lub zwrotny.
2. Kliknij na rurze, w miejscu zaworu. Rura zostaje przecięta wokół niego, a zawór podłączony po obu stronach.

Właściwości trasy wymieniają jej zawory, każdy z przyciskiem {{ui:Usuń}}.

Więcej rodzajów zaworów, filtr, przepustnice na kanałach, własne specyfikacje rur i rodziny producentów: zobacz [Specyfikacje rur, zawory, przepustnice i rodziny producentów](topic:pipe-specs).

## Zmiana trasy

Wskaż dowolną część trasy na planie lub w widoku 3D. We Właściwościach:

- **System**, **Materiał**, **Klasa** i **Rozmiar** (rury) albo **Kształt**, **Szerokość**, **Wysokość** (kanały).
- **Wysokość nad poziomem** przesuwa całą trasę w górę lub w dół.
- **Izolacja**: jej grubość, zachowywana do sprawdzenia kolizji i listy otworów (nic nie jest dla niej rysowane): zobacz [Sprawdź rury i kanały względem konstrukcji](topic:mep-against-structure).
- Rura stalowa: **Podziel na spoole**: zobacz [Spoole rur stalowych i arkusze spoolów](topic:pipe-spools).
- **Spadek** (rury).
- **Przepływ** z {{ui:Dobierz rozmiar}}: dla wody najmniejszy rozmiar, który utrzymuje wodę przy 8 ft/s (2,4 m/s), a dla ciepłej wody 5 ft/s (1,5 m/s); przy 3 m/s dla brazylijskiej rury wodnej PVC (NBR 5626). Dla kanałów: prędkość i wskaźnik tarcia kanału tak, jak narysowano. Odpływy sanitarne dobierane są według jednostek przyborowych: zobacz poniżej **Dobierz odpływy wg jednostek przyborowych**.

Każda zmiana to jeden krok {{ui:Cofnij}}. {{key:Delete}} usuwa całą trasę.

## Plany

- Rury mniejsze niż 150 mm (około 6 in.) rysowane są jedną linią na osi, większe rury i wszystkie kanały jako dwie linie w swojej szerokości.
- Każdy system ma własny kolor; PDF planu drukuje je na czarno.
- Każda trasa jest opisana swoim rozmiarem i systemem (na przykład `2" CW` lub `16×10 SA`).
- Zakres widoku planu decyduje, które trasy pokazuje, a {{ui:Pokazywane w tym planie}} może pominąć **Rury** lub **Kanały**: zobacz [Widoki, zakresy widoku i własne arkusze](topic:views-and-sheets).

## Zestawienia i przedmiar

Panel {{ui:Zestawienia}} dodaje **Rury** (wg systemu, materiału i rozmiaru, z ich długościami), **Kanały** (wg systemu, kształtu i rozmiaru, z długościami i powierzchnią zewnętrzną) oraz **Kształtki i zawory** (wg rodzaju i rozmiaru, policzone). Kliknij wiersz, aby wybrać, co wylicza; {{ui:Pobierz CSV}} pobiera tabelę.

{{ui:Przedmiar}} przekazuje trasy do TakeoffCraft: rura i kanał wg rozmiaru jako trasy narysowane na planie (odpływy ze spadkiem mierzone wzdłuż spadku), kształtki i zawory zliczane tam, gdzie są: zobacz [Wyślij ilości z modelu do TakeoffCraft](topic:takeoff). Piony są pominięte w tym arkuszu, bo plan nie może ich zmierzyć; zestawienie Rury ma ich długość.

## W pliku IFC

Każda trasa to zespół przechowujący swoje części: segmenty rur i kanałów, kształtki i zawory, każdy z typem, materiałem, kolorem dla swojego systemu i swoimi portami. Stykające się porty są połączone, a każda część należy do swojego systemu dystrybucji (pliki IFC2X3 dostają to samo jako segmenty przepływu, kształtki i kontrolery w systemie). Inne programy czytające systemy IFC widzą jedną połączoną trasę na system. Definicja trasy jest zachowana z nią, więc BimCraft odtwarza ją tak samo przy zmianie.
