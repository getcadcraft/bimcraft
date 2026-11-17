---
title: Rysowanie obrazu innym programem
summary: Nasz własny śledzący promienie rysuje obraz Renderuj; inny program może go narysować tylko przez dodatek silnika renderowania w CadCraft Studio. Co jest przenoszone i dlaczego niektórych programów nigdy się nie proponuje.
keywords: renderowanie, silnik, zewnętrzny program, silnik dodatku, studio, tło, kolejka, usd, gltf, narysowany przez, blender, gpl
from: 652b413c
---

Obraz w oknie {{ui:Renderuj}} rysują **nasze własne silniki**: {{ui:Szybki}} i śledzenie promieni, w przeglądarce i w CadCraft Studio. Inny program może go narysować tylko wtedy, gdy przynosi go **dodatek silnika renderowania**: zob. [Dodawanie silnika renderowania za pomocą dodatku](topic:render-engine-addons). Aby przenieść scenę do innego programu i dalej w nim pracować, użyj [Otwierania sceny w innym programie](topic:render-open-in) lub [Wysyłania sceny do silnika gier](topic:render-unreal).

## Rysowanie obrazu silnikiem dodatku

1. Włącz dodatek w Ustawienia › Dodatki. Jego silnik pojawi się na liście Silnik w oknie {{ui:Renderuj}}.
2. Wybierz go. Jego własne ustawienia pokażą się pod listą Silnik.
3. Kliknij {{ui:Renderuj}}. W Studio, za pierwszym razem, gdy dodatek uruchamia program, Studio pyta w swoim oknie dialogowym. Postęp jest widoczny podczas rysowania; {{ui:Zatrzymaj}} go kończy. Obraz pojawia się z oznaczeniem silnika, który go narysował.

Silnik napisany w JavaScript działa także w przeglądarce. Silnik uruchamiający program na tym komputerze działa tylko w Studio; w przeglądarce pojawia się jako plik do zapisania.

## Co jest przenoszone

Silnik dostaje **pakiet**: model jako plik USD (a także plik glTF, gdy o niego poprosi) oraz plik ustawień z dokładnymi wartościami materiałów, słońcem i niebem, każdą włączoną lampą wraz z jej mocą i profilem światła, kamerą i ekspozycją. Każdy program oświetla, tonuje i próbkuje po swojemu, więc obrazy są podobne pod względem kamery, słońca, lamp i ekspozycji, ale nie piksel w piksel.

## Programy, których CadCraft nigdy nie uruchamia

CadCraft nigdy nie uruchamia programu objętego licencją GNU GPL i nigdy nie wymienia go jako silnika ani celu Otwórz w. Blender jest jednym z nich, więc nie ma go na liście Silnik. Plik USD lub glTF zapisany z {{ui:Renderuj}} nadal otworzy się w nim, tak jak w każdym programie, który czyta te pliki.

:::note
Kamery panoramiczne i stereo oraz obraz nieba (zamiast tego używane są kolory nieba) nie są przenoszone do innego programu. Nic zrobionego w innym programie nie wraca do modelu.
:::
