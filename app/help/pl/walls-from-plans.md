---
title: Ściany z zestawu rzutów (PDF lub skan)
summary: Zamień strony PDF albo zeskanowany rysunek w ściany, drzwi i okna, jedna kondygnacja na każdą stronę, ze stroną zachowaną pod każdym planem.
keywords: pdf, rzuty, zestaw rzutów, skan, zeskanowany rysunek, tiff, obrys, ściany z pdf, ściany ze skanu, kondygnacje, strony, skala, drzwi, okna, kierunek otwarcia, parapet, podkład
from: b70d9db7
---

## Co zrobisz

Zacznij model od rzutów, które masz na papierze: PDF (narysowany liniami albo skan w PDF) albo skan (PNG, JPEG, TIFF z jedną lub wieloma stronami). Każda strona staje się ścianami, drzwiami i oknami jednej kondygnacji.

## Kroki

1. Włącz {{ui:Rysuj}}. Wybierz {{ui:Kompilacja}} › {{ui:Z rysunku…}}, potem {{ui:Wybierz rysunek…}} i wskaż PDF albo skan.
2. **Strony i kondygnacje.** Każda strona jest wypisana z tym, czym jest (**rysunek liniowy** albo **obraz (obrysowany)**), i kondygnacją, do której trafi: jedną z istniejących kondygnacji, **nową kondygnację nad pozostałymi** albo **pomiń tę stronę**. Strony są dopasowywane do twoich kondygnacji po kolei; zmień dowolną z nich.
3. **Skala.** Dla PDF podaj, jak został narysowany (**1 : 100**, **1 : 50**…). W innych przypadkach albo gdy nie wiesz, wybierz **z odległości, którą znam**: kliknij dwa końce wymiaru lub paska skali w podglądzie, potem wpisz prawdziwą odległość. Wszystkie strony używają jednej skali.
4. Wybierz **typ ściany** i **wysokość nowej kondygnacji**. Zostaw zaznaczone **Zachowaj każdą stronę pod planem jej kondygnacji**, aby widzieć każdą stronę jako cienkie linie pod jej planem.
5. Wiersz pod wyborami mówi, ile ścian, drzwi i okien powstanie i na ilu kondygnacjach. Kliknij {{ui:Utwórz je}}.

## Jak czyta stronę

- **Ściany** pochodzą z par równoległych linii oddalonych o nie więcej niż 600 mm (dwa lica ściany); ściana ma grubość równą przerwie. Kreskowanie i napisy są pomijane.
- **Drzwi i okna.** Przerwa w ścianie (500–2600 mm) z narysowanym obok łukiem otwarcia to drzwi, zawieszone na jednym końcu przerwy i otwierające się na stronę łuku. Przerwa albo ściana z liniami parapetu w niej to okno. Przerwa bez żadnego z nich to drzwi do 1300 mm, a powyżej tej wartości okno.
- **Skan** jest najpierw wyprostowany, gdy został zeskanowany krzywo (okno dialogowe to mówi), zamieniony na czerń i biel, oczyszczony z plamek i obrysowany; **strona PDF, która jest obrazem**, najpierw jest rysowana, a potem traktowana tak samo. Obrys znajduje środek każdej kreski i dopasowuje do niej proste linie i łuki; nie używa sieci ani wytrenowanego modelu.
- **Pomieszczenia** wynikają same z zamkniętych pętli, które tworzą ściany. Gdy PDF ma tekst, pomieszczenie bierze nazwę z napisu w jego wnętrzu (największego; wymiar, skala ani numer arkusza nie są nazwą). Skan nie ma tekstu, więc jego pomieszczenia zachowują nazwy nadane przez program.
- **Wszystko odczytane ze strony jest oznaczone jako niezweryfikowane**: każda ściana, drzwi, okno i pomieszczenie ma przerywaną ramkę i znak „?” w rzucie, dopóki go nie sprawdzisz. Zaznacz to, co sprawdziłeś, i użyj {{ui:Narzędzia}} › {{ui:Oznacz jako sprawdzone}}. Zobacz [Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie](topic:verification).

## Co zobaczysz

- Ściany, drzwi, okna i pomieszczenia na każdej kondygnacji oraz nowe kondygnacje, wszystko jako jeden krok: {{key:Mod+Z}} cofa całość.
- Każda strona jako cienkie linie pod planem jej kondygnacji, wypisana w {{ui:Kompilacja}} › {{ui:Z rysunku…}} z przyciskiem {{ui:Usuń}}.

:::note
To jest to, co dały linie, z dokładnością strony. Skan może zgubić słabą ścianę, połączyć dwie ściany leżące bardzo blisko siebie albo znaleźć ścianę w plamie; łuk otwarcia, którego rysunek nie pokazuje, zamienia przerwę w zwykłe drzwi. Sprawdź każdą kondygnację względem strony, zanim na niej polegasz, i popraw to, co jest błędne, narzędziami {{ui:Ściana}}, {{ui:Drzwi}} i {{ui:Okno}}.
:::
