---
title: Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie
summary: Element odczytany z PDF-a lub skanu jest niezweryfikowany, dopóki go nie sprawdzisz. Oznacz elementy jako sprawdzone albo jako zweryfikowane na budowie (LOD 500) z podaniem, kto je zmierzył, kiedy i jak, i przekaż model powykonawczy, który mówi, które jest które.
keywords: niezweryfikowany, zweryfikowany, sprawdzony, zweryfikowany na budowie, powykonawczy, as-built, lod 500, zamknięcie, przekazanie, zmierzony na budowie, taśma, laser, skan, pomiar, istniejący budynek, przebudowa, oznacz jako sprawdzone, weryfikacja, etap 7
from: df35d908
---

## Co zrobisz

Śledzisz, co w modelu ktoś faktycznie sprawdził. Element ma jedno z trzech oznaczeń albo żadnego:

- **Niezweryfikowany**: program rozpoznał go z PDF-a, skanowanego rysunku, obrysowanego rysunku lub skanu chmury punktów. Nikt jeszcze go nie sprawdził.
- **Sprawdzony**: osoba porównała go z rysunkiem, z którego pochodzi.
- **Zweryfikowany na budowie (LOD 500)**: osoba zmierzyła go na budowie. Kto, kiedy i jak - jest zapisywane razem z nim.
- **Brak oznaczenia**: narysowany przez człowieka. Model nie twierdzi nic na jego temat.

## Kroki

1. Wybierz jeden element albo wiele (ściany, drzwi, okna, pomieszczenia, dowolne elementy).
2. W {{ui:Właściwości}} otwórz {{ui:Weryfikacja}}.
3. Wpisz, kto sprawdził lub zmierzył element. Data to dzisiejsza, chyba że ją zmienisz.
4. Kliknij {{ui:Oznacz jako sprawdzone}}. Dla pomiaru na budowie wybierz, jak go zmierzono (taśma, dalmierz laserowy, skan, geodezja), i kliknij {{ui:Oznacz jako zweryfikowane na budowie (LOD 500)}}.
5. {{ui:Oznacz jako niezweryfikowane}} i {{ui:Usuń znak}} cofają zmianę. Każde kliknięcie to jeden krok, który można cofnąć, dla całego zaznaczenia.

Aby szybko oznaczyć zaznaczenie: {{ui:Narzędzia}} › {{ui:Oznacz jako sprawdzone}} (wpisane: `MARKCHECKED`) oznacza je jako sprawdzone przez Ciebie, dzisiaj.

## Co powinieneś zobaczyć

- W rzucie element niezweryfikowany ma przerywaną ramkę i znak "?"; zweryfikowany na budowie ma znacznik ptaszka. Odznacz {{ui:Pokaż znaki weryfikacji w rzucie}} w sekcji {{ui:Audyt}}, aby je ukryć.
- {{ui:Zestawienia}} › {{ui:Weryfikacja}} wypisuje każdy oznaczony element z jego poziomem, stanem, osobą, datą, sposobem i miejscem pochodzenia.
- Audyt wypisuje elementy niezweryfikowane i liczy element zweryfikowany na budowie jako LOD 500. Zobacz [Audyt modelu](topic:audit-the-model).

## Ze skanu

Gdy porównujesz skan z modelem, {{ui:Oznacz pasujące elementy jako zweryfikowane na budowie}} oznacza każdy element, który skan zobaczył jako wykonany w tolerancji, z metodą "skan" i tolerancją w notatce. Zobacz [Porównanie skanu z modelem](topic:compare-scan-with-model).

:::warning
To porównanie dopasowuje obrys każdego elementu do punktów skanu. Nie jest to geodezyjny pomiar. Używaj go dla elementów, które również sam oglądałeś.
:::

## Model powykonawczy i pakiet przekazania

{{ui:Zbuduj pakiet dokumentacji odbiorowej}} na karcie {{ui:Zasoby}} umieszcza model powykonawczy w archiwum zip, razem z:

- zestawieniem w projekcie, ile elementów jest zweryfikowanych na budowie, sprawdzonych, niezweryfikowanych i nieoznaczonych;
- `as-built/verified-elements.csv`: każdy element i pomieszczenie z jego stanem, osobą, datą i sposobem;
- `as-built/as-built-drawings.pdf`: zestaw rysunków taki, jaki jest teraz;
- dziennikiem zmian rysunków, gdy model ma wydane zestawy.

Zobacz [Zasoby i konserwacja](topic:assets-and-maintenance).

## Jak to jest zapisane w IFC

Każdy oznaczony element ma zestaw właściwości `CadCraft_Verification`: State, By, On, Method, Source, Note i LevelOfDevelopment (`LOD 500` dla zweryfikowanego na budowie). Są to zwykłe właściwości tekstowe, więc inne programy je wyświetlają, a Znajdź, Kolor wg właściwości i zestawienia znaczników mogą ich używać. Zestaw właściwości powykonawczych to `CadCraft_AsBuilt` w projekcie. Element bez tego zestawu nie został zmierzony na budowie.

## Dalej

- [Ściany z zestawu rzutów](topic:walls-from-plans)
- [Audyt modelu](topic:audit-the-model)
