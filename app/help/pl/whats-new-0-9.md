---
title: Co nowego w 0.9 (wcześniej)
summary: Kształty ścian, dzielenie, przesunięcie, rozciąganie i blokada do siatki, poziomy pod ziemią, wymiary siatki i Zmierz na planie, zduplikowane widoki ze stylami pracy i tabelami piór, Raportuj jako, eksport Collada i Google Earth, Skan do BIM, analiza wiatru i sejsmiczna, dodatki do druku żywicznego.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, 0.9, informacje o wydaniu, kształty ścian, prostokąt, wielokąt, łuk, wybierz linie, śledzenie obrysu, przesunięcie, połączenie, rozciąganie oknem, wyrównaj i zablokuj, podziel ścianę, przerwa, połącz ponownie, zablokuj do siatki, powiększaj od, mierz od, dodaj poziom poniżej, piwnica, polecenie poziomu, wymiary siatki, zmierz na planie, styl pracy, zduplikowany widok, własna kopia, połączony widok, tabela piór, drukuj jak widać, raportuj jako, wpisz skalę, importuj svg, umieść w planie, umieść w modelu, collada, dae, kmz, google earth, skan do bim, obciążenie wiatrem, sejsmiczne, metoda elementów skończonych, panel dokumentów, druk żywiczny, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, ewakuacja, ludzie, kolejki, akustyka, pogłos, odpowiedź impulsowa, powódź, wiatr, trzęsienie ziemi, zagrożenie, cykl życia, okres użytkowania, ids, etykiety, zestawienia, przesuń, wyrównaj, rozłóż, obraz, tło, skan do ścian, teren z civilcraft, rysunki paneli, szkielet, słoneczne, pv, podział, vrf, jednostka wewnętrzna, dobór rur, korytko kablowe, natężenie oświetlenia, beton, sejsmika, porównaj skan, epsg, projekcja, dokumenty, szablon, węgiel, koszt, energyplus, silnik renderowania, otwórz w, usd, glb, unreal, cofnij, dodatki, pcf, symbole, rośliny, śledzenie, pióra, wstążka, przeglądarka projektu, układ
from: 816df7f8
---

To jest lista zmian w BimCraft 0.9 w porównaniu z 0.8.1. Dwa główne tematy to prawdziwe narzędzie do ścian oraz widoki, które zachowują się tak, jak oczekują osoby przychodzące z dużych programów BIM. Obok nich pojawiają się eksport Collada, asystenci, którzy potrafią umieszczać urządzenia elektryczne, Skan do BIM oraz prace nad wiatrem, sejsmiką i metodą elementów skończonych na karcie {{ui:Analiza}}.

## Nowe

### Ściany

