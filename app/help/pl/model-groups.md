---
title: Grupy modelu
summary: Zgrupuj wybrane elementy w jedną nazwaną grupę, umieść grupę ponownie w innym miejscu i zmień jedną kopię, by zmienić wszystkie.
keywords: grupa, grupa modelu, grupowanie, rozgrupuj, instancja, kopiuj, powtórz, typowa jednostka, przęsło, mieszkanie, edytuj grupę, IfcGroup
from: 121c5027
---

## Co zrobisz

Zgrupujesz typowe przęsło, umieścisz je kilka razy i zmienisz wszystkie kopie, zmieniając jedną.

## Gdzie jest narzędzie

- Układy wstążkowe: {{ui:Architektura}} › **Model** › {{ui:Grupa modelu}}.
- Układ klasyczny: pasek Rysuj › menu {{ui:Pomieszczenia}} › Grupa modelu.

## Kroki

1. Narzędziem Zaznacz wskaż elementy: kliknij jeden, a pozostałe dodaj przez Ctrl+kliknięcie lub Shift+kliknięcie.
2. Wybierz {{ui:Grupa modelu}}. Elementy od razu stają się grupą. Wpisz {{ui:Nazwa grupy}} w wierszu, zanim ją utworzysz, by ją nazwać, albo wpisz nazwę później, by zmienić nazwę.
3. Naciśnij {{ui:Umieść kolejną}} i kliknij miejsce, w którym ma stanąć kopia: jej lewy dolny róg trafi w kliknięcie.
4. Zmień dowolną kopię: przesuń koniec ściany, zmień rozmiar drzwi, usuń słup. Każda inna kopia tej grupy zmieni się w tym samym kroku, a jedno cofnięcie cofnie wszystko.
5. Dopóki masz w ręku {{ui:Grupa modelu}}, kliknięcie elementu wskazuje całą jego grupę.

## Inne możliwości

- {{ui:Dodaj wskazane}}: dodaj więcej elementów do grupy, którą wskazałeś jako ostatnią.
- {{ui:Rozgrupuj}}: ta kopia staje się zwykłymi elementami. Pozostałe kopie nadal tworzą grupę.
- Przesuń całą kopię narzędziem {{ui:Przesuń}}: to ta sama grupa w nowym miejscu; pozostałe się nie ruszają.
- Usuń elementy kopii, a ta kopia zniknie.

## Co może być w grupie

Ściany z drzwiami i oknami, słupy oraz narysowane podłogi można umieszczać ponownie i utrzymywać jednakowe. Grupa może też zawierać inne elementy, ale wtedy nie można jej jeszcze umieścić ponownie; wiersz podaje powód.

Kopie są przesuwane, nie obracane ani odbijane lustrzanie.

## W IFC

Grupa to IfcGroup z IfcRelAssignsToGroup do swoich członków, które pozostają zwykłymi ścianami, słupami i podłogami. Każda kopia jednej grupy ma ten sam identyfikator definicji.

## Jeszcze nie zbudowano

- Obracanie lub odbijanie kopii.
- Schody, dachy, podłogi pomieszczeń i elementy biblioteki w grupie, która jest umieszczana ponownie.
- Profil ściany, nachylenie i otwory w ścianie nie są przenoszone do kopii.
- Grupy w grupach.

Zobacz także [Przesuń, wyrównaj i rozmieść](topic:move-align-distribute).
