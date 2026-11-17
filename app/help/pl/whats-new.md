---
title: Co nowego w wersji 0.9
summary: Kształty ścian, podział, przesunięcie, rozciąganie i blokada do siatki, poziomy pod ziemią, wymiary siatki i Mierz na rzucie, zduplikowane widoki ze stylami pracy i tabelami piór, Raportuj jako, eksport Collada i Google Earth, Scan do BIM, analiza wiatru i sejsmiczna oraz dodatki drukowania żywicą.
keywords: co nowego, 0.9, informacje o wydaniu, kształty ścian, prostokąt, wielokąt, łuk, wskaż linie, obrys, przesunięcie, połączenie, rozciąganie oknem, podział ściany, przerwa, połącz ponownie, blokada do siatki, powiększaj od, mierz od, dodaj poziom poniżej, piwnica, polecenie poziomu, wymiary siatki, mierz na rzucie, styl pracy, duplikat widoku, własna kopia, widok połączony, tabela piór, drukuj tak, jak widać, raportuj jako, ustaw skalę, importuj svg, umieść w planie, umieść w modelu, collada, dae, kmz, google earth, scan do bim, obciążenie wiatrem, sejsmiczne, elementy skończone, panel dokumentów, drukowanie żywicą, changelog, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, ewakuacja, ludzie, kolejki, akustyka, pogłos, odpowiedź impulsowa, powódź, wiatr, trzęsienie ziemi, zagrożenie, cykl życia, trwałość, ids, znaczniki, zestawienia, przesuń, wyrównaj, rozmieść, obraz, tło, skan na ściany, teren z civilcraft, rysunki paneli, konstrukcja, słońce, pv, podział, vrf, fan coil, dobór rur, korytko kablowe, oświetlenie, beton, sejsmiczne, porównaj skan, epsg, projekcja, dokumenty, szablon, węgiel, koszt, energyplus, silnik renderowania, otwórz w, usd, glb, unreal, cofnij, dodatki, pcf, symbole, instalacje, obrys, pióra, wstążka, przeglądarka projektu, układ
from: 5624fe88
---

To jest to, co zmieniło się w BimCraft 0.9 w porównaniu z 0.8.1. Dwa główne tematy to prawdziwe narzędzie ścian i widoki, które zachowują się tak, jak oczekują ludzie przychodzący z dużych programów BIM. Obok nich: eksport Collada, asystenci, którzy umieszczają urządzenia elektryczne, Scan do BIM oraz analizy wiatru, sejsmiczna i metodą elementów skończonych w zakładce {{ui:Analiza}}.

## Nowe

### Ściany

