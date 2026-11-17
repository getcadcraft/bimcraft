---
title: Kody klasyfikacji (Uniclass, OmniClass, UniFormat)
summary: Nadaj każdemu elementowi i typowi kod klasyfikacji, wybierz systemy używane w projekcie, przeszukuj tabele Uniclass dołączone do aplikacji, wczytuj własne licencjonowane tabele biura i pokazuj kody w zestawieniach. Kody są zapisywane w pliku IFC dla innego oprogramowania.
keywords: klasyfikacja, klasyfikować, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, kod elementu, kod typu, domyślny kod, IfcClassification, IfcClassificationReference, cobie, kolumna zestawienia, csv, licencja
from: 222b94cd
---

## Co zrobisz

Nadaj kod klasyfikacji ścianom, podłogom, dachom, drzwiom, oknom i wszystkiemu innemu w modelu, w do trzech systemów obok siebie: Uniclass, OmniClass i UniFormat. Inne branże i inne oprogramowanie polegają na kodzie, a nie na nazwie, więc kody są zapisywane w pliku IFC jako odniesienia do klasyfikacji, które odczyta każdy program BIM.

## Nadaj elementowi kod

1. Zaznacz element (lub kilka) i otwórz **Właściwości**. Otwórz sekcję {{ui:Classification}}.
2. Wpisz kod w polu jego systemu i naciśnij Enter. Gdy lista kodów jest wczytana, wpisz część kodu lub kilka słów („ściana osłonowa”) i wybierz z dopasowań: tytuł kodu uzupełni się sam.
3. {{ui:Applies to}} określa, dokąd idzie kod: **Ten element** albo **Jego typ (każdy element tego typu)**. Kod na typie ściany odczytuje każda ściana tego typu, także te, które narysujesz później.
4. {{ui:Clear}} usuwa kod.

Pod każdym kodem sekcja pokazuje, skąd pochodzi: ustawiony na tym elemencie, z jego typu albo domyślny kod projektu dla jego klasy. Własny kod elementu zawsze wygrywa z kodem typu, a kod typu z domyślnym. Gdy zaznaczonych jest kilka elementów, pole z napisem „varies” oznacza, że nie mają wspólnego kodu; wpisanie jednego nadaje go wszystkim. Każda zmiana to jeden krok cofnięcia.

Kod zawsze można wpisać, niezależnie od tego, czy lista jest wczytana. Jeśli nie wygląda jak kod tego systemu albo nie ma go na wczytanej liście, podpowiedź to mówi, a kod zostaje tak, jak go wpisałeś.

## Wybierz systemy projektu

Otwórz **Dane** na pasku modelu i wybierz {{ui:Classification}} (lub {{ui:Project classification…}} w sekcji Właściwości).

- Zaznacz systemy używane w tym projekcie. Właściwości pokazują wtedy tylko je.
- **Uniclass**: tabele Elementy / funkcje (EF), Systemy (Ss) i Produkty (Pr) są dołączone do aplikacji. Są © NBS, objęte licencją Creative Commons Uznanie autorstwa–Bez utworów zależnych 4.0, i przekazywane bez zmian. Okno pokazuje wydanie każdej tabeli i dzień, w którym została odczytana. Nie są to najnowsze tabele: wydawca co kwartał publikuje nowe na własnej stronie.
- **OmniClass** i **UniFormat**: żadna lista kodów nie jest dołączona, bo wydawca nie zezwala na przekazywanie tabel bez licencji. Wpisz dowolny kod albo wczytaj licencjonowaną tabelę swojego biura.
- {{ui:Load a table (CSV)…}} odczytuje tabelę biura z pliku CSV z kolumną kodu i kolumną tytułu (nagłówek o nazwie Code, Number lub Identifier oraz Title, Name lub Description jest rozpoznawany sam; bez niego używane są dwie pierwsze kolumny). Tabela zostaje w tej przeglądarce i nigdy nie trafia do pliku projektu. Do pliku zapisywane są tylko przypisane kody. Nowszą tabelę Uniclass możesz wczytać w ten sam sposób.
- {{ui:Give elements a default code by their class}} nadaje każdej ścianie, podłodze, dachowi, drzwiom, oknu, schodom, rampie, kolumnie, belce i meblu początkowy kod Uniclass z tabeli Elementy / funkcje, gdy sam nie ma kodu. Elementy narysowane później również go otrzymają.
- {{ui:Show the codes as columns in the schedules}} dodaje jedną kolumnę na system do zestawień Drzwi, Okna, Ściany wg typu i Pomieszczenia oraz do ich CSV. Wiersz z kilkoma elementami pokazuje „varies”, gdy ich kody się różnią.

## Warto wiedzieć

- Domyślne kody to własny wybór CadCraft, a nie wydawcy, i nie zostały sprawdzone przez praktyka. Sprawdź je według standardu swojego projektu.
- W pliku domyślny kod jest prawdziwą klasyfikacją, oznaczoną nazwą relacji „CadCraft default”, i znika, gdy element albo jego typ dostanie własny kod.
- Kody, które już zawiera zaimportowany plik, są odczytywane i pokazywane, bez względu na pisownię nazwy systemu użytą w innym programie. Kody innych systemów (własnych systemów biura) są wymienione i pozostawione bez zmian.
- Kody są odczytywane ponownie, gdy plik zostanie otwarty, tutaj lub w innym programie. Są też przenoszone do eksportu IFC5 alpha (IFCX), gdy ta opcja laboratoryjna jest włączona, z wyjątkiem kodu ustawionego na dachu.
- Jeszcze nie zbudowano: drzewa do przeglądania tabeli poziom po poziomie, kodów na poziomach i pomieszczeniach jako domyślnych kodów projektu oraz sprawdzania kodu względem wydania wskazanego w pliku.
