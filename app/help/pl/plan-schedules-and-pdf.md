---
title: Zestawienia, wymiary i PDF planu
summary: Zestawienia drzwi, okien, ścian i pomieszczeń, które zmieniają się podczas rysowania, wymiary na planie oraz plan kondygnacji zapisany jako PDF w standardowej skali.
keywords: zestawienie, zestawienie drzwi, zestawienie okien, zestawienie ścian, zestawienie pomieszczeń, ilości, przedmiar, powierzchnia, csv, arkusz kalkulacyjny, wymiary, wymiar, wydruk, pdf, skala, 1/4", 1:50, arkusz
from: d97cd16e
---

## Co zrobisz

Zobacz, ile daje to, co narysowałeś, już w trakcie rysowania: ile drzwi i okien każdego rozmiaru, ile ściany każdego typu, jak duży jest każdy pokój. Dodaj wymiary na planie i zapisz go jako PDF do wydruku lub wysłania.

## Zestawienia

Przy włączonym {{ui:Rysuj}} **Zestawienia** w lewym panelu pokazuje jedną tabelę naraz:

- **Drzwi** i **Okna**: każde z oznaczeniem (D1, D2 … i W1 …, nadawanym przy umieszczaniu), typem, szerokością, wysokością (i parapetem), poziomem i ścianą, w której się znajduje.
- **Ściany wg typu**: dla każdego typu ściany liczba ścian, ich grubość, łączna długość i pole powierzchni jako **Powierzchnia brutto**, **Potrącenia** i **Powierzchnia netto**, z sumą.
- **Pomieszczenia**: numer, nazwa, poziom, pole i obwód, z sumą powierzchni.
- **Stropy**: każdy strop z poziomem, rodzajem i grubością oraz jego powierzchnią brutto, potrąceniami i netto.
- **Wykończenia**: każda warstwa wykończenia typów ścian (wg materiału i strony ściany) oraz sufity, z liczbą płaszczyzn i wartościami brutto, potrąceń i netto.
- **Typy ścian: dane przedmiarowe**: co wpisano raz na każdym typie ściany (jednostka, zaprawa, stawka), z liczbą ścian, ich długością i powierzchnią netto oraz stawką pomnożoną przez zmierzoną ilość. Zobacz [Złożenia ścian](topic:wall-assemblies).
- **Wykończenia wg pomieszczenia**, **Wykończenia wg ściany**, **Wykończenia wg strefy** i **Ilości wykończeń**: co pokrywa każde pomieszczenie, z powierzchniami, liczbą płytek wliczając cięcia i objętościami podłoża. Zobacz [Wykończenia pomieszczeń i zestawienia wykończeń](topic:room-finishes).
- Własne **ustawienia**: zestawienie, które pogrupowałeś, zsumowałeś i zapisałeś pod nazwą. Zobacz [Układ, zapis i eksport zestawienia](topic:schedule-layouts).

Tabele zmieniają się przy każdej edycji. Kliknij wiersz albo pojedynczą wartość, aby wybrać elementy, z których pochodzi. {{ui:Pobierz CSV}} zapisuje tabelę do otwarcia w arkuszu kalkulacyjnym; Pobierz Excel i Kopiuj do Arkuszy Google są pod nim. **Wykończenia pomieszczeń** i **Specyfikacja** ([Napisz specyfikację z modelu](topic:specification)) otwierają się z tego samego miejsca.

## Powierzchnia i objętość każdej warstwy

Wybierz **Warstwy: powierzchnia i objętość** na liście Zestawienia. Ma jeden wiersz dla każdej warstwy każdego używanego typu ściany, stropu, dachu i sufitu: element, typ i jego LOD, warstwę (liczoną od zewnętrznej strony ściany albo od góry stropu, dachu lub sufitu), jej materiał i funkcję, grubość, liczbę elementów, **powierzchnię netto** i **objętość**.

- Powierzchnia to powierzchnia netto elementów danego typu, mierzona dokładnie jak w Ściany wg typu, Stropy i Wykończenia, wg metody pomiaru projektu. Dach mierzy się po spadku; żadna metoda pomiaru nie ma reguły dla dachów.
- Objętość to ta powierzchnia razy własna grubość warstwy.
- Strop, dach lub sufit bez typu to jeden wiersz: jedna warstwa o własnej grubości.
- Wnęka powietrzna jest wymieniona z powierzchnią i pomijana w sumie objętości. Membrana ma powierzchnię i nie ma objętości.

Kliknij wiersz, aby wybrać jego elementy. **Pobierz CSV** zapisuje tabelę.

## Jak mierzy się powierzchnie

Każda powierzchnia to trzy liczby, które się sumują: brutto minus potrącenia daje netto. Reguła jest zapisana nad każdą z tych tabel i jest jedna: zestawienia, ilości zapisane w pliku IFC i przedmiar przekazany do TakeoffCraft używają tej samej.

