---
title: Sprawdź pogłos pomieszczenia i posłuchaj go
summary: Czas pogłosu w pasmach oktawowych dla każdego pomieszczenia (Sabine i Eyring), wyliczony z jego wielkości i wykończeń, oraz własny cel, a także głos, klaśnięcie lub muzyka odtworzone przez obliczoną odpowiedź impulsową pomieszczenia.
keywords: akustyka, pogłos, czas pogłosu, rt60, sabine, eyring, pochłanianie, echo, dźwięk, słuchanie, odpowiedź impulsowa, mowa, sala lekcyjna, biuro, dywan, płytka sufitowa, hałas
from: 16996cbb
---

Sekcja {{ui:Akustyka pomieszczeń}} w lewym panelu określa, jak długo dźwięk wybrzmiewa w każdym pomieszczeniu. Odczytuje powierzchnię podłogi, wysokość, ściany, drzwi i okna każdego pomieszczenia z otwartego modelu IFC. Nic w modelu nie jest zmieniane.

## Wybierz wykończenia

Jeśli model podaje, co znajduje się na powierzchni, pomieszczenie to odczytuje: wewnętrzną warstwę typu każdej ściany (gips, tynk, cegła, beton i bloczek są rozpoznawane), rodzaj podłogi (drewno lub beton) oraz to, czy sufit jest płytkowy. Etykieta obok każdego wyboru mówi, czy pochodzi on z modelu, jest wartością domyślną, czy Twoim wyborem; wybierz inne wykończenie, aby go zastąpić. Wszystko, czego model nie określa, pozostaje na wartości domyślnej. Współczynniki to **typowe opublikowane wartości**; zastąp je danymi testowymi produktu, gdy je masz. Wpisz **cel** (najdłuższy pogłos średniej częstotliwości, jaki chcesz osiągnąć), a każde pomieszczenie powyżej niego otrzyma ostrzeżenie wraz z pochłanianiem, które by go obniżyło.

## Odczytaj tabelę

Pogłos podano dla zakresu od 125 Hz do 4 kHz. Sabine pasuje do pomieszczeń żywych, a Eyring do martwych; wiersz oznaczony *Użyte* stosuje Eyringa, gdy średnie pochłanianie przekracza 0.2. Uwzględniono pochłanianie powietrza (skraca ono wysokie pasma w dużych pomieszczeniach). To model statystyczny: zakłada równomierne rozchodzenie się dźwięku, więc długie lub płaskie pomieszczenia oraz bardzo małe dają jedynie przybliżenie, a meble, ludzie i otwarte drzwi nie są uwzględniane.

## Odsłuchaj

{{ui:Odtwórz w tym pomieszczeniu}} odtwarza głos (wygenerowany tutaj), klaśnięcie, szarpane dźwięki lub **własny plik dźwiękowy** (pozostaje na Twoim komputerze) przez odpowiedź impulsową obliczoną dla pomieszczenia: dźwięk bezpośredni, pierwsze odbicia pudła o takiej wielkości oraz ogon, który wygasa w czasie pogłosu pomieszczenia w każdym paśmie. {{ui:Odtwórz bez pomieszczenia}} odtwarza ten sam dźwięk na tym samym poziomie, bez pomieszczenia. Odpowiedź impulsową lub dźwięk w pomieszczeniu można zapisać jako pliki WAV. Brzmi jak pomieszczenie o takiej wielkości i wykończeniu, a nie jak jakiekolwiek rzeczywiste pomieszczenie.

## Ludzie i meble

Wpisz liczbę **osób w tym pomieszczeniu**, aby dodać ich pochłanianie. Meble zawarte w modelu (kanapy, łóżka, krzesła, stoły, szafy, rozpoznawane po nazwie) dodają własne pochłanianie. Wartości są przybliżonymi wartościami planistycznymi, zaokrąglonymi; w przypadku ważnego pomieszczenia zastąp je pomiarami.

## Źródło i słuchacz

W sekcji {{ui:Źródło i słuchacz}} naciśnij {{ui:Umieść źródło}} lub {{ui:Umieść słuchacza}} i kliknij plan pomieszczenia. Odtwarzany dźwięk jest wtedy słyszany z tego miejsca: dźwięk bezpośredni dociera po przebyciu odległości, a część pogłosowa ma poziom odpowiadający tej odległości. Wyczyść oba, aby wrócić do pola odległości.

## Nierównomierne pochłanianie i mody pomieszczenia

W sekcji {{ui:Nierównomierne pochłanianie (pomieszczenie prostopadłościenne)}} wpisz pomieszczenie jako prostopadłościan i wybierz wykończenia podłogi, sufitu i ścian. Tabela dodaje do Sabine i Eyringa metody Fitzroya i Arau-Puchadesa: traktują one osobno trzy pary przeciwległych powierzchni, więc pomieszczenie z dywanem i twardym sufitem nie jest odczytywane jako zbyt krótkie. Gdy pary bardzo się różnią, uwaga wskazuje, której wartości należy ufać. Pod tabelą **Mody pomieszczenia** wymieniają najniższe fale stojące pudła oraz częstotliwość, poniżej której pomieszczenie ma odrębne mody zamiast równomiernego pola dźwiękowego. Są to przewidywania dla pomieszczenia prostopadłościennego, pomoc w projektowaniu, a nie pomiar.

## Jednostki

Powierzchnie, wysokości, objętości i odległości pomieszczeń są pokazywane w wybranych {{ui:Jednostki}} (stopy kwadratowe i sześcienne, cale, milimetry, centymetry lub metry). Samo obliczenie pozostaje w SI; zmienia się tylko wyświetlanie. Czasy (sekundy), częstotliwości i poziomy pozostają bez zmian.
