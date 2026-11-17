---
title: Sprawdzanie modelu pod kątem typowych problemów
summary: Znajdź elementy bez wymaganej właściwości, identyfikatory GlobalId użyte dwukrotnie, elementy bez kondygnacji oraz kopie ułożone jedna na drugiej.
keywords: sprawdź, sprawdzanie modelu, walidacja, kontrola, jakość, brakująca właściwość, wymagane, duplikat, globalid, guid, kondygnacja, ułożone, nakładanie
from: 4d835513
---

## Co zrobisz

Przejrzyj model, zanim go przekażesz dalej: problemy, które psują zestawienia, ilości i pracę innych programów.

## Kroki

1. Otwórz model IFC.
2. Otwórz {{ui:Sprawdzanie modelu}} w lewym panelu.
3. W sekcji {{ui:Wymagane właściwości}} reguła już jest (dowolna klasa, Name). Zmień jej klasę (lub {{ui:Dowolna klasa}}) i właściwość albo kliknij {{ui:Dodaj właściwość}}, aby dodać kolejną regułę; x usuwa jedną. Element nie spełnia reguły, gdy właściwość brakuje lub jest pusta. Reguły zostają w tej przeglądarce dla każdego modelu.
4. Kliknij {{ui:Uruchom sprawdzenie}}.
5. Kliknij wynik, aby wybrać te elementy i przybliżyć do nich widok.

## Co powinieneś zobaczyć

- **Brakująca wymagana właściwość**: każda reguła z elementami, które nie mają dla niej wartości.
- **GlobalId użyty dwukrotnie**: elementy współdzielące jeden GlobalId. Inne programy traktują je jako jeden element.
- **Bez kondygnacji**: elementy o kształcie, którego nie obejmuje żadna kondygnacja.
- **Kopie ułożone jedna na drugiej**: elementy tej samej klasy i typu o tym samym kształcie w tym samym miejscu, które w ilościach liczą się podwójnie.

Każda linia wyniku jest przyciskiem: kliknij ją, aby wybrać te elementy i przybliżyć do nich widok. Tylko pierwsze 50 grup każdego sprawdzenia jest wypisywanych. Te same ustalenia pojawiają się także w {{ui:Problemy}}.

## Dobrze wiedzieć

- Sprawdzenia dotyczą aktywnego modelu, gdy otwartych jest kilka. Zobacz [Jednoczesne oglądanie kilku modeli IFC](topic:several-models).
- Po edycji uruchom sprawdzenia ponownie.
- W panelu {{ui:Problemy}} długości, pola i objętości w opisach problemów są zgodne z jednostką wybraną na pasku narzędzi w {{ui:Jednostki}} (drzwi „800 mm” wyświetlają się jako 2'-7 1/2" w stopach i calach); zmień jednostkę, a panel przeformułuje te opisy.

## Dalej

- [Audyt modelu: pomieszczenia, znaczniki, LOD, kolizje i interfejsy](topic:audit-the-model)
- [Wyszukiwanie elementów według klasy, nazwy lub właściwości](topic:find)
- [Usuwanie, wycinanie, kopiowanie i wklejanie elementów](topic:copy-paste)
