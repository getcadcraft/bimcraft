---
title: Pakiety dla klienta, raporty etapów i porównywanie opcji
summary: Utwórz pakiet dla klienta lub raport etapu z modelu, z opcjami masy zabudowy porównanymi pod względem powierzchni i kosztu, powierzchniami kondygnacji, rysunkami z ich rewizjami i historią wydań. Każda liczba zachowuje elementy, na których się opiera.
keywords: pakiet dla klienta, prezentacja, raport etapu, raport, porównanie opcji, opcje, porównaj opcje, powierzchnia i koszt, koszt na opcję, brak stawki, masa zabudowy, powierzchnie kondygnacji, lista rysunków, historia wydań, liczby, powiązane liczby
from: f6679bf5
---

## Co zrobisz

Utwórz pakiet dla klienta lub raport etapu z modelu w jego obecnym stanie i porównaj zachowane opcje masy zabudowy obok siebie pod względem powierzchni i kosztu.

## Kroki

1. W lewym panelu otwórz **Pakiet dla klienta i raport etapu**.
2. Wybierz **Otwórz w Dokumentach** obok Pakietu dla klienta lub Raportu etapu. Dokument pojawia się w Dokumentach na podstawie modelu, gdzie możesz zmienić jego tekst.
3. W podglądzie wybierz liczbę, aby zaznaczyć elementy, na których się opiera.
4. Wybierz **Zbuduj pakiet**. Zapisuje się jedno archiwum zip: dokument jako PDF, obraz widoku 3D oraz `figures.csv`, który wymienia każdą liczbę wraz z GlobalId jej elementów.

## Pola

Możesz ich używać w każdym dokumencie.

| Pole | Co drukuje |
|---|---|
| `{{stage}}` | Etap projektu z danych rysunku. |
| `{{options}}` | Zachowane opcje masy zabudowy obok siebie: kondygnacje, wysokość, obrys, powierzchnia brutto, obudowa i koszt. |
| `{{areas}}` | Powierzchnia kondygnacji według poziomów, z pomieszczeń. |
| `{{sheets}}` | Arkusze z rewizją, na której każdy stoi, i datą ostatniego wydania. |
| `{{issues}}` | Historia wydań i dziennik zmian rysunków. |
| `{{changes}}` | Co zmieniło się od ostatniego wydania, arkusz po arkuszu. |

## Jak wycenia się opcje

Koszt pochodzi wyłącznie z tabeli cen projektu (Energia/Koszt, koszt 5D). Nic nie jest szacowane za Ciebie.

- Wiersz cenowy wycenia opcję tylko wtedy, gdy jego klasy wskazują `IfcBuildingElementProxy`.
- Powierzchnię kondygnacji wycenia wiersz, którego słowa wskazują przeznaczenie opcji, na przykład biuro. Bez takiego wiersza używany jest wiersz ze słowami powierzchnia brutto lub masa zabudowy. Wiersz w m² używa powierzchni brutto. Wiersz w m³ używa kubatury.
- Obudowę (obwód razy wysokość) wycenia wiersz ze słowem obudowa lub elewacja.
- Opcja bez pasującego wiersza pokazuje **Brak stawki**. Suma jest pokazywana tylko wtedy, gdy każda potrzebna część ma stawkę.

## Warto wiedzieć

- Zachowaj opcje przyciskiem **Zachowaj jako opcję** na liście opcji masy zabudowy w programie pomieszczeń. Zobacz Opcje masy zabudowy.
- PDF nie może zaznaczać elementów. Poza BimCraft plik `figures.csv` zawiera połączenie każdej liczby z jej elementami.

## Jeszcze nie zbudowano

- Arkusze i widoki rysunkowe nie są umieszczane w dokumencie. Pakiet zawiera tylko obraz widoku 3D.
