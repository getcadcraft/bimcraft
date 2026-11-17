---
title: Poruszanie się po drzewie modelu
summary: Przeglądaj model IFC według projektu, działki, budynku, kondygnacji i przestrzeni, z elementami pogrupowanymi według rodzaju; zaznaczaj pola, by pokazywać i ukrywać, kliknij wiersz, by wskazać, a dwukrotnie kliknij, by powiększyć.
keywords: drzewo modelu, drzewo, struktura, struktura przestrzenna, przeglądarka, zarys, nawigator, kondygnacja, poziom, podłoga, przestrzeń, pomieszczenie, grupa, klasa, ukryj, pokaż, wskaż, zaznacz, powiększ
from: 69de4ab7
---

## Co zrobisz

Zobaczysz, jak model jest zbudowany i dotrzesz do dowolnego elementu bez szukania go w 3D: budynek, jego kondygnacje, przestrzenie na każdej kondygnacji oraz elementy w nich, pogrupowane według rodzaju (ściany, drzwi, płyty stropowe…).

## Kroki

1. Otwórz model IFC. {{ui:Drzewo modelu}} po lewej rozwija się aż do kondygnacji.
2. Kliknij strzałkę obok wiersza, by go otworzyć lub zamknąć. Kondygnacja zawiera najpierw swoje przestrzenie, a potem elementy według rodzaju wraz z ich liczbą. Element złożony z części, na przykład schody, zawiera swoje części.
3. Odznacz pole wiersza, by ukryć wszystko, co w nim jest; zaznacz je, by pokazać ponownie. Pole z kreską oznacza, że pokazana jest tylko część tego, co zawiera.
4. Kliknij nazwę wiersza, by wskazać to, co reprezentuje: jeden element albo wszystkie elementy grupy, kondygnacji lub przestrzeni. {{key:Mod}}+kliknięcie dodaje je do wskazania albo je z niego usuwa.
5. Kliknij przycisk {{ui:i}} obok kondygnacji, przestrzeni lub budynku, by zobaczyć jego własne właściwości.
6. Kliknij dwukrotnie wiersz, by go powiększyć.

## Co powinieneś zobaczyć

- Gdy wskażesz element w widoku 3D, drzewo rozwija się aż do niego i go zaznacza.
- Ukryte elementy są przekreślone. Pola drzewa oraz {{ui:Pokaż}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) działają razem: zob. [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate).
- Elementy, których model nie umieszcza w żadnej kondygnacji, znajdują się na końcu w grupie **Poza strukturą przestrzenną**.
- Długa grupa pokazuje 200 wierszy naraz; kliknij **Pokaż więcej** pod nią, by zobaczyć resztę.

## Klawisze

Gdy nazwa wiersza ma fokus: {{key:Up}} i {{key:Down}} przesuwają, {{key:Right}} otwiera, {{key:Left}} zamyka lub przechodzi wyżej, {{key:Space}} zaznacza pole, {{key:Enter}} wskazuje.

## Częste błędy

- **Pole kondygnacji jest zaznaczone, a nic nie widać.** Lista {{ui:Kondygnacje}} pod drzewem sama wyłącza całe kondygnacje: zaznacz też tam.
- **Wiersz nic nie wskazuje.** Niektóre wiersze, na przykład pusta przestrzeń, nie mają elementów, które można narysować; wiersz stanu to mówi.

## Dalej

- [Usuwanie, wycinanie, kopiowanie i wklejanie elementów budynku](topic:edit-elements)
- [Pokazywanie i ukrywanie kondygnacji, przestrzeni i krawędzi](topic:storeys-and-spaces)
