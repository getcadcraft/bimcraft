---
title: Ślad węglowy wbudowany i koszty na harmonogramie
summary: Zsumuj ślad węglowy wbudowany modelu z otwartej, edytowalnej tabeli współczynników i rozłóż ceny na harmonogram 4D w postaci kosztu oraz krzywej przepływów pieniężnych. Oba działania zaczynają się od wartości, które wpiszesz lub zaimportujesz.
keywords: ślad węglowy wbudowany, węgiel, co2, kgco2e, emisje, tabela współczynników, epd, 5d, koszt, przepływ pieniężny, krzywa s, koszt harmonogramu, ceny, ceny z przedmiaru
from: 83e82840
---

## Ślad węglowy wbudowany

Otwórz panel **Ślad węglowy**. Ilość każdego elementu (objętość, pole lub długość) jest mnożona przez współczynnik z tabeli według modułu cyklu życia: etap produkcji jest wymagany, transport i odpady są opcjonalne. Sumy podawane są według materiału, klasy i kondygnacji oraz na metr kwadratowy powierzchni podłogi.

**Tabela współczynników jest twoja.** Wiersze dostarczane z BimCraft to ogólne wartości startowe o właściwym rzędzie wielkości. Nie pochodzą z bazy danych, są oznaczone jako niesprawdzone i trzeba je zastąpić źródłem, którego używasz (EPD, krajową bazą danych albo danymi twojej firmy). Edytuj wiersze w panelu albo importuj i eksportuj tabelę jako CSV lub JSON. Dodane wiersze zastępują wiersz startowy o tym samym identyfikatorze. Tabela jest zapisywana w modelu.

Elementy bez dopasowania lub bez ilości są wypisywane jako **Problemy**, a nie liczone jako zero.

## Koszty na harmonogramie 4D

Otwórz panel **Koszt** obok harmonogramu 4D. Podaj ceny (wpisz je, zaimportuj CSV lub JSON albo przenieś pozycje z TakeoffCraft), przypisz każdą cenę do materiałów modelu za pomocą słów kluczowych, a program wyceni elementy każdego zadania. Koszt zadania jest rozkładany na dni od początku do końca (równomiernie, z przodu lub z tyłu), a panel rysuje skumulowaną krzywą przepływów pieniężnych według dnia, tygodnia lub miesiąca, z kosztem według etapu i pakietu oraz tym, co zaplanowano, a co zbudowano w danym dniu. Wynik do CSV. Dopóki nie podasz cen, nic nie jest wyceniane: żadne ceny nie są dostarczane.

## Waluta

Tabela cen może podać, w jakiej walucie są jej ceny (trzy litery, np. USD lub EUR). Panel 5D ma do tego pole; jest ono zapisywane w pliku razem z cenami, a eksporty JSON je zawierają. Tabela utworzona wcześniej albo taka, w której pole zostało puste, nie ma waluty: jej koszty są pokazywane jako USD, domyślna waluta aplikacji, a panel i sumy bieżące to mówią. Żadne przeliczenia między walutami nie są wykonywane.
