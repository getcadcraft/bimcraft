---
title: Kształty ścian, podział, przesunięcie, rozciąganie i blokada
summary: Rysuj ściany jako prostokąt, wielokąt, łuk, na wskazanych liniach albo wokół zarysu; dziel je, wyjmuj fragment, przesuwaj, rozciągaj oknem, wyrównuj i blokuj względem siebie, wymiaru albo linii siatki. Każda zmiana zachowuje połączenia ścian i jest jednym krokiem cofnięcia.
keywords: zamień typ, zmień typ, co się przesunęło, lod, poziom rozwoju, styl połączenia, na ukos, na styk, zrównaj, przytnij, zakończ, połącz, wolny koniec, priorytet warstw, rdzeń, priorytet, węzeł, prostokąt, obrócony prostokąt, wielokąt, wpisany, opisany, łuk, środek, styczny łuk, wskaż linie, obrys, różdżka, podział, przerwa, usuń fragment, połącz ponownie, przesunięcie, kopia, rozciąganie oknem, zaznaczenie, wyrównaj, blokada, kłódka, więzy, zablokuj wymiar, edytuj wymiar, siatka, zablokuj do siatki, przesuń linię siatki, wyłącz połączenie, wolnostojący, powiększaj od, mierz od, linia środkowa, wewnętrzne lico, zewnętrzne lico, Alt
from: 5b7d2f75
---

## Co zrobisz

Twórz i zmieniaj ściany przepisami narzędzia ściany. Każdy kończy się tak samo jak rysowanie ściany przez jej narożniki: narożniki łączą się same, połączenia są zapisywane w pliku, a cała zmiana to jeden krok w **Zmiany**, który cofa {{ui:Cofnij}}. Ściany zachowują swoją tożsamość: ściana, którą podzielono, przesunięto lub rozciągnięto, pozostaje tą samą ścianą, z jej drzwiami, oknami i wymiarami.

## Narysuj prostokąt, wielokąt lub łuk

Przy włączonym {{ui:Rysuj}} otwórz {{ui:Kształty}} w grupie Rysuj (albo wybierz kształt na liście **Kształt** w wierszu Ściana). Wiersz Ściana pokazuje typ ściany, odniesienie rysunku, zewnętrzną stronę i górę, jak przy narzędziu {{ui:Ściana}}. Potem kliknij lub wpisz punkty (x,y · @dx,dy · @length<angle · długość wzdłuż wskaźnika):

- **Prostokąt**: dwa przeciwległe narożniki. Cztery ściany, cztery połączone narożniki, jeden krok.
- **Obrócony prostokąt**: miejsce, gdzie zaczyna i kończy się pierwszy bok (to ustala jego obrót i długość), potem trzecie kliknięcie dla drugiego boku.
- **Wielokąt**: środek, potem narożnik (**Wpisany**) albo środek boku (**Opisany**). Najpierw ustaw **Boki** (od 3 do 64).
- **Łuk, środek**: środek, początek (to ustala promień), koniec. **Kierunek**: krótszą drogą, przeciwnie do ruchu wskazówek zegara lub zgodnie z nim. Łuk obejmujący trzy ćwiartki okręgu rysowany jest jako dwie ściany.
- **Łuk styczny**: kliknij koniec ściany, potem miejsce, gdzie łuk się kończy. Łuk wychodzi z końca ściany w jej własnym kierunku.

Zamknięty kształt ma zewnętrzną stronę skierowaną na zewnątrz. Narysowany na **Zewnętrznym licu** albo **Wewnętrznym licu** — lico, które klikniesz, pozostaje na miejscu.

## Ściany na już istniejących liniach

- **Wskaż linie**: kliknij linię, a ściana pójdzie po niej. Naciśnij {{key:Tab}} (lub przytrzymaj {{key:Shift}} przy klikaniu), aby wziąć cały łańcuch linii połączonych końcami. Linie to linie rysunkowe tego widoku, odniesienie śledzenia i linie siatki.
- **Obrys**: kliknij wewnątrz obszaru zamkniętego tymi liniami albo ścianami. Ściany biegną dookoła najmniejszego obszaru wokół kliknięcia.

## Ustaw przed rysowaniem: przesunięcie i połączenie

Wiersz Ściana ma jeszcze dwa pola, używane przez narzędzie {{ui:Ściana}} i kształty:

