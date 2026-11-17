---
title: "Oszacuj światło dzienne w każdym pomieszczeniu"
summary: "Średni współczynnik światła dziennego każdego pomieszczenia, wyliczony z jego okien, wewnętrznych powierzchni i nieba widzianego przez każde okno, z kątem nieba zmierzonym w modelu. Wstępny szacunek projektowy, nie symulacja ani kontrola zgodności z przepisami."
keywords: światło dzienne, współczynnik światła dziennego, średni współczynnik światła dziennego, adf, składowa nieba pionowego, vsc, zysk słoneczny, słońce, współczynnik g, siatka, podział strumienia, składowa nieba, składowa odbita wewnętrznie, światło naturalne, okno, przeszklenie, kąt nieba, przesłonięcie, zacienienie, balkon, okap, współczynnik odbicia, przepuszczalność, wczesny projekt, analiza, pomieszczenia, przestrzenie
from: 5f300a78
---

Karta {{ui:Światło dzienne}} w prawym panelu oblicza **średni współczynnik światła dziennego** każdego pomieszczenia: jaka średnio część światła pochmurnego nieba na zewnątrz dociera do pomieszczenia, wyrażona w procentach. Odczytuje pomieszczenia (przestrzenie) i okna z otwartego modelu IFC. Nic nie jest zmieniane w modelu i nic nie jest wysyłane.

:::warning
Wszystko na tej karcie to **narzędzie projektowe, a nie obliczenie zgodności**: wstępne szacunki wg opublikowanych metod, **nie symulacja** i **nie sprawdzenie zgodności z przepisami budowlanymi ani normami**. BS EN 17037, LEED, BREEAM i przepisy energetyczne wymagają symulacji światła dziennego z klimatem danego miejsca. Do tego użyj programu do symulacji światła dziennego.
:::

## Jak to policzyć

1. Otwórz model IFC, który ma pomieszczenia (przestrzenie) i okna. Modele narysowane tutaj mają pomieszczenie w każdym zamkniętym zestawie ścian.
2. Otwórz kartę {{ui:Światło dzienne}} i kliknij {{ui:Oblicz}}.
3. Każde pomieszczenie pokazuje swój współczynnik światła dziennego i przedział: poniżej 2 %, 2–5 %, 5 % lub więcej. Kliknij pomieszczenie, aby zobaczyć jego powierzchnie oraz pole i kąt nieba każdego okna. Pomieszczenie i jego okna są zaznaczane w modelu.

Zmiana danych wejściowych od razu zmienia wyniki. Po zmianie modelu kliknij {{ui:Oblicz ponownie}}. {{ui:CSV}} zapisuje każde pomieszczenie wraz z jego wynikami i użytymi danymi.

## Wzór

