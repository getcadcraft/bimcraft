---
title: Audytuj model: pomieszczenia, znaczniki, LOD, kolizje i interfejsy
summary: Uruchom gotowe sprawdzenia dla nienazwanych pomieszczeń, brakujących znaczników, elementów poniżej poziomu szczegółowości wymaganego przez etap projektu, kolizji między branżami i interfejsów LOD 350. Tylko zalecenia: nic nie jest blokowane.
keywords: audyt, sprawdzenie, nienazwane pomieszczenie, brakujący znacznik, oznaczenie, lod, poziom szczegółowości, kamień milowy, etap, kolizja, branża, koordynacja, interfejs, lod 350, otwór, nadproże, przejście instalacji, tuleja, rurociąg, problemy, raport z kontroli, doradczy
from: cc83a14d
---

## Co zrobisz

Przejrzyj cały model za jednym razem, zanim go wydasz. Audyt uruchamia gotowe zestawy reguł i wpisuje to, co znajdzie, na listę {{ui:Problemy}} jako zalecenia. Nic nie jest blokowane: poprawiasz uwagę albo akceptujesz ją z powodem, jak każdy inny problem.

## Kroki

1. Otwórz {{ui:Sprawdzanie modelu}} › {{ui:Audyt}} w lewym panelu albo {{ui:Narzędzia}} › {{ui:Audytuj model…}} (wpisane: `AUDIT`).
2. Wybierz {{ui:Etap projektu}}. To ten sam etap co w szczegółach rysunku.
3. Zaznacz zestawy reguł do uruchomienia.
4. Kliknij {{ui:Uruchom audyt}}.
5. Przeczytaj wiersz dla każdego zestawu reguł, a potem otwórz {{ui:Otwórz listę Problemów}}. Kliknięcie uwagi wskazuje jej element.
6. {{ui:Raport z kontroli}} pobiera raport: każdą uwagę, kto co zaakceptował i dlaczego, oraz zestawy reguł, które zostały uruchomione.

## Zestawy reguł

- **Nienazwane pomieszczenia**: pomieszczenie bez nazwy albo nadal nazwane tak, jak nazwał je program („Room 3”).
- **Brakujące znaczniki**: drzwi lub okno bez oznaczenia, pomieszczenie bez numeru, urządzenie elektryczne bez znacznika.
- **Elementy poniżej LOD etapu**: każda ściana, strop, sufit, dach, drzwi i okno, których LOD jest niższy niż wymagany na etapie. Element odczytuje znacznik LOD swojego typu; element zweryfikowany na budowie ma LOD 500. Elementy bez znacznika są policzone w jednej uwadze, bo nie można ich sprawdzić.
- **Kolizje między branżami**: elementy dwóch branż (architektura, konstrukcja, mechanika, instalacje sanitarne, elektryka, wg klasy IFC), które się przecinają. Dach opierający się na swoich ścianach nie jest liczony.
- **Interfejsy LOD 350**: każde drzwi i okno leży w otworze swojej ściany, otwór mieści się w ścianie, dwa otwory nie nachodzą na siebie, otwór szerszy niż limit ma nadproże (element nad nim albo uwagę na drzwiach lub oknie), a rurociąg, kanał lub korytko kablowe, które przecina ścianę lub strop, ma tam otwór. Uwagi są liczone dla każdej pary branż.
- **Rozpoznane elementy, których nikt nie sprawdził**: ściany, drzwi, okna i pomieszczenia odczytane z PDF-u, skanu lub rysunku, które są jeszcze niezweryfikowane. Zobacz [Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie](topic:verification).

## LOD wymagany na każdym etapie

Otwórz {{ui:LOD wymagany na każdym etapie}}, aby zobaczyć lub zmienić tabelę.

:::note
Tabela i szerokość nadproża to wartości startowe CadCraft. Nie pochodzą z normy: projekt ustala LOD dla każdego etapu w swoim planie realizacji BIM. Ustaw własne. Biuro może ustawić tabelę dla wszystkich w Ustawienia › Default Policies › {{ui:Audyt}}; zmiana w sekcji Audyt jest zachowywana na tym komputerze.
:::

## Warto wiedzieć

- Nadproże można zapisać jako uwagę zamiast modelować: wskaż drzwi lub okno i wypełnij {{ui:Uwaga o nadprożu lub belce}} w sekcji {{ui:Weryfikacja}} we Właściwościach.
- Rurociąg przechodzący przez rzeczywisty otwór nie przecina powierzchni i nie jest zgłaszany. Ten, który jest zamodelowany prosto przez ścianę, jest zgłaszany.
- Sprawdzenie kolizji zatrzymuje się po kilku sekundach przy bardzo dużym modelu i o tym informuje. Pełne sprawdzenie dwóch wybranych zestawów: [Znajdowanie kolizji między elementami](topic:clash-check).
- Uruchom audyt ponownie po zmianie modelu. Zaakceptowane uwagi pozostają zaakceptowane, dopóki ich numery się nie zmienią.
- Audyt czyta model. Nie zastępuje przeglądu koordynacyjnego wykonywanego przez odpowiedzialne osoby.

## Dalej

- [Sprawdzanie modelu pod kątem typowych problemów](topic:model-checks)
- [Znajdowanie kolizji między elementami](topic:clash-check)
- [Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie](topic:verification)
