---
title: Odtwarzanie powodzi, wiatru lub trzęsienia ziemi w budynku
summary: Woda wznosząca się przez pomieszczenia, ciśnienie wiatru na każdej kondygnacji lub wstrząsy kondygnacji podczas trzęsienia ziemi, odtwarzane na rzucie lub elewacji z suwakiem czasu. Proste modele z wypisanymi założeniami; nie są sprawdzeniem przepisów ani projektem konstrukcyjnym.
keywords: zagrożenie, powódź, wiatr, trzęsienie ziemi, sejsmika, dryf, kołysanie, siła podstawy, poziom wody, klimat, scenariusz, poziom morza, odtwarzanie, kondygnacja, okres
from: ff0d34d1
---

Sekcja {{ui:Odtwarzanie zagrożeń}} w lewym panelu odtwarza zagrożenie na otwartym modelu IFC. Nic w modelu nie zostaje zmienione.

:::warning
To **proste modele, które pokazują, co zagrożenie robi z tym układem**, a nie badanie powodziowe, sprawdzenie przepisów dotyczących wiatru ani projekt konstrukcyjny. Każdy wynik wypisuje swoje założenia.
:::

## Powódź

Ustaw najwyższy poziom wody ponad najniższą kondygnacją oraz minuty wzrostu, utrzymania i opadania. Woda wpływa do pomieszczenia przez otwór, którego próg został przez nią przekroczony, a pomieszczenia połączone z mokrymi przez otwory poniżej poziomu wody stoją na tym samym poziomie (quasi-statycznie). Tabela podaje, kiedy każde pomieszczenie po raz pierwszy zostaje zalane i na jaką głębokość; rzut to odtwarza. Wpisz największą ilość wody, jaką pomieszczenie może przyjąć, a pomieszczenia ponad tę wartość będą ostrzeżeniami. **Scenariusze klimatyczne:** wczytaj własny plik scenariusza (JSON lub CSV z rokiem, wzrostem poziomu morza i współczynnikiem powodzi) i wybierz rok. Albo włącz dodatek Scenariusze klimatyczne, wybierz scenariusz i rok: powódź zostanie wtedy policzona dwukrotnie, obecna obok przyszłej (zobacz „Scenariusze klimatyczne: powódź, upał i pożar w 2050 i 2080 roku”). Rodzaje Narażenie na pożar oraz Upał: przyszły plik pogody również znajdują się na tej liście.

## Wiatr

Ciśnienie wynika ze wzoru ½ρV², a prędkość rośnie wraz z wysokością; siła na kondygnację to to ciśnienie pomnożone przez współczynnik porywów, dwa współczynniki ciśnienia, szerokość i wysokość kondygnacji. Otrzymujesz siłę ścinającą, moment wywracający i kołysanie.

## Trzęsienie ziemi

Budynek ścinany: masa na piętro (rzut × kilogramy na metr kwadratowy, które ustawiasz), ta sama sztywność w każdej kondygnacji, dopasowana do pierwszego okresu, który podajesz (jedna dziesiąta sekundy na kondygnację, jeśli zostawisz pole puste, a program o tym informuje), tłumienie oraz wygenerowany ruch podłoża (impuls lub przefiltrowany szum) przy wybranym szczytowym przyspieszeniu. Wynikiem są dryf każdej kondygnacji, przyspieszenia pięter i siła podstawy; elewacja odtwarza kołysanie, narysowane większe, niż jest w rzeczywistości. Wpisz dopuszczalny współczynnik dryfu, a kondygnacje ponad nim będą ostrzeżeniami. Model jest sprężysty: nic nie plastyfikuje się ani nie pęka.

## Sztywność pięter z ramy analitycznej

Przy trzęsieniu ziemi lub kołysaniu od wiatru wybierz **Rama analityczna** jako źródło sztywności zamiast wpisywania okresu. Każde piętro jest po kolei popychane w bok, rama (belki, słupy, usztywnienia, stropy) jest rozwiązywana, a sztywność pięter, przy współpracy wszystkich elementów, napędza obliczenia. Ciężar to ciężar własny elementów plus obciążenie na metr kwadratowy, które ustawiasz w polu na rzucie każdego piętra. Pokazywany jest rzeczywisty pierwszy okres. Model jest sprężysty: nic nie plastyfikuje się, a skręcanie nie jest modelowane. Dla wiatru siły na kondygnacjach nadal są założonymi wartościami opisanymi wyżej (profil potęgowy, Twój współczynnik porywów i stałe współczynniki ciśnienia, a nie norma wiatrowa); tylko kołysanie pochodzi z ramy, przez rozwiązanie pełnej macierzy sztywności ramy dla tych sił. Model wymaga pliku IFC z ramą, którą karta Analiza potrafi odczytać.

## Jednostki

Głębokości wody, kołysanie i dryf kondygnacja po kondygnacji, odległości i pola są pokazywane w wybranych przez Ciebie {{ui:Jednostkach}}. Siły (kN), czasy i przyspieszenia zachowują własne jednostki, a wartość wpisana w polu oznaczonym w metrach pozostaje w metrach. To samo dotyczy wyników ewakuacji, światła dziennego, ogrzewania i chłodzenia oraz wyposażenia: długości, pola i objętości podążają za Twoim wyborem; ciśnienie, przepływ, temperatura, energia i moc nigdy nie są przeliczane.