- **{{ui:Przesunięcie}}**: ściany rysowane są w tej odległości od klikniętej linii: + w jej lewo, − w prawo, patrząc tak, jak rysujesz.
- **{{ui:Połączenie}}**: odznacz, aby rysować ściany wolnostojące. Ich końce dostają **Wyłącz połączenie** i pozostają wolne, gdziekolwiek pójdą (zobacz [Zmiana ściany](topic:change-a-wall-or-door)).

## Podziel, wyjmij fragment, połącz ponownie

Otwórz {{ui:Ściany}} w grupie Edycja.

- **{{ui:Podziel}}**: kliknij ścianę tam, gdzie ma być przecięta, albo wpisz odległość od jej początku. W pobliżu przecinającej ściany przecięcie przyciąga się do miejsca, w którym się spotykają. Dwie części mają ten sam typ i pozostają połączone końcami. {{ui:Przerwa}} zostawia odstęp o tej długości wyśrodkowany na przecięciu. {{ui:Wolne końce}} natomiast daje końcom cięcia wyłączone połączenie (Ustawienia › BimCraft › Ściany › **Gdy ściana jest dzielona** ustawia, który jest zaznaczony na starcie). Drzwi lub okno idą z częścią, w której stoją; cięcie przez nie zostaje odrzucone.
- **{{ui:Usuń fragment}}**: kliknij, gdzie fragment się zaczyna i gdzie się kończy. Drzwi w tym fragmencie idą razem z nim.
- **{{ui:Połącz ponownie}}**: kliknij dwie części jednej ściany (w linii, tego samego typu). Znów stają się jedną ścianą, tą, którą klikniesz jako pierwszą, z drzwiami obu.

## Styl połączenia, wyłączone połączenie, priorytet warstw

Otwórz {{ui:Ściany}} w grupie Edycja.

- **Styl połączenia**: kliknij narożnik, w którym kończą się dwie proste ściany. Każde kliknięcie przechodzi do kolejnego stylu: **Na ukos** (oba końce cięte wzdłuż linii od narożnika wewnętrznego do zewnętrznego; tak zaczyna się każdy narożnik), **Na styk** (jedna ściana biegnie aż do zewnętrznego lica drugiej, która się o nią opiera) oraz **Zrównaj** (jak na styk, a ściana, która biegnie, kończy się prostopadle; pod kątem prostym wygląda jak na styk). **Dalej** albo {{key:Tab}} czyni drugą ścianę tą, która biegnie dalej. Lista **Styl** na pasku pokazuje narożnik, który kliknąłeś ostatnio. Te same dwa wybory są we **Właściwościach** jednej ściany: **Styl połączenia na początku / na końcu** oraz **Przechodzi**. Każda zmiana to jeden krok w **Zmiany**. Rzut, bryła 3D, pomieszczenia i ilości podążają za zmianą.
- Przy T ściana, której bok jest dotykany, zawsze biegnie dalej. Gdy dwie ściany się krzyżują, kliknięcie (albo **Ciągła w miejscu przecięcia** we Właściwościach) określa, która jest ciągła; to decyduje, której ściany warstwy są rysowane przez przecięcie.
- Styl należy do połączenia: zostaje, gdy ściany się przesuwają, i znika tylko wraz z połączeniem (ściana zostaje usunięta, podzielona na tym końcu albo jej koniec dostaje wyłączone połączenie). Narożnik z zakrzywioną ścianą albo tam, gdzie spotyka się trzy lub więcej ścian, zachowuje cięcie na ukos. Narożnik ostrzejszy niż około 30 stopni albo płaskszy niż około 150 również wraca do cięcia na ukos.
- **Wyłącz połączenie**: kliknij w pobliżu końca ściany. Ten koniec zostaje uwolniony: nie łączy się z niczym, gdziekolwiek ściana się przesunie, dopóki go znów nie kliknisz. Wolne końce są oznaczone krzyżykiem, gdy narzędzie jest włączone. Ten sam przełącznik to **Połącz na początku / Połącz na końcu** we Właściwościach.
- **{{ui:Priorytet warstw}}**: tam, gdzie spotykają się ściany z warstwami, mocniejsza warstwa tnie słabszą, więc rdzenie łączą się z rdzeniami, a wykończenie zatrzymuje się o mocniejszą warstwę. Każda warstwa ma priorytet od 0 do 999; domyślnie wynika z funkcji warstwy (konstrukcja 800, podłoże 600, izolacja 400, membrana 300, wykończenie 200, szczelina 100). Priorytet warstwy otwiera przegrodę ściany, gdzie kolumna **Priorytet** ustawia własną liczbę warstwy. Warstwy o równym priorytecie zatrzymują się o siebie, a linia rysowana jest tylko między różnymi materiałami. Widać to w rzutach w szczegółowości **Średniej** lub **Dokładnej**, w narożnikach, przy połączeniach T i przecięciach dwóch prostych ścian; Ustawienia › BimCraft › Ściany › **Czyść warstwy ścian tam, gdzie się spotykają** wyłącza to. Zmienia to tylko to, co rysowane jest wewnątrz ścian: zarysy ścian i ilości zostają takie, jakie daje im styl połączenia.

