---
title: Wykończenia pomieszczeń i zestawienia wykończeń
summary: Określ, czym pokryte są podłoga, ściany i sufit każdego pomieszczenia, dodaj strefy, na przykład fartuch z płytek, i uzyskaj zestawienia wykończeń wg pomieszczeń, ścian i stref, z powierzchniami, liczbą płytek wraz z przyciętymi oraz objętościami podłoża.
keywords: wykończenie, wykończenia, zestawienie wykończeń, wykończenia pomieszczeń, wykończenie podłogi, wykończenie ściany, wykończenie sufitu, listwa przypodłogowa, płytka, płytki, przycięte płytki, liczba płytek, naddatek, podłoże, wylewka, płyta podkładowa, tynk, strefa, fartuch, okładzina ścienna, mokre pomieszczenie, wnętrze, ilości
from: 8c30498c
---

## Co zrobisz

Raz określ w BimCraft, jakim wykończeniem wykończone jest każde pomieszczenie. Zestawienia wykończeń podadzą wtedy powierzchnie, płytki do zamówienia i objętości podłoża, a zmienią się wraz z modelem.

## Kroki

1. Włącz {{ui:Rysuj}}, otwórz **Zestawienia** w lewym panelu i kliknij **Wykończenia pomieszczeń**.
2. W sekcji **Typy wykończeń** kliknij **Dodaj typ wykończenia**. Podaj nazwę, rodzaj (Płytka, Arkusz, Powłoka lub Płyta) i grubość. Dla płytki podaj długość i szerokość płytki, fugę oraz naddatek na odpady w procentach. Jeśli pod wykończeniem coś się znajduje (wylewka, płyta podkładowa, warstwa tynku), nazwij to w sekcji **Podłoże** i podaj jego grubość.
3. W sekcji **Pomieszczenia** wybierz wykończenie podłogi, ściany i sufitu dla każdego pomieszczenia. Jeśli pomieszczenie ma listwę przypodłogową, wpisz jej nazwę i wysokość.
4. W sekcji **Strefy** kliknij **Dodaj strefę** dla części pomieszczenia, która ma inne wykończenie:
   - strefa **ściany** to pas między dwiema wysokościami nad podłogą (fartuch z płytek od 0 do 1200, okładzina ścienna). Obejmuje wszystkie ściany pomieszczenia albo wybierz ściany tego pomieszczenia w modelu i kliknij przycisk **Włącz**, aby ograniczyć ją do nich;
   - strefa **podłogi** lub **sufitu** to powierzchnia wpisana ręcznie. Jest odejmowana od wykończenia samego pomieszczenia.
5. Kliknij **Zapisz**. To jeden krok cofnięcia. Długości wpisuje się w jednostkach projektu.

## Zestawienia

Cztery pozycje dołączają do listy zestawień:

- **Wykończenia wg pomieszczeń**: każde pomieszczenie z wykończeniem podłogi, ściany i sufitu, ich powierzchniami oraz listwą przypodłogową z jej długością.
- **Wykończenia wg ścian**: każdy odcinek ściany po stronie pomieszczenia i pas, który pokrywa wykończenie, z długością, powierzchnią brutto, odliczeniami, powierzchnią netto oraz, dla płytek, całymi płytkami, przyciętymi płytkami i płytkami do zamówienia.
- **Wykończenia wg strefy**: każda strefa z jej wykończeniem, powierzchnią netto, płytkami i objętością podłoża.
- **Ilości wykończeń**: jeden wiersz na wykończenie: powierzchnia netto, całe i przycięte płytki, płytki do zamówienia, podłoże i jego objętość oraz własna objętość wykończenia.

Grupuj, sumuj, zapisuj i eksportuj je jak każde zestawienie: zobacz [Układ, zapis i eksport zestawienia](topic:schedule-layouts). Kliknij wartość, aby zaznaczyć jej źródło: odliczenia ściany zaznaczają jej drzwi i okna.

## Jak mierzy się wykończenia

- **Ściany**: każdy odcinek ściany po stronie pomieszczenia, jego długość wzdłuż pomieszczenia razy wysokość, na którą sięga wykończenie, pomniejszona o część każdych drzwi i okna mieszczącą się w tej wysokości. Ściana niższa od pomieszczenia jest wykańczana do swojej własnej góry. Metoda pomiarowa projektu decyduje, które otwory są zbyt małe, aby je odliczyć ([Zestawienia](topic:plan-schedules-and-pdf)).
- **Podłogi i sufity**: wnętrze pomieszczenia w obrysie ścian, pomniejszone o wyspy w nim.
- **Listwa przypodłogowa**: długość ścian pomieszczenia pomniejszona o szerokość jego drzwi.
- **Płytki**: układane siatką od jednego narożnika powierzchni, z jedną fugą między płytkami. Płytka w całości na powierzchni to płytka cała; płytka częściowo na niej (przy krawędzi, wokół otworu) to płytka przycięta. Płytki do zamówienia to całe plus przycięte, plus naddatek, zaokrąglone w górę. Każda przycięta płytka jest liczona jak nowa: odpadów nie wykorzystuje się ponownie.
- **Objętość podłoża**: powierzchnia netto razy grubość podłoża.
- Liczba oznaczona **≈** jest wyliczona z powierzchni zamiast ułożona płytka po płytce: dotyczy powierzchni z wpisaną strefą odjętą od niej albo bardzo dużej.

## Warto wiedzieć

- Wykończenia są przechowywane w pliku budynku (zestaw właściwości `CadCraft_Finishes` w projekcie). Każde pomieszczenie, które ma wykończenie, dostaje też standardowy zestaw właściwości IFC `Pset_SpaceCoveringRequirements`, dzięki czemu inne programy odczytają nazwy.
- Układ płytek zaczyna się od narożnika. Układ wyśrodkowany w pomieszczeniu, wzór (jodełka, cegiełka) i ponowne użycie odpadów nie są obliczane.
- Ściana zakrzywiona oraz granica pomieszczenia, która nie jest ścianą (separator pomieszczenia), jest wymieniona jako **Inna granica** z długością i bez otworów.
- Wpis **Wykończenia**, który był wcześniej, wymienia warstwy wykończeniowe typów ścian; **Warstwy: powierzchnia i objętość** wymienia każdą warstwę każdego typu warstwowego. Wykończenia pomieszczeń tutaj są nakładane na pomieszczenie ponad te warstwy.
- Asystent może ustawić wykończenia za pomocą `finishes_set`: zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
