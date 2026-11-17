---
title: "Dokumenty z modelu"
summary: "Napisz specyfikację lub opis raz jako szablon, z polami na ilości, właściwości i etykiety, a potem wypełniaj go z otwartego IFC jako PDF lub dokument Word."
keywords: dokument, dokumenty, specyfikacja, spec, opis, szablon, markdown, raport, word, docx, pdf, ilości, zestawienie, branża, zestawienie drzwi, wykończenia, documentcad
from: 2b0c9156
---

## Co zrobisz

Szablon to tekst w Markdown z polami w podwójnych nawiasach klamrowych. BimCraft wypełnia pola z otwartego modelu (liczby, ilości według typu, właściwości, twoje [etykiety](topic:tags-and-schedules)) i zapisuje wynik jako PDF, dokument Word (.docx) lub Markdown.

## Kroki

1. Otwórz model IFC.
2. W lewym panelu, pod {{ui:Ilości}}, otwórz {{ui:Dokumenty z modelu}}.
3. Wybierz szablon: {{ui:Drzwi i okucia}} albo {{ui:Ściany, okładziny i wykończenia}}, albo {{ui:Wczytaj szablon (.md)…}} dla własnego.
4. Jeśli szablon odczytuje etykiety, których model jeszcze nie definiuje, kliknij {{ui:Dodaj etykiety tego szablonu}}, a potem oznacz elementy w {{ui:Etykiety}}.
5. Zmień tekst, jak chcesz, i kliknij {{ui:Pokaż dokument}}.
6. Kliknij {{ui:PDF}} (najpierw wybierz A4 lub Letter) albo {{ui:Word (.docx)}}.

## Czego powinieneś się spodziewać

- Wypełniony dokument pod przyciskami, z tabelami.
- Lista ostrzeżeń, gdy pola nie da się odczytać: etykieta, która nie jest zdefiniowana, właściwość, której model nie ma, albo blok, który nigdy się nie zamyka. Takie pole drukuje się jako `[?…]`.
- Strony PDF z tytułem dokumentu i „Strona 1 z 3” na dole każdej strony. Długie tabele przechodzą na kolejne strony z wierszem nagłówka.

## Pola

| Pole | Daje |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | nazwę projektu i jego opis, nazwę pliku, dzisiejszą datę |
| `{{count IfcDoor}}` | liczbę drzwi |
| `{{sum IfcWall NetSideArea}}` | sumę z jednostką |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | arytmetykę (`+ - * /` i nawiasy) po wyrazach w nawiasach kwadratowych: `[sum …]`, `[count …]`, a wewnątrz pętli `[qty Width]`. `round n` ustawia liczbę miejsc po przecinku, `unit` dodaje jednostkę. Coś, czego nie da się odczytać, albo dzielenie przez zero drukuje `[?…]` i wyświetla ostrzeżenie |
| `{{qty IfcWall NetSideArea by Type}}` | tabelę: jeden wiersz na typ z jego liczbą i sumą oraz wiersz sumy |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabelę z jednym wierszem na element |
| `{{tag Finish}}` | w pętli wartość elementu; poza pętlą każdą użytą wartość (Oak, Paint) |
| `{{tags}}` | definicje etykiet jako tabelę |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekst raz dla każdego elementu; część po `{{else}}`, gdy elementów nie ma |
| `{{#group IfcWall by Type}} … {{/group}}` | tekst raz dla każdego typu, z `{{value}}`, `{{count}}`, `{{sum Length}}` i zwykłym `{{#each}}` w środku |

Wewnątrz `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (własna wartość elementu, z jednostką).

Klas może być kilka (`IfcDoor|IfcWindow`) albo wszystkie elementy (`*`). Zawęź każdą z nich przez `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testy to `=`, `!=`, `~` (zawiera), `>`, `<`, `>=`, `<=`, `has` i `hasnot`. Łącz kilka przez `and`. Wartość ze spacjami ujmij w „cudzysłów”. `sort Name` porządkuje pętlę.

## Zestawienia i specyfikacja w dokumencie

`{{schedule doors}}` drukuje zestawienie modelu jako tabelę w twoim układzie biurowym: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, albo nazwę układu zapisanego w Zestawieniach. `{{specification}}` drukuje specyfikację projektu. Szablony **Rysunkowe zestawienia robocze** i **Specyfikacja** z nich korzystają. W podglądzie kliknij wartość takiego zestawienia, aby zaznaczyć elementy, z których pochodzi. Zobacz [Układ, zapis i eksport zestawienia](topic:schedule-layouts) oraz [Napisz specyfikację z modelu](topic:specification).

## Dobrze wiedzieć

- Pole nazywa wbudowaną daną (Name, Type, Storey, Class, Material, Mark), etykietę (`tag:Fire rating` albo jej nazwę), właściwość (`Pset_WallCommon.FireRating`) albo samą nazwę właściwości (`NetSideArea`, `Width`). Gołe słowo odczytuje własny zestaw każdego elementu, najpierw zestawy ilości, więc `Width` na drzwiach to szerokość drzwi, a nie grubość ściany. W `where` gołe słowo odczytuje zestaw, który ma większość wybranych elementów.
- Ilości to to, co mówią zestawy ilości pliku (BimCraft zapisuje je dla tego, co rysuje). Jednostki pochodzą z ustawień jednostek pliku.
- Słowa pól (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) pozostają po angielsku we wszystkich językach. Przykładowe szablony są po angielsku.
- Tekst z modelu nigdy nie staje się formatowaniem: nazwa z `*` albo `|` drukuje się tak, jak jest.
- Szablon, który zmieniłeś, zachowaj przez {{ui:Zachowaj w tej przeglądarce}} (tylko ta przeglądarka go ma) albo przez {{ui:Pobierz szablon}}.
- Tekst PDF używa standardowych czcionek PDF: znak spoza tekstu zachodnioeuropejskiego drukuje się jako „?”, a wiersz stanu podaje, ile ich jest.
- Szablony branżowe są w Bibliotece (rodzaj: Szablon dokumentu). W Dokumentach z modelu wybierz {{ui:Z biblioteki…}}, wskaż jeden, a jego tekst i etykiety, które czyta, zostaną wczytane. Możesz go potem edytować. Opublikowanie własnego szablonu w Bibliotece to ten sam wysył co każdy inny element. Jeszcze nie zbudowano: obliczeń wykraczających poza liczby i sumy.
