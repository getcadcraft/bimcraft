---
title: Przesuwanie, kopiowanie, wyrównywanie i rozmieszczanie elementów budynku
summary: Przesuwaj ściany, podłogi, słupy i umieszczone elementy według punktu bazowego i drugiego punktu lub wpisanej odległości, kopiuj je w trakcie i wyrównuj lub rozstawiaj równomiernie na planie albo po wskazaniu w 3D.
keywords: przesuń, kopiuj, wyrównaj, rozmieść, odstęp, odsunięcie, punkt bazowy, przemieszczenie, ściany, słupy, podłogi, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Co zrobisz

Przesuniesz ścianę, słup, podłogę lub umieszczony element z biblioteki w nowe miejsce, zrobisz z nich kopie albo ustawisz kilka w jednej linii, bez ponownego rysowania.

## Nazwy i klawisze

Polecenia nazywają się {{ui:Przesuń}}, {{ui:Wyrównaj}} i {{ui:Rozmieść}}, a w wierszu poleceń możesz wpisać `MOVE`, `ALIGN` i `DISTRIBUTE`, jak w aplikacji rysunkowej CadCraft. Jedna różnica: w BimCraft {{key:M}} to {{ui:Zmierz}}, więc Przesuń ma własny klawisz, {{key:Shift+M}}. Narzędzia są w menu {{ui:Kompilacja}}.

## Przesuń

1. Wskaż, co przesunąć, na planie lub w widoku 3D. Ściany, podłogi, słupy i umieszczone elementy biblioteki mogą trafić do jednego wskazania.
2. Naciśnij {{key:Shift+M}} lub wybierz {{ui:Przesuń}}.
3. Kliknij punkt bazowy, a potem drugi punkt. Albo, po punkcie bazowym, wpisz odległość i naciśnij {{key:Enter}}: element pójdzie w kierunku, w którym wskazuje kursor od punktu bazowego. Możesz też wpisać `dx,dy` (albo `@dx,dy`) lub `długość<kąt`.
4. Naciśnij {{key:C}}, by włączyć {{ui:Kopiuj}}: każde przesunięcie wtedy tworzy kopię i pozostaje gotowe na następne. Naciśnij {{key:Esc}}, by zakończyć.

Oba punkty można też kliknąć w widoku 3D: gdy {{ui:Przesuń}} jest włączone, kursor trafia na wysokość podłogi poziomu, więc kliknięcie tam jest punktem planu. Przytrzymaj Shift podczas kliknięcia, by zamiast tego wskazać inny element. Używaj widoku planu, {{ui:Góra}}, {{ui:Przód}} lub {{ui:Z boku}}, jak wolisz: punkty zawsze leżą na tym poziomie.

Ściana zabiera ze sobą swoje drzwi i okna. Narysowana podłoga zabiera swoje otwory. Pomieszczenia, podłogi i sufity, które podążają za ścianami, są aktualizowane. Ściany połączone z przesuwaną ścianą pozostają na miejscu.

Każde przesunięcie to jedna zmiana: jeden {{key:Mod+Z}} ją cofa, a zmiana trafia do wszystkich w sesji Live TeamWork. Umieszczonego elementu biblioteki nie można tak skopiować; użyj {{ui:Edycja}} › {{ui:Kopiuj}} i {{ui:Wklej}}.

## Wyrównaj

Wskaż dwa lub więcej elementów, wybierz {{ui:Wyrównaj}}, następnie stronę (lewą, środek, prawą, górę, pośrodku w pionie lub dół) oraz to, do czego wyrównać: zestaw wskazany, pierwszy wskazany, ostatni wskazany albo punkt, który klikniesz. Naciśnij {{ui:Wyrównaj}} na pasku.

## Rozmieść

Wskaż trzy lub więcej elementów, wybierz {{ui:Rozmieść}}, następnie kierunek (w poprzek lub w dół) i odstęp: równe przerwy między nimi albo równe środki. Dwa skrajne elementy zostają na miejscu.

Ściany, które przesuwa {{ui:Wyrównaj}} lub {{ui:Rozmieść}}, zachowują swoje połączenia, jak przy {{ui:Przesuń}}: ściana połączona z przesuwaną ścianą wsuwa swój koniec wzdłuż własnej linii, by pozostać połączona; przegrody dochodzące do niej idą razem z nią, a dwie połączone ściany, obie przesunięte, zachowują narożnik tam, gdzie spotykają się ich nowe linie. Pomieszczenia pozostają zamknięte. To jeden krok w **Zmianach**.
