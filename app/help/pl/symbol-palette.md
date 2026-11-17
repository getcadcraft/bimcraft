---
title: Paleta symboli
summary: Znajdź symbole elektryczne i wodno-kanalizacyjne po nazwie lub obrazku, oznaczaj gwiazdką te, których używasz, i wstawiaj je na plan jednym kliknięciem.
keywords: paleta symboli, przycisk symboli na pasku, przyleganie do ściany, symbole, symbole elektryczne, symbole wodno-kanalizacyjne, plan wodno-kanalizacyjny, toaleta, umywalka, zlew, wanna, prysznic, wpust podłogowy, czyszczak, zawór do węża, podgrzewacz wody, zawór, zimna woda, ciepła woda, ściek, wentylacja, styl linii, ulubione, szukaj
from: 67f20bc0
---

## Co zrobisz

Otwórz jeden panel, który wypisuje symbole elektryczne i symbole planu wodno-kanalizacyjnego wraz z ich obrazkami i nazwami, znajdź ten, którego potrzebujesz, i wstaw go na plan. Nic tu nie wymaga internetu: symbole są dostarczane z aplikacją.

## Otwórz i wstaw symbol

1. Otwórz model i otwórz {{ui:Kompilacja}} › {{ui:Paleta symboli}} (polecenie wpisywane: SYMBOLS). Ten sam przycisk jest w menu Narzędzia na pasku Rysuj oraz jako **Symbole** w grupie Biblioteka na pasku narzędzi.
2. Wybierz zestaw: **Elektryczne** lub **Wodno-kanalizacyjne**, albo **Wszystkie zestawy**. Wpisz w polu wyszukiwania, aby zawęzić listę. Szukać można po nazwie lub skrócie (WC, CW, HB).
3. Kliknij symbol. Plan jest gotowy do jego wstawienia.
   - Symbol **elektryczny** uruchamia narzędzie Elektryczne z wybranym urządzeniem, więc obowiązuje wszystko z [Plan instalacji elektrycznej](topic:electrical-plan): kliknij plan, jeden krok cofnięcia.
   - Symbol **wodno-kanalizacyjny** uruchamia narzędzie symboli planu. Kliknij plan. Armatura przy ścianie (miska ustępowa, umywalka, wanna, zlew, zawór do węża) przyciąga się do najbliższej powierzchni ściany, tyłem do ściany; odpływy, zawory, podgrzewacz i style linii trafiają tam, gdzie klikniesz.
4. Naciśnij {{key:R}}, aby obrócić symbol o 90 stopni ({{key:Shift}}+{{key:R}} obraca w drugą stronę), albo wpisz kąt w polu **Obrót** na pasku opcji. Naciśnij {{key:Esc}}, aby przestać.

Armatura lub zawór do węża, który przylgnął do powierzchni ściany, pamięta tę ścianę: gdy ściana się przesunie, symbol przesuwa się razem z nią (ta sama powierzchnia, ta sama odległość wzdłuż ściany) w tym samym kroku cofnięcia. Jeśli usuniesz ścianę, symbol zostaje tam, gdzie był, a Problemy wymieniają: „utracił ścianę”; przesuń go lub usuń. Symbole wstawione z dala od ścian nie są z niczym związane.

Każdy wstawiony symbol to jeden krok cofnięcia. Wstawiony symbol jest adnotacją planu w pliku IFC z oznaczeniem (WC1, WC2, ...). Wskaż go, aby zmienić jego oznaczenie lub obrót we **Właściwościach**, albo naciśnij {{key:Delete}}.

## Co ma zestaw wodno-kanalizacyjny

