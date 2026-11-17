---
title: Edycja rodziny
summary: Zmieniaj parametry, formuły i bryły rodziny, pokazuj części za pomocą parametru Tak / Nie, przycinaj i łącz bryły, dodawaj złącza dla rur i kanałów oraz oglądaj wynik narysowany z IFC, który zostanie zapisany.
keywords: edytor rodzin, edytuj rodzinę, parametr, parametry, formuła, formuły, widoczność, tak nie, bryła, bryły, pudełko, wyciągnięcie, wyciągnij, obrót, profil, łuk, operacja logiczna, operacje logiczne, przecięcie, suma, uchwyt, uchwyty, płaszczyzna robocza, szkic, nowa rodzina, złącze, złącza, port, porty, złącze rury, złącze kanału, odpływ, zasilanie wodą
from: 1ab31c10
---

## Otwieranie edytora

Otwórz rodzinę (grupa **Rodziny** w przeglądarce projektu albo {{ui:Kompilacja}} › {{ui:Rodziny…}}) i kliknij {{ui:Edytuj rodzinę}}. Aby zacząć od zera, kliknij {{ui:Nowa rodzina}}: nadaj jej nazwę, określ, czym jest (drzwi, okno, mebel, wyposażenie lub coś innego), a dla drzwi lub okna wskaż, z którego startowego obiektu pochodzi jej symbol na planie i uchwyt. Edytor otwiera rodzinę z kilkoma parametrami i jedną bryłą.

Edycja rodziny startowej zachowuje twoje zmiany tylko w tym modelu. Inne modele zachowują startową wersję bez zmian.

Nic w modelu nie zmienia się, dopóki nie klikniesz {{ui:Zapisz rodzinę}}. Edytor ma własne cofnij i ponów (strzałki obok nazwy albo {{key:Mod+Z}} i {{key:Mod+Y}}); zapis to jeden krok w cofnięciu modelu.

## Parametry

Karta {{ui:Parametry}} wymienia parametry rodziny: nazwę, rodzaj i wartość domyślną. Rodzaje: **Długość** (milimetry), **Kąt** (stopnie), **Liczba**, **Liczba całkowita**, **Tak / Nie**, **Pióro** (1–16) oraz trzy, które przechowują słowa zamiast liczb: **Tekst**, **Materiał** (jeden z materiałów projektu) i **Wypełnienie** (wypełnienie na planie). Słowa nie są używane w formułach; kolorują bryłę (jej **Materiał**), wypełniają część symbolu albo wypisują się jako `{Name}` w tekście symbolu. Pole **Dla elementu** oznacza parametr, który każdy umieszczony element ustawia dla siebie, a nie dla swojego rozmiaru.

- **Formuła** sprawia, że parametr podąża za innymi, na przykład `Width / 30` albo `if(Width > 1200, 2, 1)`. Długości w formułach są w milimetrach albo podajesz jednostkę: `3'`, `6in`, `50cm`.
- Zmiana nazwy parametru zmienia ją w każdej formule i polu, które go używa. Parametru wciąż używanego nie można usunąć.
- **Materiał** bryły przyjmuje kolor materiału projektu (albo parametru Materiał), **Pokazywana przy** ukrywa ją przy grubszych poziomach szczegółowości, a **Powtórzenie** tworzy kopie: liczbę (liczbę albo parametr liczby całkowitej, od 1 do 200) i krok między nimi w x, y i z. Powtarzana bryła to rząd desek, prętów lub otworów; użyta w przecięciu kopie przecinają się razem.
- Drzwi lub okno dostają też dwie nazwy ze swojej ściany: `WallThickness` i `Face` (1 lub −1, strona, w którą otwierają się drzwi).

## Bryły

Karta {{ui:Bryły}} wymienia bryły. Dodaj pudełko, wyciągnięcie, obrót lub przeciągnięcie:

| Bryła | Co ustawiasz |
|---|---|
| Pudełko | jego dwa narożniki: x0 do x1, y0 do y1, z0 do z1 |
| Wyciągnięcie | profil na płaszczyźnie roboczej (rzut, przód lub bok), położenie płaszczyzny i głębokość |
| Obrót | profil, oś na płaszczyźnie i kąt do 360° |
| Przeciągnięcie | ścieżka punktów i promień (pręt lub szyna) |

