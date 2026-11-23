---
title: Wnieś własne obiekty i pliki rodzin do biblioteki
summary: Odczytuj pliki rodzin (.rfa) oraz pliki IFC, DWG, DXF, glTF lub OBJ na karcie Biblioteka, umieszczaj je jak każdy element biblioteki i zachowuj na liście Moje obiekty, prywatnej liście widocznej tylko dla ciebie.
keywords: rfa, rodzina, rodziny, biblioteka rodzin, własne obiekty, moje obiekty, prywatne obiekty, prywatna biblioteka, importuj obiekty, treści producenta, obiekty bim, obiekt ifc, gltf, obj, blok dwg, zachowaj, przełącz, migracja
from: 886261f8
---

## Co zrobisz

Wnieś do BimCraft obiekty, które już masz: bibliotekę rodzin z Revita, plik IFC lub DWG pobrany od producenta, siatkę z innego programu do modelowania. Plik odczytujesz na karcie {{ui:Biblioteka}}, umieszczasz obiekt w modelu jako pełnoprawny element IFC, a jeśli chcesz go mieć później, zachowujesz go w {{ui:Moje obiekty}}.

## Kroki

1. Otwórz model IFC albo rozpocznij nowy budynek.
2. Kliknij kartę {{ui:Biblioteka}} obok {{ui:Właściwości}}.
3. Kliknij {{ui:Pliki…}}, a następnie {{ui:Wybierz plik…}}. Wybierz jeden plik lub kilka naraz: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` lub `.csv`. Albo kliknij {{ui:Wybierz folder…}}, aby odczytać cały folder i foldery w nim (do 200 plików za jednym razem).
4. Kliknij kartę, aby zobaczyć, co zostało odczytane: podgląd planu, nazwę, producenta i model, wymiary oraz uwagi.
5. Kliknij {{ui:Umieść w planie}} lub {{ui:Umieść w modelu}}, aby go umieścić.
6. Aby użyć go ponownie w innych projektach, kliknij {{ui:Zachowaj w moich obiektach}}. Gdy odczytano kilka plików, {{ui:Zachowaj wszystkie w moich obiektach}} zapisuje je naraz.
7. Później kliknij {{ui:Moje obiekty}} na karcie Biblioteka, aby je znaleźć. Są umieszczane, wymieniane i aktualizowane jak każdy element biblioteki.

Pliki są odczytywane na tej karcie. Nic nie jest wysyłane, dopóki nie wybierzesz {{ui:Zachowaj w moich obiektach}}.

## Co odczytuje się z każdego rodzaju pliku

| Plik | Co otrzymujesz |
|---|---|
| IFC | Każdy typ elementu jako obiekt z rzeczywistym kształtem 3D, klasą IFC i zestawami właściwości |
| glTF, GLB, OBJ | Jeden obiekt z rzeczywistym kształtem 3D jako siatka. Najpierw ustaw jednostki i kierunek „w górę”. |
| DWG, DXF | Każdy blok jako obiekt z rysunkiem planu i atrybutami |
| Plik rodziny (`.rfa`) | Nazwa rodziny, kategoria, producent, model, parametry i jej typy. **Nie jej kształt 3D:** zastępuje go pudełko o wymiarach szerokości, głębokości i wysokości rodziny. |
| CSV | Jeden obiekt na wiersz: nazwa, wymiary i dane, narysowane jako pudełko |

## Pliki rodzin a ich kształt 3D

Kształt 3D w pliku `.rfa` jest zapisany w nieudokumentowanym formacie, więc BimCraft odczytuje dane rodziny i nie zgaduje jej geometrii. Karta to mówi: „Geometria nie została odczytana z tej rodziny; zastępuje ją pudełko.”

Aby wnieść rodzinę z jej rzeczywistym kształtem, wyeksportuj ją z programu, w którym powstała (Revit):

1. Otwórz rodzinę albo projekt, w którym rodzina jest umieszczona.
2. Wybierz **Plik > Eksportuj > IFC**. Zobacz [ustawienia eksportu, które tu najlepiej działają](topic:rvt-to-ifc).
3. W BimCraft odczytaj plik `.ifc` za pomocą {{ui:Pliki…}}. Każdy typ rodziny trafia jako osobny obiekt, z kształtem i zestawami właściwości.

Wielu producentów oferuje plik IFC lub DWG obok pliku rodziny. Te pliki odczytują się bezpośrednio.

## Typy rodzin

Rodzina z kilkoma typami trafia jako jeden element z wyborem {{ui:Wariant}}, po jednym wariancie na typ. Każdy wariant ma wartości, które różnią się między typami, oraz własne pudełko, gdy typ ma szerokość i głębokość. Rodzina z jednym typem to zwykły element wypełniony wartościami tego typu.

Niektóre rodziny trzymają typy w katalogu typów: pliku `.txt` o tej samej nazwie obok pliku rodziny. Wybierz oba razem albo wybierz folder, a wiersze katalogu staną się wariantami.

## Dane rodziny na rzeczywistym kształcie

Jeśli folder zawiera plik rodziny i plik IFC, glTF lub OBJ o tej samej nazwie (`Chair.rfa` i `Chair.ifc`), wybierz oba razem albo wybierz folder. BimCraft tworzy jeden element: plik rodziny podaje nazwę, producenta, model, parametry i typy, a drugi plik podaje rzeczywisty kształt 3D. Uwagi mówią, z którego pliku pochodzi kształt. Jeden kształt jest używany dla każdego typu.

Gdy w pliku rodziny zapisany jest obraz, szczegóły elementu pokazują ten obraz pod rysunkiem planu. Obraz jest tam tylko wyświetlany; nie jest zachowywany razem z elementem.

## Moje obiekty

{{ui:Moje obiekty}} to twoja prywatna lista w Bibliotece. Tylko ty widzisz, co na niej jest: nie znajduje się w bibliotece publicznej, nie pojawia się w wyszukiwaniu i nie jest pokazywana twojemu zespołowi. Idzie za twoim kontem, więc te same obiekty są na innym komputerze, gdy zalogujesz się do biblioteki.

- Musisz być zalogowany do biblioteki, aby zachować obiekt. Zobacz [zaloguj się do biblioteki](topic:library-credits).
- Zachowanie obiektu wysyła ten jeden obiekt na twoje konto. Do tego czasu zostaje na twoim komputerze.
- {{ui:Usuń z moich obiektów}} usuwa obiekt z listy. Kopie już umieszczone w rysunkach zostają.
- Aby udostępnić obiekt wszystkim, wyślij go do biblioteki publicznej na licencji, którą wybierzesz.

:::note
Moje obiekty są testowane i mogą jeszcze nie być otwarte dla twojego konta. Jeśli brakuje źródła albo pojawia się komunikat „Moje obiekty nie są jeszcze otwarte dla tego konta”, nadal możesz odczytywać i umieszczać własne pliki za pomocą {{ui:Pliki…}}; są zapisywane wewnątrz modelu.
:::

## Częste błędy

- **Oczekiwanie rzeczywistego kształtu rodziny z `.rfa`.** Odczytywane są tylko jej dane. Wyeksportuj IFC, aby uzyskać kształt.
- **Dwa elementy tam, gdzie spodziewasz się jednego.** Rodzina i jej plik kształtu łączą się tylko wtedy, gdy ich nazwy są identyczne, nie licząc końcówki, i leżą w tym samym folderze.
- **Siatka przychodzi tysiąc razy za duża albo leży na boku.** Ustaw {{ui:Jednostki pliku}} i {{ui:Oś w górę siatki}} w {{ui:Pliki…}} przed wyborem pliku.
- **„Brak danych rodziny” w pliku.** To projekt (`.rvt` zapisany z inną końcówką) albo szablon rodziny, a nie rodzina. Zobacz [Odczytaj plik projektu lub rodziny](topic:read-rvt-file).
- **Zachowywanie treści, której nie wolno przechowywać.** Niektóre płatne biblioteki nie pozwalają na kopie poza własną usługą. Sprawdź warunki treści, której sam nie stworzyłeś.
