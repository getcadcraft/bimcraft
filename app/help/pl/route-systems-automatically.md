---
title: Automatycznie prowadź kanały, odpływy, rury wodne i czynnika chłodniczego
summary: W sprawdzeniu kolizji BimCraft znajduje drogę wokół otwartego modelu dla kanałów, kanalizacji grawitacyjnej, zimnej i ciepłej wody oraz rur czynnika chłodniczego split lub multi-split, i rysuje przebiegi z kształtkami jednym krokiem cofnięcia. Pomoc projektowa: wymiary, spadki i sprawdzenia pochodzą z tabel w programie i liczb, które wpisujesz; nic tu nie oznacza, że projekt spełnia przepisy.
keywords: automatyczne prowadzenie, autoroute, prowadzenie kanałów, prowadzenie rur, kanalizacja, sanitarne, grawitacyjne, pion, wentylacja, syfon, woda, ciepła woda, pętla powrotna, cyrkulacja, czynnik chłodniczy, split, multi-split, VRF, długość zastępcza, zestaw odgałęzienia, trójnik ukośny
from: 5841d513
---

## Co zrobisz

Pozwolisz BimCraft ułożyć sieć przewodów między przyłączami, które już stoją w modelu, omijając ściany i belki, a następnie sprawdzisz ją na liczbach, które widzisz.

## Kroki

1. Otwórz model i sprawdzenie kolizji. W **Automatycznie prowadź kanały** wybierz centralę i jej nawiewniki, albo w **Automatycznie prowadź inne systemy** wybierz system.
2. **Kanalizacja sanitarna grawitacyjna.** Wpisz położenie odpływu i, jeśli je znasz, położenia pionów. Zaznacz **Prowadź wszystkie kondygnacje naraz**, aby objąć każdą kondygnację z urządzeniami: odpływy każdej kondygnacji łączą się z pionem na jej poziomie, a pion biegnie od punktu powyżej najwyższej baterii aż do swojej podstawy. Naciśnij {{ui:Prowadź}}.
3. **Syfon do wentylacji.** Panel wypisuje odległość od każdego syfonu do jego wentylacji. Wpisz największą wartość dopuszczoną przez twoje przepisy w polu **Największa odległość od syfonu do wentylacji**; każde urządzenie przekraczające ją jest wypisane jako niewykonane, z podaniem nadwyżki w milimetrach. Zaznacz **Wentylacja przez pion**, gdy urządzenia nie mają własnego odcinka wentylacyjnego: odległość mierzy się wtedy do pionu. BimCraft nie zawiera tabeli przepisów dla tego: wpisujesz liczbę sam.
4. **Zimna i ciepła woda.** Wybierz źródło, wpisz ciśnienie u źródła i ciśnienie potrzebne przy urządzeniu. Zaznacz **Ciepła woda**, wybierz przyłącze ciepłe podgrzewacza i zaznacz **Pętla powrotna**, aby zakończyć przewód powrotny na przyłączu **hot-return** podgrzewacza albo na innym wybranym przez ciebie przyłączu (wtedy przewód kończy się 150 mm przed nim, otwarty, abyś mógł go połączyć).
5. **Split, multi-split i VRF.** Wybierz jednostkę zewnętrzną, zaznacz jednostki wewnętrzne i wpisz wydajność każdej z nich. Wpisz ograniczenia z danych producenta. Wpisz **długość zastępczą** kolanka i zestawu odgałęzienia (wartości producenta); najdłuższa i całkowita długość zostaną sprawdzone na podstawie długości zastępczych.
6. Naciśnij {{ui:Prowadź}}. Panel podaje, ile przewodów narysował, oraz to, czego nie udało się zrobić, i dlaczego. {{ui:Cofnij}} cofa wszystko jednym krokiem.

## Czego się spodziewać

Rury z kolankami, trójnikami i redukcjami; odpływy, które opadają co najmniej o najmniejszy spadek dla swojego rozmiaru; odcinki wentylacyjne przy urządzeniach; przewody czynnika chłodniczego jako para cieczowa i gazowa, która skręca tak samo na każdym zakręcie, z zestawem odgałęzienia zaznaczonym tam, gdzie odgałęzienie odchodzi od pnia.

## Warto wiedzieć

- Gdy odpływ łączy się z innym odpływem, model rysuje trójnik. Plan nazywa te miejsca połączeniami ukośnymi pod 45 stopni, abyś mógł zmienić kształtkę.
- Ciepła woda używa własnego przyłącza ciepłego urządzenia, gdy jego rodzina je ma, a przyłącza 100 mm obok zimnego, gdy nie ma.
- Przewody czynnika chłodniczego zaczynają się między dwoma portami każdej jednostki. Gdy porty jednostki stoją zbyt blisko na kolano, para pozostaje wyśrodkowana między nimi.
- Sieć wodna korzysta z krzywej zapotrzebowania i współczynników tarcia pokazanych w obliczeniach; zastąp je wartościami z twoich przepisów, zanim polegasz na ciśnieniach.
- Duże domy mogą potrzebować pół minuty lub więcej, głównie przez sieć ciepłej wody.
- To jest pomoc projektowa. Osoba z uprawnieniami sprawdza wymiary, spadki, wentylację i ciśnienia według obowiązujących przepisów.

## Dalej

[Sprawdź kolizje](topic:clash-check) · [Sprawdź rury i kanały względem konstrukcji](topic:mep-against-structure) · [Połączenia między rurami a urządzeniami](topic:mep-connections)
