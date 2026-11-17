---
title: Praca między dwoma programami BIM
summary: Przenieś model z jednego programu BIM do drugiego przez IFC, z BimCraft pośrodku; zachowaj jego GlobalId, zestawy właściwości i klasyfikacje, ustaw oba programy na te same właściwości i zobacz, co wróciło.
keywords: ifc, przejście w obie strony, interoperacyjność, globalid, guid, zestawy właściwości, psety, klasyfikacje, parametry współdzielone, mapowanie właściwości, tłumacz, bcf, koordynacja, wymiana
from: 9f224176
---

## Co zrobisz

Przeniesiesz model między dwoma programami BIM, na przykład z Revit do Archicad i z powrotem, przez IFC, z BimCraft pośrodku, aby go sprawdzić, uzupełnić i zgłosić, co przetrwało. Żaden własny format pliku żadnego z programów nie jest odczytywany: wszystko przechodzi jako IFC.

## Co zachowuje BimCraft

Gdy zmienisz model w BimCraft i klikniesz {{ui:Zapisz jako IFC}}, każdy wiersz pliku IFC, którego nie zmieniono, zostanie zapisany dokładnie tak, jak był. Zatem:

- **GlobalId** pozostają te same, a inny program może dopasować każdy element do tego, który wysłał.
- **Zestawy właściwości** i ich wartości zostają, poza wartościami, które zmieniono.
- **Klasyfikacje** pozostają przypisane do swoich elementów.

## Ustaw oba programy na te same właściwości

1. Otwórz model w BimCraft (oraz pakiet projektu, jeśli go masz: jego grupy właściwości zostaną dodane).
2. W lewym panelu otwórz {{ui:Między dwoma programami BIM}}.
3. Pod **Mapowanie właściwości** pobierz to, czego potrzebuje każdy program:
   - {{ui:Parametry współdzielone}}: plik parametrów współdzielonych. W Revit wczytaj go przez Zarządzaj › Parametry współdzielone i dodaj parametry do kategorii, które ich potrzebują.
   - {{ui:Zestawy właściwości eksportu IFC}}: plik zestawów właściwości zdefiniowanych przez użytkownika. W ustawieniach eksportu IFC Revit wybierz go w sekcji zestawów zdefiniowanych przez użytkownika, aby wyeksportowany IFC niósł ten sam zestaw i te same nazwy właściwości.
   - {{ui:Tabela mapowania (CSV)}}: każda właściwość z jej zestawem IFC i nazwą, typem oraz odpowiadającymi nazwami w każdym programie. Pliki mapowania Archicad nie są opublikowanym formatem, więc tłumacz IFC i menedżer właściwości trzeba skonfigurować w nim ręcznie, według tej tabeli.
   - {{ui:Plik mapowania}}: całe mapowanie jako jeden plik, do przechowywania razem z projektem.

Standardowe zestawy (Pset_ i Qto_) są pominięte w pliku parametrów współdzielonych: oba programy zapisują je z własnych danych.

## Wyślij model i przywróć go

1. Wyeksportuj IFC z pierwszego programu z zachowanymi GlobalId (Revit: włączona opcja "Store the IFC GUID in an element parameter after export").
2. Otwórz go w BimCraft, sprawdź ({{ui:Sprawdzanie modelu}}, {{ui:Sprawdzanie kolizji}}), dodaj problemy ({{ui:Problemy}}, BCF), w razie potrzeby zmień wartości i wybierz {{ui:Zapisz jako IFC}}.
3. Otwórz zapisany IFC w drugim programie, pracuj nad nim i wyeksportuj IFC stamtąd z zachowanymi GlobalId (tłumacz Archicad: "Global Unique Identifiers: Keep existing").
4. Wróć do BimCraft, otwórz model, który wyszedł, a potem dodaj ten, który wrócił ({{ui:Dodaj model}} w sekcji Modele).
5. W {{ui:Między dwoma programami BIM}} wybierz **Wysłany** i **Zwrócony**, po czym kliknij {{ui:Utwórz raport}}.

## Czytanie raportu

- **Elementy**: ile wróciło z tym samym GlobalId, ile brakuje i ile jest nowych. Elementy z nowym GlobalId pokazują się jako jeden brakujący i jeden nowy: drugi program nie zachował identyfikatora.
- **Zmieniona klasa IFC**: elementy, które wróciły jako inny rodzaj elementu.
- **Zachowane wartości właściwości**: udział wartości, które wróciły bez zmian. Lista poniżej pokazuje właściwości z największą liczbą zmienionych lub brakujących wartości.
- **Klasyfikacje**: zachowane, zmienione (ten sam system, inny kod) lub brakujące.

{{ui:Pobierz raport (CSV)}} podaje każdą właściwość wraz z jej liczbami. Aby zobaczyć, które elementy się przesunęły lub zmieniły kształt, użyj {{ui:Porównaj wersje}} na tych samych dwóch modelach.

:::note
BimCraft nie uruchamia żadnego z tych programów. To, które ustawienia przenoszą wartość, zależy od ustawień IFC każdego programu: raport pokazuje, co faktycznie wróciło, więc wypróbuj ustawienie, wyeksportuj ponownie i porównaj.
:::

## Problemy przechodzą jako BCF

Problemy zgłoszone w BimCraft eksportują się jako BCF ({{ui:Problemy}}), który oba programy mogą odczytać swoimi narzędziami BCF, więc pytanie o element dociera do osoby pracującej w drugim programie wraz ze swoim punktem widzenia.

Zob. też [Otwieranie pakietu projektu](topic:open-project-bundle), [Z pliku projektu do BimCraft przez IFC](topic:rvt-to-ifc) i [Porównywanie dwóch wersji modelu](topic:compare-versions).
