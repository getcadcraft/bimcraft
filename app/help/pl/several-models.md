---
title: Zobacz kilka modeli IFC razem
summary: Dodaj kolejne pliki IFC do sceny, np. architektury, konstrukcji i instalacji, zobacz je we wspólnych współrzędnych, przesuwaj i ukrywaj pojedyncze modele oraz wybierz, który edytujesz.
keywords: federacja, sfederowany model, kilka modeli, wiele plików, połącz, nakładka, koordynacja, branża, konstrukcja, instalacje, przesunięcie, przesuń model, aktywny model, dodaj model
from: df0efbbf
---

## Co zrobisz

Zobacz modele różnych branż w jednym miejscu: model architekta wraz z modelami konstrukcji i instalacji. Każdy pozostaje osobnym plikiem; BimCraft tylko pokazuje je razem.

## Kroki

1. Otwórz pierwszy model IFC jak zwykle.
2. W {{ui:Modele}} po lewej kliknij {{ui:Dodaj model…}} i wybierz jeden lub więcej plików IFC. Każdy pojawia się na liście i w widoku 3D.
3. Odznacz model, aby go ukryć; zaznacz, aby znów go pokazać.
4. Jeśli model trafia w złe miejsce (inny punkt pomiarowy), kliknij pod nim {{ui:Przesuń}}, wpisz, o ile przesunąć go wzdłuż X, Y i Z w metrach, i kliknij {{ui:Zastosuj}}.
5. Model oznaczony kropką jest edytowany. Aby edytować inny, kliknij jego kropkę.
6. Kliknij × obok modelu, aby usunąć go ze sceny.

## Otwórz modele zespołu

Gdy otwarty model jest plikiem w chmurze w projekcie zespołu, pod listą pojawia się {{ui:Otwórz modele zespołu}}. Otwiera on pozostałe modele IFC projektu obok tego, każdy przesunięty o przesunięcie ustawione w projekcie. Modele ukryte dla bieżącego użytkownika pozostają poza sceną i są liczone; model, który projekt obraca, zostaje otwarty bez obrotu i również jest liczony; pliki inne niż IFC (np. DWG) są pomijane i wymieniane w wierszu stanu. Model już otwarty nigdy nie zostaje otwarty ponownie. Przycisk jest ukryty dla pliku, który nie należy do projektu zespołu.

## Czego się spodziewać

- Każdy model we współrzędnych pierwszego modelu, tak jak umieszcza go jego plik. Modele wyeksportowane z tego samego projektu układają się bez przesuwania.
- Zaznaczenie elementu modelu, którego nie edytujesz, pokazuje jego właściwości tylko do odczytu, z {{ui:Edytuj ten model}} do przełączenia.
- {{ui:Drzewo modelu}}, {{ui:Kondygnacje}}, {{ui:Kolor}}, lista {{ui:Zmiany}}, umieszczanie elementów biblioteki i {{ui:Zapisz jako IFC}} działają na edytowanym modelu. Ukrywanie, izolowanie i przezroczystość oraz {{ui:Zaznacz wszystko}} działają we wszystkich modelach.
- {{ui:Zapisz jako IFC}} pobiera edytowany model, zawierający same zmiany.

## Częste błędy

- **Model jest daleko lub go nie widać.** Jego plik używa innych współrzędnych. Użyj {{ui:Dopasuj}}, aby go znaleźć, a potem {{ui:Przesuń}}, aby ustawić go na miejscu.
- **Usuń lub Kopiuj jest wyszarzone przy zaznaczonym elemencie.** Element należy do innego modelu: najpierw przełącz na ten model.
- **Otwarcie pliku przez Wybierz plik zastąpiło wszystko.** To tworzy nową scenę. Użyj {{ui:Dodaj model…}}, aby dodać pliki do tej, która jest otwarta.

## Dalej

- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
- [Kolorowanie elementów według właściwości](topic:color-by-property)
