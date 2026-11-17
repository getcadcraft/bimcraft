---
title: Wybierz element i odczytaj jego właściwości
summary: Kliknij dowolny element w modelu 3D, aby go podświetlić i odczytać jego nazwę, typ, znacznik, GlobalId, zestawy właściwości i ilości.
keywords: właściwości, wybór, zaznaczanie, kliknięcie, element, parametry, zestawy właściwości, pset, ilości, globalid, guid, typ, sprawdzanie
from: 43b80aa8
---

## Co zrobisz

Wybierz elementy w modelu IFC i odczytaj wszystko, co plik o nich mówi: atrybuty, zestawy właściwości, właściwości typu i ilości.

## Kroki

1. Otwórz model IFC.
2. Kliknij element, na przykład drzwi. Klikaj bez przeciągania: przeciągnięcie o więcej niż kilka pikseli obraca widok zamiast wybierać.
3. Spójrz na element: jest podświetlony na niebiesko.
4. Spójrz na panel {{ui:Właściwości}} po prawej stronie. Na górze jest rodzaj elementu (na przykład „Door” lub „WallStandardCase”) i jego nazwa.
5. Przeczytaj pierwszy blok: **Nazwa**, **Typ**, **Typ obiektu**, **Znacznik**, **Opis**, **GlobalId** i **Linia**.
6. Przewiń w dół do zestawów właściwości. Pierwsze trzy są otwarte; kliknij nazwę dowolnego innego zestawu, aby go otworzyć.
7. Kliknij inny element, aby przełączyć się na niego.
8. Naciśnij {{key:Esc}} albo kliknij puste tło, aby wyczyścić zaznaczenie.

## Czego powinieneś się spodziewać

- Podświetlony element i jego dane po prawej stronie.
- Zestawy właściwości w porządku alfabetycznym. Zestawy pochodzące z **typu** elementu mają po nazwie dopisek „ (type)” oraz uwagę „Właściwość typu: zmiana tutaj dotyczy każdego elementu tego typu.”
- Zestawy ilości (takie jak długości, pola i objętości) wypisane wraz z innymi zestawami. Ilości są tylko do odczytu.
- Wartości, które można zmienić, wyglądają jak przyciski. [Zmiana właściwości IFC i zapis edytowanej kopii](topic:edit-ifc-properties) pokazuje, jak.

[Pola panelu właściwości](topic:properties-panel) opisuje każde pole.

## Dostęp do ukrytych elementów

1. Aby dotrzeć do czegoś wewnątrz budynku, odznacz kondygnacje powyżej niego na liście {{ui:Kondygnacje}}.
2. Aby dotrzeć do ściany za bryłą pomieszczenia, wyłącz {{ui:Przestrzenie}}.
3. Kliknij element.

## Typowe błędy

- **Lekkie przeciąganie podczas klikania.** BimCraft traktuje to jako obrót i nie wybiera. Trzymaj mysz nieruchomo.
- **Oczekiwanie jednostek obok liczb.** Wartości są pokazywane tak, jak zapisano je w pliku, zaokrąglone do czterech miejsc po przecinku, bez symbolu jednostki. Długości w eksporcie metrycznym są zwykle w milimetrach lub metrach; sprawdź ustawienia eksportera.
- **Szukanie parametru po znajomej nazwie.** Eksportery zmieniają nazwy parametrów i grupują je w zestawy właściwości IFC, takie jak `Pset_WallCommon`. Przejrzyj każdy zestaw; parametry niestandardowe często znajdują się w zestawie nazwanym od programu eksportującego lub od Twojej firmy.
- **Oczekiwanie pola wyszukiwania.** Kliknij, aby wybrać element; {{key:Mod}}+klik lub {{key:Shift}}+klik wybiera więcej, a {{key:Mod+A}} wybiera każdy wyświetlany element. Lista {{ui:Elementy}} po lewej stronie tylko zlicza elementy według rodzaju; nie jest klikalna.
- **Wybieranie na karcie pliku projektu.** Karta pliku nie ma elementów do wybrania: „Właściwości elementów wymagają modelu 3D. Otwórz eksport IFC tego pliku, aby je zobaczyć.”
