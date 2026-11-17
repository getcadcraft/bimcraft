---
title: Widoki, zakresy widoków i własne arkusze
summary: Znajdź każdy rzut, elewację, przekrój, widok 3D, zestawienie i arkusz w przeglądarce projektu, ustaw, jak każdy rzut jest przecinany i co pokazuje, twórz wyniesienia, rysuj linie i kreskowania w jednym widoku, zachowuj ustawienia w szablonach widoków i układaj własne arkusze.
keywords: wyniesienie, widok wyniesienia, widok szczegółu, powiększony rzut, rysowanie, linie szczegółu, linie rysunkowe, kreskowanie, obszar kreskowania, wypełniony obszar, wzór wypełnienia, odbity rzut sufitu, rcp, rzut sufitu, siatka sufitu, oprawy oświetleniowe, przeglądarka projektu, widoki, zakres widoku, przycięcie, obszar przycięcia, przycięty widok, skala widoku, podkład, pokazanie innego poziomu, półtony, płaszczyzna cięcia, wysokość przecięcia, góra, dół, głębokość widoku, widoczność, kategorie, ukryj w widoku, szablon widoku, szablony, arkusz, arkusze, tabliczka rysunkowa, okno widokowe, skala, układanie arkuszy, układ, pdf, ustawienia rzutu, przeglądarka
from: ee1d5afe
---

## Co zrobisz

Pracujesz tak, jak organizuje się projekty BIM: każdy widok na jednej liście, każdy rzut przecięty tam, gdzie chcesz, te same ustawienia dla kilku rzutów przez szablon i arkusze, które układasz sam.

## Przeglądarka projektu

1. Włącz {{ui:Rysuj}}. Lewy panel ma {{ui:Przeglądarka projektu}} pod modelami.
2. Wypisuje:
   - **Rzuty kondygnacji**: każdy poziom. Kliknij jeden, aby zobaczyć jego rzut. Przycisk suwaka obok ustawia jego zakres widoku (poniżej). Rzut, który podąża za szablonem, pokazuje nazwę szablonu.
   - **Rzuty sufitów**: odbity rzut sufitu każdego poziomu (poniżej).
   - **Wyniesienia**: każde wyniesienie z widokiem, na którym jest narysowane, oraz {{ui:Nowe wyniesienie}}. **Brakujące** wypisuje wyniesienia, których widok zniknął.
   - **Elewacje** i **Przekroje**: cztery strony i każda linia przekroju. Kliknij jedną, aby otworzyć zestaw rysunków, w którym jest narysowana.
   - **Widoki 3D**: widoki zapisane przyciskiem {{ui:Widoki}}.
   - **Zestawienia**: kliknij jedno, aby pokazać je pod rzutem.
   - **Arkusze**: arkusze, które wykonałeś, {{ui:Nowy arkusz}}, oraz {{ui:Zestaw rysunków…}} dla całego zestawu wykonanego z modelu.
   - **Szablony widoków**, z {{ui:Nowy szablon}}, oraz **Łącza** (połączone modele).

## Ustawienie zakresu widoku rzutu

1. Kliknij przycisk suwaka obok poziomu w **Rzutach kondygnacji**.
2. Ustaw wysokości powyżej tego poziomu:
   - **Przecięcie na**: miejsce, w którym rzut przecina ściany, drzwi i okna (1200 mm, około 4 ft, chyba że zmienisz). 
   - **Góra**: rzeczy powyżej przecięcia i pod górą są rysowane przerywaną linią (wysoka szafka, belka). Zostaw puste dla wysokości poziomu.
   - **Dół** i **Głębokość poniżej dołu**: rzeczy niższe niż przecięcie są rysowane cienkimi liniami w dół do dołu i na tyle głęboko pod nim.
3. Pod **Pokazane w tym rzucie** odznacz to, co ten rzut pomija: meble, pomieszczenia, słupy itd.
4. Aby pominąć pojedyncze elementy: wybierz je w rzucie lub w widoku 3D, otwórz okno i kliknij {{ui:Ukryj tutaj zaznaczone}}. {{ui:Pokaż wszystkie}} przywraca je.
5. Kliknij {{ui:Użyj tych ustawień}}.

Rzut jest ponownie przecinany od razu, a zestaw rysunków i Twoje arkusze za nim podążają. Wycinek chmury punktów też podąża za wysokością przecięcia.

## Przycięcie rzutu, nadanie skali, pokazanie innego poziomu pod nim

Wszystkie trzy są w tym samym oknie (przycisk suwaka obok poziomu):

- **Skala**: skala, w jakiej rzut się drukuje ({{ui:Drukuj}} na pasku rzutu) i jaką ma na arkuszu. **Dopasuj** wybiera największą standardową skalę, która się mieści.
- **Obszar przycięcia**: kliknij {{ui:Narysuj na planie…}}, potem jeden narożnik i przeciwległy na rzucie ({{key:Esc}} kończy). Rzut poza obszarem jest na ekranie przysłonięty, a nadal możesz tam pracować; na wydruku, arkuszach i w zestawie rysunków rzut pokazuje tylko to, co jest w środku. {{ui:Wyczyść}} usuwa przycięcie. {{ui:Dopasuj}} dopasowuje do przycięcia.
- **Podkład**: wybierz inny poziom. Jego ściany, przecięte elementy, drzwi i okna są rysowane jasno pod tym rzutem, aby ustawić rzeczy w jednej linii z poziomem niżej lub wyżej. Nie można ich tu wybrać, a drukują się jasnoszarym kolorem.