- **Rysuj całe kształty.** W {{ui:Rysuj}} otwórz {{ui:Kształty}} (albo wybierz kształt z listy Kształt w wierszu Ściana) dla prostokąta, obróconego prostokąta, wielokąta o 3 do 64 bokach, łuku po środku, łuku stycznego, ścian na wskazanych liniach albo ścian dookoła zamkniętego obszaru, w którym klikniesz. Prostokąt to cztery ściany z czterema połączonymi narożnikami i jednym krokiem cofnięcia. Zobacz [Kształty ścian, dzielenie, przesunięcie, rozciąganie i blokada](topic:wall-tools).
- **Ustaw przed rysowaniem, zmieniaj później.** Wiersz Ściana ma {{ui:Przesunięcie}} i {{ui:Połączenie}} (odznacz, aby rysować ściany wolnostojące). Później użyj {{ui:Przesunięcie}}, {{ui:Rozciągnij oknem}} i {{ui:Wyrównaj i zablokuj}} na narysowanych ścianach. Przesunięta lub rozciągnięta ściana zachowuje swoje drzwi, okna i wymiary. Każdy przepis to jeden krok cofnięcia.
- **Przecinaj ściany.** {{ui:Podziel}}, {{ui:Przerwa}}, {{ui:Wolne końce}}, {{ui:Usuń fragment}} i {{ui:Połącz ponownie}} przecinają ścianę jednym kliknięciem albo tam, gdzie przecina ją inna ściana. Przecięcie przez drzwi zostaje odrzucone. Zobacz [Kształty ścian, dzielenie, przesunięcie, rozciąganie i blokada](topic:wall-tools).
- **Blokuj ściany do linii siatki.** Zaznacz ścianę wzdłuż linii siatki i zaznacz {{ui:Zablokuj do siatki}} we {{ui:Właściwości}}. Gdy narzędzie Siatka jest włączone, wpisz odległość w {{ui:Przesuń o}} dla wskazanej linii, a zablokowane ściany pójdą za nią w jednym kroku cofnięcia.
- **Kształtuj jedną ścianę.** We {{ui:Właściwościach}} jednej ściany możesz przymocować jej górę lub podstawę do dachu, stropu lub sufitu, edytować kontur wysokości, pochylić ją albo wyciąć otwór w ścianie bez drzwi i okien. Zobacz [Kształt ściany](topic:wall-shape).
- **Długość pokazuje, który koniec zostaje.** {{ui:Powiększaj od}} ustala, czy początek, koniec czy środek pozostaje na miejscu przy zmianie długości.
- **Długość i wymiar na planie się zgadzają.** {{ui:Mierz od}} (oś, wewnętrzna lub zewnętrzna powierzchnia) steruje zarówno polem Długość, jak i wymiarami ścian na planie. Zaczyna od osi, więc wymiary ścian na planie odczytują teraz oś, a wcześniej odczytywały zewnętrzną powierzchnię. Zmień to w wierszu Ściana, we {{ui:Właściwościach}} albo w {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Ściany}}.

### Kondygnacje, siatki i pomiary

- **Dodaj poziom poniżej.** {{ui:Dodaj poziom poniżej}} w panelu {{ui:Kondygnacje}} dodaje poziom pod najniższym, tak samo wysoki, na ujemnej rzędnej (Poziom -1, Poziom -2). Nic innego się nie przesuwa. {{ui:Dodaj poziomy…}} przyjmuje teraz ujemne wysokości. Wpisanie na wierszu poleceń LEVEL, LEVELS, STOREY lub STOREYS otwiera {{ui:Dodaj poziomy…}}, a w menu i kartach wstążki jest przycisk {{ui:Kondygnacje}}. Zobacz [Działki, budynki i kondygnacje](topic:site-building-and-levels).
- **Wymiary siatki na planie.** Przy włączonym narzędziu {{ui:Siatka}} zaznacz {{ui:Wymiary}}, aby narysować rozstaw między sąsiednimi liniami i całkowity wymiar poza bańkami na planie każdej kondygnacji. Zobacz [Wymiarowanie siatki](topic:grid-dimensions).
- **Zmierz na planie.** {{ui:Zmierz}} w grupie {{ui:Rysuj}} podaje odległość oraz różnice X i Y między dwoma kliknięciami. Nic nie zapisuje się w modelu. Zobacz [Pomiar na planie](topic:measure-on-the-plan).
- **Zmień kilka kolumn naraz.** Wybierz kolumny razem ze ścianą, a lista pokaże każdy rodzaj z przyciskiem {{ui:Zachowaj tylko te}}. Jedno kliknięcie zachowuje kolumny i pokazuje ich wspólne pola.
- **Jedna jednostka wyświetlania wszędzie.** Współrzędne, pomiary, przekroje, skale arkuszy, obciążenia i wyniki w karcie ramy oraz tekst Problemów podążają za wybraną jednostką. Eksporty pozostają w SI.

### Widoki, arkusze i druk

