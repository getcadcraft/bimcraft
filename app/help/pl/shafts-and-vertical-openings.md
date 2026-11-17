---
title: Szyby i otwory przez stropy
summary: Szyb to jeden kontur przecinający każdy strop, sufit i dach między dwoma poziomami. Otwór pionowy przecina jeden z nich. Otwór w ścianie przecina ścianę.
keywords: szyb, szyb windy, szyb dźwigu, otwór schodowy, podstopnica, otwór pionowy, otwór w stropie, otwór w suficie, otwór w dachu, otwór świetlika, dziura w stropie, otwór w ścianie, IfcOpeningElement, odliczenie, pole netto
from: 8e9e1641
---

## Co zrobisz

Wytnij szyb windy przez budynek jednym szkicem, wytnij otwór w jednym stropie i odczytaj, ile odjęto z powierzchni.

## Gdzie są narzędzia

- Układy wstążkowe: {{ui:Architektura}} › **Otwór** › {{ui:Szyb}}, {{ui:Otwór pionowy}} i {{ui:Otwór w ścianie}}.
- Układ klasyczny: pasek Rysuj › menu {{ui:Pomieszczenia}} (Szyb, Otwór pionowy) oraz › menu {{ui:Ściany}} (Otwór w ścianie).

## Szyb

1. Otwórz rzut poziomu, na którym zaczyna się szyb. Wybierz {{ui:Szyb}}.
2. W wierszu wybierz {{ui:Poziom dolny}} i {{ui:Poziom górny}} oraz przesunięcia, jeśli szyb zaczyna się lub kończy powyżej albo poniżej nich.
3. Kliknij narożniki konturu. Kliknij ponownie pierwszy narożnik, kliknij dwukrotnie lub naciśnij {{key:Enter}}, aby zakończyć.
4. Każdy strop, sufit i dach między dwiema wysokościami zostaje przecięty. Wiersz stanu podaje, ile ich jest.

Szyb to jeden obiekt. Zaznacz jego kontur na dowolnym poziomie, przez który przechodzi: Właściwości mają jego nazwę, poziomy i przesunięcia, to, co przecina, oraz odjętą powierzchnię. Zmień go, a każdy otwór pójdzie za nim. Usuń go, a każdy otwór zniknie. Każda z tych operacji to jeden krok cofnięcia.

Szyb nadal przecina: strop wykonany później między jego poziomami zostaje przecięty bez pytania, a strop usunięty z modelu nie jest już przecinany.

Strop, na którym stoi szyb, nie jest przecinany (jego górna powierzchnia to podstawa). Nadaj podstawie ujemne przesunięcie, aby ją też przeciąć. Nadaj górze dodatnie przesunięcie, aby przebić dach.

## Otwór pionowy

1. Wybierz {{ui:Otwór pionowy}}. W wierszu wybierz, co przeciąć: strop, sufit lub dach.
2. Kliknij narożniki konturu i zakończ jak wyżej.
3. Strop, sufit lub dach tego poziomu pod konturem zostaje przecięty. Należy on do tego jednego elementu: usuń strop, a otwór zniknie razem z nim.

## Otwór w ścianie

{{ui:Otwór w ścianie}} to narzędzie z [Kształtowanie ściany](topic:wall-shape): kliknij ścianę na rzucie albo dwa narożniki na jej licu w 3D.

## Ilości

Zgodnie z regułą pomiaru dla stropów pole netto elementu to jego pole brutto pomniejszone o to, co zostało z niego wycięte. Szyb lub otwór pionowy jest odliczeniem na każdym stropie i suficie, które przecina; zestawienia stropów i wykończeń oraz ilości IFC pokazują te same liczby. Na dachu odliczenie to pole powierzchni dachu: pole rzutu podzielone przez cosinus kąta nachylenia.

Kontur wystający poza krawędź odlicza tylko tę część, która leży na elemencie.

## Gdy nic nie zostaje przecięte

Szyb, na którego drodze nic nie stoi, i tak powstaje, i to sygnalizuje: przetnie to, co zostanie tam zbudowane później. Otwór pionowy potrzebuje czegoś pod sobą; gdy nic tam nie ma, wiersz stanu to mówi i nic nie powstaje.

## W IFC

Każde cięcie to IfcOpeningElement z IfcRelVoidsElement do przeciętego elementu, więc każdy program IFC pokazuje otwór. Dach jest cięty powierzchnia po powierzchni. Sam szyb to IfcGroup swoich otworów.

## Jeszcze nie zbudowano

- Krzywe kontury.
- Ściany szybu: narysuj je narzędziem Ściana.
- Edycja konturu przez przeciąganie narożników (zmień go we Właściwościach albo usuń i naszkicuj ponownie).
- Właściwości narysowanego stropu pokazują pole pomniejszone tylko o jego własne otwory; zestawienia i ilości IFC uwzględniają także szyb.

Zobacz także [Pomieszczenia i separatory pomieszczeń](topic:rooms-and-separators).
