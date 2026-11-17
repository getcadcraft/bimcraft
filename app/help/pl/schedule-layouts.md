---
title: Układ, zapis i eksport zestawienia
summary: Pogrupuj zestawienie, dodaj mu podsumowania i sumy, dodaj kolumnę odczytywaną z właściwości, zapisz je jako konfigurację w pliku i wyeksportuj jako skoroszyt arkusza kalkulacyjnego (.xlsx), jako tekst do wklejenia w arkuszu online albo jako CSV. Standard biura uzupełnia to, czego zestawienie nie określa.
keywords: układ zestawienia, grupuj według, podsumowanie, suma, nagłówki, standard biura, domyślne zasady, konfiguracja, zestawienie drzwi wg kondygnacji, klasa odporności ogniowej, okucia, xlsx, skoroszyt, arkusz online, wklej, csv, eksport, arkusz kalkulacyjny, elementy, zaznacz z zestawienia, wartość
from: 95dfd801
---

## Co zrobisz

Zamień zwykłe zestawienie w to, które wydaje Twoje biuro: pogrupowane według poziomu, typu lub pomieszczenia, z podsumowaniami i sumą, z potrzebnymi kolumnami, pod własną nazwą. Następnie wyślij je do arkusza kalkulacyjnego. Każdy wiersz i każda wartość nadal wie, z jakich elementów pochodzi.

## Kroki

1. Włącz {{ui:Rysuj}} i otwórz **Zestawienia** w lewym panelu. Wybierz zestawienie, na przykład **Drzwi**.
2. Nad tabelą wybierz **Grupuj według** (kolumnę zestawienia, na przykład Poziom lub Typ, albo **Bez grupowania**) oraz **Sumy** (**Bez sum**, **Jedna suma** albo **Podsumowania i suma**). **Jak ustawiono** pozostawia wybór zapisanej konfiguracji lub standardowi biura.
3. Aby dodać kolumnę odczytywaną z elementów, wpisz pod tabelą nazwę właściwości lub etykiety (na przykład `FireRating`, `Pset_DoorCommon.FireRating` albo nazwę etykiety, na przykład `Ironmongery`) i kliknij **Dodaj kolumnę**. BimCraft najpierw odczytuje zestawy właściwości samego elementu, a potem jego typu. Gdy żaden element nie ma jeszcze wartości, pokazuje to; kolumna wypełni się sama, gdy wartość zostanie ustawiona.
4. Wpisz nazwę (na przykład „Zestawienie drzwi wg kondygnacji”) i kliknij **Zapisz jako konfigurację**. Konfiguracja jest przechowywana w pliku budynku i dołącza do listy zestawień pod swoją nazwą. Podąża za każdą zmianą modelu. **Usuń tę konfigurację** ją usuwa. Oba działania to jeden krok cofnięcia.

## Kliknij wartość, aby zaznaczyć jej źródło

Kliknij dowolny wiersz lub dowolną wartość, aby zaznaczyć stojące za nią elementy w planie i w 3D:

- wiersz zaznacza elementy tego wiersza;
- podsumowanie lub suma zaznacza wszystko, co sumuje; nagłówek grupy zaznacza jej grupę;
- wartość z własnymi elementami zaznacza je: **Odliczenia** typu ściany zaznaczają jej drzwi i okna, powierzchnia ścian pomieszczenia zaznacza jego ściany.

To samo działa w dokumencie utworzonym z modelu: w podglądzie kliknij wartość zestawienia.

## Eksport

- **Pobierz Excel** zapisuje skoroszyt .xlsx. Długości, powierzchnie, objętości i liczby są rzeczywistymi liczbami w jednostce pokazanej w kolumnie (stopy i cale pozostają tekstem). Drugi arkusz, **Elementy**, wymienia dla każdego wiersza GlobalId stojących za nim elementów.
- **Kopiuj dla Google Sheets** umieszcza zestawienie w schowku jako tekst rozdzielany tabulatorami. W arkuszu Google kliknij komórkę A1 i wklej. **Otwórz nowy arkusz Google** otwiera `sheets.new`, własny adres Google dla pustego arkusza, na Twoim koncie Google. BimCraft nie loguje się do Google i niczego tam nie wysyła: wklejenie należy do Ciebie.
- **Pobierz CSV** zapisuje tabelę tak, jak jest ułożona na ekranie.

## Standard biura

Biuro może raz określić, jak układane są jego zestawienia. Włącz dodatek **Domyślne zasady** ([Domyślne zasady](topic:default-policies)) i ustaw w **Ustawienia › Globalne › Domyślne zasady › Układ zestawienia (standard biura)**:

| Zasada | Co robi |
|---|---|
| Grupuj zestawienia wg | Poziom, Typ, Pomieszczenie lub brak grupowania, dla każdego zestawienia, które ma taką kolumnę |
| Sumy w zestawieniach | Brak sum, jedna suma na końcu albo podsumowanie pod każdą grupą i suma |
| Tytuł zestawienia | Wzorzec, na przykład `{project}: {schedule}` |
| Nagłówki kolumn | Jak napisano, WIELKIMI LITERAMI lub Każde Słowo Wielką Literą |

Standard obowiązuje każde zestawienie, bez względu na to, kto je ustawia: zwykłe zestawienia w panelu, zapisaną konfigurację, zestawienie ustawione przez asystenta, eksporty i zestawienia w dokumencie. Konfiguracja, która określa własne grupowanie, sumy lub tytuł, je zachowuje; standard uzupełnia resztę. Panel informuje, które części ustawił standard biura. Zasady są przenoszone w pliku Domyślne zasady razem z innymi.

## Warto wiedzieć

- Konfiguracja nazywa swoje zestawienie źródłowe i kolumny; nie przechowuje liczb. Liczby są za każdym razem odczytywane z modelu.
- Listy, które nie są wierszami elementów (zestawy ścian i legenda materiałów), nie mają tutaj układu ani eksportu.
- Asystent może zrobić to wszystko: zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants).
