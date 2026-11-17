---
title: Wyrenderuj obraz modelu
summary: Zrób obraz w świetle dziennym z widoku 3D: niebo, słońce na szerokości geograficznej działki, miękkie cienie, szklane okna; z WebGPU śledzenie promieni na karcie graficznej z niebem, kamerą, mieszaniem świateł, korekcją barw, mgłą i kolejką renderowania.
keywords: renderowanie, preset, presety, preset sceny, wnętrze, zewnętrze, widok przekroju, noc, jednym kliknięciem, renderowanie, śledzenie ścieżek, śledzenie promieni, globalne oświetlenie, odbicia, załamanie, wysoka jakość, zdjęcie, fotorealistyczny, realistyczny, obraz, png, nieruchomy, niebo, słońce, światło dzienne, cienie, miękkie cienie, okluzja otoczenia, szkło, okna, metal, materiały, ekspozycja, jasność, pochmurnie, zmierzch, studio, prezentacja, wizualizacja, webgpu, redukcja szumu, fizyczne niebo, hdri, ies, głębia ostrości, panorama, balans bieli, mieszanie świateł, elementy renderu, exr, png 16-bitowy, mgła, kaustyka, kolejka renderowania
from: beb74cc7
---

{{ui:Renderuj}} na pasku narzędzi tworzy obraz widoku 3D wyglądający jak światło dzienne: niebo, słońce tam, gdzie wyznacza je szerokość geograficzna działki, miękkie cienie, światło z całego nieba, które przyciemnia narożniki, oraz kolory, które mogą wyglądać jak szkło lub metal. Model i plik nie są zmieniane.

## Renderowanie widoku

