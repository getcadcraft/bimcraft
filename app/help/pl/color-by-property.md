---
title: Koloruj elementy według właściwości
summary: Pokoloruj każdy element według wartości jednej właściwości, na przykład klasy, typu, kondygnacji, materiału, klasy odporności ogniowej lub kosztu, odczytaj legendę, kliknij wartość, aby pokazać tylko te elementy, i zapisz kolory jako schemat do użycia na innych modelach.
keywords: kolor, kolorowanie, koloruj według, legenda, widok inteligentny, wygląd, właściwość, typ, materiał, klasa odporności ogniowej, filtr, izolacja, motyw, wartości, schemat, schemat kolorów, zapisz kolory, ponowne użycie, zespół, json, próbka
from: f081d343
---

## Co zrobisz

Na pierwszy rzut oka zobaczysz, jak właściwość rozkłada się w modelu: które ściany są zewnętrzne, jakie materiały gdzie zastosowano, które elementy nie mają klasy odporności ogniowej. Każdy element przyjmuje kolor swojej wartości, a legenda podaje, co oznacza każdy kolor i ile elementów ma daną wartość.

## Kroki

1. Otwórz model IFC.
2. Kliknij kartę {{ui:Kolor}} po prawej stronie.
3. Wybierz właściwość z listy. Pierwsze należą do każdego elementu ({{ui:Klasa}}, {{ui:Typ}}, {{ui:Kondygnacja}}, {{ui:Materiał}}, {{ui:Nazwa}}…); reszta pochodzi z zestawów właściwości i zestawów ilości modelu, pod nazwą zestawu. Liczba przy każdej z nich to liczba elementów, które ją mają.
4. Odczytaj legendę: kolor, wartość i liczbę elementów, które ją mają.
5. Kliknij wartość, aby pokazać tylko te elementy. Przytrzymaj {{key:Mod}} i kliknij, aby dodać kolejne wartości. Naciśnij {{key:Shift+H}}, aby ponownie pokazać wszystko.
6. Kliknij {{ui:Wyłączone}}, aby wrócić do własnych kolorów modelu.

## Co powinno być widoczne

- Do siedmiu wartości dostaje własny kolor, zaczynając od najczęstszej. Więcej wartości współdzieli jeden szary, wymieniony jako **inne wartości**.
- Liczba o wielu różnych wartościach jest dzielona na sześć równych zakresów, od jasnego (niskie) do ciemnego (wysokie).
- Elementy bez właściwości mają blady szary kolor i są wymienione jako **Brak wartości**, dzięki czemu kolorowe wyróżniają się.
- Kolory zmieniają się wraz z przełącznikiem {{ui:Papier}} i {{ui:Model}} i pozostają podczas edycji modelu.
- Właściwość typu dotyczy każdego elementu tego typu; gdy element ma własną wartość tej samej właściwości, wygrywa jego własna wartość.

## Zmień kolory i zachowaj je jako schemat

- Kliknij próbkę wartości w legendzie, aby wybrać dla niej inny kolor. Model zostanie od razu przemalowany.
- {{ui:Zapisz schemat}} pobiera kolory jako mały plik `.json` nazwany od właściwości, na przykład `Class colors.json`.
- Na innym modelu albo na komputerze członka zespołu kliknij {{ui:Otwórz schemat…}} i wybierz ten plik. Każda wartość w schemacie dostaje swój kolor, więc ta sama klasa odporności ogniowej lub ten sam system ma ten sam kolor w każdym modelu.
- Wartość, której nie ma w schemacie, jest szara i wymieniona jako „nie ma w schemacie”; wartości ze schematu, których model nie ma, pozostają na liście z zerem, dzięki czemu widać cały schemat.
- Schemat zachowuje kolory w obu motywach. Wybór właściwości z listy zaczyna od kolorów automatycznych.

## Częste błędy

- **„Ten model nie ma wartości …”.** Schemat zapisano dla właściwości, której ten model nie ma (na przykład inna nazwa zestawu właściwości). Otwórz schemat przygotowany dla tego typu modelu albo wybierz właściwość z listy.

- **Właściwości nie ma na liście.** Żaden element z kształtem w modelu jej nie ma. Właściwości samych kondygnacji i przestrzeni nie są wymieniane.
- **Wszystko ma ten sam kolor.** Każdy element ma tę samą wartość albo żadnej; sprawdź liczby w legendzie.

## Dalej

- [Ukryj, izoluj i przezroczystość elementów](topic:hide-and-isolate)
- [Znajdź drogę w drzewie modelu](topic:model-tree)