Armatura (miska ustępowa, pisuar, umywalka, wanna, prysznic, zlew kuchenny, pojedynczy zlewozmywak), wpust podłogowy, czyszczaki podłogowe i ścienne, zawór do węża, hydrant ścienny, podgrzewacz wody, zawory (zasuwa, grzybkowy, kulowy, zwrotny, motylkowy, redukcyjny ciśnienia) oraz style linii z ich skrótami: zimna woda (CW), ciepła woda (HW), powrót ciepłej wody (HWR), ściek (W), wentylacja (V), kanalizacja deszczowa (SD) i gaz (G). Rysunki skalują się z planem, więc zachowują swój rozmiar na wydruku. Styl linii to krótki odcinek, który pokazuje styl na planie; rzeczywiste trasy rur rysuje się narzędziami rur.

:::note
To powszechnie stosowane konwencje planów wodno-kanalizacyjnych, narysowane przez nas; nie są certyfikowane wg ISO 4067-1 ani ASME Y32.4. Porównano je z publicznymi legendami rysunkowymi i podręcznikami szkoleniowymi (lista jest w notatce o źródłach zestawu, która mówi, gdzie się zgadzamy, a gdzie różnimy); nie zostały skopiowane z żadnego produktu, a są bezpłatne w użyciu (Apache-2.0). Zestawy rysunków się różnią, więc sprawdź legendę własnego projektu. To symbole planu, a nie projekt instalacji: nie wymiarują rur ani nie sprawdzają przepisów.
:::

## Ulubione i klawiatura

- Kliknij gwiazdkę przy symbolu (albo naciśnij {{key:F}} na nim), aby zachować go jako ulubiony. Ulubione są wymieniane jako pierwsze i pozostają w tej przeglądarce. **Tylko ulubione** pokazuje wyłącznie je.
- {{key:Down}} z pola wyszukiwania przechodzi do symboli; klawisze strzałek, {{key:Home}} i {{key:End}} poruszają się między nimi; {{key:Enter}} wybiera zaznaczony symbol; {{key:Esc}} zamyka paletę.
- Na telefonie paleta jest arkuszem u dołu ekranu; ustępuje miejsca, gdy wybierzesz symbol, abyś mógł zobaczyć plan. Otwórz ją ponownie z menu Kompilacja lub przyciskiem **Paleta** na pasku opcji.

:::tip
Jeśli plik używa zestawu symboli, którego ta wersja nie ma, plan pokazuje w miejscu symbolu pole, a Problemy je wymieniają.
:::

## Powiąż wstawiony element z symbolem

Oprawa oświetleniowa z Biblioteki jest elementem 3D, ale schemat instalacji elektrycznej pokazuje ją jako jej symbol. Wstawiasz ją **raz** i łączysz:

1. Wybierz Kompilacja › **Powiązanie symbolu** (albo wpisz SYMBOLLINK). W lewym panelu otwiera się sekcja Powiązanie symbolu.
2. Wybierz wstawione elementy na planie lub w 3D. Sekcja mówi, ile jest wybranych i z czym są powiązane.
3. Wybierz **Symbol** (z dowolnego zestawu: Elektryczne, Wodno-kanalizacyjne) i kliknij **Powiąż**.

Element nadal jest jednym elementem, a każde zestawienie liczy go raz:

- **3D** zawsze pokazuje jego bryłę.
- **Plan** pokazuje swoją postać planu, jak dotąd.
- Plan, którego **Ten widok pokazuje powiązane elementy jako** ustawiono na **Ich symbol (układ instalacji)**, pokazuje w ich miejscu symbol. Kliknięcie symbolu wybiera element. Wybór jest zapisany w pliku dla tego widoku (planu poziomu, jego planu sufitu lub wyniesienia).

**Obróć symbol o 90°** obraca symbol względem jego elementu. **Usuń powiązanie** zdejmuje powiązanie; element zostaje. Zestawienie **Powiązane symbole** wymienia każdy powiązany element raz wraz z jego poziomem i pomieszczeniem, w którym stoi.

Jeszcze nie zbudowano: wybór widoku na arkuszu jest wyborem planu poziomu, który on pokazuje; urządzenia wstawione narzędziem Elektryczne są symbolami na każdym planie, jak dotąd.
