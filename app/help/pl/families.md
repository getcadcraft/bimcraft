---
title: Rodziny i ich rozmiary
summary: Drzwi, okna i meble występują w rodzinach. Każdy rozmiar rodziny jest jednym typem w pliku IFC, więc lista typów w BimCraft pozostaje krótka, a inne programy odczytują zwykłe typy.
keywords: rodzina, rodziny, typ, typy, rozmiar, rozmiary, typ drzwi, typ okna, meble, stół, półka, szafka, nowy rozmiar, duplikuj, umieść rodzinę, plik rodziny, ccfamily, biblioteka IFC, biblioteka projektu, grupa, widoczność, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Czym jest rodzina

Rodzina to jeden rodzaj obiektu w kilku rozmiarach: pojedyncze skrzydłowe drzwi o szerokości 32", 36" i 42" albo stół, który jest długi lub krótki. W BimCraft widzisz rodzinę raz, z jej rozmiarami pod nią, zamiast długiej listy typów.

IFC nie zna rodzin. W pliku każdy rozmiar to zwykły typ (typ drzwi, typ okna, typ mebla…), a rodzina to grupa wymieniająca jej rozmiary. Inne programy BIM odczytują typy i grupę tak, jak są; BimCraft odczytuje z nich rodzinę z powrotem.

## Gdzie je znaleźć

- Grupa **Rodziny** w przeglądarce projektu wymienia rodziny w tym modelu, z liczbą ich rozmiarów i liczbą umieszczonych elementów. Poniżej są **Rodziny startowe**: drzwi i okna z narzędzi Drzwi i Okno oraz stół, jednostka półkowa i szafka podstawowa.
- {{ui:Kompilacja}} › {{ui:Rodziny…}} pokazuje tę samą listę w oknie.
- Kliknij rodzinę, aby ją otworzyć: jej rozmiary, wartości każdego rozmiaru i liczbę elementów używających każdego z nich.

## Drzwi i okna

Narzędzia Drzwi i Okno wymieniają rodziny danego rodzaju, a obok nich **listę rozmiarów**. Wybierz rozmiar albo wpisz **W** i **H**: szerokość i wysokość, których żaden rozmiar jeszcze nie ma, stają się nowym rozmiarem rodziny przy umieszczaniu drzwi. Drzwi tego samego rozmiaru współdzielą jeden typ.

We {{ui:Właściwościach}} wybrane drzwi lub okno pokazują **Rodzinę** i **Rozmiar**. Wybierz inny rozmiar z listy albo wpisz nową szerokość lub wysokość. {{ui:Otwórz rodzinę}} otwiera rodzinę, do której należą.

Ościeżnica każdych drzwi lub okna podąża za grubością ściany, w której się znajdują, jak dotąd. Typ rozmiaru zachowuje też rysunek drzwi w ścianie 140 mm, dla programów, które odczytują typy.

## Nowy rozmiar z tej rodziny

1. Otwórz rodzinę.
2. Pod **Nowy rozmiar z tej rodziny** wpisz jej wartości (Szerokość, Wysokość i pozostałe parametry rodziny) i, jeśli chcesz, nazwę. Bez nazwy rozmiar dostaje nazwę od swoich wartości.
3. Kliknij {{ui:Utwórz rozmiar}}.

Dwa rozmiary nie mogą mieć tych samych wartości. **Zmień nazwę** zmienia nazwę rozmiaru; **Usuń** usuwa rozmiar, którego nikt nie używa; **Zaznacz** wybiera elementy tego rozmiaru.

## Umieszczanie mebli

1. {{ui:Kompilacja}} › {{ui:Umieść rodzinę}} albo {{ui:Umieść}} w oknie rodziny.
2. W pasku wybierz rodzinę i jej rozmiar.
3. Kliknij na planie, aby umieścić go na poziomie. Naciśnij {{key:R}}, aby obrócić o 90° przed kliknięciem. {{key:Esc}} kończy.

Właściwości umieszczonego elementu pokazują jego rozmiar, miejsce i kąt obrotu; {{key:Delete}} go usuwa. Każdy element jednego rozmiaru ma kształt tego rozmiaru, więc zmiana rodziny zmienia je wszystkie.

## Rozmiary z tabeli

{{ui:Rozmiary z tabeli…}} w oknie rodziny odczytuje plik CSV (przecinek, średnik lub tabulator). Pierwszy wiersz nazywa kolumny: nazwę lub etykietę parametru, a opcjonalnie `Name`. Długości są w milimetrach, chyba że napiszesz jednostkę (`1.2 m`, `36 in`). Kolumny Tak / Nie przyjmują wartości yes, no, true, false, 1 lub 0, a parametr bez kolumny zachowuje swoją wartość domyślną. Każdy wiersz staje się rozmiarem, w jednym kroku, który możesz cofnąć; rozmiar, który już istnieje, zostaje pominięty. Jeden wiersz, którego nie da się odczytać albo którego rodzina nie potrafi narysować, odrzuca całą tabelę i wskazuje swój numer wiersza. Najwyżej 200 wierszy i 1 MB. {{ui:Zapisz rozmiary jako tabelę}} zapisuje tę samą tabelę z powrotem.

