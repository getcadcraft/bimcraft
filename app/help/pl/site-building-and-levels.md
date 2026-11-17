---
title: Teren, budynek na nim i jego kondygnacje
summary: Narysuj kontur terenu, ustaw i obróć budynek na terenie, dodawaj poziomy o zadanych wysokościach lub podziel wysokość budynku oraz rysuj na wybranym poziomie.
keywords: teren, plan terenu, linia zabudowy, odsunięcie, służebność, prawo drogi, granica, granica działki, działka, parcela, granica, rozmieszczenie budynku, obrót budynku, ustawienie budynku, poziomy, kondygnacje, piętra, dodaj poziomy, podział wysokości, wysokość kondygnacji, IfcSite, IfcBuilding, IfcBuildingStorey, struktura przestrzenna
from: 48d10c1e
---

## Co zrobisz

Ustaw części modelu IFC, które zawierają resztę: teren, budynek na nim i kondygnacje budynku.

Model jest zorganizowany jako **teren**, który zawiera **budynek**, a ten zawiera swoje **poziomy** (kondygnacje); ściany, stropy i wszystko inne należą do poziomu. {{ui:Plik}} › {{ui:Nowy budynek}} ustawia wszystkie trzy. Model z innego programu, który ma budynek, ale nie ma terenu, dostaje teren przy pierwszym narysowaniu: budynek zostaje na nim tam, gdzie już był.

## Narysuj teren

1. Włącz {{ui:Rysuj}}, a potem wybierz {{ui:Kompilacja}} › {{ui:Teren}}.
2. Kliknij narożniki terenu (narzędzie przyciąga się jak narzędzie Ściana). Kliknij ponownie pierwszy narożnik, kliknij dwukrotnie lub naciśnij {{key:Enter}}, aby zakończyć. {{key:Backspace}} cofa narożnik.
3. Wiersz pokazuje pole terenu. Narysuj go ponownie, aby zmienić.

Rzut każdego poziomu pokazuje kontur terenu jako linię granicy działki.

## Umieść budynek na terenie

Przy włączonym {{ui:Teren}} wpisz **X** i **Y** budynku na terenie oraz jego **Obrót** w stopniach, albo kliknij {{ui:Umieść budynek kliknięciem}} i kliknij, gdzie ma być początek budynku. Wszystko w budynku (poziomy, ściany, siatki, cokolwiek narysowano) przesuwa się razem z nim; teren i jego kontur zostają. Rzuty dalej pokazują każdy poziom prostopadle do budynku.

## Linie zabudowy i służebności

Linie zabudowy i służebności (easements, prawa przejazdu) są rysowane na terenie jako ograniczenia. **Ostrzegają, nigdy nie blokują**: ściana nad jedną z nich jest rysowana tak, jak zażądano, a ostrzeżenie z nazwą ściany i linii lub służebności pojawia się w Problemach. Przesuń ścianę z powrotem, a ostrzeżenie znika. Ostrzeżenie można zaakceptować z podaniem powodu (np. odstępstwo udzielone przez urząd).

- **Linia zabudowy z odsunięć.** {{ui:Kompilacja}} › {{ui:Linia zabudowy}}, następnie {{ui:Odsunięcia}}: wpisz, jak daleko linia odstaje od każdej granicy terenu. Granice są ponumerowane na rzucie, gdy narzędzie jest włączone. Linia jest wyliczana z tych odległości i podąża za konturem terenu, jeśli narysujesz go ponownie z taką samą liczbą granic. Odległości podaje projektant, odczytane z aktu własności lub planu zagospodarowania; BimCraft nie wpisuje żadnej.
- **Narysowana linia zabudowy.** Przy włączonym {{ui:Linia zabudowy}} kliknij jej punkty i zakończ dwukrotnym kliknięciem lub {{key:Enter}}. Zakończ na pierwszym punkcie, aby uzyskać linię zamkniętą: obszar wewnątrz to miejsce, gdzie wolno budować, a ściana z jakąkolwiek częścią poza nim dostaje ostrzeżenie. Linia otwarta ostrzega tylko o ścianie, która ją przecina.
- **Służebność.** {{ui:Kompilacja}} › {{ui:Służebność}}: wybierz jej rodzaj, wpisz nazwę, oznaczenie w rejestrze i szerokość, a potem kliknij jej oś i zakończ (pas) albo zamknij ją na pierwszym punkcie (obszar). Ściana z jakąkolwiek częścią na niej dostaje ostrzeżenie, na każdym poziomie.
- Ściana leżąca dokładnie na linii dotyka jej, a nie przecina (tolerancja 1 mm).
- Aktualny wariant bryłowy każdej grupy wariantów jest sprawdzany tak samo jak ściany: bryła poza granicą, nad linią zabudowy lub na służebności dostaje ostrzeżenie. Zobacz [Warianty bryłowe obok siebie](topic:massing-options).
- Wybierz obiekt za pomocą {{ui:Zaznacz}}, aby zmienić jego nazwę, oznaczenie, rodzaj lub szerokość, przesunąć go albo usunąć.

Są rysowane na rzucie każdego poziomu, na arkuszach i w PDF rzutu: linie zabudowy kreskowane, służebności kropkowane, każda z etykietą. W pliku IFC każda jest adnotacją (IfcAnnotation, typ BuildingLine lub Servitude) na terenie, z linią jako zwykłą krzywą, którą mogą odczytać inne programy. Sprawdzenie używa rzeczywistego konturu każdej ściany na rzucie, z jej połączeniami tak, jak narysowano; ścianę krzywoliniową sprawdza się jej grubością wokół osi.

## Dodawanie poziomów

W panelu {{ui:Kondygnacje}}: {{ui:Dodaj poziom na górze}} dodaje jeden, a {{ui:Dodaj poziom poniżej}} dodaje jeden pod najniższym (piwnicę, na ujemnej rzędnej). {{ui:Dodaj poziomy…}} dodaje kilka naraz:

- **Na tych wysokościach**: wpisz wysokości powyżej najniższego poziomu, oddzielone przecinkami (np. `12', 24', 36'`). Wysokości, na których poziom już istnieje, są pomijane.
- **Podziel wysokość budynku**: wpisz wysokość budynku i liczbę poziomów. Istniejące poziomy przesuwają się na nowe wysokości od najniższego w górę, brakujące są dodawane, a te powyżej nich zostają na miejscu.

Ściany sięgające poziomu wyżej podążają za nim, tak jak słupy i rampy.

{{ui:Kopiuj ten poziom…}} (w tym samym panelu) kopiuje to, co narysowano na oglądanym poziomie, na inny poziom albo na nowy poziom na górze, dzięki czemu rzut piętra można przenieść w górę budynku jednym krokiem. Zobacz [Rysowanie ścian](topic:draw-walls).

## Rysowanie na poziomie

Każde narzędzie {{ui:Rysuj}} działa na poziomie wybranym na liście poziomów rzutu (albo wskazanym w panelu {{ui:Kondygnacje}}): to, co rysujesz, należy do tego poziomu.

## Czego się spodziewać

- Każda z tych zmian to jeden krok: {{key:Mod+Z}} cofa ją.
- W pliku IFC: teren (IfcSite) z konturem i polem, budynek (IfcBuilding) umieszczony na nim oraz poziomy (IfcBuildingStorey) w budynku.

Zobacz także [Współrzędne w BimCraft](topic:coordinates) dla początku projektu i punktu pomiarowego.
