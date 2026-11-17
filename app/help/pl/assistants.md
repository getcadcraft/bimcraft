---
title: Pozwól asystentowi AI pracować z twoim modelem
summary: Włącz asystentów w Ustawieniach, aby asystent na twoim komputerze mógł znajdować elementy, odczytywać ich właściwości, izolować je w widoku i rysować ściany, drzwi, okna, stropy, poziomy i siatki przez CadCraft Studio. Wyłączone, dopóki go nie włączysz.
keywords: ai, asystent, mcp, skrypt, automatyzacja, studio, znajdź elementy, izoluj, właściwości, uprawnienia, rozłącz, aktywność, rysuj ściany, dodaj drzwi, dodaj okna, poziomy, siatki, stropy, cofnij, zapisz, wiersz poleceń, cli, bez okna, użyj z asystentami AI
from: c5ee595b
---

## Czego się nauczysz

Jak pozwolić asystentowi AI (dowolnemu asystentowi obsługującemu MCP) zajrzeć do otwartego modelu IFC i rysować w nim, co może, a czego nie może, i jak go zatrzymać.

## Co asystent może zrobić w BimCraft

| Prosi o | Co się dzieje | Wymaga |
|---|---|---|
| Znajdowanie elementów | Dostaje listę elementów według klasy, kondygnacji, nazwy lub wartości właściwości, tak jak robi to **Znajdź** | Odczyt |
| Odczyt właściwości | Dostaje atrybuty jednego elementu, jego typ, zestawy właściwości i ilości, tak jak pokazuje je **Właściwości** | Odczyt |
| Opis modelu, lista ścian | Dostaje poziomy, ściany, drzwi, okna, pomieszczenia, stropy, siatki i kolumny oraz końce, typ i wysokość każdej ściany | Odczyt |
| Izolowanie, przezroczystość, ukrywanie lub pokazywanie | Widok 3D zmienia się tak, jakbyś użył menu {{ui:Pokaż}} | Zmiana widoku i rysowanie |
| Rysowanie ścian, drzwi, okien, stropów, poziomów lub linii siatki | Model zmienia się tak, jakbyś użył narzędzi {{ui:Rysuj}}: ściany się łączą, a pomieszczenia, stropy i dachy podążają za zmianami | Zmiana widoku i rysowanie |
| Zmiana nazwy lub wartości właściwości | Nazwa, Opis, Typ obiektu lub Znacznik jednego elementu albo jedna wartość właściwości. Wartość wspólna z innymi elementami jest najpierw kopiowana dla tego elementu; wartość typu zmienia się tylko wtedy, gdy asystent tak zadecyduje, bo każdy element tego typu za nią podąża | Zmiana widoku i rysowanie |
| Przesuwanie, usuwanie, zmiana ścian, drzwi i okien | Elementy są przesuwane lub usuwane razem z tym, w czym są osadzone; ściany narysowane narzędziami {{ui:Rysuj}} zmieniają się przez swoje końce lub typ, drzwi i okna przez swoje położenie, rozmiar lub typ, a pomieszczenia i połączenia podążają za zmianami | Zmiana widoku i rysowanie |
| Konfiguracja, układ i odczyt zestawienia | „Zestawienie drzwi wg kondygnacji, z klasą odporności ogniowej i okuciami”: asystent nazywa zestawienie, jego kolumny (właściwość lub znacznik staje się kolumną) i grupowanie; BimCraft wypełnia je z modelu i układa, biorąc z biurowego standardu to, czego asystent nie podał. Konfiguracja dołącza do listy zestawień. Każdy wiersz w odpowiedzi podaje swoje elementy, więc można je zaznaczyć | Odczyt do odczytu; Zmiana widoku i rysowanie do zapisania konfiguracji |
| Eksport zestawienia | CSV, Excel lub tekst rozdzielany tabulatorami do wklejenia w Google Sheets (nic nie jest wysyłane do Google) | Eksport |
| Odczyt i ustawianie wykończeń pomieszczeń | Typy wykończeń, podłoga, ściana i sufit każdego pomieszczenia, strefy; powierzchnie, liczby płytek i objętości podłoża pochodzą wtedy z zestawień wykończeń | Odczyt; do ustawienia: Zmiana widoku i rysowanie |
| Zaznaczanie elementów, cofanie własnych kroków | Elementy są wybierane w widoku; jego ostatni krok jest cofany | Zmiana widoku i rysowanie |
| Zapisz | Nowy plik IFC ze wszystkimi zmianami, tak jak tworzy go {{ui:Zapisz jako IFC}} (oryginał nigdy nie jest zmieniany) | Zapisz |
| Eksport USD | Otwarte modele jako OpenUSD (.usda, .usdc lub .usdz), tak jak zapisuje je {{ui:USD}} na pasku narzędzi | Eksport |
| Renderowanie obrazu, uruchamianie kolejki renderowania | Obraz widoku 3D, tak jak tworzy go okno {{ui:Renderuj}} z twoimi ustawieniami renderowania, chyba że poprosi o inne, albo obrazy wysokiej jakości dodane do kolejki okna i renderowane jeden po drugim (kolejka wymaga WebGPU). Nic w modelu się nie zmienia ([Renderowanie obrazu](topic:render)) | Eksport |

