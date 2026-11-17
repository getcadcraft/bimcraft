---
title: Specyfikacje rur, zawory, przepustnice i rodziny producentów
summary: Ustaw własne specyfikacje rur (tabele rozmiarów z materiałem, połączeniem i chropowatością), zapisywane w pliku modelu; umieść na trasach zawory, filtr (strainer) i przepustnice; wczytaj model zaworu lub urządzenia producenta jako rodzinę z portami przyłączeniowymi.
keywords: specyfikacja rury, specyfikacje rur, specyfikacja rurociągu, klasa rurociągu, rura niestandardowa, tabela rozmiarów, rura, rura higieniczna, stal nierdzewna, zestawienie, średnica zewnętrzna, grubość ścianki, średnica wewnętrzna, chropowatość, klasa ciśnieniowa, csv, json, import, eksport, arkusz kalkulacyjny, norma, bpe, din, en 10357, en 10255, zawór, zawory, zawór motylkowy, zawór równoważący, zawór regulacyjny, filtr, przepustnica, przepustnica objętościowa, przepustnica przeciwpożarowa, producent, rodzina, rodziny, porty, przyłącze, step, obj, gltf, ifc, grzejnik, konwektor, grzejnik płytowy, centrala wentylacyjna, anemostat, kratka
from: bc2f7c4e
---

## Co zrobisz

Rysuj rury według własnej specyfikacji zamiast wbudowanych tabel stali, miedzi i tworzyw sztucznych, umieszczaj zawory i przepustnice na trasach oraz wstawiaj model producenta z portami, do których podłączają się rury.

:::note
Pomoc w kreśleniu i koordynacji. Specyfikacja rury zawiera liczby, które wpisujesz lub importujesz: sprawdź każdą tabelę według standardu projektu. Wbudowane zawory, filtry i przepustnice to schematyczne kształty dobierane na podstawie trasy, a nie długość z katalogu producenta ani z normy zaworów.
:::

## Ustaw specyfikację rury

1. Włącz {{ui:Rysuj}}, otwórz {{ui:Kompilacja}} i wybierz {{ui:Specyfikacje rur}}. Ten sam przycisk znajduje się na pasku narzędzia {{ui:Rura}}.
2. Wybierz {{ui:Nowe}} albo zacznij od pliku, wklejenia lub szablonu startowego (poniżej).
3. Wpisz jej nazwę, normę lub odniesienie, którego używa, materiał oraz typ końca lub złącza.
4. Wpisz jeden wiersz na rozmiar: nazwę rozmiaru, średnicę zewnętrzną i grubość ścianki w milimetrach. Jeśli masz średnicę wewnętrzną zamiast grubości ścianki, wpisz ją: drugą wartość uzupełnimy. DN, klasa ciśnieniowa i masa są opcjonalne.
5. Opcjonalnie: chropowatość w milimetrach (używa jej obliczenie spadku ciśnienia), grubość izolacji, z jaką zaczynają się nowe trasy, promień kolana jako współczynnik średnicy zewnętrznej, czy specyfikacja ma trójniki i redukcje, oraz własny kolor w 3D.
6. Zaznacz usługi, których nowe trasy mają zaczynać się w tej specyfikacji, na przykład woda lodowa.
7. Wybierz {{ui:Zapisz w modelu}}.

Specyfikacje są zapisane w pliku modelu. Każdy, kto otworzy plik, ma je do dyspozycji, a {{ui:Cofnij}} cofa zmianę.

Specyfikacji ani jej rozmiaru nie można usunąć, dopóki na trasie w niej narysowanej. Zmiana wartości rozmiaru przerysowuje trasy w tym rozmiarze.

## Ponowne użycie specyfikacji w innym modelu

- {{ui:Eksportuj .json}} zapisuje wybraną specyfikację jako mały plik; {{ui:Eksportuj wszystkie}} zapisuje wszystkie specyfikacje modelu. {{ui:Importuj plik}} wczytuje je z powrotem.
- {{ui:Eksportuj .csv}} zapisuje tabelę rozmiarów do arkusza kalkulacyjnego. {{ui:Importuj plik}} odczytuje też plik `.csv`.
- {{ui:Wklej wiersze}} przyjmuje tabelę skopiowaną z arkusza kalkulacyjnego. Pierwszy wiersz nazywa kolumny: `Size`, `OD` i `Wall` (lub `ID`), opcjonalnie `DN`, `Pressure`, `Weight`. Jeden wiersz na rozmiar. Liczby są w milimetrach, chyba że wybierzesz cale albo komórka zapisuje swoją jednostkę (`0.065 in`).

## Szablony startowe

{{ui:Dodaj specyfikację startową}} dodaje do modelu jedną z tych specyfikacji jako kopię, którą możesz edytować:

| Szablon | Rozmiary |
|---|---|
| Rura ASME BPE | 1/4" do 6" |
| EN 10357 seria A, rura (DIN 11850 rząd 2) | DN10 do DN200 |
| EN 10255 rura stalowa, seria średnia | DN15 do DN150 |
| EN 10255 rura stalowa, seria ciężka | DN15 do DN125 |

