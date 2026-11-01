---
title: Co nowego w wersji 0.7
summary: BimCraft dodaje ściany przez kilka poziomów i Kopiuj ten poziom, ściany z plików PDF i skanów, własne przegrody ścian, bogatsze rodziny, wyposażenie MEP z przyłączami, zestawy kolizji, otwory i spoole rur, dokumenty zasobów, COBie i odczyty czujników, niebo, słońce, światło dzienne na siatce oraz obciążenia grzewcze i chłodnicze, rejestrację skanów, widok na żywo i śledzenie promieni na karcie graficznej, STEP i USD, warianty elementów bibliotecznych oraz więcej dla asystentów AI.
keywords: co nowego, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, ściany przez poziomy, kopiuj ten poziom, pdf, skan, śledzenie promieni, ściany z rzutów, przegrody ścian, warstwy, rdzeń, membrana, wymiary odniesienia, biblioteka materiałów, jednostki wyświetlania, styl widoku, konstrukcja, belki stropowe, rodziny, parametry, symbol w rzucie, punkty aktywne, powtórzenie, poziom szczegółowości, zagnieżdżone rodziny, rozmiary CSV, na element, wyposażenie, przyłącza, połączenia, odstępy, otwory, spoole, arkusze spooli, spoina montażowa, lista cięcia przewodów, dokumenty, cobie, czujniki, mqtt, strumień danych na żywo, pionowa składowa nieba, zysk słoneczny, siatka światła dziennego, ogrzewanie, chłodzenie, obciążenia, współczynnik U, rejestracja skanów, icp, e57, widok na żywo, śledzenie promieni, webgpu, odszumianie, fizyczne niebo, mieszanie światła, kolejka renderowania, twój komputer, step, usd, pakiet projektu, rozwijanie bryły, warianty, asystenci, API dodatków, plant, elektryka, sprawdzenia projektowe
from: 5c27b80a
---

To zmieniło się w BimCraft 0.7 w porównaniu z 0.6. Lista jest pogrupowana według obszarów, najważniejsze na początku.

## Nowe

### Rysowanie budynku

