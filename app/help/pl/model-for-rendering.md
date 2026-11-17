---
title: Wyślij model do programu renderującego
summary: Zapisz to, co pokazuje widok 3D, jako model glTF (.glb) z materiałami, teksturami i lampami, do programów renderujących i wizualizacyjnych, które czytają glTF.
keywords: glb, gltf, gl transmission format, eksport, renderowanie, render, wizualizacja, czas rzeczywisty, archviz, materiały, tekstury, lampy, światła, zasób, zasób niestandardowy
from: e62d57dc
---

{{ui:Do renderowania}} na pasku narzędzi zapisuje to, co pokazuje widok 3D, jako jeden plik **.glb** (glTF 2.0, otwarty format Khronos Group). Programy renderujące, które czytają glTF, otwierają go z materiałami i lampami modelu; Twinmotion wymienia glTF i GLB wśród plików geometrii, które importuje, i zachowuje ich światła (dokumentacja Epic, „Importowanie geometrii w Twinmotion”): użyj {{ui:Do renderowania}} i zaimportuj tam plik .glb. Nic nie jest przesyłane: plik powstaje na tym komputerze.

## Zapis

1. Otwórz model IFC i ustaw widok 3D: ukryj kondygnacje, elementy lub dołączone modele, których nie chcesz, i [pomaluj materiały](topic:paint-materials), które chcesz widzieć.
2. Kliknij {{ui:Do renderowania}} (lub wpisz `GLB`).
3. Plik pobiera się jako „<nazwa modelu>.glb”. Pasek stanu mówi, ile trójkątów, materiałów i lamp zawiera.

## Co zawiera plik

- **Geometria** każdego elementu pokazywanego w widoku 3D, w metrach, z osią Y skierowaną w górę (osie własne glTF). Jeden obiekt na kondygnację i materiał, nazwany na przykład „Poziom 1 — Cegła, czerwona”, dzięki czemu w programie renderującym można wybrać materiał i zamienić go na własny.
- **Materiały:** każdy kolor z wyglądem wybranym w [Renderuj](topic:render) (matowy, satynowy, błyszczący, metal, szkło…) oraz każdy nałożony materiał z biblioteki z kolorem, szorstkością i **teksturą** (jego obraz jest w pliku, przeskalowany do rzeczywistego rozmiaru: cegła ma rozmiar cegły). Szkło jest przezroczyste.
- **Lampy:** każda oprawa włączona w Renderuj › Lampy, jako światło punktowe lub reflektor, z jasnością (lumeny przeliczone na kandele), kolorem i kątem wiązki.
- **Położenie terenu:** szerokość i długość geograficzna terenu są zapisane w pliku dla informacji. Programy renderujące mają własne słońce: wpisz tam miejsce.

## Czego nie zawiera

- Przekrój cięcia (elementy wchodzą w całości) oraz elementy pokazane jako przezroczyste (są pominięte).
- Obiekty element po elemencie (zamiast tego jeden obiekt na kondygnację i materiał), właściwości IFC, mapy wypukłości (bump maps), zapisane widoki i nagrane przejścia.
- Krawędzie i tło.

## Enscape i inne renderery wtyczkowe

Enscape działa wewnątrz innego programu projektowego i nie ma pliku, który otwiera cały projekt. Są dwa sposoby:

- Otwórz **IFC** modelu (Plik › Zapisz) w programie, w którym działa Enscape; większość z nich czyta IFC. Kolory są przenoszone; materiały z biblioteki trafiają jako swoje kolory.
- Wprowadź **mały element** (mebel, oprawę) jako zasób niestandardowy: najpierw go wyizoluj, a potem kliknij {{ui:Dla Enscape (.gltf)}}. Biblioteka zasobów niestandardowych Enscape wyświetla pliki .gltf, .obj i .fbx, a nie .glb, więc ten przycisk zapisuje tę samą scenę jako jeden samodzielny plik **.gltf** (dane binarne i obrazy są w środku; nie trzeba kopiować niczego obok). Enscape zaleca małe zasoby (poniżej około 20,000 trójkątów).

:::note
W CadCraft Studio ten sam plik glTF (oraz plik USD) można zapisać z {{ui:Renderuj}} › Silnik › **Plik glTF** / **Plik USD** albo otworzyć od razu w programie na tym komputerze: zobacz [Otwieranie sceny w innym programie](topic:render-open-in). Wtyczka lub połączenie na żywo dla Enscape albo Twinmotion nie jest jeszcze zbudowane. Formaty FBX i Datasmith nie mają opublikowanej specyfikacji, więc BimCraft ich nie zapisuje; glTF to otwarta droga.
:::