Te tablice to średnice zewnętrzne i grubości ścianek, które dwie lub więcej opublikowanych stron dostawców podaje dla danej normy i które się zgadzają. Nie pochodzą bezpośrednio z norm. Rozmiary podane tylko na jednej stronie zostały pominięte. Każdy szablon pokazuje swoje strony źródłowe i jest oznaczony „sprawdź według standardu projektu”. Nie podano chropowatości, klasy ciśnieniowej ani masy.

## Narysuj trasę w specyfikacji

1. Wybierz {{ui:Rura}}. Usługa, którą zaznaczyłeś w specyfikacji, zaczyna w niej. Dla każdej innej trasy wybierz specyfikację na liście materiałów: specyfikacje są wymienione za wbudowanymi materiałami jako „Specyfikacja: nazwa”.
2. Lista rozmiarów zawiera teraz tylko rozmiary tej specyfikacji. Wybierz jeden i narysuj trasę.

Aby później przenieść trasę do specyfikacji, zaznacz ją i zmień **Materiał** we {{ui:Właściwości}}. Jej rozmiar stanie się najbliższym rozmiarem specyfikacji według średnicy zewnętrznej.

W pliku IFC rura ma nazwę specyfikacji, normę, materiał, połączenie i wymiary (`CadCraft_PipeSpec` i `Pset_PipeSegmentTypeCommon`, na rurze i na jej typie).

Obliczenia doboru i spadku ciśnienia czytają średnicę wewnętrzną specyfikacji. Gdy specyfikacja ma chropowatość, tarcie trasy liczy się z nią (Darcy-Weisbach); bez niej używana jest zwykła wartość domyślna obliczenia.

## Zawory, filtr i przepustnice

1. Wybierz {{ui:Zawór}} i rodzaj na pasku: zasuwowy, kulowy, motylkowy, grzybkowy, zwrotny, równoważący lub regulacyjny albo filtr (strainer) dla rur; przepustnicę objętościową albo przeciwpożarową dla kanałów.
2. Kliknij na trasie, w miejscu, gdzie ma być element. Trasa zostaje przecięta wokół niego, a obie strony pozostają połączone. Element przyjmuje rozmiar trasy i przesuwa się razem z nią.

Właściwości trasy wymieniają każdy z nich z przyciskiem {{ui:Usuń}}; trasa się ponownie domyka.

Obliczenie spadku ciśnienia uwzględnia stratę na kształtce tylko dla zaworów zasuwowych, kulowych, grzybkowych i zwrotnych. Pozostałe rodzaje, przepustnice i rodziny producentów nie dodają tu straty: uwzględnij je we własnym sprawdzeniu. Są liczone w zestawieniu **Kształtki i zawory** oraz w przedmiarze i zapisywane do IFC jako zawory, filtr (strainer) i przepustnice z dwoma połączonymi portami.

## Model producenta jako rodzina

1. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Rodziny}}, a potem {{ui:Importuj model}}. Odczytywane są pliki IFC, STEP, OBJ, STL, glTF oraz pliki elementów biblioteki. Dla OBJ i STL najpierw ustaw jednostki pliku i oś pionową.
2. W oknie portów wpisz nazwę, producenta i numer modelu.
3. Wybierz, czy ma być **Na trasie** (zawór, filtr lub przepustnica), czy **Wyposażenie**, oraz jak ma być zapisany.
4. Nadaj mu porty. Każdy ma nazwę, rurę lub kanał, usługę, rozmiar w milimetrach (średnica zewnętrzna rury), rozmiar nominalny zgodny z Twoją specyfikacją, typ końca, położenie i kierunek, w którym jest zwrócony. {{ui:Na ścianie}} umieszcza port w środku ściany pudełka modelu. Mały widok z góry pokazuje porty.
5. Wybierz {{ui:Zapisz rodzinę w modelu}}.

Rodzina montowana na trasie wymaga dokładnie dwóch portów skierowanych od siebie, leżących na jednej linii. Wybierz ją na liście narzędzia {{ui:Zawór}} i kliknij na trasie: zostanie umieszczona we własnej długości, a rury połączą się z jej portami.

Rodzina nigdy nie jest rozciągana. Jeśli jej porty nie mają rozmiaru trasy, zostaniesz o tym poinformowany przy umieszczaniu, a {{ui:Sprawdź połączenia}} ją wymieni.

Rodzinę wyposażenia umieszcza się przez {{ui:Wyposażenie}}, rodzaj **Rodzina producenta**. Rury i kanały przyciągają się do jej portów.

{{ui:Pobierz jako element biblioteki}} zapisuje rodzinę z jej portami jako plik, który możesz przesłać do Biblioteki.

## Grzejniki i konwektory

{{ui:Wyposażenie}} ma też **Grzejnik** oraz **Konwektor / grzejnik płytowy**: ogólne bryły z przyłączem zasilania i powrotu dla wody grzewczej. Zobacz [Wyposażenie MEP z portami](topic:mep-equipment).
