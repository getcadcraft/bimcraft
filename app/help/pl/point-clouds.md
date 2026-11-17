---
title: Wyświetl chmurę punktów obok modelu
summary: Otwórz skan laserowy (LAS, LAZ, E57, PLY, PCD, PTX, PTS lub XYZ) w widoku 3D samodzielnie albo z modelem IFC, pokoloruj go, przetnij cienki przekrój, zmierz do jego punktów i przekaż do aplikacji rysunkowej, aby odrysować linie powykonawcze.
keywords: chmura punktów, skan laserowy, skan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, powykonawczy, jak wybudowano, pomiar geodezyjny, rejestracja, przekrój, przyciąganie, zmierz, odrysuj, skan do BIM
from: d0a3e740
---

## Co zrobisz

Zobaczysz skan laserowy budynku obok jego modelu: sprawdzisz, czy wykonano to, co zaprojektowano, zmierzysz odległości między zeskanowanymi punktami i wytniesz cienki przekrój, z którego odczytasz ściany, drzwi i słupy.

## Kroki

1. Otwórz chmurę: użyj {{ui:Otwarty}} dla pliku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` lub `.xyz` albo przeciągnij go na stronę (zobacz temat o formatach chmur punktów, co każdy z nich wnosi i co wyeksportować z oprogramowania skanera). Gdy model jest otwarty, chmura dołącza do modelu w widoku 3D; otwarcie chmury nigdy nie zamyka modelu ani jego niezapisanych zmian. Bez modelu chmura otwiera się samodzielnie.
2. Pod paskiem narzędzi pojawia się pasek chmury. Pokazuje, ile punktów jest widocznych i ile ma plik.
3. Wybierz {{ui:Koloruj według}}: własne kolory pliku (gdy skaner je zapisał), {{ui:Wysokość}}, {{ui:Intensywność}}, {{ui:Klasa}} (klasy LiDAR, takie jak grunt, roślinność i budynek) albo {{ui:Jeden kolor}}. {{ui:Rozmiar}} powiększa lub zmniejsza punkty.
4. Kliknij {{ui:Plan}} w sekcji {{ui:Przekrój}}, aby zostawić tylko cienki pas 1,2 m nad najniższym punktem, widziany z góry: ściany, otwory drzwiowe i słupy czytają się jak rzut kondygnacji. {{ui:Przód}} i {{ui:Z boku}} wycinają pionowe pasy do elewacji i przekrojów. Przesuń pas przy pomocy {{ui:Na}} i zmień {{ui:Grubość}} (w metrach). {{ui:Wyłączone}} ponownie pokazuje całą chmurę.
5. Kliknij {{ui:Zmierz}} na pasku narzędzi. Wskaźnik przyciąga się do punktów chmury (etykieta mówi „chmura punktów”), więc możesz mierzyć od ściany do ściany w przekroju albo od elementu modelu do skanu. Narożnik lub krawędź modelu w zasięgu nadal ma pierwszeństwo.
6. Przy {{ui:Zmierz}} › {{ui:Położenie}} punkt chmury podaje szerokość i długość geograficzną z własnego układu współrzędnych chmury, gdy plik taki podaje.
7. {{ui:Ukryj}} chowa chmurę na chwilę; {{ui:Usuń}} wyjmuje ją. {{ui:Pokaż}} › {{ui:Chmura punktów}} ukrywa lub pokazuje pasek.

## Gdzie trafia chmura

{{ui:Umieść}} na pasku mówi, jak chmura jest ustawiona względem modelu:

- **Współrzędne modelu**: liczby chmury są liczbami samego modelu (skan zarejestrowany we współrzędnych projektu).
- **Współrzędne mapy**: model ma przeliczenie na mapę (IfcMapConversion), a chmura jest w tym samym układzie rzutowym: chmura jest ustawiana przez nie. Jeśli oba wskazują różne układy, wiersz stanu to mówi.
- **Wyśrodkowana na modelu**: gdy żadna z opcji nie umieszcza chmury blisko modelu, jej środek trafia na środek modelu, a najniższy punkt na podłogę modelu. Wybierz inną opcję, aby to zmienić.

Gdy plik nie podaje swoich jednostek, BimCraft odczytuje metry i oferuje {{ui:Jednostki}} na pasku.

## Odrysuj linie powykonawcze

Kliknij {{ui:Odrysuj w CadCraft}}, aby przekazać chmurę do aplikacji rysunkowej w nowej karcie. Otwiera się ona pod rysunkiem, gdzie przekrój rzutu i przyciąganie do obiektów pozwalają narysować ściany na skanie. Zobacz temat CadCraft o chmurach punktów.

## Ile punktów

Skan może mieć setki milionów punktów. BimCraft odczytuje każdy punkt raz i zachowuje równomierny ich udział do rysowania: {{ui:Pokaż}} na pasku ustawia, ile (1, 2, 5 lub 10 milionów). Więcej punktów wymaga więcej pamięci i szybszej karty graficznej. Liczby na klasę LiDAR dotyczą wszystkich punktów w pliku.

:::note
Pliki są odczytywane na tym komputerze; nic nie jest wysyłane. Odczytywane są LAS 1.0–1.4 i LAZ (pliki LAZ do 1 GB, trzymane w pamięci podczas odczytu); pliki E57 do 6 milionów punktów i 512 MB na razie (większe skany: eksportuj LAS lub LAZ); PLY, PCD i PTX w całości; chmury tekstowe to `x y z`, z kolumnami koloru (`r g b`) i intensywności, gdy są.
:::

## Kilka skanów

Skany wykonane z różnych pozycji można zarejestrować w jednej ramce, dopracować metodą ICP i wyeksportować jako jeden LAS lub E57: zobacz [Rejestracja kilku skanów w jeden](topic:register-scans).
