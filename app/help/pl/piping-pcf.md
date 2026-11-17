---
title: Wysyłanie rurociągu do programu wytrzymałościowego lub izometrii i odczyt z powrotem (PCF)
summary: Zapisz trasy rurociągów modelu jako plik komponentów rurociągów PCF albo odczytaj plik PCF z programu do analizy naprężeń lub izometrii i narysuj jego rury jako trasy.
keywords: pcf, plik komponentów rurociągów, analiza naprężeń, izometria, izometrie, eksport, import, rurociągi, instalacja, rura stalowa, przeniesienie zlecenia, inne oprogramowanie
from: 24f91355
---

## Co zrobisz

PCF to zwykły plik tekstowy, który czytają i zapisują programy do analizy naprężeń rurociągów oraz izometrii. Wymienia komponenty każdej linii rurociągu wraz z ich punktami końcowymi i średnicami (bore).

## Eksport

1. Wybierz narzędzie Rura. Pasek opcji pokazuje **Eksportuj PCF**.
2. Kliknij go. Zapisana zostaje każda trasa rury w modelu: prosta rura, kolana (skręt o 90 stopni, w przeciwnym razie gięcie), trójniki z ich punktem odgałęzienia, redukcje i zawory.
3. Plik używa milimetrów. Średnice (bore) to średnice nominalne w milimetrach. Punkt środkowy kolana to jego narożnik, w którym spotykają się oba ramiona.

PCF jest zapisywany dla stalowych rur spawanych doczołowo. Trasa z innego materiału też jest zapisywana, z kluczami komponentów stalowych, i odnotowywana w panelu Problemy.

## Import

1. Wybierz narzędzie Rura i kliknij **Importuj PCF…**, potem wybierz plik.
2. Prosta rura aż po kolana, gięcia, zawory i kołnierze stają się jedną trasą na bieżącym poziomie. Zmiana rozmiaru zaczyna nową trasę. Odgałęzienie trójnika staje się własną trasą zaczynającą się w środku trójnika.
3. Model dobiera własne kształtki. Redukcje i trójniki nie są kopiowane: pojawiają się tam, gdzie spotykają się trasy o różnych rozmiarach lub odgałęzienie.

:::note
Wysokości w pliku są odczytywane jako wysokości nad bieżącym poziomem. Obciążenia, podparcia i sama analiza naprężeń nie są zawarte w pliku PCF i nie są przenoszone.
:::

## Sprawdź, co przyszło

- Całkowita długość rury na rurociąg powinna zgadzać się ze źródłem.
- Panel Problemy wypisuje po jednym wpisie dla każdego z: kolana, którego punkt środkowy nie jest w tej samej odległości od obu końców, rury bez długości oraz średnicy, która nie jest rozmiarem standardowym.

## Rurociągi już zapisane w pliku IFC

Gdy otwarty jest plik IFC, **Eksportuj PCF** zapisuje też jego własne segmenty rur, kształtki i zawory, obok tras, które narysowałeś. Segment dostaje końce ze swoich portów albo z końców swojej bryły. Kształtka bez portów jest pomijana, a panel Problemy o tym mówi. Możesz eksportować z samego IFC, gdy model nie ma narysowanych tras.

Przy imporcie podpory, olety (olets), kołnierze, uszczelki i zaślepki z pliku nie są rysowane. Panel Problemy podaje, ile każdego z nich pominięto, więc nic nie znika po cichu.
