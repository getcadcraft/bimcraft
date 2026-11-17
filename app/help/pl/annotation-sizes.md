---
title: Rysuj w pełnym rozmiarze, opisuj według skali
summary: Budynek jest zawsze rysowany w pełnym rozmiarze. Tekst, wymiary, znaczniki, nazwy pomieszczeń, bąbelki siatki i symbole mają rozmiar na papierze, w milimetrach jak wydrukowane, i zachowują go, gdy skala rysunku zmienia się z 1:100 na 1:50.
keywords: skala adnotacji, adnotacyjny, wysokość tekstu, wysokość na papierze, rozmiar tekstu wymiaru, rozmiar znacznika, rozmiar nazwy pomieszczenia, bąbelek siatki, rozmiar symbolu, skala rysunku, 1:50, 1:100, standard biura, pismo, rysuj w 1:1, pełny rozmiar, tekst arkusza
from: 94118788
---

## Co zrobisz

Ustaw raz dla budynku, jak wysokie ma być pismo w rysunkach na papierze. Nigdy nie skalujesz modelu i nigdy nie zmieniasz rozmiaru tekstu pod skalę: BimCraft oblicza rozmiar z wysokości na papierze i skali rysunku.

## Jak to działa

- Model ma pełny rozmiar. Ściana o długości 10 m ma 10 000 mm w każdej skali.
- Adnotacja ma **wysokość na papierze**: wysokość dużej litery na wydrukowanym arkuszu, w milimetrach.
- Przy skali 1:100 tekst o wysokości 2.5 mm ma w modelu 250 mm; przy 1:50 ma 125 mm. Na papierze ma w obu przypadkach 2.5 mm.
- Symbole planu (elektryczne, sanitarne) rysuje się w milimetrach papieru i obowiązuje dla nich ta sama zasada.

## Kroki

1. Otwórz przeglądarkę projektu. Pod {{ui:Arkusze}} kliknij {{ui:Rozmiary adnotacji…}}.
2. Wpisz wysokość w milimetrach dla rodzajów, które chcesz ustawić: {{ui:Uwagi i etykiety}}, {{ui:Tekst wymiarów}}, {{ui:Znaczniki i nazwy poziomów}}, {{ui:Nazwy pomieszczeń}}, {{ui:Litery bąbelków siatki}}, {{ui:Tytuły widoków na arkuszach}} i {{ui:Tekst zestawień}}. Puste pole zachowuje rozmiar BimCraft, pokazany na szaro.
3. Kliknij {{ui:Zapisz}}. To jeden krok, który można cofnąć.

Od tej chwili każdy arkusz, zestaw rysunków, PDF rzutu oraz elewacje i przekroje używają tych rozmiarów. Odstęp między linią wymiarową a jej tekstem, rozmiar bąbelka siatki i wysokość wiersza zestawienia rosną wraz z tekstem.

## Rzut z własną skalą

Nadaj rzutowi skalę w jego zakresie widoku ({{ui:Skala}}; zobacz [Widoki i arkusze](topic:views-and-sheets)). Wtedy:

- na ekranie nazwy pomieszczeń, znaczniki, tekst wymiarów i bąbelki siatki są rysowane w drukowanym rozmiarze względem modelu, więc to, co widzisz, jest tym, co pokaże arkusz;
- symbole planu i ich znaczniki mają rozmiar dobrany do tej skali. Po zmianie skali z 1:100 na 1:50 są w modelu o połowę mniejsze, a na papierze mają ten sam rozmiar.

Rzut bez własnej skali zachowuje stały tekst ekranowy, a jego symbole mają rozmiar dla 1:50 (1/4" = 1'-0" w stopach i calach), jak dotąd.

## Rozmiary biura

Przy włączonym dodatku Default Policies ustaw wysokości dla biura w: Ustawienia › Globalne › Default Policies › {{ui:Rozmiary adnotacji na papierze}}. Nowy budynek przejmuje je po kliknięciu Utwórz. W budynku, który już zacząłeś, okno dialogowe ma {{ui:Użyj rozmiarów mojego biura}}. Zobacz [Default Policies](topic:default-policies).

## Rozmiary z pakietu przepisów

Pakiet przepisów może podać wysokości tekstu, jakich wymaga jego miejsce (dodatek Building regulations, konwencje rysunkowe). Zaznacz pakiet w Ustawienia › Building regulations, a potem w oknie dialogowym kliknij {{ui:Użyj rozmiarów z pakietu przepisów}}: pola się wypełnią, a ty je sprawdzisz i zapiszesz. Rozmiar podany przez pakiet w punktach to rozmiar czcionki; zostaje przeliczony na wysokość wielkiej litery, więc sprawdź go. Nic nie zostaje ustawione, dopóki nie zapiszesz.

## Co powinno być widoczne

- Ta sama wysokość tekstu w milimetrach na arkuszu 1:100 i na arkuszu 1:50, podczas gdy sam rzut przy 1:50 jest dwa razy większy.
- Rozmiary podróżują z budynkiem: są zapisane w jego pliku IFC.

## Warto wiedzieć

- Rozmiary BimCraft to te, których jego arkusze zawsze używały (ok. 1.5 mm wielkie litery dla tekstu wymiarów). Nie są standardem rysunkowym: ustaw rozmiary swojego biura.
- Wysokość musi mieścić się w zakresie od 0.5 do 50 mm.
- Pismo tabliczki rysunkowej i legendy oznaczeń nie wchodzą w to: zachowują własne rozmiary.