## Ustawienia dla każdego elementu

Parametr oznaczony **Dla elementu** w edytorze (Tak / Nie dodające poprzeczkę, etykietę lub materiał) nie jest częścią rozmiaru: dwoje drzwi tego samego rozmiaru może się różnić. Wybierz element, a **Właściwości** pokażą te parametry; zmień jeden, a ten element zostanie narysowany ponownie z własnym kształtem (meble i wyposażenie dostają własny kształt, drzwi i okna są wykonywane ponownie w swoich ścianach). Ustaw je wszystkie z powrotem na wartości domyślne, a element wraca do kształtu swojego rozmiaru.

## Poziom szczegółowości

{{ui:Kompilacja}} › {{ui:Rodziny…}} › **Poziom szczegółowości** ustawia dla każdej rodziny w modelu, co jest zapisywane w bryłach i rysowane w symbolach na planie: **Dokładny** zachowuje wszystko, a **Średni** i **Uproszczony** pomijają części, które edytor oznacza jako dokładniejsze (mniejsze pliki, szybsze widoki). **Automatyczny** zapisuje wszystko, a widok arkusza wybiera według swojej skali: 1:50 i większe – dokładny, 1:100 – średni, 1:200 i mniejsze – uproszczony. Jeden krok, który możesz cofnąć.

## Duplikowanie rodziny

Nie musisz zaczynać od zera. {{ui:Duplikuj}} kopiuje rodzinę z jej parametrami, bryłami i rozmiarami pod nową nazwą. Zmień kopię w edytorze; oryginał pozostaje bez zmian.

## Pliki rodzin

- {{ui:Zapisz plik rodziny}} zapisuje `.ccfamily.json`: parametry, bryły i rozmiary rodziny. Otwórz go w innym modelu poleceniem {{ui:Otwórz plik rodziny…}} w grupie Rodziny.
- {{ui:Zapisz jako IFC}} zapisuje rodzinę jako mały plik IFC: typy jej rozmiarów i jej grupę, zadeklarowane przez bibliotekę projektu IFC. Inne programy otwierają go jako zestaw typów; BimCraft otwiera go z powrotem jako rodzinę.

Plik rodziny otwarty tutaj jest odczytywany jako dane i sprawdzany, zanim cokolwiek zostanie zapisane. Rodzina, której klucz już jest w modelu, wchodzi jako osobna rodzina. Rodzina, która zawiera inne (zobacz Rodziny wewnątrz w pomocy edytora), przenosi je ze sobą: plik je wymienia, a model zachowuje te, które już ma.

## Rodziny w Bibliotece

Otwórz {{ui:Rodziny…}} i wybierz {{ui:Z Biblioteki…}}, aby zobaczyć rodziny udostępnione w Bibliotece. {{ui:Dodaj do tego projektu}} odczytuje jedną z nich jak plik rodziny: BimCraft sprawdza każde pole, zanim cokolwiek utworzy; rodzina wchodzi jako osobna rodzina i otwiera się w edytorze. Dodanie to jeden krok cofnięcia. Aby udostępnić własne, użyj {{ui:Zapisz wszystkie jako bibliotekę}} i wyślij plik do Biblioteki (pracownicy Biblioteki publikują plik rodziny poleceniem, a każda rodzina jest osobnym elementem ze swoimi rozmiarami). Jeśli nie można połączyć się z Biblioteką, lista to mówi i nic się nie zmienia.

## Typy z innych programów

Typy utworzone przez inne programy również pojawiają się w grupie Rodziny, pogrupowane przez zgadywanie: według części nazwy elementów przed pierwszym dwukropkiem, a jeśli jej brak, według nazw typów różniących się tylko numerami. Okno rodziny mówi, jakiego zgadywania użyto. Są wymienione i możesz zaznaczać ich elementy, ale nie są tu edytowane: nie mają przepisu rodziny.

:::note
Startowe drzwi i okna są rysowane dokładnie tak, jak przed wprowadzeniem rodzin. Pliki utworzone przed rodzinami otwierają się bez zmian: ich drzwi i okna pokazują się pod swoją rodziną z używanymi rozmiarami i przechodzą na własny rozmiar przy pierwszej zmianie.
:::

Zobacz też [Edycja rodziny](topic:family-editor) oraz [Drzwi i okna](topic:doors-and-windows).
