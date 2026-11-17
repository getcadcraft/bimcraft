---
title: Problemy i pliki BCF
summary: Zapisz widok modelu jako problem — kamerę, wybrane elementy, ukryte elementy, przekrój — udostępnij go jako plik BCF innym narzędziom koordynacji i otwieraj ich pliki BCF, aby zobaczyć ich problemy.
keywords: bcf, bcfzip, problem, problemy, temat, punkt widzenia, raport kolizji, koordynacja, komentarz, migawka, otwórz bcf, zapisz bcf, eksport, import
from: 2a6cf201
---

## Co zrobisz

Wskaż problem w modelu, zachowaj widok, który go pokazuje, a potem przekaż go w pliku BCF — formacie, który czytają i zapisują inne narzędzia koordynacji.

## Kroki

1. Otwórz model IFC i ustaw widok: obróć go do siebie, wybierz zaangażowane elementy, ukryj to, co przeszkadza, przetnij go płaszczyzną przekroju lub pudełkiem.
2. Kliknij kartę {{ui:Problemy}} po prawej, a potem {{ui:Nowy problem z tego widoku}}.
3. Wpisz tytuł i, jeśli chcesz, komentarz; wybierz status; podaj swoje imię lub e-mail (po zalogowaniu wpisze się nazwa Twojego konta; zob. [Ustawienia BimCraft](topic:settings#your-name-on-issues)). Kliknij {{ui:Utwórz problem}}.
4. Kliknij {{ui:Pokaż}} przy problemie, aby przywrócić jego widok.
5. Kliknij {{ui:Zapisz BCF}}, aby pobrać wszystkie problemy jako jeden plik `.bcf`.
6. Aby zobaczyć problemy, które ktoś inny utworzył, kliknij {{ui:Otwórz BCF…}} i wybierz jego plik `.bcf` lub `.bcfzip`.

## Co powinieneś zobaczyć

- Każdy problem na liście z obrazem jego widoku, tytułem, statusem, autorem i datą.
- {{ui:Pokaż}} przywraca kamerę, wybrane elementy, to, co było ukryte (lub jedyne pokazane rzeczy), oraz przekrój. Elementy są odnajdywane po GlobalId we wszystkich otwartych modelach; wiersz statusu informuje, jeśli niektórych brakuje.
- Płaszczyzna lub pudełko przekroju z innego narzędzia są pokazywane, gdy są zgodne z osiami modelu; pochylone lub dodatkowe płaszczyzny wracają jako objętość przekroju (do 6 płaszczyzn). Problem zachowuje pierwsze pudełko z objętości złożonej z kilku pudełek.

## Warto wiedzieć

- Plik jest w formacie BCF 2.1 i zachowuje widok we własnych współrzędnych modelu, więc inne narzędzia ustawiają kamerę w tym samym miejscu.
- Problemy pozostają na tej karcie, dopóki ich nie zapiszesz. Otwarcie innego modelu zachowuje listę; przed pokazaniem problemów otwórz model, którego dotyczą.
- Równoległa (ortogonalna) kamera z innego narzędzia jest pokazywana z perspektywiczną kamerą tego podglądu, odsuniętą tak, aby ta sama część modelu wypełniała widok.

## Częste błędy

- **Pokaż przesunęło kamerę w dziwne miejsce.** Problem powstał w innym modelu lub z innymi współrzędnymi. Najpierw otwórz właściwy model.
- **Plik się nie otwiera.** Nie jest to archiwum BCF zip albo jest uszkodzony; wiersz statusu podaje powód.

## Dalej

- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
- [Przecięcie modelu IFC płaszczyzną przekroju](topic:section-plane)