- **Rysuj całe kształty.** W {{ui:Rysuj}} otwórz {{ui:Kształty}} (albo wybierz kształt na liście **Kształt** wiersza Ściana): prostokąt, obrócony prostokąt, wielokąt o 3 do 64 bokach, łuk po środku, łuk styczny, ściany na wskazanych liniach albo ściany dookoła zamkniętego obszaru, w który klikniesz. Prostokąt to cztery ściany z czterema połączonymi narożnikami i jeden krok cofnięcia. Zobacz [Kształty ścian, podział, przesunięcie, rozciąganie i blokada](topic:wall-tools).
- **Ustaw przed rysowaniem, zmień po.** Wiersz Ściana ma {{ui:Przesunięcie}} i {{ui:Połączenie}} (odznacz, aby rysować ściany wolnostojące). Potem używaj {{ui:Przesunięcie}}, {{ui:Rozciągnij oknem}} i {{ui:Wyrównaj i zablokuj}} na narysowanych ścianach. Przesunięta lub rozciągnięta ściana zachowuje drzwi, okna i wymiary. Każdy przepis to jeden krok cofnięcia.
- **Podziel ściany.** {{ui:Podziel}}, {{ui:Przerwa}}, {{ui:Wolne końce}}, {{ui:Usuń fragment}} i {{ui:Połącz ponownie}} tną ścianę w miejscu kliknięcia albo tam, gdzie przecina ją inna ściana. Cięcie przez drzwi zostaje odrzucone. Zobacz [Kształty ścian, podział, przesunięcie, rozciąganie i blokada](topic:wall-tools).
- **Blokuj ściany do linii siatki.** Zaznacz ścianę wzdłuż linii siatki i zaznacz {{ui:Zablokuj do siatki}} we {{ui:Właściwościach}}. Przy włączonym narzędziu {{ui:Siatka}} wpisz odległość w {{ui:Przesuń o}} dla wskazanej linii, a zablokowane ściany podążą za nią w jednym kroku cofnięcia.
- **Kształt jednej ściany.** We {{ui:Właściwościach}} jednej ściany możesz przyłączyć jej górę lub podstawę do dachu, płyty albo sufitu, edytować jej zarys w elewacji, pochylić ją albo wyciąć otwór w ścianie bez drzwi i okna. Zobacz [Kształt ściany](topic:wall-shape).
- **Długość mówi, który koniec trzyma.** {{ui:Powiększaj od}} ustawia, czy początek, koniec czy środek pozostaje na miejscu, gdy zmieniasz długość.
- **Długość i wymiar na rzucie się zgadzają.** {{ui:Mierz od}} (linia środkowa, wewnętrzne lico albo zewnętrzne lico) steruje zarówno polem Długość, jak i wymiarami ścian na rzucie. Zaczyna od linii środkowej, więc wymiary ścian na rzucie odczytują teraz linię środkową, tam gdzie wcześniej odczytywały zewnętrzne lico. Zmień to w wierszu Ściana, we {{ui:Właściwościach}} albo w {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Ściany}}.

### Kondygnacje, siatki i pomiary

- **Dodaj poziom poniżej.** {{ui:Dodaj poziom poniżej}} w panelu {{ui:Kondygnacje}} dodaje kondygnację pod najniższą, tak wysoką jak ona, na ujemnej wysokości (Poziom -1, Poziom -2). Nic innego się nie przesuwa. {{ui:Dodaj poziomy…}} przyjmuje teraz ujemne wysokości. Wpisanie LEVEL, LEVELS, STOREY lub STOREYS w wierszu poleceń otwiera {{ui:Dodaj poziomy…}}, a w menu i kartach wstążki jest przycisk {{ui:Kondygnacje}}. Zobacz [Tereny, budynki i kondygnacje](topic:site-building-and-levels).
- **Wymiary siatki na rzucie.** Przy włączonym narzędziu {{ui:Siatka}} zaznacz {{ui:Wymiary}}, aby narysować odstępy między sąsiednimi liniami i wymiar całkowity poza bańkami na planie każdej kondygnacji. Zobacz [Wymiarowanie siatki](topic:grid-dimensions).
- **Mierz na rzucie.** {{ui:Zmierz}} w grupie {{ui:Rysuj}} podaje odległość z różnicami X i Y między dwoma kliknięciami. Nic nie zostaje zapisane w modelu. Zobacz [Pomiar na rzucie](topic:measure-on-the-plan).
- **Zmień kilka kolumn naraz.** Zaznacz kolumny razem ze ścianą, a lista wypisze każdy rodzaj z przyciskiem {{ui:Zachowaj tylko te}}. Jedno kliknięcie zachowuje kolumny i pokazuje ich wspólne pola.
- **Jedna jednostka wyświetlania wszędzie.** Współrzędne, pomiary, przekroje, skale arkuszy, zakładka obciążeń i wyników oraz tekst Problemów podążają za wybraną jednostką. Eksporty pozostają w SI.

### Widoki, arkusze i druk

