---
title: "Dokumenty i rewizje (repozytorium)"
summary: "Przejście krok po kroku przez jedno prawdziwe zlecenie: umieść folder projektu z modelami IFC pod kontrolą, wyewidencjonuj model, zmień go, zaewidencjonuj z notatką, wyślij do przeglądu, zatwierdź i wydaj, zobacz historię i to, czego używa, co widzi druga osoba, gdy plik jest zablokowany, oraz jak to działa z folderami w chmurze."
keywords: repozytorium, dokumenty, przejście, poradnik, wyewidencjonowanie, zaewidencjonowanie, rewizja, wydanie, zatwierdzenie, blokada, historia, gdzie używane, ifc, model, folder w chmurze, folder projektu, dwie osoby, wspólny folder
from: 0a753f25
---

## Co zrobisz

Jesteś Ana, pracujesz nad Riverside Clinic z kolegą, Benem. Pliki IFC projektu leżą w jednym folderze, do którego oboje macie dostęp (wspólny dysk, folder synchronizowany albo folder w chmurze). Na końcu jeden plik przejdzie od pierwszej kopii do wydanej rewizji **A**, zostanie zmieniony ponownie jako **B.1**, zobaczysz, kto co zrobił, i zobaczysz, co widzi Ben, gdy trzymasz plik.

Wszystko jest trzymane w ukrytym folderze `.ccvault` obok twoich plików: bez serwera, nic nie jest wysyłane (wyjątkiem jest folder w chmurze, zob. ostatni krok). Wszystkie przyciski i reguły w jednym miejscu opisuje temat *Dokumenty: wyewidencjonowanie, rewizje i wydanie* tam, gdzie twoja aplikacja go ma.

## 1. Przygotuj folder projektu

1. Wybierz {{ui:Dokumenty}} obok {{ui:Otwórz folder}} na ekranie startowym albo {{ui:Dokumenty…}} w menu **Plik**.
2. Wybierz {{ui:Wybierz folder projektu}} i wskaż folder, który zawiera modele IFC projektu. (Foldery projektu działają w Studio i w przeglądarkach, które potrafią otworzyć folder, na przykład Chrome i Edge. W innych przeglądarkach panel to mówi.)
3. Wybierz {{ui:Zmiana}} obok **Ty:** i wpisz swoje imię, `Ana` (jeśli zapyta, także nazwę tego komputera). Panel pokazuje teraz *Ty: Ana na* i twój komputer. Twoje imię trafia na wszystko, co robisz.
4. Wybierz {{ui:Utwórz repozytorium w tym folderze}} i wpisz nazwę projektu, `Riverside clinic`. Panel pisze *Repozytorium uruchomione dla Riverside clinic.*

## 2. Przejmij plik pod kontrolę

1. Otwórz **Pliki poza repozytorium** i wybierz {{ui:Dodaj}} obok `models/House.ifc`.
2. Plik pojawia się pod **Pliki w repozytorium** w rewizji **A.1**, w stanie **Praca w toku**. A.1 to jego pierwsza kopia. Repozytorium trzyma kopię każdej rewizji.

## 3. Wyewidencjonuj, zmień, zaewidencjonuj

1. Wybierz {{ui:Otwarty}} obok `models/House.ifc`. Model otwiera się w BimCraft, a panel się zamyka, żebyś mógł go zobaczyć. Otwórz panel ponownie z {{ui:Dokumenty}}.
2. Otwórz panel ponownie i wybierz {{ui:Wyewidencjonuj}}. Wiersz pokazuje teraz **Wyewidencjonowany do ciebie**. Plik blokady został utworzony w `.ccvault/locks`. Nikt inny nie może wyewidencjonować tego pliku, dopóki go nie zaewidencjonujesz.
3. Zmień model: przesuń ścianę, dodaj drzwi. Zapis jest odrzucany, dopóki model nie jest wyewidencjonowany do ciebie, i podaje powód. {{ui:Zapisz jako}} zawsze działa dla kopii własnej.
4. Otwórz panel, wybierz {{ui:Zaewidencjonuj}} i wpisz, co się zmieniło (`Moved the door`). Panel pisze *zaewidencjonowano jako A.2*. Plik w folderze projektu to teraz model, który miałeś otwarty, a blokada znika. Zaewidencjonowanie bez zmian zachowuje rewizję.

Jeśli zmienisz zdanie, {{ui:Cofnij wyewidencjonowanie}} oddaje plik bez nowej rewizji.

## 4. Przegląd i wydanie

1. Wybierz {{ui:Wyślij do przeglądu}}. Stan zmienia się na **Do przeglądu**, a plik jest tylko do odczytu.
2. Przed zatwierdzeniem wybierz {{ui:Ustawienia projektu}} i wypisz, kto może zatwierdzać (jedno nazwisko w wierszu), na przykład `Ben` i `Carla`. Zaznacz regułę, że zatwierdzający musi być kimś innym niż autor. Wybierz {{ui:Zapisz ustawienia}}. Teraz samo repozytorium odmawia każdemu innemu.
3. Ben (albo Carla) wybiera {{ui:Zatwierdź}} i wpisuje nazwisko zatwierdzającego. Stan zmienia się na **Wydany**, a rewizja na **A**, z *zatwierdził* i nazwiskiem. Wydany plik jest tylko do odczytu. {{ui:Odeślij}} zwróciłoby go do stanu Praca w toku, z podaniem powodu.

