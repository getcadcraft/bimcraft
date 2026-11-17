---
title: Elewacje, przekroje i arkusze
summary: Narysuj linie przekroju na rzucie, a potem otwórz Arkusze, aby uzyskać gotowy do druku zestaw z modelu: rzuty każdego poziomu, cztery elewacje, przekroje budynku, zestawienia i konstrukcje ścian, z tabliczkami rysunkowymi i skalami, jako jeden plik PDF.
keywords: arkusze, zestaw rysunków, dokumentacja wykonawcza, druk, wydruk, plot, pdf, elewacja, elewacje, elewacja północna, przekrój, przekrój budynku, linia przekroju, przecięcie, linie ukryte, tabliczka rysunkowa, numer arkusza, skala, 1/4" = 1'-0", 1:50, 1:100, papier, 11x17, 24x36, A3, A1, zestaw do pozwolenia
from: 91ed0cde
---

## Co zrobisz

Stwórz zestaw rysunków z modelu: rzut każdego poziomu, elewacje północną, wschodnią, południową i zachodnią, przekrój budynku dla każdej linii przekroju, zestawienia drzwi, okien, pomieszczeń i drewna konstrukcyjnego oraz elewację każdej ściany szkieletowej. Zestaw jest rysowany od nowa z modelu za każdym razem, gdy go otwierasz, więc zawsze zgadza się z tym, co zbudowano.

## Narysuj linię przekroju

1. Na poziomie otwórz {{ui:Kompilacja}} i wybierz {{ui:Linia przekroju}}.
2. Kliknij miejsce początku i miejsce końca linii. Krótka kreska w jej środku pokazuje stronę, w którą patrzy przekrój: lewa strona linii, idąc od pierwszego kliknięcia do drugiego.
3. Linia pojawia się na rzucie z końcówkami i literą (A, potem B itd.).

Wskaż linię, aby zmienić ją we **Właściwościach**: jej literę, **Odwróć widok**, aby patrzeć w drugą stronę, oraz **Patrz na odległość**, aby zatrzymać widok w ustalonej odległości za przekrojem (0 pokazuje wszystko za nim). Naciśnij {{key:Delete}}, aby ją usunąć.

## Otwórz arkusze

1. Kliknij {{ui:Arkusze}} na pasku modelu (obok {{ui:Drukuj}}).
2. Arkusze są wypisane po lewej: **A-101** i dalsze dla rzutów, **A-201** dla elewacji, **A-301** dla przekrojów, **A-401** dla zestawień i **S-101** dla konstrukcji ścian. Kliknij jeden, aby go zobaczyć.
3. Wybierz **Papier**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 lub A1. Papier zachowuje swoją standardową nazwę, a jego rozmiar jest zapisany w wybranych {{ui:Jednostki}}, na przykład *Letter · 8.5 × 11 in* lub *A3 · 297 × 420 mm*.
4. Kliknij {{ui:Pobierz zestaw jako PDF}}: jedna strona na arkusz.

## Uwagi standardowe z pakietu przepisów

W arkuszu {{ui:Uwagi standardowe}} pozwala umieścić uwagi z pakietu przepisów (według branży) w prawej kolumnie arkusza. Każda uwaga zachowuje pakiet i punkt, z którego pochodzi, a wydrukowany arkusz mówi, kiedy pakiet jest niezweryfikowany. Uwagi są punktem wyjścia: o tym, co mówią, decyduje osoba odpowiedzialna za rysunek. Wymagany jest dodatek Przepisy budowlane.

## Co jest na arkuszach

- **Rzuty** pokazują ściany, drzwi, okna, pomieszczenia z ich polami, wymiary i linie przekroju, w największej standardowej skali, która się mieści: 1/4" = 1'-0" lub mniejszej (1:50 lub mniejszej w milimetrach).
- **Elewacje** są rysowane z modelu 3D z usuniętymi liniami ukrytymi, po dwie na arkusz, wszystkie w tej samej skali, z linią terenu pod nimi. Dach, fundamenty i grunt pokazane są tak, jak zamodelowano.
- **Przekroje** wypełniają to, co przecina cięcie (ściany, stropy, dach), i rysują to, co widać za nim.
- **Elewacje i przekroje mają swoje adnotacje:** znacznik każdego poziomu z jego nazwą i wysokością po prawej, wysokość między poziomami po lewej, a na elewacji szerokość budynku pod nią oraz oznaczenie (D1, W1) przy każdych drzwiach i oknach w ścianie zwróconej do widza. Ściany własne pomieszczenia: zobacz [Elewacje wnętrz](topic:interior-elevations).
- **Zestawienia** to te same tabele co {{ui:Zestawienia}} na pasku modelu.
- **Konstrukcja** pokazuje słupki, rozpory, nadproża i progi każdej ściany szkieletowej, widziane z jej zewnętrznej strony, aby ekipa mogła ją rozplanować. Zobacz [Konstrukcje ścian, stropów i dachów](topic:framing).

Każdy arkusz ma tabliczkę rysunkową z numerem, tytułem, nazwą pliku i datą.

:::tip
Arkusze powstają z modelu: aby zmienić rysunek, zmień model i otwórz {{ui:Arkusze}} ponownie.
:::

:::note
Elewacje i przekroje pokazują tylko linie i wypełnienia: wymiary, znaczniki poziomów i uwagi na nich jeszcze nie są zbudowane.
:::
