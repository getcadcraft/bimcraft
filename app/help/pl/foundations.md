---
title: Fundamenty pod ścianami
summary: Połóż płytę na gruncie, ściany fundamentowe z płytą, przestrzeń podpodłogową lub piwnicę pod budynkiem jednym kliknięciem; stopy są wymiarowane na podstawie ścian i liczby kondygnacji, a fundament podąża za ścianami, gdy te się przesuwają.
keywords: fundament, stopa, płyta na gruncie, pogrubiona krawędź, płyta monolityczna, ściana fundamentowa, przestrzeń podpodłogowa, piwnica, ściana piwnicy, przemarzanie, beton, szerokość stopy
from: c0e20172
---

## Co zrobisz

Nadaj budynkowi fundament dopasowany do jego ścian. BimCraft podąża za zewnętrzną stroną ścian, wymiaruje stopy na podstawie typu ściany i liczby kondygnacji, które na nich stoją, i odtwarza fundament za każdym razem, gdy ściany się zmienią.

## Wstawianie fundamentu

1. Na kondygnacji, której ściany na nim stoją (zwykle pierwszej), otwórz {{ui:Kompilacja}} i wybierz {{ui:Fundament}}.
2. Wybierz rodzaj:
   - **Płyta na gruncie**: płyta betonowa o grubości 4", której górna powierzchnia jest podłogą, z pogrubioną krawędzią pod ścianami.
   - **Ściany fundamentowe i płyta**: ściany fundamentowe do poziomu podłogi, na stopach, z płytą w środku.
   - **Przestrzeń podpodłogowa**: ściany fundamentowe, które kończą się pod konstrukcją podłogi, na stopach, bez płyty.
   - **Piwnica**: ściany fundamentowe na pełną wysokość, na stopach, z płytą piwnicy, pod konstrukcją podłogi.
3. Wskaż wnętrze budynku: stopy pokażą się przerywane z podanym rozmiarem. Kliknij.

Kliknięcie budynku, który już ma fundament, wybiera go, dzięki czemu możesz go zmienić zamiast dodawać drugi.

## Zmiana

Wybierz fundament (kliknij wewnątrz budynku przy {{ui:Fundament}} albo kliknij dowolną jego część w widoku 3D lub w drzewie modelu) i zmień go we **Właściwościach**: rodzaj, szerokość i głębokość stopy, to, jak głęboko jest jej spód, grubość ściany, to, jak nisko pod podłogą kończą się ściany, wysokość piwnicy i grubość płyty. Każda zmiana to jeden krok cofnięcia.

Rozmiary oznaczone **auto** pochodzą ze ścian: stopy o szerokości 12", 15" lub 23" dla jednej, dwóch lub trzech kondygnacji na płycie lub ścianach fundamentowych, 18", 22" lub 27" nad przestrzenią podpodłogową lub piwnicą oraz o 4" szersze pod ścianami murowanymi lub betonowymi. Wpisz rozmiar, aby ustawić własny; wpisz `0`, aby wrócić do auto.

:::warning
Automatyczne rozmiary to oznaczone wartości domyślne dla typowych lekkich domów szkieletowych, a nie obliczenia inżynierskie. Projektant lub inżynier sprawdza stopy, głębokości i ściany pod kątem gruntu, głębokości przemarzania i obciążeń.
:::

## Co jest zapisywane

Fundament jest zapisywany jako zespół elementów IFC („Fundament”) złożony ze stopy (lub pogrubionej krawędzi płyty), ściany fundamentowej i płyty, zależnie od tego, czego wymaga jego rodzaj, wszystkie z betonu, każdy z własnymi ilościami: długościami, szerokościami, wysokościami, powierzchniami i objętościami, gotowymi do przedmiarów.

## Warto wiedzieć

- Przesuń, dodaj lub usuń ściany, a fundament pod nimi zostanie wykonany ponownie; narysuj ściany na kondygnacji wyżej, a stopy poniżej poszerzą się o dodatkową kondygnację.
- {{key:Delete}} usuwa wybrany fundament wraz ze wszystkimi częściami.
- Gdy grunt działki jest w modelu (zob. [Grunt działki, plac budowy i nawierzchnie](topic:terrain)), ściany fundamentowe i stopy przestrzeni podpodłogowej schodzą razem z nim w krokach po 8".
- Stopy pod ścianami wewnętrznymi nie są jeszcze tworzone.
