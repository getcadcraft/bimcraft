---
title: Sprawdzanie rur i przewodów względem konstrukcji
summary: Uruchom gotowe zestawy kolizji rur i przewodów ze ścianami, płytami, belkami i słupami, znajdź przebiegi bliżej konstrukcji niż ich izolacja i odstęp oraz wypisz otwory, jakich przebiegi potrzebują w ścianach i płytach, jako CSV i BCF.
keywords: mep, kolizja, sprawdzanie kolizji, koordynacja, konstrukcja, ściany, płyty, belki, słupy, odstęp, kolizja miękka, izolacja, szczelina, otwór, otwory, przejście, tuleja, rdzeń, wiercenie rdzeniowe, roboty towarzyszące, bcf, csv
from: 2d597f01
---

## Co zrobisz

Upewnij się, że instalacje pasują do budynku: co wchodzi w konstrukcję, co przechodzi zbyt blisko niej i gdzie ściany oraz płyty wymagają otworów. Otwórz w lewym panelu {{ui:Sprawdzanie kolizji}}; sekcja **Rury i przewody względem konstrukcji** znajduje się pod zwykłym sprawdzaniem.

## Kolizje twarde

Dwie listy zestawów oferują teraz także **Rury i przewody**, **Ściany**, **Płyty i dachy**, **Belki**, **Słupy** oraz **Konstrukcję** (wszystkie cztery), z liczbą elementów w każdej. Kliknij {{ui:Rury i przewody × konstrukcja}}, aby wybrać pierwszy i ostatni zestaw i uruchomić sprawdzenie; albo wybierz dowolną parę samodzielnie i kliknij {{ui:Uruchom}}. Zobacz [Sprawdzanie kolizji](topic:clash-check).

## Odstępy

Niektóre instalacje potrzebują wolnej przestrzeni wokół siebie: na izolację, miejsce do pracy lub na tuleję.

1. Nadaj przebiegowi rury lub przewodu grubość **Izolacji** we właściwościach (nic dla niej nie jest rysowane).
2. W sprawdzaniu kolizji wpisz **Odstęp wokół rur i przewodów** (mm).
3. Kliknij {{ui:Sprawdź odstępy}}: każda część bliżej ściany, płyty, belki lub słupa niż jej izolacja plus odstęp zostaje wypisana z odległością, jaką ma, i odległością, jakiej wymaga. Kliknij wiersz, aby zobaczyć te dwie wartości.

Część, która przechodzi przez ścianę lub płytę, jest otworem, a nie odstępem, i jest wypisana właśnie tam.

## Potrzebne otwory

Kliknij {{ui:Potrzebne otwory}}. Tam, gdzie oś przebiegu rury lub przewodu przecina ścianę albo płytę, BimCraft wypisuje potrzebny otwór: okrągły dla okrągłej rury lub przewodu, w przeciwnym razie prostokątny, o wymiarze równym zewnętrznemu rozmiarowi przebiegu, plus dwukrotność izolacji, plus dwukrotność odstępu, wycentrowany w miejscu przecięcia. Kliknij wiersz, aby zobaczyć przebieg oraz ścianę lub płytę.

- {{ui:Otwory jako CSV}}: jeden wiersz na otwór, z przebiegiem, jego rozmiarem i izolacją, rozmiarem otworu, elementem, przez który przechodzi, jego GlobalId, poziomem, współrzędnymi X, Y i Z środka oraz tym, na jaką głębokość przebieg wchodzi w element.
- {{ui:Otwory jako problemy BCF}}: jedno zagadnienie na otwór, z kamerą skierowaną na ten otwór oraz z wybranym przebiegiem i elementem, dla programu konstruktora konstrukcji.

:::note
Nic nie jest wycinane: otwory to lista dla osób, które je wymiarują. Odstęp wpisujesz samodzielnie; żaden przepis nie mówi, jak duży musi być otwór. Belki i słupy są kolizjami, a nie otworami: to, czy rura może przechodzić przez belkę lub słup, decyduje konstruktor.
:::
