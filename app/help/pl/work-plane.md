---
title: Płaszczyzna robocza: ustaw, pokaż, spójrz na nią wprost
summary: Płaszczyzna robocza to płaszczyzna, której używają linie modelu, tekst modelu i Podgląd płaszczyzny roboczej. Ustaw ją na poziomie, ścianie, nazwanej płaszczyźnie odniesienia lub linii; pokaż ją w widokach; otwórz podgląd, aby rysować na pionowej płaszczyźnie.
keywords: płaszczyzna robocza, ustaw płaszczyznę roboczą, pokaż płaszczyznę roboczą, płaszczyzna odniesienia, podgląd płaszczyzny roboczej, nazwana płaszczyzna, ściana, poziom, pionowa płaszczyzna, płaszczyzna pionowa, rysuj na ścianie, rysunek elewacji, przyciąganie, wyrównanie, płaszczyzna ref
from: 8aceee1d
---

## Co zrobisz

Wybierzesz płaszczyznę, na której rysujesz, zobaczysz, gdzie się ona znajduje, i narysujesz coś na płaszczyźnie ustawionej pionowo.

## Kroki

1. Włącz **Rysuj** i otwórz menu **Konstrukcja** (w układzie wstążki: karta Architektura, grupa Płaszczyzna robocza).
2. Wybierz **Ustaw płaszczyznę roboczą**. Następnie wykonaj jedno z poniższych:
   - wybierz poziom w polu **Ustaw na**;
   - wybierz nazwaną płaszczyznę odniesienia z listy obok;
   - kliknij linię w rzucie: ścianę, linię siatki, płaszczyznę odniesienia, linię modelu lub system kurtynowy. Płaszczyzna robocza stanie się pionową płaszczyzną przechodzącą przez tę linię;
   - kliknij płaską ścianę w widoku 3D. Płaszczyzna robocza leży na tej ścianie.
3. Wybierz **Pokaż płaszczyznę roboczą**, aby ją zobaczyć: barwioną płaszczyznę z siatką o kroku 1 m w widoku 3D, przerywany kontur lub linię w rzucie oraz przerywany kontur w panelu elewacji i przekrojów. Wybierz ponownie, aby ją ukryć.
4. Wybierz **Podgląd płaszczyzny roboczej**, aby spojrzeć na płaszczyznę wprost. Czarne linie to model przecięty przez płaszczyznę. Jej narzędziami narysujesz na płaszczyźnie linię modelu, tekst modelu lub płaszczyznę odniesienia. **Spójrz na nią w 3D** obraca widok 3D tak, aby był zwrócony do płaszczyzny.

## Płaszczyzny odniesienia

Płaszczyzna odniesienia to nazwana płaszczyzna, którą rysujesz jako linię.

1. Wybierz **Płaszczyzna odniesienia**. Wpisz nazwę w jej wierszu, jeśli chcesz (w przeciwnym razie nazwa zostanie nadana za Ciebie), oraz wysokość.
2. Kliknij miejsce początku i miejsce końca. W rzucie tworzy to pionową płaszczyznę. W podglądzie płaszczyzny roboczej tworzy płaszczyznę prostopadłą do płaszczyzny roboczej.
3. Pokazuje się jako przerywana zielona linia z nazwą w rzucie, przerywany kontur w widoku 3D oraz przerywany kontur w panelu elewacji i przekrojów.
4. Zaznacz ją, aby zmienić nazwę, długość, wysokość i podstawę, albo naciśnij **Użyj jako płaszczyzny roboczej**.

Dwie płaszczyzny odniesienia nie mogą mieć tej samej nazwy, ponieważ po nazwie się je wybiera.

## Warto wiedzieć

- Model bez ustawionej płaszczyzny roboczej działa na swoim najniższym poziomie.
- Płaszczyzna robocza jest zapisywana w pliku. Pokazywanie lub ukrywanie jest zapamiętywane w tej przeglądarce, a nie w pliku.
- Jeśli płaszczyzna robocza podąża za płaszczyzną odniesienia i przesuniesz tę płaszczyznę, płaszczyzna robocza przesunie się razem z nią.
- Na pionowej płaszczyźnie roboczej narzędzia Linia modelu i Tekst modelu otwierają podgląd, ponieważ rzut nie może wskazywać wysokości.
- Narzędzia rysowania łapią końce płaszczyzn odniesienia narysowanych w rzucie tak samo, jak łapią końce innych linii w podglądzie.

## W pliku IFC

- Płaszczyzna robocza to zestaw właściwości (CadCraft_WorkPlane) na projekcie.
- Płaszczyzna odniesienia to IfcAnnotation z typem obiektu ReferencePlane i jej nazwą. Jej kształtem jest zamknięty kontur płaszczyzny, dzięki czemu inny program pokazuje, gdzie się znajduje. Jej zestaw CadCraft_ReferencePlane zawiera początek, kierunek, wektor normalny i zasięg. IFC nie ma klasy dla płaszczyzny odniesienia; adnotacja nie jest liczona jako element budynku i nie ogranicza pomieszczeń.
