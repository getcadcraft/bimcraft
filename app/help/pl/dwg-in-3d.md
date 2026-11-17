---
title: Oglądanie rysunku DWG lub DXF w 3D
summary: Przełącz przestrzeń modelu rysunku na 3D, aby zobaczyć wysokości, grubości, ściany 3D, siatki i bloki, obracać widok wokół nich, kliknąć obiekt, by zobaczyć jego właściwości, i sprawdzić, czego jeszcze nie rysuje.
keywords: 3d, dwg, dxf, rysunek, przestrzeń modelu, obrót, przekrój, cięcie, wycinanie, wybór, zaznacz, właściwości, atrybuty, uchwyt, wysokość, grubość, wyciągnięcie, 3dface, polyface, siatka, polilinia 3d, bloki, widoki, perspektywa, równoległy, zasięg, acis, bryły
from: a0c6cd17
---

## Co zrobisz

Obejrzysz przestrzeń modelu rysunku w 3D. Linie i polilinie leżą na swoich rzeczywistych wysokościach, obiekty z grubością stoją jak ściany, a ściany 3D, siatki i bloki 3D pokazują się jako powierzchnie, wokół których możesz obracać widok. Arkusze pozostają dwuwymiarowe.

## Kroki

1. Otwórz DWG lub DXF. Zob. [Oglądanie rysunku DWG lub DXF](topic:view-dwg). Otwiera się w 3D, chyba że {{ui:Ustawienia}} › {{ui:BimCraft}} › **Rysunki otwierają się w** ma wartość {{ui:Model (2D)}}.
2. Z widoku 2D kliknij {{ui:3D}} na pasku nad rysunkiem albo naciśnij {{key:3}}.
3. Za pierwszym razem chwilę poczekaj: pasek stanu pokaże „Tworzenie rysunku w 3D…”, a potem liczbę linii i ścian, które widać.
4. Obracaj, przesuwaj i powiększaj (zob. tabelę poniżej).
5. Kliknij widok w drugim pasku: {{ui:Izo}}, {{ui:Góra}}, {{ui:Dół}}, {{ui:Przód}}, {{ui:Tył}}, {{ui:Lewo}} lub {{ui:Prawo}}.
6. Kliknij {{ui:Perspektywa}}, aby przełączać się między widokiem perspektywicznym a równoległym.
7. Kliknij {{ui:Zasięg}} albo naciśnij {{key:F}}, aby znów zobaczyć cały rysunek.
8. Kliknij ponownie {{ui:3D}}, naciśnij {{key:3}} albo kliknij {{ui:Model}} lub kartę arkusza, aby wrócić do 2D.

## Co powinno być widoczne

- Przestrzeń modelu w 3D, oś Z skierowana w górę, w kolorach własnych rysunku. Ściany są o odcień jaśniejsze niż ich krawędzie.
- Warstwy wyłączone w {{ui:Warstwy}} znikają także z widoku 3D.
- Po prawej: liczba linii i ścian, wymiary rysunku w X, Y i Z, **Tylko w widoku 2D** oraz **Jeszcze nie narysowano**.

## Przetnij płaszczyzną przekroju

Kliknij {{ui:Przekrój}} na pasku 3D albo naciśnij {{key:X}}. Pasek pod nim działa tak samo jak przy modelach IFC (zob. [Przecięcie modelu IFC płaszczyzną przekroju](topic:section-plane)): tnij od {{ui:Góra}}, {{ui:Przód}} lub {{ui:Z boku}}, przeciągnij lub wpisz odsunięcie – tutaj w jednostkach własnych rysunku – a {{ui:Odwróć}} zachowuje drugą stronę. To, co płaszczyzna odcina, nie może być wybrane. Powrót do 2D usuwa przecięcie.

## Zobacz właściwości obiektu

Kliknij obiekt w widoku 3D. Zmieni on kolor wyboru, a {{ui:Właściwości}} pokażą, co plik o nim mówi: jego typ, warstwę, kolor, typ linii i uchwyt, następnie jego własne dane, takie jak początek, koniec i długość linii, środek i promień okręgu, narożniki ściany 3D albo blok, punkt wstawienia, skalę, obrót i wartości atrybutów odwołania do bloku.

