---
title: Sprawdź, co się zużyje w ciągu pięćdziesięciu lat
summary: Okna, drzwi, wykończenia i dach zapisane w modelu, ich trwałość, lata wymiany oraz koszt według roku i jego wartość bieżąca, gdy wpiszesz koszt za jednostkę.
keywords: cykl życia, cykl życia budynku, trwałość, wymiana, utrzymanie, koszt, wartość bieżąca, dyskonto, inflacja, 50 lat, okna, farba, dach, wykończenia, koszt całkowity
from: 1b849545
---

Sekcja {{ui:Widok cyklu życia}} w lewym panelu wymienia elementy modelu, które się zużywają, i podaje, kiedy są wymieniane w okresie studium (na początek 50 lat). Nic w modelu nie zostaje zmienione.

## Jak to czytać

Każda pozycja pokazuje ilość (zmierzoną w modelu: powierzchnię okien, drzwi zewnętrznych i wewnętrznych, wykończenie ścian zewnętrznych, malowanie wnętrz, wykończenie podłóg i sufitów, powierzchnię rzutu dachu, schody), **trwałość w latach** oraz **koszt za jednostkę**. Element jest wymieniany po upływie swojej trwałości, potem po dwukrotności trwałości i tak dalej, dopóki ten termin przypada przed końcem studium. Okno o trwałości 30 lat w studium 50-letnim jest więc wymieniane raz, w 30. roku. Trwałości to typowe wartości planistyczne: zmień je na swoje produkty i klimat. Koszt nie jest zakładany; wpisz go, aby zobaczyć pieniądze w podziale na lata, sumę i jej wartość bieżącą. Jeśli chcesz, dodaj stopę dyskontową i stopę inflacji.

{{ui:Zapisz harmonogram (CSV)}} zapisuje składniki i lata. Rury, kanały, okablowanie i urządzenia też są wymienione (patrz niżej).

## Rury, kanały, okablowanie i urządzenia

- **Rury i kanały** to metry każdego narysowanego przebiegu. **Urządzenia** (pompy, wentylatory, zawory, końcówki, armatura, gniazda, łączniki, rozdzielnice oraz inne rzeczy, które śledzi karta Zasoby) są liczone według rodzaju, a każdy rodzaj ma planistyczną trwałość. Element, którego własna *trwałość* jest ustawiona na karcie Zasoby, jest osobną pozycją z tą trwałością; jeśli ma datę montażu, zaczyna od swojego wieku. Pompa mająca 16 lat przy trwałości 10 lat jest wymieniana od razu, a potem co dziesięć lat.
- **Okablowanie** jest **szacunkiem**: odległość po planie od rozdzielnicy wzdłuż urządzeń każdego obwodu, zaczynając od najbliższego, pomnożona przez 1,25 na prowadzenie trasy. Model nie rysuje kabla, więc sprawdź to z własnym przedmiarem.
- Trwałości to wartości planistyczne do przeglądu, a nie źródło.

## Węgiel wbudowany przy każdej wymianie

Zaznacz {{ui:Uwzględnij węgiel wbudowany w każdej wymianie}}. Nowe okno, drzwi, schody, dach, rura lub urządzenie są liczone według węgla, jaki niosą elementy tego rodzaju w modelu (współczynniki z karty Węgiel, na jednostkę). Część bez elementu lub współczynnika, na przykład farba, wykończenia i okablowanie, pokazuje myślnik i jest wymieniona na liście. Koniec trwałości starej części i praca związana z jej wymianą nie są liczone.