Średni współczynnik światła dziennego (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumowany po oknach pomieszczenia (wzór Littlefaira, stosowany w BRE 209, BS 8206-2 i CIBSE LG10):

- **T**, przepuszczalność światła przez szkło (na start 0,7: użyj wartości podanej przez producenta).
- **Ag**, powierzchnia przeszklenia: pole każdego okna (jego pełna szerokość × wysokość, a w razie braku takich danych rozmiar z modelu) × **udział przeszklenia** (na start 0,75: reszta to rama).
- **θ**, kąt nieba widzianego przez okno, w stopniach (poniżej).
- **M**, współczynnik utrzymania ze względu na brud na szkle (na start 1).
- **A**, każda wewnętrzna powierzchnia pomieszczenia: podłoga, ściany, sufit i okna, wzięte z kształtu własnego pomieszczenia.
- **R**, ich średni współczynnik odbicia ważony powierzchnią: podłoga 0,2, ściany 0,5, sufit 0,7 (na start). Szkło liczy się jako 0,1.

## Jak mierzy się kąt nieba

Dla każdego okna BimCraft tnie model pionową płaszczyzną prostopadłą do okna, zaczynając od zewnętrznej powierzchni szyby, i patrzy od horyzontu prosto w górę. Wszystko, co cięcie napotka przed oknem (budynek naprzeciwko, balkon lub okap nad nim, okap dachu), zasłania część tych 90°. θ to to, co pozostaje. Samo okno i ściana, w której jest osadzone, są pomijane. Robi to w pięciu miejscach na szerokości okna i bierze średnią, więc cienki słupek przed środkiem zabiera swój udział, a nie całe niebo.

Budynek 8,5 m ponad środkiem okna i 9,9 m dalej zasłania 40,65° (kąt, którego tangens to 8,5 ÷ 9,9), pozostawiając θ = 49,35°.

## Składowa nieba pionowego każdego okna

{{ui:Oblicz}} mierzy też dla każdego okna, jaką część całego nieba widzi. Robi to tym samym pionowym cięciem, obracanym w każdy kierunek przed oknem (co 2°, od jednej strony do drugiej), więc budynek z boku, żebro lub głęboka ościeżnica zabiera swój udział. Na tej podstawie BimCraft wylicza **składową nieba pionowego (VSC)**: jaka część światła pochmurnego nieba dociera do szyby, jako udział tego, co dostałby otwarty, płaski dach. Okno bez niczego przed sobą dostaje **39,6 %**, czyli najwięcej, co może dać okno pionowe. Długi budynek wznoszący się 25° ponad oknem zostawia około **27 %**, wartość, której brytyjskie wytyczne (BRE 209) używają jako reguły praktycznej. Każde okno w szczegółach pomieszczenia pokazuje swoje VSC i swój **kąt przesłonięcia** (jak wysoko coś wznosi się prosto przed nim).

Niebo to standardowe pochmurne niebo CIE, które jest trzy razy jaśniejsze prosto w górze niż przy horyzoncie. Cięcie jest dokładne: nic nie jest próbkowane.

## Słońce przez okna w wybranym dniu

Otwórz {{ui:Słońce w oknach danego dnia}} i wybierz datę. BimCraft śledzi słońce przez ten dzień co kwadrans i dla każdego okna sumuje ciepło, jakie słońce wnosi przez szkło:

- **bezpośrednie słońce**, gdy jest przed oknem i nic w modelu go nie zasłania (to samo dokładne cięcie, obrócone w stronę słońca: balkon, który zacienia wysokie letnie słońce w południe, wpuszcza niskie zimowe słońce);
- **światło nieba** na szkle, pomniejszone o to, czego okno nie widzi;
- światło **odbite od ziemi** (jej współczynnik odbicia: 0,2 na start);
- wszystko przez **współczynnik g** szkła (udział energii słonecznej, który przepuszcza: 0,6 na start; użyj wartości producenta) i przez udział przeszklenia.

Każde pomieszczenie pokazuje sumę dnia w kWh i szczyt w watach z godziną. Szczegóły pomieszczenia rysują dzień jako wykres. Niebo jest czyste wg modelu Hottela (Duffie & Beckman, *Solar Engineering of Thermal Processes*), z wartościami letnimi lub zimowymi dla miejsca i pory roku oraz wysokością stanowiska. Położenie słońca wyznacza NOAA. Szerokość i długość geograficzną biorą się z obiektu terenu w IFC, a północ z północy rzeczywistej modelu. Jeśli model nie ma stanowiska, wpisz szerokość i długość. Godziny są czasem standardowym (bez czasu letniego) w strefie czasowej, którą wpiszesz, a w razie braku takiej, którą sugeruje długość geograficzna.

Pomija: chmury (to czysty dzień), mniejsze przepuszczanie szkła przy niskich kątach, ramy zacieniające szkło, rolety oraz to, co wchłaniają ściany i dach. Oszacowanie chłodzenia w tej samej karcie używa wartości szczytowej.

## Współczynnik światła dziennego na siatce

Otwórz {{ui:Współczynnik światła dziennego na siatce}} i kliknij {{ui:Oblicz siatkę}}. BimCraft kładzie siatkę na podłodze każdego pomieszczenia, na wysokości płaszczyzny roboczej (na start 0,85 m), pół metra od ścian, i wylicza współczynnik światła dziennego w każdym punkcie metodą **podziału strumienia BRE**:

- **składowa nieba**: pochmurne niebo widziane z punktu przez otwór każdego okna, pomniejszone o ramy;
- **składowa odbita zewnętrznie**: to, co punkt widzi przez okno z budynków na zewnątrz, świecących z jedną dziesiątą jasności nieba za nimi (zmień jasność przesłonięcia, jeśli są znacznie jaśniejsze lub ciemniejsze);
- **składowa odbita wewnętrznie**: światło odbijające się po pomieszczeniu, z powierzchni pomieszczenia i ich współczynników odbicia, pola okien oraz tego, jaka część pola jest na zewnątrz (wzór BRE, z przepuszczalnością szkła zamiast przezroczystego szkła, które zakładał).

Każde pomieszczenie pokazuje swoją średnią, najniższy punkt i to, jaka część ma 2 % lub więcej. Szczegóły pomieszczenia rysują jego rzut z każdym punktem pokolorowanym wg współczynnika światła dziennego i oknami na czerwono. Aby działało szybko na każdym komputerze, pomieszczenie dostaje najwyżej **400 punktów**. W dużym pomieszczeniu rozstaw rośnie, by się zmieścić (wpisz rozstaw, aby wybrać własny).

## Czego to nie uwzględnia

- Okna dachowe (szkło leżące płasko lub pochyłe) są wymienione, ale nie liczone. Wzory tutaj dotyczą okien w ścianach.
- Okna bez pomieszczenia za nimi (na przykład hol bez przestrzeni) są wymienione osobno.
- Ościeżnice okien (otwór bierze się z zewnętrznej powierzchni), olśnienie, godziny nasłonecznienia i światło dzienne oparte na klimacie. Dla BS EN 17037, LEED lub BREEAM użyj programu do symulacji światła dziennego.
- Przedziały pochodzą ze starszych brytyjskich wytycznych (BS 8206-2). Są pokazane jako orientacja, nigdy jako zaliczenie lub niezaliczenie.
