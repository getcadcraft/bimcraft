---
title: Sprawdź rysunek w widoku wydruku
summary: Przełącz DWG lub DXF na widok wydruku, aby zobaczyć go czarno na białym, z grubościami linii i bez warstw, które się nie drukują.
keywords: wydruk, plot, podgląd, podgląd wydruku, grubości linii, monochromatyczny, czarno-biały, defpoints, bez wydruku
from: 1a59c23e
---

## Co zrobisz

Zobaczysz, jak arkusz wyjdzie na papierze, zanim wydrukujesz go z programu, który go utworzył: czarno na białym, grubości linii w ich prawdziwej szerokości i bez warstw ustawionych jako nie drukowane.

## Kroki

1. Otwórz rysunek DWG lub DXF.
2. Kliknij kartę arkusza nad rysunkiem.
3. Kliknij {{ui:Widok wydruku}} na końcu kart albo naciśnij {{key:P}}.
4. Przybliż szczegół, aby porównać grube i cienkie linie.
5. Kliknij ponownie {{ui:Widok wydruku}} albo naciśnij {{key:P}}, aby wrócić do zwykłych kolorów.

## Co powinieneś zobaczyć

- Biały papier na szarym tle, każda linia i tekst czarne, niezależnie od motywu.
- Grubości linii: na arkuszu każda grubość jest rysowana w swojej rzeczywistej szerokości na papierze, więc linia 0,5 mm jest dwa razy grubsza od linii 0,25 mm przy każdym powiększeniu. Linia nigdy nie jest rysowana cieniej niż jej grubość na ekranie.
- Warstwy ustawione jako nie drukowane oraz warstwa DEFPOINTS są ukryte.
- Przycisk {{ui:Widok wydruku}} pozostaje wciśnięty. Widok wydruku pozostaje włączony, gdy przełączasz arkusze lub otwierasz inny rysunek, aż go wyłączysz.

W {{ui:Model}} widok wydruku używa tylko grubości ekranowych (cienkie linie mają jeden piksel, grubsze są trochę szersze), ponieważ przestrzeń modelu nie ma rozmiaru papieru.

## Częste błędy

- **Oczekiwanie, że to wydrukuje.** Widok wydruku to podgląd. Drukowanie i eksport do PDF nie są jeszcze wbudowane w BimCraft; drukuj z programu, który utworzył rysunek.
- **Oczekiwanie stylów wydruku.** Tabele piór i kolory stylów wydruku nie są odczytywane. Wszystko jest zwykłą czernią.
- **Naciskanie P podczas pisania.** {{key:F}} i {{key:P}} nie działają, gdy piszesz w polu albo gdy wyświetlone jest zestawienie wyposażenia.
