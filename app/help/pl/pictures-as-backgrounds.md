---
title: Umieść obraz pod rzutem
summary: Umieść obraz PNG, JPEG lub WebP (skan rzutu, szkic, zdjęcie terenu, zdjęcie lotnicze) pod rzutem poziomu albo na pionowej płaszczyźnie, przeskaluj go za pomocą dwóch punktów, przesuń, obróć, rozjaśnij i zablokuj, zobacz w 3D i w PDF rzutu oraz zachowaj obok modelu w pakiecie.
keywords: obraz, zdjęcie, tło, PNG, JPEG, WebP, skan, szkic, fotografia, zdjęcie lotnicze, plan sytuacyjny, skala, krycie, blokada, podkład, obrys
from: e3c78d1f
---

## Umieść obraz

Włącz {{ui:Rysuj}}, przejdź na poziom i wybierz {{ui:Obraz}} w menu {{ui:Kompilacja}}. Następnie {{ui:Wstaw obraz…}} i wybierz plik PNG, JPEG lub WebP. Jest odczytywany w twojej przeglądarce i nigdy nie jest przesyłany. Pojawia się pod rzutem, dopasowany do widoku, a pasek narzędzi informuje, że nie jest jeszcze przeskalowany. Wszystko, co rysujesz, leży na nim.

## Ustaw skalę

Wybierz {{ui:Skala}}, kliknij dwa punkty na obrazie, których rzeczywistą odległość znasz (dwa końce ściany na zeskanowanym planie, wymiar wydrukowany na szkicu), następnie wpisz odległość i naciśnij {{key:Enter}}. Obraz rośnie lub maleje wokół pierwszego klikniętego punktu. {{key:Esc}} anuluje.

## Wklej skopiowany obszar

W MarkupCraft {{ui:Kopiuj obszar}} kopiuje część arkusza PDF jako obraz. Z powrotem w BimCraft, gdy rzut poziomu jest widoczny, naciśnij {{key:Ctrl+V}} (albo {{ui:Wklej}} w menu {{ui:Edycja}}): obszar ląduje na rzucie jako obraz, wyśrodkowany tam, gdzie jest wskaźnik (albo na środku widoku). Gdy arkusz miał skalę rysunku, wchodzi w swoim rzeczywistym rozmiarze, więc ściana na nim jest tak długa, jak twoje ściany. Bez niej wchodzi w rozmiarze papieru i uruchamia się {{ui:Skala}}, więc możesz kliknąć dwa punkty i wpisać ich odległość. Obszar skopiowany jako nakładka zaczyna z kryciem, z jakim został skopiowany. To jeden krok cofania i jest zachowany jak każdy inny obraz.

Wklej bierze to, co skopiowałeś ostatnio: skopiowany obszar albo coś skopiowanego w BimCraft. {{key:Ctrl+V}} wkleja także każdy inny obraz PNG, JPEG lub WebP ze schowka, umieszczony jak {{ui:Wstaw obraz…}} i jeszcze nieprzeskalowany. Skopiowany obszar jest pamiętany przez sześć godzin.

## Przesuń, obróć, rozjaśnij, zablokuj

{{ui:Przesuń}} wymaga punktu bazowego na obrazie, a potem miejsca, do którego ma trafić. {{ui:Obróć}} przyjmuje kąt w stopniach, wokół środka obrazu. {{ui:Krycie}} rozjaśnia go, aby twoje linie były wyraźniejsze. {{ui:Zablokuj}} nie pozwala mu się przesuwać podczas rysowania; zablokowany obraz nadal pozwala zmienić krycie i ukryć go. Każda zmiana to jeden krok cofania.

## Kilka obrazów, kilka poziomów

Obraz należy do poziomu, na którym został umieszczony, i pokazuje się na rzucie tego poziomu oraz na rzucie sufitu. Kliknij obraz, aby nad nim pracować, albo wybierz go z listy. {{ui:Ukryj}} wyłącza go bez usuwania; {{ui:Usuń}} (albo {{key:Delete}}) usuwa go z modelu.

## Obrazy w widoku 3D