- **Styl pracy.** {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Styl pracy}} wybiera, czy każdy widok ma własne adnotacje i tabele piór, czy je współdzieli. Zobacz [Styl pracy, zduplikowane widoki, pióra na papierze, Raportuj jako i szablony](topic:working-style).
- **Duplikuj widok.** Rzuty, plany sufitów, wyniesienia, elewacje i przekroje można zduplikować jako {{ui:Własna kopia}} albo {{ui:Połączono}}; {{ui:Uczyń własną kopią}} czyni połączony widok niezależnym. Zobacz [Styl pracy, zduplikowane widoki, pióra na papierze, Raportuj jako i szablony](topic:working-style).
- **Drukuj tak, jak widać, albo przez tabelę piór.** Nadpisania piór są zachowywane w IFC razem z widokiem, a arkusze i PDF rysują je tak, jak ekran. Ten sam temat obejmuje tabele piór.
- **Raportuj jako.** {{ui:Raportuj jako}} we {{ui:Właściwościach}} zapisuje płytę narysowaną jako drogę, ścianę jako panel albo dach jako rampę do IFC, jako wybraną klasę, i liczy ją w ten sposób w zestawieniach, Ilościach, Znajdź, Koloruj wg i Problemach.
- **Edytuj w elewacjach i przekrojach.** Rysuj i przesuwaj ściany, otwory, kondygnacje, wymiary i notatki prosto w elewacji lub przekroju, z własnymi rozmiarami arkuszy i tabliczkami rysunkowymi. Zobacz [Edycja w elewacjach i przekrojach](topic:edit-in-elevations).
- **Arkusze.** Każdy arkusz może być poziomy albo pionowy. Pole {{ui:Wpisz skalę}} stoi obok listy skal na każdym umieszczonym widoku (1:64, 2:1, 1/4" = 1'). Umieszczony rysunek możesz przeciągnąć albo przesunąć klawiszami strzałek, a {{ui:Formaty…}} › {{ui:Importuj SVG…}} zamienia twój własny projekt arkusza w tabliczkę rysunkową z polami wpisywanymi osobno dla każdego arkusza.
- **Podziękowania z biblioteki na arkuszu.** Zestaw rysunków z pozycjami biblioteki dostaje zestawienie Podziękowania z biblioteki, które można umieścić na dowolnym arkuszu. Zobacz [Podziękowania z biblioteki](topic:library-credits).

### Biblioteka: umieszczanie

- **Umieszczanie podąża za widokiem.** W widoku Plan Biblioteka pokazuje {{ui:Umieść w planie}}; w 3D pokazuje {{ui:Umieść w modelu}}; w Podziale pokazuje przycisk dzielony z {{ui:Umieść w planie}} jako główną akcją. Oba sposoby zapisują ten sam element IFC. Możesz też przeciągnąć kartę Biblioteki na rzut lub widok 3D; piórem albo palcem przytrzymaj, a potem przeciągnij. Zobacz [Umieszczanie z biblioteki](topic:place-from-library).

### Pliki i asystenci

- **Collada i Google Earth.** {{ui:Collada}} na pasku narzędzi (menu Plik w stylach menu) zapisuje plik .dae albo .kmz umieszczony tam, gdzie model jest na mapie. Zobacz [Eksport modelu jako Collada albo dla Google Earth](topic:collada).
- **Asystenci mogą umieszczać urządzenia elektryczne.** Połączony asystent ma nowe narzędzia do dodawania, wypisywania, zmiany i usuwania urządzeń oraz ustawiania świateł. Asystenci są wyłączeni, dopóki nie włączysz ich w {{ui:Ustawienia}}. Zobacz [Pozwól asystentowi AI pracować z twoim modelem](topic:assistants).
- **Scan do BIM (dodatek).** Domyślnie wyłączony, wymaga dodatku Chmury punktów. Proponuje podłogi, ściany, drzwi i okna ze skanu z pomiarem odchylenia dla każdego; zaakceptowanie to jeden krok cofnięcia.

### Analiza

- **Dane wiatru i sejsmiczne miejsca.** W zakładce {{ui:Analiza}}: obciążenia wiatrem wg ASCE 7-10 lub 7-16 dla sztywnego, zamkniętego budynku, z siłą na każdej kondygnacji jako przypadki obciążeń, oraz dane sejsmiczne miejsca z wyszukiwaniem USGS i widmem projektowym.
- **Dalsza analiza konstrukcji i elementy skończone.** Sprawdzenia betonu wg ACI 318-19, równoważne siły boczne wg ASCE 7-22, dryf kondygnacji, płyty i ściany jako płyty oraz kombinacje obciążeń z ASCE 7 i EN 1990. Nasz własny silnik elementów skończonych obsługuje powłoki, czworościany i analizę modalną. Zobacz [Sprawdzanie elementów betonowych i obciążenia sejsmiczne](topic:concrete-and-seismic) oraz [Analiza ramy](topic:frame-analysis).

### Inne dodatki i dokumenty

- **Oświetlenie wnętrz (dodatek).** Umieszcza oprawy oświetleniowe i zapisuje luksy jako liczby w rzucie każdej kondygnacji, z oceną olśnienia i wydrukowanym raportem.
- **Panel dokumentów.** {{ui:Plik}} › {{ui:Dokumenty…}} ma wypożyczanie i zwrot z plikiem blokady, litery rewizji, stany wydania i historię.
- **Regiony i stal.** Pakiety rysunków i przepisów budowlanych RPA w dodatku Regulacje oraz 976 brytyjskich rozmiarów stali we wspólnej tabeli przekrojów.
- **Bezpłatne dodatki do druku żywicą.** Slicer, podpory i tratwa, test ekspozycji oraz formaty plików GOO, SL1, Chitubox i Anycubic, wszystkie domyślnie wyłączone.

## We wszystkich aplikacjach

- Najechanie na przycisk lub kontrolkę pokazuje podpowiedź Bootstrap.
- Startowa wskazówka na pustym obszarze rysunku ma przycisk zamknięcia; BimCraft pamięta, że została zamknięta.
- Pasek kart panelu, który się nie mieści, teraz się przewija zamiast być obcinany.
- Gdy dokument jest otwarty, karta przeglądarki pokazuje „<dokument> - BimCraft | CadCraft”.
- W {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Układ}} układy są listą rozwijaną z dwuwierszowymi opcjami.
- Lista języków w {{ui:Ustawienia}} oferuje więcej języków niż w 0.8; języki inne niż angielski są wersjami roboczymi tłumaczonymi maszynowo.

