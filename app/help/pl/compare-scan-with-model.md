---
title: Porównaj skan z modelem i harmonogramem 4D
summary: Oceń każdy element modelu względem otwartej chmury punktów (wykonany, częściowo, brakuje, nieosiągnięty), zobacz procent wykonania, pokoloruj model według tego i przy wczytanym harmonogramie 4D wypisz, co jest opóźnione lub przed harmonogramem w dniu 4D.
keywords: skan, chmura punktów, postęp, procent ukończenia, wykonany, brakujący, opóźnienie, przed harmonogramem, 4D, postęp na budowie, odchylenie, as-built, skan laserowy, dron, porównanie
from: 6fdc9003
---

Otwórz plik IFC, otwórz obok niego chmurę punktów (zob. [Chmury punktów](topic:point-clouds)) i umieść ją na modelu. Sekcja {{ui:Porównaj skan z modelem}} pojawia się w prawym panelu, gdy chmura jest otwarta.

## Co robi

Naciśnij {{ui:Porównaj}}. Każdy element modelu jest oceniany po swojej powierzchni, bo to ją widzi skaner. Sześć ścian jego bryły jest dzielonych na komórki o boku około 20 cm; komórka się liczy, gdy punkt skanu leży w granicy {{ui:Tolerancja}} (na początek 50 mm) od ściany. Liczy się najlepsza duża ściana, więc ściana zeskanowana z jednej strony nie jest karana za drugą stronę.

- **Wykonany**: widoczne jest co najmniej 40 % powierzchni.
- **Częściowo**: od 10 % do 40 %.
- **Brakuje**: mniej niż to, ale skan dociera do elementu (punkty w odległości 1.5 m od niego).
- **Nieosiągnięty**: skan nigdy tam nie dotarł, więc nic o nim nie mówi się.

Dla elementów wykonanych i częściowo wykonanych podaje też średnie odchylenie punktów skanu od powierzchni modelu i mówi, czy element jest na miejscu (w granicy tolerancji), blisko (do trzykrotności) czy poza miejscem (dalej). Widzi tylko odchylenia do pięciokrotności tolerancji: element wykonany dalej od swojego miejsca niż to jest traktowany jako brakujący.

Podsumowanie podaje procent wykonania wśród elementów, do których dociera skan, według liczby i według objętości. Elementy częściowo wykonane są liczone osobno i nie dolicza się ich do wykonanych.

## Względem harmonogramu 4D

Po wczytaniu harmonogramu 4D (zob. [Harmonogram 4D](topic:4d-schedule)) wynik uwzględnia też dzień ustawiony na suwaku 4D: elementy, które miały być gotowe do tego dnia, a skan ich jako wykonanych nie pokazuje, są **opóźnione względem harmonogramu**; elementy jeszcze nie należne, a wykonane, są **przed harmonogramem**. Elementy opóźnione są wymienione w {{ui:Problemy}}, a tabelę można do nich przefiltrować. Bez harmonogramu nic nie mówi się o opóźnieniach ani wyprzedzeniu.

## Tabela i model

Kliknij wiersz, aby zaznaczyć element. {{ui:Pokoloruj model}} koloruje elementy na zielono (wykonane), bursztynowo (częściowo), czerwono (brakuje) lub szaro (nieosiągnięte); {{ui:Własne kolory}} przywraca poprzednie. {{ui:Zapisz CSV}} zapisuje tabelę. {{ui:Oznacz pasujące elementy jako sprawdzone w terenie}} oznacza każdy element widziany jako wykonany i mieszczący się w tolerancji jako sprawdzony w terenie (LOD 500, metoda skan), jednym krokiem, który można cofnąć. Zobacz [Oznacz elementy jako sprawdzone lub sprawdzone w terenie](topic:verification).

:::warning
To porównuje pudełko każdego elementu z punktami skanu w granicy tolerancji. **To nie jest pomiar geodezyjny, przedmiar ani podstawa do płatności.** Element ukryty za zeskanowanym (ściana za okładziną, płyta pod wykończeniem podłogi) dzieli z nim powierzchnię i może wyjść jako wykonany; element krzywy lub pochyły ma pudełko większe niż jego bryła i może wyjść jako częściowy lub brakujący. Przed działaniem sprawdź listę. Uwagi z pozwoleń i notatki o postępach nie są tu uwzględniane: pozostają w kolumnach, w których je trzymasz.
:::

Asystent może uruchomić to samo porównanie narzędziem {{ui:Porównaj skan z modelem}}; nie zmienia ono niczego w modelu.
