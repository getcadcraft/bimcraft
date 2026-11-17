---
title: Styl pracy, zduplikowane widoki, pióra na wydruku, Raportuj jako i szablony
summary: Wybierz, jak BimCraft zachowuje się w Twoim sposobie pracy, zduplikuj dowolny widok jako własną kopię lub kopię powiązaną, zachowaj nadpisania piór w pliku i drukuj tak, jak widać, lub przez tabelę piór, zgłoś element jako inną klasę IFC i zaczynaj projekty od własnych szablonów.
keywords: styl pracy, duplikuj widok, duplikuj, kopiuj widok, widok zależny, widok powiązany, własna kopia, kopia widoku, nadpisania piór, pióra, grubości linii, drukuj tak jak widać, tabela piór, styl wydruku, ctb, monochromatyczny, skala szarości, raportuj jako, klasa ifc, przeklasyfikuj, typ predefiniowany, model ogólny, płyta jako droga, ściana jako panel, dach jako rampa, szablon projektu, szablon, nowy z szablonu, zapisz jako szablon, standard biura
from: 231d98b0
---

## Co zrobisz

Ustawisz BimCraft pod swój sposób pracy, zduplikujesz widoki, wydrukujesz je tak, jak oczekujesz, policzysz elementy jako to, czym naprawdę są, i zaczniesz każdy projekt od szablonu swojego biura.

## Wybierz styl pracy

1. Otwórz {{ui:Ustawienia}} i kartę {{ui:BimCraft}}. Znajdź {{ui:Styl pracy}}.
2. Wybierz jedną z opcji:
   - {{ui:Każdy widok osobno}} (pierwszy wybór): zduplikowany widok kopiuje swoje adnotacje i pozostają one jego własnymi; arkusze drukują się tak, jak pokazuje ekran.
   - {{ui:Wspólne adnotacje i tabele piór}}: zduplikowane widoki współdzielą adnotacje; drukowanie odbywa się przez tabelę piór.
3. Pod wyborem są cztery ustawienia, które styl określa. Zmień dowolne z nich osobno; styl wtedy pokazuje {{ui:Własny}}.

Styl pracy jest zapisywany w tej przeglądarce, podobnie jak układ obszaru roboczego. Szablon przenosi go do nowych modeli.

## Duplikuj widok

1. W {{ui:Przeglądarka projektu}} każdy rzut kondygnacji, rzut sufitu, wyniesienie, elewacja i przekrój ma przycisk {{ui:Duplikuj}} (dwa arkusze).
2. Nazwij kopię i wybierz sposób jej działania:
   - {{ui:Własna kopia}}: jej elementy rysunkowe, wymiary, kadrowanie, ukryte elementy i pióra są kopiowane i pozostają jej własnymi. Edycja któregokolwiek widoku nigdy nie zmienia drugiego, więc widok na wydanym arkuszu pozostaje taki, jak został wydany.
   - {{ui:Połączono}}: pokazuje ten sam widok z jednym zestawem adnotacji i ustawień.
3. Kopia jest wymieniona pod {{ui:Zduplikowane widoki}}. Kliknij ją, aby ją otworzyć; pasek nad rzutem informuje, że to kopia, i ma przycisk {{ui:W górę}} prowadzący z powrotem do jej widoku.
4. Przycisk z suwakiem otwiera jej ustawienia: nazwę, {{ui:Zasięg widoku}} (własna kopia ma własny), {{ui:Uczyń własną kopią}} dla kopii powiązanej oraz {{ui:Usuń}}.

Kopie elewacji i przekrojów trafiają na Twoje arkusze, tak jak widoki, z których pochodzą. Duplikowanie to jeden krok cofnięcia, a kopie są zapisywane w IFC obok wyniesień.

## Pióra zapisane z widokiem i drukowane tak, jak widać

