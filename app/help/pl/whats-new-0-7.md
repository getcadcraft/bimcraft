---
title: Co nowego w wersji 0.7 (wcześniejsza)
summary: BimCraft dodaje ściany przez kilka kondygnacji i Kopiuj ten poziom, ściany z PDF i skanów, własne przegrody ścian, bogatsze rodziny, wyposażenie MEP z portami, zestawy kolizji, otwory i spoole rur, dokumenty zasobów, COBie i odczyty czujników, niebo, słońce, światło dzienne na siatce i obciążenia grzewcze i chłodnicze, rejestrację skanów, widok na żywo i śledzenie promieni na karcie graficznej, STEP i USD, warianty bibliotek oraz więcej dla asystentów AI.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, ściany przez kondygnacje, kopiuj tę kondygnację, pdf, skan, obrys, ściany z rzutów, przegrody ścian, warstwy, rdzeń, membrana, wymiary odniesienia, biblioteka materiałów, jednostki wyświetlania, styl widoku, konstrukcja, belki stropowe, rodziny, parametry, symbol planu, punkty aktywne, powtórzenie, poziom szczegółowości, zagnieżdżone rodziny, rozmiary CSV, na element, wyposażenie, porty, połączenia, odstępy, otwory, spoole, arkusze spooli, spoina montażowa, lista cięcia przewodów, dokumenty, cobie, czujniki, mqtt, transmisja na żywo, pionowa składowa nieba, zysk słoneczny, siatka światła dziennego, ogrzewanie, chłodzenie, obciążenia, współczynnik u, rejestracja skanów, icp, e57, widok na żywo, śledzenie promieni, webgpu, odszumianie, niebo fizyczne, mieszanie świateł, kolejka renderowania, twój komputer, step, usd, pakiet projektu, zbuduj masę, warianty, asystenci, api dodatków, instalacja, elektryka, sprawdzenia projektowe
from: ef226539
---

To jest to, co zmieniło się w BimCraft 0.7 w porównaniu z 0.6. Lista jest pogrupowana według obszarów, najważniejsze na początku.

## Nowe

### Rysowanie budynku

