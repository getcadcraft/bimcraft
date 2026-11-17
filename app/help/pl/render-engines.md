---
title: Wybierz program, który rysuje obraz
summary: Wybór silnika w oknie Renderuj: nasze dwa silniki, inne programy w CadCraft Studio oraz to, co robi przeglądarka zamiast tego.
keywords: renderowanie, silnik, renderer, silnik renderowania, wtyczka, plugin, studio, zewnętrzny program, rysowany przez, kolejka, silnik dodatku
from: 44a1ef5e
---

{{ui:Renderuj}} ma wybór **Silnik** nad polem {{ui:Postać}}. Nasze własne dwa silniki są zawsze dostępne i działają wszędzie; dodatki mogą dodać kolejne, a w CadCraft Studio na liście są też programy, które przejmują scenę.

| Silnik | Co robi | Gdzie |
|---|---|---|
| Wbudowany: {{ui:Szybki}} | Szybkie zdjęcie: światło dzienne, miękkie cienie, wygląd szkła i metalu, w kilka sekund | Przeglądarka i Studio |
| Wbudowany: Śledzenie promieni | Światło odbijające się między powierzchniami na karcie graficznej lub procesorze, kolejka renderowania i inne komputery w sieci | Przeglądarka i Studio |
| Silnik dodatku | Rysuje obraz i zwraca go: zob. [Rysowanie obrazu innym programem](topic:render-other-program) | Przeglądarka (silnik napisany w JavaScript) lub Studio (silnik uruchamiający program) |
| Program, który przejmuje scenę | Studio umieszcza scenę w jego folderze i utrzymuje ją w zgodzie | Studio |
| Otwórz w … | Zapisuje scenę i otwiera ją w programie; nic nie wraca: zob. [Otwieranie sceny w innym programie](topic:render-open-in) | Przeglądarka zapisuje plik |

## Jak działa wybór

- Wybór {{ui:Szybki}} lub śledzenia promieni zmienia z nim {{ui:Postać}} i odwrotnie. Nic więcej w oknie nie zmienia się u osób, które nigdy nie używają innego silnika.
- Silnik niedostępny pozostaje na liście z podaniem przyczyny („nie znaleziono”, „wymaga nowszej wersji”); nie można go wybrać. W przeglądarce silnik działający tylko w Studio pokazuje „zapisuje plik”: {{ui:Renderuj}} zapisuje wtedy scenę i jej ustawienia do pliku, który zabierasz do tego programu.
- Wybór zapisuje się z ustawieniami renderowania pliku, a ostatnio wybrany silnik jest silnikiem startowym dla plików, które nie mają własnego wyboru.
- Obraz z innego programu podaje, który program go narysował i w jakiej wersji, w oknie i w kolejce renderowania. Obietnice ze strony [Renderowanie](topic:render) dotyczą wyłącznie **naszych własnych** silników: inny program oświetla, tonuje i próbkuje po swojemu, więc dwa obrazy tej samej sceny są podobne pod względem kamery, słońca, lamp i ekspozycji, ale nie piksel w piksel.

## Co dostaje każdy silnik

Scena trafia do innego programu jako **pakiet**: model jako plik USD (ten sam plik, który zapisuje [Zapisz jako USD](topic:usd)) oraz plik ustawień, który zawiera to, czemu nie można ufać importerowi USD: dokładne wartości materiałów, lampy włączone wraz z ich mocą i profilami światła, słońce, niebo, ekspozycję oraz kamerę tak, jak rysuje ją okno. Nic nigdzie nie jest wysyłane.

## Kolejka renderowania

Obraz dla innego programu może czekać w [kolejce renderowania](topic:render#the-render-queue) tak jak nasze własne; zadanie pamięta, dla którego silnika jest.
