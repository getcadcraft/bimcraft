---
title: Sprawdź model względem IDS klienta
summary: Wczytaj otrzymany plik .ids i zobacz w Problemach każdy element, który go nie spełnia, zanim dostarczysz plik IFC.
keywords: ids, specyfikacja dostarczania informacji, buildingsmart, wymagania, dostarczanie, sprawdzanie, walidacja, qa, eir, bep, właściwość, klasyfikacja, materiał, zamówienia publiczne
from: 7b960222
---

## Co zrobisz

IDS (Information Delivery Specification, standard buildingSMART) to lista tego, co musi zawierać plik IFC: jakie klasy, jakie właściwości z jakimi wartościami, klasyfikacje, materiały i gdzie co ma się znajdować. Klienci i zamówienia publiczne wysyłają go razem ze zleceniem. BimCraft sprawdza otwarty model IFC względem niego i wypisuje każdy element, który nie spełnia wymagań.

## Kroki

1. Otwórz model IFC.
2. Otwórz {{ui:Check against an IDS}} w lewym panelu, pod {{ui:Model checks}}, albo wybierz {{ui:Check against IDS…}} z menu zgodnie z wybranym stylem menu.
3. Wybierz {{ui:Load an .ids file…}} i wskaż plik. Nic nie jest wysyłane.
4. Przeczytaj wynik: każdą specyfikację z oznaczeniem {{ui:Pass}} lub {{ui:Fail}} i liczbą elementów, których dotyczy.
5. Otwórz Problemy ({{key:Ctrl+Shift+M}}) i wybierz błąd, aby zaznaczyć element i przybliżyć do niego widok.

## Czego się spodziewać

- Jedno ostrzeżenie na każdy element i każde wymaganie, którego nie spełnia, z nazwą specyfikacji, tym, czego żąda IDS, i tym, co ma element.
- Wymagana specyfikacja, do której nic w modelu nie pasuje, to osobne ostrzeżenie.
- Raport sprawdzenia (w Problemach) zaczyna się od IDS: jego tytuł, wersja, autor oraz dla każdej specyfikacji liczba dotyczących, spełnionych i niespełnionych elementów.

## Warto wiedzieć

- IFC zachowuje tylko odniesienie do IDS (jego nazwę, tytuł, wersję i skrót), a nie sam IDS: IDS klienta może być poufny, a plik IFC trafia do innych osób. IDS pozostaje w tej przeglądarce obok modelu, więc po ponownym otwarciu zapisanego IFC tutaj sprawdzenie wykonuje się od nowa. Wczytanie lub usunięcie IDS to jeden krok, który można cofnąć.
- Po otwarciu na innym komputerze lub w innej przeglądarce Problemy pokazują uwagę, że IDS nie został znaleziony: wczytaj go ponownie, aby sprawdzić.
- Aby wysłać IDS razem z IFC, włącz {{ui:Keep the IDS inside the IFC}} w Ustawieniach, na karcie BimCraft, zanim go wczytasz.
- Każda edycja, cofnięcie i ponowienie są sprawdzane ponownie chwilę później.
- Wartości porównywane są w sposób IDS: tekst dokładnie (wielkość liter ma znaczenie), liczby w jednostkach SI z niewielką tolerancją (długości w metrach, więc model w milimetrach jest najpierw przeliczany).
- Specyfikacja napisana dla innej wersji IFC (np. IFC2X3, gdy model to IFC4) jest nadal sprawdzana, a wynik to mówi.
- Jeśli plik IDS ma błędy, które wykryłby audyt IDS, okno dialogowe je wymienia; specyfikacje, w których się znajdują, nie są spełnione.
- Niespełnienie możesz zaakceptować z podaniem powodu, jak każdy problem. Akceptacja pozostaje, dopóki wartości elementu się nie zmieniają.

- Wzorce w IDS są odczytywane jako cała wartość. `^` na początku i `$` na końcu również są traktowane jako „cała wartość”, tak jak zwykle oznaczają je pliki IDS.

## Dalej

- [Sprawdź model pod kątem typowych problemów](topic:model-checks)
- [Zmień ścianę lub drzwi](topic:change-a-wall-or-door)
