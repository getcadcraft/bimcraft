---
title: Znajdź elementy według klasy, nazwy lub właściwości
summary: Znajdź każdy element pasujący do jednej lub kilku reguł — jego klasy, nazwy, typu, kondygnacji, materiału lub wartości dowolnej właściwości — zaznacz je wszystkie i zachowaj reguły jako nazwany zestaw wyszukiwania.
keywords: znajdź, szukaj, filtruj, zapytanie, reguła, zestaw wyszukiwania, zestaw zaznaczenia, zapisane wyszukiwanie, właściwość, wartość, klasa, materiał, zaznacz wszystkie
from: 3d293bc2
---

## Co zrobisz

Zaznacz każdy element jednego rodzaju lub z jedną wartością w jednym kroku: każde drzwi, każdą ścianę na poziomie 2, każdy element, którego klasa ogniotrwałości to EI60, każdą ścianę droższą niż ustalona kwota.

## Kroki

1. Otwórz model IFC.
2. Otwórz {{ui:Znajdź}} w lewym panelu.
3. W pierwszej regule wybierz właściwość (najpierw własne właściwości elementu, takie jak {{ui:Klasa}} i {{ui:Kondygnacja}}, a potem zestawy właściwości modelu), sposób porównania i wartość. Pole wartości podpowiada wartości, jakie ma model.
4. Aby zawęzić wynik, kliknij {{ui:Dodaj regułę}}. Wybierz {{ui:Wszystkie reguły}}, aby wymagać wszystkich, lub {{ui:Dowolna reguła}}, aby wystarczyła jedna.
5. Kliknij {{ui:Znajdź}} albo naciśnij {{key:Enter}} w polu wartości. Pasujące elementy zostają zaznaczone.
6. Aby zachować reguły, kliknij {{ui:Zapisz jako zestaw}}, wpisz nazwę i kliknij ponownie. Później kliknij nazwę zestawu, aby wyszukać nim elementy.

## Co powinieneś zobaczyć

- Pasujące elementy zaznaczone w widoku 3D i w drzewie modelu oraz {{ui:Właściwości}} podające, ile jest dopasowań według klasy. Naciśnij {{key:I}}, aby pokazać tylko je, lub {{key:H}}, aby je ukryć.
- Wyrazy są dopasowywane bez względu na wielkość liter. Liczby są porównywane jako liczby: „jest większe niż 1000” oznacza wartość, a nie tekst.
- {{ui:ma wartość}} i {{ui:nie ma wartości}} nie wymagają wartości; znajdują to, co jest wypełnione, lub to, czego brakuje.
- Zapisane zestawy pozostają w tej przeglądarce dla każdego otwieranego modelu.

## Częste błędy

- **Nic nie zostało znalezione.** Reguła potrzebuje wartości, którą może dopasować: sprawdź podpowiedzi w polu wartości.
- **Właściwości brakuje na liście.** Żaden element z kształtem w tym modelu jej nie ma.

## Dalej

- [Koloruj elementy według właściwości](topic:color-by-property)
- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
