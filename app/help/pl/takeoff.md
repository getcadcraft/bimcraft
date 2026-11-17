---
title: Ilości do TakeoffCraft
summary: Jedno kliknięcie wysyła ilości z modelu do TakeoffCraft — ściany według typu, dachy według powierzchni nachylonej, kalenice, naroża i doliny, fundamenty, drzwi i okna, szafki, urządzenia elektryczne, powierzchnię podłogi i listę cięcia tarcicy — zaznaczone na planie każdego poziomu, z zestawami kosztorysowymi pakietów branżowych przypisanymi do pozycji.
keywords: przedmiar, obmiar, kosztorys, szacowanie, lista materiałów, zestawienie materiałów, takeoffcraft, ilości, powierzchnia ściany, powierzchnia dachu, kwadraty, ława fundamentowa, beton, cubic yards, lista cięcia, tarcica, pakiet branżowy, zestaw kosztorysowy
from: c5a745af
---

## Co zrobisz

Zamień model w listę materiałów i kosztorys w TakeoffCraft. BimCraft rysuje plan każdego poziomu w standardowej skali, zaznacza na nim każdą ilość i umieszcza przedmiar w PDF. TakeoffCraft sam mierzy zaznaczenia, więc każdą liczbę można sprawdzić na arkuszu.

## Wyślij

1. Kliknij {{ui:Przedmiar}} na pasku modelu (obok {{ui:Arkusze}}).
2. TakeoffCraft otwiera się w nowej karcie z planami. Gdy zapyta, wybierz otwarcie przedmiaru, który znalazł w PDF.
3. Dodaj swoje ceny w tabeli ilości TakeoffCraft; zestawy kosztorysowe już wymieniają materiały.

:::note
Gdy TakeoffCraft nie jest tu dostępny, przycisk pobiera PDF. Otwórz go później w TakeoffCraft: znajdzie w nim przedmiar.
:::

## Co jest mierzone

- **Ściany** według typu i wysokości: ich osie jako odcinki, z wysokością ściany przy pozycji, dzięki czemu TakeoffCraft podaje długość i powierzchnię ściany. Każdy odcinek niesie drzwi i okna tej ściany, więc TakeoffCraft odejmuje je raz od powierzchni ściany według tej samej reguły co zestawienia BimCraft: oba programy zgadzają się co do brutto, odliczeń i netto. Dane przedmiaru typu ściany (jednostka, zaprawa, stawka; zobacz [Zestawy ścian](topic:wall-assemblies)) przechodzą jako jedna wyceniona linia przy pozycji tego typu. Przy metodzie pomiaru innej niż domyślna (zobacz [Wybieranie metody pomiaru](topic:plan-schedules-and-pdf#choose-a-measurement-method)) przedmiar niesie tę metodę, każdy odcinek niesie to, co połączenia odejmują od jego lica, a TakeoffCraft mierzy tą samą metodą i ją nazywa. Typ, którego jednostka ma długość i wysokość, przekazuje dwa składniki z ilościami: jednostki do zamówienia oraz objętość zaprawy, wycenione, gdy stawka typu jest za jednostkę, za 1000 jednostek lub za m³ zaprawy. Liczba, która wypada dokładnie na liczbie całkowitej, może być w TakeoffCraft o jedną jednostkę wyższa, ponieważ przekazanie zaokrągla położenia na arkuszu.
- **Dachy**: każda płaszczyzna dachu jako powierzchnia z jej spadkiem (TakeoffCraft podaje powierzchnię nachyloną), kalenice, naroża i doliny (naroża i doliny wzdłuż ich spadku), okapy i szczyty.
- **Fundamenty**: stopy i ściany fundamentowe jako odcinki wokół ich środków, płyty jako powierzchnie z grubością, więc beton wychodzi według objętości.
- **Drzwi i okna** policzone według typu, z obróbkami okien.
- **Szafki dolne** według długości ich frontów.
- **Urządzenia elektryczne** policzone według rodzaju.
- **Powierzchnia podłogi** każdego poziomu, z jego pomieszczeń.
- **Lista cięcia tarcicy** z konstrukcji nośnej, policzona na osobnym arkuszu (jedna kropka na sztukę).

Tam, gdzie pakiet branżowy ma pasujący zestaw kosztorysowy (ściany zewnętrzne i wewnętrzne, płyty, stopy, ściany fundamentowe, gonty, kalenica i naroża, doliny, okapy, drzwi wewnętrzne, obróbki okien, szafki dolne, gniazda, włączniki, oprawy, puszki rozgałęźne i rozdzielnica), pozycja dostaje swoje materiały i wzory. Pakiety przychodzą bez cen i nie zostały jeszcze sprawdzone przez kosztorysanta.

:::tip
Plany powstają z modelu za każdym kliknięciem, więc po zmianie po prostu kliknij {{ui:Przedmiar}} ponownie.
:::
