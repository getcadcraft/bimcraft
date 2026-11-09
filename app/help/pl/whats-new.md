---
title: Co nowego w wersjach 0.8 i 0.8.1
summary: BimCraft dodaje ludzi przechodzących przez budynek, akustykę pomieszczeń, którą można usłyszeć, odtwarzanie powodzi, wiatru i trzęsienia ziemi, pięćdziesięcioletni widok cyklu życia, sprawdzenia względem IDS, znaczniki i zestawienia, Przesuń, Wyrównaj i Rozmieść, obrazy pod planem, ściany ze skanu, rysunki paneli, fotowoltaikę, systemy split i VRF, dobór rur i kabli, sprawdzenia betonu i sejsmiczne, dowolną projekcję mapy, wybór silnika renderowania oraz cofanie w Studio; 0.8.1 naprawia wyszarzone narzędzia układu wstążki.
keywords: co nowego, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, ewakuacja, ludzie, kolejki, akustyka, pogłos, odpowiedź impulsowa, powódź, wiatr, trzęsienie ziemi, zagrożenie, cykl życia, okres użytkowania, ids, znaczniki, zestawienia, przesuń, wyrównaj, rozmieść, obraz, tło, skan do ścian, działka z civilcraft, rysunki paneli, szkielet, słoneczne, pv, split, vrf, fancoil, dobór rur, korytko kablowe, natężenie oświetlenia, beton, sejsmika, porównaj skan, epsg, projekcja, dokumenty, szablon, węgiel, koszt, energyplus, silnik renderowania, otwórz w, usd, glb, unreal, cofnij, dodatki, pcf, symbole, rośliny, śledzenie, pióra, wstążka, przeglądarka projektu, układ
from: 87b03056
---

To jest lista zmian w BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. BimCraft potrafi teraz odpowiadać na pytania o budynek i go testować: z ludźmi, dźwiękiem, wodą, wiatrem i trzęsieniami ziemi, a także rysować go większą liczbą narzędzi; 0.8.1 to wydanie naprawcze.

## Nowe

### Testowanie budynku

- **Ludzie w budynku.** Sekcja {{ui:Ludzie w budynku}} lewego panelu przeprowadza ewakuację lub zwykły dzień przyjazdów przez pomieszczenia, drzwi i schody. Widać kolejki tam, gdzie budynek się zwęża, najdłuższą drogę do wyjścia z każdego pomieszczenia i czas, w którym wychodzi ostatnia osoba. Zaznacza się {{ui:Zamknięte}} przy drzwiach, aby zobaczyć, co się zmienia, oraz {{ui:Pokaż ludzi w widoku 3D}}, aby obserwować idących. Wyniki trafiają do Problemów. To zgrubny model tłumu do decyzji projektowych, a nie certyfikat bezpieczeństwa pożarowego. Zobacz [Przeprowadź ludzi przez budynek](topic:people-in-the-building).
- **Akustyka pomieszczeń, którą można usłyszeć.** Sekcja {{ui:Akustyka pomieszczeń}} podaje czas pogłosu każdego pomieszczenia w pasmach oktawowych (Sabine i Eyring) na podstawie jego wielkości i wybranych wykończeń. Przy własnym celu mówi, ile pochłaniania by mu sprostało. {{ui:Odtwórz w tym pomieszczeniu}} odtwarza głos, klaśnięcie, szarpane dźwięki lub własny plik dźwiękowy przez odpowiedź impulsową obliczoną dla pomieszczenia. Wartości pochłaniania to typowe wartości publikowane, do zastąpienia własnymi. Zobacz [Akustyka pomieszczeń](topic:room-acoustics).
- **Odtwarzanie powodzi, wiatru i trzęsienia ziemi.** {{ui:Odtwarzanie zagrożeń}} pokazuje wodę podnoszącą się w pomieszczeniach, ciśnienie wiatru na każdej kondygnacji oraz wstrząsy kondygnacji podczas trzęsienia ziemi, na planie lub elewacji, z suwakiem czasu. Proste modele z ich założeniami na panelu; to nie jest sprawdzenie według przepisów. Zobacz [Odtwórz powódź, wiatr lub trzęsienie ziemi](topic:hazard-playback).
- **Co się zużywa w ciągu pięćdziesięciu lat.** {{ui:Widok cyklu życia}} wylicza okna, drzwi, wykończenia i dach, z okresem użytkowania każdego z nich, latami wymiany oraz, gdy wpisano koszt za jednostkę, kosztem w poszczególnych latach i jego wartością bieżącą. {{ui:Zapisz harmonogram (CSV)}} zapisuje to do pliku. Okresy użytkowania to wartości planistyczne. Zobacz [Zobacz, co się zużywa w ciągu pięćdziesięciu lat](topic:life-cycle-view).
- **Sprawdzenia betonu i sejsmiczne.** Bloki {{ui:Elementy betonowe}} i {{ui:Obciążenia sejsmiczne}} karty {{ui:Analiza}} sprawdzają belki i słupy betonowe według ACI 318-19 i wyznaczają zastępcze siły poziome według ASCE 7-22 na sztywnych stropach, wraz z przemieszczeniem międzykondygnacyjnym. Do weryfikacji przez inżyniera. Zobacz [Sprawdź elementy betonowe i wyznacz obciążenia sejsmiczne](topic:concrete-and-seismic).