Każdy obraz stoi także w widoku 3D jako płaska płaszczyzna: obraz rzutu leży na swoim poziomie, a obraz na pionowej płaszczyźnie stoi nad swoją linią przekroju. Jest rysowany nad modelem, nie zasłaniając go, a model ukrywa tę część obrazu, która jest za nim. Nakładające się obrazy są sortowane według odległości. Krycie, Ukryj, Zablokuj i Usuń działają tak samo, a {{ui:Pokaż w 3D}} wyłącza wszystkie płaszczyzny tylko w widoku 3D. Poziom może mieć najwyżej 8 obrazów, aby widoki działały szybko.

## Obraz na płaszczyźnie pionowej

W {{ui:Umieść na}} wybierz {{ui:Pionowa płaszczyzna (linia przekroju)}}, a potem {{ui:Wstaw obraz…}}. Kliknij dwa końce linii na rzucie (koniec lica ściany przyciąga się), albo wybierz nazwaną linię przekroju poziomu w {{ui:Na linii przekroju}}, a nie potrzeba żadnych kliknięć. Obraz stoi na poziomie nad tą linią, tak szeroki jak linia. Ustaw jego {{ui:Szerokość}}, miejsce {{ui:Wzdłuż linii}} i {{ui:Wysokość nad poziomem}}, wpisując wartości; {{ui:Obróć}} obraca go w jego własnej płaszczyźnie. Obraz pionowy nie jest rysowany pod rzutem; rzut pokazuje jego linię, gdy nad nim pracujesz. BimCraft nie ma interaktywnego okna przekroju 2D: przekroje i elewacje są rysowane na arkuszach, a obrazy nie są jeszcze drukowane w tych widokach arkuszy.

## Drukowanie

{{ui:Widok wydruku}} na rzucie zapisuje obrazy poziomu do PDF pod rysunkiem, w ich skali, obrocie i kryciu, przycięte do arkusza; ukryty obraz zostaje pominięty. JPEG wchodzi tak, jak jest; inne obrazy są najpierw sprowadzane do 200 dpi na arkuszu.

## Zachowane obok modelu

Bajty obrazu nie są zapisywane w tekście IFC. Model odwołuje się do każdego z nich po nazwie (IfcDocumentReference, na przykład pictures/<id>.png), a bajty są przenoszone w pakiecie projektu. Użyj {{ui:Zapisz jako pakiet…}} (albo {{ui:Zapisz jako IFC}} i wybierz go): dostajesz jeden plik .ccbundle z modelem i jego obrazami; IFC pozostaje mały, a edycje szybkie. Otwórz .ccbundle, a obrazy wrócą.

Zwykły plik .ifc nie może przechowywać obrazu bez stania się dużym. Gdy go zapisujesz, BimCraft mówi, ile obrazów jest przechowywanych poza nim, i proponuje pakiet albo zwykły IFC, który osadza obrazy do 512 KB, a resztę pomija. Zwykły .ifc otwarty bez swojego pakietu pokazuje te obrazy jako brakujące, a Problemy je wymieniają; otwórz .ccbundle, w którym zostały zapisane. Pliki zapisane przez pierwszą wersję, z obrazem wewnątrz IFC, nadal się otwierają, a zapis pakietu przenosi ich obrazy na zewnątrz. Obraz jest zachowywany tak, jak jest, do 6 MB; większy jest najpierw zmniejszany, a ty zostajesz o tym poinformowany. Inne programy otwierają model i ignorują obrazy. Obraz, którego jeszcze nie przeskalowałeś, jest wymieniony w Problemach jako uwaga.

## W arkuszach przekrojów i elewacji

Obraz na płaszczyźnie pionowej (wybierz {{ui:Pionowo}} w panelu obrazu i kliknij dwa końce linii albo umieść go nad nazwaną linią przekroju) jest drukowany w widokach arkuszy, które patrzą na niego prosto. Przekrój pokazuje obraz stojący na swojej linii cięcia albo umieszczony nad tą linią przekroju po nazwie. Elewacja pokazuje każdy pionowy obraz, którego płaszczyzna jest do niej zwrócona. Obraz jest rysowany pod liniami widoku, w skali widoku, przycięty do widoku, i zachowuje swoje krycie. Otwórz {{ui:Arkusze…}}, aby go zobaczyć; PDF arkusza przenosi go jako obraz. Oglądany od tyłu, obraz jest lustrzany, tak jak w 3D. Ukryte obrazy są pomijane.