## Naprawione

- **Przesuwanie działa na schodach**, a także na rampach, poręczach, płaszczyznach dachu, wolnostojących urządzeniach, obrazach i ścieżkach.
- **Przeciąganie ściany już nie wykrzywia pomieszczenia.** Uchwyt środkowy przesuwa ścianę prostopadle do siebie, a jej narożniki ślizgają się wzdłuż połączonych ścian. Przytrzymaj {{key:Mod}}, aby uzyskać dawne swobodne przesunięcie; {{ui:Wyprostuj kąty}} przywraca 90 stopni.
- **Zmiana grubości lub typu w połączonym węźle** utrzymuje narożnik zamknięty przy L, T, węźle trzech ścian i obok zakrzywionej ściany.
- **Przesuwanie lub kopiowanie grupy pomieszczeń** zachowuje połączone ściany spoza grupy połączone.
- **Ponowienie zachowuje tożsamość wymiaru ściany.**
- **Wybór ściany przy wyłączonym Rysuj** już nie powoduje błędu we Właściwościach.
- **Render przełącza się na WebGL**, gdy karta graficzna nie może się uruchomić, zamiast się zatrzymać.
- **Sprawdzenie EnergyPlus** można znów włączyć.
- **Dokumenty otwierają się jako wyśrodkowane okno dialogowe.** {{key:Esc}}, X albo kliknięcie w przyciemnioną stronę je zamyka.
- **Przyciski {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}} pokazują się**, gdy tylko model jest otwarty, a nie dopiero po tym, jak włączono Rysuj choć raz.

## Uczciwe ograniczenia