Każda liczba może być wpisaną liczbą albo wyrażeniem parametrów. Każda bryła ma kolor i **Widoczna, gdy**: zostaw pole puste, by pokazywać ją zawsze, albo podaj nazwę parametru Tak / Nie (albo porównanie, np. `Shelves >= 3`), by pokazywać ją tylko wtedy. To jest parametr widoczności.

### Rysowanie profilu

Profil wyciągnięcia lub obrotu rysuje się na jego płaszczyźnie roboczej pod podglądem:

- Kliknij na kartce, aby dodać punkt za wybranym.
- Przeciągnij punkt, aby go przesunąć. Punkty przyciągają się do siatki; przytrzymaj {{key:Shift}}, aby ustawić je swobodnie.
- Kliknij mały kwadrat na odcinku, aby dodać tam punkt. {{key:Shift}}+kliknięcie zamienia ten odcinek w łuk (kliknij ponownie, aby uzyskać drugi kierunek, a potem odcinek prosty).
- Kliknij dwukrotnie punkt, aby go usunąć.

Punkty wydrążeń ustawiają parametry: zmieniaj je w tabeli, a nie przeciąganiem.

## Operacje logiczne

Karta {{ui:Operacje logiczne}} wycina drugą bryłę z pierwszej albo je łączy. Wynik operacji logicznej można znowu wyciąć lub połączyć. Bryła użyta w operacji logicznej jest rysowana tylko jako jej część.

Gdy drugą bryłę ukrywa jej parametr Tak / Nie, pierwsza zostaje bez zmian; gdy ukryta jest pierwsza, wynik jest ukryty.

## Symbol na planie

Karta {{ui:Symbol na rzucie}} rysuje to, co plan pokazuje dla tej rodziny zamiast przecięcia jej brył: linie, prostokąty, okręgi, łuki, wielokąty i tekst, we własnych osiach rodziny. Każda część ma **pióro** (1–16, wyrażenie albo parametr Pióro), **wypełnienie** (brak, pełne, ukośne, krzyżowe, beton, izolacja, grunt albo parametr Wypełnienie), wyrażenie **pokazywana przez**, **zakres przecięcia** w milimetrach nad jej podstawą (część rysowana pełną grubością, gdy przecięcie rzutu jest w jej zakresie, cienko poniżej, a przerywanie powyżej: szafka nad przecięciem pokazuje się przerywanie), poziom szczegółowości i powtórzenie. Tekst może nazywać parametry jako `{Name}`. **Rzut pokazuje: Przecięcie brył** zachowuje przecinanie brył na planie, podczas gdy symbol pozostaje w rodzinie. Inne programy odczytują symbol jako rzut rodziny (linie i kształty; tekst zostaje w BimCraft).

## Rodziny wewnątrz

Karta {{ui:Rodziny wewnątrz}} umieszcza inną rodzinę wewnątrz tej: nogę w stole, uchwyt na drzwiach. Wybierz rodzinę, a potem miejsce (x, y, z), o ile jest obrócona (tylko ćwiartki obrotu: 0, 90, 180, 270), kiedy jest pokazywana i jakie wartości dostaje, po jednej w wierszu, jako `Height = Height - 40`. Zapisanie rodziny wewnętrznej rysuje tę ponownie; rodziny trzymanej przez inną nie można usunąć; rodzina nie może zawierać samej siebie, nawet przez inną, a zagnieżdżenie zatrzymuje się na czterech poziomach.

## Punkty aktywne

Punkt aktywny to punkt lub krawędź, którą przeciągasz, aby zmienić parametr. Na karcie {{ui:Punkty aktywne}} dodaj jeden, wybierz oś, wzdłuż której przeciąga, i parametr liczbowy, który zmienia, a jego położenie zapisz tymi samymi wyrażeniami co bryły. W podglądzie wybierz **Punkty aktywne** pod uchwytami, aby je przeciągać. Na umieszczonym elemencie na planie (wybierz go poleceniem {{ui:Zaznacz}}) punkty aktywne x i y pokazują się jako uchwyty (grip): przeciągnij jeden, a element przyjmie rozmiar, który stawia punkt aktywny w tym miejscu, przez wszystkie formuły między nimi; jedno Cofnij przywraca go. Punkt aktywny nie może zmienić parametru sterowanego, Tak / Nie ani słowa.