Szablon widoku przenosi skalę razem z wysokościami i kategoriami. Obszar przycięcia i podkład zawsze należą do jednego rzutu.

## Rzut sufitu poziomu

Każdy poziom ma odbity rzut sufitu obok rzutu kondygnacji: rzut widziany od dołu, do rozkładania sufitów i tego, co z nich zwisa.

1. Kliknij poziom pod **Rzutami sufitów** w przeglądarce albo wybierz {{ui:Rzut sufitu}} obok poziomu na pasku rzutu.
2. Ściany są przecinane na 2300 mm (około 7'-6"). Rysowane jest to, co leży powyżej tego przecięcia i poniżej wysokości poziomu: sufity z ich siatką i znacznikiem wysokości (`CLG 2438`), oprawy, belki. Drzwi, okna i to, co leży poniżej przecięcia, są pomijane.
3. Aby zrobić sufit, użyj {{ui:Sufit}} jak na rzucie kondygnacji, potem wybierz go i wybierz jego **Wzór** we Właściwościach. Zobacz [Pomieszczenia, podłogi, sufity i dachy](topic:floors-and-roofs).
4. Aby zawiesić z niego oprawę, umieść element z biblioteki, gdy pokazany jest rzut sufitu: trafi do **Przy suficie**. Zobacz [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library).
5. Przycisk suwaka obok rzutu sufitu ustawia jego przecięcie i górę, skalę, kategorie, obszar przycięcia i podkład, jak dla rzutu kondygnacji. Rzuty sufitów nie przyjmują szablonu widoku.

Rzut sufitu jest rysowany w ten sam sposób co rzut kondygnacji (odbity rzut, a nie lustrzane odbicie). Sufit niższy niż przecięcie nie jest rysowany: obniż przecięcie dla rzutu sufitu tego poziomu. Rzuty sufitów trafiają na Twoje arkusze jak rzuty; zestaw rysunków sam ich nie dodaje.

## Tworzenie wyniesienia

Wyniesienie pokazuje część rzutu powiększoną, w swojej skali, jako osobny widok: kuchnię, schody, narożnik ściany.

1. Pokaż rzut, rzut sufitu lub wyniesienie, do którego należy.
2. Wybierz {{ui:Adnotuj}} › {{ui:Wyniesienie}} na pasku rzutu (albo {{ui:Nowe wyniesienie}} w przeglądarce), potem kliknij jeden narożnik obszaru i przeciwległy. {{key:Esc}} kończy.
3. Wyniesienie powstaje w skali 1:20 (1/2" = 1'-0" w stopach i calach). Jego prostokąt i okrągły znacznik są rysowane na rzucie.
4. Kliknij znacznik narzędziem {{ui:Zaznacz}} albo wyniesienie w przeglądarce, aby je otworzyć: rzut pokazuje tylko ten obszar, w skali wyniesienia. Pasek mówi {{ui:Wyniesienie:}} i podaje jego nazwę; {{ui:W górę}} wraca do widoku, na którym jest narysowane.
5. Przycisk suwaka obok (w przeglądarce lub na pasku) zmienia jego nazwę, skalę, rysuje ponownie prostokąt albo usuwa wyniesienie.

Wyniesienie pokazuje to, co pokazuje jego widok: to samo przecięcie, te same kategorie, sufity rzutu sufitu. Wyniesienie wyniesienia działa tak samo. Umieść wyniesienie na arkuszu jak rzut; jego znacznik wtedy mówi, gdzie się znajduje (`1 / A-501`: pierwszy widok na arkuszu A-501). {{ui:Drukuj}} w wyniesieniu drukuje tylko ten obszar w jego skali.

Usunięcie wyniesienia usuwa też wyniesienia narysowane wewnątrz niego oraz linie i kreskowania narysowane w nich (najpierw zostaniesz zapytany). Jeśli poziom, na którym jest narysowane wyniesienie, zostanie usunięty, wyniesienie zostaje pod **Brakujące**, dopóki go nie usuniesz, a arkusze, na których się znajduje, zgłaszają je jako brakujące.

## Rysowanie linii i kreskowań w jednym widoku

Rysowanie to praca 2D należąca tylko do jednego widoku: notatki w liniach, kreskowany obszar betonu lub ziemi, wypełniony obszar. Nigdy nie znajduje się w widoku 3D ani w innym rzucie.

1. Pokaż rzut kondygnacji, rzut sufitu lub wyniesienie, w którym chcesz rysować.
2. Wybierz z {{ui:Adnotuj}} na pasku rzutu:
   - {{ui:Wiersz}}: kliknij, gdzie zaczyna się i gdzie kończy. Następna linia zaczyna się tam, gdzie skończyła się poprzednia; {{key:Enter}} zaczyna od nowa.
   - {{ui:Polilinia}}: kliknij jej punkty; {{key:Enter}} albo podwójne kliknięcie kończy, a kliknięcie w pierwszy punkt ją zamyka.
   - {{ui:Prostokąt}}: dwa przeciwległe narożniki.
   - {{ui:Obszar kreskowania}}: wybierz **Wzór** (Pełny, Ukośne, Krzyżowe, Beton, Izolacja, Ziemia) i jego skalę na pasku, potem kliknij narożniki; {{key:Enter}}, podwójne kliknięcie albo kliknięcie w pierwszy narożnik zamyka. Gdy {{ui:Wypełnij pomieszczenie}} jest zaznaczone, jedno kliknięcie w pomieszczeniu kreskuje jego obrys.
3. Punkty przyciągają się tak samo jak przy ścianach; {{key:Shift}} utrzymuje linię pod kątem prostym, a długość można wpisać jak dla ścian. {{key:Backspace}} cofa ostatni punkt.

Wybierz linię lub kreskowanie narzędziem {{ui:Zaznacz}} na rzucie. Właściwości zmieniają wzór i skalę kreskowania i mają {{ui:Przesuń…}} (kliknij punkt, z którego przesunąć, potem miejsce docelowe). {{key:Delete}} usuwa je. Każda linia, kreskowanie i zmiana to jeden krok.

Linie i kreskowania drukują się razem z rzutem, trafiają na arkusze razem z nim i są w zestawie rysunków. Odznacz **Adnotacje** w zakresie widoku, aby zostawić je poza tym widokiem.

## Zachowywanie ustawień w szablonie widoku

1. Kliknij {{ui:Nowy szablon}} w przeglądarce albo {{ui:Zapisz jako szablon…}} w zakresie widoku rzutu (ten rzut wtedy go używa).
2. Nadaj nazwę, ustaw wysokości i kategorie, i kliknij {{ui:Zapisz szablon}}.
3. W zakresie widoku dowolnego rzutu wybierz szablon. Rzut przejmuje jego wysokości i kategorie; zmień szablon, aby zmienić każdy rzut, który go używa. Elementy ukryte pojedynczo pozostają ukryte w swoim rzucie.
4. Kliknij szablon w przeglądarce, aby go zmienić, przemianować lub usunąć. Usunięcie pozostawia jego rzutom ich ustawienia jako własne.

## Układanie własnego arkusza

1. Kliknij {{ui:Nowy arkusz}}. Wpisz jego numer i tytuł oraz wybierz papier.
2. Kliknij {{ui:Dodaj}} obok rzutu, rzutu sufitu, wyniesienia, elewacji, przekroju lub zestawienia. Trafia na środek arkusza.
3. Przeciągnij go tam, gdzie ma być. Gdy jest wybrany, wybierz **Skalę** albo zostaw skalę rzutu (gdy rzut ją ma), a w przeciwnym razie skalę, która mieści się na jednej trzeciej arkusza. {{ui:Usuń z arkusza}} go usuwa.
4. Kliknij {{ui:Zapisz arkusz}}. Jest wypisany pod **Arkuszami**; kliknij go, aby zmienić go później.
5. {{ui:Pobierz jako PDF}} zapisuje ten arkusz jako jedną stronę.

## Co powinieneś zobaczyć

- Rzuty przecięte na Twoich wysokościach, z tym, co jest powyżej przecięcia, przerywane, a to, co odznaczyłeś, pominięte.
- Rzut przycięty, przysłonięty poza obszarem na ekranie i przycięty do niego na papierze, w nadanej skali.
- Rzut sufitu z siatkami sufitów i znacznikami wysokości oraz oprawy przy suficie.
- Wyniesienia z ich prostokątem i znacznikiem na rzucie, każde otwiera się we własnej skali.
- Linie i kreskowania tylko w widoku, w którym je narysowano.
- Twoje arkusze rysowane od nowa z modelu za każdym razem, gdy je otwierasz, więc zawsze do niego pasują. Widok, którego poziom albo linia przekroju została usunięta, jest zgłaszany, a nie rysowany.
- Każda zmiana tutaj to jeden krok: {{key:Mod+Z}} ją cofa.

:::note
Wszystko to jest zapisane w pliku IFC jako zestawy właściwości, których inne programy nie ruszają: zakres widoku i rzut sufitu każdego poziomu na poziomie, szablony, wyniesienia i Twoje arkusze w projekcie. Linie i kreskowania są adnotacjami IFC w swoim poziomie, więc inne programy widzą je jako krzywe 2D i obszary kreskowane (własny rysunek każdego wzoru), choć nie to, do którego widoku należą.
:::

:::tip
Inne programy BIM nazywają przecięcie zakresem widoku lub płaszczyzną cięcia, szablony szablonami widoków lub ustawieniami widoku, linie rysunkowe liniami szczegółu, a wypełnione obszary obszarami kreskowania. Idee są te same; ustawienia widoku nie przechodzą do nich.
:::
