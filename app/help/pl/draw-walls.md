---
title: Rysowanie ścian
summary: Rysuj ściany na planie poziomu, klikając ich narożniki lub wpisując długości; narożniki łączą się same, a ściany są zapisywane jako IFC.
keywords: zakrzywiona, łuk, linia odniesienia, wyrównanie, ściana, ściany, rysowanie, plan, rzut kondygnacji, pomieszczenie, narożnik, połączenie, typ ściany, 2x6, 2x4, cmu, beton, wysokość, poziom, poziomy, kondygnacja, wpisana długość, ortogonalnie, przyciąganie
from: 8269cd4b
---

## Co zrobisz

Narysujesz ściany budynku na planie każdego poziomu. Kliknij miejsce, w którym zaczyna się ściana, a potem każdy narożnik; BimCraft połączy narożniki za Ciebie, nada każdej ścianie jej warstwy (okładzina, poszycie, słupki, płyta gipsowa …) i poprowadzi ją do poziomu wyżej. Widok 3D pokazuje ściany na bieżąco.

## Otwórz plan

1. Rozpocznij nowy budynek ([Rozpocznij nowy budynek](topic:start-a-new-building)) lub otwórz model IFC.
2. Kliknij {{ui:Rysuj}} na pasku narzędzi. Otworzy się nowy budynek, w którym ten tryb jest już włączony.
3. Plan poziomu jest widoczny po lewej, a widok 3D po prawej. Wybierz poziom z listy u góry planu albo okrągłym przyciskiem obok niego w panelu **Poziomy**.
4. {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}} to narzędzia w wierszu {{ui:Widok}} na pasku narzędzi (polecenia PLAN, SPLIT i skróty działają jak dotąd). Użyj {{ui:Plan}}, aby pokazać sam plan, {{ui:Podziel}}, aby pokazać oba widoki, a {{ui:3D}}, aby zamknąć plan. Gdy okno jest wąskie (lub rozmiar interfejsu duży), {{ui:Podziel}} ustawia plan nad widokiem 3D, a nie obok.

Plan przecina poziom 4'-0" (1200 mm) nad jego podłogą, tak jak rzut kondygnacji. Przewijaj kółkiem, aby powiększać, przeciągaj środkowym lub prawym przyciskiem (albo przytrzymaj {{key:Space}} i przeciągnij), aby przesuwać. Gdy {{ui:Zaznacz}} jest włączone, zwykłe przeciągnięcie też przesuwa widok. {{key:F}} z kursorem nad planem dopasowuje go do okna.

## Narysuj pomieszczenie

1. Kliknij {{ui:Ściana}} (lub naciśnij {{key:W}}).
2. Wybierz typ ściany na pierwszej liście, na przykład **Zewnętrzna 2×6** lub **Wewnętrzna 2×4**.
3. Wybierz jej wysokość: **Do poziomu wyżej** (ściana podąża za tym poziomem, jeśli ten się przesunie), **Do** wyższego poziomu dla ściany, która biegnie przez kilka poziomów (hall schodowy, pomieszczenie dwukondygnacyjne, wysoki szczyt), albo **Stała wysokość** i wpisz ją. Taka ściana należy do poziomu, na którym ją narysowano; plany poziomów, przez które przechodzi, pokazują ją jaśniejszą, pomieszczenia tam domykają się przy niej, a drzwi i okna możesz wstawiać w nią z tych planów (drzwi stoją na podłodze tego poziomu). Aby przesunąć lub przekształcić samą ścianę, przejdź do poziomu, na którym się zaczyna.
4. Kliknij miejsce, w którym zaczyna się pierwsza ściana.
5. Kliknij każdy narożnik. Każde kliknięcie tworzy ścianę; następna zaczyna się tam, gdzie poprzednia się skończyła. Długość i kąt pokazują się obok kursora.
6. Kliknij ponownie pierwszy punkt, aby zamknąć pomieszczenie. Pasek stanu podaje, ile ścian ma pomieszczenie, a w trybie osi każda ściana dostaje warstwę zewnętrzną na zewnętrznej stronie pomieszczenia.
7. Naciśnij {{key:Esc}} (lub kliknij prawym przyciskiem albo kliknij dwukrotnie), aby zakończyć bez zamykania.

