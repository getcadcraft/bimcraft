---
title: Spacer po modelu
summary: Przejdź przez model IFC na wysokości oczu, sterując klawiaturą. Grawitacja utrzymuje na podłodze, a ściany zatrzymują.
keywords: spacer, przejście, widok z pierwszej osoby, lot, nawigacja, wysokość oczu, grawitacja, kolizja, wasd, wnętrze, zwiedzanie
from: 0a22854a
---

## Co zrobisz

Zobacz model tak, jak widzi go ktoś stojący w nim: przejdź korytarzem, wejdź do pokoju, wejdź po schodach.

## Kroki

1. Otwórz model IFC i kliknij {{ui:Spacer}} na pasku narzędzi.
2. Kliknij podłogę, na której chcesz stanąć. Stoisz tam z oczami na wysokości {{ui:Wysokość oczu}} (na początku 1.6 m; wartość pokazywana i wpisywana w jednostkach wybranych w {{ui:Jednostki}}: 5'-3" w stopach i calach, 1600 w milimetrach; sama liczba jest w tej jednostce, albo wpisz jednostkę, np. 1.8 m), patrząc w tę samą stronę co widok.
3. Przesuwaj się klawiszami {{key:W}} {{key:A}} {{key:S}} {{key:D}} lub strzałkami. Przytrzymaj {{key:Shift}}, aby iść szybciej. Przeciągnij w widoku, aby się rozejrzeć.
4. Naciśnij {{key:Esc}} lub kliknij {{ui:Gotowe}}, aby zakończyć. Widok zostaje tam, gdzie był, gotowy do obrotu.

## Czego się spodziewać

- **Grawitacja** trzyma na podłodze poniżej i wprowadza na stopnie i schody. Wyłącz ją, aby lewitować: {{key:E}} lub {{key:PageUp}} unosi, {{key:Q}} lub {{key:PageDown}} opuszcza.
- **Zatrzymanie przy ścianach** powstrzymuje tuż przed ścianami, drzwiami i wszystkim, co jest na drodze, i pozwala ślizgać się wzdłuż nich. Wyłącz, aby przechodzić przez ściany.
- Ukryte i przezroczyste elementy oraz to, co odcina przekrój, nie zatrzymują i nie są na nich stawiane.

## Częste błędy

- **Nic się nie dzieje po naciśnięciu W.** Klawisze trafiają do pola, w które coś wpisujesz: najpierw kliknij w widok.
- **Spadanie z dużej wysokości.** Pod miejscem nie było podłogi (otwór albo ukryta podłoga). Wyłącz grawitację albo zacznij na podłodze.

## Dalej

- [Ukrywanie, izolowanie i prześwitywanie elementów](topic:hide-and-isolate)
- [Przetnij model IFC płaszczyzną przekroju](topic:section-plane)
