---
title: Sprawdź ogrzewanie i chłodzenie w EnergyPlus
summary: Zapisz model jako plik EnergyPlus albo uruchom na nim EnergyPlus w wersji 26.2.0 w przeglądarce i porównaj jego obciążenia projektowe z szybką pomocą do ogrzewania i chłodzenia. Druga opinia na wczesnym etapie projektu, a nie obliczenie zgodności z przepisami.
keywords: energyplus, symulacja energetyczna, dzień projektowy, obciążenie grzewcze, obciążenie chłodnicze, plik pogodowy, epw, idf, masa termiczna, roczne zużycie energii, symulacja
from: b82a5bf2
---

## Co zrobisz

Panel **Sprawdź w EnergyPlus** zapisuje otwarty model jako plik wejściowy EnergyPlus (IDF): jedną strefę na pomieszczenie, ściany, podłogi, dachy i okna z ich współczynnikami U, wymianę powietrza oraz idealne ogrzewanie i chłodzenie. Zawsze możesz **zapisać ten plik** i uruchomić go we własnym EnergyPlus.

Jeśli także skonfigurujesz silnik, panel może wykonać symulację od razu i wyświetla projektowe obciążenia grzewcze i chłodnicze z EnergyPlus obok szybkiej pomocy, pomieszczenie po pomieszczeniu.

To narzędzie wspomagające projektowanie. Przepisy energetyczne, certyfikacja i pozwolenia wymagają zatwierdzonego narzędzia i danych klimatycznych, których ono wymaga, a wynik musi przejrzeć osoba, która za niego odpowiada.

## Konfiguracja silnika

BimCraft nie zawiera EnergyPlus. To duża kompilacja WebAssembly (około 6 MB po kompresji, plus plik danych 4.6 MB), więc hostujesz ją sam i wpisujesz jej adres w panelu. Strona ładuje ją dopiero po naciśnięciu przycisku symulacji, nigdy przy uruchomieniu. Adres musi być https, ścieżką na tej stronie albo localhost.

## Dni projektowe lub rok

- **Symuluj dni projektowe** nie wymaga pliku pogodowego. Uruchamia zimowy dzień bez słońca i gorący, pogodny dzień letni, przy temperaturach z danych ogrzewania i chłodzenia na karcie Światło dzienne, i podaje obciążenie każdego pomieszczenia w watach.
- **Symuluj rok** wymaga pliku pogodowego w formacie EPW, który wybierasz. Dodaje ludzi, oświetlenie i urządzenia z tych samych danych (zawsze włączone, bo nie wymyślono harmonogramu) i podaje zużycie energii na ogrzewanie i chłodzenie każdego pomieszczenia w kWh. Pliki pogodowe mają własne licencje, więc używaj takiego, z którego wolno Ci korzystać.

## Masa termiczna

Zaznacz **Nadaj ścianom o znanych warstwach masę termiczną**, a ściany, dachy i podłogi, których warstwy materiałów są znane, zostaną zapisane warstwa po warstwie, z gęstością i ciepłem właściwym pobranymi z krótkiej tabeli typowych wartości według nazwy materiału. Warstwy są brane najpierw od zewnątrz, w kolejności, w jakiej podaje je plik. Elementy bez warstw pozostają przy swoim współczynniku U, bez masy.

## Odczytywanie porównania

Obie metody odpowiadają na nieco inne pytania. Szybka pomoc uwzględnia każdy element; plik EnergyPlus uśrednia współczynniki U każdego pomieszczenia według rodzaju powierzchni. Różnica powyżej 15 % w projektowym ogrzewaniu pomieszczenia jest wymieniona jako uwaga w panelu ⚠, z obiema wartościami. Chłodzenie różni się bardziej z założenia: szybka pomoc wyznacza szczyt z nasłonecznienia w jednej dacie, a EnergyPlus dobiera wymiary na własnym dniu projektowym.