## Zamień typ wielu ścian

Przejście od szkicowych rzutów do rysunków roboczych to głównie zmiana typu: ściana ogólna staje się konkretną budową. Niczego nie rysujesz od nowa.

1. Wybierz ściany (jedną lub wiele, z {{key:Ctrl}} lub {{key:Shift}}).
2. We **Właściwościach** naciśnij **Zamień typ…** pod Typ ściany (albo otwórz {{ui:Ściany}} w grupie Edycja i wybierz {{ui:Zamień typ}}, co otwiera tę samą listę). Lista otwiera się wewnątrz **Właściwości**, w bloku wybranych ścian. To nie jest okno dialogowe i niczego nie zasłania: rzut, widok 3D i wybór nadal działają, gdy lista jest otwarta, i podąża za wybranymi ścianami.
3. Lista pokazuje każdy typ ściany z jego grubością i znacznikiem LOD, na przykład „Ściana 230 ogólna, LOD 200” i „230 cegła ceramiczna, tynkowana z obu stron, LOD 300”. Typy, które mają wybrane ściany, są zaznaczone. Wpisz w **Znajdź**, aby zawęzić: nazwę, grubość albo `lod 300`.
4. Kliknij typ. Każda wybrana ściana zmienia się na niego w jednym kroku, więc jedno {{ui:Cofnij}} cofa całą zamianę. Mały x zamyka listę.

Każda ściana zachowuje swoją linię lokalizacji. Ściana na swojej osi rośnie na obie strony; ściana, której linią lokalizacji jest lico, zachowuje to lico i rośnie w drugą stronę, a ściany do niej przyłączone podążają za nią w narożnikach. Ściany zablokowane do zamienianej ściany również za nią podążają. Drzwi i okna zostają w swoich ścianach i są wycinane ponownie na nową grubość.

Po zamianie lista pokazuje **Co się przesunęło**: ile ścian się zmieniło i na co, grubość oraz LOD przed i po, ściany przesunięte w bok, by zachować linię lokalizacji, przyłączone ściany, które podążyły, drzwi i okna osadzone ponownie oraz każde pomieszczenie, którego pole się zmieniło, z polem przed i po. Pasek stanu mówi to samo w jednym wierszu. Raport tylko informuje; nigdy nie zatrzymuje zamiany.

Dwie rzeczy zatrzymują zamianę i wtedy nic się nie zmienia: drzwi lub okno, które nie zmieściłyby się już w swojej ścianie (ściana staje się krótsza tam, gdzie podąża narożnik; najpierw zwęż drzwi albo przesuń je od narożnika), oraz blokada, którą zamiana by złamała (ściana zablokowana do linii siatki przez oś, gdy jej linia lokalizacji jest licem; odblokuj ją albo przywróć linię lokalizacji na oś).

Asystent połączony z BimCraft może wykonać tę samą zamianę (narzędzia `wall_types_list` i `walls_swap_type`) i dostaje ten sam raport.

Znacznik LOD typu ustawia się w edytorze przegród ścian: zobacz [Przegrody ścian](topic:wall-assemblies).

## Przesunięcie i rozciąganie oknem

- **Przesunięcie**: kliknij ścianę, potem stronę, na którą ją przesunąć, albo wpisz odległość. Ściana przesuwa się prostopadle do siebie, a połączone z nią ściany się rozciągają. Zaznacz **Kopia**, aby zamiast tego zrobić równoległą kopię (nie jest połączona z oryginałem).
- **Rozciąganie oknem**: kliknij dwa narożniki prostokąta, potem punkt, z którego przesunąć, i punkt, do którego przesunąć. Każdy koniec ściany wewnątrz prostokąta się przesuwa; ściana cała w środku przesuwa się, a ściany na niej opierające się idą za nią; ściany przecinające prostokąt się rozciągają.