- **Styl pracy.** {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Styl pracy}} wybiera, czy każdy widok ma własne adnotacje i tabele piór, czy je współdzieli. Zobacz [Styl pracy, zduplikowane widoki, pióra na papierze, Raportuj jako i szablony](topic:working-style).
- **Duplikuj widok.** Plany, plany sufitów, wyniesienia, elewacje i przekroje można zduplikować jako {{ui:Własna kopia}} lub {{ui:Połączono}}; {{ui:Uczyń własną kopią}} uniezależnia połączony widok. Zobacz [Styl pracy, zduplikowane widoki, pióra na papierze, Raportuj jako i szablony](topic:working-style).
- **Drukuj jak widać albo przez tabelę piór.** Nadpisania piór są zachowywane w IFC razem z widokiem, a arkusze i pliki PDF rysują je tak, jak widać na ekranie. Ten sam temat obejmuje tabele piór.
- **Raportuj jako.** {{ui:Raportuj jako}} we {{ui:Właściwościach}} zapisuje płytę narysowaną jako drogę, ścianę jako panel albo dach jako rampę do IFC jako wybraną klasę i liczy ją w ten sposób w zestawieniach, ilościach, Znajdź, Koloruj według i Problemach.
- **Edytuj w elewacjach i przekrojach.** Rysuj i przesuwaj ściany, otwory, poziomy, wymiary i notatki bezpośrednio w elewacji lub przekroju, z własnymi rozmiarami arkuszy i tabliczkami rysunkowymi. Zobacz [Edycja w elewacjach i przekrojach](topic:edit-in-elevations).
- **Arkusze.** Każdy arkusz może być poziomy lub pionowy. Pole {{ui:Wpisz skalę}} stoi obok listy skal przy każdym umieszczonym widoku (1:64, 2:1, 1/4" = 1'). Możesz przeciągnąć umieszczony rysunek lub przesunąć go klawiszami strzałek, a {{ui:Formaty…}} › {{ui:Importuj SVG…}} zamienia twój własny projekt arkusza w tabliczkę rysunkową z polami wpisywanymi osobno dla każdego arkusza.
- **Podziękowania biblioteki na arkuszu.** Zestaw rysunków z elementami Biblioteki dostaje zestawienie podziękowań Biblioteki, które możesz umieścić na dowolnym arkuszu. Zobacz [Podziękowania Biblioteki](topic:library-credits).

### Biblioteka: umieszczanie

- **Umieszczanie zależy od widoku.** W widoku Plan Biblioteka pokazuje {{ui:Umieść w planie}}; w 3D pokazuje {{ui:Umieść w modelu}}; w Podziale pokazuje przycisk dzielony z {{ui:Umieść w planie}} jako główną akcją. Oba sposoby zapisują ten sam element IFC. Kartę Biblioteki możesz też przeciągnąć na plan lub widok 3D; piórem albo palcem przytrzymaj, a potem przeciągnij. Zobacz [Umieszczanie z Biblioteki](topic:place-from-library).

### Pliki i asystenci

- **Collada i Google Earth.** {{ui:Collada}} na pasku narzędzi (menu Plik w stylach menu) zapisuje plik .dae albo .kmz umieszczony tam, gdzie model znajduje się na mapie. Zobacz [Eksport modelu jako Collada lub dla Google Earth](topic:collada).
- **Asystenci mogą umieszczać urządzenia elektryczne.** Połączony asystent ma nowe narzędzia do dodawania, wyświetlania listy, zmiany i usuwania urządzeń oraz ustawiania świateł. Asystenci pozostają wyłączeni, dopóki nie włączysz ich w {{ui:Ustawienia}}. Zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
- **Skan do BIM (dodatek).** Domyślnie wyłączony, wymaga dodatku Chmury punktów. Proponuje stropy, ściany, drzwi i okna ze skanu wraz z pomierzonym odchyleniem dla każdego; zaakceptowanie to jeden krok cofnięcia.

### Analiza

- **Dane sejsmiczne i wiatrowe dla działki.** Na karcie {{ui:Analiza}}: obciążenia wiatrem według ASCE 7-10 lub 7-16 dla sztywnego zamkniętego budynku, z siłą na każdej kondygnacji jako przypadki obciążeń, oraz dane sejsmiczne dla działki z wyszukiwaniem USGS i widmem projektowym.
- **Dalsze obliczenia konstrukcyjne i metoda elementów skończonych.** Sprawdzenia betonu według ACI 318-19, zastępcze siły boczne według ASCE 7-22, dryf kondygnacji, płyty i ściany jako płyty oraz kombinacje obciążeń z ASCE 7 i EN 1990. Nasz własny silnik elementów skończonych obsługuje powłoki, czworościany i analizę modalną. Zobacz [Sprawdź elementy betonowe i wygeneruj obciążenia sejsmiczne](topic:concrete-and-seismic) oraz [Analiza ramy](topic:frame-analysis).

### Inne dodatki i dokumenty

- **Oświetlenie wnętrz (dodatek).** Umieszcza oprawy i zapisuje luksy jako liczby na planie każdej kondygnacji, z szacunkiem olśnienia i raportem do wydruku.
- **Panel dokumentów.** {{ui:Plik}} › {{ui:Dokumenty…}} oferuje pobranie i zwrot z plikiem blokady, litery rewizji, stany wydania i historię.
- **Regiony i stal.** Pakiety rysunków i przepisów budowlanych RPA w dodatku Przepisy oraz 976 brytyjskich rozmiarów stali we wspólnej tabeli przekrojów.
- **Darmowe dodatki do druku żywicznego.** Slicer, podpory i tratwa, test naświetlania oraz formaty plików GOO, SL1, Chitubox i Anycubic, wszystkie domyślnie wyłączone.

## We wszystkich aplikacjach

- Najechanie na przycisk lub kontrolkę pokazuje podpowiedź Bootstrap.
- Wskazówka startowa na pustym obszarze rysunku ma przycisk zamknięcia; BimCraft pamięta, że została zamknięta.
- Pasek kart panelu, który się nie mieści, teraz przewija się zamiast być ucinany.
- Gdy dokument jest otwarty, karta przeglądarki pokazuje „<dokument> - BimCraft | CadCraft”.
- W {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Układ}} układy są listą rozwijaną z dwuwierszowymi opcjami.
- Lista języków w {{ui:Ustawienia}} oferuje więcej języków niż w 0.8; języki inne niż angielski to wstępne tłumaczenia maszynowe.

