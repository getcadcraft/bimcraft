---
title: Analiza ramy konstrukcyjnej
summary: Siły, reakcje i ugięcia belek, słupów i stężeń modelu przy przypadkach obciążeń i kombinacjach, które ustawiasz, zapisane w IFC. Pomoc analityczna, a nie sprawdzenie zgodności z normą.
keywords: analiza, jednostki, stopy i cale, jednostka wyświetlania, analiza konstrukcji, sprawdzenia projektowe, wykorzystanie, walcowane, spawane, AISC 360, EN 1993-1-1, analiza ramy, model analityczny, metoda sztywności, obciążenia, przypadek obciążenia, kombinacja, obciążenie stałe, obciążenie użytkowe, ciężar własny, reakcje, moment zginający, ścinanie, siła osiowa, ugięcie, kształt ugięty, podpory, przegubowe, utwierdzone, zwolnienie, raport, pdf, csv, craftscript, frame3d, belki, słupy, pręty
from: b93b58c4
---

Karta {{ui:Analiza}} po prawej stronie znajduje siły w belkach, słupach i stężeniach otwartego modelu, reakcje u stóp słupów oraz to, jak bardzo pręty się uginają, dla obciążeń, które podasz.

:::warning
To **pomoc analityczna, a nie sprawdzenie zgodności z normą**. Analiza nie stosuje normy projektowej: nie dobiera wymiarów elementów ani nie sprawdza nośności i nie dobiera współczynników obciążeń. Inżynier sprawdza model analityczny, jego obciążenia i podpory oraz decyduje, co oznaczają wyniki. Blok {{ui:Sprawdzenia projektowe}} poniżej sprawdza walcowane kształtowniki stalowe typu I według AISC 360 lub EN 1993-1-1 i jest pomocą, dopóki inżynier go nie przejrzy: zob. [Sprawdzenia projektowe](topic:frame-analysis#design-checks).
:::

## Uruchamianie

1. Otwórz model IFC i kartę {{ui:Analiza}}.
2. Wybierz w widoku co najmniej jedną belkę, słup lub stężenie, wybierz {{ui:Przypadek}}, {{ui:Obciążenie}} i {{ui:Kierunek}}, wpisz wartość i naciśnij {{ui:Dodaj obciążenie}}: kN/m dla obciążenia rozłożonego wzdłuż pręta, kN dla siły skupionej.
3. Naciśnij {{ui:Uruchom analizę}}.

Tabela zawiera dla każdego pręta największą siłę osiową, siły tnące, momenty zginające, skręcanie i ugięcie; kliknij nazwę pręta, aby wybrać go w widoku. Poniżej są reakcje. {{ui:Na modelu}} rysuje kształt ugięty albo jedno z oddziaływań jako wykres obok każdego pręta. Wyniki tracą aktualność, gdy model się zmieni: uruchom analizę ponownie.

Każde obciążenie i ustawienie to jedna zmiana na liście {{ui:Zmiany}}: {{ui:Cofnij}} cofa ją, a {{ui:Zapisz jako IFC}} zachowuje je w pliku (zestaw właściwości projektu `CadCraft_Analysis`), więc przy następnym otwarciu modelu tutaj jego obciążenia są nadal na miejscu.

## Jak powstaje model analityczny

- Każdy IfcBeam, IfcColumn i IfcMember, którego kształt jest jedną prostą wyciągniętą bryłą, staje się prętem na linii środka przekroju. Jego własności przekroju pochodzą z profilu: kształty I, U, L i T, prostokąty i rury, okręgi i rury okrągłe albo dowolny zamknięty obrys (wtedy stała skręcania jest oszacowaniem, o czym podaje raport). Wszystko inne jest pomijane i zliczane.
- W modelu belki kończą się na licu słupa i leżą poniżej podłogi. Każdy koniec pręta jest przesuwany wzdłuż własnej linii na oś pręta, do którego się opiera, gdy ta oś jest blisko (w granicach rozmiaru przekrojów), a ten pręt zostaje tam podzielony. Raport podaje, ile końców zostało przesuniętych.
- **Stopy słupów**, pod którymi nic nie leży, są podporami: utwierdzone (początek) lub przegubowe (utrzymane w miejscu i przed skręcaniem, swobodne w obrocie).
- **Końce belek** są sztywne lub przegubowe według reguły {{ui:Końce belek bez połączenia}}; **stężenia** (IfcMember) są przegubowe na obu końcach. Wybierz jeden pręt, aby nadać jego końcom lub stopie słupa własną regułę.
- Materiały po nazwie: beton (E = 30 GPa), drewno (E = 11 GPa), w pozostałych przypadkach stal (E = 200 GPa).

Jeśli rama może się przesuwać bez zginania czegokolwiek — mechanizm — analiza zatrzymuje się i podaje, gdzie i w którą stronę.

## Przypadki, kombinacje, znaki i raport

Analiza zaczyna od **Stałe** (ciężar własny), **Użytkowe** i **Stałe + użytkowe**; dodaj przypadki i kombinacje z współczynnikami, których wymaga twoja norma projektowa. N > 0 oznacza rozciąganie; My > 0 powoduje, że lokalna strona −z pręta jest rozciągana (belka uginająca się pod grawitacją ma My > 0). {{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} zawierają założenia, przekroje, przypadki, reakcje wraz z ich sumami, siły w prętach, przemieszczenia i obwiednię. {{ui:Eksportuj jako CraftScript}} zapisuje ramę dla obszaru roboczego Skrypt w PartCraft, gdzie funkcja biblioteczna `frame3d` rozwiązuje ją w czytelnym kodzie.

Metoda to bezpośrednia metoda sztywności, liniowa i pierwszego rzędu, chyba że zaznaczysz Drugi rząd (P-Delta), sprawdzona na przypadkach z podręczników.

**Drugi rząd (P-Delta).** Zaznacz *Drugi rząd (P-Delta)* obok {{ui:Uruchom analizę}}: każda kombinacja jest rozwiązywana ponownie, przy siłach osiowych prętów działających na odkształconą ramę (każdy pręt podzielony na 4 części, więc zginanie pręta między jego końcami też się liczy), aż siły osiowe się ustabilizują. Wiersz wyniku podaje liczbę przebiegów i to, o ile wzrosło przesunięcie boczne; momenty, ugięcia, sprawdzenia projektowe i raport korzystają wtedy z tych wyników. Powyżej sprężystego obciążenia krytycznego ramy analiza zatrzymuje się i to podaje. Jest sprężysta przy małych obrotach, tylko zginana, bez redukcji sztywności i obciążeń zastępczych (sama w sobie nie jest metodą analizy bezpośredniej AISC); płyty, ściany i sztywne tarcze stropowe pozostają w pierwszym rzędzie.

**Ciśnienie na płytach stropowych.** Dla płyt betonowych (analiza odczytuje płytę jako płyty, gdy jej materiałem jest beton) blok Obciążenia ma {{ui:Ciśnienie na każdej płycie}}: wpisz kN/m², wybierz przypadek powyżej i naciśnij {{ui:Dodaj do płyt}}. Jest rozkładane na każdej płycie, którą analiza znalazła, skierowane w dół, i wymienione z łączem Usuń. To jedno ciśnienie dla wszystkich płyt, a nie po jednym na płytę, i nie jest obciążeniem normowym: wpisz wartość, którą poda twój inżynier.

**Częstości własne (elementy skończone).** Blok {{ui:Elementy skończone: częstości własne}} pod wynikami wyznacza najniższe postacie tego samego modelu silnikiem elementów skończonych: belki z ich zwolnieniami końców, płyty i ściany jako płaskie powłoki czterowęzłowe, sztywne tarcze stropowe i podpory. Wybierz liczbę postaci (3, 6, 10 lub 20) oraz element płyty (powłoka czterowęzłowa dla grubych lub cienkich płyt albo element cienkiej płyty) i naciśnij {{ui:Wyznacz częstości}}. Tabela podaje częstość każdej postaci w Hz, jej okres w sekundach oraz jej efektywną masę modalną wzdłuż X, Y i Z jako udział masy, która może się poruszać; {{ui:Pokaż na modelu}} rysuje każdą postać tak, jak rysowany jest kształt ugięty. Masa to gęstość materiału razy objętość: obciążenia nie dodają masy, a materiał bez gęstości jej nie ma. Raport (PDF, CSV) zawiera tabelę. Jest sprężysta i tylko dla małych przemieszczeń; żadne obciążenie sejsmiczne ani wiatrowe nie jest tu tworzone z normy. Nie jest sprawdzeniem zgodności z normą; wyniki przegląda inżynier.

**Spektrum odpowiedzi, historia czasowa i pushover.** Pod częstościami są trzy kolejne bloki, korzystające z tego samego modelu elementów skończonych. Masa dla wszystkich z nich to gęstość materiału plus obciążenia pionowe w dół zaznaczonych przez ciebie przypadków, każde pomnożone przez współczynnik, który wpiszesz (na przykład Stałe przy 1, a Użytkowe przy udziale, który liczysz jako masę).

{{ui:Spektrum odpowiedzi}} odczytuje każdą postać z podanego przez ciebie spektrum (tabeli okresu i przyspieszenia albo kształtu ASCE 7 z SDS, SD1 i TL; przycisk {{ui:Użyj wartości z bloku Sejsmiczne}} kopiuje je z bloku {{ui:Sejsmiczne}}) i łączy postacie metodą CQC, SRSS, reguły dziesięciu procent lub sumą bezwzględną, po czym składa kierunki X, Y i Z (100 % + 30 % lub SRSS). Podaje ścinanie u podstawy, dryfty kondygnacji, siły na końcach prętów oraz tabelę postaci, która ostrzega, gdy użyte postacie niosą mniej niż 90 % masy. Wyniki można przeskalować współczynnikiem lub do wpisanego przez ciebie ścinania u podstawy; blok nigdy sam nie oblicza tego ścinania. Wyniki nie mają znaku.

{{ui:Historia czasowa}} przykłada przyspieszenie gruntu metodą superpozycji modalnej (dokładną dla prostoliniowych odcinków zapisu między punktami) albo przez całkowanie bezpośrednie (metoda średniego przyspieszenia Newmarka z tłumieniem Rayleigha). Wejściem jest wymyślona sinusoida lub impuls (zawsze oznaczone jako syntetyczne), zapis, który wklejasz, albo otwierany plik tekstowy (czas i przyspieszenie, jedno przyspieszenie w wierszu z krokiem, albo plik w stylu PEER z nagłówkiem DT=; w g lub m/s²). Podaje przemieszczenie dachu i ścinanie u podstawy w czasie, dryft każdej kondygnacji oraz obwiednię sił na końcach prętów. Modele z bardzo długim zapisem zachowują go tylko na czas sesji.

{{ui:Pushover}} pcha dach na boki małymi krokami (kształt jak pierwsza postać albo równomiernie), z przegubami plastycznymi na końcach prętów o kształcie I. Przegub uplastycznia się przy momencie plastycznym, który maleje wraz ze wzrostem siły osiowej (wyliczanym z narysowanego kształtu, z pominięciem zaokrągleń); wzmocnienie jest opcjonalne, P-delta jest opcjonalne, a kombinację grawitacyjną można zastosować najpierw. Podaje krzywą nośności (ścinanie u podstawy względem przemieszczenia dachu), pierwszy przegub oraz stan i obrót plastyczny każdego przegubu. {{ui:Uruchom nieliniową historię czasową}} uruchamia te same przeguby pod zapisem z bloku Historia czasowa na małych modelach. Przeguby tworzą się tylko na końcach prętów (tam, gdzie ma się utworzyć przegub w przęśle, wstaw węzeł); pręt zwolniony na obu końcach ich nie ma, a uplastycznianie i wyboczenie stężeń nie są modelowane; płyty i ściany pozostają sprężyste; nie podano kryteriów akceptacji. Nie jest sprawdzeniem zgodności z normą; wyniki przegląda inżynier. Ustawienia są zapisywane z modelem, a raport zawiera tabele.

Jeszcze nie zbudowano: wyboczenie, poprawka brakującej masy dla spektrum odpowiedzi, skalowanie zapisów, kryteria akceptacji przegubów (odpowiedź dynamiczna jest, powyżej), obciążenia powierzchniowe inne niż jedno ciśnienie na każdej płycie, przesunięcia prętów, stężenia pracujące tylko na rozciąganie, ściany i płyty w ramie, sprawdzenia normowe spawanych kształtów oraz przekrojów innych niż walcowane kształtowniki I. Zob. [Jeszcze nie zbudowano](topic:not-built-yet).

## Jednostki

Długości podążają za jednostką wybraną na pasku narzędzi ({{ui:Jednostki}}), jak reszta BimCraft: położenia obciążeń, które wpisujesz i widzisz ({{ui:Pochodzenie}}, {{ui:Do}}, {{ui:Na}}), punkty obciążeń węzłowych i reakcji, wysokości kondygnacji w {{ui:Sejsmiczne}}, a także kolumny ugięcia i dryftu (stopy i cale pokazują te małe długości w dziesiętnych calach). Zmień jednostkę w dowolnym momencie; karta odrysuje się. Siły pozostają w kN i kN·m, a raport (PDF, CSV) oraz plik CraftScript pozostają w milimetrach z zapisaną jednostką. Rozmiary przekrojów, średnice prętów i otulina w bloku {{ui:Beton}} pozostają w milimetrach, zgodnie z ich nazwami.

## Sprawdzenia projektowe

Blok {{ui:Sprawdzenia projektowe}} (taki sam jak w DetailCraft) przyjmuje {{ui:Norma projektowa}}, ASCE 7 + AISC 360 albo EN 1990 + EN 1993-1-1, oraz {{ui:Gatunek stali}}. Nadaj każdemu przypadkowi obciążenia jego rodzaj (stałe, użytkowe, wiatrowe …), a {{ui:Utwórz kombinacje}} zapisuje kombinacje obciążeń z normy z twoich przypadków; analiza uruchamia je potem jak każdą kombinację.

{{ui:Sprawdź elementy}} następnie sprawdza każdy **walcowany stalowy kształt I** za pomocą sprawdzeń DetailCraft (rozciąganie, ściskanie z wyboczeniem, zginanie ze zwichrzeniem, ścinanie, zginanie z siłą osiową, ugięcie; punkty normy są w raporcie) i pokazuje, jaką część nośności wykorzystuje, kolorowane na modelu. Jest to **pomoc, dopóki inżynier jej nie przejrzy**.

**Które pręty są sprawdzane.** Profil IFC nie mówi, czy stalowy kształt I jest walcowany czy spawany, więc BimCraft uznaje go za walcowany tylko wtedy, gdy nazwa jego profilu (a jeśli jej brak, nazwa typu elementu) jest rozmiarem z tabel AISC W lub S albo z tabel EN 10365 IPE, HEA lub HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **i** wysokość, szerokość, środnik i półka w pliku odpowiadają temu rozmiarowi w granicach 1 %. Każdy inny kształt I (blachownica, rozmiar pod inną nazwą, zmieniony rozmiar) jest traktowany jako spawany i wraca jako **niesprawdzony**, podobnie jak rury, kątowniki, ceowniki i inne przekroje, smukłe części oraz skręcanie. Te pręty sprawdź z inżynierem.
