---
title: Symbole, typy i zasoby, szablony projektów oraz Quick Kits
summary: Biblioteka ma trzy rodzaje elementów: Symbole, Typy i Zasoby. Dodaj Typ do projektu, zacznij od wspólnego szablonu projektu, dodaj Quick Kit i udostępniaj własne przez stronę wysyłania Biblioteki.
keywords: biblioteka, symbole, typy, zasoby, typ, typ ściany, typ podłogi, typ dachu, typ sufitu, szablon projektu, szablon, quick kit, zestaw, udostępnij, prześlij, wersja, dziennik zmian, LOD, klasyfikacja, licencja, uwagi z praktyki
from: e13b0e67
---

## Co zrobisz

Znajdź w Bibliotece to, czego potrzebujesz, według tego, czym jest. Dodaj Typ do projektu, który rysujesz, zacznij nowy projekt od szablonu, którym ktoś się podzielił, i udostępniaj własne szablony, typy i zestawy.

## Trzy rodzaje elementów biblioteki

- **Symbole** to konwencje rysunkowe: tylko 2D, rysowane w rozmiarze adnotacji, pogrupowane według branży.
- **Typy** określają, z czego składa się element: jego warstwy z rzeczywistą grubością, poziom szczegółowości (LOD) i kod klasyfikacji. Typ jest dodawany do projektu, nie jest rysowany.
- **Zasoby** to obiekty fizyczne, takie jak drzwi, okna, meble, armatura i wyposażenie, z widokiem z planu i bryłą 3D w rzeczywistym rozmiarze.

W karcie {{ui:Biblioteka}} wybierz {{ui:Biblioteka}} i użyj **Rodzaj elementu**, aby pokazać Wszystko, Symbole, Typy lub Zasoby.

## Dodaj Typ do projektu

1. Wybierz **Typy** w **Rodzaj elementu** i otwórz jeden z nich.
2. Sprawdź jego budowę, LOD i klasyfikację pod obrazem, a następnie wybierz {{ui:Dodaj do tego projektu}}.
3. Zostanie dodany jako typ ściany, podłogi, dachu lub sufitu, którym możesz rysować. Jeśli typ o tej nazwie już istnieje, nowy zostaje dodany jako kopia, a Twój pozostaje bez zmian. Jedno Cofnij go usuwa.

## Szablony projektów i Quick Kits

Wybierz {{ui:Zestawy}}, aby zobaczyć, czym podzielili się inni.

- **Szablon projektu** to plik IFC z poziomami, siatkami, typami i ustawieniami. {{ui:Zapisz w szablonach}} umieszcza go w **Nowy budynek** w sekcji **Zacznij od**.
- **Quick Kit** to lista elementów biblioteki. {{ui:Pokaż elementy zestawu}} wyświetla je jako karty, które możesz umieszczać.
- Każdy zestaw ma wersję i dziennik zmian, od najnowszej. Wersja zaczynająca się od 0 służy do dyskusji; 1.0.0 jest tylko dla tego, co właściciel linii przyjął.

## Udostępnij własne

- **Szablon projektu:** {{ui:Zapisz jako szablon}}, zaznacz {{ui:Utwórz też plik do udostępnienia w Bibliotece}}, dodaj, co zawiera, i wersję. Dostaniesz plik `.json`.
- **Quick Kit:** w {{ui:Zestawy}} wybierz {{ui:Utwórz Quick Kit z tego projektu}}. Zostanie utworzona lista elementów biblioteki używanych w projekcie.
- **Typ:** w {{ui:Pakiety typów}} zaznacz jeden typ i wybierz {{ui:Zapisz jako element biblioteki…}}.

Prześlij plik na stronie wysyłania Biblioteki. Przechodzi on tę samą weryfikację co każdy element, a licencję wybierasz tam: każdy element podaje swoją licencję. Od elementów wymaga się LOD, klasy IFC oraz kodu klasyfikacji (kodu, nie samej nazwy).

## Uwagi z praktyki

Na stronie każdego elementu biblioteki zalogowani członkowie mogą dodać uwagę: że element został użyty w prawdziwym projekcie, wypróbowany na projekcie próbnym lub że znaleziono problem. Określ w kilku słowach rodzaj projektu i pomiń nazwy klientów. Uwaga jest publiczna i nie jest recenzją: nie zmienia elementu.

## Warto wiedzieć

- Aplikacja niczego nie wysyła. Pliki powstają na Twoim komputerze, a wysyłasz je sam.
- Zestaw utworzony z szablonu zawiera tekst IFC dokładnie tak, jak został zapisany. Przed wysłaniem sprawdź, czy nie ma w nim niczego prywatnego.
- CadCraft pokazuje Symbole i Zasoby w karcie Biblioteka; Typy i szablony służą projektom BimCraft.
