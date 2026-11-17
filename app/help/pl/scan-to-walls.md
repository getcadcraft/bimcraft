---
title: Ściany i drzwi ze skanu telefonem lub skanu laserowego
summary: Zamień skan pomieszczenia w proponowane ściany, drzwi i pomieszczenia, które akceptujesz pojedynczo.
keywords: skan, skan telefonem, lidar, chmura punktów, ściany ze skanu, drzwi ze skanu, skan pomieszczenia, ply, e57, las, obj, sugeruj
from: a4ef0f10
---

## Co robi

Gdy skan jest otwarty (chmura punktów, na przykład PLY, E57 lub LAS, albo siatka, na przykład OBJ), BimCraft przecina skan na wysokości rzutu, ustawia go prostopadle do budynku i szuka długich, cienkich serii punktów: to są ściany. Przerwa o szerokości drzwi między dwiema seriami na jednej linii staje się jedną ścianą z drzwiami. Ściany zamykające przestrzeń tworzą pomieszczenie.

Nic nie jest rysowane, dopóki tego nie zaakceptujesz. Ściany i drzwi pojawiają się jako lista propozycji (są to zmiany w trybie Sugeruj): zachowaj poprawne, odrzuć pozostałe, a wszystko, co zachowasz, zostanie narysowane jednym krokiem cofnięcia. Pomieszczenia pojawiają się same.

## Co sprawdza

Ściany, które się nie zamykają, serie ścian krótsze niż grubość ściany oraz luka wielkości drzwi bez ściany wokół są zgłaszane jako Problemy z położeniem, abyś mógł obejrzeć skan w tym miejscu.

## Niezweryfikowane do sprawdzenia

Ściany, drzwi i pomieszczenia zaakceptowane ze skanu są oznaczone jako niezweryfikowane: przerywana ramka i znak „?” w planie, dopóki nie oznaczysz ich jako sprawdzone. Zobacz [Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie](topic:verification).

## Czego nie potrafi

- Znajduje ściany biegnące w dwóch prostopadłych kierunkach. Ściany ukośne lub zakrzywione nie są znajdowane.
- Jedna kondygnacja naraz. Okna nie są znajdowane (okno jest tylko przerwą, gdy przekrój biegnie na wysokości parapetu).
- Testowano je na wygenerowanych skanach pomieszczeń i siatkach, jeszcze nie na skanach z prawdziwego telefonu. Nie wiadomo, jak dobrze działa na prawdziwym skanie (dryf podczas długiego przejścia, meble przy ścianach, szkło, otwarte drzwi); dostrajanie na prawdziwych skanach to następny krok. Sprawdź każdą propozycję względem skanu, zanim ją zaakceptujesz.