- **Ściana**: brutto to jedno lico ściany, jej długość wzdłuż osi razy wysokość (rzeczywista płaszczyzna dla ściany o ukształtowanej górze lub podstawie). Każde drzwi, okno i inny otwór są potrącane, szerokość razy wysokość, każdy raz.
- **Strop lub sufit**: brutto to powierzchnia w jego obrysie. Każdy otwór i wycięcie wewnątrz są potrącane raz.
- **Wykończenie ściany**: każda warstwa wykończenia typu ściany pokrywa jedno lico ściany, mierzone jak ściana, z tymi samymi potrąconymi otworami. Wykończenie jest warstwą ściany: jest wymienione pod Wykończenia i nie jest dodawane do powierzchni ściany, więc ściana z drzwiami nigdy nie jest liczona dwa razy.

To jest **domyślna metoda CadCraft**: każdy otwór jest potrącany, bez względu na rozmiar; długości ścian są wzdłuż osi; ościeża nie są mierzone. Tak liczą wszystkie projekty, dopóki nie wybierzesz innej metody.

## Wybierz metodę pomiaru

Nad zestawieniem **Metoda pomiaru** wymienia metody dołączone do BimCraft, a **Wczytaj plik metody** przyjmuje metodę Twojego biura. Wybór jest zapisywany w pliku IFC jako jeden krok cofnięcia, a trzy rzeczy podążają za nim od razu: zestawienia, ilości netto zapisane w pliku i przedmiar przekazany do TakeoffCraft. Reguła nad każdą tabelą zaczyna się wtedy od metody, jej źródła, daty odczytania źródła i słów **Niesprawdzone przez kosztorysanta ilościowego**.

Metoda to mały plik faktów, a nie kod programu. Dla każdej ilości określa:

- **najmniejszy potrącany otwór**: na przykład otwór 0,5 m² lub mniejszy zostaje w powierzchni ściany;
- **jak mierzy się połączenia ścian**: wzdłuż osi; albo przy ścianie kończącej się przy innej, mierzonej do lica tamtej; albo każdy koniec ściany stykający się z inną ścianą mierzony do bliższego lica;
- **czy mierzy się ościeża** wykończenia (zawinięcia wykończenia w otworach), jako powierzchnię albo, gdy są płytkie, jako długość. Głębokość ościeża przyjmuje się jako połowę grubości ściany;
- **co mówi o murze**: jak jest mierzony oraz jaki naddatek na odpad lub zaprawę podaje.

Metody dołączone do BimCraft:

| Metoda | Ściany: najmniejszy potrącany otwór | Wykończenia ścian | Sufity | Mur |
|---|---|---|---|---|
| Domyślna CadCraft | każdy otwór | każdy otwór | każde wycięcie | bez naddatków |
| RICS NRM 2 (Wielka Brytania), wyd. 2 z 2021 | 0,5 m² lub mniej zostaje | 1 m² lub mniej zostaje | 1 m² lub mniej zostaje | wg powierzchni; bez podanych procentów |
| AAQS Standard Method for Africa 2015 | 0,5 m² lub mniej zostaje | 0,5 m² lub mniej zostaje | 0,5 m² lub mniej zostaje | wg powierzchni; mierzone netto, 0% odpadu |
| IS 1200 (Indie), 1976, mur ceglany | 0,1 m² lub mniej zostaje | domyślna (patrz niżej) | domyślna | wg objętości |
| BIA Technical Note 10 (Stany Zjednoczone), 2009 | każdy otwór | domyślna | domyślna | 5% odpadu na jednostki, 15% na zaprawę |

Czytaj te ograniczenia, zanim polegasz na metodzie:

- **Żadnej z nich nie sprawdził kosztorysant ilościowy.** Każda została zrobiona przez odczytanie wskazanego źródła i zapisanie jego liczb wraz z klauzulą, z której pochodzą. Jeśli jesteś kosztorysantem ilościowym i możesz sprawdzić którąś z nich, twórcy aplikacji chętnie to usłyszą.
- Tam, gdzie reguły nie dało się odczytać ze źródła, metoda podaje **nie potwierdzone** i używana jest domyślna metoda CadCraft. Żadna metoda dołączona do BimCraft nie ma potwierdzonej reguły dla połączeń ścian, ościeży ani stropów, więc są one mierzone domyślnie we wszystkich metodach.
- IS 1200 potrąca otwory w tynku w trzech przedziałach. Plik metody nie może jeszcze zawierać przedziałów, więc wykończenia ścian używają domyślnej metody w tej metodzie, a reguła to mówi.
- Południowoafrykański Standard System of Measuring Building Work **nie** jest wśród nich: jego tekstu nie udało się odczytać. Metoda AAQS dla Afryki mówi, że została oparta na wydaniu tego systemu z 1991 roku, ale to inny dokument.
- BIA Technical Note 10 to branżowa nota kosztorysowa, a nie standardowa metoda pomiaru.
- Otwór dokładnie najmniejszego rozmiaru podąża za słowami metody („nie przekraczający”, „mniejszy niż”). Rozmiary w odległości 2 na 10 000 od niego liczą się jako dokładnie on.
- Według metody netto powierzchnia boczna ściany i netto powierzchnia stropu lub sufitu w pliku podążają za metodą, a zestaw ilości podaje jej nazwę. Powierzchnie brutto i objętości w pliku zostają jak narysowano.

