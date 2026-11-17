---
title: Śledź kondygnację, ustaw pióra dla widoku, naszkicuj schody, otwórz OBJ
summary: Pokaż inną kondygnację przerywaną linią pod rzutem i ustaw ją w linii; nadaj ścianom, drzwiom i oknom osobne pióro w jednym widoku; narysuj linię chodu, aby uzyskać schody; otwórz siatkę Wavefront OBJ.
keywords: odniesienie śledzenia, podgląd, podkład, pióro, grubość linii, typ linii, nadpisanie, schody, szkic, spocznik, OBJ, siatka, import, Wavefront
from: 333ebbde
---

## Śledź kondygnację

Wybierz {{ui:Śledzenie}} w menu {{ui:Kompilacja}}, a potem widok z listy: rzut innej kondygnacji, rzut sufitu kondygnacji albo wyniesienie (przycięte do swojego kadru). Jej ściany, słupy i stropy pokażą się przerywanie pod rzutem, który rysujesz. Przesuń ją, klikając punkt bazowy na odniesieniu, a potem miejsce, w które ten punkt ma trafić, albo wpisz X, Y i kąt (obraca się wokół własnego środka). {{ui:Resetuj}} przywraca ją na miejsce, {{ui:Ukryj}} usuwa. To tylko odniesienie: niczego w nim nie da się zaznaczyć, nie jest drukowane i nie zapisuje się w IFC. BimCraft pamięta je dla każdej kondygnacji w tej przeglądarce.

## Pióra dla widoku

Wybierz {{ui:Pióra}}. Określ, do czego jest pióro: wszystkie ściany, wszystkie drzwi, wszystkie okna, typ wybranego elementu albo wybrane elementy. Wybierz grubość, linię (ciągła, przerywana, kropkowana) i kolor, a potem {{ui:Zastosuj}}. Zmiana dotyczy tylko rzutu tej kondygnacji. Zaznaczenie ma pierwszeństwo przed typem, a typ przed całą kategorią. {{ui:Wyczyść wszystko}} je usuwa. Są zapamiętane w tej przeglądarce. Zaznacz **Kolory piór w 3D**, aby kolorowe pióra były widoczne na modelu w widoku 3D (grubość i kreska należą do linii, więc widać tam tylko kolor); odznacz, aby wrócić. {{ui:Drukuj}} rysuje je na PDF rzutu: grubość skaluje się od ekranu (domyślne pióro ściany 1,75 piksela to 0,5 mm), kreski pozostają kreskami, a kolor drukuje się w swojej wartości dla motywu papieru.

## Schody z szkicu

Wybierz {{ui:Szkicuj schody}} i kliknij narożniki linii chodu, zaczynając od dolnego stopnia. Jedna linia to schody proste, dwie linie stykające się pod kątem prostym to schody L, a trzy linie (w górę, w poprzek, z powrotem) to schody U. Naciśnij {{key:L}}, aby narysować spocznik: kliknij jego narożniki i naciśnij {{key:Enter}}; jego krótszy bok ustala szerokość schodów. Naciśnij {{key:Enter}}, aby umieścić schody. Każda stopnica wylicza się z długości linii i liczby podstopnic potrzebnych na wysokość. Potem są to zwykłe schody: zmienisz je we Właściwościach, a klatka schodowa i poręcze pójdą za nimi.

Zaznacz **Utwórz z tego rodzinę** w wierszu narzędzia (lub naciśnij {{key:F}}) przed {{key:Enter}}, aby umieścić schody jako rodzinę (prosty, L lub U). Wchodzą jako jeden element i otwierają się w edytorze rodzin z szerokością, stopnicą, całkowitą wysokością, stopnicami w każdym biegu oraz przerwą schodów U jako parametrami, więc możesz dodać rozmiary, symbol rzutu lub punkty aktywne. Stopnice i wysokość podstopnic wynikają z nich. Nie ma w nich poręczy ani klatki schodowej: te należą do zwykłych schodów.

## Otwórz OBJ

Otwórz plik `.obj` jak każdy inny plik. OBJ nie ma jednostek, więc BimCraft odczytuje metry z osią Y skierowaną w górę, jak zapisuje ją większość programów. Każdy obiekt lub grupa staje się jednym elementem siatki na jednej kondygnacji, który możesz potem oglądać, mierzyć, przecinać, umieścić w modelu i zapisać jako IFC. Linie, krzywe i powierzchnie są pomijane, a pasek stanu to pokazuje.

Obiekt, który jest dokładnie prostopadłościanem (zamknięta siatka z dwiema równoległymi, identycznymi ścianami czołowymi i płaskimi bokami prostopadłymi do nich: płyta, słupek, blok ściany, blacha z otworami), zapisuje się w IFC jako własna bryła wyciągnięta IFC, z konturem i głębokością, a nie jako lista trójkątów. Inne programy odczytują ją jako prawdziwą bryłę, jest mała, a jej głębokość i kontur można później edytować. Pasek stanu podaje, ile obiektów zachowano w ten sposób. Wszystko, co nie jest dokładnie prostopadłościanem (kształt zwężający się, siatka z jednym przesuniętym wierzchołkiem, siatka z przerwą), pozostaje trójkątami. Plik STEP jest odczytywany tak samo.
