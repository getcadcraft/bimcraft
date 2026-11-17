---
title: Zarejestruj kilka skanów w jeden
summary: Umieść skany wykonane z różnych pozycji w jednej ramce, wskazując pary punktów albo wpisane cele, dopracuj je metodą ICP, zapisz rejestrację jako projekt i wyeksportuj zarejestrowaną chmurę jako LAS lub E57.
keywords: rejestracja, rejestruj, skany, chmura punktów, icp, iteracyjne dopasowanie najbliższego punktu, cele, pary punktów, sztywna transformacja, wyrównaj, scal, e57, las, skan do BIM
from: e8e270db
---

## Co zrobisz

Kilka skanów tego samego miejsca (każdy z własnej pozycji skanera) zaczyna we własnych współrzędnych. Zarejestruj je: nadaj każdemu skanowi jedno położenie, aby wszystkie znalazły się w jednej ramce, a następnie zapisz to jako projekt i zapisz zarejestrowaną chmurę jako jeden plik LAS lub E57.

## Umieść skany

1. Otwórz okno ({{ui:Rejestruj skany…}} na panelu startowym albo {{ui:Pokaż}} › {{ui:Rejestruj skany…}} po otwarciu modelu). {{ui:Dodaj skany…}} przyjmuje pliki LAS, LAZ, E57, PLY, PCD, PTX, PTS lub XYZ albo przeciągnięte na okno. Skany o różnych jednostkach są odrzucane z uwagą: najpierw przelicz jeden z nich.
2. Wybierz {{ui:Skan do przesunięcia}} i {{ui:Dopasuj do}}. Obraz pokazuje każdy skan w ramce w jego obecnym położeniu, każdy w innym kolorze: {{ui:Plan}}, {{ui:Przód}} lub {{ui:Z boku}}; przeciągnij, aby przesunąć widok, a kółkiem myszy przybliż.
3. **Według par punktów.** Kliknij {{ui:Wskaż parę}}, potem punkt na skanie do przesunięcia, a następnie to samo miejsce na innym skanie (narożnik, cel, podstawa słupa). Zrób to co najmniej trzy razy, wybierając punkty, które nie leżą na jednej linii i są rozłożone. Kliknij {{ui:Umieść według par}}: skan jest umieszczany dopasowaniem metodą najmniejszych kwadratów, a **Pozostało** pokazuje, o ile każda para nadal się myli. Para z dużą liczbą to zły wybór: usuń ją krzyżykiem i umieść ponownie.
4. **Według celów.** Jeśli prawdziwe współrzędne punktu są znane (cele geodezyjne), kliknij {{ui:Wskaż, potem wpisz cel}}, kliknij punkt na jego skanie i wpisz współrzędne X, Y i Z celu w wierszu. Pary i wpisane cele można dowolnie mieszać.

## Dopracuj metodą ICP

Pary dają przybliżone umieszczenie. {{ui:Dopracuj}} przesuwa skan, aż jego powierzchnie leżą na powierzchniach drugiego skanu: najpierw **punkt do punktu**, potem **punkt do płaszczyzny**. Tabela wymienia każdy krok z jego błędem i liczbą dopasowanych punktów; linia nad nią pokazuje, jak błąd maleje. {{ui:Zatrzymaj}} kończy przebieg po bieżącym kroku i zachowuje to, co osiągnięto. {{ui:Cofnij}} cofa cały przebieg (albo ostatnie umieszczenie); {{ui:Resetuj}} przywraca skan do jego współrzędnych z pliku.

Aby było szybko na laptopie, ICP działa na przerzedzonym udziale punktów ({{ui:Użyte punkty}}, od 5 000 do 60 000) i ignoruje dopasowania dalsze niż {{ui:Największa odległość dopasowania}} (domyślnie 5% rozmiaru skanu, zmniejszany w miarę ustalania się). Potrzebuje najpierw przybliżonego umieszczenia: skany, które prawie się nie nakładają, zgłaszają, że nie można ich dopasować. Powierzchnie tylko płaskie albo tylko proste nie mogą ustalić położenia wzdłuż siebie; wtedy dodaj pary.

## Zapis i eksport

- {{ui:Zapisz projekt}} zapisuje mały plik `.ccscans.json`: nazwę każdego skanu, jego rozmiar i odcisk jego pierwszych 64 KB, wraz z transformacją. Nie zawiera punktów. {{ui:Otwórz projekt…}} znajduje pliki skanów po tych odwołaniach (pliki muszą być najpierw dodane) i przywraca każdą transformację.
- {{ui:Eksportuj LAS}} i {{ui:Eksportuj E57}} zapisują jeden plik ze wszystkimi skanami w ich zarejestrowanym miejscu. Punkty w oryginałach nigdy nie są przepisywane; transformacja jest stosowana na wyjściu. Przy włączonym {{ui:Odczytaj wszystkie punkty z plików}} każdy plik jest czytany ponownie dla każdego punktu (do 20 milionów na skan); przy wyłączonym zapisywane są tylko punkty widoczne w przeglądarce.
- {{ui:Pokaż zarejestrowaną chmurę}} (BimCraft) zapisuje LAS i otwiera go w widoku 3D obok modelu, jak każdą chmurę.

:::note
Nic nie jest wysyłane. Rejestracja działa w jednostkach własnych plików i zachowuje milimetry: LAS jest zapisywany ze skalą, która pasuje (aż do 0,1 mm), a E57 z liczbami zmiennoprzecinkowymi podwójnej precyzji. Układ współrzędnych jest przenoszony do LAS tylko wtedy, gdy każdy skan podaje ten sam kod EPSG. Zapisywacz E57 jest nasz własny; jest sprawdzany przez odczyt jego plików tym czytnikiem i przez libE57Format.
:::