- **Ściany przez kilka poziomów.** Lista wysokości narzędzia Ściana oferuje **Do** dowolnego wyższego poziomu, tak jak Właściwości dla wybranej ściany. Rzuty poziomów pośrednich pokazują ścianę jaśniej, pomieszczenia tam przylegają do niej, a drzwi i okna można w niej umieszczać z tych rzutów. **Przechodzi przez** we Właściwościach podaje poziomy, przez które przechodzi. Zobacz [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopiuj ten poziom.** {{ui:Kopiuj ten poziom…}} w panelu Poziomy ponownie rysuje ściany poziomu wraz z ich drzwiami i oknami, stropami i sufitami na innym poziomie lub na nowym, położonym wyżej, w jednym kroku cofnięcia. Pomieszczenia pojawiają się same. Zobacz [Rysowanie ścian](topic:draw-walls#levels).
- **Ściany z pliku PDF lub skanu.** {{ui:Kompilacja}} › {{ui:Z rysunku…}} przyjmuje teraz plik PDF (rysunek liniowy lub skan w nim zawarty) albo skan planu (PNG, JPEG, TIFF, wiele stron). Każda strona staje się ścianami, drzwiami, oknami i pomieszczeniami poziomu, a strona pozostaje zachowana pod planem. Śledzenie nie korzysta z sieci ani wytrenowanego modelu, a wynik jest taki, jaki dały linie. Sprawdź każdy poziom względem jego strony. Zobacz [Ściany z zestawu planów](topic:walls-from-plans).
- **Własne przegrody ścian.** {{ui:Przegrody ścian…}} buduje typ ściany warstwa po warstwie, z rdzeniem, szczelinami powietrznymi i membranami, oraz podgląd z wymiarami. {{ui:Biblioteka materiałów…}} przechowuje materiały projektu w IFC. {{ui:Adnotuj}} › {{ui:Wymiar odniesienia}} mierzy do powierzchni i linii rdzenia i podąża za ścianami, gdy się zmieniają. Od współtwórcy ze społeczności, Doc (drsurfbum). Zobacz [Przegrody ścian i wymiary odniesienia](topic:wall-assemblies).
- **Jednostki wyświetlania i sterowanie widokiem.** {{ui:Jednostki}} na pasku narzędzi pokazuje długości w stopach i calach, calach, dziesiętnych stopach, milimetrach, centymetrach lub metrach, w wymiarach, zestawieniach, współrzędnych, pomiarach i przekrojach. {{ui:Plan}}, {{ui:Podział}} i {{ui:3D}} znajdują się na pasku narzędzi; podział można przeciągać (lub przesuwać z klawiatury). {{ui:Cieniowany}}, {{ui:Krawędzie}} i {{ui:Model szkieletowy}} znajdują się obok kostki widoku, a spadek dachu, obróbka krawędzi (fascia) i podbitka (soffit) zmieniają od razu wybrany dach. Od współtwórcy ze społeczności, Joel (yisraelk). Zobacz [Rysowanie ścian](topic:draw-walls#levels).
- **Belki stropowe według rozpiętości.** {{ui:Konstrukcja}} może rozmieścić inżynierskie belki stropowe (wstępnie), a także drewno tarcicowe, wybierając najmniejszą podaną serię i wysokość, która pokrywa rozpiętość, 16" lub 24" osiowo, w każdym kierunku. Trafiają do IFC i do listy cięcia. To propozycja z opublikowanej tabeli producenta, a nie obliczenie inżynierskie. Również od Joela. Zobacz [Konstrukcja ścian, stropów i dachów](topic:framing).
- **Więcej urządzeń elektrycznych.** {{ui:Elektryka}} dodaje gniazda danych, telefonu i audio-wideo, przełącznik wyboru, wyłącznik czasowy, termostat, czujki dymu i ciepła, ręczny ostrzegacz pożarowy i syrenę, wentylator, licznik energii oraz rozdzielnicę podrzędną, każde z własną klasą IFC. Zobacz [Plan instalacji elektrycznej](topic:electrical-plan).

### Rodziny

- **Rodziny robią więcej.** Parametry mogą być liczbami całkowitymi, tekstem, materiałem, piórem lub wypełnieniem. Rodzina może rysować własny symbol w rzucie, powtarzać bryłę, oznaczać części dla grubszych poziomów szczegółowości, zawierać inne rodziny (nogę w stole) i mieć punkty aktywne, które przeciągasz, również na umieszczonym elemencie w rzucie. Rozmiary pochodzą z tabeli CSV, a parametry oznaczone **Na element** pozwalają dwóm drzwiom o jednym rozmiarze różnić się. Zobacz [Edycja rodziny](topic:family-editor#plan-symbol) i [Rodziny i ich rozmiary](topic:families#sizes-from-a-table).

### Rury, przewody i wyposażenie

- **Wyposażenie z przyłączami.** {{ui:Kompilacja}} › {{ui:Wyposażenie}} umieszcza ogólną centralę wentylacyjną, wentylator liniowy, pompę, kocioł, podgrzewacz wody, jednostkę końcową, dyfuzor, kratkę lub zbiornik, o rozmiarach wpisanych przez Ciebie, z przyłączami rur i przewodów jako przyłączami. Każde zapisuje się jako jego klasa IFC z przyłączami IFC. Zobacz [Wyposażenie MEP z przyłączami](topic:mep-equipment).
- **Połączone odcinki.** Rura lub przewód rozpoczęty na przyłączu przejmuje jego rozmiar i system i pozostaje do niego przypięty: przesuń pompę, a jej rura podąży za nią. {{ui:Sprawdź połączenia}} wylicza otwarte przyłącza, luźne końce, niezgodności rozmiaru i systemu oraz odcinki, których nic nie zasila. Zobacz [Podłączanie rur i przewodów do wyposażenia](topic:mep-connections).
- **Rury i przewody względem konstrukcji.** {{ui:Sprawdzanie kolizji}} ma gotowe zestawy, a {{ui:Rury i przewody × konstrukcja}} działa jednym kliknięciem. {{ui:Sprawdź odstępy}} uwzględnia izolację każdego odcinka oraz odstęp, który wpiszesz. {{ui:Potrzebne otwory}} wylicza miejsca, w których odcinki przechodzą przez ściany i stropy, jako problemy w formacie CSV i BCF. Nic nie jest przecinane. Zobacz [Sprawdzanie rur i przewodów względem konstrukcji](topic:mep-against-structure).
- **Spoole rur stalowych.** Odcinek stalowy jest cięty na ponumerowane spoole o największej długości oraz w miejscach {{ui:Spoina montażowa}}, które umieszczasz. {{ui:Arkusze spooli (PDF)}} daje stronę na spool z jego widokiem izometrycznym, długościami cięcia, kształtkami, spoinami i zestawieniem materiałów, a {{ui:Lista cięcia przewodów}} wylicza proste odcinki przewodów. Zobacz [Spoole rur stalowych i arkusze spooli](topic:pipe-spools).

To narzędzia rysunkowe i koordynacyjne, dobrane przez inżyniera: bez przepływów, ciśnień i równoważenia.

### Eksploatacja budynku

- **Dokumenty dla każdego zasobu.** Karta {{ui:Zasoby}} łączy instrukcje, gwarancje, zdjęcia i rysunki z zasobem za pomocą nazwy pliku obok IFC lub adresu internetowego. Do IFC trafia tylko łącze. Zobacz [Dokumenty](topic:assets-and-maintenance#documents).
- **Arkusz COBie.** {{ui:Zapisz jako COBie (.xlsx)}} zapisuje skoroszyt przekazania COBie 2.4. Po wczytaniu skoroszytu COBie lista pokazuje każdą zmianę przed jednym {{ui:Zastosuj}}. Nie przeszedł jeszcze walidatora COBie. Zobacz [Arkusz COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Odczyty czujników i strumienie na żywo.** Otwórz plik CSV z odczytami albo {{ui:Połącz}} bezpośrednio z przeglądarki z własnym brokerem MQTT lub adresem, na który odpowiada system budynku. Każdy zasób pokazuje najnowszy odczyt i wykres, jest pokolorowany na modelu i oznaczany, gdy wykracza poza granice zapisane w IFC. Odczyty pozostają w karcie, a hasła nigdy nie są zapisywane. Zobacz [Odczyty czujników](topic:assets-and-maintenance#sensor-readings) i [Odczyty na żywo](topic:assets-and-maintenance#live-readings).

### Światło dzienne i energia

- **Niebo i słońce przy każdym oknie.** Karta {{ui:Światło dzienne}} podaje każdemu oknu jego pionową składową nieba i kąt zasłonięcia, śledzi słońce przez wybrany dzień za pomocą {{ui:Słońce w oknach danego dnia}} i wylicza {{ui:Współczynnik światła dziennego na siatce}} w każdym pomieszczeniu, rysowany na jego rzucie. Zobacz [Pionowa składowa nieba każdego okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Obciążenia grzewcze i chłodnicze.** {{ui:Obciążenia grzewcze i chłodnicze}} wylicza stratę ciepła każdego pomieszczenia, jego ogrzewanie w ciągu roku ze stopniodni oraz szczyt chłodzenia, na podstawie tego, co je ogranicza w modelu, i współczynnika U każdego elementu. Wpisany tam współczynnik U zostaje zapisany w IFC. Zobacz [Szacowanie obciążeń grzewczych i chłodniczych](topic:heating-and-cooling-loads).

Oba są narzędziami projektowymi według opublikowanych metod, a nie obliczeniami zgodności, i każdy panel to mówi.

### Skany

- **Rejestracja kilku skanów.** {{ui:Rejestruj skany…}} (w panelu startowym lub w {{ui:Pokaż}}) umieszcza skany w jednej ramie na podstawie wybranych par punktów lub wpisanych celów, dopracowuje je metodą ICP: najpierw punkt–punkt, potem punkt–płaszczyzna, zapisuje rejestrację jako mały plik projektu i zapisuje zarejestrowaną chmurę jako jeden plik LAS lub E57. Zobacz [Rejestracja kilku skanów w jeden](topic:register-scans).

### Obrazy i widok na żywo

- **Widok na żywo.** {{ui:Widok na żywo}} na pasku narzędzi pokazuje model w wyglądzie w czasie rzeczywistym obok widoku 3D, śledząc go i każdą zmianę, z Spacerem, porą dnia i miesiącem. {{ui:Widok na żywo w nowym oknie}} umieszcza go na drugim ekranie. Zobacz [Widok na żywo](topic:live-view).
- **Śledzenie promieni na karcie graficznej.** Z WebGPU {{ui:Renderuj}} › {{ui:Wysoka jakość (śledzenie promieni)}} uruchamia własny moduł śledzenia promieni CadCraft na karcie graficznej, może się zatrzymać i {{ui:Wznów}}, a na końcu jest odszumiany. Bez WebGPU używa modułu WebGL jak dotąd. Zobacz [Wysoka jakość](topic:render#high-quality).
- **Więcej w oknie Renderowanie** (na karcie graficznej, więc wymaga WebGPU): fizyczne niebo i obrazy nieba, profile świetlne IES, kamera z przysłoną (f-stop), głębia ostrości, perspektywa dwupunktowa, balans bieli i panoramy 360°, korekcja kolorów gotowego obrazu, mieszanie światła i elementy renderu po renderowaniu, mgła, dym i kaustyki, zapis jako PNG 16-bitowy, EXR lub plik renderu oraz kolejka renderowania. Zobacz [Niebo i profile świetlne na karcie graficznej](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Kolejka renderowania](topic:render#the-render-queue).
- **Twój komputer.** {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Renderowanie}} › {{ui:Twój komputer}} pokazuje grafikę, rdzenie procesora i pamięć, z których ta przeglądarka pozwala korzystać aplikacji, oraz poziom, od którego zaczyna się renderowanie. Zobacz [Czym renderuje Twój komputer](topic:your-machine).

### Pliki i inne aplikacje

- **Otwieranie plików STEP.** Część `.step` lub `.stp`, element wyposażenia lub model dostawcy (AP203, AP214, AP242) otwiera się jako mały model IFC, a każda bryła jest elementem, który możesz sprawdzić, przekroić, zmierzyć i zapisać jako IFC. Kolory i nazwy części zestawu nie są jeszcze odczytywane. Zobacz [Pliki, które BimCraft otwiera i zapisuje](topic:files#what-it-opens).
- **Eksport USD.** {{ui:USD}} na pasku narzędzi zapisuje otwarte modele jako `.usda`, `.usdc` lub `.usdz`, ułożone według terenu, budynku, kondygnacji i branży, z klasą IFC, GlobalId i właściwościami każdego elementu. Zobacz [Eksport modelu do USD](topic:usd).
- **Bryła z CivilCraft.** Bryła budynku wysłana z widoku terenu CivilCraft pokazuje swoje wyniki badania we Właściwościach, a {{ui:Rozwiń tę bryłę}} buduje z niej ściany na każdym poziomie i strop w jednym kroku cofnięcia. Zobacz [Rozwijanie bryły budynku z badania terenu](topic:develop-a-mass).
- **Elementy biblioteczne z wariantami.** Element występujący w kilku wariantach ma wybór {{ui:Wariant}} na karcie {{ui:Biblioteka}}. Umieszczony element zachowuje swój wariant w IFC, {{ui:Zamień element…}} wylicza pozostałe warianty, a kopie i aktualizacje go zachowują. Zobacz [Umieszczanie i zamiana elementu bibliotecznego z wariantami](topic:library-variants).
- **Pakiety projektu w folderze.** {{ui:Otwórz folder}} wylicza pliki `.ccbundle.zip` w sekcji {{ui:Pakiety projektu}}, a każdy układ w pakiecie ma **Otwórz w …**: PDF do MarkupCraft, DWG do CadCraft, w nowej karcie. Zobacz [Otwieranie układu](topic:open-project-bundle#open-a-layout).

### Asystenci i dodatki

- **Więcej dla asystentów AI.** Asystent może teraz zmieniać nazwy elementów i ustawiać wartości właściwości, przesuwać i usuwać elementy, zmieniać ściany, drzwi i okna, eksportować USD oraz renderować obraz lub uruchamiać kolejkę renderowania. Każda zmiana to jeden krok cofnięcia. Zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
- **Dodatki mogą budować w modelu.** API dodatków 1.1 pozwala dodatkowi wprowadzić zmianę w modelu jako jeden krok cofnięcia (przechodzi przez Live TeamWork), odczytać model oraz odczytać przebiegi rur i przewodów, przyłącza, wyposażenie i spoole.
- **Dodatek Plant** (wyłączony, dopóki nie włączysz go w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Dodatki}}): specyfikacje rur sprawdzane względem przebiegów, rysunki izometryczne przebiegu w SVG i DXF z zestawieniem materiałów, ogólne wyposażenie procesowe z króćcami umieszczone w modelu, router między dwoma przyłączami oraz sprawdzenie układu zakładu. Pomoc rysunkowa, a nie zatwierdzenie inżynierskie; jego teksty są tylko po angielsku.

## Zmiany

- **Pierwszy dom na laptopie.** Na ekranie o wielkości laptopa BimCraft startuje tylko z rzutem, pasek Rysuj to wąski panel z dopasowanym obok rzutem, rzut i widok 3D wracają na ekran, gdy rysunek z nich wychodzi, widok 3D obejmuje cały dom w wąskiej ramce, a drzwi i okna są wybierane przed liniami wymiarowymi.
- **Zapisywanie obrazu.** **Zapisz PNG** w oknie Renderowanie to teraz {{ui:Zapisz}}, obok którego jest {{ui:Zapisz jako}} dla pozostałych formatów. Zobacz [Zapisywanie obrazu](topic:render#save-the-picture).
- **Karta Analiza** ma blok {{ui:Sprawdzenia projektowe}}: tworzy kombinacje obciążeń wg ASCE 7 lub EN 1990 dla Twoich przypadków i sprawdza każdy walcowany kształt I (W, S, IPE, HEA lub HEB, wg nazwy profilu i rozmiaru) według AISC 360 lub EN 1993-1-1, pokazując, jaką część nośności wykorzystuje. Pomoc, dopóki inżynier jej nie przejrzy; kształty spawane i inne przekroje dostają „nie sprawdzono”. Zobacz [Sprawdzenia projektowe](topic:frame-analysis#design-checks).

## Naprawy

- Ponowienie po kroku, który utworzył nowy rozmiar rodziny, kończyło się błędem („brak rozmiaru”). Każdy krok tworzy teraz przy ponowieniu te same GlobalId IFC, więc ponowienie działa dla rodzin i każdej innej zmiany.
- Gdy dwie osoby zapisały tę samą rodzinę (w sesji Live TeamWork lub w dwóch oknach), drugi zapis po cichu zastępował zmianę pierwszej. Teraz odmawia zapisu i mówi, jak zobaczyć zmianę drugiej osoby i wprowadzić swoją ponownie.
- Model w amerykańskich stopach geodezyjnych był odczytywany jako 0,3048 m na stopę zamiast 0,3048006096 m, co przesuwało każdy georeferencjonowany IFC w amerykańskich stopach na mapie.
- Edytor rodzin: jego zamknięcie nie przenosi już fokusu klawiatury na stronę, przycisk Zapisz pozostaje widoczny na telefonie, a pola nie powodują już powiększenia widoku przez telefon.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami zgodnymi z definicjami jednostek (amerykańska stopa geodezyjna to osobna jednostka). Wyłączone jednostki znikają z list, a oznaczona gwiazdką staje się domyślna dla nowej pracy. Plik zawsze zachowuje własną jednostkę. W BimCraft lista {{ui:Jednostki}} na pasku narzędzi podąża za przełącznikami, gwiazdka ustawia jednostki wyświetlania, dopóki nie wybierzesz ich na pasku narzędzi (wcześniejszy wybór zostaje zachowany), a pola długości narzędzi rysunkowych przyjmują oznaczenie każdej jednostki, na przykład `3.5 m` lub `10 US ft`. Zobacz [Jednostki, wpisane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odłączyć panel, upuść go na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij go, aby chował się do krawędzi, lub ukryj go i przywołaj z krawędzi. Zobacz [Ułożenie paneli](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe można przesuwać.** Przeciągnij okno za pasek tytułu poza rysunek; wraca tam, gdzie je zostawiłeś. Podwójne kliknięcie paska tytułu centruje je ponownie. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć gotowych próśb dla Twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj pytania o model, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje, sprawdzona przez nasze testy. Same aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz wszystkie słowa aplikacji, jako wersje robocze jeszcze nieprzejrzane przez native speakera. Tematy pomocy są po angielsku, kilka po hiszpańsku.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zła sygnatura), zamiast samego „Gotowe”, i przestaje przywracać kartę Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisany certyfikatem kodu.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, ponieważ walidacja certyfikatu jeszcze nie przyszła. Sprawdź sumę SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu, za pierwszym razem, kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwarty}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami, a wersja na iPad i iPhone'a jeszcze nie istnieje.
- Listy kąta i nachylenia w {{ui:Jednostkach}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Śledzenie promieni na karcie graficznej, dodatki w oknie Renderowanie i kolejka renderowania wymagają WebGPU (bez niego wysoka jakość używa modułu WebGL); widok na żywo korzysta z WebGPU, jeśli przeglądarka je ma, w przeciwnym razie z WebGL 2. Testowano je tutaj tylko na programowym zastępniku karty graficznej, jeszcze nie na prawdziwych kartach graficznych. Widok na żywo w BimCraft nie ma rozpraszania ani udostępniania (ma je ModelCraft).
- Renderowanie nagranego spaceru jako wideo nie jest wbudowane w BimCraft.
- Sprawdzenia projektowe: kształt I, którego nazwa profilu IFC nie jest rozmiarem W, S, IPE, HEA ani HEB (albo którego rozmiar się od niego różni), jest traktowany jako spawany i dostaje „nie sprawdzono”, podobnie jak rury, kątowniki, ceowniki, smukłe części i skręcanie. Żaden inżynier jeszcze nie przejrzał sprawdzeń.
- Narysowanych elementów nie można kopiować pojedynczo, obracać, odbijać ani układać w macierz (cały poziom można skopiować), a nie ma dzielenia ściany, narzędzia Tekst ani ściany osłonowej. Ściana, która na wyższym poziomie spotyka się ze ścianą z niższego poziomu, nie jest cięta w bryle 3D tamtej ściany, a zestawienia wymieniają otwór z wyższego poziomu pod poziomem własnej ściany.
- Rodziny: biblioteka rodzin współdzielona między projektami nie jest zbudowana. Rodziny i skopiowane poziomy nie były jeszcze otwierane w innych programach BIM.
- MEP: wyposażenie jest ogólne (bez danych producentów); trójniki i redukcje na spoolach stalowych są ogólne, a nie z tabeli ASME B16.9; przyłącza elementów bibliotecznych umieszczonych z karty {{ui:Biblioteka}} nie są zapisywane w IFC; nic nie zostało przejrzane przez inżyniera.
- Dodatek Plant nie potrafi jeszcze rysować przebiegu z trasowaniem w modelu, numerować spoolów na swoich izometriach ani sprawdzać układu wyposażenia umieszczonego z biblioteki.
- Zakłady z biblioteki zakładów CivilCraft nie mogą być jeszcze umieszczane z karty {{ui:Biblioteka}} w BimCraft.
- Energia: brak symulacji godzinowej, brak metody ISO 52016-1 i brak plików klimatycznych. Zasoby: brak hostowanego bliźniaka, który zachowuje odczyty lub wysyła alerty, gdy BimCraft jest zamknięty.
- Rejestracja skanów była testowana na skanach testowych, jeszcze nie na prawdziwym zestawie skanów z prawdziwego skanera; pliki E57 wciąż otwierają się do 6 milionów punktów i 512 MB.
- Projekty pakietowe otwierają się tylko w BimCraft (pozostałe aplikacje biorą układ przez **Otwórz w …**), a pakiety i zestaw dwóch programów były testowane na zastępnikach, jeszcze nie z samym Archicad czy Revit.

Wszystko inne znajduje się w [Czego jeszcze nie zbudowano](topic:not-built-yet).
