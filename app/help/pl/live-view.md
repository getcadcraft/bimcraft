---
title: Widok na żywo
summary: Panel obok modelu, który pokazuje go w wyglądzie czasu rzeczywistego, z słońcem, cieniami i odbitym światłem, i podąża za każdą twoją zmianą; przejdź przez niego i ustaw porę dnia oraz miesiąc.
keywords: widok na żywo, czas rzeczywisty, realtime, render w czasie rzeczywistym, spacer, przechodzenie, pierwsza osoba, prezentacja, klient, drugi ekran, drugie okno, monitor, pora dnia, słońce, pora roku, miesiąc, cienie, okluzja otoczenia, odbicia, odbite światło, globalne oświetlenie, webgpu, webgl
from: ea5c02bf
---

Widok na żywo pokazuje model w wyglądzie czasu rzeczywistego: niebo i słońce z położenia i daty twojej działki, cienie słoneczne, farby i materiały, które nadałeś elementom, lampy oraz światło odbite od ścian i podłóg. Podąża za tym, co robisz: obracasz widok 3D, a on też się obraca; zmieniasz model, a on pokazuje zmianę chwilę później. Nic nie jest wysyłane.

Rysuje tę samą scenę, farby, lampy i słońce co [Wyrenderuj obraz](topic:render). Do gotowego obrazu użyj tamtego.

## Otwórz

1. Otwórz model i wybierz {{ui:Widok na żywo}} na pasku narzędzi. Panel otwiera się nad aplikacją, w prawym dolnym rogu.
2. Przeciągnij jego pasek tytułu, aby go przesunąć; pociągnij za róg, aby go powiększyć.
3. {{ui:Widok na żywo w nowym oknie}} (przycisk obok) lub {{ui:Nowe okno}} w panelu przenosi go do własnego okna, na drugi ekran. Jeśli przeglądarka blokuje wyskakujące okna, otwiera się jako panel.
4. {{ui:Zamknij}} zamyka go.

## Elementy sterowania

| Element sterowania | Co robi |
|---|---|
| {{ui:Podążaj za widokiem}} | Włączone: widok na żywo patrzy tam, gdzie widok 3D. Spacer go wyłącza |
| {{ui:Spacer}} | Przechodzenie przez model (poniżej) |
| {{ui:Grawitacja}} | Podczas spaceru: stawanie na podłogach i wchodzenie po schodach. Wyłączona: lot |
| {{ui:Godzina}} | Godzina dnia. Słońce przesuwa się podczas przeciągania |
| {{ui:Miesiąc}} | Miesiąc, abyś mógł zobaczyć słońce zimą i latem |
| {{ui:Jakość}} | {{ui:Dla tego komputera}}, albo {{ui:Niska}}, {{ui:Średni}} lub {{ui:Wysoka}} |

Wiersz na dole mówi, co rysuje widok (WebGPU lub WebGL 2), jaka jest jakość i jakie jest odbite światło.

## Przejdź przez model

1. Obróć widok 3D w miejsce, w którym chcesz stanąć, i wybierz {{ui:Spacer}}. Stoisz na podłodze poniżej punktu obserwacji widoku, o wzroście 1,6 m.
2. Kliknij widok na żywo, a potem użyj {{key:W}} {{key:A}} {{key:S}} {{key:D}} lub klawiszy strzałek. Przytrzymaj {{key:Shift}}, aby biec. Przeciągnij, aby się rozejrzeć.
3. Wysokości do 40 cm są pokonywane (schody); wyższe to ściana. Ściany cię zatrzymują, a ty ześlizgujesz się wzdłuż nich.
4. Przy wyłączonej {{ui:Grawitacja}} lecisz: {{key:E}} w górę, {{key:Q}} w dół.
5. {{key:Esc}} kończy spacer.

## Odbite światło

Światło odbite od ściany oświetlonej słońcem na podłogę oraz ciemniejsze wnętrze pokoju są wyliczane w tle, na każdym rdzeniu procesora. Gdy trwa obliczanie, dolny wiersz pokazuje {{ui:Odbite światło: 40 %}}; gdy jest gotowe, widok je uwzględnia. Po każdej zmianie obliczanie zaczyna się od nowa.

:::note
To przybliżenie dla widoku na żywo, a nie obraz wyrenderowany: drobne szczegóły między punktami dostają odbite światło punktów sąsiednich.
:::

:::note
Przeglądarki się różnią. Tam, gdzie przeglądarka ma WebGPU, widok na żywo go używa; w pozostałych przypadkach używa WebGL 2 i wygląda tak samo. Gdy nie ma żadnego z nich, panel to mówi.
:::
