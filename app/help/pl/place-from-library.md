---
title: Umieszczanie sprzętu i mebli z biblioteki
summary: Znajdź element w Bibliotece, w pliku lub w otwartym rysunku, umieść go na kondygnacji modelu IFC z podglądem typu duch, obróć, przyciągnij do ściany i zapisz.
keywords: przesuń, obróć, przeciągnij, biblioteka, librarycraft, umieść, wstaw, sprzęt, meble, blok, rodzina, element, katalog, zawartość, kcl, csv, gltf, obj, rfa, dwg, typ ifc
from: 3dad5d4b
---

## Co zrobisz

Umieść element biblioteki w modelu IFC: zlew, stół roboczy, krzesło. BimCraft zapisuje go jako właściwy element IFC z typem, więc każda kopia tego samego elementu dzieli jedną geometrię, a jego dane, numer pozycji i licencja są przenoszone razem z nim.

## Kroki

1. Otwórz model IFC.
2. Kliknij kartę {{ui:Biblioteka}} obok {{ui:Właściwości}} po prawej albo {{ui:Biblioteka}} na pasku narzędzi nad modelem.
3. Wybierz źródło:
   - **Symbole wbudowane**: ogólne symbole planu instalacji dołączone do BimCraft na licencji Apache-2.0, dostępne offline. Sprawdź ich wymiary przed budową. Dla symboli elektrycznych planu i urządzeń elektrycznych IFC użyj **Kompilacja › Elektryczne**.
   - **Biblioteka**: biblioteka CadCraft na tej stronie. Publiczne elementy nie wymagają logowania.
   - **Ten plik**: bloki otwartego rysunku DWG lub DXF. Blok dynamiczny ze stanami widoczności jest oferowany raz na stan, nazwany „Zlew: Podwójna komora”, każdy narysowany tylko z obiektami tego stanu.
   - **Pliki…**: plik DWG, DXF, IFC, glTF/GLB, OBJ, RFA lub CSV na Twoim komputerze. Jest odczytywany w tej karcie; nic nie jest wysyłane.
   - **Inne źródła**: inna biblioteka mówiąca tym samym formatem źródła. Dodaj jej adres raz; jest zapisywany w tej przeglądarce.
4. Wpisz lub wybierz kategorię, potem kliknij kartę. Karta pokazuje podgląd planu, nazwę, producenta i model, licencję oraz wersję.
5. Kliknij {{ui:Umieść w planie}} (w widoku Plan) albo {{ui:Umieść w modelu}} (w widoku 3D). W trybie Podziel, gdy plan i widok 3D są widoczne razem, przycisk jest przyciskiem podzielonym: jego główne działanie to {{ui:Umieść w planie}}, a strzałka na jego prawym końcu otwiera menu z {{ui:Umieść w modelu}}. Możesz też przeciągnąć kartę albo zdjęcie w szczegółach elementu na plan lub widok 3D: element zostanie umieszczony tam, gdzie puścisz. Piórem lub palcem przytrzymaj kartę przez chwilę, a potem przeciągnij.
6. Wybierz kondygnację na pasku umieszczania. W widoku 3D kondygnacje powyżej niej są ukryte podczas umieszczania, a widok obraca się na górę; na planie plan już pokazuje tę kondygnację. Wybór {{ui:Umieść w modelu}} z samego planu otwiera obok widok 3D.
7. Przesuń wskaźnik nad model: przezroczyste pudełko pokazuje, gdzie trafi element.
8. Naciśnij {{key:R}}, aby obrócić o 90°. Naciśnij {{key:Tab}} (lub {{ui:Przyciąganie do ściany}}), aby przyłożyć jego tył do najbliższej ściany, zwrócony do pomieszczenia.
9. Kliknij, aby umieścić. Albo wpisz położenie w polu **X, Y (mm)**, na przykład `1200, 3400`, i naciśnij {{key:Enter}}.

Lampę lub cokolwiek zawieszonego z góry: ustaw **Montaż** na **Przy suficie**. Górna część elementu znajdzie się wtedy przy spodzie sufitu nad miejscem (albo na wysokości poziomu, gdy sufitu nie ma). Przy planie sufitu w widoku planu **Montaż** zaczyna się od **Przy suficie**.

10. Odpowiedz na jedno pytanie: **numer pozycji** (wypełniany jest następny wolny numer), ilość i notatka. Naciśnij {{key:Enter}}.
11. Umieść kolejne albo naciśnij {{key:Esc}}, aby przerwać.
12. Kliknij {{ui:Zapisz jako IFC}}, aby pobrać edytowaną kopię.

## Plan albo model

Przycisk umieszczania w Bibliotece zależy od widoku, w którym jesteś, i zmienia się od razu po zmianie widoku (przyciski {{ui:Plan}}, {{ui:Podziel}} i {{ui:3D}}, klawiatura, otwarcie pliku). Plan pokazuje jeden przycisk, {{ui:Umieść w planie}}; 3D pokazuje jeden przycisk, {{ui:Umieść w modelu}}; Podziel pokazuje przycisk podzielony z {{ui:Umieść w planie}} jako głównym działaniem i {{ui:Umieść w modelu}} w jego menu. Obie drogi używają tego samego paska umieszczania i zapisują ten sam element IFC: wskaźnik działa w widoku planu dla jednej, a w widoku 3D dla drugiej. Naciśnij {{key:Esc}} w dowolnym momencie, aby przerwać.