Narożniki łączą się same: dwie ściany spotykają się na ukos, ściana kończąca się na innej zatrzymuje się na jej licu (T), a trzy lub więcej ścian w jednym punkcie dzieli narożnik. Ściany, które się przecinają, zostają bez zmian.

Cały pokój naraz: otwórz {{ui:Kształty}}, aby narysować prostokąt, obrócony prostokąt, wielokąt, łuki, ściany na wybranych liniach lub wokół konturu (zob. [Kształty ścian, podział, odsunięcie, rozciąganie i blokada](topic:wall-tools)).

## Wybierz odniesienie rysowania

Przed pierwszym kliknięciem wybierz **Oś**, **Lico wewnętrzne** lub **Lico zewnętrzne**. Gdy wybrane jest lico, Twoje kliknięcia i wpisane długości opisują to lico; BimCraft przesuwa oś ściany o połowę jej całkowitej grubości i łączy kolejne narożniki. Wybierz **Zewnętrzna po lewej** lub **Zewnętrzna po prawej** względem kierunku rysowania. Dla zamkniętego konturu rysowanego przeciwnie do ruchu wskazówek zegara zewnętrzna strona jest po prawej; zgodnie z ruchem wskazówek, po lewej. Przy **Lico wewnętrzne** ciało ściany leży po zewnętrznej stronie linii, a przy **Lico zewnętrzne** – po drugiej stronie. Rysowanie od lica zachowuje wybraną zewnętrzną stronę, gdy zamykasz pętlę. Na osi ściany, które nie zamykają pomieszczenia, przyjmują wybraną zewnętrzną stronę; zamknięcie pomieszczenia ustawia zewnętrzną stronę każdej ściany na zewnątrz pomieszczenia samo z siebie, niezależnie od kierunku rysowania.

Zmiana typu ściany, odniesienia lub zewnętrznej strony kończy bieżący łańcuch. Blisko narożnika zawracającego długie połączenia na ukos są ucinane przez zostawienie prostych końców.

Podczas rysowania punkt końcowy nad pustą przestrzenią może wyrównać się w poziomie lub w pionie z końcem ściany albo wcześniejszym narożnikiem. Przerywana prowadnica łączy ten punkt z wskaźnikiem przyciągniętym. Shift utrzymuje kierunek rysowania pod kątem prostym; wtedy wyrównanie przestaje działać wzdłuż tego kierunku. Pobliskie punkty końcowe, środki i przecięcia ścian mają pierwszeństwo przed odległym wyrównaniem.

## Linia lokalizacyjna

Gdy **Odniesienie** jest ustawione na **Lico zewnętrzne** lub **Lico wewnętrzne**, ściana zachowuje to lico jako linię lokalizacyjną. Później, gdy ściana stanie się grubsza albo jej zewnętrzna strona zostanie odwrócona, to lico pozostaje na miejscu, a ściana rośnie lub odwraca się wokół niego. Prosta ściana, która spotyka je w narożniku, podąża za nim, więc narożnik nadal się domyka. Linię lokalizacyjną możesz zmienić później we **Właściwościach**: zob. [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door).

## Narysuj zakrzywioną ścianę

1. Kliknij {{ui:Ściana}}, a potem wybierz **Zakrzywiona** na liście **Kształt** w wierszu opcji.
2. Kliknij miejsce, w którym zaczyna się ściana, a potem miejsce, w którym się kończy.
3. Kliknij punkt na jej łuku. Możesz też wpisać wysokość łuku i nacisnąć {{key:Enter}}.
4. Łańcuch biegnie dalej od końca ściany. Naciśnij {{key:Esc}}, aby go zakończyć.

Zakrzywiona ściana łączy się ze ścianami na swoich końcach (działają narożniki i połączenia T), tworzy pomieszczenia i trzyma drzwi oraz okna wzdłuż swojego łuku. Pozostają one prostymi elementami, prostopadłymi do ściany w jej środku, a ich odległość mierzy się wzdłuż łuku. Ściana może skręcać najwyżej o trzy czwarte okręgu. Przyciąga się do swoich końców i do środka łuku.

Jeszcze nie zbudowano dla zakrzywionych ścian: {{ui:Przytnij / wydłuż}} i {{ui:Narożnik}}, szkielet, automatyczne wymiary na planie oraz przyciąganie wzdłuż łuku. Zob. [Czego jeszcze nie zbudowano](topic:not-built-yet).