W widoku 3D te same punkty aktywne pokazują się jako uchwyty (grip) na wybranym elemencie, a punkty w górę i w dół (oś z) też się pokazują, czego plan nie potrafi narysować. Wybierz element, przeciągnij uchwyt wzdłuż jego osi i puść: element przyjmie rozmiar, który stawia punkt aktywny w tym miejscu, jako jeden krok cofnięcia. Uchwyty są ukryte, gdy włączone jest pudło przekroju, ponieważ używa tych samych uchwytów.

## Złącza

Rodziny umieszczane na podłodze (meble, wyposażenie i inne) mają kartę {{ui:Złącza}}: punkty, w których rura lub kanał łączy się z elementem, jak kurek i odpływ umywalki. Kliknij {{ui:Dodaj złącze}} i ustaw:

- **Rodzaj**: rura lub kanał oraz jego **System** (zimna woda, odpływ kanalizacyjny, nawiew…).
- **x**, **y** i **z**: gdzie się znajduje, w osiach rodziny. Podobnie jak liczby bryły, każda może być liczbą albo formułą parametrów, więc złącze przesuwa się wraz z rozmiarem.
- **Kierunek wyjścia**: w którą stronę rura lub kanał od niego odchodzi, wzdłuż jednej z osi rodziny (odpływ pod umywalką to **W dół**).
- **Rozmiar (mm)**: nominalny rozmiar rury (DN) albo średnica okrągłego kanału.
- **Przepływ**: **Wejście** dla złącza zasilanego (kurek), **Wyjście** dla złącza odprowadzającego.

Podgląd rysuje każde złącze jako pierścień ze strzałką wskazującą wyjście. Drzwi i okna nie mają złączy.

Dla elementu sanitarnego wybierz, który to jest, w polu **Element sanitarny** (miska ustępowa, umywalka, zlew kuchenny, prysznic, zlewozmywak pralniczy). Startowe elementy już to określają.

Każdy element umieszczony z rodziny dostaje swoje złącza jako porty w pliku IFC, a są one tworzone ponownie, gdy element zmienia rozmiar albo rodzina zostaje zapisana. Programy odczytujące systemy IFC widzą, do czego należy każda rura lub kanał.

## Podgląd i jego uchwyty

Podgląd to rodzina zapisana jako IFC tym samym kodem, który zapisuje ją do modelu, i odtworzona z powrotem. To, co widzisz, dostają inne programy. Pod nim **Pokazany rozmiar** ustawia wartości parametrów używane przez podgląd.

**Uchwyty** to kropki w podglądzie: **Rozmiar** pokazuje uchwyt dla Szerokości, Głębokości i Wysokości; **Wybrana bryła** pokazuje po jednym na każdej ścianie wybranej bryły. Przeciągnij uchwyt:

- na ścianie ustawionej przez parametr zmienia się pokazywany rozmiar (formuły rodziny są zachowane);
- na ścianie ustawionej przez wpisaną liczbę zmienia się ta liczba.

## Zapis

{{ui:Zapisz rodzinę}} sprawdza rodzinę, a potem rysuje ponownie każdy jej rozmiar i odtwarza każdy jej element, jako jeden krok, który możesz cofnąć. Jeśli rozmiar nie da się narysować przy tej zmianie (na przykład bryła miałaby w tym rozmiarze zerową szerokość), nic nie zostaje zapisane, a edytor wskazuje, który rozmiar.

Jeśli ktoś inny zapisał tę samą rodzinę, gdy twój edytor był otwarty (w sesji Live TeamWork albo w innym oknie), {{ui:Zapisz rodzinę}} odmawia i mówi o tym, zamiast zastępować jego zmianę twoją. Zamknij edytor, otwórz rodzinę ponownie, aby zobaczyć jego zmianę, i wprowadź swoją ponownie.

:::note
Geometria jest zapisywana jako własne bryły IFC: wyciągnięcia, obroty, przeciągnięte krążki i wyniki operacji logicznych. Nic nie jest zamieniane na listę trójkątów, więc pliki pozostają małe, a inne programy odczytują kształty jako kształty. Profile z łukami są zapisywane z łukami w IFC4; IFC2X3 nie ma segmentów łuku w profilu, więc tam łuki są zapisywane jako krótkie odcinki proste.
:::

Zobacz też [Rodziny i ich rozmiary](topic:families).
