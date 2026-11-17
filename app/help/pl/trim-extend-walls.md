---
title: Przycinanie, wydłużanie i łączenie ścian
summary: Przytnij lub wydłuż ściany do innej ściany i połącz dwie ściany w miejscu ich styku, każdą jako jeden krok, który możesz cofnąć.
keywords: przytnij, wydłuż, narożnik, połącz, spotkanie, uporządkuj, koniec ściany, narożnik ściany, odetnij, zwiększ długość, skróć, modyfikuj, TR
from: a6fb2e8b
---

## Co zrobisz

Uporządkujesz narysowane ściany: przytniesz ścianę, która wchodzi za drugą, wydłużysz tę, która nie dochodzi, albo zamkniesz otwarty narożnik.

## Kroki

1. Włącz {{ui:Rysuj}} i wybierz kondygnację na liście kondygnacji rzutu.
2. **Przytnij lub wydłuż do ściany:** wybierz {{ui:Modyfikuj}} › {{ui:Przytnij / wydłuż}}. Kliknij ścianę, do której przycinasz lub wydłużasz (krawędź), a potem każdą ścianę, którą chcesz zmienić. Ściana wchodząca za krawędź zostaje przycięta do niej, a część, w którą klikniesz, zostaje; ściana niedochodząca do krawędzi zostaje wydłużona, aż ją spotka. Krawędź pozostaje wybrana, więc można kliknąć kilka ścian jedna po drugiej. Naciśnij {{key:Esc}}, aby wybrać inną krawędź.
3. **Połącz dwie ściany w narożniku:** wybierz {{ui:Modyfikuj}} › {{ui:Narożnik}}, kliknij pierwszą ścianę, a potem drugą. Obie biegną do punktu styku, a BimCraft porządkuje narożnik. Gdy jedna ściana przecina drugą, zostaje część, w którą kliknięto.
4. Naciśnij {{key:Esc}}, aby zacząć od nowa, lub {{key:V}}, aby wrócić do {{ui:Zaznacz}}.

## Co powinieneś zobaczyć

- Gdy wskazujesz ścianę, rzut pokazuje, dokąd by trafiła, już połączoną ze ścianami, które spotyka, wraz z nową długością.
- Każda zmiana to jeden krok: {{key:Mod+Z}} ją cofa.
- Pomieszczenia, podłogi, sufity, dachy i to, co podąża za ścianami, są tworzone na nowo, jak po każdej zmianie ścian. Pomieszczenie zamknięte narożnikiem pojawia się z numerem i polem.
- Drzwi lub okno na odciętej części są usuwane razem z nią.

## Warto wiedzieć

- Ściany rysuje się wzdłuż ich osi, więc przycina się i wydłuża je wzdłuż tej osi: ściana styka się z osią drugiej ściany, a złącze jest porządkowane jako T lub L.
- BimCraft podaje powód, gdy nie może wykonać operacji: dwie ściany są równoległe, linia ściany przechodzi obok drugiej ściany, drzwi lub okno stoją na drodze (najpierw je przesuń lub usuń), albo po ścianie nic by nie zostało (poniżej 1 mm). Ściana krótsza niż 50 mm zostaje wykonana z ostrzeżeniem w panelu Problemy: zob. [Wskazówki rysunkowe](topic:drawing-advice).
- Przycinać i wydłużać można tylko ściany narysowane w BimCraft.

Zobacz też [Rysowanie ścian](topic:draw-walls) i [Zmiana ściany, drzwi lub okna](topic:change-a-wall-or-door).
