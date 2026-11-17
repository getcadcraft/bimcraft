---
title: Otwieranie modelu IFC i rozglądanie się w 3D
summary: Otwórz plik IFC, obracaj, przesuwaj i powiększaj, a Dopasuj, Góra, Przód i Z boku pomogą ci się zorientować.
keywords: ifc, 3d, orbita, przesuwanie, powiększanie, dopasuj, widok z góry, widok z przodu, widok z boku, nawigacja, kostka widoku, kamera
from: 68b460dd
---

## Co zrobisz

Otwórz model IFC, poruszaj się po nim w 3D i przejdź do standardowych widoków. Około pięciu minut.

Potrzebujesz pliku `.ifc`. Większość programów BIM go eksportuje; w Revit jest to **File > Export > IFC**. Zob. [Przenoszenie pliku projektu do 3D przez IFC](topic:rvt-to-ifc).

## Kroki

1. Kliknij {{ui:Wybierz plik}} (albo obszar upuszczania w lewym górnym rogu).
2. Wybierz plik `.ifc` i potwierdź.
3. Poczekaj, aż wiersz stanu się zakończy. Najpierw pokazuje „Uruchamianie silnika IFC…”, potem „Wczytywanie modelu…” i „Budowanie geometrii: … z … elementów”.
4. Spójrz na model: otwiera się w widoku z trzech czwartych, dopasowany do ekranu.
5. Kliknij {{ui:Góra}} na pasku nad modelem, by spojrzeć prosto w dół.
6. Kliknij {{ui:Przód}}, by spojrzeć od przodu, a potem {{ui:Z boku}}, by spojrzeć z boku.
7. Kliknij {{ui:Dopasuj}} albo naciśnij {{key:F}}, by wrócić do widoku z trzech czwartych całego modelu.

## Co powinieneś zobaczyć

- Model pośrodku, z cienkimi ciemnymi krawędziami dla wyglądu przypominającego rysunek.
- Panel {{ui:Plik}} po lewej: nazwa pliku, rozmiar, schemat IFC (na przykład IFC2X3 lub IFC4), nazwa projektu, faza, program, z którego wyeksportowano, autor, data eksportu oraz liczba elementów i trójkątów.
- Listy {{ui:Kondygnacje}} i {{ui:Elementy}} pod nim.
- Wiersz stanu: „Otwarto *nazwa pliku*: *n* elementów w *s* s”.

## Poruszanie się

:::mouse
| Aby | Zrób to |
|---|---|
| Obrócić | Przeciągnij lewym przyciskiem |
| Przesunąć | Przeciągnij prawym przyciskiem albo przytrzymaj {{key:Shift}} (lub {{key:Mod}}) i przeciągnij lewym przyciskiem |
| Powiększyć | Przewiń kółkiem albo przeciągnij środkowym przyciskiem |
| Zobaczyć wszystko | Naciśnij {{key:F}} albo kliknij {{ui:Dopasuj}} |
:::

:::mac mouse
Na gładziku: przeciągnij jednym palcem, by obrócić; przytrzymaj {{key:Shift}} lub {{key:Mod}} i przeciągnij, by przesunąć; przewijaj dwoma palcami albo szczypnij, by powiększyć. Kliknięcie dwoma palcami to kliknięcie prawym przyciskiem, a przeciągnięciem nim też możesz przesuwać, ale {{key:Shift}} i przeciągnięcie jest wygodniejsze.
:::

:::touch
| Aby | Zrób to |
|---|---|
| Obrócić | Przeciągnij jednym palcem |
| Powiększyć | Szczypnij dwoma palcami |
| Przesunąć | Przesuń dwa palce razem |
| Zobaczyć wszystko | Stuknij {{ui:Dopasuj}} |
:::

Obracanie zawsze odbywa się wokół punktu w środku modelu. Przesuwanie przenosi ten punkt, więc po długim przesunięciu obracanie może wydawać się niecentryczne: kliknij {{ui:Dopasuj}}, by je zresetować.

## Cieniowany, krawędzie lub model szkieletowy

Trzy małe przyciski tuż nad kostką widoku wybierają sposób rysowania modelu: {{ui:Cieniowany}}, {{ui:Cieniowany z krawędziami}} (domyślny) i {{ui:Model szkieletowy}}. Są też poleceniami (Widok w menu i na liście Dostosuj), więc mogą mieć własne klawisze. {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}} są w wierszu {{ui:Widok}} na pasku narzędzi.

## Częste błędy

- **Oczekiwanie nazwanych widoków.** BimCraft ma cztery stałe widoki ({{ui:Dopasuj}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Z boku}}), kostkę widoku w prawym dolnym rogu i swobodne obracanie. Nie zapisuje widoków.
- **Szukanie planów i przekrojów.** W tej wersji nie ma planów 2D ani pudełek przekroju. Przetnij model jedną płaszczyzną {{ui:Przekrój}} ([Przecięcie modelu IFC płaszczyzną przekroju](topic:section-plane)) albo wyłącz kondygnacje: [Pokazywanie i ukrywanie kondygnacji, przestrzeni i krawędzi](topic:storeys-and-spaces).
- **Otwieranie pliku projektu i oczekiwanie 3D.** Plik projektu otwiera się jako karta pliku. Najpierw wyeksportuj IFC.
- **Otwieranie `.ifczip`.** Rozpakuj go albo wyeksportuj zwykły `.ifc`.
- **Bardzo duży model powoduje spowolnienie lub zawieszenie karty.** Zob. [Przeglądarki, urządzenia i pamięć](topic:platforms).

## Dalej

[Wskaż element i odczytaj jego właściwości](topic:inspect-element).