- Nic nie zostało wydrukowane na prawdziwym sprzęcie. Podpory z żywicy są nowe i niesprawdzone.
- Wyniki wiatru, sejsmiki, betonu i elementów skończonych są pomocami kontrolnymi dla inżyniera, sprawdzonymi względem wzorów zamkniętych, a nie względem prawdziwego budynku.
- Oszacowanie oświetlenia sprawdzono względem naszego własnego śledzenia, a nie względem innych programów oświetleniowych.
- Dane południowoafrykańskie są niezweryfikowane.
- Style połączeń ścian (na styk, na ukos, zrównaj) i priorytet warstw nie są zbudowane; narożniki są cięte na ukos.
- Języki inne niż angielski są wersjami roboczymi tłumaczonymi maszynowo.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wcześniejsze zmiany są w uwagach 0.8 i 0.8.1 niżej na tej stronie.

## Wcześniej: 0.8 i 0.8.1

To jest to, co zmieniło się w BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. BimCraft potrafi teraz odpowiadać na pytania o budynek i go testować: z ludźmi, dźwiękiem, wodą, wiatrem i trzęsieniami ziemi, a także rysować go większą liczbą narzędzi. 0.8.1 to wydanie poprawkowe.

### Nowe

**Testuj budynek**

- **Ludzie w budynku.** Sekcja {{ui:Ludzie w budynku}} lewego panelu przeprowadza ewakuację albo zwykły dzień przyjść przez twoje pomieszczenia, drzwi i schody. Widzisz kolejki tam, gdzie budynek się zwęża, najdłuższą drogę do wyjścia z każdego pomieszczenia i czas ostatniej osoby. Zaznacz {{ui:Zamknięte}} na drzwiach, aby zobaczyć, co się zmieni, i zaznacz {{ui:Pokaż ludzi w widoku 3D}}, aby obserwować idących. Wyniki trafiają do Problemów. To zgrubny model tłumu do decyzji projektowych, a nie certyfikat bezpieczeństwa pożarowego. Zobacz [Przeprowadź ludzi przez budynek](topic:people-in-the-building).
- **Akustyka pomieszczeń i ich odsłuch.** Sekcja {{ui:Akustyka pomieszczeń}} podaje czas pogłosu każdego pomieszczenia w pasmach oktawowych (Sabine i Eyring) z jego rozmiaru i wybranych wykończeń, a przy własnym celu mówi, ile pochłaniania by go spełniło. {{ui:Odtwórz w tym pomieszczeniu}} odtwarza głos, klaśnięcie, szarpane nuty albo twój własny plik dźwiękowy przez odpowiedź impulsową obliczoną dla pomieszczenia. Wartości pochłaniania to typowe publikowane wartości do zastąpienia przez twoje. Zobacz [Akustyka pomieszczeń](topic:room-acoustics).
- **Odtwarzanie powodzi, wiatru i trzęsienia ziemi.** {{ui:Odtwarzanie zagrożeń}} odtwarza wodę wznoszącą się przez pomieszczenia, ciśnienie wiatru na każdej kondygnacji i trzęsienie ziemi wstrząsające kondygnacjami, na rzucie albo elewacji z suwakiem czasu. Proste modele z ich założeniami na panelu; to nie jest sprawdzenie według przepisów. Zobacz [Odtwórz powódź, wiatr lub trzęsienie ziemi](topic:hazard-playback).
- **Co zużywa się w ciągu pięćdziesięciu lat.** {{ui:Widok cyklu życia}} wypisuje okna, drzwi, wykończenia i dach, każde z trwałością, latami wymiany i, gdy wpiszesz koszt za jednostkę, kosztem według roku oraz jego wartością bieżącą. {{ui:Zapisz harmonogram (CSV)}} zapisuje to na zewnątrz. Trwałości to wartości planistyczne. Zobacz [Zobacz, co się zużywa w ciągu pięćdziesięciu lat](topic:life-cycle-view).
- **Sprawdzenia betonu i sejsmiczne.** Bloki {{ui:Elementy betonowe}} i {{ui:Obciążenia sejsmiczne}} w zakładce {{ui:Analiza}} sprawdzają belki i słupy betonowe wg ACI 318-19 i tworzą równoważne siły boczne wg ASCE 7-22 na sztywnych stropach, z dryfem kondygnacji. Do sprawdzenia przez inżyniera. Zobacz [Sprawdzanie elementów betonowych i obciążenia sejsmiczne](topic:concrete-and-seismic).

