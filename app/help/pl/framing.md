---
title: Konstrukcja ścian, stropów i dachów
summary: Generuj słupki, rygle, nadproża, belki stropowe, krokwie lub kratownice z modelu i zachowaj je przy nim; są odtwarzane, gdy zmieniają się ściany, otwory, stropy lub dach, a zestawienie Tarcica jest listą cięcia.
keywords: TJI, I-joist, tabela rozpiętości belek, załaduj tabelę, konstrukcja, szkielet, słupek, rygiel, nadproże, słupek królewski, słupek pomocniczy, podwalina, narożnik, narożnik kalifornijski, trójnik, belka stropowa, belka obwodowa, belka otworowa, krokiew, krokiew pomocnicza, krokiew dolinowa, deska kalenicowa, belka sufitu, ściąg, kratownica, tarcica, lista cięcia, stopy deski, rozstaw, rozstaw osiowy, 2x4, 2x6
from: 76d0ffb5
---

## Co zrobisz

Wykonaj konstrukcję budynku z tego, co narysowano. BimCraft układa słupki, rygle i nadproża w ścianach, belki stropowe w stropach oraz krokwie (lub kratownice) w dachu, dobiera ich przekroje z oznaczonych tabel domyślnych, zachowuje je z modelem i odtwarza za każdym razem, gdy zmienia się to, co konstruują. Zestawienie **Tarcica** jest listą cięcia.

## Wykonaj konstrukcję

1. Na kondygnacji otwórz {{ui:Kompilacja}} i wybierz {{ui:Konstrukcja}}.
2. Wybierz **rozstaw** (16" lub 24" osiowo; 400 lub 600 mm), **narożniki** (trzy słupki lub kalifornijski), **Krokwie** lub **Kratownice** dla dachów oraz to, czy ściany mają otrzymać rząd **usztywnień** w połowie wysokości. Dla stropów wybierz **Tarcicę** lub **TJI (wstępnie)** i ustaw kierunek belek na automatyczny, plan X lub plan Y.
3. Kliknij **Wykonaj szkielet każdej ściany** albo kliknij jedną ścianę, strop lub dach (na kondygnacji, na której stoi dach), aby skonstruować tylko tę część.

Wyłącz **Pokaż konstrukcję**, aby ukryć wszystkie elementy konstrukcji, jak warstwę; **Przezroczystość** ukrywa ściany, stropy i dachy, które mają konstrukcję, abyś mógł oglądać samą konstrukcję.

## Co otrzymujesz

- **Ściany**: dolny rygiel (przycinany przy drzwiach), podwójny górny rygiel, słupki rozmieszczone od początku ściany, słupki królewskie i pomocnicze oraz nadproże przy każdych drzwiach i oknach, niskie słupki nad nadprożami i pod oknami, zgrubny parapet pod oknami, narożniki tam, gdzie ściany się spotykają (ściana, która biegnie przez, bierze słupki narożne), dwa słupki wsparcia tam, gdzie wpina się ściana prostopadła, oraz usztywnienia między słupkami.
- **Stropy**: belki biegnące w krótszym kierunku stropu domyślnie albo wzdłuż wybranej osi planu; belki obwodowe wokół krawędzi oraz podwójne belki otworowe i nadproża wokół klatki schodowej, z belkami przechodzącymi przez nią przyciętymi krótko (belki ogonowe). Tryb TJI wybiera najmniejszą wymienioną serię i wysokość, która osiąga zmierzoną rozpiętość swobodną przy wybranym rozstawie.
- **Dachy**: zwykłe krokwie prostopadłe do każdego okapu, krokwie pomocnicze tam, gdzie kalenice i doliny je przecinają, krokwie narożne i dolinowe, deski kalenicowe, belki sufitowe na rygielach i ściągi kleszczowe — albo proste kratownice w rozstawie, po jednym elemencie każda.

## Zmiana

Wybierz dowolny element konstrukcji w widoku 3D lub w drzewie modelu. **Właściwości** pokazują jego konstrukcję: zmień rozstaw, typ i kierunek belek stropowych, narożniki, usztywnienia lub konstrukcję dachu. Przesuwanie ścian, drzwi i okien albo zmiana stropu lub dachu sprawia, że konstrukcja jest wykonywana ponownie samodzielnie.

Aby zachować element umieszczony celowo, gdy konstrukcja jest wykonywana ponownie, wybierz go i wybierz **Zachowaj ten element, gdy konstrukcja jest wykonywana ponownie**. Zachowany element pozostaje na miejscu; gdy konstrukcja wokół niego się zmienia, jest oznaczany, abyś mógł go sprawdzić.