1. Włącz {{ui:Rysuj}} i wybierz {{ui:Pióra}}.
2. {{ui:Dla}} wyświetla teraz każdą kategorię: ściany, drzwi i okna, płyty, dachy, słupy, schody, meble i resztę, a także elementy rysunkowe i wymiary.
3. {{ui:Zastosuj}} zachowuje pióro w IFC razem z pokazanym widokiem: rzutem, rzutem sufitu, wyniesieniem lub zduplikowanym widokiem. Pióra utworzone przed wersją 0.9 były zapisywane w przeglądarce; {{ui:Zachowaj je w pliku}} przenosi je do pliku.
4. Arkusze i PDF rysują każde pióro tak, jak pokazuje je ekran.

Aby zamiast tego drukować przez tabelę piór, ustaw {{ui:Drukuj}} w wierszu Pióra na {{ui:Przez tabelę piór}}, a następnie wybierz tabelę (kolorowa, monochromatyczna, w skali szarości) lub {{ui:Edytuj tabelę piór…}}: każdy kolor otrzymuje kolor, grubość i rastrowanie, z którymi jest drukowany. Tabela jest plikiem stylów wydruku CadCraft, więc {{ui:Importuj…}} przyjmuje tabelę wykonaną w aplikacji CadCraft, a {{ui:Eksportuj}} zwraca ją z powrotem. Model zachowuje swój wybór; gdy go nie ma, decyduje styl pracy.

## Zgłoś element jako inną klasę

Płyta narysowana jako droga, ściana użyta jako panel, dach ukształtowany jako rampa: zachowaj narzędzie, którym go narysowano, i zgłoś element jako to, czym jest.

1. Wybierz element i otwórz {{ui:Właściwości}}. Otwórz {{ui:Raportuj jako}}.
2. Wpisz w polu wyszukiwania, aby znaleźć klasę pasującą do kształtu, wybierz ją oraz jej typ predefiniowany. Dla własnego typu wybierz USERDEFINED i nadaj mu nazwę.
3. {{ui:Zastosuj}} (jeden krok cofnięcia). {{ui:Wyczyść}} zgłasza go ponownie tak, jak został narysowany.

Edytujesz go nadal narzędziem, którym go narysowano. Zapisany IFC zapisuje go jako zgłoszoną klasę, więc inne programy, przedmiar ({{ui:Ilości}}), Znajdź, Kolorowanie wg, sprawdzenia modelu i {{ui:Problemy}} liczą go jako tę klasę. Zestawienia pomijają ścianę zgłoszoną jako panel w zestawieniu ścian, a {{ui:Elementy według raportowanej klasy}} wymienia każdy taki element. Działa to w plikach IFC4 i IFC2X3; lista oferuje tylko klasy zgodne z wersją IFC pliku. Drzwi, okna, schody, pomieszczenia i poziomy zachowują swoją klasę.

## Zapisz projekt jako szablon i zacznij od niego

1. Z otwartym projektem kliknij {{ui:Zapisz jako szablon}} obok {{ui:Zapisz}}.
2. Nazwij go. Zaznacz {{ui:Pobierz też plik szablonu}}, aby udostępnić go jako plik IFC, oraz {{ui:Zaczynaj od niego nowe modele}}, aby ustawić go jako domyślny.
3. Szablon zachowuje poziomy, szablony widoków i ustawienia widoków, zduplikowane widoki i wyniesienia, elementy rysunkowe, pióra i tabelę piór, etykiety, rodziny i typy, arkusze, rozmiary arkuszy, tabliczki rysunkowe oraz styl pracy. Ściany, płyty, drzwi i wszystkie inne elementy modelu są pomijane.
4. Kliknij {{ui:Nowy budynek}} i wybierz go w sekcji {{ui:Zacznij od}}, albo wybierz {{ui:Plik szablonu…}} dla szablonu, który Ci przesłano. Nowy projekt otrzymuje własną nazwę i własną tożsamość projektu; wszystko inne jest takie, jak w szablonie.

:::note
Szablony są zapisywane w tej przeglądarce. Zespołowe szablony udostępniane przez CadCraft Studio nie są jeszcze zbudowane: wyślij zamiast tego plik szablonu.
:::