Nazwisko zatwierdzającego to nazwa wpisana w panelu. Jest zapisem tego, kto podpisał, a nie dowodem tożsamości.

## 5. Nowa rewizja

1. Na wydanym pliku wybierz {{ui:Nowa rewizja}}. Rezerwujesz ją dla następnej litery.
2. Zmień plik, a potem wybierz {{ui:Zaewidencjonuj}}. Rewizja to **B.1**, praca w toku. Wydaj ją tak samo, a stanie się **B**. {{ui:Cofnij wyewidencjonowanie}} przed pierwszym zaewidencjonowaniem zostawia plik na **A**.

Litery rewizji idą A, B … Z, AA, AB. Jeśli twój standard pomija niektóre litery, ustawienie projektu *Use the ASME Y14.35 sequence* pomija I, O, Q, S, X i Z w kolejnych rewizjach.

## 6. Zobacz, co się stało

Wybierz nazwę pliku, aby otworzyć jego szczegóły:

- **{{ui:Historia}}**: każde zdarzenie, od najnowszego, z podaniem kto, na którym komputerze i kiedy: *Zaewidencjonowano A.2* przez Anę, *Wydano* przez Bena i tak dalej.
- **{{ui:Rewizje}}**: tabela rewizji. Każda zachowana rewizja z datą, kto ją zaewidencjonował, notatką i kto zatwierdził. Repozytorium trzyma kopię każdej w `.ccvault/revs`.
- **{{ui:Używa}}**: dokumenty, na które wskazuje model IFC.
- **{{ui:Używany przez}}**: lista wszystkich modeli w repozytorium, które wskazują ten plik.

## Modele wskazujące inne dokumenty

Model IFC, który wskazuje inne dokumenty w folderze (rysunki, zestawienia), pokazuje je pod **Używa**, a każdy z nich pokazuje model pod **Używany przez**. Zaewidencjonuj dokument, a zobaczysz, które modele się do niego odwołują.

## 7. Co widzi Ben, gdy trzymasz plik

Teraz wyewidencjonuj plik ponownie i poproś Bena, aby otworzył ten sam folder projektu na swoim komputerze i otworzył panel. W wierszu pliku zobaczy **Wyewidencjonowany przez Anę na** twoim komputerze **od** godziny i nie będzie mieć przycisku {{ui:Wyewidencjonuj}}. Jeśli mimo to spróbuje, repozytorium odmówi. Blokada to plik, którego system nie utworzy dwa razy, więc dwie osoby nie mogą trzymać pliku, nawet w tej samej ułamku sekundy, gdy folder leży na dysku w Studio. (W przeglądarce folder daje tylko najlepszą próbę, a panel to mówi pod **Folder**.)

Jeśli Ana jest nieobecna, a Ben potrzebuje pliku, {{ui:Przerwij wyewidencjonowanie}} go zwalnia. Musi wpisać powód. Trafia on do dziennika razem z informacją, czyje było wyewidencjonowanie. Gdy projekt wymienia administratorów, tylko oni mogą to zrobić. Wyewidencjonowanie starsze niż limit nieaktualności (domyślnie 14 dni) jest oznaczane jako *dawno temu*. Po przerwaniu późne zaewidencjonowanie Any zostaje odrzucone, więc nie możecie nadpisać sobie nawzajem pracy.

## 8. Foldery w chmurze

Folder w chmurze to folder projektu trzymany w chmurze twojego zespołu, więc zespół nie potrzebuje wspólnego dysku. W Studio, zalogowany na swoje konto CadCraft, panel pokazuje {{ui:Otwórz folder w chmurze}} obok {{ui:Wybierz folder projektu}}. Wybierz go i wskaż folder, wymieniony jako obszar roboczy / folder. Właściciel obszaru roboczego tworzy folder najpierw, a pamięć w chmurze zespołu musi być aktywna. Wszystko powyżej działa tak samo. Serwer tworzy blokadę, która jest ścisła między osobami. Jeśli nie jesteś zalogowany, panel prosi o zalogowanie. W zwykłej karcie przeglądarki przycisk chmury nie jest oferowany. Użyj Studio.

## Spróbuj

Wykonaj osiem kroków powyżej na kopii prawdziwego pliku. Do kroków dla dwóch osób potrzebujesz drugiej osoby albo dwóch okien z dwiema nazwami. Jeśli spróbujesz z prawdziwym wspólnym folderem, strona Testy społeczności wymienia sprawdzenie, które pyta dokładnie o to, i przyjmuje wyniki.
