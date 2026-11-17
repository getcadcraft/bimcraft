---
title: Widoki wewnętrzne
summary: Utwórz jeden arkusz pokazujący cztery ściany pomieszczenia od wewnątrz, z wymiarami i znacznikami, i zapisz go jako PDF.
keywords: widok wewnętrzny, pomieszczenie, ściana, szafka, kuchnia, elewacja, arkusz, PDF, wymiar, znacznik, przestrzeń, A-501
from: 1e3a70a8
---

## Co zrobisz

Wybierz pomieszczenie, a otrzymasz jeden arkusz pokazujący jego cztery ściany tak, jak widziałbyś je, stojąc w środku. Jest przeznaczony do kuchni, łazienek i każdego pomieszczenia, w którym trzeba zobaczyć szafki, drzwi i okna na każdej ścianie.

## Utwórz arkusz

1. Wybierz pomieszczenie. W planie z włączonym {{ui:Rysuj}} kliknij wewnątrz pomieszczenia. W widoku 3D lub w drzewie modelu wskaż przestrzeń (IfcSpace).
2. W **Właściwościach** kliknij {{ui:Widoki wewnętrzne…}}.
3. Okno dialogowe otworzy się z arkuszem.
4. Kliknij {{ui:Pobierz PDF}}, aby go zapisać. Plik otrzyma nazwę "<file> — Interior elevations — <room>.pdf" i będzie plikiem PDF wektorowym.
5. Gdy skończysz, kliknij {{ui:Zamknij}}.

## Co pokazuje arkusz

Arkusz zawiera cztery widoki, po dwa w rzędzie, w jednej skali: największej standardowej skali, która się mieści. Są to **Ściana północna**, **Ściana wschodnia**, **Ściana południowa** i **Ściana zachodnia**. Tabliczka rysunkowa zawiera numer arkusza A-501, tytuł „Widoki wewnętrzne — ” z numerem i nazwą pomieszczenia, nazwę projektu i datę.

Każdy widok jest przecięty przez środek pomieszczenia i pokazuje ścianę po danej stronie. Ściany boczne oraz wszystko, co w nich wycięto, na przykład okno, pokazują się jako szare przecięcia (poché) wokół widoku. Widok kończy się tuż za płaszczyzną ściany, więc nic za ścianą nie jest widoczne.

Każdy widok zawiera:

- szerokość pomieszczenia pod nim, od wewnętrznej płaszczyzny do wewnętrznej płaszczyzny;
- wysokość pomieszczenia obok niego, od podłogi do poziomu powyżej;
- kwadratowy znacznik na każdych drzwiach i sześciokątny znacznik na każdym oknie w tej ścianie, z ich oznaczeniem (D1, W1 itd.);
- okrągły znacznik z numerem pozycji na każdym elemencie biblioteki umieszczonym przed tą ścianą: szafkach, armaturze i wyposażeniu.

:::note
Widoki są tworzone z modelu za każdym razem, gdy otwierasz okno, więc zawsze się z nim zgadzają. Przesuń szafkę, a potem ponownie otwórz okno.
:::

## Na własnych arkuszach

Każda ściana każdego pomieszczenia jest też widokiem, który możesz umieścić na arkuszu utworzonym przez siebie: w przeglądarce projektu kliknij {{ui:Nowy arkusz}}, a potem w obszarze **Widoki wewnętrzne** dodaj „101 Kuchnia — Ściana północna” i pozostałe. Widok ma te same wymiary i znaczniki.

## Jeszcze nie zbudowano

Widoki wewnętrzne w wygenerowanym zestawie rysunków (pochodzą z **Właściwości** pomieszczenia lub z własnych arkuszy), pomieszczenia, które nie są w większości prostokątne (widok wygląda jak kwadrat po każdej stronie prostopadłościanu pomieszczenia), rysowanie, notatki lub własne wymiary na tych widokach oraz wybór, które ściany pokazać. Zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).
