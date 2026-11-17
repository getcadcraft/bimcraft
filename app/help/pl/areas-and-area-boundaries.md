---
title: Pola i granice pól
summary: Mierz powierzchnię brutto budynku lub powierzchnię najmu w granicach, które narysujesz albo wskażesz na ścianach, i wypisz pola w zestawieniu.
keywords: pole, pola, granica pola, schemat pól, powierzchnia brutto budynku, powierzchnia brutto kondygnacji, GFA, najem, plan pól, zestawienie pól, wskaż ściany, nie zamknięte, pomieszczenia
from: c79f96d2
---

## Co zrobisz

Narysuj granice schematu pól, umieść pola wewnątrz nich i odczytaj sumy.

## Gdzie są narzędzia

- Układy wstążki: {{ui:Architektura}} › **Pomieszczenia i pola** › {{ui:Pole}} i {{ui:Granica powierzchni}}.
- Układ klasyczny: pasek Rysuj › menu {{ui:Pomieszczenia}}.

## Kroki

1. Wybierz {{ui:Granica powierzchni}}. W wierszu wybierz {{ui:Schemat}}: Brutto budynku albo Najem. Każdy schemat ma własne granice.
2. Wybierz, jak utworzyć linie w {{ui:Utwórz przez}}:
   - **Rysuj**: klikaj punkt po punkcie.
   - **Wskaż ściany: oś środkowa**: kliknij ścianę, a jej oś środkowa stanie się granicą.
   - **Wskaż ściany: wskazana powierzchnia**: kliknij ścianę od strony, którą chcesz; ta powierzchnia stanie się granicą. Dla powierzchni brutto budynku kliknij zewnętrzną stronę ścian zewnętrznych.
3. Wybierz {{ui:Pole}}. Wybierz ten sam schemat, w razie potrzeby wpisz nazwę, numer lub typ i kliknij wewnątrz granic.
4. Pole jest mierzone od razu. Wskaż je, aby zmienić nazwę, numer lub typ we **Właściwościach**.

## Co za czym idzie

- Granica utworzona przez wskazanie ściany podąża za tą ścianą: przesuń ścianę, a pole zostanie ponownie zmierzone w tym samym kroku.
- Granica, którą narysowałeś, pozostaje tam, gdzie ją narysowałeś.
- Powierzchnie ścian stykających się w narożniku spotykają się tam również, więc cztery wskazane ściany zamykają pole bez szczelin.
- Granice pól są widoczne na rzucie, gdy trzymasz narzędzie pomieszczenia lub pola, więc przez resztę czasu nie zaśmiecają rzutu.

## Gdy granice się nie zamykają

Pole jest nadal umieszczone. Pokazuje **Nie zamknięte** i nic nie mierzy, dopóki granice się wokół niego nie zamkną. To tylko wskazówka: nic nie jest odrzucane.

## Zestawienie

Lewy panel › {{ui:Zestawienia}} › **Pola**: schemat, numer, nazwa, typ, poziom, pole i obwód, z sumą. Kliknięcie wiersza wskazuje pole. {{ui:Pobierz CSV}} daje tę samą tabelę.

## W IFC

Pole to IfcSpace bez bryły: PredefinedType GFA dla schematu brutto budynku, USERDEFINED z ObjectType Rentable dla najmu. Ma GrossFloorArea i GrossPerimeter, a nie ma pola netto, dzięki czemu nie zostanie pomylone z pomieszczeniem. Granica to IfcVirtualElement.

## Jeszcze nie zbudowano

- Własne schematy (tylko Brutto budynku i Najem).
- Kolorowe wypełnienia według typu pola.
- Reguły, które same umieszczają granicę, np. „do linii szkła”.

Zobacz także [Pomieszczenia i separatory pomieszczeń](topic:rooms-and-separators), [Znaczniki pomieszczeń i pól](topic:room-and-area-tags).
