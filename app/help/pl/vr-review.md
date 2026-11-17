---
title: Przegląd modelu w gogle VR
summary: Przejdź przez model IFC w pełnej skali w gogle VR: skacz, obracaj się, mierz, przecinaj, umieszczaj problemy BCF ze zdjęciem, oglądaj go jako model na stole i spotkaj innych z sesji na żywo.
keywords: vr, wirtualna rzeczywistość, gogle, webxr, xr, immersyjny, quest, oculus, vive, index, pico, przejście, teleport, przegląd projektu, koordynacja, przegląd, mierz, przekrój, przecięcie, problem, problemy, bcf, blat stołu, model w skali, obecność, awatary, na żywo, razem
from: 8994b36d
---

{{ui:VR}} na pasku narzędzi umieszcza Cię w modelu w goglach VR, w pełnej skali. Stoisz tam, gdzie jest kamera widoku 3D, na podłodze pod nią, twarzą w tę samą stronę. Gogle pokazują to, co widok 3D: ukryte kondygnacje, elementy i modele pozostają ukryte, a malowane materiały zostają. Nic nie jest wysyłane: przeglądarka rysuje to na tym komputerze (albo w przeglądarce samych gogli).

## Czego potrzebujesz

- Gogli, które przeglądarka obsługuje (WebXR): wbudowanej przeglądarki samodzielnych gogli albo Chrome lub Edge na komputerze PC z podłączonymi goglami.
- Otwartego modelu IFC na bezpiecznej stronie (https), jak jest na tej stronie.

Gdy nie ma gogli, {{ui:VR}} jest wyszarzony i mówi, dlaczego.

## Start

1. Ustaw widok 3D tam, gdzie chcesz zacząć: w pokoju albo na zewnątrz, patrząc na budynek.
2. Kliknij {{ui:VR}} na pasku narzędzi.
3. Załóż gogle.

Menu jest na grzbiecie lewej dłoni. Wskaż je prawym kontrolerem i pociągnij spust, aby wybrać przycisk. (Przy jednej dłoni menu unosi się przed miejscem, w którym zaczynałeś.)

## Poruszanie się

- **Skok:** w {{ui:Przesuń}} wskaż podłogę i pociągnij spust; wylądujesz tam. Albo pchnij drążek do przodu, aby celować, i puść, aby skoczyć. Możesz lądować tylko na podłogach, płytach i ziemi (powierzchniach skierowanych w górę), nigdy na ścianie.
- **Obrót:** pchnij drążek w lewo lub w prawo: obracasz się o 30° za każdym razem.
- **Chodzenie:** w swoim obszarze ruchu po prostu chodź.

## Pomiar

Wybierz {{ui:Zmierz}}, potem pociągnij spust na dwóch punktach. Odległość pokazuje się między nimi, w metrach. Punkt blisko narożnika przyciąga się do narożnika.

## Przecinanie

Wybierz {{ui:Przekrój}} i pociągnij spust na powierzchni:

- na ścianie (albo czymkolwiek, co nie jest podłogą): wszystko między Tobą a tą powierzchnią zostaje odcięte, więc widzisz do środka. Działa to najlepiej z zewnątrz albo przez pokój;
- na podłodze, z góry: rzut przecięty 1.2 m nad tą podłogą, więc ściany pokazują swoją dolną część.

{{ui:Wyczyść}} usuwa przecięcie i pomiary. Jeśli [płaszczyzna przekroju](topic:section-plane) przecina model w chwili startu, gogle startują z nią.

## Dodawanie problemu

Wybierz {{ui:Problem}} i pociągnij spust w miejscu problemu. Ponumerowana pinezka go oznacza, a problem trafia na kartę {{ui:Problemy}} jako temat BCF, ze zdjęciem tego, co widziałeś, i kamerą tam, gdzie stałeś, we współrzędnych własnych modelu. Zapisz je razem z resztą [problemów](topic:issues-bcf) jako plik BCF; inne narzędzia koordynacji otworzą je w tym samym widoku.

Dodaj komentarz do problemu po wyjściu z VR, na karcie Problemy: wpisywanie w goglach nie jest jeszcze zbudowane.

## Widok jako model na stole

{{ui:Blat stołu}} zmniejsza model, aby zmieścił się na stole przed Tobą; chodź wokół niego albo obracaj go drążkiem. {{ui:Pełna skala}} stawia Cię z powrotem tam, gdzie byłeś.

## Z innymi, na żywo

W [sesji na żywo](topic:work-live) każdy w VR widzi innych jako głowę i dwie dłonie w ich własnym kolorze, z imieniem i kropką, w którą każdy wskazuje. Zmiany, które ktokolwiek wprowadza, docierają do Twoich gogli w ciągu chwili. Osoby przy biurku nie są jeszcze pokazywane w goglach.

## Wyjście

Wybierz {{ui:Wyjdź z VR}} (albo zdejmij gogle i zakończ tam). Widok 3D na ekranie przesuwa się do miejsca, w którym była Twoja głowa.

:::note
Testowano z emulatorem gogli, jeszcze nie na każdych goglach. Duży model może powodować przycinanie w goglach: najpierw ukryj kondygnacje lub modele, których nie potrzebujesz ([ukrywanie i izolowanie](topic:hide-and-isolate)).
:::
