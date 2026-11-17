---
title: Napisz specyfikację z modelu
summary: Jedna sekcja specyfikacji dla każdego typu ściany, drzwi, okna, stropu i wykończenia w użyciu, z faktami odczytanymi z modelu i własnym tekstem, zapisana jako PDF lub dokument Word.
keywords: specyfikacja, spec, rysunki wykonawcze, etap 5, dokumentacja wykonawcza, sekcja, typ ściany, typ drzwi, typ okna, wykończenie, klasyfikacja, uniclass, omniclass, masterformat, dokument, pdf, word, docx, zestawienia
from: a6acc6d4
---

## Co zrobisz

Uzyskaj specyfikację zgodną z modelem: sekcję dla każdego typu, który rzeczywiście występuje w budynku, z jego budową i ilościami odczytanymi z modelu oraz tekstem napisanym dla niej.

## Kroki

1. Włącz {{ui:Rysuj}}, otwórz **Zestawienia** w panelu po lewej i kliknij **Specyfikacja**.
2. Okno wypisuje jedną sekcję dla każdego typu ściany, drzwi, okna, stropu i wykończenia pomieszczeń w użyciu. Pod nagłówkiem są jej **fakty**, odczytane z modelu: grubość, warstwy po kolei, poziom rozwinięcia, wymiary, ile sztuk i ile materiału. Sekcja, której elementy mają kod klasyfikacji, pokazuje ten kod w nagłówku.
3. Wpisz tekst specyfikacji w polu pod sekcją. **Zaznacz jej elementy** pokazuje, czego dotyczy sekcja.
4. Kliknij **Zapisz**. To jeden krok w cofnięciu, a tekst zostaje zachowany w pliku budynku.
5. Otwórz **Dokumenty z modelu**, wybierz szablon **Specyfikacja** i kliknij **Podgląd**, a następnie zapisz jako PDF, Word lub Markdown. Zobacz [Dokumenty z modelu](topic:documents-from-the-model).

## Zestawienia rysunków wykonawczych jako dokument

Szablon **Zestawienia rysunków wykonawczych** drukuje zestawienia drzwi, okien i wykończeń prosto z modelu, w układzie Twojego biura. We własnym szablonie wpisz `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` albo nazwę zapisanego ustawienia, na przykład `{{schedule Door schedule by floor}}`. `{{specification}}` drukuje specyfikację.

## Warto wiedzieć

- Fakty pochodzą z modelu. Zmieniają się, gdy zmienia się model; tekst nie.
- BimCraft nie zapisuje żadnego punktu żadnej normy ani tekstu producenta. Sekcja bez tekstu drukuje „Nie napisano jeszcze tekstu specyfikacji.”
- Tekst napisany dla typu, którego nie ma już w modelu, zostaje zachowany i wypisany pod „Tekst dla typów nieobecnych już w modelu”.
- Aby zmienić typ ogólny na konkretną budowę, zobacz [Narzędzia ścian](topic:wall-tools) (Zamień typ).