**Sprawdzaj i raportuj**

- **Sprawdzenie względem IDS.** Wczytaj plik `.ids`, który dał ci klient, i zobacz w Problemach każdy element, który go nie spełnia, zanim dostarczysz IFC. Otwórz {{ui:Sprawdź względem IDS}} w {{ui:Sprawdzanie modelu}}. Zobacz [Sprawdzanie modelu względem IDS klienta](topic:check-against-ids).
- **Znaczniki i zestawienia.** Definiuj własne znaczniki, przypisuj je wielu elementom naraz i twórz zestawienia, których kolumny, filtry i grupy je odczytują; znaczniki są zapisane w IFC. Zobacz [Znaczniki i zestawienia](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} wypełnia szablon specyfikacji z otwartego IFC i zapisuje go jako PDF, dokument Word lub Markdown. Zobacz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porównanie skanu z modelem.** Przy otwartej chmurze punktów {{ui:Porównaj}} ocenia każdy element jako zbudowany, częściowo zbudowany, brakujący lub nieosiągnięty i pokazuje procent wykonania. Zobacz [Porównanie skanu z modelem](topic:compare-scan-with-model).
- **Węgiel i koszt.** Panel Węgiel sumuje węgiel wbudowany z tabeli współczynników, którą możesz edytować, a panel Koszt rozkłada ceny na harmonogram 4D. Współczynniki dołączone do BimCraft są ogólne i oznaczone jako niesprawdzone. Zobacz [Węgiel wbudowany i koszt](topic:embodied-carbon-and-5d-cost).
- **Dowolna projekcja mapy.** {{ui:Zmierz}} › {{ui:Układ współrzędnych…}} przyjmuje numer EPSG, strefę UTM, nazwę albo twoją własną definicję projekcji. Zobacz [Georeferencja z dowolną projekcją](topic:georeference-any-projection).

**Rysuj i edytuj**

- **Przesuń, Wyrównaj i Rozmieść.** W {{ui:Kompilacja}}; {{key:Shift+M}} uruchamia Przesuń (zwykłe {{key:M}} to nadal Zmierz). Przesuń kopiuje w miarę ruchu z {{key:C}}, każdy krok to jedno cofnięcie, a działa w sesji Live TeamWork. Zobacz [Przesuń, kopiuj, wyrównaj i rozmieść](topic:move-align-distribute).
- **Obrazy pod planem.** {{ui:Kompilacja}} › {{ui:Obraz}} umieszcza PNG, JPEG lub WebP pod planem kondygnacji albo na płaszczyźnie pionowej. Ustaw skalę dwoma punktami, a potem przesuwaj, obracaj, wygaszaj i blokuj. Obszar skopiowany w MarkupCraft wkleja się w skali swojego arkusza. Zobacz [Umieść obraz pod planem](topic:pictures-as-backgrounds).
- **Ściany ze skanu.** Przy otwartym skanie ściany, drzwi i pomieszczenia pojawiają się jako propozycje, które zachowujesz lub odrzucasz pojedynczo, w jednym kroku cofnięcia. Znajdowane są tylko ściany w dwóch prostopadłych kierunkach. Zobacz [Zamiana skanu na ściany](topic:scan-to-walls).
- **Śledzenie, pióra i szkicowanie schodów.** {{ui:Śledzenie}} pokazuje inną kondygnację przerywaną linią pod planem, {{ui:Pióra}} daje ścianom, drzwiom i oknom własną grubość linii w jednym widoku, a {{ui:Szkicuj schody}} zamienia linię chodzenia w schody. Otwiera się też siatka Wavefront OBJ. Zobacz [Śledzenie kondygnacji, pióra i schody ze szkicu](topic:trace-pens-stairs-obj).
- **Budynki wokół adresu.** Budynki i działka, które znalazło Adres na teren CivilCraft, pojawiają się jako propozycje; zaznaczasz te, które chcesz dodać. Zobacz [Start od terenu CivilCraft](topic:site-from-civilcraft).
- **Rysunki paneli.** {{ui:Kompilacja}} › {{ui:Rysunki paneli}} wyznacza ściany, stropy i dachy z drewna lub lekkiej stali i zapisuje listę cięcia jako CSV oraz rysunki warsztatowe jako PDF. To wartości wyjściowe, a nie projekt konstrukcyjny. Zobacz [Rysunki paneli](topic:panel-drawings).
- **Paleta symboli i rośliny.** {{ui:Kompilacja}} › {{ui:Paleta symboli}} znajduje symbole elektryczne i instalacyjne po nazwie; źródło {{ui:Rośliny}} z {{ui:Biblioteka}} wypisuje około 400 roślin z symbolami na planie. Zobacz [Paleta symboli](topic:symbol-palette) i [Umieść roślinę](topic:plant-list).