## Wpisz długość zamiast klikać

Po pierwszym kliknięciu wpisz wartość i naciśnij {{key:Enter}}:

| Wpisujesz | Rysuje |
|---|---|
| `12'6"` lub `3810` | ścianę o tej długości, w kierunku wskazywanym kursorem |
| `12'6"<90` | ścianę o tej długości, pod tym kątem (w stopniach, przeciwnie do ruchu wskazówek zegara od prawej) |
| `@3000,0` | do punktu oddalonego o tyle od ostatniego, w poziomie i w górę |
| `1200,3400` | do tego punktu na planie |

Wpisanie liczby przy włączonym narzędziu Ściana trafia od razu do pola {{ui:Długość}}. W stopach i calach zwykła liczba oznacza cale; w milimetrach – milimetry. Jednostkę możesz zawsze wpisać: `3.5 m`, `10 ft`, `6 1/2"`.

## Przyciąganie

- Końce ścian, ich narożniki licowe i środki ścian przyciągają się, gdy kursor jest blisko (kwadrat, trójkąt).
- Kursor przyciąga się do osi ściany lub do któregokolwiek z lic (krzyżyk).
- Od ostatniego punktu kierunek utrzymuje się co 15°, gdy jest blisko; przytrzymaj {{key:Shift}}, aby utrzymać 0°, 90°, 180° lub 270°.
- Dowolne kierunki zaokrąglają długość do 1/2" (lub 10 mm).

## Zmiana, cofanie, usuwanie

- Każda ściana to jeden krok w {{ui:Zmiany}}: {{ui:Cofnij}} i {{ui:Ponów}} zdejmują ściany i przywracają je.
- Gdy {{ui:Zaznacz}} jest włączone, kliknij ścianę na planie, aby ją wybrać; widok 3D i **Właściwości** podążają za wyborem. {{key:Delete}} usuwa wybrane ściany, a ściany, z którymi były połączone, zostają ponownie uporządkowane.

## Poziomy

Panel **Poziomy** wymienia każdy poziom wraz z jego rzędną i wysokością.

- Wpisz nową nazwę, rzędną lub wysokość i naciśnij {{key:Enter}}. Zmiana wysokości (lub rzędnej) poziomu przesuwa poziomy powyżej o tę samą wartość, a ściany sięgające do poziomu podążają za nim.
- {{ui:Dodaj poziom na górze}} dodaje poziom nad najwyższym, o tej samej wysokości.
- {{ui:Dodaj poziom poniżej}} dodaje poziom pod najniższym (piwnicę), o tej samej wysokości co najniższy: jego rzędna jest ujemna, gdy najniższy poziom leży na 0, i żaden inny poziom się nie przesuwa. {{ui:Cofnij}} go usuwa.
- {{ui:Kopiuj ten poziom…}} rysuje ponownie to, co jest na poziomie, który oglądasz, na innym poziomie albo na nowym poziomie nad nim: jego ściany wraz z drzwiami i oknami, stropy i sufity (bez dachów). Ściany sięgające do poziomu wyżej sięgają do poziomu wyżej od nowego; pomieszczenia pojawiają się same. Jedno {{ui:Cofnij}} cofa wszystko. Jeśli na drugim poziomie są już ściany, kopia zostaje do nich dodana.
- {{ui:Jednostki}} na pasku narzędzi wybiera jednostki (stopy i cale, cale, dziesiętne stopy, milimetry, centymetry lub metry) dla wszystkiego, co pokazują i odczytują narzędzia rysowania.

## Zapis

Kliknij {{ui:Zapisz jako IFC}}. Każda ściana staje się ścianą IFC z osią, swoim połączonym kształtem, typem i warstwami, `Pset_WallCommon` oraz ilościami podstawowymi (długość, wysokość, pola i objętości), więc inne programy BIM mogą ją otworzyć i umieścić w zestawieniu.

## Warto wiedzieć

- Ściany rysuje się na ich osi. Grubość wynika z typu ściany.
- Na planie ściany narysowane tutaj są wypełnione, a wszystko inne (elementy biblioteki, modele z innych programów) przecięte tą samą płaszczyzną, z tym co leży poniżej przecięcia pokazanym cienkimi liniami.
- Ściany utworzone przez inne programy pokazują się na planie, ale na razie nie da się ich zmieniać tymi narzędziami.
