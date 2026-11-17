---
title: Wskazówki rysunkowe: nietypowe wymiary są tworzone z ostrzeżeniem
summary: BimCraft tworzy to, o co prosisz. Wymiar spoza typowego zakresu staje się ostrzeżeniem w Problemach; nigdy nie blokuje rysowania ani zapisu.
keywords: wskazówka, ostrzeżenie, problemy, odrzucone, nie narysuje, za mały, za wąski, minimum, limit, szerokość schodów, stopnica, podstopnica, słup, rampa, rozmiar drzwi, linia siatki, wysokość poziomu, lukarna, schody kręcone, spadek podwyższenia, krótka ściana, bez przeszkód
from: 20090130
---

## Co zrobisz

Narysujesz wymiar, który nie jest typowy, i zobaczysz, gdzie BimCraft o tym informuje.

## Kroki

1. Narysuj lub zmień element tak, jak chcesz: na przykład schody o szerokości 400 mm.
2. BimCraft wykona go zgodnie z poleceniem.
3. Otwórz {{ui:Problemy}} na górnym pasku. Pod **Wskazówki rysunkowe** znajduje się ostrzeżenie, które podaje nazwę elementu, podany wymiar i typowy zakres.
4. Kliknij ostrzeżenie, aby zaznaczyć element. Zmień wymiar, jeśli to pomyłka, albo zostaw go: ostrzeżenie można zaakceptować, z powodem lub bez.

## Czym jest wskazówka

Kiedyś takie wymiary były odrzucane. Teraz są tworzone, każdy z ostrzeżeniem:

- **Schody**: węższe niż 500 mm lub szersze niż 5 m; stopnice poza zakresem 100–300 mm; stopnice poza zakresem 150–600 mm.
- **Schody kręcone**: słupek poza zakresem 40–400 mm; stopnie głębokie na mniej niż 100 mm na linii chodu.
- **Słupy**: mniejsze niż 50 mm w przekroju lub niższe niż 300 mm.
- **Rampy**: węższe niż 300 mm.
- **Drzwi i okna**: węższe lub niższe niż 100 mm.
- **Linie siatki**: krótsze niż 100 mm.
- **Ściany**: ściana krótsza niż 50 mm, na przykład po przycięciu.
- **Poziomy**: niższe niż 1 m lub wyższe niż 100 m (nowy budynek, poziomy przesunięte, wysokość poziomu).
- **Lukarny**: szersze niż 600 mm do 12 m, ściana czołowa poza zakresem 300 mm do 4 m, wysięg większy niż 1 m, ściany poza zakresem 50–400 mm.
- **Podniesienia pod budynek**: nachylenie boków poza zakresem 1:1 do 10:1.

## Co nadal jest odrzucane

Tylko to, czego nie da się zbudować lub odnaleźć; każde z tych przypadków ma komunikat, który wyjaśnia powód:

- Wymiar poniżej 10 mm (ściana poniżej 1 mm): nie ma czego zbudować.
- Lukarna nie szersza niż dwukrotna grubość jej ściany: dwie boczne ściany by się zeszły.
- Podniesienie pod budynek z nachyleniem boków stromszym niż 0,1:1 (to ściana oporowa) albo łagodniejszym niż 100:1 (niweleta ciągnęłaby się bez końca).
- Coś, co nie mieści się tam, gdzie je umieściłeś, kontur przecinający sam siebie albo element, którego już nie ma w modelu.

## Warto wiedzieć

- Wskazówka jest wyliczana z modelu, więc jest tam ponownie po otwarciu pliku później, i znika, gdy wymiar zostanie poprawiony.
- Kontrole modelu, pakiety przepisów i kontrole IDS także tylko wymieniają to, co znalazły. Nic w {{ui:Problemy}} nie blokuje rysowania ani zapisu.
- Typowe zakresy to ogólna praktyka, a nie przepisy budowlane. Aby mieć przepisy, dodaj dodatek Przepisy budowlane i wybierz swoje miejsce.

## Dalej

- [Sprawdzanie modelu pod kątem typowych problemów](topic:model-checks)
- [Schody i balustrady](topic:stairs-and-railings)