## Naprawione

- **Przesuwanie działa na schodach** oraz na rampach, poręczach, płaszczyznach dachu, wolnostojących urządzeniach, obrazach i ścieżkach.
- **Przeciągnięcie ściany nie przekrzywia już pokoju.** Uchwyt środkowy przesuwa ścianę prostopadle do siebie, a jej narożniki ślizgają się wzdłuż połączonych ścian. Przytrzymaj {{key:Mod}}, aby uzyskać dawne swobodne przesuwanie; {{ui:Wyprostuj kąty}} przywraca 90 stopni.
- **Zmiana grubości lub typu w połączonym węźle** zachowuje teraz zamknięty narożnik w literze L, T, węźle trzech ścian i przy zakrzywionej ścianie.
- **Przesunięcie lub kopiowanie grupy pomieszczeń** zachowuje połączenia ścian spoza grupy.
- **Ponowienie zachowuje tożsamość wymiaru ściany.**
- **Wybór ściany przy wyłączonym Rysuj** nie powoduje już błędu we Właściwościach.
- **Render przechodzi na WebGL**, gdy karta graficzna nie może się uruchomić, zamiast się zatrzymać.
- **Sprawdzenie EnergyPlus** można znów włączyć.
- **Dokumenty otwierają się jako wyśrodkowane okno dialogowe.** {{key:Esc}}, krzyżyk lub kliknięcie przyciemnionej strony je zamykają.
- **Przyciski {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}} pojawiają się** od razu po otwarciu modelu, a nie dopiero po wcześniejszym włączeniu Rysuj.

## Ograniczenia

