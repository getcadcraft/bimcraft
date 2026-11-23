---
title: Pozwól asystentowi AI pracować z modelem
summary: Włącz asystentów w Ustawieniach, aby asystent na twoim komputerze mógł znajdować elementy, odczytywać ich właściwości, izolować je w widoku i rysować ściany, drzwi, okna, stropy, kondygnacje i siatki, za pośrednictwem CadCraft Studio. Wyłączone, dopóki go nie włączysz.
keywords: ai, asystent, mcp, skrypt, automatyzacja, studio, znajdź elementy, izoluj, właściwości, uprawnienia, rozłącz, aktywność, rysuj ściany, dodaj drzwi, dodaj okna, kondygnacje, siatki, stropy, cofnij, zapisz, wiersz poleceń, cli, bez okna, użyj z asystentami ai
from: 66d72742
---

## Czego się dowiesz

Jak pozwolić asystentowi AI (każdemu asystentowi obsługującemu MCP) zaglądać do otwartego modelu IFC i rysować w nim, co może on zrobić, a czego nie, oraz jak go zatrzymać.

## Co asystent może zrobić w BimCraft

| Prosi o | Co się dzieje | Wymaga |
|---|---|---|
| Znajdź elementy | Otrzymuje listę elementów według klasy, kondygnacji, nazwy lub wartości właściwości, tak jak robi to **Znajdź** | Odczyt |
| Odczytaj właściwości | Otrzymuje atrybuty jednego elementu, typ, zestawy właściwości i ilości, tak jak pokazuje je **Właściwości** | Odczyt |
| Opisz model, wypisz ściany | Otrzymuje kondygnacje, ściany, drzwi, okna, pomieszczenia, stropy, siatki i słupy oraz końce każdej ściany, jej typ i wysokość | Odczyt |
| Izoluj, ustaw przezroczystość, ukryj lub pokaż | Widok 3D zmienia się tak, jakbyś użył menu {{ui:Pokaż}} | Zmiana widoku i rysowanie |
| Rysuj ściany, drzwi, okna, stropy, kondygnacje lub linie siatki | Model zmienia się tak, jakbyś użył narzędzi {{ui:Rysuj}}: ściany się łączą, a pomieszczenia, stropy i dachy dostosowują się | Zmiana widoku i rysowanie |
| Zmień nazwę lub wartość właściwości | Nazwę, opis, typ obiektu lub etykietę jednego elementu albo jedną wartość właściwości. Wartość wspólną z innymi elementami najpierw kopiuje się dla niego; wartość typu zmienia się tylko wtedy, gdy asystent to zapowie, ponieważ każdy element tego typu za nią podąża | Zmiana widoku i rysowanie |
| Przesuń, usuń, zmień ściany, drzwi i okna | Elementy przesuwają się lub są usuwane razem z elementami, w których są osadzone; ściany narysowane narzędziami {{ui:Rysuj}} zmieniają się przez swoje końce lub typ, drzwi i okna przez miejsce, rozmiar lub typ, a pomieszczenia i połączenia za nimi podążają | Zmiana widoku i rysowanie |
| Ustaw, ułóż i odczytaj zestawienie | „Zestawienie drzwi według kondygnacji, z klasą odporności ogniowej i okuciami”: asystent nadaje zestawieniu nazwę, jego kolumny (właściwość lub etykieta staje się kolumną) i grupowanie; BimCraft wypełnia je z modelu i je układa, a to, czego asystent nie podał, pochodzi ze standardu biura. Ustawienie trafia na twoją listę Zestawień. Każdy wiersz odpowiedzi podaje swoje elementy, więc asystent może je zaznaczyć | Odczyt, aby odczytać; Zmiana widoku i rysowanie, aby zapisać ustawienie |
| Eksportuj zestawienie | CSV, Excel lub tekst rozdzielany tabulatorami do wklejenia w Google Sheets (nic nie jest wysyłane do Google) | Eksport |
| Odczytaj i ustaw wykończenia pomieszczeń | Typy wykończeń, wykończenie podłogi, ścian i sufitu każdego pomieszczenia, strefy; powierzchnie, liczba płytek i objętości podłoża pochodzą następnie z zestawień wykończeń | Odczyt; Zmiana widoku i rysowanie, aby ustawić |
| Zaznacz elementy, cofnij własne kroki | Elementy są wybierane w widoku; jego ostatni krok zostaje cofnięty | Zmiana widoku i rysowanie |
| Zapisz | Nowy plik IFC ze wszystkimi zmianami, tak jak zapisuje go {{ui:Zapisz jako IFC}} (oryginał nigdy nie jest zmieniany) | Zapis |
| Eksportuj USD | Otwarte modele jako OpenUSD (.usda, .usdc lub .usdz), tak jak zapisuje je przycisk {{ui:USD}} na pasku narzędzi | Eksport |
| Wyrenderuj obraz, uruchom kolejkę renderowania | Obraz widoku 3D, tak jak tworzy go okno {{ui:Renderuj}} z twoimi ustawieniami renderowania, chyba że poprosi o inne; albo obrazy wysokiej jakości dodane do kolejki okna i renderowane jedno po drugim (kolejka wymaga WebGPU). Nic w modelu się nie zmienia ([Renderuj obraz](topic:render)) | Eksport |

