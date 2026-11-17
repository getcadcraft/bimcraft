---
title: Zapisywanie widoków i przejść
summary: Zachowuj kamery widoków modelu po nazwie, wracaj do nich, odtwarzaj je jeden po drugim i nagrywaj przejście przez budynek, aby je odtworzyć.
keywords: widoki, zapisane widoki, kamera, kamery, punkt widzenia, scena, sceny, zwiedzanie, prezentacja, przejście, spacer, nagrywanie, odtwarzanie, ścieżka, animacja
from: 3af19a36
---

{{ui:Widoki}} na pasku narzędzi zachowuje kamery widoku 3D w pliku modelu, tak abyś Ty i każdy, komu go wyślesz, mógł od razu do nich wrócić.

## Zapisywanie widoku

1. Ustaw widok 3D: obróć, przybliż, ukryj to, czego nie chcesz.
2. Kliknij {{ui:Widoki}}, wpisz nazwę (albo zostaw zaproponowaną) i kliknij {{ui:Zapisz widok}} albo naciśnij {{key:Enter}}.

Zapisanie pod nazwą, która już jest na liście, aktualizuje ten widok. Kliknij nazwę widoku, aby do niego wrócić; kamera płynnie przesunie się tam.

Strzałki zmieniają kolejność, ołówek zmienia nazwę, kosz usuwa. Każda zmiana to jeden krok, więc {{key:Ctrl+Z}} ją cofa.

## Odtwarzanie widoków

{{ui:Odtwórz widoki}} przechodzi od jednego widoku do następnego w kolejności listy, zatrzymując się na chwilę przy każdym. {{key:Esc}} albo {{ui:Zatrzymaj}} kończy odtwarzanie.

## Nagrywanie przejścia

1. Włącz [Przejście](topic:walk) i zacznij chodzić po wnętrzu budynku.
2. W {{ui:Widoki}} kliknij {{ui:Nagraj przejście}}.
3. Idź klawiszami {{key:W}} {{key:A}} {{key:S}} {{key:D}} i rozglądaj się myszą.
4. Kliknij {{ui:Zatrzymaj nagrywanie}}. Przejście zostaje zapisane jako "Przejście 1", wraz z długością.

Kliknij przejście, aby odtworzyć je tak, jak je przeszedłeś. {{key:Esc}} je zatrzymuje.

## Renderowanie przejścia jako wideo

Kliknij ikonę filmu obok przejścia. Okno wideo rysuje każdą klatkę przejścia z ostatnio użytymi ustawieniami renderowania, w rozmiarze, liczbie klatek na sekundę i jakości, które wybierasz tutaj. Zapisz je jako wideo WebM lub MP4 albo jako ZIP z jednym obrazem na klatkę. Klatki zajmują tyle samo czasu co obrazy, więc zacznij od {{ui:Szybkie}}.

## Narracja do przejścia

Kliknij ikonę dymka obok przejścia. Napisz jedną linię na każdą wypowiedź i zacznij linię od czasu, w którym się zaczyna (`12`, `0:12` lub `1:02.5`); linia bez czasu idzie po linii powyżej, po czasie potrzebnym na jej wypowiedzenie. Wybierz język, w języku klienta, jeśli to on będzie oglądać. {{ui:Podgląd}} odtwarza słowa głosem tego komputera i pokazuje je jako napisy; to samo dzieje się zawsze, gdy przejście się odtwarza. {{ui:Zapisz razem ze spacerem}} zachowuje narrację w IFC razem z przejściem.

Twój własny połączony asystent może napisać narrację za Ciebie: poproś go, aby obejrzał przejście i zapisane widoki, a ustawi linie w języku, który wskażesz, jako jeden krok cofania.

Wyrenderowane wideo nie ma własnego dźwięku, ponieważ przeglądarka nie może nagrać własnego głosu. Zapisz napisy (`.srt` lub `.vtt`) i dodaj je do wideo w odtwarzaczu lub edytorze. To, które głosy możesz wybrać, zależy od komputera; język bez zainstalowanego głosu i tak dostaje napisy.

## W pliku

Widoki i przejścia są zapisane w IFC jako zestaw właściwości `CadCraft_Views` w projekcie: zwykły IFC, który inne programy ignorują. Znajdują się we współrzędnych pierwszego modelu, więc nadal pasują po przeładowaniu modelu albo dodaniu innego.

:::tip
Aby wyrenderować obraz z zapisanego widoku, przejdź do widoku, a następnie kliknij [Renderowanie](topic:render).
:::
