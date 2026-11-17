---
title: Praca z warstwami i arkuszami
summary: Włączaj i wyłączaj warstwy rysunku, przełączaj się między przestrzenią modelu a arkuszami i rozumiej, jak arkusze pokazują model przez swoje okna widokowe.
keywords: warstwy, włącz wyłącz warstwę, zamroź, odmroź, arkusze, układy, przestrzeń papieru, karty, okna widokowe, menedżer warstw, layer
from: a9a16b53
---

## Co zrobisz

Uporządkujesz widok zajętego rysunku, wyłączając warstwy, a potem obejrzysz arkusze rysunku jeden po drugim.

## Kroki: warstwy

1. Otwórz rysunek DWG lub DXF.
2. Znajdź listę {{ui:Warstwy}} po lewej. Każda warstwa ma pole wyboru, próbkę koloru i nazwę.
3. Odznacz warstwę, aby ukryć wszystko, co na niej jest.
4. Kliknij {{ui:Wyłącz wszystkie}}, aby ukryć każdą warstwę.
5. Zaznacz tylko te warstwy, które chcesz zobaczyć.
6. Kliknij {{ui:Włącz wszystkie}}, aby znów pokazać wszystko.

## Co powinno być widoczne

Warstwy znikają i pojawiają się od razu, na {{ui:Model}} i na każdym arkuszu. Warstwy wyłączone lub zamrożone w samym rysunku zaczynają jako odznaczone.

## Kroki: arkusze

1. Spójrz na rząd kart nad rysunkiem: {{ui:Model}}, a potem każdy arkusz z nazwą.
2. Kliknij kartę arkusza.
3. Spójrz na arkusz: papier leży na ciemniejszym biurku, a każde okno widokowe pokazuje swoją część modelu w swojej skali i pod swoim kątem.
4. Powiększ okno widokowe, aby odczytać szczegół. Powiększasz arkusz, a nie okno widokowe, więc cały arkusz przesuwa się razem.
5. Kliknij {{ui:Dopasuj}} albo kliknij dwukrotnie, aby znów zobaczyć cały arkusz.

## Jak tu działają arkusze

Arkusz (układ, czyli przestrzeń papieru) zawiera tabliczkę rysunkową i okna widokowe, które zaglądają do przestrzeni modelu. BimCraft rysuje każde okno widokowe przycięte do jego krawędzi, w jego własnej skali i obrocie, i ukrywa warstwy zamrożone w tym oknie. Pierwsze okno widokowe każdego arkusza to sam arkusz i nie jest rysowane dwa razy.

## Typowe błędy

- **Oczekiwanie, że zmiany warstw się zapiszą.** Ustawienia warstw wpływają tylko na widok, dopóki nie otworzysz innego pliku.
- **Oczekiwanie sterowania warstwami w każdym oknie widokowym.** Lista {{ui:Warstwy}} przełącza warstwę wszędzie. Warstwy zamrożone w jednym oknie przez sam rysunek pozostają w nim zamrożone.
- **Szukanie wyszukiwania warstw lub stanów warstw.** Jeszcze nie zbudowano. Lista jest w kolejności rysunku.
- **Oczekiwanie, że będzie można pracować wewnątrz okna widokowego.** Nie ma tam czego aktywować: BimCraft tylko pokazuje arkusz. Użyj {{ui:Model}}, aby oglądać przestrzeń modelu bezpośrednio.
