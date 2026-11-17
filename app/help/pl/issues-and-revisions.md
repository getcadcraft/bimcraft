---
title: Wydania, rewizje i dziennik zmian rysunków
summary: Rejestruj każdy przekazywany zestaw arkuszy, sprawdzaj, co zmieniło się od tego czasu na każdym arkuszu i elemencie, i powiąż polecenia na budowę, rysunki warsztatowe oraz dołączone modele z wydaniem, do którego należą.
keywords: wydanie, wydany zestaw, przekazany zestaw, przekazanie, rewizja, rewizje, co się zmieniło, od wydania, dziennik zmian, dziennik zmian rysunków, rejestr rysunków, pismo przewodnie, polecenie na budowę, rysunek warsztatowy, dołączony model, przetarg, budowa, migawka, porównaj
from: 4c732832
---

## Co zrobisz

Zarejestruj wydanie: które arkusze wyszły, kiedy, w jakim celu, każdy w swojej rewizji. Później sprawdź, co się zmieniło od tego wydania. Powiąż polecenia na budowę i zwrócone rysunki warsztatowe z wydaniem.

## Kroki

1. W lewym panelu otwórz **Wydania i rewizje**.
2. Wybierz **Zarejestruj wydanie**. Rewizja zostanie zaproponowana (A, potem B; numerowane, np. P1, liczą się w górę). Wybierz, w jakim celu wydajesz, dla kogo, datę i arkusze. Gdy ustawiony jest etap projektu, cel podąża za nim. Gdy pakiet pozwoleń ma listę dokumentów pomocniczych, arkusze powiązane z tą listą są zaznaczane za Ciebie.
3. Pozostaw zaznaczone **Zapisz też kopię modelu jako wydanego**, aby zachować model dokładnie taki, jaki wyszedł. Kopia zostanie pobrana; jej nazwa, rozmiar i SHA-256 są zapisywane przy wydaniu.
4. Wybierz **Zarejestruj to wydanie**. Arkusz, który zmienił się od ostatniego wydania, otrzymuje nową rewizję. Arkusz, który się nie zmienił, zachowuje swoją rewizję. Tabliczka rysunkowa każdego arkusza pokazuje jego rewizję.
5. Aby zobaczyć, co się zmieniło, wybierz **Zmiany od** obok wydania. Każdy arkusz ma status Bez zmian lub Zmieniony, wraz z dodanymi, zmienionymi i usuniętymi elementami na nim. Kliknij liczbę, aby zaznaczyć te elementy.
6. Wybierz **Dodaj wpis** dla polecenia na budowę, rysunku warsztatowego, zestawu adnotacji, dołączonego modelu lub notatki. Wskaż wydanie, którego dotyczy. Wybrany plik jest rejestrowany po nazwie, rozmiarze i SHA-256; plik pozostaje tam, gdzie był.
7. **Dziennik zmian rysunków** pokazuje jeden wiersz dla każdego arkusza i jedną kolumnę dla każdego wydania. **Pobierz dziennik zmian (CSV)** zapisuje go wraz z wydaniami i wpisami.
8. **Zapisz historię wydań** zapisuje plik `.issues.json`. MarkupCraft, TakeoffCraft i DetailCraft odczytują go za pomocą **Wczytaj historię wydań**.

## Warto wiedzieć

- Historia jest przechowywana w pliku IFC (zestaw właściwości `CadCraft_Issues` w projekcie). Inne programy ją ignorują.
- Arkusz uznaje się za zmieniony, gdy zmieniło się jego własne ustawienie albo gdy zmienił się element, który pokazuje: rzut pokazuje swój poziom, elewacja lub przekrój cały model, a zestawienie drzwi lub okien — swoje drzwi lub okna.
- Element uznaje się za zmieniony, gdy zmieniła się jego właściwość, położenie, rozmiar lub kształt.
- Aby zobaczyć dokładnie, która właściwość się zmieniła, otwórz zapisaną kopię wydanego modelu za pomocą **Porównaj wersje**.
- Usunięcie wydania zachowuje jego wpisy, ale bez wydania. Każdy krok to jedno Cofnij.
- Model z ponad 60,000 elementów nie zachowuje zapisu każdego elementu przy wydaniu. Arkusze są nadal porównywane.

## Jeszcze nie zbudowano

- Arkusze nie są zapisywane jako PDF razem z wydaniem.
- Chmura rewizji nie jest rysowana na własnych arkuszach BimCraft. Rejestruj chmury w MarkupCraft, przy wydaniu.
