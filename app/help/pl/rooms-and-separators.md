---
title: Pomieszczenia i separatory pomieszczeń
summary: Wybierz pomieszczenie, aby nadać mu nazwę i numer oraz odczytać jego powierzchnię, obwód i objętość. Narysuj separator pomieszczenia tam, gdzie dwa pomieszczenia stykają się bez ściany między nimi.
keywords: pomieszczenie, pomieszczenia, separator pomieszczenia, linia podziału, przestrzeń, IfcSpace, nazwa, numer, powierzchnia, obwód, objętość, otwarty plan, podział pomieszczenia, kuchnia z salonem, nieotoczone
from: d4c1d66b
---

## Co zrobisz

Nadaj nazwy pomieszczeniom, które tworzą ściany, i podziel otwarte pomieszczenie na dwa bez ściany.

## Gdzie są narzędzia

- Układy wstążki: {{ui:Architektura}} › **Pomieszczenie i powierzchnia** › {{ui:Pomieszczenie}} i {{ui:Separator pomieszczenia}}.
- Układ klasyczny: pasek Rysuj › menu {{ui:Pomieszczenia}}.
- Dowolny styl menu: polecenia nazywają się Pomieszczenie i Separator pomieszczenia; paleta poleceń je znajduje.

## Kroki

1. Narysuj ściany. Każdy zamknięty obrys ścian to już pomieszczenie: BimCraft tworzy je, numeruje i podaje jego powierzchnię podczas rysowania.
2. Wybierz {{ui:Pomieszczenie}}. Przesuń kursor po planie: pomieszczenie pod wskaźnikiem podświetla się wraz z powierzchnią, obwodem i objętością.
3. Aby szybko nadać nazwy pomieszczeniom, najpierw wpisz {{ui:Nazwa}} i {{ui:Numer}} w wierszu, a następnie kliknij w pomieszczeniu. Numer zwiększa się o jeden dla kolejnego pomieszczenia (101, 102; A-09, A-10).
4. Możesz też po prostu kliknąć pomieszczenie: zostanie zaznaczone, a Właściwości pokażą jego nazwę, numer, powierzchnię, obwód, objętość i etykietę.
5. Aby podzielić otwarte pomieszczenie, wybierz {{ui:Separator pomieszczenia}} i kliknij dwa punkty: od ściany do ściany albo od ściany do innego separatora. Kontynuuj klikanie, aby utworzyć łańcuch; Enter, Esc lub podwójne kliknięcie go kończy.

## Co robi separator

- Ogranicza pomieszczenia jak ściana bez grubości. Powierzchnie obu pomieszczeń sumują się dokładnie do pierwotnego pomieszczenia.
- Pomieszczenie, w którym znajduje się środek dawnego pomieszczenia, zachowuje nazwę i numer. Drugie jest nowe.
- Separator, który kończy się w otwartej przestrzeni i przy jednym końcu nie styka się z niczym, niczego nie dzieli. Wydłuż go, a podział powstanie.
- Część separatora leżąca wewnątrz ściany jest ignorowana, więc możesz przyciągać do osi ścian.
- Zaznacz separator i naciśnij Delete, aby go usunąć: oba pomieszczenia znów staną się jednym. Cofnięcie go przywraca.

## Gdy w miejscu kliknięcia nie ma pomieszczenia

Wiersz stanu to podaje: ściany tam się nie zamykają. Zamknij lukę albo narysuj separator przez nią. Nic nie jest odrzucane; po prostu nie ma jeszcze zamkniętego pomieszczenia.

## W IFC

Pomieszczenie to IfcSpace z numerem (Name), nazwą (LongName) i Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Objętość to powierzchnia razy wysokość do poziomu powyżej.

Separator pomieszczenia to IfcVirtualElement, czyli encja IFC dla granicy, która nie jest zbudowana. Ma linię i brak bryły, więc inny program nie odczyta ściany i nie policzy dla niego niczego.

## Jeszcze nie zbudowano

- Zakrzywione separatory.
- Pomieszczenie dopasowujące się do skośnego sufitu: objętość to zawsze powierzchnia razy wysokość poziomu.
- Relacje granic przestrzeni (IfcRelSpaceBoundary) nie są zapisywane ani dla ścian, ani dla separatorów.

Zobacz też [Etykiety pomieszczeń i powierzchni](topic:room-and-area-tags), [Powierzchnie i granice powierzchni](topic:areas-and-area-boundaries).
