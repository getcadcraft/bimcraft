---
title: Punkty do tyczenia i kontrola powykonawcza
summary: Numeruj miejsca, które ekipa wytycza z modelu – środki słupów, końce ścian, kotwy, tuleje, dowolne wybrane elementy – zapisz je dla tachimetru, a potem wczytaj punkty powykonawcze zmierzone przez ekipę i zobacz, co jest poza tolerancją.
keywords: punkty tyczenia, tyczenie, wytyczanie, tachimetr, pomiar, plik punktów, csv, txt, pnezd, penzd, xyz, północ, wschód, wysokość, powykonawczy, kontrola, tolerancja, odchyłka, kotwy, środki słupów, końce ścian, tuleje, współrzędne pomiarowe, przeliczenie na układ mapy
from: acea9606
---

Karta {{ui:Punkty}} po prawej stronie tworzy punkty, które ekipa wytycza na placu z otwartego modelu, i sprawdza punkty, które zmierzy potem.

## Tworzenie punktów

1. Otwórz model IFC i kartę {{ui:Punkty}}.
2. Zaznacz, co wytyczać: **środki słupów** (podstawa osi każdego słupa), **końce ścian** (oba końce osi każdej ściany, przy jej podstawie), **kotwy**, **tuleje** (elementy, których nazwa lub typ wskazuje na sleeve), oraz **wybrane elementy** (każdy w punkcie umieszczenia – najpierw wybierz je w widoku).
3. Wybierz pierwszy numer i prefiks, współrzędne, jednostki, kolumny i plik:
   - **Model**: własne współrzędne pliku. **Siatka geodezyjna**: siatka mapy georeferencji modelu (pokazywana tylko wtedy, gdy IFC ma przeliczenie na układ mapy), w metrach albo w wybranej jednostce.
   - Kolumny **PNEZD** (punkt, północ, wschód, wysokość, opis), **PENZD** lub **XYZ**; **CSV** (przecinki) lub **TXT** (tabulatory).
4. Naciśnij {{ui:Utwórz punkty}}: lista je pokazuje, a widok zaznacza je na niebiesko. {{ui:Pobierz punkty}} zapisuje plik.

Punkty mają stałą kolejność – według rodzaju, a potem w wierszach po planie – więc utworzenie ich ponownie z tego samego modelu daje te same liczby. Plik jest tym, który otwiera CivilCraft i który zapisuje polecenie EXPORTPOINTS w CadCraft: jeden punkt w wierszu, trzy miejsca po przecinku, opis w cudzysłowie, gdy zawiera przecinek.

## Sprawdzanie punktów powykonawczych

Gdy ekipa odeśle zmierzone punkty, wybierz **tolerancję** w milimetrach i sposób parowania punktów – według **numeru punktu** (zachowali twoje numery) albo według **najbliższego pomiaru** – i naciśnij {{ui:Odczytaj punkty powykonawcze…}}. Odczytaj plik w tych samych jednostkach i współrzędnych, w których go zapisałeś.

Każdy punkt projektowy jest wtedy **w tolerancji**, **poza tolerancją** albo **nie zmierzony**, a każdy pomiar, o który nikt nie prosił, to **dodatkowy**. Tabela podaje różnice w jednostce wybranej na pasku narzędzi, stopy pokazane jako cale dziesiętne (zmierzone minus projektowe: wschód, północ, wysokość i odległość w rzucie); widok zaznacza każdy punkt na zielono lub czerwono z linią do pomiaru, a na szaro, gdy nie został zmierzony. {{ui:Raport (CSV)}} zapisuje całe porównanie.

Nic tutaj nie zmienia modelu. Jeszcze nie zbudowano: tyczenia od krawędzi płyt, przecięć siatki czy otworów wykonywanych za ciebie oraz wysyłania punktów bezpośrednio do przyrządu – użyj pliku.
