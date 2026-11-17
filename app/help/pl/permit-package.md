---
title: Pakiet pozwolenia i dokumenty towarzyszące urzędu
summary: Zbierz sprawdzenie przepisów, prawdopodobne uwagi recenzentów, model i listę dokumentów towarzyszących urzędu w jeden plik zip, a każdy dokument jest powiązany z arkuszem lub zestawieniem, które go spełnia.
keywords: proces zatwierdzania, format złożenia, wymagane rysunki, rozmiar arkusza, format pliku, kopie, pakiet przepisów, pozwolenie, pakiet pozwolenia, złożenie wniosku budowlanego, zatwierdzenie planu, złożenie ustawowe, dokumenty towarzyszące, lista kontrolna, urząd, gmina, rada, wniosek planistyczny, uwagi recenzentów, krajowe przepisy budowlane, brakujące dokumenty
from: 47dd77ee
---

## Co zrobisz

Budujesz jeden plik zip do ustawowego złożenia (gdy lista urzędu pochodzi z pakietu przepisów, zawiera on także kroki zatwierdzania i format złożenia): okładkę, uwagi, jakie recenzent prawdopodobnie zgłosi (wynikające ze sprawdzeń, a nie zgadywane), raport przepisów, gdy dodatek Przepisy budowlane jest włączony, model oraz listę dokumentów towarzyszących, o które prosi twój urząd zatwierdzający.

To jest przewodnik zbudowany z modelu. Zarejestrowany projektant i urząd decydują, co jest wymagane i co jest akceptowane.

## Kroki

1. Z otwartym modelem otwórz {{ui:Pakiet pozwolenia}} w lewym panelu.
2. Wpisz nazwę projektu, adres i wnioskodawcę oraz wypisz swoje arkusze i formularze, po jednym w wierszu.
3. Pod {{ui:Dokumenty towarzyszące}} wybierz {{ui:Lista urzędu}}. Listy pochodzą z pakietów przepisów: dodaj dodatek Przepisy budowlane i zaznacz pakiet dla swojego miejsca w Ustawienia › Przepisy budowlane (pakiet może zawierać przepisy, proces zatwierdzania, format złożenia, konwencje rysunkowe i standardowe uwagi). Lista ogólna działa bez tego.
4. Przeczytaj listę. Każdy dokument jest {{ui:Połączono}} (z arkuszem i powodem), {{ui:Dostarczone przez osobę}}, {{ui:Nie dotyczy}} albo {{ui:Brakujące}}.
5. Dla dokumentu papierowego, które dostarczasz sam (formularz, akt własności, potwierdzenie opłaty), wybierz {{ui:Dostarczone przez osobę}}. Dla pozycji oznaczonej „jeśli dotyczy”, która nie dotyczy, wybierz {{ui:Nie dotyczy tutaj}}. Aby samodzielnie powiązać dokument z arkuszem, wybierz arkusz.
6. Otwórz {{ui:Proces zatwierdzania}} i {{ui:Format złożenia}} pod listą, aby przeczytać kroki i to, co należy złożyć (rozmiary arkuszy, formaty plików, kopie). Opłata lub termin pojawia się tylko wtedy, gdy źródło pakietu je podaje, wraz ze stroną i datą odczytu.
7. Kliknij {{ui:Zbuduj pakiet pozwolenia (zip)}}. Kroki i format są także na okładce.

## Jak dokument jest powiązany

Dokument jest powiązany z arkuszem zawierającym odpowiedni rodzaj widoku (rzut, elewacja, przekrój), z arkuszem zawierającym odpowiednie zestawienie (zestawienie drzwi, dla zestawienia drzwi), albo z arkuszem, którego tytuł to wskazuje (arkusz zatytułowany „Plan sytuacyjny”). Gdy model ma wiersze, ale żaden arkusz nie zawiera zestawienia, albo gdy teren jest narysowany, ale żaden arkusz nie nosi tytułu planu sytuacyjnego, pozycja pozostaje brakująca i mówi dlaczego.

## Warto wiedzieć

- **Żadna lista urzędu nie jest zweryfikowana przez lokalnego praktyka.** Każda została odczytana ze źródła, które podaje, w dniu, który pokazuje, i napisana naszymi słowami. Wymagania się zmieniają: sprawdź aktualną listę samego urzędu.
- To, czego zestaw nadal nie ma, albo arkusz, który nie ma rozmiaru, orientacji lub skali wymaganych przez pakiet, pokazuje się na liście Problemy jako uwaga. Uwagi są poradami: nigdy nie zatrzymują pakietu.
- Brakujące dokumenty nigdy nie zatrzymują pakietu. Są wymienione na okładce i w `04-supporting-documents.csv`.
- Listy są danymi, a nie kodem, w pakietach przepisów: Republika Południowej Afryki (krajowe przepisy budowlane, przepis A2), Kapsztad (z regionem Republika Południowej Afryki dodanym z Biblioteki), Anglia (krajowe wymagania informacyjne), Portland w Oregonie, pakiet szkoleniowy UDAWANY oraz ogólna lista, która nie należy do żadnego urzędu. Każdy może napisać pakiet dla swojego miejsca.
- Twoje wybory są zapisane w modelu, więc są tam, gdy go ponownie otworzysz, i każdy z nich to jeden krok, który można cofnąć.

Zobacz też [Arkusze](topic:sheets) oraz [Teren, budynek na nim i jego poziomy](topic:site-building-and-levels).
