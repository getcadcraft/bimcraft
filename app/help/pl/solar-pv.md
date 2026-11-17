---
title: Układy paneli PV, zacienienie i uzysk
summary: Umieść układy paneli słonecznych na dachach lub na gruncie, oblicz ich zacienienie z modelu, oszacuj roczną energię, dobierz stringi i przygotuj dane schematu jednokreskowego. Wszystkie dane wejściowe są pokazane, a moduł startowy i straty są ogólne.
keywords: solar, fotowoltaika, pv, układ, moduł, dach, zacienienie, uzysk, kwh, kwp, dobór stringów, falownik, schemat jednokreskowy, jednokreskowy, nachylenie, azymut, odstęp między rzędami
from: adf4aaf3
---

## Co zrobisz

Otwórz panel **Solar PV**. Wybierz powierzchnię dachu (jej nachylenie i kierunek są odczytywane z modelu) albo ułóż układ na gruncie z nachyleniem i kierunkiem; moduły są dopasowane wewnątrz, z odsunięciami, i policzone, co daje moc DC w kWp. Umieszczenie układu zapisuje go w modelu jako urządzenia solarne, w jednym kroku cofnięcia.

## Zacienienie, uzysk i stringi

- **Zacienienie** puszcza promień z każdego modułu w stronę słońca, dla typowych dni każdego miesiąca, względem własnej geometrii modelu, więc sąsiednie budynki, attyki i rzędy przed nim się liczą. Zmniejszane jest tylko bezpośrednie światło słoneczne, a częściowo zacieniony układ traci moc proporcjonalnie.
- **Uzysk** podaje kWh na miesiąc i rok, kWh na kWp oraz współczynnik sprawności (performance ratio). Nasłonecznienie pochodzi z miesięcznych sum dla powierzchni poziomej, jeśli zostaną wpisane. Bez nich panel używa górnego oszacowania dla bezchmurnego nieba i to podaje. **Pobierz klimat z NASA POWER** przyciskiem na karcie Uzysk: wysyła tylko szerokość i długość geograficzną terenu, jednorazowo, a odpowiedź zostaje na tym komputerze (sprawdzone z przeglądarki 2026-10-30). PVGIS nie pozwala stronie internetowej odczytać swojej odpowiedzi, więc karta podaje link, który otwiera miesięczne dane PVGIS dla terenu w nowej karcie; wklej to, co pokazuje, do pola, a dwanaście miesięcy wypełni się samo.
- **Stringi** sprawdza moduły w każdym stringu względem zakresu napięcia falownika w najzimniejszym i najcieplejszym dniu oraz równoległe stringi względem jego prądu.
- **Schemat jednokreskowy** tworzy dane schematu (układ, łącznica, rozłącznik, falownik, panel, sieć) z przekrojami przewodów i bezpieczników dobranymi z podanych współczynników. To dane i SVG; dodatek Elektryka w CadCraft może umieścić je jako symbole.

Moduł, falownik, straty i współczynniki przewodów dołączone do BimCraft są ogólnymi przykładami, oznaczonymi w każdym wyniku. Wpisz dane producenta i wartości norm, do których projektujesz, a projekt niech sprawdzi osoba, która za niego odpowiada.
