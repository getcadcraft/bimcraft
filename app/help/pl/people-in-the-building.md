---
title: Przeprowadź ludzi przez budynek
summary: Ewakuacja albo zwykły dzień przybyć przez twoje pomieszczenia, drzwi i schody, z kolejkami tam, gdzie budynek się zwęża, najdłuższą drogą do wyjścia z każdego pomieszczenia i wynikami jako Problemy. Zgrubny model tłumu do decyzji projektowych, a nie certyfikat bezpieczeństwa pożarowego.
keywords: ludzie, ewakuacja, wyjście ewakuacyjne, ucieczka, wyjście, długość drogi, kolejka, tłum, przepływ, szerokość drzwi, schody, przyjazdy, wąskie gardło, symulacja, użytkownicy, pieszy, co jeśli, zablokowane drzwi
from: 84aa8920
---

Sekcja {{ui:Ludzie w budynku}} lewego panelu przeprowadza ludzi przez pomieszczenia, drzwi i schody otwartego modelu IFC. Nic w modelu nie jest zmieniane i nic nie jest przesyłane.

:::warning
To jest **pomoc projektowa, a nie certyfikat bezpieczeństwa pożarowego**. Nie uwzględnia ognia, dymu, paniki, różnic w mobilności ani tego, czego wymaga przepis. Ograniczenia należą do ciebie: najdłuższa droga do wyjścia i dostępny czas to liczby, które wpisujesz, a żadna nie jest zakładana.
:::

## Uruchom

1. Otwórz model z zamkniętymi pomieszczeniami i drzwiami. Drzwi z pomieszczeniem tylko po jednej stronie są wyjściem; drzwi między dwoma pomieszczeniami je łączą; schody łączą pomieszczenia na swoich końcach.
2. Wybierz **Ewakuacja** (wszyscy idą do wyjścia), **Przyjazdy** (wszyscy wchodzą i idą do pomieszczenia) albo **Wymiana** (osoby w pomieszczeniach wychodzą, a tyle samo wchodzi), oraz powierzchnię podłogi na osobę. Pomieszczenia nazwane jak korytarz, klatka schodowa, hol czy toaleta nikogo nie mieszczą.
3. Kliknij {{ui:Uruchom}}. Otrzymasz czas, w którym wyjdzie ostatnia osoba (oraz kiedy wyjdzie połowa i dziewięć na dziesięć osób), kolejkę przy każdych drzwiach i schodach, pomieszczenie z najdłuższą drogą oraz plan odtwarzający przebieg.

## Co jeśli

Zaznacz {{ui:Zamknięte}} przy drzwiach w tabeli i uruchom ponownie: ludzie znajdą inną drogę, albo pomieszczenia bez wyjścia zostaną wymienione jako błędy. Dwukrotnie szersze drzwi opróżniają pomieszczenie znacznie szybciej; tabela pokazuje, gdzie są kolejki.

## Jak to działa

Każde pomieszczenie to siatka, więc ludzie chodzą wokół rogów, a nie przez ściany. Prędkość spada, gdy pomieszczenie się zapełnia (S = 1.4 (1 − 0.266 D) m/s, D w osobach na m²). Drzwi przepuszczają 1.3 osoby na sekundę na każdy metr swojej szerokości, minus 150 mm z każdej strony; schody 1.0 i wolniejsze chodzenie. Ludzie czekają w kolejce w kolejności przybycia. Ten sam numer przebiegu powtarza dokładnie ten sam przebieg.

Asystent może uruchomić to samo: poproś o ewakuację albo o najdłuższą drogę do wyjścia z każdego pomieszczenia.

## Osoby w każdym pomieszczeniu

Otwórz {{ui:Osoby w każdym pomieszczeniu}}, aby wpisać liczbę dla dowolnego pomieszczenia. Puste pole używa liczby z powierzchni podłogi (pokazanej na szaro); 0 opróżnia pomieszczenie. Twoje liczby są używane w przebiegu i są przechowywane w tej przeglądarce.

## Przeciwny ruch przy drzwiach

W trybie **Wymiana** osoby wychodzące i wchodzące spotykają się przy tych samych drzwiach. Gdy drzwi przepuszczają kogoś w przeciwnym kierunku tuż za ostatnią osobą, zachowują część swojej przepustowości (tutaj 0.8; to założenie, ponieważ opublikowane wartości się różnią), a tabela liczy zmiany kierunku. Drzwi, które często zmieniają kierunek, są wymienione w Problemach jako uwaga.

## Schody i spoczniki

Każdy spocznik schodów kosztuje idącego jedną sekundę na zawrócenie (założenie). Prosta klatka schodowa nie ma żadnego; schody L lub U mają jeden. Przepustowość schodów nadal wynika z szerokości ich biegu.

## W widoku 3D

Zaznacz {{ui:Pokaż ludzi w widoku 3D}}, a idący pojawią się jako postacie w modelu, pokolorowane według tego, co robią, i poruszają się podczas odtwarzania przebiegu. Nic nie jest dodawane do modelu.
