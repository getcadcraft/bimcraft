---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do sposobu pracy, przypisz dowolnemu poleceniu własny klawisz, przenoś polecenia między menu i ustaw, co robi kółko myszy oraz każdy przycisk myszy.
keywords: styl menu, menu, pasek menu, wstążka, wiersz poleceń, skróty klawiszowe, klawisze skrótów, klawisze, dostosuj, przypisz ponownie, mysz, kółko, odwróć, kierunek powiększania, przycisk środkowy, przesuń, orbita, klawisze dwuliterowe, eksport, import, przełączanie, znajomy
from: a424e836
---

Polecenia BimCraft są takie same, niezależnie od sposobu ich wywołania. **Styl menu** decyduje tylko o tym, gdzie polecenia się znajdują, jak są tam nazwane i którymi klawiszami się je uruchamia, dzięki czemu można zachować dotychczasowe nawyki. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana jest natychmiastowa, a ta przeglądarka ją zapamiętuje.

## Pięć stylów

| Styl | Co dostajesz |
|---|---|
| {{ui:CadCraft}} | Własny pasek narzędzi BimCraft i klawisze ({{key:W}} ściana, {{key:D}} drzwi, {{key:N}} okno, {{key:X}} przekrój, {{key:F}} dopasuj). Punkt wyjścia. |
| {{ui:Projekt domu}} | Pasek menu (Plik, Edycja, Kompilacja, Biblioteka, 3D, CAD, Narzędzia, Widok) nad rzędem narzędzi budowlanych, tak jak układają je programy do projektowania domów mieszkalnych. Te same pojedyncze klawisze, plus {{key:Mod+L}} dla biblioteki, {{key:F9}} dla widoku 3D, {{key:F10}} dla rzutu i {{key:F11}} dla obu. |
| {{ui:Wstążka BIM}} | Karty z dużymi przyciskami (Architektura, Wstaw, Adnotacje, Modyfikuj, Widok, Wyjście) z menu Plik i szybkimi przyciskami po prawej. Klawisze dwuliterowe: {{key:W}} potem {{key:A}} dla ściany, {{key:D}} {{key:R}} drzwi, {{key:W}} {{key:N}} okno, {{key:S}} {{key:C}} przekrój, {{key:Z}} {{key:F}} dopasuj. Przycisk środkowy przesuwa widok; {{key:Shift}} i przycisk środkowy obracają widok po orbicie. |
| {{ui:Klasyczne kreślenie}} | Mała wstążka i wiersz poleceń, dla osób, które wpisują polecenia: WALL, DOOR, WINDOW, ROOF, Cofnij (U), ZOOM, SECTION, PLOT, INSERT, HELP. Zacznij pisać w dowolnym miejscu, a litery trafią do wiersza poleceń; {{key:Enter}} uruchamia, {{key:Enter}} przy pustym wierszu powtarza ostatnie polecenie, {{key:Esc}} czyści go. |
| {{ui:Przeglądarka}} | Do otwierania i sprawdzania modeli, a nie do ich rysowania: menu {{ui:Plik}}, {{ui:Widok}}, {{ui:Pokaż}}, {{ui:Sprawdź}} i {{ui:Edycja}} nad rzędem narzędzi przeglądania (dopasuj, z góry, z przodu, z boku, przekrój, zmierz, ukryj, izoluj, przezroczystość, pokaż wszystko, spacer). Narzędzia budowlane czekają w menu {{ui:Model}} na końcu. Te same klawisze co we własnym stylu BimCraft. |

Menu i wstążki są widoczne, gdy otwarty jest model albo gdy zaczyna się nowy budynek; wcześniej pliki otwiera i budynki zaczyna panel po lewej stronie.

:::tip
Klawisz należący do własnego układu BimCraft, ale nie do wybranego stylu, nie działa, a wiersz stanu podaje, dokąd trafiło jego polecenie („Przekrój w stylu Wstążka BIM to SC”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje znaczenie, a uruchomione narzędzie zachowuje własne klawisze: {{key:R}} i {{key:Tab}} podczas umieszczania, {{key:W}} {{key:A}} {{key:S}} {{key:D}} podczas spaceru, {{key:H}} przy narzędziach drzwi i okna, cyfry podczas wpisywania długości.
:::

## Dopasuj do siebie

1. Wybierz styl najbliższy oczekiwanemu, a następnie kliknij {{ui:Dostosuj…}}.
2. Na karcie {{ui:Klawisze i menu}} znajdź polecenie (pomocne jest pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz albo dwa klawisze pod rząd w przypadku klawisza dwuliterowego. Kliknij klawisz, aby go usunąć.
3. Przy pasku menu lub wstążce {{ui:Gdzie jest}} przenosi polecenie do innego menu lub panelu albo do {{ui:Tylko klawisze}}.
4. Na karcie {{ui:Mysz}} ustaw kółko, przyciski, które przesuwają rzut, oraz to, co każdy przycisk robi w widokach 3D.
5. Nadaj nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy jego własną kopię („Mój projekt domu”); wbudowany styl nigdy się nie zmienia. Klawisz przypisany do dwóch poleceń albo taki, który uruchomiłby się, zanim da się wpisać klawisz dwuliterowy, jest pokazany na czerwono i trzeba go poprawić przed zapisem.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (punkt wyjścia) lub {{ui:Przewinięcie w górę pomniejsza}}, oraz jak szybko. Szczypnięcie gładzika zawsze powiększa lub pomniejsza zgodnie z ruchem palców.
- **Przesuwanie rzutu i rysunków**: dowolnym z lewego, środkowego i prawego przycisku. {{key:Space}} i przeciągnięcie też przesuwają; przeciągnięcie lewym przyciskiem przesuwa tylko tam, gdzie kliknięcie niczego nie wybierze ani nie narysuje.
- **Przeciąganie w widokach 3D**: {{ui:Własne każdego widoku}} zachowuje przyciski BimCraft (lewy obraca po orbicie, prawy przesuwa). Albo ustaw każdy przycisk na orbitę, przesuwanie, powiększanie lub brak; {{key:Shift}} z przyciskiem zamienia orbitę z przesuwaniem. Kliknięcie bez przeciągania nadal coś wybiera.

## Zabierz ustawienia ze sobą

{{ui:Eksportuj}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Importuj…}} dodaje taki plik, z innego komputera lub od współpracownika. Zaimportowany plik może wskazywać tylko na własne polecenia BimCraft: wszystko inne w nim (polecenie, którego ta wersja nie ma, klawisz, który tu nie działa) zostaje pominięte i policzone w wierszu stanu. {{ui:Usuń ten styl}} usuwa jeden z własnych stylów.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w odpowiadającym jej stylu (własny pasek narzędzi, pasek menu, wstążka albo {{ui:Klasyczne kreślenie}}; {{ui:Przeglądarka}} występuje tylko w BimCraft i nie ma odpowiednika w innych aplikacjach), ze zmianami wprowadzonymi w każdej aplikacji; aplikacja bez pasującego stylu zachowuje własny. Wybór innego stylu w jednej aplikacji zmienia tylko tę aplikację.
:::

Powiązane: [Klawiatura i mysz](topic:keyboard) · [Ustawienia BimCraft](topic:settings) · [Przejście z innych programów BIM i rysunkowych](topic:coming-from)
