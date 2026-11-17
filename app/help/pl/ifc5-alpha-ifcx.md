---
title: Otwieranie i eksport IFC5 alfa (plików IFCX)
summary: Opcja laboratoryjna dla formatu pliku IFC5 alfa (.ifcx): otwórz plik wraz z jego warstwami, zobacz, czego odczyt nie mógł sprawdzić, i eksportuj otwarte modele. Format wciąż się zmienia, więc najpierw przeczytaj.
keywords: ifc5, ifcx, alfa, buildingsmart, json, warstwy, schemat, laboratorium, ilości, qto, eksport, import
from: cffe1669
---

IFC5 alfa (plik z rozszerzeniem {{ui:.ifcx}}) to format pliku, który buildingSMART wciąż projektuje. Nie jest ostateczny: pliki oraz nasz sposób ich odczytu mogą się zmienić. Dlatego to opcja laboratoryjna i dlatego najpierw trzeba przeczytać.

## Włączanie

1. Wybierz {{ui:Ustawienia}}, a następnie sekcję {{ui:IFC5 alpha (IFCX)}} na karcie BimCraft.
2. Zaznacz {{ui:IFC5 alpha (IFCX) - format wciąż się zmienia; najpierw przeczytaj}}.

Domyślnie jest wyłączona. Dopóki jest wyłączona, plik .ifcx zostaje odrzucony z komunikatem wskazującym na tę stronę. {{ui:Otwórz IFC5 alpha (.ifcx)…}} oraz przycisk eksportu {{ui:IFC5 alfa}} pojawiają się, gdy opcja jest włączona.

## Otwieranie

- Wybierz plik .ifcx za pomocą {{ui:Otwórz plik lub folder}} (zastępuje otwarty model, po zwykłym pytaniu o niezapisane zmiany), albo
- wybierz {{ui:Otwórz IFC5 alpha (.ifcx)…}} i zaznacz kilka plików naraz: plik, jego warstwy i pliki schematu, które importuje. Gdy model jest już otwarty, plik zostaje **dodany obok niego**; x na liście modeli usuwa go ponownie, co jest cofnięciem.

Plik IFCX wymienia węzły (ścieżkę, jego potomków, to, co dziedziczy, i jego atrybuty). Kilka plików może opisywać ten sam węzeł: późniejszy plik (warstwa) nadpisuje atrybuty wcześniejszego, a pusty potomek (null) usuwa dziecko. BimCraft składa je, a następnie rysuje wynik jako mały model IFC4: projekt, teren, budynek, kondygnacje oraz elementy z nazwami, klasami, właściwościami, ilościami, kolorami i siatkami.

Nic nie jest pobierane z sieci. Pliki schematu, które plik importuje (na przykład `ifc@v5a.ifcx`), są używane tylko wtedy, gdy wybrano je razem z plikiem; w przeciwnym razie raport o tym informuje, a atrybuty są odczytywane bez sprawdzania typów.

### Raport

Po otwarciu raport wypisuje, co odczyt znalazł: dane niezgodne z ich schematem, nieprzekazane pliki schematu, atrybuty, które nie mają tu odpowiednika w IFC. Atrybuty bez mapowania są **zachowywane** w modelu, a nie porzucane, i zapisywane z powrotem przy eksporcie.

## Co staje się czym

| W pliku IFCX | W BimCraft |
|---|---|
| Węzeł z klasą IFC (projekt, teren, budynek, kondygnacja, ściana …) | Odpowiadający element IFC4; klasa nieznana temu odczytowi staje się proxy elementu budowlanego |
| Nazwa, jaką węzeł ma pod swoim rodzicem | Nazwa elementu |
| Atrybuty z rodzajem wielkości (długość, pole, objętość, masa …) | Zestaw ilości IFC4 o nazwie `Qto_IFCX` (zestawy `Qto_*` z IFC4 pozostają zestawami IFC4) |
| Pozostałe atrybuty właściwości | Zestaw właściwości o nazwie `Pset_IFCX` |
| Atrybuty siatki i przekształcenia | Trójkąty elementu i jego umieszczenie; niewidoczne siatki nie są rysowane |
| Kolor, nieprzezroczystość, materiał, klasyfikacja | Styl powierzchni, materiał i klasyfikacja elementu |

Jednostki przyjmowane są jako metry, z osią Z skierowaną w górę: wersja alfa mówi, że jednostki zostaną udokumentowane później.

## Eksport

Wybierz {{ui:IFC5 alfa}} na pasku narzędzi, przeczytaj uwagę, a następnie kliknij {{ui:Eksportuj .ifcx}}. Plik ma nasz nagłówek (autor CadCraft, wersja ifcx_alpha) i sam mówi, że jest w formacie alfa. Każdy model zapisywany jest we własnych współrzędnych pliku, w metrach, z nazwami, klasami, zestawami właściwości, ilościami (jako atrybuty z ich rodzajem), kolorami i trójkątami. Warstwy i dziedziczenie są zapisywane spłaszczone. Sprawdź plik w programie, do którego go wysyłasz.

## Ograniczenia

- Geometria krzywa (krzywe, powierzchnie) nie jest odczytywana: tylko siatki trójkątów.
- Drzwi i okna zagnieżdżone w ścianie są umieszczane na kondygnacji; ściana, z której pochodzą, nie jest połączona.
- Nazwy zestawów `Qto_*` z IFC4 są zachowywane jako grupy atrybutów własnych (`cadcraft::qto::…`); standardowy schemat alfa ma tylko kilka nazw wielkości.
- Format może się zmienić; plik utworzony dziś może nie zostać odczytany jutro.