- Odwołanie do bloku wybiera się w całości, wraz z zagnieżdżonymi w nim blokami.
- Kliknięcie kilka pikseli od linii wybiera linię.
- Przytrzymaj {{key:Mod}} i kliknij, aby wybrać więcej obiektów albo usunąć jeden z wyboru; {{ui:Właściwości}} podadzą wtedy liczbę obiektów według typu.
- {{key:Esc}} lub kliknięcie w pustą przestrzeń czyści wybór.
- Obiektów na wyłączonych warstwach nie da się wybrać.

## Poruszanie się

:::mouse
| Aby | Wykonaj |
|---|---|
| Obrócić widok | Przeciągnij środkowym przyciskiem albo lewym |
| Przesunąć widok | Przeciągnij prawym przyciskiem albo przytrzymaj {{key:Shift}} i przeciągnij |
| Powiększyć | Przewiń kółko; powiększa w stronę tego, co jest pod kursorem |
| Zobaczyć wszystko | {{ui:Zasięg}} lub {{key:F}} |
| Spojrzeć z boku | Kliknij ścianę, krawędź lub narożnik kostki widoku w prawym dolnym rogu |
:::

Kostkę widoku można zamienić na ikonę osi albo ukryć w {{ui:Ustawienia}}. Zob. [Ustawienia BimCraft](topic:settings).

:::mac mouse
Na gładziku przesuń dwoma palcami, aby obrócić widok, przytrzymaj {{key:Shift}} i przesuń, aby przesunąć, a szczypnij, aby powiększyć.
:::

:::touch
Przeciągnij jednym palcem, aby obrócić widok. Szczypnij dwoma palcami, aby powiększyć, a przesuń je razem, aby przesunąć widok.
:::

## Co jest rysowane w 3D

| W rysunku | W 3D |
|---|---|
| Linie, polilinie 3D | Na swoich rzeczywistych wysokościach |
| Polilinie, okręgi, łuki, elipsy | W swojej płaszczyźnie, na swojej rzędnej, pochylone, gdy rysunek je pochyla |
| Grubość linii, polilinii, okręgów i łuków | Ściany o tej wysokości; okręgi są zamknięte od góry i od dołu |
| Ściany 3D, siatki polyface, siatki wielokątne | Cieniowane powierzchnie z widocznymi krawędziami |
| Bloki | Ustawione, obrócone i przeskalowane w 3D, także zagnieżdżone bloki |
| Kreskowania | Ich kontury |
| Zwykła linia 2D | Płasko, tam gdzie została narysowana |

## Tylko w widoku 2D

Tekst, tekst wieloliniowy i widoczne atrybuty bloków są rysowane w 3D, w swojej płaszczyźnie, na swojej wysokości, a kliknięcie w nie je wybiera. Szerokie polilinie pokazują swoją szerokość jako płaski pas. Odnośniki wielokrotne, obrazy i wzory kreskowania są liczone w **Tylko w widoku 2D**: zobacz je na karcie {{ui:Model}} lub w arkuszach.

## Jeszcze nie narysowano

Bryły i powierzchnie zapisane jako bryły ACIS (bryły 3D, ciała, obszary i powierzchnie) oraz siatki podziałowe są wymienione w **Jeszcze nie narysowano** wraz z liczbą. Są pomijane, a nie zgadywane.

## Typowe błędy

- **Wszystko wygląda płasko.** Rysunek jest dwuwymiarowy: jego linie nie mają wysokości. Kliknij {{ui:Przód}}, aby to sprawdzić; płaski rysunek wygląda jak linia.
- **Model bryłowy nie pokazuje nic.** Bryły zrobione w programie do modelowania bryłowego są ciałami ACIS i są wymienione w **Jeszcze nie narysowano**. Wyeksportuj model jako IFC albo jako ściany 3D z programu, który go utworzył.
- **Rysunek to mały skupiony punkt na środku.** Coś daleko w przestrzeni modelu, na przykład stara kopia planu, powiększa zasięg. Przybliż kółkiem tam, gdzie chcesz popatrzeć.

## Dalej

- [Praca z warstwami i arkuszami](topic:dwg-layers-sheets)
- [Przecięcie modelu IFC płaszczyzną przekroju](topic:section-plane)