### Sprawdzanie i raportowanie

- **Sprawdzenie względem IDS.** Wczytaj plik `.ids` otrzymany od klienta i zobacz w Problemach każdy element, który go nie spełnia, zanim dostarczysz IFC. Otwórz {{ui:Sprawdź względem IDS}} w grupie {{ui:Sprawdzanie modelu}}. Zobacz [Sprawdź model względem IDS klienta](topic:check-against-ids).
- **Znaczniki i zestawienia.** Można definiować własne znaczniki, przypisywać je wielu elementom naraz i tworzyć zestawienia, których kolumny, filtry i grupy je odczytują; znaczniki są zachowywane w IFC. Zobacz [Znaczniki i zestawienia](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} wypełnia szablon specyfikacji z otwartego IFC i zapisuje go jako PDF, dokument Word lub Markdown. Zobacz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porównanie skanu z modelem.** Gdy otwarta jest chmura punktów, {{ui:Porównaj}} ocenia każdy element jako wykonany, częściowo wykonany, brakujący lub nieosiągnięty i pokazuje procent wykonania. Zobacz [Porównaj skan z modelem](topic:compare-scan-with-model).
- **Węgiel i koszt.** Panel Węgiel sumuje węgiel wbudowany z tabeli współczynników, którą można edytować, a panel Koszt rozkłada ceny na harmonogram 4D. Współczynniki dołączone do BimCraft są ogólne i oznaczone jako niesprawdzone. Zobacz [Węgiel wbudowany i koszt](topic:embodied-carbon-and-5d-cost).
- **Dowolna projekcja mapy.** {{ui:Zmierz}} › {{ui:Układ współrzędnych…}} przyjmuje numer EPSG, strefę UTM, nazwę lub własną definicję projekcji. Zobacz [Georeferencja w dowolnej projekcji](topic:georeference-any-projection).

### Rysowanie i edycja

