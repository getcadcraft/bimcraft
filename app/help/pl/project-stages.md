---
title: Etapy projektu, od założeń do poleceń na budowie
summary: Zacznij od założeń z powierzchniami docelowymi i sprawdzaj, czy są spełnione podczas rysowania, porównuj warianty koncepcji z założeniami, łącz specyfikacje i szczegóły z typami, przeglądaj rysunki warsztatowe i zapisuj polecenia na budowie przy elementach.
keywords: założenia, zestawienie powierzchni, powierzchnia docelowa, spełniono, za mało, pomieszczenia, warianty koncepcji, warianty, bryła kubaturowa, budżet, specyfikacja, specyfikacja, szczegół, szczegół konstrukcyjny, typ, rysunek warsztatowy, przegląd, zatwierdź, ponowne złożenie, polecenie na budowie, rewizja, przyczyna, budowa, etap
from: 0a49b852
---

## Co zrobisz

Przejdziesz przez etapy projektu w jednym panelu: zapiszesz założenia klienta jako pomieszczenia z powierzchniami docelowymi, porównasz warianty koncepcji z założeniami, będziesz prowadzić specyfikację i szczegóły konstrukcyjne przypisane do właściwych typów, przeglądać rysunki warsztatowe w miarę ich zwrotu od wykonawców oraz zapisywać polecenia na budowie przy elementach, które zmieniają.

## Kroki

1. W lewym panelu otwórz **Etapy projektu**, a następnie **Założenia**.
2. Wklej pomieszczenia, po jednym w wierszu: `Living; 1; 30` oznacza jedno pomieszczenie o powierzchni 30 m². Liczbę można pominąć. Wybierz **Dodaj pomieszczenia**. Uzupełnij klienta, działkę, budżet, tolerancję i harmonogram, a następnie wybierz **Zapisz założenia**.
3. Rysuj ściany. Każde pomieszczenie utworzone przez ściany, które ma nazwę pomieszczenia z założeń (liczba po nazwie, np. „Sypialnia 2”, jest ignorowana), jest liczone. **Zestawienie powierzchni** pokazuje **Spełniono**, **Za mało**, **Za dużo** lub **Nie narysowano**, z różnicą w m².
4. Aby rozpocząć nowy projekt w ten sposób, wybierz **Rozpocznij nowy projekt na podstawie założeń**. Otworzy się nowy model, z jednego z zapisanych szablonów, jeśli go wybierzesz, i umieści założenia jako pierwszy krok.
5. Otwórz **Warianty względem założeń**. Każdy wariant bryły kubaturowej zapisany w modelu jest narysowany w jednej skali, z powierzchnią brutto, wymaganiami założeń i liczbą pomieszczeń z założeń, które się mieszczą. **Ułóż założenia tutaj** umieszcza pomieszczenia na kondygnacjach wariantu, od najniższej, i informuje, co się nie mieści. Koszt pochodzi wyłącznie z tabeli cen projektu; bez pasującego wiersza pokazuje „Brak stawki”.
6. Otwórz **Typy, specyfikacje i szczegóły**. Każdy typ ściany, drzwi, okna i stropu pokazuje, czy ma tekst specyfikacji, połączone z nim szczegóły oraz miejsca, w których specyfikacja, zestawienia i arkusze są ze sobą sprzeczne. **Połącz szczegół** dodaje plik DetailCraft lub CadCraft, adres albo arkusz tego modelu.
7. Otwórz **Rysunki warsztatowe**. Zaznacz w modelu elementy, które obejmuje rysunek warsztatowy, a następnie wybierz **Odbierz go**. Użyj **Zatwierdź**, **Z uwagami** lub **Popraw** z nazwiskiem recenzenta i notatką. **Ponownie złożono** tworzy kolejną rewizję tego samego zapisu i zachowuje historię przeglądów. Stan jest też zapisany przy każdym elemencie.
8. Otwórz **Polecenia na budowie**. Zaznacz elementy, podaj przyczynę oraz własnymi słowami opisz, jaki ma wpływ na koszt i czas, a następnie wybierz **Zarejestruj**. Po zarejestrowaniu problemu **Wyjaśnij zmiany od tego problemu** pokazuje, które zmienione elementy obejmuje polecenie, a które zmieniły się bez zapisanego wpisu.

## Warto wiedzieć

- Każdy krok można cofnąć jednym **Cofnij**. Nic nie jest odrzucane: założenie, którego nie spełniono, typ niezgodny z tekstem albo przeterminowany rysunek warsztatowy to ostrzeżenie lub uwaga w **Problemach**.
- Pomieszczenia z założeń to przestrzenie bez ścian. Mają wartość docelową, a nie narysowaną powierzchnię, więc zestawienia pomieszczeń i COBie nie liczą ich jako narysowanych pomieszczeń.
- Układ tylko rozdziela pomieszczenia na kondygnacje według powierzchni. Nie rysuje ścian.
- Tekst specyfikacji jest pisany w **Dokumentach** z modelu. Tutaj jest tylko porównywany z wymiarami samego modelu: nigdy nie jest za Ciebie dopisywany punkt normy.
- Rysunki warsztatowe i polecenia na budowie są zapisami w tej samej historii co panel **Problemy i rewizje**, dlatego oba panele je pokazują.
- Stan rysunku warsztatowego jest właściwością każdego elementu (`CadCraft_ShopDrawing`), a polecenie na budowie to `CadCraft_SiteInstruction`, więc **Znajdź** i **Koloruj wg właściwości** mogą ich używać.
- Oznaczenia sprawdzone na budowie (etap 7) są we **Właściwościach** w sekcji **Weryfikacja**.
