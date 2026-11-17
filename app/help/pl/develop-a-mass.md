---
title: "Opracowanie bryły zabudowy na podstawie analizy terenu"
summary: "Weź bryłę zabudowy z widoku terenu w CivilCraft i opracuj ją na poziomy, ściany i stropy, zachowując położenie działki na mapie."
keywords: bryła, bryła zabudowy, masowanie, analiza terenu, opracowanie, CivilCraft, przekazanie, poziomy, ściany, stropy, obrys, georeferencja, IFC
from: 557b94d1
---

Widok terenu w CivilCraft może rysować bryły zabudowy na działce i sprawdzać je względem gruntu, podanych granic oraz słońca. **Opracuj w BimCraft** otwiera BimCraft w nowej karcie z tymi bryłami. **Bryły jako IFC** zapisuje je jako plik, który otwierasz tutaj zwykłym sposobem. W obu przypadkach każda bryła trafia jako teren, budynek z jednym poziomem na kondygnację i jeden blok (sama bryła) niosący swoje dane.

## Opracuj bryłę

1. Wybierz bryłę w widoku 3D. Właściwości pokazują jej przeznaczenie, kondygnacje i wysokość kondygnacji, obrys, powierzchnię brutto, sposób posadowienia na spadku oraz działkę.
2. Kliknij **Opracuj tę bryłę**.

Jednym krokiem cofnięcia każdy poziom tego budynku dostaje ściany wokół obrysu (obrys to zewnętrzna powierzchnia ścian; każda ściana sięga do poziomu wyżej, a najwyższa ma wysokość jednej kondygnacji) oraz strop pod całym budynkiem. Blok zostaje zastąpiony, a budynek zachowuje dane z analizy w zestawie właściwości `CadCraft_SiteMass`, oznaczonym jako opracowany. Dachu nie ma: dach zależy od projektu.

## Położenie działki

Plik z CivilCraft jest zapisany w długościowej jednostce projektu i, gdy projekt CivilCraft miał układ współrzędnych, niesie go jako przeliczenie mapy projektu. Opracowanie bryły tego nie zmienia, więc budynek pozostaje tam, gdzie wskazuje mapa.
