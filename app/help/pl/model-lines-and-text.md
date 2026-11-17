---
title: Linie modelu i tekst modelu: rysowane w modelu, na płaszczyźnie roboczej
summary: Linia modelu to linia, polilinia lub łuk, który żyje w modelu i pojawia się we wszystkich widokach, które ją widzą. Tekst modelu to trójwymiarowe napisy o rzeczywistej głębokości. Oba rysuje się na płaszczyźnie roboczej.
keywords: linia modelu, tekst modelu, tekst 3D, napisy, szyld, oznakowanie, linia w 3D, łuk, polilinia, płaszczyzna robocza, wyciągnięty tekst, czcionka, głębokość, linia detalu, linia rysunkowa, adnotacja, IfcAnnotation
from: fc9cccb5
---

## Co zrobisz

Narysujesz linie i napisy, które są częścią modelu, a nie jednego widoku.

## Kroki

1. Najpierw ustaw płaszczyznę roboczą (zob. **Płaszczyzna robocza**). Płaszczyznę poziomą rysuje się na planie, a pionową w Podglądzie płaszczyzny roboczej.
2. Dla linii wybierz **Linia modelu** w menu {{ui:Kompilacja}} i wybierz **Linia**, **Polilinia** albo **Łuk (trzy punkty)**:
   - linia to dwa kliknięcia;
   - polilinia to kliknięcie na każdy punkt, potem Enter lub dwukrotne kliknięcie. Kliknięcie w pierwszy punkt ją zamyka;
   - łuk to trzy kliknięcia: początek, punkt, przez który przechodzi, i koniec.
3. Dla tekstu wybierz **Tekst modelu**. Wpisz słowa, ustaw wysokość wielkich liter i głębokość, a następnie kliknij miejsce, w którym zaczyna się tekst (lewy koniec linii bazowej).
4. Zaznacz linię lub tekst, by zobaczyć go we {{ui:Właściwościach}}. Słowa, wysokość i głębokość tekstu można tam zmienić. Klawisz Delete usuwa element.

## Gdzie się pokazują

- Linia modelu pojawia się na planie swojego poziomu, w widoku 3D, w panelu elewacji i przekrojów oraz w Podglądzie płaszczyzny roboczej, gdy leży na płaszczyźnie roboczej. Linia rysunkowa (Adnotuj, Linia) należy tylko do jednego widoku.
- Tekst modelu to geometria bryłowa: pokazuje się wszędzie tam, gdzie model: na planie, w 3D, na elewacjach i przekrojach oraz na arkuszach.
- Linie modelu nie są jeszcze rysowane na wydrukowanych arkuszach. Tekst modelu jest.

## Czcionka

Tekst modelu używa tej samej czcionki co arkusze i pliki PDF: Liberation Sans, na licencji SIL Open Font License. Litera, której czcionka nie ma, jest rysowana jako znak zapytania, a ty zostajesz o tym poinformowany, wskazując którą. Jest jedna czcionka i jedna grubość. Litery są rozmieszczane według szerokości zapisanych w samej czcionce, bez kerningu.

## W pliku IFC

- Linia modelu to IfcAnnotation z typem obiektu ModelLine. Jej kształt to krzywa 3D: polilinia albo przycięty okrąg dla łuku.
- Tekst modelu to IfcBuildingElementProxy z typem obiektu ModelText. Jego kształt to jedna wyciągnięta bryła dla każdego fragmentu litery, z otworami w literach takich jak O i B. Jego ilości to pole powierzchni czołowej i objętość (pole powierzchni czołowej razy głębokość).

## Warto wiedzieć

- Każdy rozmiar jest wykonywany tak, jak go zamówisz. Odrzucana jest tylko linia bez długości, łuk, którego trzy punkty leżą na jednej prostej, lub tekst bez liter, bo nie ma czego wykonać.
- Każda linia oraz każdy tekst lub zmiana w nim to jeden krok {{ui:Cofnij}}.
