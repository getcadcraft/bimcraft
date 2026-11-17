---
title: Umieść elewację i otwórz jej widok
summary: Umieść znacznik elewacji na rzucie kondygnacji, ustaw go tak, aby patrzył w odpowiednim kierunku, następnie znajdź jego rysunek w przeglądarce projektu, edytuj w nim i umieść go na arkuszu. Kroki dla układów wstążkowych i dla układu klasycznego.
keywords: elewacja, widok elewacji, znacznik elewacji, etykieta elewacji, umieść elewację, nowa elewacja, utwórz elewację, elewacja zewnętrzna, widok z boku, widok z przodu, widok z punktu, gdzie jest moja elewacja, otwórz elewację, elewacja na arkuszu, odwróć elewację, zmień nazwę elewacji, elewacja północna, układ kafelkowy widoków, podziel widok, plan i widok 3D obok siebie
from: a7cfd2b9
---

## Co zrobisz

Utworzysz własną elewację: rysunek budynku widziany z wybranego przez Ciebie punktu, z kierunkiem patrzenia, który wybierzesz. Wymaga to dwóch kliknięć na rzucie kondygnacji. Rysunek zostanie następnie wyświetlony wśród pozostałych elewacji budynku.

:::note
Cztery strony są już gotowe. Każdy budynek ma elewacje Północną, Wschodnią, Południową i Zachodnią w {{ui:Project browser}} pod {{ui:Elevations}}, bez umieszczania czegokolwiek. Umieść własną elewację, gdy chcesz widoku z innego miejsca: prostopadle do skrzydła pod kątem, z wnętrza dziedzińca lub jednej ściany wewnątrz pomieszczenia.
:::

## Gdzie znajduje się narzędzie

- Układy wstążkowe: {{ui:View}} › **Create** › {{ui:Elevation}}.
- Układ klasyczny: włącz {{ui:Draw}}, następnie {{ui:Build}} › {{ui:Elevation}}.
- Dowolny styl menu: polecenie nosi nazwę Elevation; paleta poleceń je znajdzie, a wiersz poleceń przyjmuje ELEVATION.

## Kroki

1. Wybierz {{ui:Elevation}}. Elewacja jest umieszczana na rzucie kondygnacji, więc jeśli byłeś w widoku 3D, BimCraft pokazuje rzut kondygnacji, na której się znajdowałeś. Kursor pokazuje **Wskaż miejsce, w którym stoi elewacja**.
2. Kliknij miejsce, z którego pobierany jest widok. Dla elewacji zewnętrznej kliknij poza budynkiem, nieco z dala od ściany, którą chcesz zobaczyć.
3. Kursor pokazuje teraz **Wskaż kierunek widoku**. Przesuń go w stronę budynku: strzałka pokazuje kierunek, a krótka linia przecinająca pierwsze kliknięcie to krawędź, z której patrzy widok. Kliknij.
4. Na rzucie pojawia się okrąg z numerem i wskaźnikiem. To jest znacznik elewacji. Pierwszy ma numer 1, kolejny 2.
5. Naciśnij Esc, aby zakończyć, albo umieść kolejny znacznik.

Umieszczenie znacznika to jeden krok: {{key:Mod+Z}} cofa tę operację.

## Otwórz rysunek

Rzut pozostaje przed Tobą po drugim kliknięciu. Rysunek znajduje się w {{ui:Project browser}}:

1. Otwórz {{ui:Elevations}}. Twoja elewacja jest wymieniona po czterech stronach jako **Elevation 1**.
2. Kliknij przycisk ołówka {{ui:Edit in this view}} w jej wierszu, aby zobaczyć rysunek i pracować w nim: przesuwać ściany, drzwi, okna i kondygnacje, dodawać notatki i wymiary. Zobacz [Edycja w elewacjach i przekrojach](topic:edit-in-elevations).
3. Kliknij sam wiersz, aby otworzyć zestaw rysunków, lub dodaj widok do własnego arkusza. Zobacz [Widoki i arkusze](topic:views-and-sheets).

W układzie klasycznym przeglądarka projektu znajduje się w lewym panelu, gdy {{ui:Draw}} jest włączone. W układach wstążkowych jest to karta {{ui:Project Browser}} w sekcji Właściwości.

## Co pokazuje widok

- Wszystko przed znacznikiem, o ile sięga budynek. Nic za nim.
- Kondygnacje z ich nazwami i wysokościami.
- Jeśli znacznik stoi wewnątrz budynku, to, w czym stoi, zostaje tam przecięte, jak przez przekrój. Aby uzyskać czystą elewację zewnętrzną, stań na zewnątrz.

## Zmień ustawienia

Wybierz znacznik na rzucie (kliknij jego okrąg narzędziem {{ui:Select}}). Właściwości zawierają:

- {{ui:Label}}: jego numer lub własną nazwę, do 8 znaków.
- {{ui:Flip the view}}: patrz w przeciwnym kierunku z tego samego miejsca.
- {{ui:Look as far as}}: jak daleko przed znacznikiem sięga widok. 0 pokazuje wszystko.

Naciśnij Delete, aby usunąć znacznik i jego rysunek. Cofnij przywraca oba.

:::tip
Aby podczas pracy widzieć jednocześnie rzut i widok 3D, użyj {{ui:View}} › **Okna** › {{ui:Tile Views}} w układach wstążkowych lub {{ui:Split}} w układzie klasycznym. Kliknięcie karty widoku wraca do jednego widoku.
:::

## Ograniczenia

- Znacznika nie można jeszcze przeciągnąć ani obrócić na rzucie. Usuń go i umieść ponownie albo użyj {{ui:Flip the view}}.
- Na liście widoków, które możesz dodać do arkusza, własna elewacja jest wymieniona wraz z przekrojami.
- Oznaczenia drzwi i okien są rysowane na czterech elewacjach bocznych, a nie na tej, którą umieściłeś.

## W pliku IFC

Znacznik jest zapisywany w pliku jako IfcAnnotation o nazwie "Elevation 1" z typem obiektu "Elevation marker", w kondygnacji, na której został umieszczony. Inny program wyświetla go jako adnotację; sam rysunek jest tworzony przez BimCraft z modelu za każdym razem.