Przeciąganie karty nie ma własnego klawisza: przycisk podzielony albo zwykły przycisk wykonuje to samo z klawiaturą.

## Przesuń lub obróć umieszczony element

W {{ui:Rysuj}} wybierz element na planie. Pokazuje się kwadratowy uchwyt w punkcie wstawienia i okrągły uchwyt obok niego.

- Przeciągnij element albo jego kwadratowy uchwyt, aby go przesunąć. Przyciąga się jak narzędzie Ściana (końce i lica ścian); {{key:Shift}} utrzymuje go prostopadle do poprzedniego położenia.
- Przeciągnij okrągły uchwyt, aby go obrócić co 15°. Przytrzymaj {{key:Shift}}, aby krok wynosił 1°.
- Naciśnij {{key:R}}, aby obrócić o 90°.
- We **Właściwościach** (także w widoku 3D) wpisz **X**, **Y** i **Obrót (°)** albo kliknij **Obróć o 90°**.

Każde przesunięcie to jeden krok cofnięcia i jest przekazywane w Live TeamWork. Element zachowuje swój numer pozycji, dane z biblioteki i wysokość nad poziomem. Jeszcze nie zbudowano: przeciągania go w widoku 3D.

## Co powinieneś zobaczyć

- Element w modelu, zaznaczony, z właściwościami po prawej: pole **Element biblioteki** z licencją i atrybucją oraz zestawy `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` i, dla elementów z oznaczonych rysunków, `CadCraft_SourceAttributes`.
- „Umieszczono: *element* (element *n*)” na liście zmian. {{key:Mod+Z}} to cofa.
- Wiersz stanu: „Umieszczono *element* jako element *n*.”

## Dobrze wiedzieć

- Niektóre elementy mają kilka rozmiarów lub opcji: karta ma wtedy wybór **Wariant**, a umieszczony jest ten, który wybierzesz. Zobacz [Umieszczanie i wymiana elementu biblioteki z wariantami](topic:library-variants).
- Element bez bryły 3D (symbol 2D) jest umieszczany jako zastępcze pudełko; podajesz jego wysokość, gdy zostaniesz o nią zapytany.
- Więcej takich samych: wybierz umieszczony element i użyj {{ui:Kopiuj}} i {{ui:Wklej}} albo {{key:Mod+D}}. Zobacz [Kopiowanie, wklejanie i duplikowanie elementów biblioteki](topic:copy-paste).
- Aby każde umieszczenie zaczynało się od włączonego przyciągania do ściany, włącz **Zaczynaj z włączonym przyciąganiem do ściany** w [ustawieniach BimCraft](topic:settings).
- Długości są przeliczane na jednostki własne modelu, jakimkolwiek by były.
- **Entourage** (drzewa, krzewy, ludzie, samochody) też jest w bibliotece: szukaj „tree”, „person” albo „car”. Są rysowane przez CadCraft (CC0) i zachowują kolory po umieszczeniu (pień brązowy, liście zielone, szyby samochodu przezroczyste) w BimCraft i w innych programach BIM. Pojawiają się na [renderach](topic:render).
- W pliku IFC2X3 bryła jest zapisywana jako bryła ścięta; w IFC4 jako zbiór trójkątnych ścian. Oba otwierają się w innych narzędziach IFC.
- Rysunku (DWG lub DXF) nie da się tu zapisać, więc elementy są umieszczane tylko w modelach IFC. Użyj **Ten plik** na rysunku, aby zobaczyć, czym staną się jego bloki.

## Elementy w Twoim języku

Element może mieć nazwę, opis i typ w innych językach. Gdy ma je w języku ustawionym w BimCraft (Ustawienia › Ogólne › Język), strona elementu pokazuje te wersje, a pod nimi nazwę nadaną przez producenta, a **Umieść** zapisuje nazwę w Twoim języku w modelu, tak że zestawienie {{ui:Wyposażenie}} wyświetla ją w ten sposób. Element pozostaje tym samym elementem: sprawdzanie aktualizacji i wymiana dotyczą samego elementu, nigdy jego nazwy. Elementy bez tłumaczenia zachowują swoje słowa.

## Częste błędy

- **Brak przycisku umieszczania.** Nie jest otwarty żaden model IFC. Najpierw go otwórz.
- **Duch nie podąża za wskaźnikiem.** Wskaźnik jest poza obszarem modelu albo płaszczyzna kondygnacji jest poza widokiem. Kliknij {{ui:Góra}}.
- **{{ui:Przyciąganie do ściany}} mówi, że nie ma ścian.** Kondygnacja nie ma ścian w IFC (niektóre eksporty umieszczają ściany na innej kondygnacji). Wybierz tę kondygnację albo wpisz X i Y.
- **Elementy z pliku mają złą wielkość.** Plik nie ma jednostek albo podaje złe. W {{ui:Pliki…}} wybierz jednostki i odczytaj go ponownie.

:::tip
Umieszczenie tego samego elementu dwa razy dzieli jeden typ IFC, więc model z czterdziestoma krzesłami zapisuje krzesło tylko raz.
:::
