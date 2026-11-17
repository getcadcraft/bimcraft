---
title: Przetnij model IFC płaszczyzną przekroju
summary: Przetnij model 3D od góry, z przodu lub z boku albo zachowaj tylko to, co znajduje się wewnątrz pudła przekroju lub bryły z kilku pudeł o pochylonych ścianach, aby zajrzeć do środka; przesuwaj cięcie, przeciągając je lub wpisując wartość, odwracaj je i wybierz, co pokazuje przekrój.
keywords: przekrój, płaszczyzna przekroju, pudło przekroju, uchwyty, przeciągnij, margines, pudło zaznaczenia, pudło przycinania, cięcie, przycinanie, rzut cięcia, rzut poziomy, elewacja, wnętrze, odwróć, przesunięcie, bryła przekroju, przekrój schodkowy, w kształcie L, pochylenie, skośne cięcie, płaszczyzna ukośna, dodatkowa płaszczyzna
from: 6315e71a
---

## Co zrobisz

Przetnij model IFC jedną płaszczyzną, aby zobaczyć jego wnętrze: od góry dla rzutu albo od przodu lub z boku dla przekroju przez budynek.

## Kroki

1. Otwórz model IFC. Zobacz [Otwieranie modelu IFC i oglądanie go w 3D](topic:open-ifc-model).
2. Kliknij {{ui:Przekrój}} na pasku narzędzi albo naciśnij {{key:X}}. Model zostaje przecięty w połowie wysokości, a pod paskiem narzędzi pojawia się pasek przekroju.
3. Wybierz, skąd ciąć: {{ui:Góra}}, {{ui:Przód}} lub {{ui:Z boku}}. Przód i Z boku obracają też widok, abyś mógł patrzeć na cięcie.
4. Przesuń cięcie: przeciągnij suwak **Przesunięcie** albo wpisz odległość w metrach w polu i naciśnij {{key:Enter}}. Możesz też wpisać milimetry, na przykład `1200 mm`.
5. Kliknij {{ui:Odwróć}}, aby zachować drugą stronę cięcia.
6. Kliknij element na przekroju, aby zobaczyć jego właściwości.
7. Kliknij {{ui:Wyłączone}}, ponownie kliknij {{ui:Przekrój}} albo naciśnij {{key:X}}, aby usunąć cięcie.

## Pudło przekroju

Kliknij {{ui:Prostopadłościan}} w tym samym pasku, aby zachować tylko to, co jest wewnątrz pudła. Każda z osi {{ui:X}}, {{ui:Y}} i {{ui:Z}} ma dwa suwaki: gdzie pudło się zaczyna i gdzie się kończy, w metrach od krawędzi modelu. Wartości pokazują się obok nich.

- {{ui:Pudło wokół zaznaczenia}} dopasowuje pudło do wybranych elementów i przybliża widok do nich. Zostawia 300 mm zapasu z każdej strony; zmień to w {{ui:Ustawienia}} › {{ui:BimCraft}} › {{ui:Zapas wokół zaznaczenia}}.
- Gdy elementy są zaznaczone, {{ui:Pokaż}} › {{ui:Pudło przekroju wokół zaznaczenia}} albo {{key:Shift+X}} robi to samo w jednym kroku, nawet gdy cięcie nie jest włączone.
- **Uchwyty** (grip) na pudle przesuwają je kursorem: przeciągnij kwadrat na środku ściany, aby przesunąć tę ścianę, ten na środku krawędzi, aby przesunąć dwie ściany, które się tam spotykają, lub ten w narożniku, aby przesunąć trzy. Suwaki podążają za nimi. W {{ui:Góra}} narożnik przesuwa pudło w rzucie, w {{ui:Przód}} lub {{ui:Z boku}} w elewacji.
- {{ui:Cały model}} ponownie otwiera pudło na cały model.
- {{ui:Góra}}, {{ui:Przód}} lub {{ui:Z boku}} wracają do jednej płaszczyzny.

## Bryła z kilku pudeł, pochylone ściany i dodatkowe płaszczyzny

Pudło nie zawsze ma potrzebny kształt: przekrój schodkowy, skrzydło w kształcie litery L albo cięcie wzdłuż ściany, która nie jest prostopadła do siatki.

