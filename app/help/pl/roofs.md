---
title: Dachy: spadek dla każdej ściany, szczyty, pulpity i połacie dachowe
summary: Ustaw każdą ścianę pod dachem na skośną, szczytową lub brak, użyj gotowych ustawień: czterospadowego, szczytowego i pulpitowego, podnieś dach wysokością murłaty, dodaj deskę czołową i podsufitkę, a pojedyncze połacie rysuj tam, gdzie automatyczny dach nie pasuje.
keywords: zmień dach, edytuj dach, wybrany dach, właściwości dachu, cofnij dach, dach, spadek, dla każdej ściany, szczyt, ściana szczytowa, pulpit, dach przybudówki, narożnik, dolina, kalenica, wysokość murłaty, podniesienie, deska czołowa, podsufitka, okap, krawędź szczytowa, wysięg, połać dachowa, zadaszenie ganku, lukarna, lukarna szczytowa, lukarna pulpitowa
from: 096084a7
---

## Co zrobisz

Ukształtuj dach na podstawie ścian pod nim. Każda ściana ma własne ustawienie, więc jeden dach może mieć narożniki z przodu, szczyty na końcach i kończyć się płasko przy wyższej ścianie z tyłu. Na ganek lub dowolną płaszczyznę, której automatyczny dach nie wykona, narysuj połać dachową po jej narożnikach.

## Dodawanie dachu

1. Na poziomie, na którego ścianach stoi dach, kliknij {{ui:Dach}}.
2. Wpisz **Spadek** (`6/12` lub stopnie, np. `30`) oraz **Wysięg**.
3. Wybierz ustawienie gotowe: **Dach czterospadowy**, **Szczyty na krótszych bokach**, **Szczyty na dłuższych bokach** lub **Pulpit** (bok najbliższy wskaźnikowi jest niskim okapem; pozostałe boki są szczytami).
4. Zostaw zaznaczone **Deska czołowa i podsufitka** dla obudowanych okapów z deską czołową albo odznacz dla gołej krawędzi dachu.
5. Wskaż wnętrze budynku: okap, kalenica, narożniki i doliny pokażą się na planie. Kliknij.

Działa każdy zarys: kształty L, T, U i krzyżowe, skośne narożniki i wcięcia. Narożniki, kalenice i doliny wyznaczane są tam, gdzie spotykają się połacie dachowe.

## Jedna ściana naraz

Wybierz dach (na poziomie nad ścianami, kliknij wewnątrz jego obrysu) i zajrzyj pod **Każda ściana** we **Właściwościach**. Najechanie na wiersz zaznacza tę ścianę na planie.

- **Skośna**: nad ścianą jest pochyła połać dachowa. Wpisz obok jej własny spadek, np. `12/12` dla stromych końców na dachu `6/12`.
- **Ściana szczytowa**: dach kończy się pionowym szczytem nad tą ścianą, ściana jest wypełniona aż do dachu, a dach wychodzi poza nią o **Wysięg szczytu**.
- **Brak (równo z ścianą)**: dach kończy się przy tej ścianie bez wysięgu i bez ściany szczytowej, dla dachu przylegającego do wyższej ściany.

Lista **Końce** u góry ustawia wszystkie ściany naraz; **Ustaw dla każdej ściany** pokazuje się, gdy ściany nie pasują już do ustawienia gotowego.

## Zmiana istniejącego dachu

Wybierz dach, a **Właściwości** pokażą te same ustawienia co narzędzie Dach: **Spadek**, **Wysięg**, **Wysięg szczytu**, **Wysokość murłaty**, **Wysokość deski czołowej**, **Obudowane okapy** i **Grubość**. Każda zmiana od razu widoczna jest na planie i w 3D, z tymi samymi sprawdzeniami co narzędzie (spadek 80 stopni lub więcej jest odrzucany, tak samo ustawienie, którego nie da się zbudować dachem). Wpisz wartość i naciśnij {{key:Enter}} albo opuść pole.