- **Ściany przez kilka kondygnacji.** Lista wysokości narzędzia Ściana oferuje **Do** dowolnej wyższej kondygnacji, tak jak robią to Właściwości dla wybranej ściany. Rzuty kondygnacji pośrednich pokazują ścianę jaśniej, pomieszczenia przylegają do niej, a drzwi i okna można w niej umieszczać z tych rzutów; **Przechodzi przez** we Właściwościach nazywa kondygnacje, przez które przebiega. Zobacz [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopiuj ten poziom.** {{ui:Kopiuj ten poziom…}} w panelu {{ui:Kondygnacje}} rysuje ponownie ściany kondygnacji wraz z jej drzwiami i oknami, stropy i sufity na innej kondygnacji albo na nowej, położonej wyżej, w jednym kroku cofnięcia; pomieszczenia pojawiają się same. Zobacz [Rysowanie ścian](topic:draw-walls#levels).
- **Ściany z PDF lub skanu.** {{ui:Kompilacja}} › {{ui:Z rysunku…}} przyjmuje teraz PDF (rysunek liniowy albo skan w nim) lub zeskanowany plan (PNG, JPEG, TIFF, wiele stron): każda strona staje się ścianami, drzwiami, oknami i pomieszczeniami kondygnacji, ze stroną zachowaną pod jej planem. Obrys nie używa sieci ani wytrenowanego modelu, a wynik to to, co dały linie: sprawdź każdą kondygnację względem jej strony. Zobacz [Ściany z zestawu rzutów](topic:walls-from-plans).
- **Własne przegrody ścian.** {{ui:Przegrody ścian…}} buduje typ ściany warstwa po warstwie, z rdzeniem, szczelinami powietrznymi i membranami, oraz podgląd z wymiarami; {{ui:Biblioteka materiałów…}} trzyma materiały projektu w IFC; {{ui:Adnotuj}} › {{ui:Wymiar odniesienia}} mierzy do lic i linii rdzenia i podąża za ścianami, gdy się zmieniają. Od współtwórcy społeczności, Doc (drsurfbum). Zobacz [Przegrody ścian i wymiary odniesienia](topic:wall-assemblies).
- **Jednostki wyświetlania i kontrolki widoku.** {{ui:Jednostki}} na pasku narzędzi pokazuje długości w stopach i calach, calach, dziesiętnych stopach, milimetrach, centymetrach lub metrach, w wymiarach, zestawieniach, współrzędnych, pomiarach i przekrojach. {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}} są na pasku narzędzi, podział można przeciągać (albo przesuwać z klawiatury), {{ui:Cieniowany}}, {{ui:Krawędzie}} i {{ui:Model szkieletowy}} są obok kostki widoku, a kąt nachylenia dachu, obrzeże i podbitka zmieniają wybrany dach od razu. Od współtwórcy społeczności, Joel (yisraelk). Zobacz [Rysowanie ścian](topic:draw-walls#levels).
- **Belki stropowe według rozpiętości.** {{ui:Konstrukcja}} może rozmieścić belki inżynierskie (wstępne), a także drewno tartaczne, wybierając najmniejszą wymienioną serię i wysokość, która pokrywa rozpiętość, 16" lub 24" osiowo, w dowolnym kierunku; trafiają do IFC i do listy cięcia. Propozycja z opublikowanej tabeli producenta, a nie obliczenie inżynierskie. Też od Joela. Zobacz [Konstrukcja ścian, stropów i dachów](topic:framing).
- **Więcej urządzeń elektrycznych.** {{ui:Elektryka}} dodaje gniazda danych, telefonu i audio-wideo, przełącznik selektorowy, zegar, termostat, czujki dymu i ciepła, przycisk alarmowy i syrenę, wentylator, licznik energii i podrozdzielnię, każde jako własną klasę IFC. Zobacz [Plan elektryczny](topic:electrical-plan).

### Rodziny

- **Rodziny robią więcej.** Parametry mogą być liczbami całkowitymi, tekstem, materiałem, piórem lub wypełnieniem; rodzina może narysować własny symbol planu, powtórzyć bryłę, oznaczyć części dla grubszych poziomów szczegółowości, zawierać inne rodziny (nogę w stole) i mieć punkty aktywne, które przeciągasz, także na umieszczonym elemencie w rzucie. Rozmiary pochodzą z tabeli CSV, a parametry oznaczone **Na element** pozwalają dwóm drzwiom jednego rozmiaru różnić się. Zobacz [Edycja rodziny](topic:family-editor#plan-symbol) i [Rodziny i ich rozmiary](topic:families#sizes-from-a-table).

### Rury, kanały i wyposażenie

- **Wyposażenie z portami.** {{ui:Kompilacja}} › {{ui:Wyposażenie}} umieszcza ogólną centralę wentylacyjną, wentylator liniowy, pompę, kocioł, podgrzewacz wody, jednostkę końcową, dyfuzor, kratkę lub zbiornik, o rozmiarach wpisanych przez ciebie, z przyłączami rur i kanałów jako portami. Każde zapisuje się jako własna klasa IFC z portami IFC. Zobacz [Wyposażenie MEP z portami](topic:mep-equipment).
- **Połączone trasy.** Rura lub kanał zaczęty od portu przejmuje jego rozmiar i system i pozostaje do niego przypięty: przesuń pompę, a jej rura podąży. {{ui:Sprawdź połączenia}} wypisuje otwarte porty, luźne końce, niezgodności rozmiaru i systemu oraz trasy, których nic nie zasila. Zobacz [Połącz rury i kanały z wyposażeniem](topic:mep-connections).
- **Rury i kanały względem konstrukcji.** {{ui:Sprawdzanie kolizji}} ma gotowe zestawy, a {{ui:Rury i przewody × konstrukcja}} działa jednym kliknięciem; {{ui:Sprawdź odstępy}} używa izolacji każdej trasy plus odstępu, który wpisujesz; {{ui:Potrzebne otwory}} wypisuje miejsca, w których trasy przechodzą przez ściany i stropy, jako CSV i problemy BCF. Nic nie zostaje wycięte. Zobacz [Sprawdzanie rur i kanałów względem konstrukcji](topic:mep-against-structure).
- **Spoole rur stalowych.** Trasa stalowa jest cięta na ponumerowane spoole o najdłuższej długości i w miejscach {{ui:Spoina montażowa}}, które umieszczasz; {{ui:Arkusze spooli (PDF)}} daje stronę na spool z jego widokiem izometrycznym, długościami cięcia, kształtkami, spoinami i zestawieniem materiałów, a {{ui:Lista cięcia przewodów}} wypisuje proste odcinki kanałów. Zobacz [Spoole rur stalowych i arkusze spooli](topic:pipe-spools).

To są pomoce kreślarskie i koordynacyjne, dobrane przez inżyniera: bez przepływów, ciśnień i równoważenia.

### Eksploatacja budynku

- **Dokumenty dla zasobu.** Zakładka {{ui:Zasoby}} łączy instrukcje, gwarancje, zdjęcia i rysunki z zasobem po nazwie pliku obok IFC albo adresie internetowym; do IFC trafia tylko odnośnik. Zobacz [Dokumenty](topic:assets-and-maintenance#documents).
- **Arkusz COBie.** {{ui:Zapisz jako COBie (.xlsx)}} zapisuje skoroszyt przekazania COBie 2.4, a skoroszyt COBie odczytany z powrotem wypisuje każdą zmianę przed jednym {{ui:Zastosuj}}. Nie przeszedł jeszcze przez walidator COBie. Zobacz [Arkusz COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Odczyty czujników i transmisje na żywo.** Otwórz CSV z odczytami albo {{ui:Połącz}} bezpośrednio z przeglądarki z własnym brokerem MQTT lub adresem, pod którym odpowiada system budynku: każdy zasób pokazuje najnowszy odczyt i wykres, jest kolorowany na modelu i oznaczany, gdy wykracza poza limity zapisane w IFC. Odczyty zostają w zakładce; hasła nigdy nie są zapisywane. Zobacz [Odczyty czujników](topic:assets-and-maintenance#sensor-readings) i [Odczyty na żywo](topic:assets-and-maintenance#live-readings).

### Światło dzienne i energia

- **Niebo i słońce przy każdym oknie.** Zakładka {{ui:Światło dzienne}} podaje każdemu oknu pionową składową nieba i kąt przesłonięcia, śledzi słońce przez dany dzień za pomocą {{ui:Słońce w oknach danego dnia}} i wylicza {{ui:Współczynnik światła dziennego na siatce}} w każdym pomieszczeniu, rysowany na jego planie. Zobacz [Pionowa składowa nieba każdego okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Obciążenia grzewcze i chłodnicze.** {{ui:Obciążenia grzewcze i chłodnicze}} wylicza stratę ciepła każdego pomieszczenia, jego ogrzewanie w ciągu roku z liczby stopniodni i szczyt chłodzenia, z tego, co je ogranicza w modelu i z współczynnika U każdego elementu; wpisany tam współczynnik U zapisuje się w IFC. Zobacz [Szacowanie obciążeń grzewczych i chłodniczych](topic:heating-and-cooling-loads).

Oba to pomoce projektowe według opublikowanych metod, a nie obliczenia zgodności, i każdy panel to mówi.

### Skany

- **Rejestracja kilku skanów.** {{ui:Rejestruj skany…}} (w panelu startowym albo w {{ui:Pokaż}}) umieszcza skany w jednej ramce według wybranych par punktów lub wpisanych punktów docelowych, dopasowuje je algorytmem ICP najpierw punkt-do-punktu, potem punkt-do-płaszczyzny, zapisuje rejestrację jako mały plik projektu i zapisuje zarejestrowaną chmurę jako jeden plik LAS lub E57. Zobacz [Rejestracja kilku skanów w jeden](topic:register-scans).

### Obrazy i widok na żywo

- **Widok na żywo.** {{ui:Widok na żywo}} na pasku narzędzi pokazuje model w wyglądzie czasu rzeczywistego obok widoku 3D, podążając za nim i za każdą zmianą, z trybem Spacer, porą dnia i miesiącem; {{ui:Widok na żywo w nowym oknie}} umieszcza go na drugim ekranie. Zobacz [Widok na żywo](topic:live-view).
- **Śledzenie promieni na karcie graficznej.** Przy WebGPU {{ui:Renderuj}} › {{ui:Wysoka jakość (śledzenie promieni)}} uruchamia własny tracer CadCraft na karcie graficznej, może się zatrzymać i {{ui:Wznów}}, a na końcu jest odszumiany; bez WebGPU używa śledzenia promieni WebGL, jak dotąd. Zobacz [Wysoka jakość](topic:render#high-quality).
- **Więcej w oknie Renderowania** (na karcie graficznej, więc wymaga WebGPU): fizyczne niebo i obrazy nieba, profile światła IES, kamera z liczbą f, głębią ostrości, perspektywą dwupunktową, balansem bieli i panoramami 360°, gradacja gotowego obrazu, mieszanie świateł i elementy renderu po renderowaniu, mgła, dym i kaustyka, zapis jako 16-bitowy PNG, EXR lub plik renderu oraz kolejka renderowania. Zobacz [Niebo i profile światła na karcie graficznej](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Kolejka renderowania](topic:render#the-render-queue).
- **Twój komputer.** {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Renderowanie}} › {{ui:Twój komputer}} pokazuje grafikę, rdzenie procesora i pamięć, z których ta przeglądarka pozwala korzystać aplikacji, oraz poziom, od którego zaczyna się renderowanie. Zobacz [Czym renderuje twój komputer](topic:your-machine).

### Pliki i inne aplikacje

- **Pliki STEP się otwierają.** Część `.step` lub `.stp`, element wyposażenia albo model dostawcy (AP203, AP214, AP242) otwiera się jako mały model IFC, a każda bryła jest elementem, który można sprawdzić, przekroić, zmierzyć i zapisać jako IFC. Kolory i nazwy części zestawu nie są jeszcze odczytywane. Zobacz [Pliki, które BimCraft otwiera i zapisuje](topic:files#what-it-opens).
- **Eksport USD.** {{ui:USD}} na pasku narzędzi zapisuje otwarte modele jako `.usda`, `.usdc` lub `.usdz`, ułożone wg terenu, budynku, kondygnacji i branży, z klasą IFC, GlobalId i właściwościami każdego elementu. Zobacz [Eksport modelu jako USD](topic:usd).
- **Masa z CivilCraft.** Masa budynku wysłana z widoku terenu CivilCraft pokazuje swoje wyniki badania we Właściwościach, a {{ui:Rozwiń tę bryłę}} buduje ściany na każdej kondygnacji i strop z niej w jednym kroku cofnięcia. Zobacz [Rozwiń masę budynku z badania terenu](topic:develop-a-mass).
- **Pozycje biblioteki z wariantami.** Pozycja występująca w kilku wariantach ma wybór {{ui:Wariant}} w zakładce {{ui:Biblioteka}}; umieszczony element zachowuje swój wariant w IFC, {{ui:Zamień element…}} wypisuje pozostałe warianty, a kopie i aktualizacje go zachowują. Zobacz [Umieszczanie i zamiana pozycji biblioteki z wariantami](topic:library-variants).
- **Pakiety projektu w folderze.** {{ui:Otwórz folder}} wypisuje pliki `.ccbundle.zip` pod {{ui:Pakiety projektu}}, a każdy układ w pakiecie ma **Otwórz w …**: PDF do MarkupCraft, DWG do CadCraft, w nowej karcie. Zobacz [Otwieranie układu](topic:open-project-bundle#open-a-layout).

### Asystenci i dodatki

- **Więcej dla asystentów AI.** Asystent może teraz zmieniać nazwy elementów i ustawiać wartości właściwości, przesuwać i usuwać elementy, zmieniać ściany, drzwi i okna, eksportować USD oraz renderować obraz lub uruchamiać kolejkę renderowania; każda zmiana to jeden krok cofnięcia. Zobacz [Pozwól asystentowi AI pracować z twoim modelem](topic:assistants).
- **Dodatki mogą budować w modelu.** API dodatków 1.1 pozwala dodatkowi wykonać zmianę w modelu jako jeden krok cofnięcia (przenosi się w Live TeamWork), czytać model oraz czytać trasy rur i kanałów, porty, wyposażenie i spoole.
- **Dodatek Plant** (wyłączony, dopóki nie włączysz go w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Dodatki}}): specyfikacje rur sprawdzane względem tras, rysunki izometryczne trasy jako SVG i DXF z zestawieniem materiałów, ogólne wyposażenie procesowe z króćcami umieszczonymi w modelu, router między dwoma portami i kontrola układu fabryki. To pomoc kreślarska, a nie zatwierdzenie inżynierskie; jego teksty są tylko po angielsku.

## Zmienione

- **Pierwszy dom na laptopie.** Na ekranie wielkości laptopa BimCraft startuje tylko z planem, pasek Rysuj jest wąskim panelem z dopasowanym obok planem, plan i widok 3D wracają do widoku, gdy rysunek je opuszcza, widok 3D obejmuje cały dom w wąskim okienku, a drzwi i okna wybiera się przed liniami wymiarów.
- **Zapis obrazu.** **Zapisz PNG** w oknie Renderowania to teraz {{ui:Zapisz}}, obok z {{ui:Zapisz jako}} dla innych formatów. Zobacz [Zapisywanie obrazu](topic:render#save-the-picture).
- **Zakładka {{ui:Analiza}}** ma blok {{ui:Sprawdzenia projektowe}}: tworzy kombinacje obciążeń wg ASCE 7 lub EN 1990 dla twoich przypadków i sprawdza każdy walcowany kształt dwuteowy stali (rozmiar W, S, IPE, HEA lub HEB wg nazwy profilu i rozmiaru) wg AISC 360 lub EN 1993-1-1, pokazując, jaką część nośności zużywa. To pomoc, dopóki inżynier nie przejrzy wyniku; kształty spawane i inne przekroje dostają „nie sprawdzono”. Zobacz [Sprawdzenia projektowe](topic:frame-analysis#design-checks).

## Naprawione

- Ponowienie po kroku, który utworzył nowy rozmiar rodziny, kończyło się błędem („brak rozmiaru”). Każdy krok tworzy teraz przy ponowieniu te same identyfikatory IFC GlobalId, więc ponowienie działa dla rodzin i każdej innej zmiany.
- Gdy dwie osoby zapisały tę samą rodzinę (w sesji Live TeamWork albo w dwóch oknach), drugi zapis po cichu zastępował zmianę pierwszego. Teraz odmawia i mówi, jak zobaczyć ich zmianę i zrobić swoją ponownie.
- Model w stopach amerykańskich (US survey) był odczytywany jako 0.3048 m na stopę zamiast 0.3048006096 m, co przesuwało każdy IFC z georeferencją w stopach US na mapie.
- Edytor rodziny: zamknięcie go nie gubi już fokusu klawiatury na stronę, jego Zapisz zostaje w zasięgu na telefonie, a jego pola nie powodują już przybliżania telefonu.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami wynikającymi z definicji jednostek (stopa US survey ma własną jednostkę). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; oznacz gwiazdką jedną, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W BimCraft lista {{ui:Jednostki}} na pasku narzędzi podąża za przełącznikami, gwiazdka ustawia jednostki wyświetlania, dopóki nie wybierzesz ich na pasku narzędzi (wcześniejszy wybór zostaje), a pola długości narzędzi rysunkowych przyjmują oznaczenie dowolnej jednostki, np. `3.5 m` lub `10 US ft`. Zobacz [Jednostki, wpisane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które chowają się.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma wąski pasek tytułu: przeciągnij go, aby zadokować lub odłączyć panel, upuść na pasku innego panelu, aby dzielić ramkę jako karty, przypnij, aby chował się do krawędzi, albo ukryj i przywróć z krawędzi. Zobacz [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno za pasek tytułu poza rysunek; wraca tam, gdzie je zostawiłeś. Kliknij dwukrotnie pasek tytułu, aby wycentrować je ponownie. Zobacz [Przesuń okno dialogowe](common:arrange-panels#move-a-dialog).
- **Recepty dla asystentów AI.** Dziesięć gotowych próśb do twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj pytania o model, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje; każda jest odtwarzana przez nasze testy. Same aplikacje nie zawierają AI. Zobacz [Recepty dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz każde słowo aplikacji, jako wersje robocze, jeszcze nieprzejrzane przez native speakera. Tematy pomocy są po angielsku, kilka po hiszpańsku.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie udało (brak pliku dla twojego systemu, brak sieci, zły podpis), zamiast samego {{ui:Gotowe}}, i przestaje przywracać kartę Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane kodem.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie przyszła. Sprawdź SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, potem {{ui:Uruchom mimo to}}. Na Macu przy pierwszym uruchomieniu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji dla iPada ani iPhone'a.
- Kąty i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Śledzenie promieni na karcie graficznej, dodatki w oknie Renderowania i kolejka renderowania wymagają WebGPU (bez niego wysoka jakość używa śledzenia promieni WebGL); widok na żywo używa WebGPU tam, gdzie przeglądarka je ma, w przeciwnym razie WebGL 2. Testowano je tu tylko na programowej zastępczej karcie graficznej, jeszcze nie na prawdziwych kartach. Widok na żywo nie ma w BimCraft rozpraszania ani udostępniania (ModelCraft je ma).
- Nie zbudowano jeszcze renderowania nagranego spaceru jako wideo.
- Sprawdzenia projektowe: dwuteownik, którego nazwa profilu IFC nie jest rozmiarem W, S, IPE, HEA ani HEB (albo którego rozmiar się od niej różni), traktowany jest jako spawany i wraca jako „nie sprawdzono”, tak samo jak rury, kątowniki, ceowniki, smukłe elementy i skręcanie. Żaden inżynier jeszcze nie przejrzał sprawdzeń.
- Rysowanych elementów nie można kopiować pojedynczo, obracać, odbijać ani tworzyć z nich macierzy (kondygnację można kopiować w całości), a nie ma podziału ściany, narzędzia Tekst ani ściany kurtynowej. Ściana, która na wyższej kondygnacji styka się ze ścianą z niższej, nie jest przycinana do bryły 3D tamtej ściany, a zestawienia wypisują otwór na wyższej kondygnacji pod kondygnacją jego własnej ściany.
- Rodziny: biblioteka rodzin współdzielona między projektami nie jest zbudowana. Rodziny i skopiowane kondygnacje nie zostały jeszcze otwarte w innych programach BIM.
- MEP: wyposażenie jest ogólne (bez danych producentów); trójniki i redukcje na spoolach stalowych są ogólne, a nie z tabeli ASME B16.9; porty pozycji biblioteki umieszczanych z zakładki {{ui:Biblioteka}} nie są zapisywane do IFC; nic nie zostało przejrzane przez inżyniera.
- Dodatek Plant nie potrafi jeszcze rysować trasowanej rury w modelu, numerować spoolów na swoich izometriach ani sprawdzać układu wyposażenia umieszczonego z biblioteki.
- Instalacje z biblioteki instalacji CivilCraft nie mogą jeszcze być umieszczane z zakładki {{ui:Biblioteka}} BimCraft.
- Energia: brak symulacji godzinowej, brak metody ISO 52016-1 i brak plików klimatycznych. Zasoby: brak hostowanego bliźniaka, który przechowuje odczyty albo wysyła alarmy, gdy BimCraft jest zamknięty.
- Rejestracja skanów była testowana na skanach testowych, jeszcze nie na prawdziwym zestawie skanów skanera; pliki E57 wciąż otwierają się do 6 milionów punktów i 512 MB.
- Pakiety projektu otwierają się tylko w BimCraft (inne aplikacje biorą układ przez **Otwórz w …**), a pakiety i zestaw dwóch programów testowano na zastępcach, jeszcze nie z samym Archicad ani Revit.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet).
