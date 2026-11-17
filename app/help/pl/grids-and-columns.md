---
title: Siatki i słupy
summary: Rozmieść linie siatki z numerowanymi i literowymi oznaczeniami, według rozstawu lub pojedynczo, rysuj wzdłuż nich ściany i słupy oraz oglądaj je na rzutach, elewacjach i przekrojach.
keywords: siatka, siatki, linia siatki, siatka słupów, oś, osie, oznaczenie, linia siatki, siatka konstrukcyjna, 1 2 3, A B C, słup, słupy, słupek, filar, przyciąganie, IfcGrid, IfcColumn
from: bf99a8f7
---

## Co zrobisz

Wyznacz budynek na siatce, a następnie narysuj ściany i umieść słupy wzdłuż jej linii.

## Umieszczanie całej siatki

1. Włącz {{ui:Rysuj}}, a następnie wybierz {{ui:Kompilacja}} › {{ui:Siatka}}.
2. Kliknij {{ui:Umieść siatkę…}}. Podaj, ile **linii numerowanych** (1, 2, 3…) i ile **linii literowych** (A, B, C…) chcesz oraz w jakim są odstępie. Wpisz jeden rozstaw albo kilka oddzielonych przecinkami dla nierównych przęseł (na przykład `20', 24', 20'`). {{ui:Za ostatnie linie}} to odległość, o jaką każda linia wykracza poza skrajne linie drugiego rodzaju, a {{ui:Obrót (stopnie)}} obraca całą siatkę.
3. Kliknij {{ui:Umieść}}, a następnie kliknij miejsce, w którym znajduje się pierwsze skrzyżowanie (1 / A). Podgląd podąża za wskaźnikiem.

Linie numerowane biegną w górę rzutu i są rozmieszczone w poprzek niego; linie literowe biegną w poprzek rzutu i są rozmieszczone w górę. Litery pomijają I i O, jak na rysunkach, dzięki czemu nigdy nie są mylone z 1 i 0.

## Rysowanie linii siatki pojedynczo

Przy włączonej {{ui:Siatka}} kliknij miejsce, w którym linia się zaczyna, i miejsce, w którym się kończy. Otrzymuje ona następną etykietę z linii, wzdłuż których biegnie (po 3 jest 4; po B jest C). Naciśnij {{key:Esc}}, aby zakończyć.

## Zmiana linii siatki

Przy włączonej {{ui:Siatka}} kliknij linię, aby ją wybrać. Wpisz nową {{ui:Etykieta}} i naciśnij {{key:Enter}}, albo kliknij {{ui:Usuń tę linię}} (lub naciśnij {{key:Delete}}). {{ui:Oznaczenia}} umieszcza oznaczenia na obu końcach, na początku lub na końcu każdej linii, albo nigdzie. Każda zmiana to jeden krok: {{key:Mod+Z}} ją cofa.

## Rysowanie wzdłuż siatki

Narzędzie {{ui:Ściana}}, narzędzie {{ui:Słup}} i pozostałe narzędzia rysowania przyciągają się do linii siatki i do miejsc, w których się przecinają (znacznik przyciągania to mały okrąg z krzyżykiem).

**Słupy:** wybierz {{ui:Kompilacja}} › {{ui:Słup}}, wskaż kształt (prostokątny lub okrągły), wymiar i to, czy słup sięga **do kondygnacji powyżej**, czy ma stałą wysokość, a następnie kliknij. {{ui:Na każdym skrzyżowaniu siatki}} umieszcza słup w każdym skrzyżowaniu, które jeszcze go nie ma. Kliknij słup, aby zmienić jego kształt, wymiar lub wysokość w {{ui:Właściwości}}; {{key:Delete}} go usuwa. Słupy sięgające do kondygnacji powyżej podążają za nią, gdy zmienia się jej wysokość.

## Czego powinieneś się spodziewać

- Siatki na rzucie każdej kondygnacji, z oznaczeniem i jego etykietą na końcach każdej linii.
- Linie siatki w zestawie rysunków: na rzutach oraz na elewacjach i przekrojach, tam gdzie linia jest widziana z czoła, z oznaczeniem nad budynkiem. Zobacz [Elewacje, przekroje i arkusze](topic:sheets).
- W pliku IFC: jedna siatka dla budynku (IfcGrid, z liniami numerowanymi na jednej liście i literowymi na drugiej) oraz słupy jako IfcColumn z ich wymiarem, wysokością i ilościami. Inne programy BIM pokazują oba.

:::note
Siatka z pliku z innego programu jest pokazywana, a narzędzia się do niej przyciągają, ale jej linii nie można tu zmieniać.
:::