1. W {{ui:Prostopadłościan}} kliknij {{ui:Dodaj pudło}}. Cięcie zachowuje teraz to, co jest wewnątrz **dowolnego** z pudeł, więc dwa pudła tworzą bryłę schodkową lub w kształcie L. Lista obok pokazuje, które pudło zmieniają suwaki ({{ui:Pudło 1}}, {{ui:Pudło 2}}…); {{ui:Usuń to pudło}} usuwa wybrane. Bryła może mieć do 8 pudeł.
2. Otwórz {{ui:Pochylenie i płaszczyzny}}, aby ukształtować wybrane pudło:
   - Wybierz {{ui:Ściana}} i wpisz, o ile się pochyla w każdą stronę, w stopniach (do 80). Ściana obraca się wokół swojego środka; pozostałe ściany zostają tam, gdzie ustawiły je suwaki. {{ui:Wyrównaj}} przywraca ją.
   - {{ui:Dodaj płaszczyznę}} tnie pudło jeszcze jedną płaszczyzną. {{ui:Ściany}} to kierunek, w którym zwrócona jest odcięta strona, w stopniach od X w stronę Y; {{ui:Nachylenie}} to o ile ten kierunek skręca w górę (0 dla płaszczyzny pionowej, 90 dla poziomej); {{ui:Przesunięcie}} to odległość płaszczyzny od środka pudła, w metrach. × usuwa ją. Pudło może mieć do 6 dodatkowych płaszczyzn.
3. Tam, gdzie bryła przecina bryły, powierzchnie cięcia są wypełniane jak wcześniej, także tam, gdzie dwa pudła spotykają się w schodku.

:::tip
Jeśli kontur znika i nic nie zostaje, pochylenia lub płaszczyzny nie zostawiają nic wewnątrz tego pudła; pasek to podaje. Pochyl ścianę z powrotem albo zmień przesunięcie płaszczyzny.
:::

## Budynek obrócony na działce

Wiele modeli ustawia budynek pod kątem do osi pliku (północ rzeczywista, współdzielone współrzędne). Gdy ściany biegną pod kątem, nowy przekrój zaczyna się prostopadle do budynku: {{ui:Przód}}, {{ui:Z boku}} i pudło biegną wzdłuż jego własnych ścian, a {{ui:Prostopadle do budynku}} na pasku przekroju jest włączone. Kliknij je, aby przejść na osie modelu, i ponownie, aby wrócić (wiersz stanu podaje, o ile budynek jest obrócony). Przy **Ustawienia › BimCraft › Budynek obrócony na działce › Tak jak ułożono na działce** przekroje i widoki zaczynają się zamiast tego na osiach modelu. Zobacz [Ustawienia](topic:settings).

## Co zobaczysz

- **Góra** zachowuje to, co jest poniżej cięcia, więc patrzysz w dół na pomieszczenia. Przesunięcie mierzy się w górę od dołu modelu.
- **Przód** zachowuje to, co jest za cięciem, widziane od przodu; **Z boku** zachowuje to, co jest za nim, widziane z boku. Przesunięcie mierzy się od przodu lub z boku modelu.
- Cienki kolorowy kontur pokazuje, gdzie jest płaszczyzna.
- Tam, gdzie płaszczyzna przecina ścianę, płytę lub inną bryłę, powierzchnia cięcia jest wypełniona ciemnym kolorem, jak rysowany przekrój. {{ui:Wypełnienie}} na pasku włącza i wyłącza to.
- Kostka widoku w prawym dolnym rogu obraca model, abyś mógł patrzeć na cięcie z dowolnej strony.
- Kliknięcie wybiera to, co widzisz: to, co odcięto, nie może zostać wybrane.

## Częste błędy

- **Nic się nie zmieniło.** Cięcie może być nad dachem lub poza modelem. Przeciągnij suwak albo wpisz mniejsze przesunięcie.
- **Przesunięcie wróciło.** Odległość poza modelem zostaje przesunięta do jego końca, a wiersz stanu to podaje.
- **Problem pokazuje tylko część bryły.** Problem (BCF) zachowuje jedno pudło z jego pochylonymi ścianami i płaszczyznami: pierwsze pudło bryły. Wiersz stanu to podaje, gdy tworzysz problem.
- **Cięcie jest puste.** {{ui:Wypełnienie}} na pasku jest wyłączone: kliknij je, aby wypełnić powierzchnie cięcia ścian, płyt i innych brył.
- **Wypełnione cięcie wygląda na nakrapiane albo brakuje jego kawałka.** Wypełnianie wymaga zamkniętych brył; element, którego kształt w pliku nie jest zamknięty (pojedyncza blacha, listowie drzew), pozostaje niewypełniony zamiast być zamalowanym. Element złożony z części w różnych kolorach (rama i jej szyba) jest wypełniany, gdy jego części stykają się ze sobą.
- **Gdzie jest pasek przekroju?** Znajduje się na górze widoku 3D, który tnie: w połowie 3D w {{ui:Podziel}}, a pod paskiem rysunku w samym {{ui:Plan}}. W niskim widoku przewija się.

## Dalej

- [Pokazywanie i ukrywanie kondygnacji, przestrzeni i krawędzi](topic:storeys-and-spaces)
- [Zobacz rysunek DWG lub DXF w 3D](topic:dwg-in-3d) — rysunki w 3D mają tę samą płaszczyznę przekroju