- Nic nie zostało wydrukowane na prawdziwym sprzęcie. Podpory żywiczne są nowe i nie sprawdzone.
- Wyniki wiatru, sejsmiki, betonu i metody elementów skończonych są pomocą kontrolną dla inżyniera, sprawdzoną względem wzorów zamkniętych, a nie względem rzeczywistego budynku.
- Skan do BIM testowano na syntetycznym budynku, a nie na prawdziwym skanie, i wykrywa tylko pomieszczenia prostokątne.
- Collada nie została tu otwarta w Blenderze ani w Google Earth.
- Szacunek oświetlenia jest sprawdzany względem naszego własnego śledzenia, a nie względem innych programów do oświetlenia.
- Liczby dla RPA są niezweryfikowane.
- Style połączeń ścian (styk, ukos, ścięcie na kwadrat) i priorytet warstw nie są zbudowane; narożniki są ukosowane.
- Języki inne niż angielski to wstępne tłumaczenia maszynowe.

Wszystko inne znajduje się w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wcześniejsze zmiany są w notatkach 0.8 i 0.8.1 niżej na tej stronie.

## Wcześniej: 0.8 i 0.8.1

To jest lista zmian w BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. BimCraft potrafi teraz odpowiadać na pytania o budynek i go testować: z ludźmi, dźwiękiem, wodą, wiatrem i trzęsieniami ziemi, a także rysować go większą liczbą narzędzi; 0.8.1 to wydanie naprawcze.

### Nowe

**Testuj budynek**

- **Ludzie w budynku.** Sekcja {{ui:Ludzie w budynku}} lewego panelu przeprowadza ewakuację lub zwykły dzień przybyć przez twoje pomieszczenia, drzwi i schody. Widzisz kolejki tam, gdzie budynek się zwęża, najdłuższą drogę do wyjścia z każdego pomieszczenia i czas, w jakim dociera ostatnia osoba. Zaznacz {{ui:Zamknięte}} przy drzwiach, aby zobaczyć, co się zmienia, i zaznacz {{ui:Pokaż ludzi w widoku 3D}}, aby obserwować idących. Wyniki trafiają do Problemów. To przybliżony model tłumu do decyzji projektowych, a nie certyfikat bezpieczeństwa pożarowego. Zobacz [Przeprowadź ludzi przez budynek](topic:people-in-the-building).
- **Akustyka pomieszczeń i odsłuch.** Sekcja {{ui:Akustyka pomieszczeń}} podaje czas pogłosu każdego pomieszczenia w pasmach oktawowych (Sabine i Eyring) na podstawie jego wielkości i wybranych wykończeń, a przy własnym celu mówi, ile pochłaniania spełniłoby go. {{ui:Odtwórz w tym pomieszczeniu}} odtwarza głos, klaśnięcie, szarpane dźwięki lub twój własny plik dźwiękowy przez odpowiedź impulsową obliczoną dla pomieszczenia. Wartości pochłaniania to typowe opublikowane wartości, które możesz zastąpić. Zobacz [Akustyka pomieszczeń](topic:room-acoustics).
- **Odtwarzanie powodzi, wiatru i trzęsienia ziemi.** {{ui:Odtwarzanie zagrożeń}} odtwarza wzrost wody w pomieszczeniach, ciśnienie wiatru na każdej kondygnacji i wstrząsy kondygnacji podczas trzęsienia ziemi, na planie lub elewacji z suwakiem czasu. Proste modele z ich założeniami na panelu; to nie jest sprawdzenie według przepisów. Zobacz [Odtwórz powódź, wiatr lub trzęsienie ziemi](topic:hazard-playback).
- **Co się zużywa w ciągu pięćdziesięciu lat.** {{ui:Widok cyklu życia}} wypisuje okna, drzwi, wykończenia i dach wraz z okresem użytkowania każdego z nich, latami wymiany i, gdy wpiszesz koszt za jednostkę, koszt według roku oraz jego wartość bieżącą. {{ui:Zapisz harmonogram (CSV)}} zapisuje to do pliku. Okresy użytkowania to wartości planistyczne. Zobacz [Zobacz, co się zużywa w ciągu pięćdziesięciu lat](topic:life-cycle-view).
- **Sprawdzenia betonu i sejsmiczne.** Bloki {{ui:Elementy betonowe}} i {{ui:Obciążenia sejsmiczne}} na karcie {{ui:Analiza}} sprawdzają belki i słupy betonowe według ACI 318-19 i wyznaczają zastępcze siły boczne według ASCE 7-22 na sztywnych stropach, wraz z dryfem kondygnacji. Do sprawdzenia przez inżyniera. Zobacz [Sprawdź elementy betonowe i wygeneruj obciążenia sejsmiczne](topic:concrete-and-seismic).

