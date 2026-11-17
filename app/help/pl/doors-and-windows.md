---
title: "Drzwi i okna"
summary: "Umieszczaj drzwi i okna w narysowanych ścianach: wskaż ścianę, zobacz kierunek otwierania i odległości od narożników, kliknij. Otwór w ścianie wycina się sam."
keywords: drzwi, okno, otwór, otwieranie, zawias, strona, odwróć, drzwi przesuwne, drzwi kieszeniowe, brama garażowa, drzwi dwuskrzydłowe, uchylno-rozwierne, przesuwne, okno stałe, parapet, nadproże, składane, drzwi do szafy, drzwi francuskie, drzwi stodolowe, boczne przeszklenia, drzwi wejściowe, uchylne, okno panoramiczne, nadświetle
from: 4d8ac009
---

## Co zrobisz

Umieść drzwi i okna w ścianach, które narysowałeś ([Rysowanie ścian](topic:draw-walls)). Wskaż ścianę, a drzwi lub okno pokażą, gdzie by weszły, w którą stronę się otwierają i jak daleko są od każdego narożnika. Kliknij, a otwór sam wytnie się w ścianie na planie i w 3D.

## Umieść drzwi

1. Przy włączonym {{ui:Rysuj}} kliknij {{ui:Drzwi}} (albo naciśnij {{key:D}}).
2. Wybierz typ: **Drzwi jednoskrzydłowe**, **Drzwi dwuskrzydłowe**, **Drzwi przesuwne**, **Drzwi kieszeniowe**, **Brama garażowa**, **Drzwi składane do szafy**, **Drzwi francuskie**, **Drzwi stodolowe (na ścianie)** albo **Drzwi wejściowe z bocznym przeszkleniem**. Jego zwykły rozmiar wypełnia **W** i **H**. Wybierz inny z listy rozmiarów obok albo wpisz własne, na przykład `2'-8"` lub `800`. Lista oferuje też rodziny drzwi tego modelu (zob. [Rodziny i ich rozmiary](topic:families)).
3. Wskaż ścianę. Symbol drzwi podąża za wskaźnikiem wzdłuż ściany, a odległość od każdego końca tej powierzchni ściany pokazuje się na planie.
4. Drzwi otwierają się w stronę ściany, po której jest wskaźnik. Naciśnij {{key:H}} (albo kliknij {{ui:Odwróć}}), aby przenieść zawiasy na drugi koniec.
5. Kliknij. Drzwi są umieszczone, a narzędzie zostaje włączone na następne. Wskaż środek ściany, a drzwi wyśrodkują się same.

Aby umieścić je w dokładnej odległości, wskaż ścianę blisko narożnika, od którego mierzysz, wpisz odległość (na przykład `2'` albo `600`) i naciśnij {{key:Enter}}. Odległość biegnie od bliższego końca powierzchni ściany do krawędzi drzwi.

## Umieść okno

1. Kliknij {{ui:Okno}} (albo naciśnij {{key:N}}).
2. Wybierz typ: **Okno stałe**, **Okno jednoskrzydłowe podwieszane**, **Okno dwuskrzydłowe podwieszane**, **Okno uchylno-rozwierne**, **Okno przesuwne**, **Okno uchylne**, **Okno panoramiczne** albo **Nadświetle**, a także jego **W**, **H** i **Parapet** (wysokość dolnej krawędzi okna nad podłogą).
3. Wskaż ścianę i kliknij albo wpisz odległość i naciśnij {{key:Enter}}, jak przy drzwiach. Okno siedzi po zewnętrznej stronie ściany.

## Przenoszenie, odwracanie, usuwanie

- Przy włączonym {{ui:Zaznacz}} przeciągnij drzwi lub okno wzdłuż ściany. Przeciągnij je na inną ścianę, aby przenieść je tam.
- {{key:Delete}} usuwa wybrane drzwi i okna. Ściana się zamyka.
- Przeniesienie lub usunięcie ściany przenosi lub usuwa to, co w niej jest. Gdy początek ściany przesuwa się wzdłuż własnej linii, jej drzwi i okna zachowują swoje miejsce.
- {{ui:Cofnij}} i {{ui:Ponów}} cofają i przywracają każde umieszczenie, przeniesienie lub usunięcie.

## Co zostaje odrzucone

- **Nie mieści się w tej ścianie.** Drzwi lub okno są szersze niż ściana albo wystawałyby z jej końca. Spróbuj krótszej szerokości albo dłuższej ściany.
- **Jest wyższe niż ściana.** Parapet plus wysokość są ponad górną krawędzią ściany.

## Co jest zapisywane

Każde drzwi lub okno to drzwi IFC lub okno IFC z rozmiarem, sposobem otwierania (na przykład jednoskrzydłowe, lewe), typem rozmiaru (jeden typ dla każdego rozmiaru swojej rodziny), `Pset_DoorCommon` lub `Pset_WindowCommon` i podstawowymi wielkościami, wypełniając otwór IFC w swojej ścianie. Powierzchnia netto boku ściany i objętość pomijają otwór. Inne programy BIM otwierają je jako drzwi w ścianie.

## Dobrze wiedzieć

- Plan pokazuje drzwi otwarte pod kątem 90° z ich kierunkiem, drzwi przesuwne jako dwa skrzydła, drzwi kieszeniowe wsuwające się w ścianę, bramy garażowe jako linię przerywaną nad głową, a okna z ich ramą i liniami szkła.
- Szerokość to pełna szerokość ramy. Skrzydło drzwi to szerokość minus dwie ościeżnice.
- Kopiowanie narysowanych drzwi i okien nie jest jeszcze zbudowane. Umieść kolejne.

## Okno ewakuacyjne z piwnicy z wykopem

Wybierz **Okno ewakuacyjne z piwnicy z wykopem** na liście typów okien. Zaczyna jako uchylno-rozwierne 36 × 48 inch z parapetem 36 inch nad poziomem. Wykop jest po zewnętrznej stronie ściany, z co najmniej 48 inch wolnej szerokości, wysunięciem 36 inch i dnem 6 inch poniżej parapetu. Na planie pojawia się jako linie przerywane, a w 3D jako trzy boki bez góry. Wykop jest częścią bryły IFC okna, więc zapis, przesunięcie, zmiana rozmiaru lub usunięcie okna zabiera go ze sobą. Zmiana rozmiaru zachowuje co najmniej 6 inch z każdej strony ościeżnicy.

To domyślne wartości modelowania, a nie certyfikat zgodności z wymaganiami ewakuacji. Sprawdź osobno rzeczywisty światły otwór producenta, lokalne wymagania, poziom terenu, odwodnienie i wymaganą drabinę. Głębokość i wysokość wykopu to ustawione wymiary. Nie dopasowują się do terenu.