Każda zmiana to jeden krok cofnięcia. Kilka zmian w tym samym polu, jedna po drugiej (wpisz `6/12`, potem `7/12`, potem `8/12`), łączy się w jeden krok, więc jedno {{key:Ctrl}}+{{key:Z}} przywraca to, co dach miał przed serią; zmiana innego pola zaczyna nowy krok.

## Wysokość murłaty, deska czołowa i podsufitka

- **Wysokość murłaty** to miejsce, w którym połacie dachowe stykają się z zewnętrzną stroną ścian, mierzone od podłogi poziomu. Pozostaw puste, aby dach stał na górze ścian; wpisz większą wartość dla podniesionego okapu.
- **Wysokość deski czołowej** to deska wzdłuż okapów i w górę krawędzi szczytowych. Wpisz `0`, aby jej nie mieć.
- **Obudowane okapy** kładzie poziomą podsufitkę pod każdym okapem, od ściany do tyłu deski czołowej.

Każda połać styka się ze ścianą na wysokości murłaty, więc ściany o różnych spadkach mają jedną linię murłaty, a ich okapy kończą się na różnych wysokościach, tak jak byłoby w konstrukcji.

## Rysowanie połaci dachowej

1. Na poziomie, na którego ścianach stoi połać, otwórz {{ui:Kompilacja}} i wybierz {{ui:Połać dachowa}}.
2. Wpisz **Spadek** i, jeśli nie jest to górna część ścian, **Wysokość okapu**.
3. Klikaj narożniki. Pierwszy narysowany bok jest okapem; połać wznosi się od niego ku reszcie kształtu.
4. Kliknij ponownie pierwszy narożnik, kliknij dwukrotnie albo naciśnij {{key:Enter}}, aby zakończyć. {{key:Esc}} porzuca narożniki.

Połać dachowa nie podąża za ścianami. Wybierz ją na poziomie wyżej (kliknij wewnątrz niej), aby zmienić jej spadek, wysokość okapu lub grubość, albo naciśnij {{key:Delete}}, aby ją usunąć.

## Dodawanie lukarny

1. Pokaż poziom, na którym jest dach.
2. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Lukarna}}.
3. W wierszu opcji wybierz **Rodzaj lukarny** (**Szczytowa** lub **Pulpitowa**) i ustaw **Szerokość**, **Ściana czołowa** (wysokość ściany czołowej od szczytu dachu do okapu lukarny), **Spadek** i **Wysięg**.
4. Kliknij na połać dachu, w miejscu, gdzie ma być środek czoła lukarny.

BimCraft buduje ścianę czołową, dwie ściany boczne i dach lukarny i prowadzi go wstecz, aż spotka dach. Lukarna szczytowa ma dwie połacie, które spotykają się w kalenicy. Lukarna pulpitowa ma jedną połać, która musi być mniej stroma niż dach. Dach pod lukarną jest wycinany. Lukarna podąża za dachem, gdy ściany się przesuną.

Wybierz ją, aby zmienić jej rodzaj, szerokość, ścianę czołową, spadek lub wysięg we **Właściwościach**. {{key:Delete}} usuwa ją i ponownie zamyka dach. Musi mieścić się na jednej połaci dachu, z dala od narożników, dolin i kalenicy; lukarny przyjmują tylko dachy wykonane narzędziem {{ui:Dach}}, a nie połacie rysowane ręcznie. Jeszcze nie zbudowano: okna w czole lukarny oraz lukarn na ręcznie rysowanych połaciach.

## Co jest zapisywane

Dachy są dachami IFC złożonymi z jednej płyty dachowej na połać, ścian szczytowych, jednego elementu deski czołowej i jednego pokrycia podsufitki. Dach zawiera długości swoich kalenic, narożników, dolin, okapów i krawędzi szczytowych oraz swoje powierzchnie, do przedmiarów. Połać dachowa to dach IFC z jedną płytą.

:::tip
Cofnij cofa każdą zmianę dachu jednym krokiem, także ustawienie gotowe, które zmienia każdą ścianę.
:::
