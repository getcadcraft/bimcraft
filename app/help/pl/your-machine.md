---
title: Czego do renderowania używa Twój komputer
summary: Ustawienia › Renderowanie pokazuje grafikę, rdzenie procesora i pamięć, z których ta przeglądarka pozwala korzystać aplikacji, oraz poziom określający, od czego zaczyna się renderowanie.
keywords: twój komputer, karta graficzna, gpu, webgpu, webgl, procesor, cpu, rdzenie, wątki, pamięć, ram, pamięć współdzielona, izolacja, poziom, klasa, szybkość, wolno, szybkość renderowania, laptop
from: 360f2375
---

Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), pozostań na karcie tej aplikacji i przewiń do {{ui:Renderowanie}}. {{ui:Twój komputer}} pokazuje, z czego ta przeglądarka pozwala aplikacji korzystać przy renderowaniu. Nic z tego nie opuszcza Twojego komputera.

| Wiersz | Co oznacza |
|---|---|
| {{ui:Grafika}} | Karta graficzna, którą zgłasza przeglądarka. „WebGPU” oznacza, że może wykonywać pracę renderowania; „tylko WebGL 2” oznacza brak WebGPU: widok na żywo i obrazy wysokiej jakości korzystają z karty graficznej przez WebGL 2 (obrazy ze starszym śledzeniem ścieżek WebGL, bez dodatków wymagających WebGPU); programowy zamiennik oznacza, że wszystko działa na procesorze |
| {{ui:Procesor}} | Ile rdzeni procesora zgłasza przeglądarka |
| {{ui:Pamięć}} | Mniej więcej ile pamięci ma komputer, gdy przeglądarka to podaje. Niektóre przeglądarki tego nie podają |
| {{ui:Pamięć współdzielona}} | Czy strona może współdzielić pamięć między swoimi wątkami roboczymi. Gdy włączone, każdy rdzeń może pracować na jednej kopii sceny; gdy wyłączone, każdy potrzebuje własnej kopii, więc duża scena mieści się w mniejszej liczbie rdzeni jednocześnie |
| {{ui:Szybki kod procesora}} | Czy przeglądarka uruchamia szybszy kod WebAssembly. Bez niego używany jest wolniejszy wariant zapasowy |
| {{ui:Poziom}} | {{ui:Karta graficzna, wysoki}}, {{ui:Karta graficzna, podstawowy}} lub {{ui:Tylko procesor}}, z powodem podanym pod spodem |

## Poziom

Poziom określa, od czego zaczyna się renderowanie, tak aby laptop z wbudowanym układem graficznym albo bez żadnej karty graficznej pozostawał responsywny. Wbudowany lub telefonowy układ graficzny albo 4 GB pamięci lub mniej nigdy nie dostaje {{ui:Karta graficzna, wysoki}}.

:::note
Przeglądarki różnią się. Ten sam komputer może pokazywać WebGPU w jednej przeglądarce, a „tylko WebGL 2” w innej. W Linuksie większość przeglądarek nie ma jeszcze WebGPU.
:::