## Edytuj wymiar i zablokuj go

Wybierz wymiar odniesienia (Adnotuj › {{ui:Wymiar odniesienia}}) i wpisz jego wartość we **Właściwościach**: ściana jego drugiego odniesienia przesuwa się prostopadle do siebie, pierwsze odniesienie zostaje, a połączone ściany podążają. Zaznacz **Zablokuj ten wymiar**, aby zachować wartość: gdy później przesunie się którakolwiek ściana, druga podąża. Zablokowanej wartości nie można nadpisać, dopóki jej nie odznaczysz.

## Wyrównaj i zablokuj

**Wyrównaj i zablokuj**: kliknij lico ściany (albo oś ściany, blisko jej środka) lub linię siatki, potem lico ściany, które ma zostać przyłożone do tej linii. Ściana przesuwa się prostopadle na nią. Zaznacz najpierw **Zablokuj**, aby trzymać je wyrównane: na rzucie pojawia się kłódka, a gdy jedna ściana się przesunie, druga podąża. We **Właściwościach** ściany wypisane są jej **Blokady**, każda z przyciskiem **Odblokuj**.

## Blokuj ściany do linii siatki

Wybierz ścianę biegnącą wzdłuż linii siatki albo taką, której koniec na niej leży, i wybierz linię siatki w **Właściwościach** › {{ui:Zablokuj do siatki}}. Następnie wybierz linię siatki narzędziem {{ui:Siatka}} i wpisz odległość w {{ui:Przesuń o}}: linia przesuwa się prostopadle do siebie, a ściany zablokowane do niej podążają za nią razem z połączonymi ścianami, w jednym kroku. Ściany zablokowanej do linii siatki nie da się samodzielnie z niej zdjąć (przesuń linię albo odblokuj ścianę); obrót linii siatki, który uniemożliwia zablokowanej ścianie pozostanie prostopadle na niej, zostaje odrzucony. Zmiana nazwy linii zachowuje blokadę; usunięcie linii usuwa blokadę.

## Długość: która strona trzyma i co mierzy

- **Powiększaj od** (Właściwości jednej ściany): **Początek trzyma** (przesuwa się koniec), **Koniec trzyma** (przesuwa się początek) albo **Środek trzyma** (oba końce przesuwają się o połowę). Podczas wpisywania długości rzut zaznacza punkt, który trzyma. Ściana połączona na końcu, który się przesuwa, przesuwa się prostopadle do siebie i zachowuje swój kąt.
- **Mierz od** (obok {{ui:Wymiary}} na rzucie, we Właściwościach i w Ustawienia › BimCraft › Ściany): linia środkowa, wewnętrzne lico albo zewnętrzne lico. Pole Długość i wymiary ścian na rzucie odczytują to samo, więc się zgadzają. Domyślnie jest to linia środkowa.
- Aby przesunąć ścianę bez jej połączeń (zerwą się, a ściana zachowa swoją tożsamość), przytrzymaj {{key:Alt}}, przeciągając jej środkowy uchwyt.

## Dobrze wiedzieć

- Te przepisy pochodzą ze specyfikacji narzędzia ściany (strony 4–9). Styl połączenia i priorytet warstw są przystosowane do prostych ścian; priorytet warstw widać tylko w rzucie (nie w przekrojach, elewacjach ani 3D, gdzie ściana jest jedną bryłą), nie w węzłach trzech ścian lub więcej, a membrany nie są przenoszone.
- Styl połączenia zapisywany jest w jego rekordzie w pliku IFC (nazwa `IfcRelConnectsPathElements`, na przykład `CadCraft join L butt 1`), więc inne programy nadal odczytują połączenie, a starszy plik otwiera się z cięciem na ukos.
- Blokady i połączenia zapisywane są w pliku IFC (blokady jako `CadCraft_WallHolds` w projekcie, połączenia jako `IfcRelConnectsPathElements`), więc są tam po ponownym otwarciu pliku.
- Zakrzywione ściany można dzielić, łączyć ponownie i wyjmować z nich fragment; nie są przesuwane przez odsunięcie ani blokowane.
- Zobacz także [Rysowanie ścian](topic:draw-walls), [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door) oraz [Kształt ściany](topic:wall-shape).