## Stropy TJI z załadowanej tabeli

BimCraft nie zawiera tabel rozpiętości producentów belek (należą do producenta i zmieniają się z każdą edycją). Wybierz konstrukcję stropu, ustaw **Belki stropowe** na **TJI (wstępnie)** i wybierz **Załaduj tabelę…** we **Właściwościach**: plik w formacie `cadcraft-tji-table`, JSON lub CSV, który sporządziłeś z aktualnych tabel rozpiętości producenta. Podaje on producenta, produkt i edycję oraz to, skąd pochodzą liczby, i wymienia dla każdego przypadku obciążenia (obciążenie użytkowe, obciążenie stałe, dopuszczalne ugięcie, długość oparcia) największą rozpiętość swobodną każdej serii i wysokości przy każdym rozstawie.

- BimCraft bierze **rozpiętość swobodną** stropu, wybiera najpłytszą wysokość, a w niej serię, której podana rozpiętość sięga dla wybranego rozstawu i przypadku obciążenia, i konstruuje strop nią. Jeśli rozpiętość lub rozstaw jest spoza tabeli, komunikuje to i niczego nie zmienia.
- Obciążenia, dopuszczalne ugięcie, długość oparcia, tabela oraz zdanie „Wstępne wskazówki układu; ostateczny dobór wymaga tabel producenta i obciążeń projektu” są drukowane na zestawieniu Tarcica, zapisywane w modelu razem z konstrukcją i wymieniane w panelu **Problemy** jako uwaga. Tabela oznaczona jako przykładowa zawiera ostrzeżenie.
- Gdy włączony jest dodatek **Przepisy budowlane**, jego reguła dla belek stropowych też odczytuje załadowaną tabelę; bez tabeli belki TJI są pomijane w tym sprawdzeniu, jak dotychczas.
- Tabela pozostaje w tej przeglądarce, dopóki jej nie wyczyścisz lub nie załadujesz innej. Plik: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: cale, stopy, psf; lub `metric`: mm, metry, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) oraz `rows` (`series`, `depth`, `spans`: dla każdego id przypadku rozstaw i największa rozpiętość swobodna, na przykład `"16": "15-6"`). W CSV te same dane to linie `# klucz = wartość`, a następnie `series,depth,case,spacing,span`.
- Bez załadowanej tabeli układ TJI jest odrzucany i nic się nie zmienia: **Załaduj tabelę TJI: tabele producentów należą do nich i nie są wbudowane.** Model skonstruowany starszą wbudowaną tabelą TJI (sprzed tej zmiany) zachowuje każdą belkę, jaką ma; Właściwości i Problemy mówią, że tabela jest potrzebna, a strop można wykonać ponownie po załadowaniu jednej. Belki z litego drewna działają jak dotąd.

To wskazówki dotyczące układu. Ostateczny dobór belek wymaga tabel producenta, obciążeń projektu i inżyniera.

## Lista cięcia

W panelu Zestawienia wybierz **Tarcica**: każdy element konstrukcji pogrupowany według rozmiaru i według długości handlowej, którą byś kupił (pełne długości co 2' od 8'; co 600 mm przy milimetrach), z liczbą sztuk i stopami deski (board feet). **CSV** pobiera ją.

:::warning
Wymiary nadproży, belek, krokwi i belek sufitowych pochodzą z oznaczonych tabel domyślnych dla typowego domu jedno- lub dwukondygnacyjnego, a nie z obliczeń inżynierskich. **Właściwości** informują, gdy rozpiętość lub otwór wykracza poza tabelę. Projektant lub inżynier sprawdza rozpiętości, obciążenia i połączenia.

Układy TJI korzystają tylko z tabeli, którą załadujesz i sporządzisz z aktualnych tabel rozpiętości producenta; BimCraft żadnej nie dostarcza. Sugestia nie sprawdza oparcia, obciążeń punktowych, wsporników, otworów, nadproży klatek schodowych ani połączeń, a kształt I w modelu jest schematyczny.
:::

## Co jest zapisywane

Każda skonstruowana ściana, strop lub dach jest zespołem elementów IFC („Konstrukcja”) złożonym z elementów IFC typu IfcMember (słupki, rygle, krokwie, ściągi, usztywnienia, kratownice) oraz belek IfcBeam (nadproża, belki stropowe, obwodowe, deski kalenicowe), każdy z własnym rozmiarem, długością i stopami deski.
