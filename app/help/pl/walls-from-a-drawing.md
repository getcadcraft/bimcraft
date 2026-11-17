---
title: Ściany z obrysowanego rysunku
summary: Zamień plan DWG lub DXF w ściany, drzwi i okna na kondygnacji i zachowaj rysunek pod planem jako odniesienie.
keywords: dwg, dxf, obrys, importuj plan, konwertuj, cad do bim, 2d do 3d, ściany z linii, warstwy, bloki, drzwi z bloków, podkład, rysunek odniesienia, tło, xref, aplikacja kreślarska
from: 3bf213f1
---

## Co zrobisz

Użyj planu, który ty (albo ktoś inny) narysowałeś w aplikacji kreślarskiej, jako początku modelu: jego linie ścian stają się ścianami, a jego bloki drzwi i okien stają się drzwiami i oknami.

## Kroki

1. Włącz {{ui:Rysuj}} i wybierz kondygnację, którą pokazuje rysunek, na liście poziomów planu.
2. Wybierz {{ui:Kompilacja}} › {{ui:Z rysunku…}}, potem {{ui:Wybierz rysunek…}} i wskaż plik DWG lub DXF.
3. W oknie dialogowym:
   - **Jednostki rysunku** pochodzą z rysunku; wybierz inne, jeśli są błędne (plan narysowany w stopach, odczytany jako cale, jest dwanaście razy za mały).
   - **Warstwy ze ścianami**: zaznacz warstwy, na których leżą linie ścian. Warstwy, których nazwy zawierają „wall”, są zaznaczane automatycznie.
   - **Linie to**: **obie strony każdej ściany** (zwykły sposób rysowania planów: każda para równoległych linii oddalonych o nie więcej niż 600 mm staje się jedną ścianą o grubości równej przerwie), **osie ścian** albo **jedno lico** z ścianą po lewej lub prawej stronie. Przy osiach albo jednym licu typ ściany ustawia grubość.
   - **Typ ściany** i **Wysokość ściany**, jak przy narzędziu {{ui:Ściana}}.
   - **Bloki**: wybierz typ drzwi lub okna dla każdego bloku, który jest drzwiami lub oknem, albo go pomiń. Bloki, których nazwy zawierają „door” lub „window”, są wybierane za ciebie. Każdy trafia do ściany, na której stoi, o szerokości bloku wzdłuż ściany; drzwi otwierają się na tę stronę, po której narysowano ich łuk otwarcia.
   - **Miejsce**: we współrzędnych własnych rysunku albo z jego lewym dolnym narożnikiem w początku planu.
   - **Zachowaj rysunek pod planem tej kondygnacji**: zostaw zaznaczone, aby widzieć rysunek jako cienkie linie pod tym, co tworzysz.
4. Wiersz pod wyborami mówi, ile ścian, drzwi i okien powstanie. Kliknij {{ui:Utwórz je}}.

## Co zobaczysz

- Ściany, drzwi i okna na kondygnacji, połączone tam, gdzie się spotykają, z pomieszczeniami, które zamykają; wszystko to jest jednym krokiem, więc {{key:Mod+Z}} cofa całość.
- Rysunek jako cienkie linie pod planem. {{ui:Kompilacja}} › {{ui:Z rysunku…}} wypisuje rysunki zachowane na kondygnacji, każdy z przyciskiem {{ui:Usuń}}; usunięcie jednego zostawia ściany.
- W pliku IFC zachowany rysunek jest adnotacją kondygnacji (jej liniami), więc inne programy BIM też go pokazują.

:::note
Plik PDF albo skan też działa: zobacz [Ściany z zestawu rzutów](topic:walls-from-plans). Łuki są pomijane (BimCraft rysuje proste ściany), tak samo linie wewnątrz bloków. Linie bez pary w trybie „obie strony” są liczone w oknie dialogowym i pomijane: narysuj te ściany narzędziem {{ui:Ściana}} albo popraw je przez {{ui:Modyfikuj}} › {{ui:Przytnij / wydłuż}} (zobacz [Przycinanie, wydłużanie i łączenie ścian](topic:trim-extend-walls)).
:::

:::tip
Obrysowałeś skan w aplikacji kreślarskiej? Otwórz tu też skan i sprawdź ściany względem niego: zobacz [Model ze skanu](topic:model-from-a-scan).
:::
