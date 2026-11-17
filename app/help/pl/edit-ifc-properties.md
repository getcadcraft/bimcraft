---
title: Zmiana właściwości IFC i zapis zmienionej kopii
summary: Zmień nazwę elementu, jego znacznik, opis lub wartość właściwości, cofnij zmiany i pobierz nowy plik IFC, podczas gdy oryginał pozostaje bez zmian.
keywords: edycja, zmiana, właściwości, parametry, znacznik, nazwa, zmień nazwę, oznaczenie, zapisz jako, pobierz, cofnij, kopia, ifc, zapis
from: f8035d62
---

## Co zrobisz

Poprawisz dane w modelu IFC: zmienisz nazwę elementu, poprawisz jego znacznik, zmienisz wartość właściwości. Potem zapiszesz nowy plik IFC ze zmianami. Otwarty plik nigdy nie zostaje ruszony.

## Co możesz zmienić

| Pole | Edytowalne |
|---|---|
| Nazwa, Typ obiektu, Znacznik, Opis | Tak |
| Pojedyncze wartości właściwości (tekst, liczby, Tak/Nie) | Tak |
| Właściwości typu (zestawy oznaczone „(typ)”) | Tak, a zmiana dotyczy każdego elementu tego typu |
| Typ, GlobalId, Linia | Nie |
| Ilości (długości, pola, objętości, liczby) | Nie |
| Listy, wyliczenia i inne wartości wieloczęściowe | Nie |
| Geometria, położenie, dodawanie lub usuwanie elementów | Nie |

## Kroki

1. Otwórz model IFC i kliknij element, który chcesz zmienić.
2. W panelu {{ui:Właściwości}} kliknij wartość, którą chcesz zmienić. Zamieni się ona w pole tekstowe. Pusta wartość pokazuje się jako *pusta*.
3. Wpisz nową wartość.
4. Naciśnij {{key:Enter}} albo kliknij gdzie indziej, aby ją zachować. Naciśnij {{key:Esc}}, aby anulować.
5. Spójrz na wartość: jest teraz pogrubiona z niebieskim paskiem obok, który oznacza zmienioną wartość.
6. Spójrz na sekcję {{ui:Zmiany}} po lewej: zmiana jest wymieniona jako *element*: *pole*, stara wartość na nową wartość.
7. Powtórz dla innych wartości lub innych elementów.
8. Kliknij {{ui:Zapisz jako IFC}} (pokazuje, ile zmian czeka, na przykład „Zapisz jako IFC (3)”) albo naciśnij {{key:Mod+S}}.
9. Znajdź „*oryginalna nazwa* (edytowany).ifc” w folderze pobranych plików.

## Co powinno być widoczne

Pasek stanu mówi „Zapisano *nazwa* (edytowany).ifc ze zmianami: *n* (… bajtów). Twój oryginalny plik nie został zmieniony.” Lista {{ui:Zmiany}} się opróżnia, gotowa na następną rundę.

## Rodzaje wartości

- **Tekst**: wszystko, co wpiszesz, zostaje zachowane tak, jak jest. Wyczyszczenie Nazwy, Typu obiektu, Znacznika lub Opisu usuwa wartość.
- **Liczby**: wpisz zwykłą liczbę, na przykład `2.4` lub `1200`, w jednostkach własnych pliku. Bez symboli jednostek. Wszystko inne pokazuje „Wpisz liczbę.”.
- **Liczby całkowite** (liczby sztuk, całkowite): „Wpisz liczbę całkowitą.”, jeśli wpiszesz ułamek.
- **Tak/Nie**: wartość staje się menu z Tak i Nie.

Każda wartość zachowuje swój typ IFC, więc liczba pozostaje liczbą, a inne programy odczytują ją poprawnie.

## Cofanie

1. Kliknij {{ui:Cofnij}} w sekcji {{ui:Zmiany}} albo naciśnij {{key:Mod+Z}}, gdy nie wpisujesz w polu.
2. Powtórz, aby cofnąć więcej. Każde cofnięcie usuwa najnowszą zmianę.

Nie możesz cofnąć się za zapis: po zapisaniu lista zaczyna się od nowa. Zapisany plik zachowuje wszystko.

## Dlaczego zmiana dotyczy tylko jednego elementu

Eksportery oszczędzają miejsce, współdzieląc dane. Jeden zestaw właściwości może być wspólny dla dwudziestu drzwi, a jedna wartość („Odporność ogniowa: 60 min”) może być wymieniona w dziewięćdziesięciu zestawach. Gdyby BimCraft po prostu zmienił wspólną wartość, każdy element, który ją współdzieli, również by się zmienił.

Dlatego BimCraft kopiuje, zanim zapisze:

- Jeśli zestaw właściwości, który edytujesz, jest współdzielony z innymi elementami, twój element dostaje własną kopię zestawu i zmienia się tylko kopia.
- Jeśli wartość jest współdzielona z innymi zestawami, twój zestaw dostaje własną kopię wartości.

Sąsiedzi zachowują swoje stare dane. Nazywa się to *kopiowaniem przy zapisie* (copy-on-write). Dodaje to kilka małych wpisów do pliku, które każdy program IFC czyta normalnie.

**Właściwości typu są celowo wyjątkiem.** Zestaw oznaczony „(typ)” należy do typu elementu, a w IFC każdy element tego typu czyta go stamtąd. Zmiana go zmienia typ, więc każdy element tego typu pokazuje nową wartość. Lista {{ui:Zmiany}} oznacza takie edycje słowem „(typ)”. Zob. [Zmiana właściwości typu dla każdego elementu danego typu](topic:type-vs-instance).

## Ostrzeżenia przed utratą pracy

- Otwarcie innego pliku, gdy masz niezapisane zmiany, pyta: „Masz *n* niezapisanych zmian w *plik*. Odrzucić je?” Kliknij Anuluj, aby kontynuować pracę, a potem zapisz.
- Zamknięcie lub przeładowanie karty z niezapisanymi zmianami powoduje, że przeglądarka pyta, czy opuścić stronę.

## Typowe błędy

- **Wpisywanie jednostek.** `2400 mm` jest odrzucane. Wpisz `2400`.
- **Zmiana właściwości typu, gdy chodziło o jeden element.** Przed wpisaniem poszukaj uwagi „(typ)”. Jeśli chcesz, by jeden element się różnił, zmień właściwość egzemplarza albo jego Znacznik lub Nazwę.
- **Oczekiwanie, że zmieni się oryginalny plik.** Zapis zawsze pobiera nowy plik. Zastąp oryginał sam, jeśli tego chcesz, i zachowaj kopię.
- **Naciśnięcie {{key:Mod+S}} bez zmian.** BimCraft zapisuje tylko wtedy, gdy jest co zapisać; w przeciwnym razie może otworzyć się własne okno przeglądarki „Zapisz stronę”. Zamknij je.
- **Zapis dwa razy i oczekiwanie dwóch małych plików.** Każdy zapis zawiera wszystkie edycje od otwarcia modelu.
- **Oczekiwanie, że zmiany wrócą do pliku projektu.** BimCraft zapisuje tylko IFC. Wprowadź zmieniony IFC do swojego programu projektowego tak, jak importujesz dowolny IFC.