- **Przesuń, Wyrównaj i Rozmieść.** W {{ui:Kompilacja}}; {{key:Shift+M}} uruchamia Przesuń (zwykłe {{key:M}} to nadal Zmierz). Przesuwanie kopiuje w trakcie ruchu, gdy wciśnięty jest {{key:C}}, każdy krok to jedno cofnięcie, a działa także w sesji Live TeamWork. Zobacz [Przesuń, kopiuj, wyrównaj i rozmieść](topic:move-align-distribute).
- **Obrazy pod planem.** {{ui:Kompilacja}} › {{ui:Obraz}} umieszcza PNG, JPEG lub WebP pod planem poziomu albo na płaszczyźnie pionowej. Skalę ustawia się dwoma punktami, a obraz można przesuwać, obracać, wygaszać i blokować. Obszar skopiowany w MarkupCraft wkleja się w skali swojego arkusza. Zobacz [Umieść obraz pod planem](topic:pictures-as-backgrounds).
- **Ściany ze skanu.** Przy otwartym skanie ściany, drzwi i pomieszczenia pojawiają się jako propozycje; można je zachować lub odrzucić pojedynczo, w jednym kroku cofnięcia. Wykrywane są tylko ściany w dwóch prostopadłych kierunkach. Zobacz [Zamień skan w ściany](topic:scan-to-walls).
- **Śledzenie, pióra i szkicowanie schodów.** {{ui:Śledzenie}} pokazuje inny poziom przerywaną linią pod planem, {{ui:Pióra}} nadaje ścianom, drzwiom i oknom własną grubość linii w jednym widoku, a {{ui:Szkicuj schody}} zamienia linię chodzenia w schody. Siatka Wavefront OBJ się otwiera. Zobacz [Śledzenie poziomu, pióra i schody ze szkicu](topic:trace-pens-stairs-obj).
- **Budynki wokół adresu.** Budynki i działka znalezione przez narzędzie Adres na działkę w CivilCraft pojawiają się jako sugestie; zaznacza się te, które mają zostać dodane. Zobacz [Start z działki z CivilCraft](topic:site-from-civilcraft).
- **Rysunki paneli.** {{ui:Kompilacja}} › {{ui:Rysunki paneli}} tworzy ramy ścian, stropów i dachów z drewna lub lekkiej stali oraz zapisuje listę cięcia jako CSV, a rysunki warsztatowe jako PDF. To wartości wyjściowe, a nie projekt konstrukcyjny. Zobacz [Rysunki paneli](topic:panel-drawings).
- **Paleta symboli i rośliny.** {{ui:Kompilacja}} › {{ui:Paleta symboli}} wyszukuje symbole elektryczne i sanitarne po nazwie; źródło {{ui:Rośliny}} w {{ui:Bibliotece}} zawiera około 400 roślin z symbolami planu. Zobacz [Paleta symboli](topic:symbol-palette) oraz [Umieść roślinę](topic:plant-list).

### Rury, kanały i energia

- **Split, VRF i fancoile.** Jednostki wewnętrzne i zewnętrzne z ich przyłączami oraz przewody czynnika dobrane z tabeli typowych wartości przykładowych, które można zmienić. Zobacz [Split, VRF i fancoile](topic:split-vrf-fan-coils).
- **Obliczenia.** Panel Obliczenia sprawdza średnice rur zasilających i kanałów pod kątem spadku ciśnienia, prowadzi kable przez korytka i przepusty oraz pokazuje ich wypełnienie, a także wylicza natężenie oświetlenia z plików IES lub EULUMDAT. Wartości domyślne są oznaczone; wartości z obowiązujących norm wpisuje się ręcznie. Zobacz [Obliczenia rur, kanałów, kabli i oświetlenia](topic:mep-calculations).
- **Pliki PCF.** Polecenie **Eksportuj PCF** w narzędziu Rura zapisuje przebiegi do programów analizy naprężeń rurociągów i rysunków izometrycznych, a odczytany plik PCF rysuje swoją rurę. Zobacz [Pliki składowych rurociągów](topic:piping-pcf).
- **Fotowoltaika.** Układanie szeregów paneli na dachach lub na gruncie, zacienianie ich z modelu, szacowanie rocznej produkcji energii, sprawdzanie łańcuchów i tworzenie danych schematu jednokreskowego. Moduł startowy i straty są ogólne. Zobacz [Fotowoltaika](topic:solar-pv).
- **Plik EnergyPlus.** Panel Sprawdzenie z EnergyPlus zapisuje model jako plik IDF do uruchomienia we własnym EnergyPlus. Uruchomienie w przeglądarce wymaga kompilacji hostowanej samodzielnie, a adres trzeba wpisać ręcznie; BimCraft jej nie zawiera. Zobacz [Sprawdź ogrzewanie i chłodzenie w EnergyPlus](topic:check-with-energyplus).

### Obrazy i pliki

- **Wybór silnika renderowania.** {{ui:Renderuj}} ma wybór {{ui:Silnik}}. Dwa wbudowane silniki (Fast i Path tracer) pozostają domyślne. **Otwórz w** zapisuje scenę jako plik USD lub glTF, a folder projektu Unreal jako plik .zip; w CadCraft Studio dodatek może dodać silnik. Wtyczka Unreal, która otwiera projekt, nie została jeszcze wydana. Zobacz [Wybierz program, który rysuje obraz](topic:render-engines).
- **Cofanie w Studio.** W CadCraft Studio BimCraft przekazuje Studio każdy zakończony krok, dzięki czemu Studio może cofnąć ostatni krok w tym oknie, z którego korzystano ostatnio. Zobacz [Cofanie między aplikacjami](topic:undo-across-apps).
- **Dodatki w pliku.** IFC zapisuje, które dodatki do niego wpisywały, i przy jego otwieraniu proponuje te, których brakuje. Zobacz [Dodatki w pliku](topic:add-ons-in-your-file).