**Sprawdzaj i raportuj**

- **Sprawdź względem IDS.** Wczytaj plik `.ids`, który dał ci klient, i zobacz w Problemach każdy element, który go nie spełnia, zanim dostarczysz IFC. Otwórz {{ui:Sprawdź względem IDS}} w menu {{ui:Sprawdzanie modelu}}. Zobacz [Sprawdź model względem IDS klienta](topic:check-against-ids).
- **Etykiety i zestawienia.** Definiuj własne etykiety, przypisuj je wielu elementom naraz i twórz zestawienia, których kolumny, filtry i grupy je odczytują; etykiety są zachowywane w IFC. Zobacz [Etykiety i zestawienia](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} wypełnia szablon specyfikacji z otwartego IFC i zapisuje go jako PDF, dokument Word lub Markdown. Zobacz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porównaj skan z modelem.** Przy otwartej chmurze punktów {{ui:Porównaj}} ocenia każdy element jako wykonany, częściowo wykonany, brakujący lub nieosiągnięty i pokazuje procent wykonania. Zobacz [Porównanie skanu z modelem](topic:compare-scan-with-model).
- **Węgiel i koszt.** Panel Węgla sumuje węgiel wbudowany z tabeli współczynników, którą możesz edytować, a panel Kosztu rozkłada ceny na harmonogram 4D. Współczynniki dołączone do BimCraft są ogólne i oznaczone jako niesprawdzone. Zobacz [Węgiel wbudowany i koszt](topic:embodied-carbon-and-5d-cost).
- **Dowolna projekcja mapy.** {{ui:Zmierz}} › {{ui:Układ współrzędnych…}} przyjmuje numer EPSG, strefę UTM, nazwę albo twoją własną definicję projekcji. Zobacz [Georeferencja z dowolną projekcją](topic:georeference-any-projection).

**Rysuj i edytuj**

- **Przesuń, wyrównaj i rozłóż.** Pod {{ui:Kompilacja}}; {{key:Shift+M}} uruchamia Przesuń (zwykłe {{key:M}} nadal oznacza Zmierz). Przesuwanie kopiuje w trakcie z {{key:C}}, każdy krok to jedno cofnięcie, a działa także w sesji Live TeamWork. Zobacz [Przesuń, kopiuj, wyrównaj i rozłóż](topic:move-align-distribute).
- **Obrazy pod planem.** {{ui:Kompilacja}} › {{ui:Obraz}} umieszcza PNG, JPEG lub WebP pod planem kondygnacji albo na płaszczyźnie pionowej. Ustaw skalę dwoma punktami i przesuwaj, obracaj, wygaszaj i blokuj obraz. Obszar skopiowany w MarkupCraft wkleja się w skali swojego arkusza. Zobacz [Umieść obraz pod planem](topic:pictures-as-backgrounds).
- **Ściany ze skanu.** Przy otwartym skanie ściany, drzwi i pomieszczenia pojawiają się jako propozycje, które zachowujesz lub odrzucasz pojedynczo, w jednym kroku cofnięcia. Wykrywane są tylko ściany w dwóch prostopadłych kierunkach. Zobacz [Zamień skan w ściany](topic:scan-to-walls).
- **Śledzenie, pióra i szkic schodów.** {{ui:Śledzenie}} pokazuje inną kondygnację przerywaną linią pod planem, {{ui:Pióra}} nadaje ścianom, drzwiom i oknom własną grubość linii w jednym widoku, a {{ui:Szkicuj schody}} zamienia linię chodzenia w schody. Otwiera się siatka Wavefront OBJ. Zobacz [Śledzenie kondygnacji, pióra i schody z szkicu](topic:trace-pens-stairs-obj).
- **Budynki wokół adresu.** Budynki i działka, które znalazło narzędzie CivilCraft Adres na działkę, pojawiają się jako propozycje; zaznacz te, które chcesz dodać. Zobacz [Rozpocznij od działki z CivilCraft](topic:site-from-civilcraft).
- **Rysunki paneli.** {{ui:Kompilacja}} › {{ui:Rysunki paneli}} wyznacza ramy ścian, stropów i dachów z drewna lub lekkiej stali i zapisuje listę cięć jako CSV oraz rysunki warsztatowe jako PDF. To wartości startowe, a nie projekt konstrukcyjny. Zobacz [Rysunki paneli](topic:panel-drawings).
- **Paleta symboli i rośliny.** {{ui:Kompilacja}} › {{ui:Paleta symboli}} znajduje symbole elektryczne i instalacyjne po nazwie; źródło {{ui:Rośliny}} w {{ui:Bibliotece}} zawiera około 400 roślin z symbolami na planie. Zobacz [Paleta symboli](topic:symbol-palette) oraz [Umieść roślinę](topic:plant-list).

