---
title: Plan instalacji elektrycznej
summary: Umieszczaj gniazda, przełączniki, lampy, czujniki, puszki i rozdzielnice na planie, używając tych samych symboli co dodatek Elektryka w CadCraft, łącz przełączniki z lampami, które włączają, i zestawiaj urządzenia oraz obwody w zestawieniach.
keywords: elektryka, plan instalacji elektrycznej, gniazdo, gniazdo wtyczkowe, podwójne, przełącznik, schodowy, ściemniacz, lampa, lampa sufitowa, oprawa wpuszczana, downlight, czujnik ruchu, puszka rozgałęźna, rozdzielnica, tablica rozdzielcza, obwód, obciążenie, waty, ampery, przewód przełącznika, zestawienie urządzeń, zestawienie rozdzielnicy
from: f7de1947
---

## Co zrobisz

Narysujesz plan instalacji elektrycznej domu w modelu: gniazda, przełączniki i rozdzielnice na ścianach, lampy i czujniki na suficie. Każde urządzenie jest rzeczywistym elementem elektrycznym w pliku IFC, z oznaczeniem, obwodem i obciążeniem, a przełączniki pamiętają lampy, które włączają.

## Umieszczanie urządzeń

1. Na poziomie otwórz {{ui:Kompilacja}} i wybierz {{ui:Elektryka}}.
2. Wybierz urządzenie: gniazda (zasilające, transmisja danych, telefon, audio-wideo), przełączniki i czujniki (w tym termostat i wyłącznik czasowy), lampy, detektory i alarmy, puszkę rozgałęźną, rozdzielnicę lub podrozdzielnicę.
3. Wpisz **Obwód**, jeśli go znasz (dowolna nazwa, np. 1, 2, A-3). Pole **Wysokość montażu** pozostaw puste, aby użyć zwykłej wysokości dla tego urządzenia.
4. Kliknij na planie. Gniazda, przełączniki i rozdzielnice trafiają na lico najbliższej ściany, zwrócone do wnętrza pomieszczenia; lampy, czujniki i puszki rozgałęźne trafiają na sufit w miejscu kliknięcia.

Urządzenia są oznaczane już przy umieszczaniu: **R** dla gniazd, **S** dla przełączników, **L** dla lamp, **M** dla czujników ruchu, **J** dla puszek rozgałęźnych, **P** dla rozdzielnic. Urządzenia na ścianie przesuwają się razem z nią, gdy przesuniesz ścianę.

Wolisz wybierać z obrazków? Otwórz **Paletę symboli** z {{ui:Kompilacja}}, aby znaleźć urządzenie po nazwie, oznaczyć gwiazdką te, których używasz, i umieścić je jednym kliknięciem: zobacz [Paleta symboli](topic:symbol-palette).

## Łączenie przełączników z lampami

1. Wybierz przełącznik (lub czujnik ruchu) i kliknij **Połącz lampy** w oknie {{ui:Właściwości}}.
2. Kliknij każdą lampę, którą włącza. Ponowne kliknięcie połączonej lampy ją odłącza.
3. Naciśnij {{key:Enter}} lub kliknij **Gotowe**.

Plan rysuje przerywaną krzywą od przełącznika do każdej z jego lamp. W oknie **Właściwości** lampy widać, które przełączniki ją włączają.

## Pomieszczenie, w którym stoi urządzenie

Każde urządzenie zna pomieszczenie, w którym się znajduje. Urządzenie na ścianie należy do pomieszczenia, do którego jest zwrócone; urządzenie na suficie – do pomieszczenia, nad którym się znajduje. We **Właściwościach** widać **Pomieszczenie**, a zestawienie **Urządzenia elektryczne** ma kolumnę **Pomieszczenie** (numer i nazwa, np. 101 Kuchnia).

Jest ono aktualizowane: zmień nazwę lub numer pomieszczenia, przesuń urządzenie albo ścianę, a pomieszczenie zmieni się w tym samym kroku. Urządzenie na zewnętrznej stronie budynku lub w przestrzeni, która nie jest pomieszczeniem, zgłasza, że nie znajduje się w pomieszczeniu.

Pomieszczenie jest też zapisywane w pliku, w zestawie właściwości urządzenia `CadCraft_Location` (Room, RoomNumber, RoomName), dzięki czemu Znajdź, Kolorowanie wg właściwości i zestawienie oznaczeń mogą z niego korzystać, podobnie jak inne programy. Symbole na planie i elementy połączone z symbolem dostają ten sam zestaw; zobacz [Paleta symboli](topic:symbol-palette).

## Niech asystent je umieści

Gdy asystent jest podłączony (Ustawienia › Asystenci, z dozwoloną edycją), możesz zamawiać urządzenia słowami: "wstaw podwójne gniazdo co 2 m wzdłuż ścian salonu, 300 mm nad podłogą, na obwodzie 3" albo "dodaj lampę sufitową z przełącznikiem przy drzwiach". Asystent używa pięciu narzędzi: `devices_add`, `device_change`, `lights_set`, `devices_delete` i `devices_list`. Tworzą one te same urządzenia co narzędzie Elektryka, na tych samych ścianach i z tymi samymi oznaczeniami, obwodami, obciążeniami i wysokościami, a każde wywołanie to jeden krok cofnięcia.

Urządzenie nigdy nie dostaje rodzaju, którego nie ma narzędzie Elektryka: nieznany rodzaj zostaje odrzucony, a asystent dostaje listę. Gniazdo lub przełącznik musi stać w odległości do 600 mm od lica ściany, jak przy kliknięciu; w przeciwnym razie wywołanie zostaje odrzucone i nic nie jest umieszczane. Domyślne wysokości podano w milimetrach: 300 dla gniazd, 1100 dla przełączników; urządzenie sufitowe zwisa z sufitu.

## Zmiana i wypisywanie

Wybierz urządzenie, aby zmienić jego oznaczenie, obwód, obciążenie (waty) i wysokość montażu. Wybierz kilka, aby od razu przypisać je do jednego obwodu. Naciśnij {{key:Delete}}, aby usunąć jedno; usunięta lampa zostaje zdjęta ze swoich przełączników.

W {{ui:Zestawienia}} wybierz **Urządzenia elektryczne**, aby zobaczyć każde urządzenie z jego poziomem, obwodem, obciążeniem, wysokością i lampami, które włącza każdy przełącznik, albo **Obwody**, aby zobaczyć urządzenia każdego obwodu, łączne obciążenie i prąd. Oba są też na arkuszu zestawień zestawu rysunków: zobacz [Elewacje, przekroje i arkusze](topic:sheets).

:::note
Wysokości montażu i obciążenia to domyślne wartości planistyczne (gniazdo 16" wysoko i 200 W, przełącznik na 48", lampa sufitowa 60 W), a nie projekt: elektryk lub inżynier dobiera obwody i sprawdza zgodność z przepisami.
:::

:::tip
Symbole są tymi, które dodatek Elektryka w CadCraft rysuje na planach instalacji, więc plan z każdej z tych aplikacji czyta się tak samo.
:::