**Uwagi do tej metody** pod wyborem mówią, co każde źródło zostawia otwarte. **Otwórz źródło** przechodzi do dokumentu.

### Metoda własnego biura

Plik metody to JSON w formacie `cadcraft-measurement-method`. Każda wartość w nim wskazuje klauzulę, z której pochodzi; wartość bez klauzuli jest odrzucana. Plik jest sprawdzany przy wczytaniu, błędne pole zostaje nazwane, a nic z pliku, który nie przechodzi kontroli, nie jest używane. Po wybraniu plik zapisuje się w projekcie, więc projekt otwiera się tak samo na innym komputerze. Jego identyfikator to zwykła nazwa według Ciebie (nie musi to być identyfikator metody dołączonej do aplikacji).

## Cegły, bloki i zaprawa

**Typy ścian: dane przedmiarowe** liczą jednostki i zaprawę każdego typu ściany, którego jednostka ma długość i wysokość (zobacz [Nadaj typowi dane przedmiarowe](topic:wall-assemblies#give-a-type-its-takeoff-data)). To są wzory, dokładnie tak liczone:

- **Jednostki na powierzchnię jednego liścia** = 1 / ((długość jednostki + spoina) × (wysokość jednostki + spoina)). Cegła 215 × 65 mm ze spoiną 10 mm: 1 / (225 × 75 mm) = 59,26 na m².
- **Jednostki w poprzek liścia** = (grubość liścia + spoina) / (szerokość jednostki + spoina), zaokrąglone do całości, co najmniej 1. Liść 102,5 mm z cegieł 102,5 mm to 1; ściana 215 mm z tych samych cegieł to 2.
- **Jednostki** = jednostki na powierzchnię × jednostki w poprzek liścia × netto powierzchnia lica ściany, zsumowane po liściach muru danego typu.
- **Jednostki do zamówienia** = jednostki × (1 + odpad % / 100), zaokrąglone w górę do całej jednostki. Odpad to ten wpisany na typie; gdy nic nie wpisano, metody, jeśli ją podaje; w przeciwnym razie 0%.
- **Zaprawa** = netto powierzchnia × grubość liścia, minus objętość jednostek (jednostki × długość × wysokość × szerokość), potem plus dodatkowy procent wpisany na typie dla wcięć lub otworów, potem plus naddatek metody, jeśli go podaje. Wymaga szerokości jednostki.

Co przyjęto: każdy liść muru typu jest zbudowany z jednej jednostki tego typu; liść grubszy niż jedna szerokość jednostki liczy się jako tyle szerokości jednostek, każda jak liść leżący wzdłuż, więc cięte jednostki, zamknięcia i kształty specjalne nie są liczone osobno; gdy żadna warstwa nie jest zaznaczona jako zbudowana z jednostki, warstwy rdzeniowe są traktowane jako liście, a uwaga nad tabelą to mówi. **Ilość** to stawka razy to, na co stawka jest podana, co może być teraz także jednostką do zamówienia, 1000 jednostek do zamówienia albo m³ zaprawy.

Oznaczenia to etykiety IFC elementów: zmień jedno we **Właściwościach** (Oznaczenie), a zestawienie podąży za tym. Dla każdego modelu IFC, narysowanego lub nie, [Zsumuj ilości, wypisz elementy i zestawienie przestrzeni](topic:quantity-totals) sumuje każdą właściwość.

## Wymiary

Plan pokazuje długość każdej narysowanej ściany wzdłuż jej zewnętrznego lica (ściana wewnętrzna: wzdłuż jednego lica) i, dla ściany z drzwiami lub oknami, łańcuch od narożników do każdego otworu. {{ui:Wymiary}} na pasku modelu ukrywa je i pokazuje ponownie.

## Zapisz plan jako PDF

1. Pokaż poziom, który chcesz, i ustaw jednostki w panelu **Poziomy**.
2. Kliknij {{ui:Drukuj}} na pasku modelu.
3. BimCraft zapisuje „<plik> — <poziom>.pdf”: plan w czerni i bieli w największej standardowej skali, która mieści się na stronie (1/4" = 1'-0", 1/8" = 1'-0" … na Letter w stopach i calach; 1:50, 1:100 … na A4 w milimetrach), ze ścianami wypełnionymi, drzwiami, oknami, nazwami i powierzchniami pomieszczeń, wymiarami oraz paskiem tytułowym z poziomem, plikiem, wysokością przekroju, datą i skalą.

PDF rysowany jest jako linie i tekst, więc pozostaje ostry przy każdym powiększeniu, a jego tekst można przeszukiwać.

## Dobrze wiedzieć

- Zestawienia wymieniają to, co zrobiły narzędzia rysowania. Drzwi i okna z innego programu pojawiają się zamiast tego w Sumach ilości.
- Aby wycenić zlecenie, przekaż ilości do TakeoffCraft: zobacz [Ilości do TakeoffCraft](topic:takeoff). Pobieranie CSV zostaje do arkusza kalkulacyjnego.