**Rury, kanały i energia**

- **Split, VRF i jednostki wentylatorowo-skraplające.** Jednostki wewnętrzne i zewnętrzne z ich przyłączami oraz zestawy przewodów dobrane z tabeli typowych wartości przykładowych, które możesz zmienić. Zobacz [Split, VRF i jednostki wentylatorowo-skraplające](topic:split-vrf-fan-coils).
- **Obliczenia.** Panel Obliczeń sprawdza rozmiary rur wodnych i kanałów pod kątem spadku ciśnienia, prowadzi kable przez korytka i rury osłonowe oraz pokazuje ich wypełnienie, a także oblicza natężenie oświetlenia z plików IES lub EULUMDAT. Wartości domyślne są oznaczone; wpisz wartości z twoich przepisów. Zobacz [Obliczenia rur, kanałów, kabli i oświetlenia](topic:mep-calculations).
- **Pliki PCF.** {{ui:Eksportuj PCF}} w narzędziu Rura zapisuje przebiegi dla programów do analizy naprężeń rur i rysunków izometrycznych, a plik PCF odczytany z powrotem rysuje swoją rurę. Zobacz [Pliki składników rur](topic:piping-pcf).
- **Fotowoltaika (PV).** Dopasuj zestawy na dachach lub gruncie, zacieniaj je z modelu, szacuj roczną produkcję energii, sprawdzaj stringi i twórz dane schematu jednokreskowego. Moduł startowy i straty są ogólne. Zobacz [Fotowoltaika](topic:solar-pv).
- **Plik EnergyPlus.** Panel Sprawdzenie z EnergyPlus zapisuje model jako IDF do uruchomienia we własnym EnergyPlus. Uruchamianie w przeglądarce wymaga wersji, którą hostujesz sam i której adres wpisujesz; BimCraft jej nie dostarcza. Zobacz [Sprawdź ogrzewanie i chłodzenie w EnergyPlus](topic:check-with-energyplus).

**Obrazy i pliki**

- **Wybór silnika renderowania.** {{ui:Renderuj}} ma wybór {{ui:Silnik}}. Nasze dwa wbudowane silniki (Szybki i Śledzenie ścieżek) pozostają domyślne. **Otwórz w** zapisuje scenę jako plik USD lub glTF, a folder projektu Unreal jako .zip; w CadCraft Studio dodatek może dodać silnik. Wtyczka Unreal, która otwiera projekt, nie została wydana. Zobacz [Wybierz program, który rysuje obraz](topic:render-engines).
- **Cofanie w Studio.** W CadCraft Studio BimCraft informuje Studio o każdym zakończonym kroku, dzięki czemu Studio może cofnąć twój ostatni krok w tym oknie, którego używałeś ostatnio. Zobacz [Cofanie między aplikacjami](topic:undo-across-apps).
- **Dodatki w pliku.** IFC zapisuje, które dodatki w nim pisały, i przy otwarciu oferuje te, których ci brakuje. Zobacz [Dodatki w pliku](topic:add-ons-in-your-file).