Każda zmiana wykonana przez asystenta to jeden krok w **Zmianach**, nazwany „Asystent: …” (na przykład „Asystent: dodaj 4 ściany”), więc {{key:Mod+Z}} cofa całe jego działanie, a ty widzisz, czyj to był krok. Asystent nie może otwierać plików w oknie: ty otwierasz model, a on pracuje z tym, który jest otwarty.

## Włączanie

Asystenci łączą się z BimCraft przez CadCraft Studio na twoim komputerze; zwykła przeglądarka nie ma do tego dostępu.

1. Otwórz {{ui:Ustawienia}} i wybierz kartę **BimCraft**.
2. W sekcji **Asystenci** zaznacz **Zezwól asystentom AI i skryptom korzystać z BimCraft**.
3. **Odczyt** jest dla ciebie zaznaczony. Zaznacz też **Zmiana widoku i rysowanie**, jeśli asystent może izolować i ukrywać elementy oraz rysować, oraz **Zapis**, jeśli może zapisać model jako nowy plik.
4. Połącz asystenta w Studio (Studio pokazuje adres i ustawienia do wklejenia w asystencie).

## Gdy asystent jest połączony

Notatka u góry prawego panelu mówi, który asystent jest połączony i co może robić. Kliknij {{ui:Rozłącz}}, aby od razu zakończyć jego sesję; aby kontynuować, musi połączyć się ponownie.

**Aktywność**, w sekcji **Asystenci** w Ustawieniach, wypisuje każde wywołanie wykonane przez asystenta, od najnowszego, wraz z informacją, czy się udało.

:::tip
Pytaj zwykłymi słowami, na przykład „izoluj zewnętrzne ściany na kondygnacji 1”, „które drzwi nie mają klasy odporności ogniowej?” albo „narysuj pomieszczenie 6 na 4 metry na kondygnacji 1 z drzwiami w ścianie południowej”. Asystent znajduje elementy i pokazuje je w widoku albo je rysuje.
:::

## Bez okna: skrypty i wiersz poleceń

Te same narzędzia rysowania działają na plikach IFC w folderach, które wskażesz, bez otwartego okna: serwer MCP CadCraft i wiersz poleceń mogą rozpocząć nowy budynek lub otworzyć plik IFC, opisać go, dodać ściany, drzwi, okna, stropy, kondygnacje i siatki, cofnąć zmiany i zapisać go jako nowy plik `.ifc`. Cztery kolejne narzędzia pasują do skryptów: `ifc_batch` wykonuje do 200 kroków edycji jako jeden (wszystko albo nic: jedno cofnięcie cofa całą partię, a odrzucony krok cofa resztę i podaje jego nazwę); `ifc_describe` wypisuje kondygnacje i każdą ścianę wraz z jej drzwiami i oknami; `ifc_render_png` zapisuje płaski obraz kontrolny modelu (bez materiałów, tekstur i cieni) bez okna; `usd_export` zapisuje `.usda`, `.usdc` lub `.usdz`. W wierszu poleceń `cadcraft bim script.json --from model.ifc -o out.ifc` uruchamia skrypt kroków, a `--usd`, `--png` i `--plan` zapisują plik USD, obraz lub rzut z tego samego przebiegu. Ty decydujesz, z jakich folderów może korzystać i czy może cokolwiek zmieniać lub zapisywać.

## Wyłączanie

Odznacz **Zezwól asystentom AI i skryptom korzystać z BimCraft**. Każdy asystent zostaje od razu rozłączony, a ustawienie zostaje zapamiętane na następny raz.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): gotowe przykłady, każdy z narzędziami, które wywołuje.
- [Znajdź elementy według klasy, nazwy lub właściwości](topic:find)
- [Ukryj, izoluj i ustaw przezroczystość elementów](topic:hide-and-isolate)
- [Ustawienia BimCraft](topic:settings)