**Rury, kanały i energia**

- **Split, VRF i fan coile.** Jednostki wewnętrzne i zewnętrzne z ich przyłączami oraz linie czynnika dobrane z tabeli typowych przykładowych wartości, które możesz zmienić. Zobacz [Split, VRF i fan coile](topic:split-vrf-fan-coils).
- **Obliczenia.** Panel Obliczenia sprawdza doprowadzenia rur i kanałów wg spadku ciśnienia, prowadzi kable przez korytka i rury oraz pokazuje ich wypełnienie, a oświetlenie liczy z plików IES lub EULUMDAT. Wartości domyślne są oznaczone; wpisz wartości swojej normy. Zobacz [Obliczenia rur, kanałów, kabli i światła](topic:mep-calculations).
- **Pliki PCF.** {{ui:Eksportuj PCF}} narzędzia Rura zapisuje trasy dla programów do analizy naprężeń rurociągów i izometrii, a odczytany plik PCF rysuje swoją rurę. Zobacz [Pliki komponentów rurociągów](topic:piping-pcf).
- **Fotowoltaika.** Montuj układy na dachach lub gruncie, zacieniaj je z modelu, szacuj roczną energię, sprawdzaj stringi i twórz dane schematu jednokreskowego. Moduł startowy i straty są ogólne. Zobacz [Fotowoltaika](topic:solar-pv).
- **Plik EnergyPlus.** Panel Sprawdź z EnergyPlus zapisuje model jako IDF do uruchomienia we własnym EnergyPlus. Uruchamianie w przeglądarce wymaga kompilacji, którą hostujesz sam i której adres wpisujesz; BimCraft jej nie dostarcza. Zobacz [Sprawdź ogrzewanie i chłodzenie w EnergyPlus](topic:check-with-energyplus).

**Obrazy i pliki**

- **Wybierz silnik renderowania.** {{ui:Renderuj}} ma wybór {{ui:Silnik}}. Nasze dwa wbudowane silniki (Szybki i Tracer ścieżek) pozostają domyślne. **Otwórz w** zapisuje scenę jako plik USD lub glTF, a folder projektu Unreal jako .zip; w CadCraft Studio dodatek może dodać silnik. Wtyczka Unreal otwierająca projekt nie jest wydana. Zobacz [Wybierz, który program rysuje obraz](topic:render-engines).
- **Cofanie w Studio.** W CadCraft Studio BimCraft mówi Studio o każdym zakończonym kroku, aby Studio mogło cofnąć twój ostatni krok w tym oknie, którego użyłeś ostatnio. Zobacz [Cofanie między aplikacjami](topic:undo-across-apps).
- **Dodatki w pliku.** IFC zapisuje, które dodatki do niego pisały, i proponuje te, których nie masz, gdy go otwierasz. Zobacz [Dodatki w pliku](topic:add-ons-in-your-file).