**We wszystkich aplikacjach**

- **Podłącz swoją sztuczną inteligencję.** Twój własny asystent może sterować BimCraft przez połączenie Studio i odpowiadać na pytania o model, na przykład które pomieszczenia leżą pod daną powierzchnią. Studio nie ma własnej AI. Zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje Zawijaj, 2 wiersze lub 1 wiersz; Zawijaj pozostaje domyślne.
- **Urządzenia wejściowe.** Ustawienia gładzika, pióra, myszy 3D, kontrolera i MIDI są wspólne dla wszystkich aplikacji.
- **Problemy i Live.** Panel ostrzeżeń i sesje Live działają jak dotąd, a nowe sprawdzenia opisane wyżej zasilają Problemy.
- **Języki.** 54 języki, z czego dziesięć nowych. Języki inne niż angielski to tłumaczenia maszynowe, jeszcze nieprzeczytane przez native speakera; tematy pomocy są w większości po angielsku.

### Naprawione w 0.8.1

- **Układ wstążki i przeglądarka projektu.** Wstaw › Importuj CAD, Wstaw › Obraz i Zarządzaj › Jednostki projektu pisały „Nie zbudowano jeszcze w BimCraft”. Obraz otwiera teraz narzędzie Obraz, Importuj CAD otwiera {{ui:Kompilacja}} › {{ui:Z rysunku…}} (DWG, DXF, PDF lub skan), a Jednostki projektu otwierają {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Jednostki}}. Przesuń i Wyrównaj uruchamiają narzędzia Przesuń i Wyrównaj, Poziom otwiera {{ui:Dodaj poziomy…}}, Fazy otwierają sekcję faz przebudowy, a Materiały otwierają bibliotekę materiałów.
- **Sekcja klas DWG.** Była odczytywana jako zły typ; naprawiono w BimCraft i innych aplikacjach, które czytają DWG.
- **Język w czasie działania.** Studio i pakiety mogą teraz zmienić język bez ponownego uruchamiania. Nie jest to jeszcze przetestowane na każdej platformie; daj nam znać, jeśli język się nie zmienia.
- **Skrypt pakietu Archicad.** `archicad_bundle.py`, osobne pobranie, teraz znajduje ścieżkę Archicad, obserwuje folder przez do 20 sekund i ponawia próbę obok pakietu.

### Jeszcze nie w tej wersji

- **Narzędzia bezpieczeństwa i projektowe.** Ludzie w budynku nie mają limitu odległości dojścia z przepisów budowlanych (wpisujesz go sam) i nie zostały sprawdzone ręcznie na prawdziwym planie. Wartości akustyki, cyklu życia i zagrożeń są wartościami planistycznymi, a nie sprawdzeniem według przepisów.
- **Scenariusze klimatyczne i EnergyPlus.** Brak wbudowanych scenariuszy klimatycznych: do obliczeń powodzi możesz wczytać plik scenariusza. Obliczenia EnergyPlus w przeglądarce nie są częścią tego wydania.
- **Układ wstążki.** Zestawienie materiałów pozostaje „Nie zbudowano”, ponieważ BimCraft nie ma listy ilości materiałów, a 54 inne wyszarzone narzędzia wstążki nie mają jeszcze za sobą narzędzia BimCraft.
- **Podpisy i platformy.** Instalatory Windows i plik .dmg dla macOS nie są podpisane, więc SmartScreen pokazuje {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}, a macOS wymaga kliknięcia prawym przyciskiem, a potem {{ui:Otwarty}}. Wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Testy na prawdziwych stronach.** Niektóre starsze testy przeglądarkowe BimCraft nadal nie przechodzą na naszej stronie testowej, tak jak przed 0.8.1.

Wszystko inne znajduje się w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wcześniejsze zmiany są w [Co nowego w 0.7](topic:whats-new-0-7).