Każda zmiana wykonana przez asystenta to jeden krok w **Zmianach**, nazwany „Asystent: …” (np. „Asystent: dodaj 4 ściany”), więc {{key:Mod+Z}} cofa całe jego działanie, a ty widzisz, czyj to był krok. W oknie nie może otwierać plików: to ty otwierasz model, a on pracuje z tym, który jest otwarty.

## Włączanie

Asystenci łączą się z BimCraft przez CadCraft Studio na twoim komputerze; zwykła przeglądarka nie ma do tego dostępu.

1. Otwórz {{ui:Ustawienia}} i wybierz kartę **BimCraft**.
2. W sekcji **Asystenci** zaznacz **Zezwól asystentom AI i skryptom na używanie BimCraft**.
3. **Odczyt** jest już zaznaczony. Zaznacz też **Zmiana widoku i rysowanie**, jeśli asystent może izolować i ukrywać elementy oraz rysować, oraz **Zapisz**, jeśli może zapisać model jako nowy plik.
4. Połącz asystenta w Studio (Studio pokazuje adres i ustawienia do wklejenia w nim).

## Gdy asystent jest połączony

Uwaga u góry prawego panelu mówi, który asystent jest połączony i co może robić. Kliknij {{ui:Rozłącz}}, aby od razu zakończyć jego sesję; aby kontynuować, musi połączyć się ponownie.

**Aktywność** w sekcji **Asystenci** w Ustawieniach wypisuje każde wywołanie asystenta, od najnowszego, z informacją, czy się powiodło.

:::tip
Pytaj zwykłymi słowami, np. „izoluj ściany zewnętrzne na poziomie 1”, „które drzwi nie mają klasy ogniotrwałości?” albo „narysuj pomieszczenie 6 na 4 metry na poziomie 1 z drzwiami w ścianie południowej”. Asystent znajduje elementy i pokazuje je w widoku albo je rysuje.
:::

## Bez okna: skrypty i wiersz poleceń

Te same narzędzia rysunkowe działają na plikach IFC w folderach, które wskażesz, bez otwartego okna: serwer MCP i wiersz poleceń CadCraft mogą rozpocząć nowy budynek lub otworzyć plik IFC, opisać go, dodać ściany, drzwi, okna, stropy, poziomy i siatki, cofnąć zmiany i zapisać go jako nowy plik `.ifc`. Ty decydujesz, z których folderów może korzystać i czy może cokolwiek zmieniać lub zapisywać.

## Wyłączanie

Odznacz **Zezwól asystentom AI i skryptom na używanie BimCraft**. Każdy asystent zostaje od razu rozłączony, a ustawienie jest zachowane na następny raz.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady krok po kroku, każdy z narzędziami, które wywołuje.
- [Znajdowanie elementów według klasy, nazwy lub właściwości](topic:find)
- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
- [Ustawienia BimCraft](topic:settings)
