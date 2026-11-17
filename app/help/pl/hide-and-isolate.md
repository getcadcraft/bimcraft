---
title: Ukrywanie, izolowanie i przezroczystość elementów
summary: Wybierz kilka elementów, ukryj je, pokaż tylko je albo pokaż je, a resztę jako przezroczystą, a następnie przywróć wszystko.
keywords: ukryj, izoluj, przezroczystość, przezroczysty, duch, rentgen, pokaż wszystko, odkryj, wybór wielu, wiele zaznaczeń, Ctrl+klik, Shift+klik, widoczność
from: 97e98b8c
---

## Co zrobisz

Oczyść widok do tego, na co patrzysz: ukryj elementy, które przeszkadzają, pokaż tylko te, które wybrałeś, albo zostaw resztę na ekranie jako słabo widoczny zarys, abyś nadal wiedział, gdzie jesteś.

## Kroki

1. Otwórz model IFC. Zobacz [Otwórz model IFC i rozejrzyj się w 3D](topic:open-ifc-model).
2. Kliknij element, aby go wybrać. Aby wybrać więcej, przytrzymaj {{key:Mod}} lub {{key:Shift}} i kliknij każdy z nich. Kliknięcie wybranego elementu w ten sposób wyjmuje go z zaznaczenia.
3. Otwórz {{ui:Pokaż}} na pasku narzędzi i wybierz, co zrobić, albo naciśnij jego klawisz:
   - {{ui:Ukryj}} ({{key:H}}) ukrywa wybrane elementy.
   - {{ui:Izoluj}} ({{key:I}}) pokazuje tylko wybrane elementy.
   - {{ui:Przezroczystość}} ({{key:T}}) pokazuje wybrane elementy takie, jakie są, a wszystko inne jako przezroczyste.
4. Kliknij {{ui:Pokaż wszystko}} w tym samym menu albo naciśnij {{key:Shift+H}}, aby ponownie pokazać każdy element.
5. Aby zamiast tego odciąć wszystko wokół wybranych elementów, kliknij {{ui:Pudło przekroju wokół zaznaczenia}} w tym samym menu albo naciśnij {{key:Shift+X}}. Zobacz [Przetnij model IFC płaszczyzną przekroju](topic:section-plane).

## Czego powinieneś się spodziewać

- Gdy wybrano kilka elementów, {{ui:Właściwości}} podaje, ile ich jest, i wypisuje je według klasy. Kliknij jeden z nich, aby zobaczyć jego właściwości.
- Ukryte elementy nie mogą być wybrane: kliknięcie trafia w to, co jest za nimi.
- Elementy przezroczyste również nie mogą być wybrane, więc możesz kliknąć prosto przez ściany na to, co wyizolowałeś.
- Krawędzie ukrywają się razem z elementem i stają się słabsze wraz z nim.
- Ukrywanie, izolowanie i przezroczystość pozostają bez zmian podczas edycji, umieszczania elementów z biblioteki lub cięcia modelu płaszczyzną przekroju. Otwarcie innego modelu pokazuje wszystko ponownie.

## Typowe błędy

- **Pozycje menu są wyszarzone.** Nic nie jest wybrane. Najpierw kliknij element; wskaż pozycję, aby przeczytać, dlaczego nie może zadziałać.
- **Izolacja pokazała ścianę, którą wcześniej ukryłem.** Izolowanie pokazuje dokładnie to, co wybrano, ukryte lub nie.
- **Brakuje całej kondygnacji.** To sprawa listy {{ui:Kondygnacje}}, a nie {{ui:Pokaż wszystko}}: zaznacz kondygnację ponownie.

## Dalej

- [Pokazywanie i ukrywanie kondygnacji, przestrzeni i krawędzi](topic:storeys-and-spaces)
- [Przetnij model IFC płaszczyzną przekroju](topic:section-plane)
