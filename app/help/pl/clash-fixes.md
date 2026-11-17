---
title: Rozwiązywanie kolizji poprawkami każdej branży
summary: Z wyników kolizji panel Zaproponuj poprawki pokazuje dla każdej kolizji, co może zrobić każda branża — kanał objechany pod belką, rura przesunięta na bok, kolumna przesunięta, otwór w belce — każda poprawka wypróbowana na kopii modelu wraz z kompromisami, do zaakceptowania lub odrzucenia. Zaakceptowane poprawki trafiają jako jeden krok cofnięcia.
keywords: kolizja, poprawka kolizji, rozwiązywanie kolizji, koordynacja, proponowanie poprawek, objazd, przesunięcie, kanał, rura, korytko, belka, kolumna, otwór, tuleja, kompromis, branża, konstrukcja, instalacje mechaniczne, instalacje wodno-kanalizacyjne, elektryka, architektura, asystent
from: f7bafdd9
---

## Co zrobisz

Zamień listę kolizji w decyzje. Każda branża (konstrukcja, instalacje mechaniczne, wodno-kanalizacyjne, elektryczne, architektura) proponuje poprawki tylko dla swoich elementów, każda propozycja jest sprawdzana na kopii modelu, a ty wybierasz.

## Kroki

1. Najpierw uruchom sprawdzanie kolizji. Zobacz [Sprawdź kolizje](topic:clash-check) i [Sprawdź rury i kanały względem konstrukcji](topic:mep-against-structure).
2. Pod wynikami wybierz {{ui:Propose fixes}}. Obok modelu otworzy się panel **Proponowane poprawki**.
3. Dla każdej kolizji zobaczysz propozycje każdej branży, najlepsze na początku. Każda linia mówi, co robi i jakie ma kompromisy: czy rozwiązuje kolizję, ile nowych kolizji tworzy, jakie zasady łamie, ile trasy dodaje lub jak daleko się przesuwa, ile kształtek oraz wynik kosztu.
4. Wybierz {{ui:Show}}, aby zobaczyć elementy w 3D. Wybierz {{ui:Accept}} przy poprawce, którą chcesz (jedna na kolizję), albo {{ui:Reject}}.
5. Linia na dole mówi, co wszystkie zaakceptowane poprawki robią razem: ile kolizji jest rozwiązanych, ile zostało i czy coś nowego koliduje.
6. Wybierz {{ui:Apply accepted fixes (one undo step)}}. Sprawdzanie kolizji uruchamia się ponownie. {{ui:Undo}} cofa wszystkie naraz.

## Co może robić każda branża

- **Mechaniczna** (kanały, rury grzewcze i chłodnicze): objazd nad lub pod odcinkiem, który koliduje, podniesienie lub obniżenie całej trasy, przesunięcie w bok, spłaszczenie prostokątnego kanału przy tym samym przekroju.
- **Wodno-kanalizacyjna** (woda, kanalizacja, gaz, instalacje przeciwpożarowe): te same ruchy, z wyjątkiem tego, że przewód grawitacyjny nigdy nie dostaje objazdu; może być przesunięty tylko w całości, zachowując spadek.
- **Elektryczna** (korytka i rury instalacyjne): te same ruchy; korytko musi mieć 150 mm wolnej przestrzeni nad sobą, aby ułożyć kable.
- **Konstrukcja**: przesunięcie kolumny (do 300 mm) albo otworu w środniku belki lub w płycie dla przechodzącej trasy. Każda poprawka konstrukcyjna wymaga zatwierdzenia przez konstruktora.
- **Architektura**: tuleja w ścianie dla przechodzącej trasy albo przesunięcie ściany, o której wiadomo, że nie przenosi obciążeń.

## Czego się spodziewać

- Poprawki łamiące zasady są oznaczone: zbyt blisko odstępu 25 mm od czegoś innego, poniżej linii prześwitu 2,100 mm, otwór w środniku większy niż 40% wysokości belki lub zbyt blisko jej końców, belka, która zmieniłaby rozpiętość.
- Poprawki, które BimCraft może wykonać, są stosowane w modelu: trasy, które narysowałeś narzędziami Rura i Kanał, oraz kolumny, które narysowałeś. Pozostałe mają napis **Tylko zalecenie**: ich zaakceptowanie dodaje problem na karcie Problemy.

## Warto wiedzieć

- Poprawki pochodzą z wbudowanych reguł aplikacji; AI nie jest do nich używana.
- Jeśli podłączysz asystenta (zobacz [Pozwól asystentowi AI pracować z modelem](topic:assistants)), może odczytać kolizje i dodać własne propozycje dla jednej branży do otwartego panelu. Są sprawdzane w ten sam sposób, oznaczone nazwą asystenta, a nic nie zmienia się, dopóki ich nie zaakceptujesz i nie zastosujesz.
- Kopia jest sprawdzana z pudełkami wokół każdego elementu i każdego odcinka trasy, więc pochylona trasa może pokazać kolizję, której sprawdzanie kolizji nie pokazuje. Po zastosowaniu uruchom sprawdzanie kolizji ponownie: to ostateczny wynik.
- Limity (jak daleko trasa może się przesunąć, jak wysoko może wznieść się objazd, odstęp) to domyślne wartości zapisane w panelu.

## Dalej

- [Problemy i pliki BCF](topic:issues-bcf)
- [Rysuj trasy rur i kanałów](topic:pipes-and-ducts)