### We wszystkich aplikacjach

- **Połączenie z AI.** Własny asystent może sterować BimCraft przez połączenie Studio i odpowiadać na pytania o model, na przykład które pomieszczenia leżą pod danym obszarem. Studio nie ma własnej AI. Zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje Zawijaj, 2 wiersze lub 1 wiersz; Zawijaj pozostaje ustawieniem domyślnym.
- **Urządzenia wejściowe.** Ustawienia gładzika, pióra, myszy 3D, kontrolera i MIDI są wspólne dla wszystkich aplikacji.
- **Problemy i Live.** Panel ostrzeżeń i sesje Live działają jak dotąd, a nowe sprawdzenia opisane powyżej zasilają Problemy.
- **Języki.** 54 języki, z czego dziesięć nowych. Języki inne niż angielski to wersje maszynowe, jeszcze nieprzeczytane przez rodzimego użytkownika języka; tematy pomocy są w większości po angielsku.

## Naprawy w 0.8.1

- **Układ wstążki i przeglądarki projektu.** Wstaw › Importuj CAD, Wstaw › Obraz oraz Zarządzaj › Jednostki projektu pokazywały „Jeszcze nie zbudowano w BimCraft”. Obraz otwiera teraz narzędzie Obraz, Importuj CAD otwiera {{ui:Kompilacja}} › {{ui:Z rysunku…}} (DWG, DXF, PDF lub skan), a Jednostki projektu otwierają {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Jednostki}}. Przesuń i Wyrównaj uruchamiają narzędzia Przesuń i Wyrównaj, Poziom otwiera {{ui:Dodaj poziomy…}}, Fazy otwiera sekcję Fazy renowacji, a Materiały otwiera bibliotekę materiałów.
- **Sekcja klas DWG.** Była odczytywana jako zły typ; naprawiono ją w BimCraft i w innych aplikacjach, które odczytują DWG.
- **Język podczas działania.** Studio i pakiety mogą teraz zmieniać język bez ponownego uruchamiania. Nie zostało to jeszcze przetestowane na każdej platformie; zgłoś, jeśli język się nie zmienia.
- **Skrypt paczki Archicad.** `archicad_bundle.py`, osobne pobranie, teraz znajduje ścieżkę Archicad, obserwuje folder przez do 20 sekund i ponawia próbę obok paczki.

## Jeszcze nie w tej wersji

- **Pomoce bezpieczeństwa i projektowania.** Ludzie w budynku nie mają limitu odległości dojścia z przepisów budowlanych (limit wpisuje się ręcznie) i nie zostali ręcznie sprawdzeni na prawdziwym planie. Wartości akustyki, cyklu życia i zagrożeń są wartościami planistycznymi, a nie sprawdzeniem według przepisów.
- **Scenariusze klimatyczne i EnergyPlus.** Brak wbudowanych scenariuszy klimatycznych: można wczytać plik scenariusza dla przebiegu powodzi. Przebieg EnergyPlus w przeglądarce nie wchodzi w skład tego wydania.
- **Układ wstążki.** Zestawienie ilości materiałów pozostaje „Nie zbudowano”, ponieważ BimCraft nie ma listy ilości materiałów, a 54 inne wyszarzone narzędzia wstążki nie mają jeszcze za sobą narzędzia BimCraft.
- **Podpisywanie i platformy.** Instalatory Windows i pliki .dmg dla macOS są niepodpisane, więc SmartScreen pokazuje {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}; macOS wymaga kliknięcia prawym przyciskiem myszy, a następnie {{ui:Otwarty}}. Kompilacja na iPad i iPhone nie została przebudowana dla 0.8.1.
- **Testy na prawdziwych stronach.** Niektóre starsze testy przeglądarki BimCraft nadal nie przechodzą na naszej stronie testowej, tak jak przed 0.8.1.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wcześniejsze zmiany są w [Co nowego w 0.7](topic:whats-new-0-7).
