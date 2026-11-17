---
title: Dobierz rozmiary rur i przewodów, sprawdź wypełnienie kabli i oświetlenie
summary: Sprawdź rozmiary rur zasilających i przewodów wraz ze spadkiem ciśnienia, prowadź kable przez korytka kablowe i peszle oraz zobacz ich wypełnienie, a także oblicz natężenie oświetlenia w pomieszczeniach na podstawie plików IES lub EULUMDAT. Wartości domyślne są oznaczone; wpisz wartości obowiązującego przepisu.
keywords: dobór rozmiarów, dobór rur, dobór przewodów, spadek ciśnienia, jednostki przyborów, zapotrzebowanie, hunter, hazen-williams, prędkość, tarcie, równe tarcie, ciśnienie wentylatora, przepustnica, ścieżka krytyczna, korytko kablowe, peszel, wypełnienie, zestawienie kabli, ies, ldt, eulumdat, fotometria, natężenie oświetlenia, lux, równomierność, obliczenia oświetlenia, gęstość mocy, mep, obliczenia, problemy
from: 9cb90815
---

## Co zrobisz

Narysuj rury, przewody, korytka kablowe i peszle jak zwykle, a następnie otwórz panel **Obliczenia**. Każda karta odczytuje model, pokazuje tabelę i wypisuje, co jest źle, jako problemy w panelu ⚠. Gdy rozmiar usunąłby problem, **Zastosuj rozmiary** zmienia przebiegi jednym krokiem {{ui:Cofnij}}.

To są pomoce projektowe. Każda wartość domyślna jest oznaczona na ekranie, a żadna z nich nie jest tabelą przepisów: wpisz liczby z normy, do której projektujesz, i zleć sprawdzenie wyniku inżynierowi, który za niego odpowiada.

## Rury

1. Wybierz klucz **system** (zimna woda to `cw`, ciepła woda to `hw`).
2. Ustaw największą prędkość oraz, jeśli chcesz sprawdzić ciśnienie, ciśnienie u źródła i najniższe ciśnienie wymagane przez przybór.
3. Kliknij {{ui:Sprawdź}}.

Każda rura przenosi zapotrzebowanie przyborów położonych poniżej niej. Zapotrzebowanie pochodzi z krzywej jednostek przyborów względem przepływu, zgodnie z opisem Huntera. **Wbudowana krzywa jest przykładem, a nie tabelą przepisów**; problemy o tym mówią, dopóki nie wpiszesz własnej. Tarcie liczone jest wg Hazen–Williamsa, kształtki mają współczynniki strat, a wzniesienie kosztuje 9,8 kPa na metr. Jednostki przyboru pochodzą z jego rodzaju albo z liczby ustawionej narzędziem asystenta `loads_set`.

## Kanały

Ustaw system, stopę tarcia (równe tarcie) lub prędkość oraz ewentualną stratę na nagrzewnicy, filtrze lub tłumiku. Wyloty pobierają przepływ powietrza z `loads_set` na dyfuzorze. Tabela pokazuje prędkość i tarcie dla każdego elementu, **ciśnienie wentylatora** na ścieżce krytycznej oraz ciśnienie, jakie musi pokonać przepustnica każdego innego wylotu. Straty kształtek używają zaokrąglonych współczynników domyślnych, a nie bazy kształtek.

## Korytka kablowe i peszle

Rysuj je narzędziem Kanał: systemy **Korytko kablowe** i **Peszel** są zapisywane jako nośniki kabli, więc inne programy odczytują je jako korytka i peszle. W karcie Kable wklej listę kabli (oznaczenie, średnica zewnętrzna w mm, liczba, od, do). `from` i `to` to oznaczenie elementu wyposażenia albo punkt `x,y,z` w milimetrach. Kable idą najkrótszą ciągłą trasą przez korytka i peszle; każdy przebieg pokazuje swoje wypełnienie względem limitów, które wpiszesz, a zestawienie zapisuje się jako CSV z długością uwzględniającą procentowy zapas i końcówki.

## Oświetlenie

Przypisz każdej oprawie plik IES (LM-63) lub EULUMDAT narzędziem asystenta `photometry_set`. Wpisz wartości docelowe, rozstaw siatki i wysokość płaszczyzny roboczej. Wynik to wyłącznie natężenie **bezpośrednie**: bez wielokrotnych odbić i bez cieni, więc w pomieszczeniu jest to dolne oszacowanie.

## Tryski przeciwpożarowe

Dodatek **Tryski przeciwpożarowe** ma własną kartę; zobacz jego pomoc.
