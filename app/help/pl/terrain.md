---
title: Teren działki, plac pod budynek i nawierzchnia
summary: Wprowadź grunt do modelu z punktów pomiarowych, warstwic, skanu LAS / LAZ, GeoTIFF, powierzchni LandXML (CivilCraft) lub kilku rzędnych punktowych; wytnij w nim plac pod budynek ze skarpami oraz wykopem / nasypem; ułóż na nim podjazdy, chodniki i patia; przekaż go do CivilCraft jako LandXML.
keywords: teren, grunt, działka, topografia, pomiar, punkty, PNEZD, warstwice, LAS, LAZ, LiDAR, GeoTIFF, DEM, rzędna, rzędna punktowa, spadek, niwelacja, plac, plac pod budynek, wykop, nasyp, roboty ziemne, linia przecięcia, nachylenie, podjazd, chodnik, patio, nawierzchnia, LandXML, CivilCraft
from: 208298d6
---

## Co zrobisz

Ustawisz dom na jego działce. Teren staje się częścią modelu: jest widoczny w 3D, przecinany w przekrojach i elewacjach, a na rzucie widać warstwice. Pod domem wycinany jest plac pod budynek, podjazdy i chodniki idą za jego spadkiem, a ławy fundamentowe schodzą stopniami razem z nim.

## Wprowadź teren

1. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Teren}}.
2. Wybierz jedną z opcji:
   - **Otwórz plik pomiarowy…**: punkty pomiarowe (PNEZD, PENZD lub zwykłe x, y, rzędna, rozdzielone przecinkiem, tabulatorem lub spacją), warstwice w DXF lub DWG (polilinie na swojej rzędnej, polilinie 3D), skan LAS lub LAZ (zachowane punkty gruntu, przerzedzone do około jednego na metr kwadratowy), GeoTIFF lub siatka rzędnych ASCII albo powierzchnia **LandXML**, np. eksportowana z CivilCraft (jej punkty i trójkąty są zachowane; gdy plik zawiera kilka powierzchni, BimCraft pyta, która jest gruntem; jednostki pochodzą z pliku). Najpierw wybierz jednostki pliku (LandXML podaje własne).
   - Albo wpisz **Rzędną punktową** (liczoną od podłogi tej kondygnacji, więc `-1'` oznacza stopę poniżej niej), kliknij punkty na rzucie, zmień rzędną i kliknij kolejne, a potem **Utwórz grunt**. Na start wystarczą trzy punkty.

Współrzędne pomiaru daleko od modelu (układ state plane, UTM) są przesuwane na dom, a rzędne ustawiane tak, aby grunt przy domu leżał około 8" pod pierwszą kondygnacją. **Podnieś grunt** we **Właściwościach** koryguje to o dowolną wartość.

## Plac pod budynek

1. Wybierz {{ui:Plac pod budynek}}.
2. Ustaw **Margines** wokół domu, o ile **plac leży poniżej podłogi** (8" pod płytą, więcej pod przestrzenią podpodłogową) oraz **Nachylenia** sięgające istniejącego gruntu (`2:1` = dwie stopy w bok na każdą stopę w górę lub w dół).
3. Wskaż punkt wewnątrz domu i kliknij.

Grunt pod domem zostaje wyrównany aż do marginesu, po czym skarpa idzie w górę zbocza (wykop) i w dół do niższej strony (nasyp), aż dołączy do istniejącego gruntu. **Właściwości** gruntu i placu podają objętości wykopu i nasypu. Gdy przesuniesz ściany, plac pójdzie za nimi.

## Podjazdy, chodniki i patia

Wybierz {{ui:Nawierzchnia}}, wybierz **Chodnik**, **Podjazd** lub **Patio** i kliknij narożniki. Kliknij ponownie pierwszy narożnik, kliknij dwukrotnie lub naciśnij {{key:Enter}}, aby zakończyć. Nawierzchnia idzie za gotowym profilem terenu; jej rodzaj lub grubość zmienisz we **Właściwościach**.

## Ławy schodzą do poziomu terenu

Gdy teren jest w modelu, ściany fundamentowe i ławy pod przestrzenią podpodłogową za nim podążają: wzdłuż każdej ściany ława zachowuje swoją głębokość pod gruntem na zewnątrz i schodzi o pełne kroki po 8" tam, gdzie grunt opada (zob. [Fundamenty pod ścianami](topic:foundations)).

## Przekaż do CivilCraft

**LandXML dla CivilCraft** (w wierszu Teren lub we **Właściwościach** gruntu) pobiera istniejący grunt i gotowy profil terenu jako plik LandXML. Otwórz go w CivilCraft, aby wykonać właściwą niwelację, odwodnienie i roboty ziemne.

## Warto wiedzieć

- Teren wymaga modelu IFC4, jak każdy nowy budynek.
- Warstwice pokazują się na rzucie poziomu terenu z odstępem ustawionym we **Właściwościach** gruntu; co piątą linia jest pogrubiona.
- Grunt zapisuje się jako element terenu IFC (zamknięta powierzchnia trójkątna, więc przekroje ją przecinają); plac i nawierzchnia zapisują się razem z nim. Usunięcie gruntu zaczyna od nowa: jego plac i nawierzchnia znikają razem z nim.
