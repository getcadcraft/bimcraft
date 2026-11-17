---
title: Wiersz poleceń w pasku stanu
summary: W układzie z wierszem poleceń wpisuj tekst w dowolnym miejscu, a litery trafią do wiersza na dole. Wiersz pokazuje pasujące polecenia, prowadzi historię i nigdy nie zasłania rysunku.
keywords: wiersz poleceń, pisz w dowolnym miejscu, wpisane polecenie, pasek stanu, historia, klawisze strzałek, enter, spacja, WALL, DOOR, układ Duncan, układ Rhino, skrót, klawisze, wyszukiwarka poleceń
from: d583b52d
---

## Co zrobisz

Uruchamiaj narzędzia, wpisując ich nazwy, bez wcześniejszego klikania w pole.

## Kroki

1. Wybierz układ z wierszem poleceń: otwórz {{ui:Ustawienia}}, wybierz {{ui:Globalne}}, potem {{ui:Układ}} i wskaż **Duncan** (albo **Rhino**). Wiersz znajduje się w pasku stanu na dole okna.
2. Z kursorem w dowolnym miejscu i bez otwartego pola wpisz `wall`. Litery pojawią się w wierszu poleceń, a nad nim lista pokaże pasujące polecenia.
3. Naciśnij {{key:Enter}}. Uruchamia się narzędzie Ściana.
4. Kliknij w wiersz poleceń (albo naciśnij klawisz ponownie). Gdy wiersz jest pusty, lista pokazuje wcześniej wpisane polecenia. {{key:Up}} i {{key:Down}} przechodzą przez nie; {{key:Enter}} uruchamia pokazane.

## Co można wpisać

- Nazwa polecenia ze stylu menu w użyciu, o ile styl je ma (`WALL`, `WA`, `DOOR` w stylu Rysunkowym).
- Klawisz polecenia jako słowo: `W`, a następnie {{key:Enter}} lub {{key:Space}}, to Ściana; `D` to Drzwi.
- Nazwa polecenia, ze spacjami lub bez: `split wall`, `wallrectangle`.
- Początek słowa lub nazwy, gdy tak zaczyna się tylko jedno polecenie.
- Cokolwiek innego otwiera wyszukiwarkę poleceń z wpisanym tekstem.

## Warto wiedzieć

- {{key:Esc}} czyści wiersz i oddaje klawisze rysunkowi.
- W tych układach pojedyncza litera nie uruchamia już narzędzia sama z siebie: czeka w wierszu na {{key:Enter}} lub {{key:Space}}. Klawisze z {{key:Ctrl}}, klawisze funkcyjne, {{key:Delete}} i {{key:Esc}} działają jak dotąd. W pozostałych układach nic się nie zmienia.
- Gdy działa narzędzie rysowania, cyfry należą do narzędzia (wpisana długość).
- Pisanie w polu, oknie dialogowym lub w Ustawieniach zostaje tam.
- Historia jest zapisywana na tym komputerze: 50 poleceń dla każdej aplikacji.
