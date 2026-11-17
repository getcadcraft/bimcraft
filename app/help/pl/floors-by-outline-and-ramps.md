---
title: Podłogi o dowolnym kształcie, otwory i pochylnie
summary: Narysuj podłogę lub płytę po jej obrysie (balkon, wspornik, spocznik), wytnij w niej otwory i narysuj pochylnie wraz ze spocznikami.
keywords: podłoga, płyta, obrys, balkon, wspornik, spocznik, pomost, otwór w podłodze, otwór, szyb, pustka, pochylnia, nachylenie, pochylnia dostępna, pochylnia dla wózków, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Co zrobisz

Twórz podłogi, które nie podążają za pokojami, na przykład balkon wychodzący poza ściany, i rysuj pochylnie między kondygnacjami.

## Rysowanie podłogi po obrysie

1. Włącz {{ui:Rysuj}}, wybierz kondygnację, a następnie {{ui:Kompilacja}} › {{ui:Podłoga z obrysu}}.
2. W wierszu pod narzędziami wybierz rodzaj (płyta betonowa lub podłoga drewniana), jej zastosowanie (podłoga lub spocznik), grubość oraz to, o ile jej górna powierzchnia jest nad poziomem (0 = na poziomie podłogi kondygnacji; wartość ujemna ustawia ją niżej).
3. Klikaj narożniki. Narzędzie przyciąga się do ścian, linii siatki i ich przecięć; przytrzymaj {{key:Shift}}, aby utrzymać krawędź w kącie prostym. Długość każdej krawędzi i powierzchnia są pokazywane w trakcie. {{key:Backspace}} cofa ostatni narożnik.
4. Kliknij ponownie pierwszy narożnik, kliknij dwukrotnie albo naciśnij {{key:Enter}}, aby zakończyć.

## Wycinanie otworu

Kliknij podłogę (w widoku 3D lub po jej obrysie na rzucie), a następnie w {{ui:Właściwościach}} kliknij {{ui:Dodaj otwór}} i kliknij narożniki otworu wewnątrz podłogi, kończąc jak wyżej. Właściwości podłogi wymieniają jej otwory, każdy z przyciskiem {{ui:Usuń}}, oraz jej powierzchnię bez nich.

## Rysowanie pochylni

1. Wybierz {{ui:Kompilacja}} › {{ui:Pochylnia}}. Ustaw jej szerokość oraz to, czy idzie **do kondygnacji wyżej**, czy **w górę o wzniesienie**, które wpiszesz.
2. Wybierz sposób wyznaczenia: **według nachylenia** (na początek 1:12; pochylnia ma tyle długości, ile wymaga wzniesienie) albo **według długości** (drugie kliknięcie ustala długość, a nachylenie wynika z niej).
3. Kliknij podstawę pochylni (środek jej dolnej krawędzi), a potem kliknij kierunek w górę. Podgląd pokazuje jej długość, biegi i nachylenie.

Wzniesienie większe niż 30 in (760 mm) jest dzielone na biegi, między którymi jest spocznik o długości 5 ft (1525 mm). To typowe wartości planistyczne, a nie twoje normy: sprawdź przepisy obowiązujące w miejscu budowy. Pochylnia stromsza niż 1:12 jest oznaczana w jej {{ui:Właściwościach}}.

## Co powinieneś zobaczyć

- Każda podłoga, otwór i pochylnia to jeden krok: {{key:Mod+Z}} cofa go.
- Na rzucie obrys narysowanej podłogi (otwór jest zaznaczony krzyżykiem) oraz obrys pochylni, jej biegi, spoczniki i strzałka w górę z nachyleniem.
- Właściwości narysowanej podłogi (rodzaj, zastosowanie, grubość, góra, powierzchnia, otwory) i pochylni (szerokość, góra, wzniesienie, nachylenie lub długość); {{key:Delete}} usuwa każde z nich.
- Pochylnia do kondygnacji wyżej podąża za tą kondygnacją, gdy zmienia się jej wysokość.
- W pliku IFC: narysowana podłoga jest płytą (IfcSlab, podłoga lub spocznik) z wyciętymi otworami (IfcOpeningElement); pochylnia to IfcRamp złożony z pochyłych biegów (IfcRampFlight) i płyt spoczników, z nachyleniem i szerokością.

:::note
Podłogi narysowane w ten sposób zostają tam, gdzie je narysowano. Podłogi wykonane przez {{ui:Podłoga}} podążają za pokojami, gdy ściany się przesuwają: zob. [Pokoje, podłogi, sufity i dachy](topic:floors-and-roofs).
:::