**We wszystkich aplikacjach**

- **Połącz swoją AI.** Twój własny asystent może sterować BimCraft przez połączenie Studio i odpowiadać na pytania o model, na przykład które pomieszczenia leżą pod danym obszarem. Studio nie ma własnej AI. Zobacz [Pozwól asystentowi AI pracować z twoim modelem](topic:assistants).
- **Paski narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje Zawijaj, 2 wiersze lub 1 wiersz; Zawijaj pozostaje domyślne.
- **Urządzenia wejściowe.** Ustawienia gładzika, pióra, myszy 3D, kontrolera i MIDI są wspólne dla wszystkich aplikacji.
- **Problemy i Live.** Panel ostrzeżeń i sesje Live działają jak dotąd, a nowe sprawdzenia powyżej zasilają Problemy.
- **Języki.** 54 języki, z czego dziesięć nowych. Inne niż angielski są wersjami roboczymi tłumaczonymi maszynowo, jeszcze nieprzeczytanymi przez native speakera; tematy pomocy są głównie po angielsku.

### Naprawione w 0.8.1

- **Układ Wstążka + Przeglądarka projektu.** Wstaw › Importuj CAD, Wstaw › Obraz i Zarządzaj › Jednostki projektu mówiły „Jeszcze nie zbudowano w BimCraft”. Obraz teraz otwiera narzędzie Obraz, Importuj CAD otwiera {{ui:Kompilacja}} › {{ui:Z rysunku…}} (DWG, DXF, PDF lub skan), a Jednostki projektu otwierają {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Jednostki}}. Przesuń i Wyrównaj uruchamiają narzędzia Przesuń i Wyrównaj, Poziom otwiera {{ui:Dodaj poziomy…}}, Fazy otwierają sekcję Fazy przebudowy, a Materiały otwierają bibliotekę materiałów.
- **Klasy DWG.** Sekcja została odczytana jako zły typ; naprawiono to w BimCraft i w innych aplikacjach, które czytają DWG.
- **Język w czasie działania.** Studio i spakowane wersje mogą teraz zmienić język bez ponownego uruchomienia. Nie przetestowano tego jeszcze na każdej platformie; daj znać, jeśli język się nie zmienia.
- **Skrypt pakietu Archicad.** `archicad_bundle.py`, osobne pobieranie, teraz znajduje ścieżkę Archicad, obserwuje folder przez do 20 sekund i ponawia próbę obok pakietu.

### Jeszcze nie w tej wersji

- **Narzędzia bezpieczeństwa i projektowe.** Ludzie w budynku nie mają limitu drogi ewakuacyjnej z przepisów budowlanych (sam go wpisujesz) i nie zostali sprawdzeni ręcznie na prawdziwym rzucie. Wartości akustyki, cyklu życia i zagrożeń są planistyczne, a nie sprawdzeniem zgodności z przepisami.
- **Klimat przyszłości i EnergyPlus.** Brak wbudowanych scenariuszy klimatycznych: możesz wczytać plik scenariusza dla przebiegu powodzi. Przebieg EnergyPlus w przeglądarce nie jest częścią tego wydania.
- **Układ wstążki.** Zestawienie materiałów pozostaje „Nie zbudowano”, bo BimCraft nie ma listy ilości materiałów, a 54 inne wyszarzone narzędzia wstążki nie mają jeszcze za sobą narzędzia BimCraft.
- **Podpisywanie i platformy.** Instalatory Windows i pliki .dmg dla macOS nie są podpisane, więc SmartScreen pokazuje {{ui:Więcej informacji}}, potem {{ui:Uruchom mimo to}}, a macOS wymaga kliknięcia prawym przyciskiem i {{ui:Otwórz}}. Wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Testy na prawdziwych stronach.** Niektóre starsze testy przeglądarkowe BimCraft nadal nie przechodzą na naszej stronie testowej, tak jak przed 0.8.1.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wcześniejsze zmiany są w [Co nowego w wersji 0.7](topic:whats-new-0-7).
