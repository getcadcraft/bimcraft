---
title: Model ze skanu
summary: Krótki przewodnik od skanu laserowego do ścian: otwórz chmurę punktów obok nowego budynku, wyrównaj ją do poziomu i obrysuj jej ściany na planie.
keywords: skan, skan laserowy, chmura punktów, stan istniejący, istniejący budynek, pomiar, obrys, skan do BIM, model ze skanu, przekrój, wyrównaj, prostopadle, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Co zrobisz

Narysujesz istniejący budynek na podstawie jego skanu laserowego: ściany tam, gdzie pokazuje je skan, na właściwym poziomie i prostopadle względem siebie.

## Kroki

1. **Budynek, w którym będziesz rysować.** {{ui:Plik}} › {{ui:Nowy budynek}}, z taką liczbą poziomów, ile ma budynek (poziomy możesz dodać później, zob. [Działka, budynek na niej i jego poziomy](topic:site-building-and-levels)). {{ui:Rysuj}} się włącza.
2. **Skan.** {{ui:Pokaż}} › {{ui:Chmura punktów}} i wybierz plik (LAS, LAZ, E57, PLY, PCD, PTX lub XYZ: zob. [Pokaż chmurę punktów obok modelu](topic:point-clouds)). Chmura pojawia się w widoku 3D, a plan pokazuje jej **przekrój**: zeskanowane punkty 1200 mm (4 stopy) nad poziomem, jako kropki. To wysokość, na której ściany, drzwi i okna są najlepiej widoczne.
3. **Wyrównaj do poziomu.** Otwórz menu {{ui:Skan}} na pasku modelu i kliknij {{ui:Dopasuj jej podłogę do tego poziomu}}: chmura przesunie się w górę lub w dół, aż podłoga, którą zeskanowano, będzie leżeć na pokazanym poziomie. Sprawdź, czy przekrój teraz przecina ściany.
4. **Ustaw prostopadle do budynku.** {{ui:Skan}} › {{ui:Ustaw ją prostopadle do budynku}} obraca chmurę tak, aby ściany w jej przekroju biegły wzdłuż osi planu. Dzięki temu ściany rysowane z przytrzymanym {{key:Shift}} pasują do skanu. Obrót odbywa się wokół środka znalezionych ścian, więc drzewa lub ściana sąsiada złapane w przekroju nie odchylą skanu. Najpierw wyrównaj podłogę: wtedy przekrój przecina ściany.
5. **Obrysuj ściany.** Wybierz {{ui:Ściana}} i kliknij wzdłuż kropek: narzędzie przyciąga się do zeskanowanych punktów (znacznik przyciągania to mały romb), a także do narysowanych ścian. Ściana rysowana jest na swojej osi środkowej, więc klikaj po środku dwóch rzędów kropek, które tworzy ściana. Grubość wpiszesz, wybierając najpierw typ ściany. Potem dodaj drzwi i okna tam, gdzie przekrój pokazuje przerwy.
6. **Kolejny poziom.** Wybierz poziom wyżej na liście poziomów planu: przekrój podąży za wysokością cięcia poziomu. Wyrównaj podłogę do tego poziomu ponownie tylko wtedy, gdy podłogi skanu nie leżą tam, gdzie twoje poziomy.

## Co powinieneś zobaczyć

- Przekrój zmienia się, gdy zmieniasz poziom, a grubszy przekrój ({{ui:Skan}} › {{ui:Grubość przekroju}}) pokazuje więcej punktów tam, gdzie skan jest rzadki.
- {{ui:Skan}} › {{ui:Cofnij dopasowanie}} przywraca chmurę tam, gdzie była, gdy ją otwarto. Wyrównanie przesuwa chmurę tylko w widoku: nie jest zapisywane w pliku IFC, a narysowane przez ciebie ściany pozostają na miejscu. Wyrównanie idzie za chmurą, gdy zmienisz {{ui:Umieść}} lub {{ui:Jednostki}}, albo otworzysz inny model.
- {{ui:Skan}} › {{ui:Pokaż przekrój na planie}} ukrywa lub pokazuje kropki.

:::tip
Duże skany: plan rysuje do 60,000 punktów przekroju, a widok 3D kilka milionów punktów z całej chmury, wybranych równomiernie w całym skanie, dzięki czemu duży plik działa szybko. Aby obrysować w aplikacji rysunkowej, użyj na pasku chmury {{ui:Obrysuj w CadCraft}}.
:::
