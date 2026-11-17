---
title: Pokazywanie i ukrywanie kondygnacji, przestrzeni i krawędzi
summary: Wyłączaj kondygnacje, aby zajrzeć do wnętrza budynku, pokazuj pomieszczenia i przestrzenie oraz włączaj i wyłączaj linie krawędzi.
keywords: kondygnacje, poziomy, piętra, ukryj, izoluj, pomieszczenia, przestrzenie, ifcspace, krawędzie, widoczność, przekrój
from: b838dcc0
---

## Co zrobisz

Zajrzyj do wnętrza modelu IFC, wyłączając kondygnacje powyżej tej, która Cię interesuje. Następnie pokaż pomieszczenia i przestrzenie, a dla czystszego widoku wyłącz linie krawędzi.

## Kroki: spójrz na jedno piętro

1. Otwórz model IFC. Zobacz [Otwieranie modelu IFC i oglądanie w 3D](topic:open-ifc-model).
2. Znajdź listę {{ui:Kondygnacje}} po lewej. Najwyższa kondygnacja jest pierwsza, jak w przekroju czytanym od dachu w dół.
3. Odznacz dach i każdą kondygnację powyżej piętra, które chcesz zobaczyć.
4. Kliknij {{ui:Góra}}, aby spojrzeć na to piętro z góry.
5. Zaznacz kondygnacje ponownie, aby je przywrócić.

## Czego się spodziewać

Każda odznaczona kondygnacja znika od razu, wraz z wszystkim, co na niej jest. Lista pokazuje tylko kondygnacje, na których coś jest widoczne. Elementy nieprzypisane do żadnej kondygnacji są grupowane jako **Nie na kondygnacji** na dole; często trafiają tam elementy terenu i część mebli.

## Kroki: pokaż pomieszczenia i przestrzenie

1. Kliknij {{ui:Przestrzenie}} na pasku narzędzi nad modelem. Przycisk pozostaje wciśnięty.
2. Spójrz na model: pomieszczenia i przestrzenie pojawiają się jako jasne, przezroczyste bryły.
3. Kliknij przestrzeń, aby po prawej odczytać jej właściwości, takie jak nazwa, numer i powierzchnia.
4. Kliknij {{ui:Przestrzenie}} ponownie, aby je ukryć.

Przestrzenie są ukryte po otwarciu modelu, bo inaczej zasłoniłyby ściany i podłogi.

## Kroki: krawędzie

1. Kliknij {{ui:Krawędzie}}, aby wyłączyć cienkie linie krawędzi.
2. Kliknij ponownie, aby je włączyć.

W bardzo dużych modelach (ponad 1,5 miliona trójkątów) przycisk jest wyszarzony z podpowiedzią „Krawędzie są wyłączone dla bardzo dużych modeli”. Dzięki temu oszczędza się pamięć.

## Częste błędy

- **Odznaczenie kondygnacji, a mimo to widzisz jej części.** Element należy do kondygnacji, którą przypisał mu program eksportujący. Wysoka ściana lub schody często należą tylko do kondygnacji bazowej, więc zostają, gdy ukryta jest kondygnacja powyżej, albo znikają razem z kondygnacją poniżej.
- **Ukrywanie kondygnacji, aby zajrzeć do środka.** Pudełko przekroju bywa szybsze: zobacz [Przecinanie modelu IFC płaszczyzną przekroju](topic:section-plane#a-section-box). Możesz też odznaczać wiersze w {{ui:Drzewo modelu}} (zobacz [Nawigacja po drzewie modelu](topic:model-tree)).
- **Kliknięcie przestrzeni przez ścianę.** Kliknięcie wybiera najbliższą widoczną powierzchnię. Ukryj kondygnację powyżej albo przełącz na {{ui:Góra}}, a potem kliknij.
- **Nazwy kondygnacji wyglądają dziwnie.** BimCraft pokazuje nazwy kondygnacji zapisane w pliku. Jeśli brzmią „Level 1” lub są numerem, tak zapisał je eksporter.