1. Ustaw widok 3D tak, jak chcesz go na obrazie: obróć i powiększ, ukryj kondygnacje lub elementy, których nie chcesz, i ustaw [przekrój](topic:section-plane), jeśli obraz ma pokazywać cięcie.
2. Kliknij {{ui:Renderuj}} na pasku narzędzi.
3. Jeśli wciśnięty przycisk {{ui:Scena}} nie jest tym, czego chcesz, wybierz inny (zob. [Presety scen](topic:render#scene-presets-a-good-picture-in-one-click)), wybierz {{ui:Rozmiar}}, a potem kliknij {{ui:Renderuj}} w oknie.

   Obraz wypełnia się podczas renderowania i z każdym przebiegiem staje się gładszy. {{ui:Zatrzymaj}} (lub {{key:Esc}}) kończy go wcześniej i zachowuje dotychczasowy obraz.

4. Kliknij {{ui:Zapisz}}, aby pobrać go jako PNG, lub {{ui:Zapisz jako}} dla innego formatu (zob. [Zapisywanie obrazu](topic:render#save-the-picture)). Nazwa pochodzi od pliku modelu.

:::tip
Zacznij od {{ui:Szkic}} w {{ui:Rozmiar widoku}}, aby sprawdzić kamerę, a potem renderuj {{ui:Dobra}} lub {{ui:Najlepsza}} w większym rozmiarze jako obraz końcowy.
:::

## Presety scen: dobry obraz jednym kliknięciem

U góry okna są cztery przyciski {{ui:Scena}}. Każdy ustawia niebo, jasność, grunt, linie krawędzi, jakość i słońce jednym kliknięciem, więc nie trzeba niczego poznawać przed pierwszym obrazem. Kliknij jeden, a potem {{ui:Renderuj}}.

| Scena | Co ustawia | Do czego |
|---|---|---|
| {{ui:Na zewnątrz}} | Czyste niebo, własne słońce modelu, grunt włączony | Budynek z zewnątrz |
| {{ui:Wewnątrz}} | Zachmurzone niebo (równe światło, bez twardych plam słońca), o pół stopu jaśniej | Widok z wnętrza pomieszczenia |
| {{ui:Widok przekroju}} | Białe studio, bez gruntu, linie krawędzi w szybkim renderze | Model przecięty przekrojem |
| {{ui:Noc}} | Słońce pod horyzontem (północ w środku zimy dla półkuli działki), o jeden stop jaśniej | Lampy oświetlające model. Bez lamp obraz jest ciemny |

- {{ui:Wybierz dla tego widoku}} wybiera za Ciebie: {{ui:Widok przekroju}}, gdy włączone jest cięcie przekrojem, {{ui:Wewnątrz}}, gdy kamera jest wewnątrz modelu, w przeciwnym razie {{ui:Na zewnątrz}}. Za pierwszym otwarciem okna zaczyna się tak samo, bez Twojej pomocy.
- Każde ustawienie pozostaje poniżej i można je zmienić. Gdy zmienisz jedno z ustawień sceny, żaden przycisk nie jest wciśnięty, a wiersz pod przyciskami informuje, że ustawienia są Twoje. Kliknij scenę ponownie, aby przywrócić jej wartości.
- Scena nie rusza silnika, {{ui:Postać}}, rozmiaru, materiałów, kamery ani lamp.

:::note
Sceny dają te same wartości w ModelCraft i BimCraft. Wygląd gotowego obrazu zależy od modelu i karty graficznej.
:::

## Co widać na obrazie

Na obrazie widać to, co widok 3D pokazuje jako bryłę: elementy ukryte i półprzezroczyste, ukryte kondygnacje i ukryte modele są pomijane, a pomieszczenia pojawiają się tylko przy włączonym {{ui:Przestrzenie}}. Płaszczyzna przekroju lub pudło przekroju tnie obraz tak, jak tnie widok. Elementy mają własne kolory: kolorowanie według właściwości (karta {{ui:Kolor}}) nie jest używane.

## Ustawienia

| Ustawienie | Co robi |
|---|---|
| {{ui:Rozmiar}} | Rozmiar widoku, dwukrotność rozmiaru widoku, Full HD, 4K lub kwadrat |
| {{ui:Postać}} | {{ui:Szybki}} albo {{ui:Wysoka jakość (śledzenie promieni)}} (poniżej) z jego {{ui:Limit czasu}} |
| {{ui:Jakość}} | Ile przebiegów (a w wysokiej jakości próbek) jest uśredniane: {{ui:Szkic}} 16, {{ui:Dobra}} 64, {{ui:Najlepsza}} 256. Więcej przebiegów daje gładsze cienie i krawędzie, ale trwa dłużej |
| {{ui:Niebo}} | {{ui:Czyste niebo}}, {{ui:Zachmurzenie}}, {{ui:Zmierzch}} lub {{ui:Białe studio}} (zwykłe białe tło) |
| {{ui:Słońce}} | 21 czerwca o 15:00 na szerokości geograficznej podanej w pliku dla jego działki (IfcSite), obrócone do prawdziwej północy modelu. Zaznacz {{ui:Użyj innej daty i godziny dla tego obrazu}}, aby wybrać inny czas |
| {{ui:Jasność}} | Jaśniej lub ciemniej, krokami (stopami) |
| {{ui:Grunt pod modelem}} | Grunt na najniższym punkcie modelu, który przyjmuje cienie i zanika w horyzoncie |
| {{ui:Rysuj krawędzie}} | Cienko rysuje krawędzie elementów na obrazie |

Gdy w wybranym czasie słońce jest pod horyzontem, jest noc: niebo ciemnieje, a lampy modelu je oświetlają.

## Lampy

Każda oprawa oświetleniowa w modelu jest lampą na obrazie: oprawy w pliku IFC (IfcLightFixture lub element typu oprawa oświetleniowa), w tym te, które umieścisz z biblioteki. Każda świeci w dół, tuż pod oprawą. Gdy plik podaje moc oprawy, jej jasność wynika z niej; w przeciwnym razie wynosi 800 lumenów, ciepła biel.

Okno wymienia lampy pod {{ui:Lampy}}: odznacz jedną, aby ją wyłączyć, albo wpisz jej jasność w lumenach. Te zmiany są zapisywane w IFC (w zestawie właściwości oprawy `CadCraft_Light`, gdzie możesz je też zmienić we Właściwościach), a {{key:Ctrl+Z}} je cofa.

Gdy plik nic nie mówi o położeniu działki, słońce ustawiane jest na 40° szerokości północnej, a okno to podaje. Czas jest czasem lokalnym działki, wyliczonym z jej długości geograficznej, więc może być o godzinę inny tam, gdzie zegary są ustawione inaczej.

Te ustawienia są zachowywane w tej przeglądarce na następny obraz. Nie są zapisywane w pliku IFC.

## Szkło i inne materiały

W {{ui:Materiały}} każdy kolor na ekranie ma wygląd: {{ui:Matowy}}, {{ui:Satynowy}}, {{ui:Błyszczący}}, {{ui:Metal}}, {{ui:Polerowany metal}}, {{ui:Szkło}} lub {{ui:Szkło matowe}}. Kolory, które plik IFC czyni przezroczystymi (np. przeszklenie okien), zaczynają jako {{ui:Szkło}}.

:::note
W trybie {{ui:Szybki}} szkło i metal odbijają niebo, a nie resztę modelu, a światło nie załamuje się w szkle. Tryb {{ui:Wysoka jakość (śledzenie promieni)}} poniżej robi oba.
:::

## Wysoka jakość

Wybierz {{ui:Postać}} › {{ui:Wysoka jakość (śledzenie promieni)}}, aby uzyskać obraz, który śledzi światło tak, jak widzi je kamera:

- światło odbija się między powierzchniami, więc pomieszczenie oświetlone przez okno lub lampę jest oświetlone dookoła, a kolory przenikają na sąsiednie powierzchnie;
- szkło jest prawdziwym szkłem: światło się przez nie załamuje, a ono odbija model;
- metal i polerowane powierzchnie odbijają resztę modelu;
- panele świetlne świecą jak panele, z miękkimi cieniami.

Jest dużo wolniejsza niż {{ui:Szybki}}: każdy przebieg ponownie śledzi światło każdego piksela. Obraz zaczyna się ziarnisty i czyści się, gdy sumują się próbki, więc zacznij od małego ({{ui:Rozmiar widoku}}, {{ui:Szkic}}) i wybierz {{ui:Limit czasu}}: gdy czas się skończy, zachowany zostaje dotychczasowy obraz. {{ui:Zatrzymaj}} też go zachowuje. Pierwszy przebieg czeka, aż przeglądarka przygotuje śledzenie promieni.

Tam, gdzie przeglądarka ma WebGPU, śledzenie promieni jest własne CadCraft i działa na karcie graficznej; wiersz pod obrazem to podaje. Po {{ui:Zatrzymaj}} lub upływie limitu {{ui:Wznów}} kontynuuje ten sam obraz, aż zbierze wszystkie próbki; zmiana ustawienia lub ponowne naciśnięcie {{ui:Renderuj}} zaczyna od nowa. Bez WebGPU obraz jest śledzony w WebGL (wiersz to podaje), a {{ui:Wznów}} nie jest oferowane.

:::linux
Firefox i większość konfiguracji Chrome w Linuksie nie mają jeszcze WebGPU, więc wysoka jakość używa tam WebGL.
:::

W tym trybie krawędzie nie są rysowane, tekstury pokazują kolor i chropowatość, ale nie wypukłości, a cięcie przekrojem jest wykonywane na modelu przed startem obrazu.

{{ui:Redukcja szumu (usuwa ziarno po próbkach)}} jest domyślnie włączona: gdy obraz jest gotowy lub zatrzymany, pozostałe ziarno usuwa sieć neuronowa stworzona do tego (opublikowana sieć Intel Open Image Denoise, uruchamiana na Twoim komputerze: na karcie graficznej, w przeciwnym razie na procesorze). {{ui:Pokaż}} › {{ui:Obraz przed redukcją szumu}} pokazuje go tak, jak wyrenderowano.

## Niebo i profile światła na karcie graficznej

Przy WebGPU wysoka jakość ma dwa dodatkowe niebo:

- {{ui:Fizyczne niebo}} wylicza światło dzienne z wysokości słońca: głęboki błękit nad głową, blady pas przy horyzoncie oraz słońce, które staje się cieplejsze i słabsze, gdy jest nisko. {{ui:Zamglenie}} idzie od bardzo czystego dnia (2) do zamglonego (10).
- {{ui:Obraz nieba (HDRI)}} oświetla model panoramicznym obrazem prawdziwego miejsca. {{ui:Wybierz obraz…}} przyjmuje plik równoprostokątny `.hdr` lub `.exr`; {{ui:Obróć}} obraca go wokół modelu, a {{ui:Jasność obrazu}} rozjaśnia lub przyciemnia go. Obraz ma własne słońce, więc słońce modelu nie jest dodawane. Jest zachowywany tylko, dopóki strona jest otwarta: po ponownym otwarciu wybierz go ponownie.

Każda lampa na liście {{ui:Lampy}} może mieć profil światła producenta: {{ui:Profil IES…}} czyta plik IES (LM-63), a lampa rzuca wtedy światło tak, jak ta oprawa (wąska oprawa punktowa, oświetlacz ściany). Każda lampa o tej nazwie go używa, a lampa zachowuje własną jasność. Kliknij nazwę profilu, aby przestać go używać.

Okna z przezroczystego szkła pomagają światłu nieba dotrzeć do pomieszczenia.

Tryb {{ui:Szybki}} i śledzenie promieni w WebGL pokazują {{ui:Fizyczne niebo}} i {{ui:Obraz nieba (HDRI)}} jako czyste niebo i ignorują profile światła.

## Kamera

{{ui:Kamera}} ustawia obraz jak fotografię:

- {{ui:Ekspozycja}}: zostaw {{ui:Suwak jasności}} albo wybierz {{ui:Ustawienia kamery}} i ustaw {{ui:Przysłona (f-stop)}}, {{ui:Czas migawki}} i {{ui:ISO}} jak w aparacie; EV obok nich to zwykła wartość ekspozycji. f/16 przy 1/100 s i ISO 100 pasuje do słonecznego dnia; ciemniejsza scena potrzebuje szerszej przysłony, dłuższego czasu migawki lub wyższego ISO. Działa to w każdym trybie.
- {{ui:Głębia ostrości}} rozmywa to, co bliżej lub dalej niż {{ui:Odległość ostrzenia (m)}}, tak jak zrobiłby to obiektyw o tej przysłonie (pozostaw puste, aby ostrzyć na to, co jest w środku widoku); {{ui:Kształt przysłony}} nadaje rozmytym refleksom kształt okrągły lub wielokątny.
- {{ui:Perspektywa dwupunktowa (linie pionowe pozostają pionowe)}} wypoziomowuje kamerę i przesuwa obraz, tak jak architektoniczny obiektyw z przesunięciem, dzięki czemu ściany nie pochylają się, gdy patrzysz w górę lub w dół na budynek.
- {{ui:Balans bieli}} ustala, który kolor światła pokazuje się jako biały: niżej (np. 3000 K) dla ciepłego światła lamp, wyżej dla cienia i dni pochmurnych.
- {{ui:Rzutowanie}}: {{ui:Panorama 360°}} tworzy obraz 2:1 wszystkiego dookoła kamery dla przeglądarek panoram; {{ui:Stereoskopowa panorama 360°}} układa panoramę lewego i prawego oka jedna nad drugą dla gogli; {{ui:Mapa sześcienna (6 ścian)}} tworzy sześć kwadratowych widoków w siatce 3 × 2. Szerokość pochodzi z {{ui:Rozmiar}}.

Rzutowanie, głębia ostrości, perspektywa dwupunktowa i balans bieli wymagają śledzenia promieni na karcie graficznej (WebGPU), więc pokazują się tylko w {{ui:Wysoka jakość (śledzenie promieni)}}.

## Wykończenie obrazu

{{ui:Obraz}} koryguje barwy obrazu w wysokiej jakości jak fotografię, a każda kontrolka od razu zmienia gotowy obraz, bez ponownego renderowania:

- {{ui:Wygląd (transformacja widoku)}}: {{ui:ACES filmowy}} (obraz jak wcześniej), {{ui:AgX}} (łagodniejszy, zachowuje barwę przy bardzo jasnym świetle), {{ui:Filmowy}} (łagodna krzywa filmowa) lub {{ui:Standardowy}} (zwykły; bardzo jasne światło obcina się do bieli).
- {{ui:Kontrast}} i {{ui:Kompresja świateł}} (przywraca detale w bardzo jasnych miejscach).
- {{ui:Poświata (bloom)}} (miękka poświata wokół jasnego światła), {{ui:Blask}} z {{ui:Smugi blasku}} (promienie gwiazd z najjaśniejszych punktów) i {{ui:Winieta}} (ciemniejsze narożniki).
- {{ui:Tabela barw (.cube)…}} stosuje korekcję barw z pliku `.cube` z jej {{ui:Siła tabeli barw}}; jak obraz nieba jest zachowywana tylko przy otwartej stronie.

## Zapisywanie obrazu

{{ui:Zapisz jako}} obok {{ui:Zapisz}} wybiera plik: {{ui:PNG}}, {{ui:JPEG}} lub {{ui:WebP}} do udostępniania (JPEG i WebP tylko tam, gdzie przeglądarka potrafi je zapisać), a po renderowaniu w wysokiej jakości na karcie graficznej także:

- {{ui:PNG, 16 bitów}}: obraz po korekcji z drobniejszymi krokami między odcieniami, do druku lub dalszej edycji.
- {{ui:EXR, wszystkie warstwy (32-bitowy zmiennoprzecinkowy)}}: obraz tak, jak wyrenderowano (światło liniowe, bez korekcji), z każdym elementem renderu i grupą świateł jako osobną warstwą, do programów do kompozycji.
- {{ui:Plik renderu (.ccrender, do późniejszej korekty)}}: wszystko, czego okno potrzebuje, aby ponownie zmieszać i poddać korekcji obraz. {{ui:Otwórz plik renderu…}} przywraca go wraz z mieszanką i korekcją, bez renderowania.

## Mieszanie świateł po renderowaniu

Włącz {{ui:Mieszanie świateł (zmiana barwy i jasności każdego źródła po renderze)}} przed naciśnięciem {{ui:Renderuj}}. Gdy obraz jest gotowy (lub zatrzymany), {{ui:Mieszaj obraz}} wylicza jego światła w grupach: niebo, słońce oraz lampy według nazwy (każda lampa o tej samej nazwie tworzy jedną grupę). Wyłącz grupę, nadaj jej kolor albo rozjaśnij lub przyciemnij, a obraz zmieni się od razu, bez ponownego renderowania. {{ui:Zapisz mieszankę}} zachowuje mieszankę pod nazwą, którą wybierzesz później; {{ui:Tak jak wyrenderowano}} wraca do obrazu takiego, jaki powstał. {{ui:Zapisz}} zapisuje zmieszany obraz.

{{ui:Elementy renderu (albedo, normalne, głębia, rozproszenie, odbicie, transmisja, emisja, identyfikatory)}} zachowuje też części obrazu. {{ui:Pokaż}} przełącza widok na jedną z nich: kolory powierzchni (albedo), normalne, głębię, światło rozproszone, odbite i przepuszczone (każde bezpośrednie i pośrednie), to, co świeci, oraz niebo, a także kolor na obiekt lub na materiał do tworzenia masek.

Oba zachowują dodatkowe warstwy na karcie graficznej. Przy dużych rozmiarach karta graficzna może nie mieć miejsca; okno to podaje, a mniejszy rozmiar działa.

## Mgła, dym, szum i kaustyka

Są w {{ui:Mgła, dym i szum}} i działają w {{ui:Wysoka jakość (śledzenie promieni)}} na karcie graficznej; pozostałe silniki je pomijają.

- {{ui:Mgła i zamglenie}} wypełnia powietrze do określonej wysokości mgłą, którą oświetlają słońce, niebo i lampy. {{ui:Jak daleko widać, w metrach}} ustala, jak gęsta jest (ok. 100 m to lekkie zamglenie, 20 m gęsta mgła), {{ui:Wysokość mgły nad ziemią, w metrach}} to miejsce, w którym się kończy, a {{ui:Smugi światła}} określa, jak bardzo mgła świeci w stronę światła. Światło słoneczne przenika przez górę mgły, więc tam, gdzie słońce wpada przez okno lub między budynkami, widzisz je jako smugi światła.
- {{ui:Dym lub chmura}} dodaje jedną bryłę dymu lub chmury, oświetloną jak mgła. {{ui:Rodzaj}} to {{ui:Chmura}}, {{ui:Słup dymu}} albo {{ui:Z pliku wolumenu (.ccvol)}}, czyli własny format siatki CadCraft. {{ui:Szczegółowość}} i {{ui:Wariant}} zmieniają wykonaną chmurę lub słup, {{ui:Rozmiar najdłuższego boku w metrach (0 = rozmiar modelu)}}, {{ui:Przesuń X (m)}}, {{ui:Przesuń Y (m)}}, {{ui:Przesuń Z (m)}} i {{ui:Obróć}} ustawiają ją (zaczyna od środka modelu), {{ui:Grubość}} zagęszcza ją, {{ui:Poświata w stronę światła}} rozjaśnia ją w stronę światła, a {{ui:Kolor}} ją barwi. Plik wolumenu jest zachowywany tylko przy otwartej stronie, jak obraz nieba.
- {{ui:Zatrzymuj wcześniej tam, gdzie obraz jest czysty (próbkowanie adaptacyjne)}} nie dodaje już próbek pikselom, które się ustabilizowały. {{ui:Dopuszczalny szum}} to ilość ziarna, która pozostaje, gdy piksel się zatrzymuje. Wiersz pod obrazem podaje, ile próbek piksel dostał średnio.
- {{ui:Kaustyka (światło załamane przez szkło lub odbite od luster)}} śledzi światło z lamp i słońca, więc jasna plama pod szklaną kulą lub odbicie lustra na ścianie wychodzi czysto, a nie ziarniście. Jest wyłączona, gdy włączone są mgła, dym, mieszanie świateł lub elementy renderu, i jest przeznaczona do obrazów, a nie do obrazów 360°.

## Kolejka renderowania

{{ui:Kolejka renderowania}} w oknie: {{ui:Dodaj ten obraz do kolejki}} zachowuje ustawienia i widok obrazu, a {{ui:Uruchom kolejkę}} renderuje czekające obrazy, jeden po drugim, na tym komputerze. Zamknięcie strony zachowuje kolejkę; otwórz ten sam model, aby kontynuować. {{ui:Zapisz}} pobiera gotowy obraz; {{ui:Usuń}} i {{ui:Wyczyść zakończone}} porządkują listę. Kolejka renderuje w wysokiej jakości, więc wymaga WebGPU.

## Ile to trwa

Obraz powstaje na Twoim komputerze, na jego karcie graficznej; nic nie jest wysyłane. Czas rośnie wraz z przebiegami i pikselami: {{ui:Najlepsza}} ma 16 razy więcej przebiegów niż {{ui:Szkic}}, a obraz 4K ma około czterech razy więcej pikseli niż Full HD. Duże modele potrzebują więcej czasu na przebieg.
